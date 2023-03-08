// Inicializamos las variables de tiempo hr, min, sec y ms con el valor "0" + 0.
let hr = min = sec = ms = "0" + 0;

// Seleccionamos los botones start, stop y reset del documento HTML.
const startBtn = document.querySelector(".start"),
    stopBtn = document.querySelector(".stop"),
    resetBtn = document.querySelector(".reset");

// Agregamos un evento click a cada botón, que ejecuta las funciones correspondientes.
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

// Función que inicia el temporizador.
function start() {
    // Agregamos la clase "active" al botón de start y eliminamos la clase "stopActive" del botón de stop.
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    // Establecemos el temporizador y actualizamos los valores de ms, sec, min y hr.
    startTimer = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0" + ms : ms;

        if(ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if(sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if(min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }

        // Actualizamos los valores de tiempo en la página HTML.
        putValue();

    }, 10);
}

// Función que detiene el temporizador.
function stop() {
    // Eliminamos las clases "active" y "stopActive" de los botones y detenemos el temporizador.
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
}

// Función que reinicia el temporizador.
function reset(){
    // Eliminamos las clases "active" y "stopActive" de los botones, detenemos el temporizador y reiniciamos los valores de tiempo.
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    putValue();
}

// Función que actualiza los valores de tiempo en la página HTML.
function putValue() {
    document.querySelector('.millisecond').innerHTML = ms;
    document.querySelector('.second').innerHTML = sec;
    document.querySelector('.minute').innerHTML = min;
    document.querySelector('.hour').innerHTML = hr;
}
