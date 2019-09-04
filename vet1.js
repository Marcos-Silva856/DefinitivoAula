function ex1(){
    var mensagem = "Digite uma opção \n " + 
    "1. Cadastrar vendedor \n 2. Cadastrar venda \n " +
    "3. Consultar vendas funcionário em um mês \n " +
    "4. Consulta total vendas de vendedor \n" + 
    "5. Mostrar o número do vendedor que mais vendeu em um mês \n" +
    "6. Mostrar o número do mês com mais vendas \n" + 
    "7. Sair ";
    var opcao;
    var vendas = []; var vendedores = []
    do {
        opcao = Number(prompt(mensagem))
        switch(opcao){
            case 1: var objeto = {};
                    objeto.codigo = Number(prompt("Código"))
                    objeto.nome = prompt("Nome")
                    vendedores.push(objeto)
                    break;
            case 2: var objeto = {};
                    var cola = "";
                    for(var i=0;i<vendedores.length;i++){
                        cola = cola + vendedores[i].codigo + " " + vendedores[i].nome + "\n"
                    } 
                    objeto.codigo = Number(prompt("Código Funcionário \n" + cola))
                    objeto.valor = Number(prompt("Valor"))
                    objeto.mes = Number(prompt("Mês"))
                    if(objeto.mes > 0 && objeto.mes < 13){ 
                        vendas.push(objeto)
                    }
                    else{
                        alert("Mes invalido")
                    }
                    break;
            case 3:  var cola = "";
                    for(var i=0;i<vendedores.length;i++){
                        cola = cola + vendedores[i].codigo + " " + vendedores[i].nome + "\n"
                    }    
                    var cod = Number(prompt("Código \n" + cola))
                    var mes = Number(prompt("Mês"))
                    for(var i=0;i<vendas.length;i++){
                        if ((vendas[i].codigo == cod) && 
                           (vendas[i].mes == mes)){
                               alert(vendas[i].valor)
                               break;
                           }
                    }
                    if (i == vendas.length) {// não achou
                        alert("Venda não existe")
                    }
                    break;
            case 4: 
                var soma = 0;
                var num = Number(prompt("Digite o codigo do vendedor que você deseja consultar"))
                for(var i = 0; i<vendedores.length;i++){
                    if (vendas[i].codigo = num){
                        soma = soma + vendas.valor;
                    }
                if(soma == 0){
                    alert("Vendedor sem vendas ou inexistente")
                }
                else{
                    alert("Soma: "+ soma)
                }
                }
            break; 
            case 5: 
                var total = 0;
                var num = Number(prompt("Digite o numero do mês que deseja consultar"))
                if(num > 0 && num < 13){ 
                for(var i = 0; i<vendas.length;i++){
                    if (vendas[i].mes = num){
                        total += vendas[i].valor
                    }
                }
                if (total == 0){
                    alert("Não existem vendas no mês selecionado")
                }
            }
            break;
            case 6: 
                var total = 0;
                var aux = 0;
                var maiormes = 0;
            for(var i = 0; i < 12;i++){
                for(var j = 0; j < vendas.length; j++){
                    if (vendas[j].mes == i){
                        aux += vendas[j].valor
                    }
                }
                if(total < aux){
                    maiormes = i;
                    total = aux;
                }
            }
            if (total == 0){
            break;
            case 7: alert("Obrigado por usar o programa"); break;
            default: alert("Opção inválida");
        }
    }
    while (opcao != 7);
}