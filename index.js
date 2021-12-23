//geração da tabela do jogo
let table = () =>{
    let aux = 1
    let tabela = ""
    document.getElementById("Display").innerHTML = `<table id="Game"></table>`
    for(let i=0;i<3;i++){
        tabela += "<tr>"
        for(let j=0;j<3;j++){
            tabela += `<td id="${aux}"></td>`
            aux++
        }
        tabela += "</tr>"
    }
    document.getElementById("Game").innerHTML = tabela
}
let start = () =>{
    table()
    let y = true
    let x
    //adiciona eventos ao clicar
    for(let i=0;i<9;i++){
        x = document.getElementById(`${i+1}`)
        //insere as imagens ao clicar
        x.addEventListener("click", function(){
            if(document.getElementById(`${i+1}`).innerHTML == "" && y == true){
                document.getElementById(`${i+1}`).innerHTML = `<img src="img/X.png"></img>`
            }
            else if(document.getElementById(`${i+1}`).innerHTML == "" && y == false){
                document.getElementById(`${i+1}`).innerHTML = `<img src="img/O.png"></img>`
            }
        })
        //troca o jogador
        x.addEventListener("click", function(){
            if(y == true){
                y = false
            }
            else{
                y = true
            }
        })
        //entra as condições de vitória
        x.addEventListener("click", game)
    }
}
//Condições de vitória
let game = () =>{
    let array = []
    let aux = 0
    for(let i=0;i<3;i++){
        array[i]=[]
        for(let j=0;j<3;j++){
            array[i][j] = aux+1
            if(document.getElementById(`${array[i][j]}`).innerHTML != ""){
                array[i][j] = document.getElementById(`${array[i][j]}`).innerHTML
            }
            aux++
        }
    }
    let vic
    //linhas e colunas
    for(let i=0;i<3;i++){
        vic = 0 
        for(let j=0;j<3;j++){
            if(array[i][0] == array[i][j]){
                vic++ 
            }
        }
        victory(vic)
        vic = 0
        for(let g=0;g<3;g++){
            if(array[g][i] == array[0][i]){
                vic++
            }
        }
        victory(vic)
    }
    vic = 0
    //diagonal principal
    for(let i=0;i<3;i++){
        if(array[0][0] == array[i][i]){
            vic++
        }
    }
    victory(vic)
    vic = 0
    //diagonal secundária
    for(let i=0;i<3;i++){
        if(array[0][2] == array[i][2-i]){
            vic++
        }
    }
    victory(vic)
    
}
//mensagem de vitória
let victory = (vic) =>{
    if(vic == 3){
        alert(`Vitória`)
        for(let i=0;i<9;i++){
            document.getElementById(`${i+1}`).removeEventListener("click", game)
        }
        document.getElementById("press").innerHTML = `Recomeçar`
    }
}