

var ope = document.querySelectorAll("#opcoes1");

for(let i = 0; i< ope.length; i++){
    ope[i].addEventListener("mouseover", ()=>{
        ope[i].className = "ole"
        
    })
    ope[i].addEventListener("mouseout", ()=>{
        ope[i].className = "opcoes"
    })
}
