
const contenedorResultado = document.querySelector("#contenedorResultado");

document.querySelector("#formulario").addEventListener("submit", calcular);

function calcular (e) {

    e.preventDefault();

    const produccionTotal = document.querySelector(".produccionTotal").value;
    const produccionActual = document.querySelector(".produccionActual").value;
    const pesoDisparo = document.querySelector(".pesoDisparo").value;
    const cavidades = document.querySelector(".cavidades").value;
    const ciclo = document.querySelector(".ciclo").value;

    let disparosRestantes = (produccionTotal - produccionActual) / cavidades; 

    let horasDeProduccion = (disparosRestantes * ciclo) / 3600;

    let diasDeProduccion = horasDeProduccion / 24;

    let kgDeMaterial = (disparosRestantes * pesoDisparo) / 1000 ;

    let preparaciones = kgDeMaterial / 100;
    

    contenedorResultado.innerHTML = "";
    let div = document.createElement("div");
        div.classList.add('cuadroResultado', 'shadow');

        div.innerHTML = `<h2>Resultado</h2>
        <p>${horasDeProduccion.toFixed(1)} Horas de producción</p>
        <p>${diasDeProduccion.toFixed(1)} Días de producción</p>
        <p>${kgDeMaterial.toFixed(1)} kg de Material</p>
        <p>${preparaciones.toFixed(1)} Preparaciones</p>
        `
        contenedorResultado.appendChild(div);

    console.log(disparosRestantes)
    console.log(horasDeProduccion.toFixed(2))
    console.log(kgDeMaterial)
    console.log(preparaciones.toFixed(2))
        

}




