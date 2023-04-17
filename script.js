let divs = document.querySelectorAll('.loader div');
let a = [];
setInterval(() => {
  a.push(1)
    setTimeout(()=>{
    divs[0].style.transform = `rotateX(360deg)`; 
    divs[0].style.transition= `.5s ease-in`;
    a.length===1?divs[0].style.color='red':a.length===2?divs[0].style.color='blue':a.length===3?divs[0].style.color='green':'';
    setTimeout(() => {
        divs[0].style.transition = `0s`;
        divs[0].style.transform = `rotateX(0deg)`;
    }, 500);
    },250)
    setTimeout(() => {
       divs[1].style.transform = 'rotateX(360deg)'; 
       divs[1].style.transition= `.5s ease-in`;
       a.length===1?divs[1].style.color='red':a.length===2?divs[1].style.color='blue':a.length===3?divs[1].style.color='green':'';
       setTimeout(() => {
        divs[1].style.transform = 'rotateX(0deg)'; 
       divs[1].style.transition= `0s`;
       }, 500);
    }, 400);
    setTimeout(() => {
        divs[2].style.transform = 'rotateX(360deg)'; 
        divs[2].style.transition= `.5s ease-in`;
        a.length===1?divs[2].style.color='red':a.length===2?divs[2].style.color='blue':a.length===3?divs[2].style.color='green':'';
        setTimeout(() => {
            divs[2].style.transform = 'rotateX(0deg)'; 
        divs[2].style.transition= `0s`;
        }, 500);
     }, 550);
     setTimeout(() => {
        divs[3].style.transform = 'rotateX(360deg)'; 
        divs[3].style.transition= `.5s ease-in`;
        a.length===1?divs[3].style.color='red':a.length===2?divs[3].style.color='blue':a.length===3?divs[3].style.color='green':'';
        setTimeout(() => {
            divs[3].style.transform = 'rotateX(0deg)'; 
        divs[3].style.transition= `0s`;
        }, 500);
     }, 700);
     setTimeout(() => {
        divs[4].style.transform = 'rotateX(360deg)'; 
        divs[4].style.transition= `.5s ease-in`;
        a.length===1?divs[4].style.color='red':a.length===2?divs[4].style.color='blue':a.length===3?divs[4].style.color='green':'';
        setTimeout(() => {
            divs[4].style.transform = 'rotateX(0deg)'; 
            divs[4].style.transition= `0s`;
        }, 500);
     }, 850);
     setTimeout(() => {
        divs[5].style.transform = 'rotateX(360deg)'; 
        divs[5].style.transition= `.5s ease-in`;
        a.length===1?divs[5].style.color='red':a.length===2?divs[5].style.color='blue':a.length===3?divs[5].style.color='green':'';
        setTimeout(() => {
            divs[5].style.transform = 'rotateX(0deg)'; 
            divs[5].style.transition= `0s`;
        }, 500);
     }, 1000);
     setTimeout(() => {
        divs[6].style.transform = 'rotateX(360deg)'; 
        divs[6].style.transition= `.5s ease-in`;
        a.length===1?divs[6].style.color='red':a.length===2?divs[6].style.color='blue':a.length===3?divs[6].style.color='green':'';
        setTimeout(() => {
            divs[6].style.transform = 'rotateX(0deg)'; 
            divs[6].style.transition= `0s`;
        }, 500);
     }, 1150);
     if(a.length > 3) return a.splice(0,3);
    console.log(a);
}, 2000);