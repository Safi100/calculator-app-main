const theme1 = document.querySelectorAll("#theme1");
const theme2 = document.querySelectorAll("#theme2");
const theme3 = document.querySelectorAll("#theme3");
const html = document.querySelector('html');

theme1.forEach((theme) => {
    theme.addEventListener('click',()=>{
        html.classList.add('Theme1');
        html.classList.remove('Theme2');
        html.classList.remove('Theme3');
    })
});

theme2.forEach((theme)=>{
    theme.addEventListener('click',()=>{
        html.classList.add('Theme2');
        html.classList.remove('Theme1');
        html.classList.remove('Theme3');
    })
})

theme3.forEach((theme)=>{
    theme.addEventListener('click',()=>{
        html.classList.add('Theme3');
        html.classList.remove('Theme2');
        html.classList.remove('Theme1');
    })
})