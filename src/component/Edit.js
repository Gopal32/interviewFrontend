import React, {useState, useEffect} from "react";
import Api from "../services/api";

const Edit = props => {

    const initialState = { id: null, firstName: "", lastName: "", phoneNo: "", applied: "", rating: ""};
    const [currentCandidate, setCurrentCandidate] = useState(initialState);
    const [message, setMessage] = useState("");

    const getCandidate = id => {
        Api.get(id).then(res => {
            setCurrentCandidate(res.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

  useEffect(() => {
      getCandidate(props.match.params.id);
  }, [props.match.params.id]);

  const changeInput = event => {
      const { name, value } = event.target;
      setCurrentCandidate({ ...currentCandidate, [name]: value });
  };

  const updateCandidate = () => {
      Api.update(currentCandidate.id, currentCandidate).then(res => {
          console.log(res.data);
          setMessage("Candidate was updated successfully!");
      })
      .catch(e => {
          console.log(e);
      });
  };

  const deleteCandidate = () => {
      Api.remove(currentCandidate.id).then(res => {
          props.history.push("/");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentCandidate ? (
        <div className="edit_form">
            <h4 className="mt-4">Edit Candidate</h4>
            <form>
                <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={currentCandidate.firstName}
                    onChange={changeInput}
                />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    required
                      value={currentCandidate.lastName}
                      onChange={changeInput}
                    name="lastName"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNo">phoneNo</label>
                    <input
                    type="text"
                    className="form-control"
                    id="phoneNo"
                    pattern="[7-9]{1}[0-9]{9}"
                    required
                      value={currentCandidate.phoneNo}
                      onChange={changeInput}
                    name="phoneNo"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="applied">Applied</label>
                    <select className="form-control" id="applied" name="applied" value={currentCandidate.applied} onChange={changeInput}>
                        <option value="Front End">Front End</option>
                        <option value="Back End">Back End</option>
                        <option value="Full Stack">Full Stack</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <select className="form-control" id="rating" name="rating" value={currentCandidate.rating} onChange={changeInput}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </form>
            <button className="badge badge-danger mr-2" onClick={deleteCandidate}>Delete</button>
            <button type="submit" onClick={updateCandidate} className="badge badge-success">Update</button>
            <p>{message}</p>
        </div>
      ) : ( 
        <div>
            <br />
            <p>Please click on a Candidate...</p>
        </div>
      )}
    </div>
  );
};

export default Edit;
