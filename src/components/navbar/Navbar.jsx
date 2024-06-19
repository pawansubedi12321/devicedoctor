import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/Navbar.css';
const Navbar = () => {
    const navigate=useNavigate();
    const username = localStorage.getItem('username');
    const category=()=>{
        navigate('/category');
    }
    const dashboard=()=>{
        navigate('/dashboard');
    }
    const booking=()=>{
      navigate('/booking');
    }
    const welcomeuser=localStorage.getItem('username');
  return (
    <div className='navbar'>
      <ul>
        <li className='user'>{welcomeuser}</li>
        <li>
          <div onClick={category} className='nav'>
          Category
          </div>
          </li>
        <li>
          <div onClick={dashboard} className='nav'>Dashboard</div></li>
        <li><div onClick={booking} className='nav'>Booking</div></li>

        <li className='designby'>design by pawan subedi and prashant lama</li>

      </ul>
        {/* <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{username}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
     
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active nav" aria-current="page" onClick={category}>Category</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav" onClick={dashboard}>Dashboard</a>
          </li>

          <li class="nav-item">
            <a class="nav-link nav" onClick={booking}>Booking</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav> */}
    </div>
  )
}

export default Navbar