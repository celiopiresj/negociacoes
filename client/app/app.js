const controler = new NegociacaoController();

document
    .querySelector('form')
    .addEventListener('submit',  controler.adiciona.bind(controler)) 

document
    .querySelector('#botao-apaga')
    .addEventListener('click', controler.apaga.bind(controler))