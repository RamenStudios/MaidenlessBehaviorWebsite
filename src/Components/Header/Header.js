import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

// this file will contain the main navbar header
// just exports the navbar
// does not change from page to page
export function Header()
{
  // does the little logo animation
  const mouseoverWaggle = (id) =>{
    let element = document.getElementById(id);
    let style = getComputedStyle(element); //get style
    element.style = style; //make style editable
    console.log(element.style.animationPlayState);
    element.style.animationPlayState = 'running';
    /* ensures that while the animation can be played an infinite number of times, it doesn't loop independently */
    element.addEventListener('animationiteration', function(){element.style.animationPlayState = 'paused';});
    /* plays animation iteration on mouseover */
    element.addEventListener('mouseover', function(){element.style.animationPlayState = 'running';});
  }
  return (
    <header>
      {/* collects jquery */}
      <script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"
      ></script>
      {/* collects all the Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      ></script>
      {/* navbar! */}
      <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary mb-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            {/* image goes here, normally */}
            <img
              src="https://external-preview.redd.it/MP9utSRDTJDOyq77VarXx3fQiEok_fx1pZ_D0ikX_a4.png?format=pjpg&auto=webp&s=465237a4c41c6cba0f22fffeca32ea6471f066b0"
              alt="Logo"
              width="28"
              height="23"
              class="d-inline-block align-text-top waggle-bounce-move"
              id="logo"
              onClick={()=>mouseoverWaggle("logo")}
            />
            Maidenless Behavior
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarItems"
            aria-controls="navbarItems"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarItems">
            <ul class="navbar-nav navbar-nav-scroll me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/"
                  >
                    Home
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/team"
                  >
                    The Team
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/devlog"
                  >
                    Devlog
                </a>
              </li>

               <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact/Contribute
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="https://discord.gg/xHcqBwKeas" target="_blank">Discord</a></li>
                  <li><a class="dropdown-item" href="https://github.com/darien-v/HumanResources-WIP" target="_blank">Github</a></li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  );
}