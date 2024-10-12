const myDiv = document.getElementById('#nav');
window.addEventListener('scroll', () => {
    
    const pageHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    if (scrollY >= pageHeight) {
        myDiv.style.opacity = 0;  // Fade out when you reach page 2
    } else {
        myDiv.style.opacity = 1;  // Ensure opacity is 1 when on page 1
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.box1, .box2');
    const borderDiv = document.getElementById('borderDiv');

    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            // Show border div and animate it to the hovered box's position
            const rect = box.getBoundingClientRect();
            borderDiv.style.display = 'block';

            gsap.to(borderDiv, {
                duration: 0.3,
                width: rect.width,
                height: rect.height,
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
                ease: 'power1.out'
            });
        });

        box.addEventListener('mouseleave', () => {
            // Keep border visible, no hiding on leave
        });
    });
});
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const text = item.innerText;
    const newText = document.createElement('div');
    newText.innerText = text;
    newText.classList.add('new-text');
    item.appendChild(newText);
    
    // Animate the outgoing text
    gsap.to(item, { 
      duration: 0.3, 
      y: -20, 
      onComplete: () => {
        item.removeChild(item.childNodes[0]);
      } 
    });
    
    // Animate the incoming text
    gsap.set(newText, { y: 20, opacity: 0 });
    gsap.to(newText, { 
      duration: 0.3, 
      y: 0, 
      opacity: 1 
    });
  });
  
  item.addEventListener('mouseleave', () => {
    const text = item.querySelector('.new-text');
    if (text) {
      // Animate the outgoing new text
      gsap.to(text, { 
        duration: 0.3, 
        y: 20, 
        opacity: 0, 
        onComplete: () => {
          item.removeChild(text);
        } 
      });
      
      // Animate the original text coming back
      gsap.to(item, { 
        duration: 0.3, 
        y: 0 
      });
    }
  });
});

// -------------------script for div -------------------//
const centeredDiv = document.querySelector('.centered-div');
const upperDiv = document.querySelector('.upper-div');
const lowerDiv = document.querySelector('.lower-div');

// Function to move the green div up and yellow div into view on hover
centeredDiv.addEventListener('mouseenter', () => {
    upperDiv.style.transform = 'translateY(-100%)'; // Move green div up
    lowerDiv.style.transform = 'translateY(-100%)'; // Move yellow div into green div's position
});

// Function to reset the position when hover is removed
centeredDiv.addEventListener('mouseleave', () => {
    upperDiv.style.transform = 'translateY(0)'; // Move green div back
    lowerDiv.style.transform = 'translateY(0)'; // Move yellow div back to its original position
});

