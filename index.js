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