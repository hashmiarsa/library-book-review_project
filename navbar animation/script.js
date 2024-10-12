// Select all nav items
const navItems = document.querySelectorAll('.nav-item');

// Loop through each nav item
navItems.forEach(item => {
    // Store the original text
    const originalText = item.textContent;

    // Add mouseover event to change text
    item.addEventListener('mouseover', () => {
        const hoverText = item.getAttribute('data-hover'); // Get the hover text
        item.textContent = hoverText; // Change to hover text
    });

    // Add mouseout event to revert back to original text
    item.addEventListener('mouseout', () => {
        item.textContent = originalText; // Revert to original text
    });
});
