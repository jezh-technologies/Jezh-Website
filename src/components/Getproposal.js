import React, { use, useState } from 'react'

function Getproposal() {
  const[name,setname]=useState()
  const[mail,setmail]=useState()
  const[company,setcompany]=useState()
  const[phone,setphone]=useState()
  const[desc,setdesc]=useState()
  const[type,settype]=useState()

  return (
    
    <div className="">

      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h1><span class="navbar-brand text-black" style={{}}>JEZH</span></h1>
        <button type="button" class="btn-close rounded-circle border border-secondary p-3 mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
      <h1 class="display-1 text-black fw-bolder">Get in Touch</h1>
      <div class="container">
        <p class="lead text-black fs-3 fw-medium">Got a great project idea? Or want to transform your business?
Answer a few short questions and we'll get in touch with you!</p>
        <button class="btn btn-black btn-lg bg-black text-white fw-medium fs-3" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Get Started</button>
</div>
      </div>

    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header border-0">
      <h1><span class="navbar-brand text-black">JEZH</span></h1>

        <button type="button" class="btn-close rounded-circle border p-3 mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <figure>
  <blockquote class="blockquote">
    <p class="text-black lead fs-3 fw-medium">
"Kindly note that this form is only for submission of app development request for customers". In case you need to apply for a job please do not fill this form and email to us at <a class="text-decoration-none border-bottom border-primary" href="mailto:">careers@jezhtechnologies.com</a></p>
  </blockquote>
</figure>
<button class="btn btn-black btn-lg bg-black text-white fw-medium fs-4" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal">Start a Project</button>

      </div>

    </div>
  </div>
</div>


<div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel4" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header border-0">
      <h1><span class="navbar-brand text-black">JEZH</span></h1>
        <button type="button" class="btn-close rounded-circle border p-3 mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <figure>
  <blockquote class="blockquote">
    <p class="text-black fs-2 lead fw-bold">
    First up, what is your name? <span class="text-danger">*</span>
    <div class="mb-4 input-group-lg">
  <input type="text" onChange={(e)=>{setname(e.target.value)}} class="form-control rounded-0 border border-top-0 border-start-0 border-end-0 border-bottom-5 border-black shadow-none px-1 py-3" id="exampleFormControlInput1" placeholder="Type your answer here..."/>
</div>
    </p>
  </blockquote>
</figure>
<button class="btn btn-black btn-lg bg-black text-white fw-medium fs-5" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal">OK</button>

      </div>

    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel5" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header border-0">
      <h1><span class="navbar-brand text-black">JEZH</span></h1>
        <button type="button" class="btn-close rounded-circle border p-3 mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <figure>
  <blockquote class="blockquote">
    <p class="text-black fs-2 lead fw-bold">
    Great. Now what's your email ? <span class="text-danger">*</span>
    <div class="mb-4 input-group-lg">
  <input type="email" onChange={(e)=>{setmail(e.target.value)}}  class="form-control rounded-0 border border-top-0 border-start-0 border-end-0 border-bottom-5 border-black shadow-none px-1 py-3" id="exampleFormControlInput1" placeholder="Type your answer here..."/>
</div>
    </p>
  </blockquote>
</figure>
<button class="btn btn-black btn-lg bg-black text-white fw-medium fs-5" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal">OK</button>

      </div>

    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalToggle6" aria-hidden="true" aria-labelledby="exampleModalToggleLabel6" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header border-0">
      <h1><span class="navbar-brand text-black">JEZH</span></h1>
        <button type="button" class="btn-close rounded-circle border p-3 mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <figure>
  <blockquote class="blockquote">
    <p class="text-black fs-2 lead fw-bold">
    Super. Now what's your company name ? <span class="text-danger">*</span>
    <div class="mb-4 input-group-lg">
  <input type="text" onChange={(e)=>{setcompany(e.target.value)}}  class="form-control rounded-0 border border-top-0 border-start-0 border-end-0 border-bottom-5 border-black shadow-none px-1 py-3" id="exampleFormControlInput1" placeholder="Type your answer here..."/>
</div>
    </p>
  </blockquote>
</figure>
<button class="btn btn-black btn-lg bg-black text-white fw-medium fs-5" data-bs-target="#exampleModalToggle7" data-bs-toggle="modal">OK</button>

      </div>

    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalToggle7" aria-hidden="true" aria-labelledby="exampleModalToggleLabel7" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header border-0">
      <h1><span class="navbar-brand text-black">JEZH</span></h1>
        <button type="button" class="btn-close rounded-circle border p-3 mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <figure>
  <blockquote class="blockquote">
  <form>
  <div class="input-group">
    <input type="tel" class="form-control"/>
    <span class="input-group-addon">Tel</span>
  </div>
  <br/>
  <div class="input-group">
    <input type="tel" class="form-control"/>
    <span class="input-group-addon">Tel</span>
  </div>
</form>
    <p class="text-black fs-2 lead fw-bold">
    And your phone number (preferably with WhatsApp)? <span class="text-danger">*</span>
    <div class="mb-4 input-group-lg">
  <input type="number" onChange={(e)=>{setphone(e.target.value)}}  class="form-control rounded-0 border border-top-0 border-start-0 border-end-0 border-bottom-5 border-black shadow-none" id="exampleFormControlInput1" placeholder="Type your answer here..."/>
</div>
    </p>
  </blockquote>
</figure>
<button class="btn btn-black btn-lg bg-black text-white fw-medium fs-5" data-bs-target="#exampleModalToggle8" data-bs-toggle="modal">OK</button>

      </div>

    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalToggle8" aria-hidden="true" aria-labelledby="exampleModalToggleLabel8" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header border-0">
      <h1><span class="navbar-brand text-black">JEZH</span></h1>
        <button type="button" class="btn-close rounded-circle border p-3 mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <figure>
  <blockquote class="blockquote">
    <p class="text-black fs-2 lead fw-bold">
    Tell me one or two lines about your project? <span class="text-danger">*</span>
    <div class="mb-4 input-group-lg">
  <input type="text" onChange={(e)=>{setdesc(e.target.value)}}  class="form-control rounded-0 border border-top-0 border-start-0 border-end-0 border-bottom-5 border-black shadow-none px-1 py-3" id="exampleFormControlInput1" placeholder="Type your answer here..."/>
</div>
    </p>
  </blockquote>
</figure>
<button class="btn btn-black btn-lg bg-black text-white fw-medium fs-5" data-bs-target="#exampleModalToggle9" data-bs-toggle="modal">OK</button>

      </div>

    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalToggle9" aria-hidden="true" aria-labelledby="exampleModalToggleLabel9" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header border-0">
      <h1><span class="navbar-brand text-black">JEZH</span></h1>
        <button type="button" class="btn-close rounded-circle border p-3 mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <figure>
  <blockquote class="blockquote">
    <p class="text-black fs-2 lead fw-bold">
    What modules do you need for your project? <span class="text-danger">*</span>
    </p>
  </blockquote>
</figure>
    <div class="form-check input-group-lg">
  <input onChange={()=>{settype("web")}}  class="form-check-input input-lg" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label text-black" for="flexCheckDefault">
    Website
  </label>
</div>
<div class="form-check input-group-lg">
  <input onChange={()=>{settype("App-Android")}}   class="form-check-input input-lg" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label text-black" for="flexCheckDefault">
    Android Application
  </label>
</div>
<div class="form-check input-group-lg">
  <input onChange={()=>{settype("App-IOS")}}   class="form-check-input input-lg" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label text-black" for="flexCheckDefault">
    IOS Application
  </label>
</div>
<div class="form-check input-group-lg mb-4">
  <input onChange={()=>{settype("software")}}   class="form-check-input input-lg" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label text-black" for="flexCheckDefault">
    Software
  </label>
  
</div>



<button class="border-0 bg-transparent" data-bs-target="#exampleModalToggle10" data-bs-toggle="modal">
<a  data-action="open" href={`https://wa.me/919385722102?text=${encodeURIComponent(
`
Name : ${name}
E-mail : ${mail}
Company name: ${company}
Phone : ${phone}
Decription : ${desc}
Type : ${type}
`)}`}target="_blank"

 class="btn btn-black btn-lg bg-black text-white fw-medium fs-5" >OK</a>
</button>
      </div>

    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalToggle10" aria-hidden="true" aria-labelledby="exampleModalToggleLabel10" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header border-0">
      <h1><span class="navbar-brand text-black">JEZH</span></h1>
        <button type="button" class="btn-close rounded-circle border p-3 mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  <div class="blockquote text-black text-center">
    <h1 class="display-1 fw-bolder">Thank you for choosing us!</h1>
    <p class="lead fw-medium fs-3">We're thrilled that you've accepted our proposal. Looking forward to delivering outstanding results together!</p>
  </div>

      </div>

    </div>
  </div>
</div>
<button class="btn btn-light p-2 btn-lg fw-bolder mt-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
<span class="mt-2 p-3 fs-4">Get a Proposal</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-arrow-right bg-black text-white rounded-3 p-2 " viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
</button>

    </div>
  )
}

export default Getproposal