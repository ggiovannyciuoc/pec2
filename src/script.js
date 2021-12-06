function menu() {
    var x = document.getElementById("barraNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
  

  function animate() {
    var x = document.getElementById("mysgv");
   
      x.className = "active";
    
  }
  