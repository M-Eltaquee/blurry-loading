const LOADINGTIME = document.querySelector('.loading-text')
const BG = document.querySelector('.bg')

const scale = (number,maxvalue) => {
    return (1- number / 100 )* maxvalue
}
let timer = setInterval(load, 30)
let lolo = 0;
function load(){
    lolo++
    if (lolo == 100){
        clearInterval(timer)
    }
    LOADINGTIME.innerHTML = `${lolo}%`
    LOADINGTIME.style.opacity = scale(lolo,1)
    BG.style.filter = `blur(${scale(lolo,30)}px)`
}
