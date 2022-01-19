import React, { useEffect, useState } from "react";

import "./guest.css";
import axios from "axios";
import "./page.css";
import { Link } from "react-router-dom";

export default function Guest() {
  const [album, setAlbum] = useState([]);
  const [total, setTotal] = useState(1);
  // const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(1);
  const [original, setOriginal] = useState([]);

  var pgsize = 5;
  const handleDeadline = async () => {
    const { data } = await axios.get(`http://localhost:2233/album/:_id/sort/?size=${pgsize}&page=${pageCount}`);
    console.log("datadata:",data)
     setAlbum(data.album);
  
  };

  const fetchdata = async () => {
    const res = await axios.get(
      `http://localhost:2233/album/?size=${pgsize}&page=${pageCount}`
    );
    const data = res.data.album;
    setAlbum(data);
    setOriginal(data);
    setTotal(res.data.totalPage);
  };

  const handlePageClick1 = () => {
    if (pageCount > 0) {
      const count = pageCount - 1;
      document.getElementById("btn").style.background = "white";
      setPageCount(count);
    }
    if (pageCount === 2) {
      document.getElementById("btn1").style.background = "black";
    }
    console.log(pageCount);
  };
  const handlePageClick = () => {
    if (pageCount < total) {
      const count = pageCount + 1;

      document.getElementById("btn1").style.background = "white";
      setPageCount(count);
    }
    if (pageCount === total - 1) {
      document.getElementById("btn").style.background = "black";
    }
    console.log(pageCount);
  };

  useEffect(() => {
    fetchdata();
  }, [pageCount]);
  
 
  const genrefilter = (e) => {
    console.log("orgi", original);
    setAlbum(original);

    var val = e.target.value;

    console.log("item", album);
    var arr = [];
    arr = album.filter((item) => item.Genre === val);
    console.log("ite", arr);

    setAlbum([...arr]);
    console.log("Afterfil", album);
  };

  return (
    <div style={{ marginTop: "9%" }}>
      <div>
        <h3>Filters</h3>
        <button onClick={handleDeadline}>Sort by Year</button>
        <div>
          Filter by Genre :
          <select
            onChange={genrefilter}
            name="Genre"
            id="genre"
            style={{ width: "10%", color: "black" }}
          >
            <option value="none">none</option>
            <option value="mass">mass</option>
            <option value="melody">melody</option>
            <option value="romantic">romantic</option>
            <option value="salsa">salsa</option>
          </select>
          {/* <button >Filter</button> */}
        </div>
      </div>
      {album.map((data) => (
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
                <p>Genre: {data.Genre}</p>
                <button>
                  <Link to={`/album/${data._id}`}>ALBUM</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button style={{marginTop:"9%"}} onClick={handlePageClick1} id="btn1">
        <Link to={`?size=${pgsize}&page=${pageCount}`} className="Songs">
          {" "}
          prev
        </Link>
      </button>
      &emsp;&emsp;<b>{pageCount}</b>&emsp;&emsp;
      <button style={{marginTop:"9%"}}  onClick={handlePageClick} id="btn">
        <Link to={`?size=${pgsize}&page=${pageCount }`} className="Songs">
          {" "}
          next
        </Link>
      </button>
    </div>
  );
}
