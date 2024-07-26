function locoScroll(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smoo#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




}

locoScroll()





















// function cursorEffect(){
//   var cursor = document.querySelector('#cursor');
//   var page1Content = document.querySelector('#page1-content');

//   page1Content.addEventListener("mousemove", (dets)=>{
//     gsap.to(cursor,{
//       x:dets.x ,
//       y:dets.y,
//     })
//   })


//   page1Content.addEventListener("mouseenter", ()=>{
//     gsap.to(cursor,{
//       scale:1,
//       opacity:1,
//     })

//   });
//   page1Content.addEventListener("mouseleave", ()=>{
//     gsap.to(cursor,{
//       scale:0,
//       opacity:0,
//     })

//   })
// }


function breakTheText(){


  var h1 = document.querySelector("#page2 .elem h1")
  var h1Text = h1.textContent

  var splittedText = h1Text.split("")
  // var halfValue = Math.floor(splittedText.length/2)
  var clutter = ""

  splittedText.forEach(function(elem,idx){
  // if(idx<halfValue){
  // clutter += `<span class = "firstHalf">${elem}</span>`
  // }else{
  // clutter += `<span class = "secondHalf">${elem}</span>`
  // }

clutter += `<span class="splitted">${elem}</span>`


  })

  h1.innerHTML = clutter

  }


function page2Animation(){

gsap.from(".elem h1",{
  y:120,
  stagger:0.2,
  duration:1,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 40%",
    end:"top 32%",
    // markers:true,
    scrub:2

  }
})
}


breakTheText();
page2Animation();



// gsap.from("#main #page1 h1 ",{
//   y:120,
//   stagger:0.2,
//   duration:1,
//   scrollTrigger:{
//     trigger:"#page2",
//     scroller:"body",
//     start:"top 47%",
//     end:"top 46%",
//     // markers:true,
//     scrub:2
// }})







// new day starts form here
function newCursorEffect(){

  var main = document.querySelector("#main")
  var cursor = document.querySelector("#cursor")
  var image = document.querySelector("#page1-content")



  main.addEventListener("mousemove", function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:0.6,
    ease: "power4.out",

  })
  }
  )

  image.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More";
    gsap.to(cursor,{
      scale:4,
      backgroundColor:"#ffffff8a"

      // duration:0.5,
      // ease: "power4.out",
    })
  })

  image.addEventListener("mouseleave",function(){
    cursor.innerHTML = "";
    gsap.to(cursor,{
      scale:1,
       backgroundColor:"white"
      // duration:0.5,
      // ease: "power4.out",
    })
  })
}










newCursorEffect();





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});






















































































