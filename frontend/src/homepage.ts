import {html, render} from "lit-html"

const tableTemplate = html`
<!DOCTYPE html>
<!-- Coding by CodingLab | www.codinglabweb.com-->
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../homepageStyle.css">
   </head>
<body>
  <nav>
    <div class="navbar">
      <div class="logo"><a href="#">BeACook</a></div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Recipe List</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="appearance">
      </div>
    </div>
  </nav>

  <section class="home-content">
    <div class="texts">
      <h2 class="text">Customize Your Website </h2>
      <h3 class="text">With a Beautiful Colours...</h3>
      <p>Lorem ipsum dolor sited and ametvel, nobised, minimali! Quibusdam temporibus, placeate reessed veritatis optio aliquam illum debitis at, perspiciatis consequatur iure vel, quae ratione. Praesentium, at.</p>
      <div class="button">
      <a href="#">Zur Rezept-Liste gelangen
      <i class="fas fa-location-arrow"></i></a>
    </div>
  </section>
</html>
`