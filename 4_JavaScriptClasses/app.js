// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`;
// }

// //everytime we make a new object. Each color object has it's own rgb objects

// // hex(255, 100, 25);
// // rgb(255, 100, 25);
// // "#ff6419"
// // "rgb(255,100,25)"

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function() {
//         const { r, g, b } = this;
//         return (
//                 '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//             );
//     };
//     return color;
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.hex(); //firstColor.hex();
// firstColor.rgb(); //"rgb(35, 255, 150)"

// const black = makeColor(0, 0, 0);
// black.rgb(); //"#rgb(0, 0, 0)"
// black.hex(); //"#0000s00"

// The 'new' keyboard will do these things below
// Creates a blank, plain JS object;
// Links (sets the constructor of) this oject to another object;
// Passes the newly created object from Step 1 as the this context;
// Return this if the function doesn't return its own object.

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function() {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function() {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function(a = 1.0) {
//     const { r, g ,b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// const color1 = new Color(40,255,60);
// color1.hex();
// const color2 = new Color(0,0,0);
// color2.hex();
// The secret is the new operator

//Sytantic sugar is just cleaner and cuter way of writng our app
//We don't have to write separate codes, we don't have write different prototypes

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
}

const c1 = new Color(255, 67, 89, 'tomato');


//Constructor and classes functions need to start with Uppercase
//Constructor functions will execute the constructor once we add a new color