function ex2(){
    var salario = [];
    var qtdfilho = [];
    var idade = [];
    var sexo = [];
    var Objeto= {
        salario: 0,
        qtdfilho: 0,
        idade: 0,
        sexo: 0,
        mulheres: 0,
        mediasalario: 0
    }
    for(var i = 0; i < 3; i++){
        salario[i] = Number(prompt('Digite seu salario'));
        qtdfilho[i] = Number(prompt('Quantidade de filho'));
        idade[i] = Number(prompt('Idade'));
        sexo[i] = prompt("Digite o sexo")
        if(Objeto.salario < salario[i]){
            Objeto.salario = salario[i];
        }       
        Objeto.qtdfilho = Objeto.qtdfilho + qtdfilho[i];
        Objeto.mediasalario += salario[i];
        if(sexo[i] == 'f'){
            Objeto.mulheres ++;
            if(salario[i] > 1000){
            Objeto.sexo ++;
            }
        }
    }
    Objeto.mediasalario = Objeto.mediasalario / 3;
    Objeto.qtdfilho = Objeto.qtdfilho / 3;
    Objeto.mulheres = 100 / Objeto.mulheres;
    Objeto.sexo = Objeto.sexo * Objeto.mulheres;
    alert('Media salario: '+ Objeto.mediasalario);
    alert('Media filho: '+Objeto.qtdfilho);
    alert('Maior salario: '+Objeto.salario);
    alert('porcentagem de mulheres > 1000 salario: '+ Objeto.sexo);
}
function  ex3(){
    var idade = [];
    var sexo = [];
    var altura = [];
    var olhos = []
    var Objeto= {
        maioridade: 0,
        mediaidade: 0,
        qtdindiv: 0,
        homens: 0,
        contadoridade: 0
    }

    for(var i = 0; i < 3; i++){
        idade[i] = Number(prompt("Digite sua idade:"));
        sexo[i] = prompt("Digite seu sexo");
        olhos[i] = prompt('Cor dos olhos');
        altura[i] = prompt('Digite sua altura');
        if (Objeto.maioridade < idade[i]){
            Objeto.maioridade = idade[i];
        }
        if(olhos[i] = 'C' && altura > 1.60){
            Objeto.mediaidade++;
            Objeto.contadoridade += idade[i]
        }
        
    }

}
function ex4(){
    var vet = [];
    var Media = 0;
    var menorIdade = 9999;
    var maiorIdade = 9999;
    var mulher = 0;
    for(var i = 0; i < 3; i++){
        var objeto = {};
        objeto.idade = Number(prompt("Digite sua idade:"));
        objeto.sexo = prompt("Digite seu sexo");
        objeto.renda = Number(prompt("Digite sua renda"));
        objeto.filhos = Number(prompt("Digite quantos filhos você tem"));
        Media += objeto.renda;
        if(maiorIdade < objeto.idade){
            maiorIdade = objeto.idade
        }
        if(menorIdade > objeto.idade){
            menorIdade = objeto.idade
        }
        if(objeto.filhos > 2 && objeto.renda < 600 && objeto.sexo == 'F'){
            mulher++;
        }
        vet.push(objeto);
    }
    Media = Media / i;
    alert("Media de salarios: "+ Media);
    alert("Menor e maior idade: "+ menorIdade +" "+ maiorIdade);
    alert("Mulher mais de 2 filhos e inferior a 600 "+mulher);
}

function ex5(){
    var vet = []
    for(var i=0; i<5;i++){
        var objeto = {}
        objeto.codigo = Number(prompt("Codigo"));
        objeto.descricao = prompt("Descricao");
        objeto.qtde = Number(prompt("Qtde"));
        objeto.preco = Number(prompt("Idade"))
        for(var j = 0; j<vet.length; j++){
            if(objeto.codigo < vet[j].codigo){
                vet.slice(j, 0, objeto);
                alert("Adicionado");
                break;
            }
        }
        if(j == vet.length){
            vet.push(objeto);
            alert("Adicionado 1 ou ult");
        }
    }
    for(var i = 0; i < vet.length; i++){
        alert(vet[i].codigo + ' '+ vet[i].descricao)
    }

    var cod =Number(promt("Informe codigo"))
    for(var i = 0; i<5; i++){
        if(cod==vet[i].codigo){
            vet[i].descricao = prompt("Descriação")
            vet[i].descricao = prompt("Qtde")
            vet[i].descricao = prompt("reco")
            break
        }
    }
    if(i==5){
        alert("Produto não existe")
    }
 }

 function ex1(){
    
 }