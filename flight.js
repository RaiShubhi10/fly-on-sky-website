 const loginForm = document.getElementById('login-form');
 const logoutForm = document.getElementById('logout-form');
 const usernameInput = document.getElementById('username');
 const loginBtn = document.getElementById('login-btn');
 const logoutBtn = document.getElementById('logout-btn');
 const welcomeMessage = document.getElementById('welcome-message');
 const userDisplay= document.getElementById('user-display');

 window.onload=()=>{
  const loggedInUser = localStorage.getItem('username');
  if(loggedInUser){
    showLogoutForm(loggedInUser);
  }else{
    showLoginForm();
  }
 };

  loginBtn.addEventListener('click',()=>{
      const username = usernameInput.ariaValueMax.trim();
      if(username){
        localStorage.setItem('username', username);
        showLogoutForm(username);
      }else{
        alert('Please enter a a username');
      }
  })

  logoutBtn.addEventListener('click',()=>{
    localStorage.removeItem('username');
    showLoginForm();
  });

  function showLoginForm(){
    welcomeMessage.textContent = 'Welcome!';
    loginForm.style.display = 'block';
    logoutForm.style.display = 'none';
  }

  function showLogoutForm(username){
    welcomeMessage.textContent = Welcome,${username};
    userDisplay.textContent = username;
    loginForm.style.display = 'none';
    logoutForm.style.display = 'block';
  }


VANTA.CLOUDS({
  el: "#van",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00
})


var swiper = new Swiper(".mySwiper", {
 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });