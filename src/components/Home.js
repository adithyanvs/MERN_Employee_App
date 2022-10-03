import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async (e) => {
    // e.preventDefault();

    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  }

  useEffect(()=>{
    getdata()
  },[])

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/register" className="btn btn-primary">
            Add Data
          </NavLink>
        </div>

        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">age</th>
              <th scope="col">profession</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
           {
            getuserdata.map((element,id)=>{
              return(
                <>
                <tr>
              <th scope="row">{id + 1}</th>
              <td>{element.name}</td>
              <td>{element.age}</td>
              <td>{element.profession}</td>
              <td className="d-flex justify-content-between ">
                <button className="btn btn-success">
                  <RemoveRedEyeIcon />
                </button>
                <button className="btn btn-primary">
                  <CreateIcon />
                </button>
                <button className="btn btn-danger">
                  <DeleteOutlineIcon />
                </button>
              </td>
            </tr>

                </>
              )
            })
           }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
