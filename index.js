let  number= [ "0","1","3","4","5","6","7","8","9","@","#","$","&","-","A",
               "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
               "Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
               "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
               "u","v","w","x","y","z"
              ],
 show1 = document.querySelector(".show1"),
 show2 = document.querySelector(".show2"),
 btn = document.querySelector(".btn");
function value1(){
    let result = ''
    for(let i=0; i<10; i++){
       let real = number[Math.floor (Math.random() * number.length)]
       result += real   
    }
    return result
}

function value2(){
    let result = ''
    for(let i=0; i<10; i++){
       let real = number[Math.floor (Math.random() * number.length)]
       result += real   
    }
    return result
}
 
btn.addEventListener("click",()=>{ 
    show1.value = value1()   
})
btn.addEventListener("click",()=>{ 
    show2.value = value2()   
})







