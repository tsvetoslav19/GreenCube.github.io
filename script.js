var img = document.getElementById("cover-img");

document.getElementById("btn-A").addEventListener("click", function() {
    img.src='./images/Food350.png';
    restartAnimation();
});

document.getElementById("btn-B").addEventListener("click", function() {
    img.src='./images/Coffee350.jpg';
    restartAnimation();
});
document.getElementById("btn-C").addEventListener("click", function() {
    img.src='./images/Reverse350.png';
    restartAnimation();
});

function restartAnimation(){
    document.querySelector(".cover").classList.remove("animate");

    setTimeout(function(){
        document.querySelector(".cover").classList.add("animate");
    },1);
}