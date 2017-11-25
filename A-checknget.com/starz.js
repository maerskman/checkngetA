$(document).ready(function() {

  $("body").click(function() {
        //
    });

    // Create divs
    for (var i = 0; i < 25; i++) {
        var fontsize = getRandomNumber(100, 200);
        var posx = getRandomX();
        var posy = getRandomY();
        
        $("<div id='star_" + i + "' class='star' style='font-size:" + fontsize + "%;left:" + posx + "px;position:absolute;top:" + posy + "px;'>*</div>").appendTo("#playing_canvas");
    }
    
     //every two seconds add a new particle at random location
    setInterval(function() {
       //for(var i = 1; i < 4; i++) {       
          MoveStar();
       //}
    }, getRandomNumber(1000, 5000));

 });
 
// Randomly moves all the particles around
function MoveStar() {       
    var x = getRandomX();
    var y = getRandomY();
    var starID = getRandomNumber(0, 25);
    
    $("#star_" + starID).animate({"left": x + "px","top": y + "px"}, "slow");   
}

// Returns a random X coordinate
function getRandomX() {  
  return (Math.random() * $("#playing_canvas").width()).toFixed();    
} 

// Returns a random Y coordinate
function getRandomY() {  
  return (Math.random() * $("#playing_canvas").height()-50).toFixed();   
} 

// Returns a random number between min and max  
function getRandomNumber(min, max) {  
  return Math.floor(Math.random() * (max - min + 1)) + min;    
} 



//  https://codepen.io/svinkle/pen/rEmIH#code-area