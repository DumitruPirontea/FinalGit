let atributosHTML = document.getElementById("atributosHTML");
let contenido1 = document.getElementById("content");
atributosHTML.addEventListener('click', contenidoPresentacion2);

function contenidoPresentacion2() {
    contenido1.innerHTML = "";
    let texto = document.createElement("p");
    texto.id = "texto_prueba";
    texto.innerHTML = "Esto es un texto de prueba, aqui veremos los cambios que aplicaremos al texto";
    let texto2 = document.createElement("p");
    texto2.id = "texto_prueba2";
    texto2.innerHTML = "selecciona los botones de abajo para cambiar las propiedades del texto de arriba";


    var div = document.createElement("div");
    div.id = "div_probar";
    contenido1.appendChild(div);
    div.appendChild(texto);
    div.appendChild(texto2);

    var boton = document.createElement('input');
    boton.type = 'button';
    boton.id = "boton_cambiar_tamaño";
    boton.value = "Cambiar tamaño";

    boton.addEventListener('click', cambiarTamañoLetra);

    var boton2 = document.createElement('input');
    boton2.type = 'button';
    boton2.id = "boton_cambiar_tipo_letra";
    boton2.value = "Cambiar fuente";

    boton2.addEventListener('click', cambiarTipoLetra);

    var boton3 = document.createElement('input');
    boton3.type = 'button';
    boton3.id = "boton_probar";
    boton3.value = "Haz click";

    boton3.addEventListener('click', cambiarColorLetra);

    div.appendChild(boton);
    div.appendChild(boton2);
    div.appendChild(boton3);
}

function cambiarTamañoLetra() {
    var t = document.getElementById("texto_prueba");
    t.classList.add('t1');
}

function cambiarTipoLetra() {
    var t = document.getElementById("texto_prueba");
    t.classList.add('f1');
}

function cambiarColorLetra() {
    var t = document.getElementById("texto_prueba");
    t.classList.add('c1');
}