import { useState,useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "./Alllisting.css";
import { useNavigate } from "react-router-dom";
export default function Alllisting(){
    const navigate= useNavigate();
    let [list,setList]=useState([]);
    let [err,setErr]=useState();
    // fetch function   
   async function fetch(){
    try{
        let response=await axios.get("http://localhost:5000/posts");
     setList(response.data);
    }
    catch(error){
        setErr(error.message);
    }
    }
    //  useEffect
    useEffect(()=>{
        fetch();
    },[]);

 async  function dlt(id){
  try{
     let response= await axios.delete(`http://localhost:5000/posts/${id}`);
     console.log(response);
     fetch();
     navigate("/");
    }catch(err){
      setErr(err.message);
    }

  }
    return(
        <>
          {err && (
        <div className="alert alert-warning" role="alert">
          {err}
        </div>
      )}
      <div className="listing">
         {list?.map((listItem) => (
             <Link to={`/listing/${listItem._id}`} key={listItem._id}>
        <div className="card col-4 listing"  style={{ width: "14rem" }}>
          <img className="card-img-top" src={listItem.image} />
          <div className="card-body">
            <h5 className="card-title">{listItem.author}</h5>
            <p className="card-text">{listItem.blog}</p>
            <button onClick={()=>dlt(listItem._id)} className="btn btn-danger">Delete</button>
            <Link to={`/update/${listItem._id}`}>Update</Link>
          </div>
          </div>
          </Link>
      ))}
        </div>
    </>
    );
}