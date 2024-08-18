// ascii scale 
const ascii = `$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^'. `

let img;
let pixelation_level = 5;

function preload() {
  img = loadImage("fish.gif")
}

function setup() {
  // get div measurements
  let div = document.getElementById('banner');
  let wDiv = div.offsetWidth;
  let hDiv = div.offsetHeight;

  // contains gif in div
  let container = createCanvas(wDiv, hDiv); // sets width and height
  container.parent("banner");
}

function draw() {
  image(img, 0, 0, width, height); // sets image with 0 left and 0 top margin, and size to width and height 
  tint(0, 255) // hides the image background
  noStroke(); // hides grid

  // updates canvas if page changes size 
  let div = document.getElementById('banner');
  let wDiv = div.offsetWidth;
  let hDiv = div.offsetHeight;
  let container = createCanvas(wDiv, hDiv); // sets width and height
  container.parent("banner");

  // ratio of div and gif for pixel placement
  let w = width / img.width;
  let h = height / img.height ;
  img.loadPixels(); // loads pixel array for image
 
  // looking at brightness of pixels 
  for (let y = 0; y < img.height; y += pixelation_level) {
    for (let x = 0; x < img.width; x += pixelation_level) {

      let i = (x + y * img.width) * 4; // pixel index
      let r = img.pixels[i + 0];
      let g = img.pixels[i + 1];
      let b = img.pixels[i + 2];
      let gray = (r + g + b) / 3 // gray scale 

      // mapping grayscale rgb to ascii scale
      const densityMap = Math.floor(map(gray, 0, 255, ascii.length, 0))
      fill(255); 

      // drawing the letters on canvas
      textAlign(CENTER, CENTER);
      text(ascii.charAt(densityMap), x * w , y * h)
    }
  }
}
