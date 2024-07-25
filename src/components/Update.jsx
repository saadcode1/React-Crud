import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Read() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState({});
  const [err, setErr] = useState();
  const [input, setInput] = useState({
    author: "",
    blog: "",
    image: "",
  });

  async function fetchListing() {
    try {
      const response = await axios.get(`http://localhost:5000/posts/${id}`);
      setListing(response.data);
    } catch (error) {
      setErr(error.message);
    }
  }

  function onEvent(e) {
    setInput((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  }

  async function handleForm(e) {
    try{
    console.log("client side running")
    e.preventDefault();
    let response = await axios.patch(`http://localhost:5000/update/${id}`, input);
    console.log("updated data", response.data)
    navigate("/");}
    catch(err){
        setErr(err.message);
    }
  }

  useEffect(() => {
    fetchListing();
  }, [id]);

  useEffect(() => {
    if (listing) {
      setInput({
        author: listing.author,
        blog: listing.blog,
        image: listing.image,
      });
    }
  }, [listing]);

  return (
    <form onSubmit={handleForm}>
      {err && <div className="alert alert-warning" role="alert">
        {err}
      </div>}
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Author</label>
        <div className="col-sm-6">
          <input type="text" name="author" value={input.author} onChange={onEvent} placeholder="Email" className="form-control" id="staticEmail" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Blog</label>
        <div className="col-sm-6">
          <input type="text" name="blog" value={input.blog} onChange={onEvent} className="form-control" id="inputPassword" placeholder="Blog" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Image</label>
        <div className="col-sm-6">
          <input type="text" name="image" value={input.image} onChange={onEvent} className="form-control" id="inputPassword" placeholder="Image" />
        </div>
        <button className="btn btn-primary col-sm-4 mt-200">Submit</button>
      </div>
    </form>
  );
}