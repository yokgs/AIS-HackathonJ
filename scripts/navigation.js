document.querySelector('button.menu').addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('body>header>nav').setAttribute('class', 'active');
});
document.querySelector('body>header>nav>.close').addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('body>header>nav.active').setAttribute('class', '');
});
document.querySelectorAll('.team>.head-box').forEach(x=>{
    x.onclick=function (){
        let id=this.getAttribute('id');
        document.querySelector('.team>.block').setAttribute('class','block on '+id);
        setTimeout(x=>{
            document.querySelector('.team>.block').setAttribute('class','block');
        },2500);
    }
});
document.onkeyup=e=>{
    switch(e.key){
        case 'u':
        window.scrollTo(0,0);
        break;
        case 't':
            window.scrollTo(0,0);
alert(document.querySelector('.team').scrollTop)
            break;
    }
}