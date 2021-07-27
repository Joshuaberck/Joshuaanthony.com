<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joshua's website</title>
    <link rel="stylesheet" href="styles.css">
    <link 
    rel="stylesheet" 
    href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
   <nav class="navbar">
       <div class="navbar__container">
           <a href="/" id="navbar__logo">
            <i class="fas fa-gem"></i> NEXT</a>
        <div class="navbar__toggle" id="mobile-menu">
         <span class="bar"></span>   
         <span class="bar"></span>   
         <span class="bar"></span>   
        </div>
        <ul class="navbar__menu">
          <li class="navbar__item">
            <a href="/" class="navbar__links">Overview</a>  
          </li>
          <li class="navbar__item">
            <a href="/tech.html" class="navbar__links">Mylife</a>  
          </li>
          <li class="navbar__item">
            <a href="/" class="navbar__links">Bio</a>  
          </li>
          <li class="navbar__btn">
            <a href="/" class="button">9th grade</a>  
          </li>
        </ul>
       </div>
   </nav>

   <!-- Hero section -->
   <div class="main">
     <div class="main__container">
       <div class="main__content">
         <h1>NEXT GENERATION</h1>
         <h2>TECHNOLOGY</h2>
         <p>Se what makes us cool</p>
         <button class="main__btn"><a href="/">NEXT GENERATION</a></button>
       </div>
       <div class="main__img--container">
         <img src="images/pic1.svg" alt="pic" id="main__img">
       </div>
     </div>
   </div>

   <!-- Services Section -->
   <div class="services">
     <h1>Hello</h1>
     <div class="services__container">
       <div class="services__card">
         <h2>Text</h2>
         <p>Text</p>
         <button>Get Started</button>
       </div>
       <div class="services__card">
        <h2>Are you Ready?</h2>
        <p>Take the leap</p>
        <button>Get Started</button>
      </div>
     </div>
   </div>

   <!-- Footer Section -->
  <div class="footer__container">
    <div class="footer__links">
      <div class="footer__link--wrapper">
        <div class="footer__link--items">
          <h2>About me</h2>
          <a href="/"></a>
          <a href="/">Testimonials</a>
          <a href="/">Careers</a>
          <a href="/">Investments</a>
          <a href="/">Terms of Service</a>
        </div>
      </div>
    </div>
    <div class="social__media">
      <div class="social__media--wrap">
        <div class="footer__logo">
          <a href="/" id="footer__logo"><i class="fas fa-gem"></i>NEXT</a>
        </div>
        <p class="website__rights">NEXT 2020. All rights reserved</p>
        <div class="social__icons">
          <a href="/" class="social__icon--link" target="_blank">
          <i class="fab fa-facebook"></i>
          </a>
          <a href="/" class="social__icon--link" target="_blank">
              <i class="fab fa-instgram"></i>
            </a>
            <a href="/" class="social__icon--link" target="_blank">
            <i class="fab fa-twitter"></i>
            </a>
            <a href="/" class="social__icon--link" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="/" class="social__icon--link" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

   <script src="app.js"></script>
</body>
</html>
