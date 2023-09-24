const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')

        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop);

var className = "inverted";
var scrollTrigger = 20;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

// Get elements from the DOM
const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

// Select all 'q' elements
for(let i=0; i<q.length; i++){
    // Add click event to all 'q' elements
    q[i].addEventListener('click', ()=>{
        // Open the a 'element' with the same 'i' as the clicked 'q' element
        a[i].classList.toggle('a-opened');
        // Rotate the arr 'element' with the same 'i' as the clicked 'q' element
        arr[i].classList.toggle('arrow-rotated');
    });
};

var faq1 = document.getElementsByClassName("faq-box-question");
var i;
for (i = 0; i < faq1.length; i++) {
  faq1[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var body = this.nextElementSibling;
    if (body.style.maxHeight === "100px") {
      body.style.maxHeight = "0px";
    }
    else {
      body.style.maxHeight = "100px"
    }
  });
}

const scriptURL = 'https://script.google.com/macros/s/~/exec'
const form = document.forms['contact']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        msg.innerHTML = "Message Sent Successfully!";
        setTimeout(function () {
          msg.innerHTML = ""
        }, 5000)
        form.reset()
        window.location.href = "thank-you.html";
      } else {
        console.error('Error!', response.statusText);
      }
    })
    .catch(error => console.error('Error!', error.message));
});

function delayer() {
  setTimeout(downLoad, 1000)
}
function downLoad() {
  if (document.all) {
      document.all["preloader"].style.display = "none";
      document.all["layer2"].style.display = "block";
  } else if (document.getElementById) {
      node = document.getElementById("preloader").style.display = 'none';

      node = document.getElementById("layer2").style.visibility = 'visible';

  }
}