console.log(ten);
console.log(pas)

var click = document.getElementById("xn")
click.addEventListener("click",getvalue)

function getvalue(event){
    event.preventDefault()
    var tuoi=document.getElementById("tuoi").value
    var pas=document.getElementById("pas").value    
    console.log(ten)
console.log(pas)
}


//cach luu data
localStorage.setItem("data", JSON.stringify(ten))

//cach lay data ve may
// console.log(localStorage.getItem("data"))
// document.write(localStorage.getItem("data"))


