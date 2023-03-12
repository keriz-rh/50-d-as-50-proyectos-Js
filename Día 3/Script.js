// Selecciona los elementos del DOM necesarios

// Selecciona el elemento con la clase 'wrapper' en el documento HTML y lo asigna a la constante 'wrapper'
const wrapper = document.querySelector('.wrapper');

// Selecciona el botón con la clase 'select-btn' dentro del elemento con la clase 'wrapper' y lo asigna a la variable 'SelectBtn'
SelectBtn = wrapper.querySelector('.select-btn');

// Selecciona el input dentro del elemento con la clase 'wrapper' y lo asigna a la variable 'searchInp'
searchInp = wrapper.querySelector('input');

// Selecciona el elemento con la clase 'options' dentro del elemento con la clase 'wrapper' y lo asigna a la variable 'options'
options = wrapper.querySelector('.options');

// Array de países
let countries = ["Estados Unidos", "Canadá", "México", "Brasil", "Argentina", "Chile", "Reino Unido",
                "Alemania", "Francia", "España", "Italia", "Japón", "China", 
                "India", "Rusia", "Australia", "Nueva Zelanda", "Sudáfrica", 
                "Egipto", "Nigeria", "Kenia", "Ghana", "Israel", "Arabia Saudita",
                "Emiratos Árabes Unidos", "Turquía", "Irán", "Irak", "Corea del Sur",
                "Vietnam", "Indonesia", "Filipinas", "Singapur", "Malasia", "Tailandia", 
                "Costa Rica", "Panamá", "Colombia", "Perú", "Ecuador", "Venezuela",
                "Cuba", "Puerto Rico", "República Dominicana", "Honduras", "El Salvador", 
                "Nicaragua", "Guatemala", "Islandia", "Dinamarca", "Noruega", "Suecia", 
                "Finlandia", "Polonia", "Ucrania", "Países Bajos", "Bélgica", "Suiza",
                "Austria", "Grecia", "Portugal", "Marruecos", "Túnez", "Argelia", 
                "Libia", "Mauritania", "Senegal", "Costa de Marfil", "Tanzania", "Uganda",
                "Zimbabue", "Mozambique", "Angola", "Botswana", "Namibia", "Botsuana",
                "Bahamas", "Trinidad y Tobago", "Jamaica", "Barbados", "Guyana", "Surinam",
                "Paraguay", "Uruguay", "Guinea Ecuatorial", "Camerún", "Gabón", "Congo",
                "República Democrática del Congo", "Sudán", "Sudán del Sur", "Etiopía",
                "Somalia", "Yemen", "Omán", "Qatar", "Kuwait", "Bahréin", "Siria", "Líbano",
                "Chipre", "Georgia", "Azerbaiyán", "Mongolia", "Nepal", "Bangladesh", "Bután",
                "Sri Lanka", "Myanmar", "Laos", "Cambodia", "Timor Oriental", "Papúa Nueva Guinea",
                "Fiyi", "Tonga", "Samoa", "Kiribati", "Micronesia", "Islas Marshall",
                "Vanuatu", "Tuvalu", "Nauru", "San Marino", "Andorra", "Liechtenstein", "Mónaco",
                "Vaticano", "Luxemburgo", "Malta", "Baréin", "Brunei", "Moldavia", "Armenia", "Eritrea", 
                "Seychelles", "Comoras", "Mauricio", "Madagascar", "Lesoto", "Suazilandia", "Botsuana",
                "Burundi", "Ruanda", "Burkina Faso", "Chad", "Malí", "Níger", "Sahara Occidental", ]; 

// Define una función que agrega los países a la lista de opciones
function addCountry(selectedCountry) {
options.innerHTML = '';
// Recorre el arreglo de países y para cada país crea un elemento li que se agregará a la lista de opciones
countries.forEach(country => {
// Comprueba si el país actual es el seleccionado
let isSelected = country == selectedCountry ? 'selected' : '';
// Crea el elemento li y lo agrega a la lista de opciones
let li = <li onclick = "updateName(this)" class="${isSelected}">${country}</li>;
options.insertAdjacentHTML("beforeend", li);
});
}

// Llama a la función addCountry para agregar los países a la lista de opciones
addCountry();

// Define una función que actualiza el nombre del país seleccionado
function updateName(selectedLi){
// Limpia el valor del input de búsqueda
searchInp.value = "";
// Agrega el país seleccionado a la lista de opciones
addCountry(selectedLi.innerHTML);
// Elimina la clase 'active' del elemento 'wrapper'
wrapper.classList.remove('active');
// Actualiza el nombre del país seleccionado en el botón de selección
SelectBtn.firstElementChild.innerText = selectedLi.innerText;
}

// Agrega un evento que se activa cuando el usuario escribe en el input de búsqueda
searchInp.addEventListener("keyup", () => {
// Define un arreglo vacío
let arr = [];
// Obtiene la palabra buscada en el input y la convierte en minúsculas
let searchWord = searchInp.value.toLowerCase();
// Filtra los países que comienzan con la palabra buscada
arr = countries.filter(data => {
return data.toLowerCase().startsWith(searchWord);
// Crea un elemento li para cada país filtrado y lo agrega al arreglo
}).map(data => {
// Comprueba si el país actual es el seleccionado
let isSelected = data == SelectBtn.firstElementChild.innerText ? "selected" : "";
return <li onclick="updateName(this)" class="${isSelected}">${data}</li>;
// Convierte el arreglo de elementos li en una cadena de texto
}).join("");
// Si el arreglo está vacío, agrega un mensaje de error
// Este evento se activa cuando se está escribiendo en el campo de búsqueda
// Filtra los países que coinciden con la palabra buscada
// Crea un nuevo arreglo 'arr' con los elementos de la lista que coinciden con la búsqueda
// Si el arreglo 'arr' no está vacío, se actualiza el contenido de la lista con esos elementos
// Si el arreglo 'arr' está vacío, se muestra un mensaje que indica que no se encontraron países
searchInp.addEventListener("keyup", () => {
let arr = [];
let searchWord = searchInp.value.toLowerCase();
arr = countries.filter(data => {
return data.toLowerCase().startsWith(searchWord);
}).map(data => {
let isSelected = data == SelectBtn.firstElementChild.innerText ? "selected" : "";
return <li onclick="updateName(this)" class="${isSelected}">${data}</li>;
}).join("");
  
  
options.innerHTML = arr ? arr : <p style = 'margin-top: 10 px;'>Oops! Country not foud</p>;
});

// Este evento se activa cuando se hace clic en el botón "Seleccionar"
// Agrega o elimina la clase "active" del contenedor de la lista desplegable
SelectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
