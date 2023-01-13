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