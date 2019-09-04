function ex1(){
    var codigo = [];
    var contadorCod = 0;
    var auxiliar = NaN;
    do{
        var Opc = prompt("Digite uma opção: \n 1-Cadastrar Vendedor \n 2-Cadastrar venda \n3-Consultar as vendas \n4-Consultar total das vendas \n5-Montrar o numero do vendedor que mais vendeu no mês \n6-Mostrar numero do mês com mais vendas 7-Finalizar o programa");
        switch(Opc){
            case 1: 
                auxiliar = prompt("Digite o codigo do vendedor");
                for(var i = 0; i<contadorCod; i++){
                    if(codigo[i] == auxiliar){
                        alert('Codigo existente')
                        break;
                    }
                    codigo[contadorCod] = auxiliar;
                }
            break;
            case 2:
                auxiliar = prompt("Digite o codigo do vendedor");
                for(var i = 0; i<contadorCod; i++){
                    if(codigo[i] == auxiliar){
                        
                    }
                }
                alert('Codigo invalido')
            break;
            case 3:
            break;
            case 4:
            break;
            case 5:
            break;
            case 6:
            break;
            case 7:
            break;
            default:
        }
    }while (Opc != 7)
    

}