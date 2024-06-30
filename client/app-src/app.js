import { NegociacaoController } from './controllers/NegociacaoController.js'
import { debouce } from './util/Debouce.js';
const controller = new NegociacaoController();

const $ = document.querySelector.bind(document)

$('form')
    .addEventListener('submit',  controller.adiciona.bind(controller)) 

$('#botao-apaga')
    .addEventListener('click', controller.apaga.bind(controller))

$('#botao-importa')
    .addEventListener('click', debouce(() => controller.importaNegociacoes.bind(controller), 1000) )