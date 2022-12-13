const colors = ["green", "red", "purple",  "red", "blue", "pink", "skyblue", 
"orange", "yellow", "gold", "silver", "navy", "brown", "grey", "forestgreen", "sienna", 
"magenta", "rebeccapurple", "rosybrown", "royalblue", "firebrick", "floralwhite", "fuchsia", "cyan", 
"aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "blueviolet", "cadetblue", "burlywood", 
"chartreuse", "beige", "bisque", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "darkblue", 
"blanchedalmond", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", 
"darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
"darkslateblue", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue",
"gainsboro", "ghostwhite", "goldenrod", "greenyellow", "honeydew", "hotpink", "indianred", "indigo",
"ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", 
"linen", "limegreen", "lightsteelblue", "lightslategrey", "lightseagreen", "maroon", "mediumaquamarine",
"mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen",
"mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite",
"oldlace", "olive", "olivedrab", "orangered", "orangered", "orchid", "palegoldenrod", "palegreen",
"paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "plum", "powderblue", "saddlebrown",
"salmon", "seagreen", "seashell", "slateblue", "slategrey", "tan", "teal", "thistle", "tomato",
"turquoise", "violet", "wheat", "whitesmoke", "yellowgreen"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
