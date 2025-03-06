(()=>{
// Get all elements on the page
const allElements = document.querySelectorAll('*');

// Find elements with class names containing "header" or "heading"
const matchingElements = Array.from(allElements).filter(element =>
  Array.from(element.classList).some(className => 
    className.includes('header') || className.includes('heading') || className.includes('h1') || className.includes('h2') || className.includes('h3') || className.includes('h4') || className.includes('h5') || className.includes('h6')
  )
);

// Log the elements and their class names
matchingElements.forEach(element => {
  console.log(element, Array.from(element.classList).filter(className => 
    className.includes('header') || className.includes('heading')
  ));
});

})();