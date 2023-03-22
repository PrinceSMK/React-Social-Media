import React from 'react'

function Navbar() {
  return (
    <div>

<nav>
        <div className="container">
            <h2 className="log">FaceLOOK</h2>
            <div className="search-bar">
                <i className="uil uil-search"></i>
                <input type="search" name="" id="" placeholder="Search Here" />
            </div>
            <div className="create">
                <label className="btn btn-primary" for="create-post">Create Post </label>
                <div className="profile-photo">
                    <img src="./icons/img7.jpg" alt="" srcset="" />
                </div>
            </div>
        </div>
    </nav>



      
    </div>
  )
}

export default Navbar




