import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Read() {
  const { id } = useParams();
  const [listing, setListing] = useState({});
  const [err, setErr] = useState();

  async function fetchListing() {
    try {
      const response = await axios.get(`http://localhost:5000/posts/${id}`);
      setListing(response.data);
    } catch (error) {
      setErr(error.message);
    }
  }

  useEffect(() => {
    fetchListing();
  }, [id]);

  return (
    <div>
      {err && (
        <div className="alert alert-warning" role="alert">
          {err}
        </div>
      )}
      <h1>{listing.author}</h1>
      <p>{listing.blog}</p>
      <img style={{height:"80vh",width:"80vw"}} src={listing.image} alt={listing.author} />
    </div>
  );
}