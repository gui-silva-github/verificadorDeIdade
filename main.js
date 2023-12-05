// Pegando os elementos que serão manipulados

let mensagem = document.querySelector('#saudacao');

let anoNasc = document.querySelector('#ano');

let sexo = document.getElementsByName('sexualidade');

let resposta = document.getElementById('res');

let img = document.getElementById('foto');

// Fazendo a função de verificar

function verificar(){

    // Inserindo a saudação

    let data = new Date();

    let horas = data.getHours();

    if (horas > 5 && horas < 12){

        mensagem.innerHTML = `Para você que chegou nesse programa às ${horas} horas, tenha um <strong>bom dia</strong>!`;

    } else if (horas >= 12 && horas < 18){

        mensagem.innerHTML = `Para você que chegou nesse programa às ${horas} horas, tenha uma <strong>boa tarde</strong>!`;

    } else if (horas >= 18 && horas < 24) {

        mensagem.innerHTML = `Para você que chegou nesse programa às ${horas} horas, tenha uma <strong>boa noite</strong>!`;

    } else {

        mensagem.innerHTML = `Para você que chegou nesse programa às ${horas} horas, tenha uma <strong>boa madrugada</strong>!`;

    }

}

    // Analisando as possibilidades

    function analisar() {
        
        let data = new Date();

        let ano = data.getFullYear();

    if (anoNasc.value.length == 0 || anoNasc.value<anoNasc.min || anoNasc.value>ano){

        alert("ERRO -> Digite um ano de nascimento váido!");

    } else {

        let idade = ano - Number(anoNasc.value);

        let genero = '';

        // Verificando o gênero e a idade para colocar imagem correspondente

        if (sexo[0].checked){

            genero = 'Homem';

            if (idade < 3) {

                img.src = 'assets/imgs/bebeH.jpg';

            } else if (idade >= 3 && idade <= 12) {

                img.src = 'assets/imgs/criancaH.jpg';

            } else if (idade > 12 && idade < 18) {

                img.src = 'assets/imgs/adolescenteH.jpg';

            } else if (idade >= 18 && idade < 25) {

                img.src = 'assets/imgs/adulto.jpg';

            } else if (idade >= 25 && idade < 40) {

                img.src = 'assets/imgs/adultoo.jpg';

            } else if (idade >= 40 && idade < 60) {

                img.src = 'assets/imgs/adultooo.jpg';

            } else if (idade >= 60 && idade < 80) {

                img.src = 'assets/imgs/idoso.jpg';

            } else {

                img.src = 'assets/imgs/idosoo.jpg';

            }

        } else {

            genero = 'Mulher';

            if (idade < 3) {

                img.src = 'assets/imgs/bebeM.jpg';

            } else if (idade >= 3 && idade <= 12) {

                img.src = 'assets/imgs/criancaM.jpg';

            } else if (idade > 12 && idade < 18) {

                img.src = 'assets/imgs/adolescenteM.jpg';

            } else if (idade >= 18 && idade < 25) {

                img.src = 'assets/imgs/adulta.jpg';

            } else if (idade >= 25 && idade < 40) {

                img.src = 'assets/imgs/adultaa.jpg';

            } else if (idade >= 40 && idade < 60) {

                img.src = 'assets/imgs/adultaaa.jpg';

            } else if (idade >= 60 && idade < 80) {

                img.src = 'assets/imgs/idosa.jpg';

            } else {

                img.src = 'assets/imgs/idosaa.jpg';

            }

        }

        // Mostrando além da imagem, o texto da detectação

        resposta.innerHTML = `Detectamos ${genero} com ${testeAno(idade)}`;

    }

}

// Caso for 1 ano de idade, terá de retornar "1 ano"

function testeAno(ano){

    return ano === 1 ? '1 ano!' : `${ano} anos!`; 

}