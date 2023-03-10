const main = document.createElement('main');
document.body.appendChild(main);

const title = document.createElement('h1');
title.innerText = 'Busca CEP';
main.appendChild(title);

const input = document.createElement('input');
input.placeholder = '00000-000';
input.maxLength = '9';
input.type = 'text';
main.appendChild(input);

const button = document.createElement('button');
button.innerText = 'Buscar CEP';
main.appendChild(button);

const subTittleData = document.createElement('h3');
subTittleData.innerText = 'Dados:';
main.appendChild(subTittleData);

const dataSpace = document.createElement('pre');
main.appendChild(dataSpace);


button.addEventListener('click', api);

async function api() {
    const inputValue = input.value;
    const apiUrl = `https://viacep.com.br/ws/${inputValue}/json/`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        dataSpace.innerHTML = `Estado: ${data.uf} \nCidade: ${data.localidade} \nPopulação: ${data.ibge} \nDDD: ${data.ddd}  \nBairro: ${data.bairro}  \nRua: ${data.logradouro}`;
        return data;

    } catch (error) {
        dataSpace.innerHTML = 'INSIRA UM CEP VALIDO';
        return error.message;
    }
}
