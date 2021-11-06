let atributosHTML = document.getElementById("atributosHTML");
let contenido1 = document.getElementById("content");
atributosHTML.addEventListener('click', contenidoPresentacion2);

function contenidoPresentacion2() {
    contenido1.innerHTML = "";
    let texto = document.createElement("p");
    texto.id = "texto_prueba";
    texto.innerHTML = "Esto es un texto de prueba, aqui veremos los cambios que aplicaremos al texto";

    let texto3 = document.createElement("p");
    texto3.id = "texto_prueba3";
    texto3.innerHTML = "Mas texto de prueba";

    let texto2 = document.createElement("p");
    texto2.id = "texto_prueba2";
    texto2.innerHTML = "selecciona los botones de abajo para cambiar las propiedades del texto de arriba";


    var div = document.createElement("div");
    div.id = "div_probar";
    contenido1.appendChild(div);
    div.appendChild(texto);
    div.appendChild(texto3);
    div.appendChild(texto2);

    var boton = document.createElement('input');
    boton.type = 'button';
    boton.id = "boton_cambiar_tamaño";
    boton.value = "Cambiar tamaño";

    boton.addEventListener('click', cambiarTamañoLetra3);

    var boton2 = document.createElement('input');
    boton2.type = 'button';
    boton2.id = "boton_cambiar_tipo_letra";
    boton2.value = "Cambiar fuente";

    boton2.addEventListener('click', cambiarTipoLetra3);

    var boton3 = document.createElement('input');
    boton3.type = 'button';
    boton3.id = "boton_probar";
    boton3.value = "Cambiar fuente";

    boton3.addEventListener('click', cambiarColorLetra3);

    div.appendChild(boton);
    div.appendChild(boton2);
    div.appendChild(boton3);
}

function cambiarTamañoLetra3() {
    var t = document.getElementById("texto_prueba");
    var t2 = document.getElementById("texto_prueba3");
    t.classList.add('t1');
    t2.classList.add('t2');

}

function cambiarTipoLetra3() {
    var t = document.getElementById("texto_prueba");
    var t2 = document.getElementById("texto_prueba3");
    t.classList.add('f1');
    t2.classList.add('f2');
}

function cambiarColorLetra3() {
    var t = document.getElementById("texto_prueba");
    var t2 = document.getElementById("texto_prueba3");
    t.classList.add('c1');
    t2.classList.add('c2');
}