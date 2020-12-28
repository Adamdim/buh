$(document).ready(function(){
    var zindex = 20;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          $("div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });
  let pulsleft = document.getElementById("left");
  let pulsright = document.getElementById("right");
  let plustteg = document.getElementById("puls1");

  function pulsa(){
        if(plustteg.style.height == "50px"){
        pulsleft.style.top = pulsleft.style.top == "10px"?"35px":"10px";
        pulsright.style.top = pulsright.style.top == "10px"?"35px":"10px";
        }
  }

  var mypuls = setInterval(pulsa,1000);