import React from 'react'

export default function Navbar() {
  return (
    <section className="{styles.navbar}">
    <div class="container border-bottom border-secondary">







    <nav class="navbar navbar-expand-lg bg-transparent navbar-dark">
      <a class="navbar-brand fw-bolder fs-2" href="/">JEZH</a>
      <button class="navbar-toggler border-0 shadow-none outline-0 p-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-border-width text-white" viewBox="0 0 16 16">
<path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
</svg>
      
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item px-2 mx-1 dropdown">








<a type="button" class="nav-link fw-bold text-white fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
Products
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill ps-1" viewBox="0 0 16 16">
<path d="M7.247 11.14 2.451 5.658C1.88 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
</a>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-xl border-3 rounded-4 shadow">
<div class="modal-content rounded-4">
<div class="modal-header">
<h1 class="modal-title text-dark fs-5 fw-bolder" id="exampleModalLabel"><b>PRODUCTS</b></h1>
<button type="button" class="btn-close rounded-circle border border-black border-2 p-2" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<div class="row row-cols-1 row-cols-md-3 g-3">
<div class="col">
  <a href="" className="text-decoration-none">
  <div class="card rounded-4 h-100 border-0">
<div class="card-body rounded-3 bg-body">
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-kanban text-dark mb-2" viewBox="0 0 16 16">
<path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z"/>
<path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z"/>
</svg>
<h6 class="card-title fw-bolder"><b>Atoll HRMS SOFTWARE</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>
</div>
  </a>
</div>
<div class="col">
<a href="" className="text-decoration-none">
<div class="card rounded-4 h-100 border-0">
<div class="card-body rounded-3 bg-body">
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-clock-fill text-dark mb-2" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
</svg>
<h6 class="card-title fw-bolder"><b>TIME-TICK ATTENDANCE SYSYTEM</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>
</div>
</a>
</div>
<div class="col">
<a href="" className="text-decoration-none">
<div class="card rounded-4 h-100 border-0">
<div class="card-body rounded-3 bg-body">
<svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45" fill="currentColor" class="bi bi-cart-check-fill text-dark mb-2" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg>
<h6 class="card-title fw-bolder"><b>VENDOR MANAGEMENT SYSTEM</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>
</div>
</a>
</div>
<div class="col">
<a href="" className="text-decoration-none">
<div class="card rounded-4 h-100 border-0">
<div class="card-body rounded-3 bg-body">
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-truck-front-fill text-dark mb-2" viewBox="0 0 16 16">
<path d="M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2v-9A2.5 2.5 0 0 0 12.5 0h-9ZM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 .625-.562 1.092-1.17.994C10.925 7.747 9.208 7.5 8 7.5c-1.208 0-2.925.247-3.83.394A1.008 1.008 0 0 1 3 6.9V3Zm1 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-5-2h2a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2Z"/>
</svg>
<h6 class="card-title fw-bolder"><b>TRAKOON SCHOOL BUS SYSTEM</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>
</div>
</a>
</div>
<div class="col">
<a href="" className="text-decoration-none">
<div class="card rounded-4 h-100 border-0">
<div class="card-body rounded-3 bg-body">
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-car-front-fill text-dark mb-2" viewBox="0 0 16 16">
<path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
</svg>
<h6 class="card-title fw-bolder"><b>FLEET VECHICLE TRACKING</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>
</div>
</a>
</div>
<div class="col">
<a href="" className="text-decoration-none">
<div class="card rounded-4 h-100 border-0">
<div class="card-body rounded-3 bg-body">
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-building-fill-check text-dark mb-2" viewBox="0 0 16 16">
<path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
<path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.493 4.493 0 0 0 12.5 8a4.493 4.493 0 0 0-3.59 1.787A.498.498 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.476 4.476 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1V1Zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
</svg>
<h6 class="card-title fw-bolder"><b>ENTERPRISE RESOURCE PLANNING</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>


          </li>
          {/* <li class="nav-item px-2 mx-1 dropdown">








<a type="button" class="btn btn-transparent nav-link fw-bold text-white" data-bs-toggle="modal" data-bs-target="#exampleModal1">
Services
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill ps-1" viewBox="0 0 16 16">
<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
</a>


<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
<div class="modal-dialog modal-xl border-3 rounded-4 shadow">
<div class="modal-content rounded-4">
<div class="modal-header border-0 pe-3 pt-3 ps-0 pb-0">
<button type="button" class="btn-close text-white bg-white rounded-circle border border-secondary border-2 p-2" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body pt-0 mt-0">
<h1 class="modal-title text-dark fs-5 fw-bolder mb-3 border-bottom border-2" id="exampleModalLabel1"><b>DESIGN</b></h1>
<div class="row row-cols-1 row-cols-md-3 g-3">
<div class="col">
<div class="card rounded-4 h-100">
<div class="card-body rounded-3 border border-2 shadow">
<h6 class="card-title fw-bolder"><b>GRAPHIC DESIGNING</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional</p>
</div>
</div>
</div>
<div class="col">
<div class="card rounded-4 h-100">
<div class="card-body rounded-3 border border-2 shadow">
<h6 class="card-title fw-bolder"><b>UI/UX DESIGNING</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional</p>
</div>
</div>
</div>
</div>

<h1 class="modal-title text-dark fs-5 fw-bolder my-3 border-bottom border-2 " id="exampleModalLabel1"><b>DEVELOPMENT</b></h1>
<div class="row row-cols-1 row-cols-md-3 g-3">
<div class="col">
<div class="card rounded-4 h-100">
<div class="card-body rounded-3 border border-2 shadow">
<h6 class="card-title fw-bolder"><b>WEBSITE DEVELOPMENT</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional</p>
</div>
</div>
</div>
<div class="col">
<div class="card rounded-4 h-100">
<div class="card-body rounded-3 border border-2 shadow">
<h6 class="card-title fw-bolder"><b>APP DEVELOPMENT</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional</p>
</div>
</div>
</div>
<div class="col">
<div class="card rounded-4 h-100">
<div class="card-body rounded-3 border border-2 shadow">
<h6 class="card-title fw-bolder"><b>SOFTWARE DEVELOPMENT</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional</p>
</div>
</div>
</div>
<div class="col">
<div class="card rounded-4 h-100">
<div class="card-body rounded-3 border border-2 shadow">
<h6 class="card-title fw-bolder"><b>E-COMMERCE DEVELOPMENT</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional</p>
</div>
</div>
</div>
<div class="col">
<div class="card rounded-4 h-100">
<div class="card-body rounded-3 border border-2 shadow">
<h6 class="card-title fw-bolder"><b>AI & IoT RESEARCH</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional</p>
</div>
</div>
</div>
<div class="col">
<div class="card rounded-4 h-100">
<div class="card-body rounded-3 border border-2 shadow">
<h6 class="card-title fw-bolder"><b>HOSTING</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional</p>
</div>
</div>
</div>
</div>

<h1 class="modal-title text-dark fs-5 fw-bolder my-3 border-bottom border-2 " id="exampleModalLabel1"><b>MARKETING</b></h1>
<div class="row row-cols-1 row-cols-md-3 g-3">
<div class="col">
<div class="card rounded-4 h-100">
<div class="card-body rounded-3 border border-2 shadow">
<h6 class="card-title fw-bolder"><b>DIGITAL MARKETING</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional</p>
</div>
</div>
</div>
<div class="col">
<div class="card rounded-4 h-100">
<div class="card-body rounded-3 border border-2 shadow">
<h6 class="card-title fw-bolder"><b>IT SUPPORT</b></h6>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


          </li> */}
          <li class="nav-item px-2 mx-1 dropdown">
            <a class="nav-link fw-bold text-white dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul class="dropdown-menu rounded-4 p-2 bg-body">
            <div>
            <li>
              <a href="/design" class="dropdown-item fw-bold rounded-2">
                Design
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-up-right fw-bolder mb-1 ms-1" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>
              </a>
            </li>
            <hr class="dropdown-divider"/>
            <li>
              <a href="/development" class="dropdown-item fw-bold rounded-2">
                Development
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-up-right fw-bolder mb-1 ms-1" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>
              </a>
              </li>
            <hr class="dropdown-divider"/>
            <li>
              <a href="" class="dropdown-item fw-bold rounded-2">
                Marketing
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-up-right fw-bolder mb-1 ms-1" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>
              </a>
            </li>
            </div>
            </ul>
          </li>
          <li class="nav-item px-2 mx-1 dropdown">
            <a class="nav-link fw-bold text-white dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu rounded-4 p-2 bg-body">
            <div>
            <li>
              <a href="/about" class="dropdown-item fw-bold rounded-2">
                About Us 
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-up-right fw-bolder mb-1 ms-1" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>
              </a>
            </li>
            <hr class="dropdown-divider"/>
            <li>
              <a href="" class="dropdown-item fw-bold rounded-2">
                Blog
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-up-right fw-bolder mb-1 ms-1" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>
              </a>
              </li>
            <hr class="dropdown-divider"/>
            <li>
              <a href="" class="dropdown-item fw-bold rounded-2">
                Career
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-up-right fw-bolder mb-1 ms-1" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>
              </a>
            </li>
            </div>
            </ul>
          </li>
        </ul>

        <ul class="navbar-nav mx-end">
          <li class="nav-item">
            <a class="btn btn-light rounded-pill fw-bold px-4 fs-5" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
  </nav>
  </div>
</section>
  )
}

