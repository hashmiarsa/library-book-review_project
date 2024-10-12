
// function loadingAnimation() {
//     let tl = gsap.timeline();
//     tl.from(".loaderContent h1", {
//       y: 150,
//       opacity: 0,
//       duaration: 0.5,
//       delay: 1,
//       stagger: 0.2,
//     });
  
//     tl.from(".timer h2", {
//       opacity: 0,
//       onStart: function () {
//         let time = document.querySelector("#time");
//         let grow = 0;
//         setInterval(function () {
//           grow++;
//           if (grow <= 100) {
//             time.textContent = grow;
//           } else {
//             time.textContent = 100;
//           }
//         }, 20);
//       },
//     });
//     tl.from(".waiting h3", {
//       opacity: 0,
//       y: 150,
//       duaration: 0.5,
//     });
//     tl.to(".blink h2", {
//       opacity: 0,
//       duaration: 2,
//       animationName: "blinker",
//       duaration: 0.2,
//     });
  
//     tl.to("#loader .loaderContent h1, .timer h2, .waiting h3,.blink", {
//       opacity: 0,
//     //   delay: 1.2,
//       duration: 0.1,
//       stagger: 0.1,
//       // y:-1200
//     });
//     tl.to("#loader",{
//         opacity:0,
//         duration:0.2,
//         // delay:0
    
//     })
//     tl.from("#page1",{
//         y:1600,
//         opacity:0,
//         // delay:0.2,
//         ease:Power4,
//         duration:0.5
//     })
//     tl.to("#loader", {
//       display: "none",
//     });
//     tl.from(".heroContainer", {
//       y: 1200,
//       duration: 1,
//     });
  
//     tl.from("#main_nav", {
//       opacity: 0,
//       y: -100,
//     });
//     tl.from(".heroContent h2, .heroContent", {
//       y: 150,
//       opacity: 0,
//       // duaration : 0.1,
//       stagger: 0.1,
//     });
//   }
  
//   loadingAnimation();
  
function homePageTextAnimation(){
  var text=document.querySelector("#text");
gsap.from("#first_text h1",{
  y:150,
  opacity:0,
  delay:0.8,
  duration:0.5,
  stagger:0.25,
})
gsap.from("#sec_text h1",{
  y:150,
  opacity:0,
  delay:0.8,
  duration:0.5,
})
gsap.from("#para",{
  y:150,
  opacity:0,
  delay:1.3,
  duration:0.5,
})
gsap.from("#button",{
  y:150,
  opacity:0,
  delay:1.3,
  duration:0.5,
})

}
homePageTextAnimation()

