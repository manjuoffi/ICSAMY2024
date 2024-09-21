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
          <!-- DropDown in Nav Bar Starts-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Registration
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="registration.html#regFeedd">Registration fee details</a></li>
              <li><a class="dropdown-item" href="registration.html#accommodation">Accommodation</a></li>
              <li><a class="dropdown-item" href="registration.html#travelSupport">Travel Support for students/postdocs</a></li>
              <li><a class="dropdown-item" href="registration.html#PaymentMethods">Payment Details</a></li>
              <li><a class="dropdown-item" href="registration.html#registration">Registration form</a></li>
            </ul>
          </li> 
         <!-- DropDown in Nav Bar Starts-->
          
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
        
        <div class="announcement-container">
          <marquee behavior="scroll" direction="left" scrollamount="6">
            <ol class="announcement-list">
            <li>Accommodation for all students and postdoctoral researchers will be provided on a shared basis in the campus student hostel. The organizers will cover their accommodation charges</li>
             <li> Registration for ICSAMY 2024 is open now. Click on the registration tab.</li>
              <li> You can submit abstract of your talk now. Click on the abstract tab.</li>
            </ol>
          </marquee>
        </div>

      </div>
    </div>
  </nav>
<!--Navigation Bar ends-->`