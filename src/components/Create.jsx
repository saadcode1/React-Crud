import { useState, } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create(){
  let [input,setInput]=useState({
    author:"",
    blog:"",
    image:"",
  })
  const navigate = useNavigate();
  let [err,setErr]=useState();

  function onEvent(e){
     setInput((prev)=>({...prev,[e.target.name]:e.target.value}));
     console.log(input);
  }
  async function handleForm(e) {
    try {
      e.preventDefault();
      let response = await axios.post("http://localhost:5000/posts", input);
      navigate("/");
    } catch (error) {
      if (error.response) {
        setErr(error.response.data.error); 
      } else {
        setErr("An unknown error occurred");
      }
      console.log(err);
    }
  }
     
   
 
    return(<form onSubmit={handleForm}>
      {err && <div className="alert alert-warning" role="alert">
       {err}
</div>}
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Author</label>
          <div className="col-sm-6">
            <input type="text" name="author" onChange={onEvent} placeholder="Email" className="form-control" id="staticEmail"/>
          </div>
        </div>
        <div className="form-group row">
          <label  className="col-sm-2 col-form-label">Blog</label>
          <div className="col-sm-6">
            <input type="text" name="blog" onChange={onEvent} className="form-control" id="inputPassword" placeholder="Blog"/>
          </div>
        </div>
        <div className="form-group row">
          <label  className="col-sm-2 col-form-label">Image</label>
          <div className="col-sm-6">
            <input type="text" name="image" onChange={onEvent} className="form-control" id="inputPassword" placeholder="Image"/>
          </div>
          <button className="btn btn-primary col-sm-4 mt-200">Submit</button>
     
        </div>
       
       
       
      </form>);
}