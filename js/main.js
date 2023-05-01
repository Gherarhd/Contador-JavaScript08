"use strict";

const color = document.querySelectorAll(".texto");

color.forEach((seccion) => {
  seccion.addEventListener("mouseover", function () {
    seccion.classList.add("colorTexto");
  });

  seccion.addEventListener("mouseout", function () {
    seccion.classList.remove("colorTexto");
  });
});

function contador(num) {
  const despegar = "¡Despegamos!";
  const contadorDiv = document.getElementById("contador");
  const video = document.getElementById("video");
  for (let i = num; i >= 0; i--) {
    setTimeout(() => {
      console.log(i);
      contadorDiv.textContent = i;
      if (i === 0) {
        contadorDiv.textContent = despegar;
        console.log(despegar);
        video.style.display = "block";
        video.play();
      }
    }, (num - i) * 1000);
  }
}

contador(10);
