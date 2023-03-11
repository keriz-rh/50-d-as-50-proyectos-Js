const wrapper = document.querySelector('.wrapper');
SelectBtn = wrapper.querySelector('.select-btn');
searchInp = wrapper.querySelector('input');
options = wrapper.querySelector('.options');

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

function addCountry(selectedCountry) {
    options.innerHTML = '';
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? 'selected' : '';
        let li = `<li onclick = "updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}

addCountry();

function updateName(selectedLi){
    searchInp.value = "";
    addCountry(selectedLi.innerHTML);
    wrapper.classList.remove('active');
    SelectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == SelectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style = 'margin-top: 10 px;'>Oops! Country not foud</p>`;
});

SelectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));