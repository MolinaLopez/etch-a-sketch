const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
  let box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
}

container.addEventListener('mouseover', function (e) {
  if (e.target.matches('.box')) {
    e.target.classList.add('box-hover');
  }
});