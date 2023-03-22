import React from 'react'
import "./All.css"

function All() {
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

    <main>
<div className="container">
<div class="left">
                <a href="" class="profile">
                    <div class="profile-photo">
                        <img src="/icons/img3.jpg" alt="" srcset="" />
                    </div>
                    <div class="handle">
                        <h4>Daniyal</h4>
                        <p class="text-muted">
                            @daniyal
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

                <div class="middle">

{/* <!-- STORIES --> */}
<div class="stories">
    <div class="story">
        <div class="profile-photo">
            <img src="/icons/fas3.jpg" alt="" srcset="" />
        </div>
        <p class="name">
            Saad
        </p>
    </div>

    <div class="story">
        <div class="profile-photo">
            <img src="/icons/fas4.jpg" alt="" srcset="" />
        </div>
        <p class="name">
            Faraz
        </p>
    </div>

    <div class="story">
        <div class="profile-photo">
            <img src="/icons/fas6.jpg" alt="" srcset="" />
        </div>
        <p class="name">
            Kashif
        </p>
    </div>

    <div class="story">
        <div class="profile-photo">
            <img src="/icons/fas8.jpg" alt="" srcset="" />
        </div>
        <p class="name">
            Faisal
        </p>
    </div>

    <div class="story">
        <div class="profile-photo">
            <img src="/icons/img3.jpg" alt="" srcset=""/>
        </div>
        <p class="name">
            Anjum
        </p>
    </div>
</div>

{/* <!-- End of Story --> */}

<form action="" class="create-post">
    <div class="profile-photo">
        <img src="/icons/fas7.jpg" alt="" srcset="" />
    </div>

    <input type="text" name="" id="create-post" placeholder="What's on your mind" />
    <input type="submit" value="POST" class="btn btn-primary" />
</form>

    {/* <!-- Feeds --> */}
<div class="feeds">

        {/* <!-- FEED --> */}
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="profile-photo">
                    <img src="/icons/img3.jpg" alt="" srcset="" />
                </div>
                <div class="ingo">
                    <h3>Babar</h3>
                    <small>Lahore, 10 Minutes ago</small>
                </div>
            </div>
            <span class="edit">
                <i class="uil uil-ellipsis-h"></i>
            </span>
        </div>

        <div class="photo">
            <img src="/icons/fas4.jpg" alt="" srcset="" />
        </div>

        <div class="action-button">
            <div class="interaction-buttons">
                <span><i class="uil uil-heart-sign"></i></span>
               <span><i class="uil uil-hipchat"></i></span> 
               <span><i class="uil uil-share-alt"></i></span> 
               <span><i class="uil uil-tag-alt"></i></span>

            </div>


            {/* <!-- <div class="bookmark">
                <i class="uil uil-tag-alt"></i>
            </div> --> */}
        </div>

        <div class="liked-by">
           <span><img src="/icons/img3.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/img7.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/fas3.jpg" alt="" srcset="" /></span> 
           <p>Liked by <b><i> Shaheen</i></b>, <b><i>Hassan</i> </b> & <b><i>1045 other</i> </b></p>

        </div>

    <div class="caption">
        <p> <b>Babar</b> Feeling  Awesome!!! <span class="harsh-tag">#Lifestyle</span> </p>
    </div>
    <div class="comments textmuted">
       <b> <i>View all 277 comments</i> </b> 
    </div>
</div>
                     {/* <!-- END OF FEED --> */}


                         {/* <!-- FEED --> */}
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="profile-photo">
                    <img src="/icons/img7.jpg" alt="" srcset="" />
                </div>
                <div class="ingo">
                    <h3>Raheel</h3>
                    <small>Okara, 33 Minutes ago</small>
                </div>
            </div>
            <span class="edit">
                <i class="uil uil-ellipsis-h"></i>
            </span>
        </div>

        <div class="photo">
            <img src="/icons/img7.jpg" alt="" srcset="" />
        </div>

        <div class="action-button">
            <div class="interaction-buttons">
                <span><i class="uil uil-heart-sign"></i></span>
               <span><i class="uil uil-hipchat"></i></span> 
               <span><i class="uil uil-share-alt"></i></span> 
               <span><i class="uil uil-tag-alt"></i></span>

            </div>


            {/* <!-- <div class="bookmark">
                <i class="uil uil-tag-alt"></i>
            </div> --> */}
        </div>

        <div class="liked-by">
           <span><img src="/icons/img7.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/fas3.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/fas4.jpg" alt="" srcset="" /></span> 
           <p>Liked by <b><i> Babar</i></b>, <b><i>Nazar</i> </b> & <b><i>4045 other</i> </b></p>

        </div>

    <div class="caption">
        <p> <b>Raheel</b> Feeling  Awesome!!! <span class="harsh-tag">#Lifestyle</span> </p>
    </div>
    <div class="comments textmuted">
       <b> <i>View all 1277 comments</i> </b> 
    </div>
</div>
                     {/* <!-- END OF FEED --> */}


                         {/* <!-- FEED --> */}
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="profile-photo">
                    <img src="/icons/img4.jpg" alt="" srcset="" />
                </div>
                <div class="ingo">
                    <h3>Nazmeen</h3>
                    <small>Town Ship, 42 minutes ago</small>
                </div>
            </div>
            <span class="edit">
                <i class="uil uil-ellipsis-h"></i>
            </span>
        </div>

        <div class="photo">
            <img src="/icons/fas7.jpg" alt="" srcset="" />
        </div>

        <div class="action-button">
            <div class="interaction-buttons">
                <span><i class="uil uil-heart-sign"></i></span>
               <span><i class="uil uil-hipchat"></i></span> 
               <span><i class="uil uil-share-alt"></i></span> 
               <span><i class="uil uil-tag-alt"></i></span>

            </div>


            {/* <!-- <div class="bookmark">
                <i class="uil uil-tag-alt"></i>
            </div> --> */}
        </div>

        <div class="liked-by">
           <span><img src="/icons/fas3.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/fas4.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/fas3.jpg" alt="" srcset="" /></span> 
           <p>Liked by <b><i> Hamza</i></b>, <b><i>Qasim</i> </b> & <b><i>5055 other</i> </b></p>

        </div>

    <div class="caption">
        <p> <b>Nazmeen</b> Feeling  Lovely!!! <span class="harsh-tag">#Lifestyle</span> </p>
    </div>
    <div class="comments textmuted">
       <b> <i>View all 1397 comments</i> </b> 
    </div>
</div>
                     {/* <!-- END OF FEED --> */}

                         {/* <!-- FEED --> */}
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="profile-photo">
                    <img src="/icons/img4.jpg" alt="" srcset="" />
                </div>
                <div class="ingo">
                    <h3>Faisal</h3>
                    <small>Muree, 1 Day ago</small>
                </div>
            </div>
            <span class="edit">
                <i class="uil uil-ellipsis-h"></i>
            </span>
        </div>

        <div class="photo">
            <img src="/icons/img4.jpg" alt="" srcset="" />
        </div>

        <div class="action-button">
            <div class="interaction-buttons">
                <span><i class="uil uil-heart-sign"></i></span>
               <span><i class="uil uil-hipchat"></i></span> 
               <span><i class="uil uil-share-alt"></i></span> 
               <span><i class="uil uil-tag-alt"></i></span>

            </div>


            {/* <!-- <div class="bookmark">
                <i class="uil uil-tag-alt"></i>
            </div> --> */}
        </div>

        <div class="liked-by">
           <span><img src="/icons/fas3.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/img7.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/fas7.jpg" alt="" srcset="" /></span> 
           <p>Liked by <b><i> Raheem</i></b>, <b><i>Rehan</i> </b> & <b><i>2065 other</i> </b></p>

        </div>

    <div class="caption">
        <p> <b>Faisal</b> Feeling  Joyful!!! <span class="harsh-tag">#Enjoying Life</span> </p>
    </div>
    <div class="comments textmuted">
       <b> <i>View all 577 comments</i> </b> 
    </div>
</div>
                     {/* <!-- END OF FEED -->    <!-- FEED --> */}
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="profile-photo">
                    <img src="/icons/fas7.jpg" alt="" srcset="" />
                </div>
                <div class="ingo">
                    <h3>Farhana</h3>
                    <small>Lahore, 10 Minutes ago</small>
                </div>
            </div>
            <span class="edit">
                <i class="uil uil-ellipsis-h"></i>
            </span>
        </div>

        <div class="photo">
            <img src="/icons/fas7.jpg" alt="" srcset="" />
        </div>

        <div class="action-button">
            <div class="interaction-buttons">
                <span><i class="uil uil-heart-sign"></i></span>
               <span><i class="uil uil-hipchat"></i></span> 
               <span><i class="uil uil-share-alt"></i></span> 
               <span><i class="uil uil-tag-alt"></i></span>

            </div>


            {/* <!-- <div class="bookmark">
                <i class="uil uil-tag-alt"></i>
            </div> --> */}
        </div>

        <div class="liked-by">
           <span><img src="/icons/fas3.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/fas4.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/fas7.jpg" alt="" srcset="" /></span> 
           <p>Liked by <b><i> Fariya</i></b>, <b><i>Mano</i> </b> & <b><i>1045 other</i> </b></p>

        </div>

    <div class="caption">
        <p> <b>Babar</b> Feeling  Awesome!!! <span class="harsh-tag">#Lifestyle</span> </p>
    </div>
    <div class="comments textmuted">
       <b> <i>View all 277 comments</i> </b> 
    </div>
</div>
                     {/* <!-- END OF FEED --> */}
                         {/* <!-- FEED --> */}
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="profile-photo">
                    <img src="/icons/fas2.jpg" alt="" srcset="" />
                </div>
                <div class="ingo">
                    <h3>Meera</h3>
                    <small>Lahore, 2 Days ago</small>
                </div>
            </div>
            <span class="edit">
                <i class="uil uil-ellipsis-h"></i>
            </span>
        </div>

        <div class="photo">
            <img src="/icons/fas2.jpg" alt="" srcset="" />
        </div>

        <div class="action-button">
            <div class="interaction-buttons">
                <span><i class="uil uil-heart-sign"></i></span>
               <span><i class="uil uil-hipchat"></i></span> 
               <span><i class="uil uil-share-alt"></i></span> 
               <span><i class="uil uil-tag-alt"></i></span>

            </div>


            {/* <!-- <div class="bookmark">
                <i class="uil uil-tag-alt"></i>
            </div> --> */}
        </div>

        <div class="liked-by">
           <span><img src="/icons/fas7.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/fas5.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/fas3.jpg" alt="" srcset="" /></span> 
           <p>Liked by <b><i> Hamza</i></b>, <b><i>Muzzamil</i> </b> & <b><i>1045 other</i> </b></p>

        </div>

    <div class="caption">
        <p> <b>Maahir</b> Feeling  Fantastic!!! <span class="harsh-tag">#MyLife</span> </p>
    </div>
    <div class="comments textmuted">
       <b> <i>View all 12277 comments</i> </b> 
    </div>
</div>
                     {/* <!-- END OF FEED -->
                         <!-- FEED --> */}
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="profile-photo">
                    <img src="/icons/fas6.jpg" alt="" srcset="" />
                </div>
                <div class="ingo">
                    <h3>Manahil</h3>
                    <small>Karachi, 3 days ago</small>
                </div>
            </div>
            <span class="edit">
                <i class="uil uil-ellipsis-h"></i>
            </span>
        </div>

        <div class="photo">
            <img src="/icons/fas6.jpg" alt="" srcset="" />
        </div>

        <div class="action-button">
            <div class="interaction-buttons">
                <span><i class="uil uil-heart-sign"></i></span>
               <span><i class="uil uil-hipchat"></i></span> 
               <span><i class="uil uil-share-alt"></i></span> 
               <span><i class="uil uil-tag-alt"></i></span>

            </div>


            {/* <!-- <div class="bookmark">
                <i class="uil uil-tag-alt"></i>
            </div> --> */}
        </div>

        <div class="liked-by">
           <span><img src="/icons/fas6.jpg" alt="" srcset="" /></span> 
           <span><img src="/icons/fas3.jpg" alt="" srcset="" /></span> 
           <span><img src="./icons/fas5.jpg" alt="" srcset="" /></span> 
           <p>Liked by <b><i> Hamza</i></b>, <b><i>Muzzamil</i> </b> & <b><i>1045 other</i> </b></p>

        </div>

    <div class="caption">
        <p> <b>Babar</b> Feeling  Awesome!!! <span class="harsh-tag">#Lifestyle</span> </p>
    </div>
    <div class="comments textmuted">
       <b> <i>View all 277 comments</i> </b> 
    </div>
</div>
                     {/* <!-- END OF FEED --> */}

</div>
</div>

    {/* <!-- END OF MIDDLE --> */}

    <div class="right">


                

<div class="messages">
    <div class="heading">
        <h3>Messages</h3><i class="uil uil-edit"></i>
    </div>
    {/* <!-- SEARCH BAR --> */}
    <div class="search-bar">
        <i class="uil uil-search"></i>
        <input type="search" name=" " id="message-search" placeholder="Search Messages" />
    </div>
                        {/* <!-- Message Category --> */}
        <div class="category">
            <h6>Primary</h6>
            <h6>General</h6>
            <h6 class="message-requests">Requests(2)</h6>
        </div>
                         {/* <!-- Message  --> */}
            <div class="message">
                <div class="profile-photo">
                    <img src="/icons/img4.jpg" alt="" srcset="" />
                </div>
                <div class="message-body">
                   <h5>Adam</h5>
                   <p class="text-muted">Good Morning </p>
               </div>
            </div>
                {/* <!-- Message EnD  --> */}


                              {/* <!-- Message  --> */}
            <div class="message">
                <div class="profile-photo">
                    <img src="/icons/img4.jpg" alt="" srcset="" />
                </div>
                <div class="message-body">
                   <h5>Faisal</h5>
                   <p class="text-muted">Good Morning </p>
               </div>
            </div>
                {/* <!-- Message EnD  --> */}


                              {/* <!-- Message  --> */}
            <div class="message">
                <div class="profile-photo">
                    <img src="/icons/img4.jpg" alt="" srcset="" />
                </div>
                <div class="message-body">
                   <h5>Daniyal</h5>
                   <p class="text-muted">Good Morning </p>
               </div>
            </div>
                {/* <!-- Message EnD  --> */}

                              {/* <!-- Message  --> */}
            <div class="message">
                <div class="profile-photo">
                    <img src="/icons/img4.jpg" alt="" srcset="" />
                </div>
                <div class="message-body">
                   <h5>Shahid</h5>
                   <p class="text-muted">Good Morning </p>
               </div>
            </div>
                {/* <!-- Message EnD  --> */}

                              {/* <!-- Message  --> */}
            <div class="message">
                <div class="profile-photo">
                    <img src="/icons/img4.jpg" alt="" srcset="" />
                </div>
                <div class="message-body">
                   <h5>Nadeem</h5>
                   <p class="text-muted">Good Morning </p>
               </div>
            </div>
                {/* <!-- Message EnD  --> */}

              


        </div>




        


                    {/* <!-- Friend Requests  --> */}

        <div class="friend-requests">
            <h4>Requests</h4>
            <div class="requests">
                <div class="info">
                    <div class="profile-photo">
                        <img src="/icons/fas2.jpg" alt="" srcset="" />
                    </div>
                    <div>
                        <h5>Sultan</h5>
                        <p class="text-muted">
                            8 mutual friends
                        </p>
                        <div class="actions">
                            <button type="submit" class="btn btn-primary">Accept</button>
                            <button type="submit" class="btn">Reject</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="requests">
                <div class="info">
                    <div class="profile-photo">
                        <img src="/icons/img4.jpg" alt="" srcset="" />
                    </div>
                    <div>
                        <h5>Sultan</h5>
                        <p class="text-muted">
                            8 mutual friends
                        </p>
                        <div class="actions">
                            <button type="submit" class="btn btn-primary">Accept</button>
                            <button type="submit" class="btn">Reject</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="requests">
                <div class="info">
                    <div class="profile-photo">
                        <img src="/icons/img4.jpg" alt="" srcset="" />
                    </div>
                    <div>
                        <h5>Sultan</h5>
                        <p class="text-muted">
                            8 mutual friends
                        </p>
                        <div class="actions">
                            <button type="submit" class="btn btn-primary">Accept</button>
                            <button type="submit" class="btn">Reject</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="requests">
                <div class="info">
                    <div class="profile-photo">
                        <img src="/icons/img4.jpg" alt="" srcset="" />
                    </div>
                    <div>
                        <h5>Sultan</h5>
                        <p class="text-muted">
                            8 mutual friends
                        </p>
                        <div class="actions">
                            <button type="submit" class="btn btn-primary">Accept</button>
                            <button type="submit" class="btn">Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


                               {/* <!-- Theme Customization --> */}


<div class="customize-theme">
    <div class="card">
        <h2>Customize Your View from Here</h2>
        <p class="text-muted">Manage Your Font size, Color, & Background.</p>

        {/* <!-- FONT SIZE --> */}
        <h4>Font Size</h4>
        <div>
            <h6>Aa</h6>
            <div class="choose-size">
                <span class="font-size-1"></span>
                <span class="font-size-2 active"></span>
                <span class="font-size-3"></span>
                <span class="font-size-4"></span>
                <span class="font-size-5"></span>
            </div>
            <h3>Aa</h3>
        </div>
    </div>

    {/* <!-- Primary Colors --> */}
    <div class="color">
        <h4>Color</h4>
        <div class="choose-color">
            <span class="color1 active"></span>
            <span class="color2"></span>
            <span class="color3"></span>
            <span class="color4"></span>
            <span class="color5"></span>
        </div>
    </div>

    {/* <!-- Background Colors --> */}
    <div class="background">
        <h4>Background</h4>
        <div class="choose-bg">
            <div class="bg-1">
                <span></span>
                <h5 for="bg-1" >Light</h5>
            </div>
            <div class="bg-2">
                <span></span>
                <h5>Dim</h5>
            </div>
        </div>
    </div>


</div>







































            </div>
            </main>

















      
    </div>
  )
}

export default All
