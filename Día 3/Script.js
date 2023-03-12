// Seleccionar elementos del DOM
const wrapper = document.querySelector('.wrapper'); // Contenedor principal
SelectBtn = wrapper.querySelector('.select-btn'); // Botón que muestra/oculta las opciones
searchInp = wrapper.querySelector('input'); // Campo de búsqueda
options = wrapper.querySelector('.options'); // Lista de opciones

// Lista de países disponibles
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

// Función para agregar la lista de países a las opciones
function addCountry(selectedCountry) {
    // Limpiar la lista de opciones
    options.innerHTML = '';
    // Iterar sobre la lista de países y crear una opción para cada uno
    countries.forEach(country => {
        // Determinar si este país está seleccionado actualmente
        let isSelected = country == selectedCountry ? 'selected' : '';
        // Crear una opción para este país y agregarla a la lista
        let li = `<li onclick = "updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
// Mostrar la lista de países por defecto al cargar la página
addCountry();

// Función para actualizar el campo de búsqueda y la lista de opciones cuando se selecciona un país
function updateName(selectedLi){
    // Limpiar el campo de búsqueda
    searchInp.value = "";
    // Agregar la lista de opciones actualizada con el país seleccionado
    addCountry(selectedLi.innerHTML);
    // Ocultar la lista de opciones
    wrapper.classList.remove('active');
    // Cambiar el texto del botón para mostrar el país seleccionado
    SelectBtn.firstElementChild.innerText = selectedLi.innerText;
}

// Escuchar eventos de teclado en el campo de búsqueda
searchInp.addEventListener("keyup", () => {
    // Crear una lista vacía para las opciones que coincidan con la búsqueda
    let arr = [];
    // Obtener la palabra de búsqueda actual
    let searchWord = searchInp.value.toLowerCase();
    // Filtrar la lista de países para obtener solo los que empiezan con la palabra de búsqueda
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        // Determinar si esta opción está seleccionada actualmente
        let isSelected = data == SelectBtn.firstElementChild.innerText ? "selected" : "";
        // Crear una opción para este país y agregarla a la lista
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    // Actualizar la lista de opciones con las opciones que coincidan con la búsqueda
    options.innerHTML = arr ? arr : `<p style = 'margin-top: 10 px;'>Oops! Country not foud</p>`;
});

// Escuchar eventos de clic en el botón que muestra/oculta las opciones
SelectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
