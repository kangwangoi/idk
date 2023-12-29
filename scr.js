

var click = document.getElementById("xn")
click.addEventListener("click",getvalue)

function getvalue(event){
    event.preventDefault()
    var ten=document.getElementById("ten").value
    var pas=document.getElementById("pas").value    
}


localStorage.setItem("data", JSON.stringify(ten))
localStorage.setItem("data", JSON.stringify(pas))
console.log(localStorage.getItem("data"))

