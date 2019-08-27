function ex1(){
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
function  ex2(){
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