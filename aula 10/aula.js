function somaNumeros(n1, n2){
    
    return console.log('resultado', 2 +3 )
}
somaNumeros(2 , 3)


function calculaMedia(nomeAluno,nota1, nota2, nota3){
let resultado = (nota1 + nota2 + nota3) /3
return console.log('a nota do aluno ', nomeAluno, 
' é: ', resultado.toFixed(2))
}
calculaMedia('Orlando',6, 10.0, 6,0)

const decideNumero =(numero) => {
        if(numero>= 6) {
            return console.log('o número', numero, 'é maior que 6')

            //  CONSOLE.LOG É UM DEBUG MUITO BOM
        }

        else {
            return console.log('o numero', numero, 'é menor que 6')

        }
}
let numerodefore = 200
decideNumero(4) 
decideNumero(13)
decideNumero(numerodefore)
