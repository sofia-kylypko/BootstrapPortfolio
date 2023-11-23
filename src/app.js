let btnWeather=document.getElementById("weatherBTN");
let btnTransition=document.getElementById("transition");

btnWeather.addEventListener("click",()=> {
    console.log(1);
    window.location.href = 'https://comforting-mandazi-cf1db8.netlify.app/';
});

btnTransition.addEventListener("click",()=> {
    let link = btnTransition.getAttribute("props");
    window.location.href = link;
});