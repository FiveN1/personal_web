

console.log("Hello World!");

setStyle();

function setStyle() {
  console.log("set style");

  //document.getElementsByTagName('card_postcard_image_test')[0].style.backgroundColor = 'green';
}

/*
* ANIMATION ON VIEW
* https://www.youtube.com/watch?v=iXlkRhjnnpk
*
*/
document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		entry.target.classList.remove('in-view');
	  });
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.animate');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

function copyEmail() {
  var email = "tomas.verheyen.personal@gmail.com";
  navigator.clipboard.writeText(email);
  alert("Copied to clipboard: " + email);
}


/*
const element = document.querySelector('.card');
const observer = new IntersectionObserver(entries => {
  element.classList.toggle( 'animation', entries[0].isIntersecting );
});

observer.observe( element );
*/

/*
main();

//
// start here
//


function main() {
  const canvas = document.querySelector("#gl_canvas");

  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it.",
    );
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.5, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}
*/

// webgl
// https://stackoverflow.com/questions/71499942/how-do-i-apply-a-2d-shader-to-a-webgl-canvas-in-js
