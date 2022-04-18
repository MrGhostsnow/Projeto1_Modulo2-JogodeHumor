var bot1 = document.getElementById('bstark');

var img = document.getElementById('stark1');
bot1.onclick = function(){
    if(bot1.value === "Como se parece"){
        img.src = 'assets/Projeto 1/arya.jpg';
        bot1.value = 'Voltar'
        bot1.innerHTML = 'Voltar';
    }else{
    img.src = 'assets/Projeto 1/casa_stark.jpg' 
    bot1.value = 'Como se parece' 
    bot1.innerHTML = "Como se parece" 
    }
}


var bot2 = document.getElementById('blannister');
var img2 = document.getElementById('lannister1');
bot2.onclick = function(){
    if(bot2.value === "Como se parece"){
        img2.src = 'assets/Projeto 1/jaime.jpg';
        bot2.value = 'Voltar'
        bot2.innerHTML = 'Voltar';
    }else{
    img2.src = 'assets/Projeto 1/casa_lannister.jpg' 
    bot2.value = 'Como se parece' 
    bot2.innerHTML = "Como se parece" 
    }
}


// bot2.addEventListener("click", function () {
//     document.getElementById('lannister1').src= "assets/Projeto 1/jaime.jpg"
    
// })

var bot3 = document.getElementById('btargaryan');
var img3 = document.getElementById('targaryan1');
bot3.onclick = function(){
    if(bot3.value === "Como se parece"){
        img3.src = 'assets/Projeto 1/daenarys.jpg';
        bot3.value = 'Voltar'
        bot3.innerHTML = 'Voltar';
    }else{
    img3.src = 'assets/Projeto 1/casa_targaryan.jpg' 
    bot3.value = 'Como se parece' 
    bot3.innerHTML = "Como se parece" 
    }
}


// bot3.addEventListener("click", function () {
//     document.getElementById('targaryan1').src= "assets/Projeto 1/daenarys.jpg"
    
// })