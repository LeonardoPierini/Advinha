var sorte = Math.floor(Math.random() * 101)
var mescont = document.getElementById('mescont')
var cont = 10
var inp = document.getElementById('but')
var gameOver = document.getElementById('game-over')
var resOver = document.getElementById('res-game-over')

function verificar(){
    cont--
    var numberUser = Number(document.getElementById('number').value)
    let mesage = document.getElementById('message')


    if(numberUser < 0 || numberUser == ''){
        mesage.innerHTML= 'NUMERO INDEFINIDO'
        mesage.style.color = 'red'
        mesage.style.borderBottom = '2px solid red'

    }else{
        if(numberUser != sorte){
            if(numberUser > sorte){
                mesage.innerHTML= 'Tente um numero MENOR'
                mesage.style.color = 'red'
                mesage.style.borderBottom = '2px solid red'
   
            }else if(numberUser < sorte){
                mesage.innerHTML= 'Tente um numero MAIOR'
                mesage.style.color = 'red'
                mesage.style.borderBottom = '2px solid red'
            }
        }else{
            mesage.innerHTML= 'ACERTOU'
            mesage.style.color = 'green'
            mesage.style.borderBottom = '2px solid green'
            inp.disabled = true
        }
    }

         mescont.innerHTML = `Tentativa ${cont}/10`
         if(cont == 0){
            inp.disabled = true
            gameOver.style.display = 'block'
            resOver.innerHTML = 'O Numero era '+sorte
         }
     
}
