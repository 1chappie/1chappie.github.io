const hwanchor = document.querySelector('#hello-world-anchor');
hwanchor.textContent = 'Hello world!';

document.querySelector('#hello-world-anchor').addEventListener('click', function() {
    alert('You won an iPhone 9! Damn how did you even do that.');
});

let ferretImage = document.querySelector('#stiff-boy');
ferretImage.onclick = () => {
    let ferretSrc = ferretImage.getAttribute('src');
    if(ferretSrc === 'images/ferret-up.jpg') {
      ferretImage.setAttribute('src','images/ferret-down.jpg');
    } else {
      ferretImage.setAttribute('src','images/ferret-up.jpg');
    }
}
