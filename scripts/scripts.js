document.getElementById("navbar-items").onmousemove = e => {
    for(const b of document.getElementsByClassName("navbutton")) {
      const rect = b.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      // card.style.setProperty("--mouse-x", `${x}px`);
      // card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

function testing(){
  console.log("wow");
}

