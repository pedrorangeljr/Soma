function somar() {

    var numero1 = parseInt(document.getElementById('numero').value);
    var numero2 = parseInt(document.getElementById('numero2').value);

    var resultado = numero1 + numero2;

    document.getElementById('resultado').innerHTML = resultado;
}
/**
 * Tudo que vem de uma requisição http , vem em forma de String
 * por isso que foi usado o parseInt para poder manipular os elementos
 * html.
 * 
 * Dessa forma podemos escrver programas de forma procedural, ou seja, em forma de 
 * funções, e podemos escrever em forma de classes usando a técnica dividir para conquistar.
 * 
 */