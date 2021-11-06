let contenidoHTML = document.getElementById("contenidoHTML");
let contenido = document.getElementById("content");
let titulo = document.getElementById("titulo");
contenidoHTML.addEventListener('click', contenidoPresentacion);

function contenidoPresentacion() {
    contenido.innerHTML = "";
    titulo.innerHTML = "Ejemplo de cambio dinamico al pulsar boton.";

    var div = document.createElement("div");
    div.id = "div_probar";
    div.innerHTML = "Pulsa el boton de abajo para cambiar al siguiente texto:";
    contenido.appendChild(div);

    var boton = document.createElement('input');
    boton.type = 'button';
    boton.id = "boton_probar";
    boton.value = "Haz click";

    boton.addEventListener('click', contenidoFinal);

    div.appendChild(boton);
}

function contenidoFinal() {
    contenido.innerHTML = "";
    var div = document.createElement("div");
    div.id = "div_probar";
    div.innerHTML = "Has cambiado al siguiente texto! <br> vemos como funciona el evento de los botons dinámicos";
    var p2 = document.createElement("p");
    p2.innerHTML = "lo que acabas de hacer es: utilizando un oyente de eventos <eventListener> y poniendole el metodo <click>, conseguimos hacer que detecte el click sobre el boton, por lo tanto, cambiamos el texto y listo.";
    contenido.appendChild(div);
    div.appendChild(p2);
}