import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"

export default function Navbar() {
    const [display, setDisplay] = useState([]);
  var timerId;

  async function get(name) {
    var res = await fetch(`http://localhost:2233/album/artist/${name}`);
    var data = await res.json();
    console.log("darw",data)
    return data.item;
  }
  async function main() {
    let name = document.querySelector(".inp").value;
    let search = await get(name);
   

    if (search === undefined) {
      return false;
    }
   
    if (search.length !== 1) {
      let show = document.querySelector(".hate_you");
      show.style.display = "none";
    } else {
      let show = document.querySelector(".hate_you");
      show.style.display = "block";
      
      setDisplay(search);
    }
  }

  function debounce(func, delay) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func();
    }, delay);
  }
    return (
        <div className='navbar' >
            <div className='navbar_logo'>
                <img src="https://chillhop.com/wp-content/uploads/2018/12/Chillhop_music_black-1024x343.png" alt="music" />
            </div>
            <div className='navbar_search'>
                <input type="text" placeholder='Search by Song Name #Artist #Genre' className='inp' onChange={() => debounce(main, 1000)} />
                <div 
                className="hate_you"
                style={{
                  height: "200px",
                  width: "265px",
                  background: "white",
                  alignItems: "center",
                  border: "1px solid black",
                  padding: "5px",
                  margin: "auto",
                  display: "none",
                  position: "absolute",
                  top: "60px",
                  left: "765px",
                  overflow: "scroll",
                  zIndex: 1,
                }}>
                    {display.map((data)=>(
                        <div>
                        <div>{data.Artist}</div>
                        <button ><Link to={`/album/${data._id}`} >ALBUM</Link></button>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}
