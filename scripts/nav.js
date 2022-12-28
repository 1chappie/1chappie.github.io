function injectNavbar(activeElement) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/assets/navbar.html", true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let oldelem = document.querySelector("div#nb");
            let newelem = document.createElement("nav");
            newelem.innerHTML = this.responseText;
            oldelem.parentNode.replaceChild(newelem, oldelem);
            let a = document.getElementById(activeElement);
            a.classList.add("active");
        }
    };
    xhr.send();
}