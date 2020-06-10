const wrap_avatar = document.getElementsByClassName('wrap-avatar');
const avatar = document.getElementsByClassName('my-avatar');
// const btn_ul = document.getElementsByClassName('btn-nav-bar');
const ul_nav_bar = document.getElementsByClassName('ul-nav-bar');
const canvas = document.getElementsByClassName('canvas');
const btn_ul = {
    class:document.getElementsByClassName('btn-nav-bar'),
    open:function (){
            this.class[0].innerHTML = 'Clouse';
            this.class[0].style.borderRadius = '0%';
            this.class[0].style.transform = 'rotate(360deg)';
            // ul_nav_bar[0].classList.remove('hide');
            for(let i = 0; i < ul_nav_bar[0].children.length;i++){
                // ul_nav_bar[0].children[i].classList.add('Fade');
                ul_nav_bar[0].children[i].classList.remove('hide');
                ul_nav_bar[0].children[i].classList.add('nav-bar-ul-li');
            }
        },
    clouse:function (){
            this.class[0].innerHTML = 'Open';
            this.class[0].style.transform = 'rotate(-360deg)';
            this.class[0].style.borderRadius = '50%';
            // ul_nav_bar[0].classList.add('hide');
            for(let i = 0; i < ul_nav_bar[0].children.length;i++){
                // ul_nav_bar[0].children[i].classList.remove('Fade');
                ul_nav_bar[0].children[i].classList.remove('nav-bar-ul-li');
                ul_nav_bar[0].children[i].classList.add('hide');
                this.class[0].classList.add('btn-mini-hide');
            }
        }
}
let ul_info = {
    bool:true,
    last_item:[],
    const:[],
    n0:0,
    n1:0
}
let arr_sym = ['%','$','/','@',';','!','+','#'];
// let arr_sym = ['0','3','8','6'];
let tmp_a = window.scrollY > btn_ul.class[0].offsetHeight;
const mouse_pos ={
    x:0,
    y:0
}
let dis_pers = 25;

window.addEventListener('mousemove',function(event){
        if(event.clientX > avatar[0].offsetParent.parentElement.offsetLeft && event.clientX < avatar[0].offsetParent.parentElement.offsetLeft+ avatar[0].offsetParent.parentElement.offsetWidth &&
            event.clientY +window.scrollY> avatar[0].offsetParent.parentElement.offsetTop && event.clientY +window.scrollY< avatar[0].offsetParent.parentElement.offsetTop+ avatar[0].offsetParent.parentElement.offsetHeight){
                if(event.target == avatar[0]){
                    mouse_pos.x = event.clientX - avatar[0].offsetParent.offsetLeft;
                    mouse_pos.y = event.clientY - avatar[0].offsetParent.offsetTop + window.scrollY;                    
                    css_class_js(true);
                }
        }
        else{css_class_js(false);}
        if(tmp_a){
            if(event.target == btn_ul.class[0]){
                for(let i = 0; i < btn_ul.class[0].classList.length;i++){
                    if(btn_ul.class[0].classList[i] == 'btn-mini-hide'){
                        btn_ul.class[0].classList.remove('btn-mini-hide');
                    }
                }
            }
            else{
                if(btn_ul.class[0].innerHTML == 'Open'){
                    btn_ul.class[0].classList.add('btn-mini-hide');
                }
            }
        }
        if(btn_ul.class[0].innerHTML == 'Clouse'){
            for( let i = 0; i < ul_nav_bar[0].children.length;i++){
                if(event.target == ul_nav_bar[0].children[i] && ul_info.bool && event.target != ul_info.last_item ){
                    // console.log(`ANIM for ${ul_nav_bar[0].children[i].innerHTML}`);
                    console.log('LOH');
                    ul_info.last_item = event.target;
                        let mini_obj = {};
                        mini_obj['Elem'] = ul_nav_bar[0].children[i].innerHTML;
                        mini_obj['Num'] = i;
                    ul_info.const.push(mini_obj);
                    //     mini_obj['Elem'] = ul_nav_bar[0].children[i];
                    //     mini_obj['Num'] = i;
                    // ul_info.last_item.push(mini_obj);
                    if(ul_info.const.length < 5) {}
                    else{
                        ul_info.const.shift();
                    }
                    // if(ul_info.last_item.length < 5) {}
                    // else{
                    //     ul_info.last_item.shift();
                    // }
                    console.log(ul_info.const);
                    anim_for(ul_info.last_item);
                    break;
                }
            }
        }
        
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
    if(event.target == btn_ul.class[0]){
        btn_ul.class[0].textContent == 'Open'? btn_ul.open(): btn_ul.clouse();
    }
})
window.addEventListener('scroll',function(){
    tmp_a = window.scrollY > btn_ul.class[0].offsetHeight;
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
    if(window.scrollY > btn_ul.class[0].offsetHeight){
        btn_ul.class[0].innerHTML == 'Open'?btn_ul.class[0].classList.add('btn-mini-hide'):0;
    }
    else{
        btn_ul.class[0].classList.remove('btn-mini-hide');
    }
})
function anim_for(item){
    console.log('go',item);
    if(ul_info.bool){
        // ul_info.bool = false;
        ul_info.n0 = 0;
        ul_info.n1 = item.innerHTML.length;
        help_first(ul_info.n0,ul_info.n1);
    }
}
function help_first(start_num,finish_num){
    ul_info.n0 = start_num;
    console.log(start_num,finish_num);
    if(start_num < finish_num){
        // console.log(ul_info.last_item.innerHTML[start_num]);
        // setTimeout(function(){
            help_two();
        // },60);
    }
    else{
        // console.log('NOW',);
        // ul_info.bool = true;
        setTimeout(function(){
            
            ul_info.last_item.innerHTML = ul_info.const[0].Elem;

            ul_info.const.shift();
        },500);
    }
}
function help_two(n = 0,l = arr_sym.length){
    // console.log('HELPE',ul_info);
    if(n < l){
        let tmp_1,tmp_2,tmp_3,tmp_4;
        tmp_1 = ul_info.last_item.innerHTML.slice(0,ul_info.n0);
        tmp_2 = ul_info.last_item.innerHTML.slice(ul_info.n0+1,ul_info.last_item.innerHTML.length);
        tmp_4 = (Math.round(Math.random()*(arr_sym.length-1)));
        tmp_3 = tmp_1 + arr_sym[tmp_4] + tmp_2;
        // console.log(tmp_3,tmp_4,arr_sym[tmp_4],ul_info.last_item.innerHTML,ul_info.const);
        ul_info.last_item.innerHTML = tmp_3;
        setTimeout(function(){
            help_two(n+1,l);
        },20);
    }
    else{
        // console.log("Finish one Part");
        setTimeout(function(){
            help_first(ul_info.n0+1,ul_info.n1);
        },20);
    }
}
// event.clientX > wrap_avatar[0].offsetParent.parentElement.offsetLeft && event.clientX < wrap_avatar[0].offsetParent.parentElement.offsetLeft+wrap_avatar[0].offsetParent.parentElement.offsetWidth &&
// event.clientY > wrap_avatar[0].offsetParent.parentElement.offsetTop && event.clientY < wrap_avatar[0].offsetParent.parentElement.offsetTop+wrap_avatar[0].offsetParent.parentElement.offsetHeight