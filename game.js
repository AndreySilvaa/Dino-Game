const terrain = document.getElementById("terrain")
let game = false


function cactusCreation(){
    let cactusDiv = document.createElement('div')
    cactusDiv.classList.add('cactus')
    cactusDiv.style.left = '90%'
    terrain.appendChild(cactusDiv)


}

function moveCactus(){
    let cactus = terrain.getElementsByClassName('cactus')
    
    if(cactus.length > 1){
        let positionX = Number(cactus[0].style.left.split('%')[0])
        positionX = positionX - 1
        console.log(positionX)
        cactus[0].style.left = `${positionX}%`

        // Faça os outros cactus se moverem também
    }
}

function startGame(){
    

    setInterval(() => {
        cactusCreation()
    }, 2000)

    setInterval(() =>{
        moveCactus()
    }, 160)
}


document.addEventListener("keydown", (e) =>{
    if(e.key == 'Enter' && game == false){
        startGame()
        game = true
    }
})