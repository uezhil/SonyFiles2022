//Single Dimension Array
//first method - size
var movies = new Array(3);
movies[0] = "Avatar";
movies[1] = "Wakanda";
movies[2] = "Balck Panther";

//second method - constructor
var dcmovies = new Array("Superman", "Xmen", "Wonder woman");

document.write("Number of DC Movies " + dcmovies.length + "<br/>");
document.write(
  "Number of added movies " + dcmovies.push("Batman", "Aquaman") + "<br />"
);

for (const movie in dcmovies) {
  document.write(dcmovies[movie]);
}

//----Multi Dimension
var customers = new Array(3);
customers[0]=new Array("Reya","1000");
customers[1] = new Array("Maya", "2000");
customers[2] = new Array("Shreya", "4000");

//customers[2][1]

for (let i = 0; i < customers.length; i++) {
   for (let j = 0; j < customers[i].length; j++) {
   
    document.write(customers[i][j]);
   }
    
    
}


var arr = new Array(new Array(1,2,3,4),new Array (2,3,4,5) );

var arr2 = [
    [1,2,3],
    [1,3,5],
    [3,5,6]
];

//Associative Array
var states = new Array();
states["KA"] = "Karnataka";
states["TN"] = "TamilNadu";