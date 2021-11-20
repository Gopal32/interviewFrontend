import React, {useEffect, useState} from "react";
import Api from "../services/api";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

const Candidates = () => {

  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    retrieveCandidates();
  }, []);

  const retrieveCandidates = () => {
    Api.getAll().then(res => {
        setCandidate(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list_data">
        <div className="col-md-8">
            <h4 className="mt-5">Candidates List</h4>
        </div>
        <div className="container-fluid">
            <div className='row'>
                <div className='col-12 mx-auto'>
                    <div className="row gy-2">
                        {candidate.map((value, index) => (
                        <div className="col-md-4 col-10 mx-auto mt-3" key={index}>
                            <div className="card" style={{width: "19rem"}}>
                                <div className="card-body">
                                    <h3 className="card-title font-weight-bold text-muted">Applied : <span className="text-dark float-right mt-1"><h4>{value.applied}</h4></span></h3>
                                    <h5 className="card-text font-weight-bold">First Name : {value.firstName}</h5>
                                    <h5 className="card-text font-weight-bold">Last Name : {value.lastName}</h5>
                                    <h6 className="card-text font-weight">Phone No : {value.phoneNo}</h6>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={value.rating} precision={0.5} readOnly />
                                    </Stack>
                                    <Link to={"/edit/" + value.id} className="badge badge-danger">Edit</Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Candidates;
