let str = "";

function Equation(value){
    str = str+value
    document.getElementById('eq').value = str

}
function Cut(){
    str = str.slice(0, -1)
    document.getElementById('eq').value = str



}
function Clair(){
    str = ""
    document.getElementById('eq').value = str
    

}
function Call(){
    let result = eval(str)
    document.getElementById('eq').value = result
    str = " "

}

document.addEventListener('keydown', (e)=>{
    if(["1","2","3","4","5","6","7","8","9","0","+", "-", "%", "/", "*", "(", ")", "Backspace", "Enter"].includes(e.key)){
        if(e.key === "Backspace"){
            Cut()
        }
        else if(e.key === "Enter"){
            e.preventDefault()
            Call()
        }
        else{
            str = str + e.key
            document.getElementById('eq').value = str
        }
    }
})