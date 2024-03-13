var target = document.getElementById("header");
target.innerHTML += `<!--Navigation Bar Start-->
<nav  class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ICSAMY 2024</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="speakers.html">Speakers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="committee.html">Committee</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="registration.html">Registration</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="index.html#">Venue</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="program.html">Program</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="participants.html">Participants</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#sponsors">Sponsors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="abstract.html">Abstract</a>
          </li>
          <!--
          <li class="nav-item">
            <a class="nav-link" href="index.html#contact">Contact</a>
          </li>
          -->
          <li class="nav-item">
            <a class="nav-link" href="announcement.html">Announcement</a>
          </li>
          

          <!-- DropDown in Nav Bar Starts-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="index.html#abti">Indore</a></li>
              <li><a class="dropdown-item" href="index.html#abtiiti">IIT Indore</a></li>
              <li><a class="dropdown-item" href="index.html#abtdept">Department of Mathematics</a></li>
            </ul>
          </li> 
         <!-- DropDown in Nav Bar Starts-->

         <li class="nav-item">
             <a class="nav-link" href="gallery.html">Gallery</a>
          </li>
          
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
<!--Navigation Bar ends-->`

