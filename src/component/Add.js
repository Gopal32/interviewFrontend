import React,{ useState} from "react";
import Api from '../services/api';

const Add = () => {

  const initialState = { id: null, firstName: "", lastName: "", phoneNo: "", applied: "", rating: ""};
  const [candidate, setCandidate] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const changeInput = event => {
    const { name, value } = event.target;
    setCandidate({ ...candidate, [name]: value });
  };

  const save = () => {
    var data = {
      firstName: candidate.firstName,
      lastName: candidate.lastName,
      phoneNo: candidate.phoneNo,
      applied: candidate.applied,
      rating: candidate.rating
    };

    Api.create(data).then(res => {
        setCandidate({
          id: res.data.id,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          phoneNo: res.data.phoneNo,
          applied: res.data.applied,
          rating: res.data.rating
        });
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCandidate = () => {
    setCandidate(initialState);
    setSubmitted(false);
  };

  return (
    <div className="add_form">
      {submitted ? (
        <div>
            <h4>You submitted successfully!</h4>
            <button onClick={newCandidate} className="btn btn-success" >Add</button>
        </div>
      ) : ( 
        <div>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  required
                  value={candidate.firstName}
                  onChange={changeInput}
                  name="firstName"
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  required
                  value={candidate.lastName}
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
                  value={candidate.phoneNo}
                  onChange={changeInput}
                  name="phoneNo"
                />
            </div>
            <div className="form-group">
                <label htmlFor="applied">Applied</label>
                <select className="form-control" id="applied" name="applied" value={candidate.applied} onChange={changeInput}>
                    <option value="Front End">Front End</option>
                    <option value="Back End">Back End</option>
                    <option value="Full Stack">Full Stack</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <select className="form-control" id="rating" name="rating" value={candidate.rating} onChange={changeInput}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button onClick={save} className="btn btn-success">Submit</button>
        </div>
      )}
    </div>
  );
};

export default Add;
