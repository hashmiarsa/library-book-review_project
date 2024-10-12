document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.box1, .box2');
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
                duration: 0.5, // Adjust the duration for smoother animation
                width: rect.width,
                height: rect.height,
                top: rect.top + window.scrollY, // Adjust position considering scroll
                left: rect.left + window.scrollX,
                ease: 'power3.out', // Use a smoother easing curve
                borderColor: 'white',
                onStart: () => {
                    borderDiv.style.display = 'block'; // Show the div when animation starts
                }
            });
        });

        // Keep the border visible on leave and don't hide it
        box.addEventListener('mouseleave', () => {
            // You can optionally add hover-out behavior here, like color change, but we avoid hiding the border
        });
    });
});

/* -------------------------------------------------------------chatgpt navbar ---------------------------------------*/


