// let central_circle = document.getElementsByClassName('child-test');
// let avatar_box = document.getElementsByClassName('avatar_wrap');
let ul_nav_bar = document.getElementsByClassName('ul-nav-bar');


// let mouse_pos ={
//     x:0,
//     y:0
// }
// let dis_pers = 25;

// window.addEventListener('mousemove',function(event){

//         if(event.clientX > avatar_box[0].offsetLeft && event.clientX < avatar_box[0].offsetLeft+avatar_box[0].offsetWidth &&
//             event.clientY > avatar_box[0].offsetTop && event.clientY < avatar_box[0].offsetTop+avatar_box[0].offsetHeight){
//                 // console.log('IN');
//                 if(event.target == central_circle[0]){
//                     mouse_pos.x = event.clientX - central_circle[0].offsetParent.offsetLeft - central_circle[0].offsetParent.offsetParent.offsetLeft;
//                     mouse_pos.y = event.clientY - central_circle[0].offsetParent.offsetTop - central_circle[0].offsetParent.offsetParent.offsetTop;
//                     // console.log(`X: ${mouse_pos.x}\n Y: ${mouse_pos.y}`);
//                     css_class_js(true);
            
//                 }
//             }
        
//         else{
//             css_class_js(false);
//             // console.log('OUT');
//         }
// })
// function css_class_js(boll){
//     if(boll == true){
//         central_circle[0].style.cursor = 'pointer';
//         central_circle[0].style.transformStyle = 'preserve-3d';
//         let coors = {
//             y:mouse_pos.x > central_circle[0].clientWidth*0.5? ((mouse_pos.x - central_circle[0].clientWidth*0.5)/(central_circle[0].clientWidth*0.5))*dis_pers : -dis_pers*(1 - (mouse_pos.x/(central_circle[0].clientWidth*0.5))),
//             x:mouse_pos.y > central_circle[0].clientWidth*0.5? ((mouse_pos.y - central_circle[0].clientHeight*0.5)/(central_circle[0].clientHeight*0.5))*-dis_pers : dis_pers*(1 - (mouse_pos.y/(central_circle[0].clientHeight*0.5)))
//         }
//         central_circle[0].style.transform = `rotateY(${coors.y}deg) rotateX(${coors.x}deg)`;
//     }
//     if(boll == false){
//         central_circle[0].style.cursor = 'none';
//         central_circle[0].style.transformStyle = 'none';
//         setTimeout(()=>{
//             central_circle[0].style.transform = 'rotateX(0deg) rotateY(0deg)';
//         },400);
//     }
// }
// window.addEventListener('scroll',function(event){
//     // console.log(event);
//     // console.log(wrap[0]);
//     // console.log(body);
//     // console.log((window.scrollY/window.scrollMaxY).toFixed(2));
// })
window.addEventListener('click',function(event){
    if(event.target.className.includes('btn-nav-bar')){
        console.log('THIS',event.target.textContent);
        event.target.textContent == 'Open'? open_nav(event): clouse_nav(event);
        
    }
    // console.log(event.target);
    function open_nav(event){
        event.target.innerHTML = 'Clouse';
        event.target.style.borderRadius = '0%';
        event.target.style.transform = 'rotate(360deg)';
        ul_nav_bar[0].classList.remove('hide');
        for(let i = 0; i < ul_nav_bar[0].children.length;i++){
            ul_nav_bar[0].children[i].classList.add('Fade');
        }
        console.log(ul_nav_bar[0].className);
    }
    function clouse_nav(event){
        event.target.innerHTML = 'Open';
        event.target.style.transform = 'rotate(-360deg)';
        event.target.style.borderRadius = '50%';
        ul_nav_bar[0].classList.add('hide');
        for(let i = 0; i < ul_nav_bar[0].children.length;i++){
            ul_nav_bar[0].children[i].classList.remove('Fade');
        }
        console.log(ul_nav_bar[0].className);
    }
})
// event.clientX > central_circle[0].offsetParent.parentElement.offsetLeft && event.clientX < central_circle[0].offsetParent.parentElement.offsetLeft+central_circle[0].offsetParent.parentElement.offsetWidth &&
// event.clientY > central_circle[0].offsetParent.parentElement.offsetTop && event.clientY < central_circle[0].offsetParent.parentElement.offsetTop+central_circle[0].offsetParent.parentElement.offsetHeight