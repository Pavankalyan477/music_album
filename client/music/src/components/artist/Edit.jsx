import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Edit() {
  let { id } = useParams();
  

  const [data, setData] = useState([]);
  const [song, setSongs] = useState([]);
  const fetchdata = async () => {
    const data1 = await axios.get(`http://localhost:2233/album/${id}`);
    console.log("data", data1.data.album.songs);

    setData(data1.data.album);
    setSongs(data1.data.album.songs);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div style={{ marginTop: "7%" }}>
      <div style={{ float: "left" }}>
        <img
          src={data.cover_image}
          alt="imge"
          style={{ width: "55%", height: "15%" }}
        />
        <div>Artist: {data.Artist} </div>
        <div>Genre: {data.Genre} </div>
        <div>Year: {data.year}</div>

        {song.map((item) => (
          <div
            key={item._id}
            style={{
              borderRadius: "50px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              width: "50%",
              margin: "auto",
            
              lineHeight: "1.5"
            }}
          >
            <div>
              SONG NAME: <strong>{item.name}</strong> <button>Download</button> <button>PLAY</button>{" "}
            </div>
            <div>{item.duration}</div>
          </div>
        ))}
        </div>
        {/* <div style={{ float: "left" }}>
          <h3>ARTIST SIGNIN HERE</h3>
          <button>
            <Link to="/signup">SIGNIN</Link>{" "}
          </button>
        </div> */}
      
    </div>
  );
}
