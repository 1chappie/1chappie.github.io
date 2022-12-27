function injectNavbar(activeElement){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "../assets/navbar.html", true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let oldelem = document.querySelector("script#navbar");
            let newelem = document.createElement("nav");
            newelem.innerHTML = this.responseText;
            newelem.getElementById(activeElement).classList.add("active");
            oldelem.parentNode.replaceChild(newelem,oldelem);
        }
    };
    xhr.send();
}