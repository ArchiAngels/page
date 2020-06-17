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
    current_anim:[],
    can_anim:[],
    const:[],
    n0:[],
    n1:[],
    reset:function(finish_number){
        console.log('RESET OBJ',this.current_anim[0]);
        this.const[finish_number].last_item.innerHTML = this.const[finish_number].const;
        console.log(this.const[finish_number].last_item.innerHTML);
        this.can_anim[finish_number] = true;
        this.n0[finish_number] = 0;
        this.n1[finish_number] = 0;
        this.const[finish_number].last_item = 0;
        this.current_anim[finish_number] = 'finish';
    }
}
// let arr_sym = ['%','$','/','@',';','!','+','#'];
let arr_sym = ['诶','比','西','迪','伊','弗','吉','尺','艾','杰','开','勒','马','娜','哦','屁','吉','儿','丝','提','伊','维','维','克','艾','德'];
// let arr_sym = ['💥','😾','👻','🌈','❄','☄','⚡','🌚','🌍','🎄','🎨','🎋','🍭','🍪','🍑','🦊','🐅','🤔','⚔','👑','📚','💰','🍍','🦋','🍁','🦆'];
let tmp_a = window.scrollY > btn_ul.class[0].offsetHeight;
const mouse_pos ={
    x:0,
    y:0
}
let dis_pers = 25;

init();

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
                    if(event.target == ul_nav_bar[0].children[i]){
                        // console.log('IN',event.target);
                        // break;
                        if(ul_info.can_anim[i]){
                            if(event.target != ul_info.const[i].last_item){
                                    ul_info.const[i]['last_item'] = event.target;
                                    ul_info.current_anim.push(i);
                                    console.log(`START :: ${ul_info.const[i].last_item} index:: ${ul_info.current_anim}`);
                                // if(ul_info.const.length < 5) {}
                                // else{
                                //     ul_info.const.shift();
                                // }
                                    anim_for(ul_info.const[i]);
                                break;
                            }
                        }
                    }
                    // else{
                        // if(i == ul_nav_bar[0].children.length -1 && ul_info.can_anim != true){
                        //         // console.log('OutSide',event.target);
                        //     // setTimeout(function(){
                        //         console.log('THIS TRO RESET');
                        //         ul_info.reset();
                        //     // },150);
                        //         break;
                        // }
                    // }
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
    // console.log('go',item,item.index);
    if(ul_info.can_anim){
        ul_info.can_anim[item.index] = false;
        ul_info.n0[item.index] = 0;
        ul_info.n1[item.index] = item.last_item.innerHTML.length;
        help_first(ul_info.n0[item.index],ul_info.n1[item.index],item.index);
    }
}
function help_first(start_num,finish_num,index){
    // console.log('go2',start_num,finish_num,index);
    ul_info.n0[index] = start_num;
    // console.log(index,ul_info.n0[index],start_num,finish_num);
    if(start_num < finish_num){
        help_two(index);
    }
    else{
        setTimeout(function(){
            console.log('FINISH',index);
            ul_info.reset(index);
        },150);
    }
}
function help_two(index,n = 0,l = arr_sym.length){
    if(n < l){
        let tmp_1,tmp_2,tmp_3,tmp_4;
            tmp_1 = ul_info.const[index].last_item.innerHTML.slice(0,ul_info.n0[index]);
            tmp_2 = ul_info.const[index].last_item.innerHTML.slice(ul_info.n0[index]+1,ul_info.const[index].last_item.innerHTML.length);
            tmp_4 = (Math.round(Math.random()*(arr_sym.length-1)));
        if(ul_info.const[index].last_item.innerHTML[ul_info.n0[index]] != ' '){
            tmp_3 = tmp_1 + arr_sym[tmp_4] + tmp_2;
        }
        else{
            tmp_3 = tmp_1 + ' ' + tmp_2;
        }
        // console.log(n,l,tmp_3);
            ul_info.const[index].last_item.innerHTML = tmp_3;
        setTimeout(function(){
            help_two(index,n+1,l);
        },0);
    }
    else{
        setTimeout(function(){
            // console.log('go',ul_info);
            help_first(ul_info.n0[index]+1,ul_info.n1[index],index);
        },0);
    }
}
function init(){
        for( let i = 0; i < ul_nav_bar[0].children.length;i++){
            let obj = {};
                obj['index'] = i;
                obj['const'] = ul_nav_bar[0].children[i].innerHTML;
                // obj['last_item'] = ul_nav_bar[0].children[i];
            ul_info.const.push(obj);
            ul_info.can_anim.push(true);
            ul_info.n0.push(0);
            ul_info.n1.push(0);
            ul_nav_bar[0].children[i].innerHTML = 'Secret';
        }
}
// event.clientX > wrap_avatar[0].offsetParent.parentElement.offsetLeft && event.clientX < wrap_avatar[0].offsetParent.parentElement.offsetLeft+wrap_avatar[0].offsetParent.parentElement.offsetWidth &&
// event.clientY > wrap_avatar[0].offsetParent.parentElement.offsetTop && event.clientY < wrap_avatar[0].offsetParent.parentElement.offsetTop+wrap_avatar[0].offsetParent.parentElement.offsetHeight