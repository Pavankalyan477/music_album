import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./guest.css";
import axios from "axios";
import "./page.css";
import { Link } from "react-router-dom";

export default function Guest() {
  const [album, setAlbum] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  const handleDeadline = async() => {
    const {data} = await axios.get("http://localhost:2233/album/sortbyyear");
    setAlbum(data.contest);
}

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:2233/album");
    const data = res.data.album;
    // setAlbum(data.data.album);
    const slice = data.slice(offset, offset + perPage);
    console.log("slice", slice);

    const postData = slice.map((data) => (
      <div key={data._id} className="disp">
        <div className="album">
          <div className="album_cover">
            <img src={data.cover_image} alt="album" />
          </div>
          <div className="album_info">
            <div className="album_info_logo">
              <img cl src={data.logo_image} alt="artist" />
            </div>
            <div className="album_info_data">
              <h3>{data.Artist}</h3>
              <div>Published on: {data.year}</div>
              <div>Total Songs: {data.songs.length}</div> 
              <button ><Link to={`/album/${data._id}`} >ALBUM</Link></button>
            </div>
          </div>
        </div>
      </div>
    ));
   
    setAlbum(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    fetchdata();
  }, [offset]);

  return (
    <div style={{ marginTop: "9%" }}>
      <div>
        <h3>Filters</h3>
        <button onClick={handleDeadline} >Sort by Year</button>
        <button>Filter by Genre</button>
      </div>
     
      <div className="App">
        {album}
        <br />
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}
