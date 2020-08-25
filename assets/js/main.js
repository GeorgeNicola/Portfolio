
let overflow = document.querySelectorAll(".project-overlay");
for(let i=0; i<overflow.length; i++)
  overflow[i].style.display='none';
//Ascunde elementele cardurilor din sectiunea portfolio

$( document ).ready(function() {
//jQuery

  $('.portfolio-card').hover(function(){
    $(this).children('.project-overlay').slideDown();
    $(this).children('.project-overlay').children(".project-overlay__languages").delay(300).fadeIn(300);
  }, function(){
    $(this).children('.project-overlay').children(".project-overlay__languages").fadeOut(300);
    $(this).children('.project-overlay').delay(300).slideUp();
  });
  //Functionality for Portfolio Section's cards


  $(function(){
    $(".twentytwenty-container").twentytwenty({default_offset_pct: 0.7});
  });
  //TwentyTwenty

  $('#services-section').parallax({imageSrc: 'assets/img/parallax1.PNG'});
  //Parallax Effect


});




function currentScrollPercentage()
{
    return ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
}//Returns the current Scroll Percentage


function menuScrollSelect(current){
  let li = document.querySelectorAll("#menu .scroll");
  for(let i=0;i<li.length;i++)
    if(i === current)
       li[i].classList.add("menu-selected-scrolling");
    else
       li[i].classList.remove("menu-selected-scrolling");    
}//Select the current menu element


window.addEventListener("scroll", function(){
  let scroll = currentScrollPercentage();
  //console.log(scroll);
  if(scroll > 0 && scroll <= 25) menuScrollSelect(0);
  if(scroll > 25 && scroll <= 60) menuScrollSelect(1);
  if(scroll > 60 && scroll <= 85) menuScrollSelect(2);
  if(scroll > 85 && scroll <= 100) menuScrollSelect(3);
})//Select Menu Element Listener









