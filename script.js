let menu =  document.querySelector('#menu-btn')
let navbar = document.querySelector('#navbar')

menu.onclick = () => {
  menu.classList.toggle('fa-x')
  menu.classList.remove("fa-bars");
  menu.classList.remove('fa-bars')
  
  console.log('active')
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}



var githubButton = document.getElementById('github');
    var linkedinButton = document.getElementById('linkedin');
    var twitterButton = document.getElementById('twitter');

    // Add click event listeners
    githubButton.addEventListener('click', function() {
      window.location.href = 'https://github.com/Karansi13';
    });

    linkedinButton.addEventListener('click', function() {
      window.location.href = 'https://www.linkedin.com/in/karan-singh-kalsi-589006255/';
    });

    twitterButton.addEventListener('click', function() {
      window.location.href = 'https://twitter.com/KaranSi03511382';
    });