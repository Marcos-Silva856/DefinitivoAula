function cadastraVendedor(vendedores){
    var objeto = {};
    aux = 0;
    objeto.codigo = Number(prompt("Código"));
    for(var i = 0; i<vendedores.length; i++){
        if(objeto.codigo == vendedores[i].codigo)
        {
            aux = 1
        }
    }
    if (aux == 0){
        objeto.nome = prompt("Nome")
        vendedores.push(objeto)
    }else{
        alert('Código existente')
    }
}

function cadastraVenda(vendedores, vendas){
    var objeto = {};
    var cola = "";
    for(var i=0;i<vendedores.length;i++){
        cola = cola + vendedores[i].codigo + " " + vendedores[i].nome + "\n"
    } 
    objeto.codigo = Number(prompt("Código Funcionário \n" + cola))
    objeto.valor = Number(prompt("Valor"))
    objeto.mes = Number(prompt("Mês"))
    if(objeto.mes > 0 && objeto.mes < 13){ 
        for(var i = 0; i< vendas.length; i++){
            if((vendas[i].codigo == objeto.codigo) && (vendas[i].mes == objeto.mes)){
                alert('Vendedor ja possui venda nesse mes')
                return
            }
        }
        
        vendas.push(objeto)
    }
    else{
        alert("Mes invalido")
    }
}
function consultaVendaVendedor(vendedores, vendas){
    var cola = "";
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

}
function consultaTotalVenda(vendedores, vendas){
    var soma = 0;
                var num = Number(prompt("Digite o codigo do vendedor que você deseja consultar"))
                for(var i = 0; i<vendedores.length;i++){
                    if (vendas[i].codigo = num){
                        soma = soma + vendas[i].valor;
                    }
                if(soma == 0){
                    alert("Vendedor sem vendas ou inexistente")
                }
                else{
                    alert("Soma: "+ soma)
                }
                }
    
}
function vendedorMaiorVenda(vendas){
    var total = 0;
                var maior = 0;
                var num = Number(prompt("Digite o numero do mês que deseja consultar"))
                if(num > 0 && num < 13){ 
                for(var i = 0; i<vendas.length;i++){
                    if(vendas[i].mes == num){
                        if(total < vendas[i].valor){
                            total = vendas[i].valor;
                            maior = vendas[i].codigo;
                        }
                    }
                }
                if (total == 0){
                    alert("Não existem vendas no mês selecionado")
                }
                else{
                    alert(maior)
                }

            }
            else{
                alert("Mes invalido")
            }
}
function mesMaiorVenda(vendas){
    var total = 0;
    var aux = 0;
    var maiormes = 0;
for(var i = 1; i < 13;i++){
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
if (maiormes == 0){
    alert("Não existe vendas")
}else{
    alert("Maior mês e: "+maiormes+" com um total de venda de: " +total)
}
}

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
            case 1: 
                cadastraVendedor(vendedores)
                break;
            case 2: 
                cadastraVenda(vendedores, vendas)
                break;
            case 3:  
                consultaVendaVendedor()
                    break;
            case 4: 
                consultaTotalVenda(vendedores, vendas)
            break; 
            case 5: 
                vendedorMaiorVenda(vendedores, vendas)
            break;
            case 6: 
                mesMaiorVenda(vendedores, vendas)
            break;
            case 7: alert("Obrigado por usar o programa"); break;
            default: alert("Opção inválida");
        }
    }
    while (opcao != 7);
}