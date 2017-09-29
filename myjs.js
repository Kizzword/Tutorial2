document.getElementById("open").addEventListener("click", function(){
    
    document.getElementById("control").style.left = "0px";
});

document.getElementById("bg1").addEventListener("click", function(){
    
    document.getElementById("bgImg").style.backgroundImage = "url(img/img1.png)";
})

document.getElementById("bg2").addEventListener("click", function(){
    
    document.getElementById("bgImg").style.backgroundImage = "url(img/img2.jpg)";
})

document.getElementById("bg3").addEventListener("click", function(){
    
    document.getElementById("bgImg").style.backgroundImage = "url(img/img3.jpg)";
})

document.getElementById("close").addEventListener("click", function(){
    
    document.getElementById("control").style.left = "-200px";
});