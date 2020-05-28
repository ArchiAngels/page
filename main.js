const wrap_avatar = document.getElementsByClassName('wrap-avatar');
const avatar = document.getElementsByClassName('my-avatar');
const ul_nav_bar = document.getElementsByClassName('ul-nav-bar');
const canvas = document.getElementsByClassName('canvas');
const mouse_pos ={
    x:0,
    y:0
}
let dis_pers = 25;

window.addEventListener('mousemove',function(event){
        if(event.clientX > avatar[0].offsetParent.parentElement.offsetLeft && event.clientX < avatar[0].offsetParent.parentElement.offsetLeft+ avatar[0].offsetParent.parentElement.offsetWidth &&
            event.clientY + window.scrollY > avatar[0].offsetParent.parentElement.offsetTop && event.clientY + window.scrollY< avatar[0].offsetParent.parentElement.offsetTop+ avatar[0].offsetParent.parentElement.offsetHeight){
                if(event.target == avatar[0]){
                    mouse_pos.x = event.clientX - avatar[0].offsetParent.offsetLeft;
                    mouse_pos.y = event.clientY - avatar[0].offsetParent.offsetTop;                    
                    css_class_js(true);
                }
            }
        else{css_class_js(false);}
        
});
function css_class_js(bool){
    if(bool){
        let coors = {
            y:mouse_pos.x < wrap_avatar[0].clientWidth*0.5? ((mouse_pos.x - wrap_avatar[0].clientWidth*0.5)/(wrap_avatar[0].clientWidth*0.5))*dis_pers : -dis_pers*(1 - (mouse_pos.x/(wrap_avatar[0].clientWidth*0.5))),
            x:mouse_pos.y < wrap_avatar[0].clientWidth*0.5? ((mouse_pos.y - wrap_avatar[0].clientHeight*0.5)/(wrap_avatar[0].clientHeight*0.5))*-dis_pers : dis_pers*(1 - (mouse_pos.y/(wrap_avatar[0].clientHeight*0.5)))
        }
        avatar[0].style.transform = `rotateY(${coors.y}deg) rotateX(${coors.x}deg)`;
    }
    if(!bool){
        setTimeout(()=>{
            avatar[0].style.transform = 'rotateX(0deg) rotateY(0deg)';
        },400);
    }
}
window.addEventListener('click',function(event){
    if(event.target.className.includes('btn-nav-bar')){
        event.target.textContent == 'Open'? open_nav(event): clouse_nav(event);
    }
    function open_nav(event){
        event.target.innerHTML = 'Clouse';
        event.target.style.borderRadius = '0%';
        event.target.style.transform = 'rotate(360deg)';
        // ul_nav_bar[0].classList.remove('hide');
        for(let i = 0; i < ul_nav_bar[0].children.length;i++){
            // ul_nav_bar[0].children[i].classList.add('Fade');
            ul_nav_bar[0].children[i].classList.remove('hide');
            ul_nav_bar[0].children[i].classList.add('nav-bar-ul-li');
        }
    }
    function clouse_nav(event){
        event.target.innerHTML = 'Open';
        event.target.style.transform = 'rotate(-360deg)';
        event.target.style.borderRadius = '50%';
        // ul_nav_bar[0].classList.add('hide');
        for(let i = 0; i < ul_nav_bar[0].children.length;i++){
            // ul_nav_bar[0].children[i].classList.remove('Fade');
            ul_nav_bar[0].children[i].classList.remove('nav-bar-ul-li');
            ul_nav_bar[0].children[i].classList.add('hide');
        }
    }
})
window.addEventListener('scroll',function(){
    for(let i = 0 ; i < ul_nav_bar[0].childElementCount;i++){
        if( (ul_nav_bar[0].children[i].offsetTop+window.scrollY)/window.innerHeight >= 0.94 ){
            ul_nav_bar[0].children[i].style.color = 'black';
        }
        else{
            ul_nav_bar[0].children[i].style.color = 'white';
        }
    }
        if(window.scrollY >= window.innerHeight*2){
            canvas[0].style.position = '';
            canvas[0].style.top = (window.innerHeight*2)+'px';
        }
        else{
            canvas[0].style.position = 'fixed';
            canvas[0].style.top = 0;
        }
  })
// event.clientX > wrap_avatar[0].offsetParent.parentElement.offsetLeft && event.clientX < wrap_avatar[0].offsetParent.parentElement.offsetLeft+wrap_avatar[0].offsetParent.parentElement.offsetWidth &&
// event.clientY > wrap_avatar[0].offsetParent.parentElement.offsetTop && event.clientY < wrap_avatar[0].offsetParent.parentElement.offsetTop+wrap_avatar[0].offsetParent.parentElement.offsetHeight