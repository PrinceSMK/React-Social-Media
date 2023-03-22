import React from 'react'
import "./Sidebar.css"
import Middle from './Middle'
import Right from './Right'

function Sidebar() {
  return (
    <div>

<main>
<div className="container">
<div class="left">
                <a href="" class="profile">
                    <div class="profile-photo">
                        <img src="/icons/img3.jpg" alt="" srcset="" />
                    </div>
                    <div class="handle">
                        <h4 className='namefield'>SMK</h4>
                        <p class="text-muted">
                            @SMK
                        </p>
                    </div>
                </a>

                {/* <!-- Sidebar --> */}
                <div class="sidebar">
                    <a  class="menu-item">
                        <span><i class="uil uil-apple"></i></span><h3>Home</h3>
                    </a>

                    <a href="" class="menu-item" >
                        <span><i class="uil uil-compass"></i></span><h3>Explore</h3>
                    </a>
                    <a  class="menu-item "id="notifications">
                        <span><i class="uil uil-bell" > <small class="notification-count">9+</small></i></span><h3>Notification</h3>
                        {/* <!-- Notification Popup --> */}
                        <div class="notifications-popup">
                           <div> 
                            <div class="profile-photo">
                            <img src="/icons/img3.jpg" alt="" srcset="" />
                            </div>
                            <div class="notification-body">
                                <b>Farhana</b> accepted your friend request
                                <small class="text-muted">8 HOURS AGO</small>
                            </div>
                        </div>

                        <div> 
                            <div class="profile-photo">
                            <img src="/icons/img4.jpg" alt="" srcset="" />
                            </div>
                            <div class="notification-body">
                                <b>Naeem</b> accepted your friend request
                                <small class="text-muted">12 HOURS AGO ago</small>
                            </div>
                        </div> <div> 
                            <div class="profile-photo">
                            <img src="/icons/fas4.jpg" alt="" srcset="" />
                            </div>
                            <div class="notification-body">
                                <b>Papa ki pari</b> accepted your friend request
                                <small class="text-muted">23 HOURS AGO</small>
                            </div>
                        </div> <div> 
                            <div class="profile-photo">
                            <img src="/icons/fas3.jpg" alt="" srcset="" />
                            </div>
                            <div class="notification-body">
                                <b>Munaza</b> accepted your friend request
                                <small class="text-muted">1 DAY AGO</small>
                            </div>
                        </div> <div> 
                            <div class="profile-photo">
                            <img src="/icons/fas8.jpg" alt="" srcset="" />
                            </div>
                            <div class="notification-body">
                                <b>Farhana</b> accepted your friend request
                                <small class="text-muted">2 DAYS AGO</small>
                            </div>
                        </div>

                        </div>
                    </a>
                    <a class="menu-item" id="messages-notifications">
                        <span><i class="uil uil-envelope"><small class="notification-count">6</small></i></span><h3>Message</h3>
                    </a>
                    <a href="" class="menu-item ">
                        <span><i class="uil uil-bookmark"></i></span><h3>Bookmarks</h3>
                    </a>
                    <a href="" class="menu-item ">
                        <span><i class="uil uil-chart-line"></i></span><h3>Analytics</h3>
                    </a>
                    <a class="menu-item" id="theme">
                        <span><i class="uil uil-palette"></i></span><h3>Theme</h3>
                    </a>
                    <a href="" class="menu-item ">
                        <span><i class="uil uil-setting"></i></span><h3>Setting</h3>
                    </a>
                </div>

                {/* <!-- END OF SIDEBAR --> */}
                <label for="create-post" class="btn btn-primary">CREATE POST</label>
            </div>
                {/* <!-- END OF LEFT --> */}


                <Middle />
                <Right />





            </div>
            </main>






      
    </div>
  )
}

export default Sidebar
