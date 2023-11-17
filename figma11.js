function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  


  let popup = document.getElementById("location");



  function openPopup(){
      popup.classList.add("open-popup")
  }
  function closePopup(){
      popup.classList.remove("open-popup")
  }
  











// alert("hellow world");







// $(document).ready(function() {
//     $('.slider').owlCarousel({
//       items: 1, // Number of items to display at once
//       loop: true, // Infinite loop
//       autoplay: false, // Autoplay the slider
//       autoplayTimeout: 3000, // Autoplay interval in milliseconds
//       nav: true, // Display navigation arrows
//       dots: true, // Display navigation dots
//       responsive: {
//         0: {
//           items: 1
//         },
//         768: {
//           items: 1
//         },
//         1024: {
//           items: 1
//         }
//       }
//     });
//   });


  $('.HR-1').owlCarousel({
    loop:true,
    margin:10,
    autoplay:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});





$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})