function Page2scrollTriggerAnimation(){
  function Page2scrollTriggerAnimation() {
    gsap.from("#text_rec h1", {
        y: -150,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#page2",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
    });

    document.addEventListener("DOMContentLoaded", function () {
        gsap.from("#rec_upper h1", {
            y: -150,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#rec_upper",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        const recColsUpper = gsap.utils.toArray("#rec_upper .rec_col");
        recColsUpper.forEach((col, index) => {
            gsap.from(col, {
                y: 150,
                opacity: 0,
                duration: 0.5,
                delay: index * 0.1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: "#rec_upper",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    onEnter: () => gsap.to(col, { clearProps: "all" }),
                    onLeaveBack: () => gsap.to(col, { clearProps: "all" }),
                },
            });
        });

        gsap.from("#rec_lower h1", {
            y: -150,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#rec_lower",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        const recColsLower = gsap.utils.toArray("#rec_lower .rec_col");
        recColsLower.forEach((col, index) => {
            gsap.from(col, {
                y: 150,
                opacity: 0,
                duration: 0.5,
                delay: index * 0.1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: "#rec_lower",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    onEnter: () => gsap.to(col, { clearProps: "all" }),
                    onLeaveBack: () => gsap.to(col, { clearProps: "all" }),
                },
            });
        });
    });
}

Page2scrollTriggerAnimation();



}
Page2scrollTriggerAnimation()


// function borderPage2animation() {
//   document.addEventListener("DOMContentLoaded", () => {
//       const boxes = document.querySelectorAll('.rec_col'); 
//       const borderDiv = document.getElementById('borderDiv');

      
//       borderDiv.style.position = 'absolute';
//       borderDiv.style.border = '5px solid #fff';
//       borderDiv.style.pointerEvents = 'none'; 
//       borderDiv.style.opacity = 0; 
//       borderDiv.style.display = 'none'; 

     
//       boxes.forEach(box => {
//           box.addEventListener('mouseenter', () => {
             
//               const rect = box.getBoundingClientRect();

             
//               gsap.to(borderDiv, {
//                   duration: 0.9,
//                   width: rect.width,
//                   height: rect.height,
//                   top: (rect.top + window.scrollY) - (window.innerWidth * 0.48) - 5,
//                   left: rect.left + window.scrollX,
//                   ease: 'power3.out',
//                   borderColor: '#FF4411',
//                   opacity: 1, 
//                   onStart: () => {
//                       borderDiv.style.display = 'block'; 
//                   }
//               });
//           });

//           box.addEventListener('mouseleave', () => {
             
//               const rect = box.getBoundingClientRect();
//               const isOut = !(mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom);

//               if (isOut) {
       
//                   gsap.to(borderDiv, {
//                       duration: 0.5, 
//                       onComplete: () => {
//                           borderDiv.style.display = 'none'; 
//                       }
//                   });
//               }
//           });
//       });

    
//       let mouseX = 0;
//       let mouseY = 0;

//       document.addEventListener('mousemove', (e) => {
//           mouseX = e.clientX;
//           mouseY = e.clientY;
//       });
//   });
// }

// borderPage2animation();
function borderPage2animation(){
  document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.rec_col'); // Select each column in rec_box
    const borderDiv = document.getElementById('borderDiv');
  
    // Set borderDiv's initial style for smooth transitions
    borderDiv.style.position = 'absolute';
    borderDiv.style.border = '5px solid #fff';
    borderDiv.style.pointerEvents = 'none'; // Prevent borderDiv from interfering with hover events
  
    // Add event listeners to each box
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            // Get the current box's position and size
            const rect = box.getBoundingClientRect();
  
            // Show borderDiv and animate it to the hovered box's position and size
            gsap.to(borderDiv, {
                duration: 0.7, // Adjust the duration for smoother animation
                width: rect.width,
                height: rect.height,
                // top: rect.top + window.scrollY, // Adjust position considering scroll
                top: (rect.top + window.scrollY) - (window.innerWidth * 0.48)-1,
                left: rect.left + window.scrollX,
                ease: 'power3.out', // Use a smoother easing curve
                borderColor: '#FF4411',
                onStart: () => {
                    borderDiv.style.display = 'block'; // Show the div when animation starts
                }
            });
        });
  
        // Optional hover-out behavior, but we leave the border visible
        box.addEventListener('mouseleave', () => {
                
          });
    });
  });
  

}
borderPage2animation()


function bookFlipAnimation(){
const images = [
  { front: "#first_image_front", back: "#first_image_back", container: "#first_image" },
  { front: "#second_image_front", back: "#second_image_back", container: "#second_image" },
  { front: "#third_image_front", back: "#third_image_back", container: "#third_image" },
  { front: "#fourth_image_front", back: "#fourth_image_back", container: "#fourth_image" },
  { front: "#fifth_image_front", back: "#fifth_image_back", container: "#fifth_image" },
  { front: "#sixth_image_front", back: "#sixth_image_back", container: "#sixth_image" },
  { front: "#seventh_image_front", back: "#seventh_image_back", container: "#seventh_image" },
  { front: "#eighth_image_front", back: "#eighth_image_back", container: "#eighth_image" },
];


function setupImageHover(frontSelector, backSelector, containerSelector) {
  const imgFront = document.querySelector(frontSelector);
  const imgBack = document.querySelector(backSelector);
  const container = document.querySelector(containerSelector);
  const originalSrcFront = imgFront.src;
  const originalSrcBack = imgBack.src;

  container.addEventListener("mouseover", () => {
      imgFront.src = originalSrcBack; 
  });

  container.addEventListener("mouseout", () => {
      imgFront.src = originalSrcFront; 
      console.log("Mouse out event triggered");
  });
}


images.forEach(image => {
  setupImageHover(image.front, image.back, image.container);
});

}
bookFlipAnimation()




  

   





