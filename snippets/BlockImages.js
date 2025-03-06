function blockImagesAndReplaceAlt() {
    document.querySelectorAll('img').forEach(img => {
        const altText = img.alt || '';
        img.style.display = 'none'; // Hide the image

        // Create a replacement element with alt text
        const replacement = document.createElement('span');
        replacement.textContent = altText;
        replacement.style.display = 'inline-block'; // Display the replacement inline

        // Replace the image with the alt text
        img.parentNode.insertBefore(replacement, img);
    });

    // Handle SVGs with accessible name
    document.querySelectorAll('svg').forEach(svg => {
        const accessibleName = svg.getAttribute('aria-label') || svg.getAttribute('title') || '';
        svg.style.display = 'none'; // Hide the SVG

        // Create a replacement element with accessible name
        const replacement = document.createElement('span');
        replacement.textContent = accessibleName;
        replacement.style.display = 'inline-block'; // Display the replacement inline

        // Replace the SVG with the accessible name
        svg.parentNode.insertBefore(replacement, svg);
    });
}

// Call the function to block images and replace them with alt text or accessible name of SVGs
blockImagesAndReplaceAlt();