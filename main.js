const wrap_avatar = document.getElementsByClassName('wrap-avatar');
const avatar = document.getElementsByClassName('my-avatar');
// const btn_ul = document.getElementsByClassName('btn-nav-bar');
const ul_nav_bar = document.getElementsByClassName('ul-nav-bar');
const canvas = document.getElementsByClassName('canvas');
const main_wrap = document.getElementsByClassName('main-content');
const ddd_card = {
    class:document.getElementsByClassName('wrap-spec'),
    test:document.getElementsByClassName('block-content'),
    deg:90,
    // window.y >= this.offsetTop+offsetHeight = +90deg
    whic_item:function(){
        for(let i = 0 ; i < this.test.length-1;i++){
            if(i > 0){
                let tmp = this.test[i-1].offsetTop + this.test[i-1].offsetHeight;
                let tmp2= this.test[i].offsetTop + this.test[i].offsetHeight;
                if(window.scrollY >= this.test[i].offsetTop && window.scrollY <= this.test[i].offsetTop + this.test[i].offsetHeight){
                    // console.log(`Scroll i-1:${window.scrollY} top+Height:${this.test[i].offsetTop + this.test[i].offsetHeight} ${((window.scrollY-tmp)/(this.test[i].offsetTop + this.test[i].offsetHeight))*90}`);
                    // console.log(window.scrollY,tmp,tmp2,((window.scrollY-tmp)/(tmp2-tmp)*90));
                    // console.log(this.class[i-1],i-1);
                    this.class[i-1].style.transform = `rotateX(${(((window.scrollY-tmp)/(tmp2-tmp))*90)}deg)`;
                    // this.class[i].style.transform = `rotateX(${(window.scrollY/(this.test[i].offsetTop + this.test[i].offsetHeight))*90}deg) `;
                    this.class[i].style.transform = `rotateX(${-90+((window.scrollY-tmp)/(tmp2-tmp)*90)}deg) scale(${(window.scrollY-tmp)/(tmp2-tmp)})`;
                    break;
                }
            }
            else{
                if(window.scrollY >= this.test[i].offsetTop && window.scrollY <= this.test[i].offsetTop + this.test[i].offsetHeight){
                    // console.log(`Scroll:${window.scrollY} top+Height:${this.test[i].offsetTop + this.test[i].offsetHeight} ${(window.scrollY/(this.test[i].offsetTop + this.test[i].offsetHeight))}`);
                    this.class[i].style.transform = `rotateX(${-90+((window.scrollY)/(this.test[i].offsetTop + this.test[i].offsetHeight)*90)}deg) scale(${(window.scrollY)/(this.test[i].offsetTop + this.test[i].offsetHeight)})`;
                    // this.class[i+1].style.transform = `rotateX(${-90+(window.scrollY/(this.test[i].offsetTop + this.test[i].offsetHeight)*90)}deg) scale(${window.scrollY/(this.test[i].offsetTop + this.test[i].offsetHeight)})`;
                    break;
                }
            }
        }
    }
}
const btn_ul = {
    class:document.getElementsByClassName('btn-nav-bar'),
    darkMode:false,
    onFocus:false,
    inProgressAnim:false,
    hideBtnUl: false,
    open:function (){
        // console.log('open');
            this.class[0].innerHTML = 'Clouse';
            this.class[0].style.borderRadius = '0%';
            this.class[0].style.transform = 'rotate(360deg)';
                for(let i = 0; i < ul_nav_bar[0].children.length;i++){
                    ul_nav_bar[0].children[i].classList.remove('hide');
                    ul_nav_bar[0].children[i].classList.add('nav-bar-ul-li');                
                }
            setTimeout(function(){
                btn_ul.checkTextMargin();
                obj.fresh_data();
            },400);
    },
    clouse:function (){
        // console.log('clouse');
            this.class[0].innerHTML = 'Open';
            this.class[0].style.transform = 'rotate(-360deg)';
            this.class[0].style.borderRadius = '50%';
                for(let i = 0; i < ul_nav_bar[0].children.length;i++){
                    ul_nav_bar[0].children[i].classList.remove('nav-bar-ul-li');
                    ul_nav_bar[0].children[i].classList.add('hide');
                }
            this.onFocus == false?this.hideBtnUl == true?this.class[0].classList.add('btn-mini-hide'):0:0;
    },
    clickOnChild:function(event){
            // console.log(event.target);
            // console.log(obj.itIsPhone,': PHONE?');
            if(event.clientX >= ul_nav_bar[0].offsetParent.offsetLeft &&
                event.clientX <= ul_nav_bar[0].offsetParent.offsetLeft + ul_nav_bar[0].offsetParent.offsetWidth &&
                event.clientY <= ul_nav_bar[0].offsetHeight + ul_nav_bar[0].offsetTop){
                for( let i = 0; i < ul_nav_bar[0].children.length;i++){
                    if(event.target == ul_nav_bar[0].children[i] || event.target == ul_nav_bar[0].children[i].children[0]){
                        ul_nav_bar[0].children[i].className.includes('changeMode')?this.ChangeMod():continueAnimation();
                        function continueAnimation(){
                            if(ul_info.can_anim[i]){
                                if(event.target != ul_info.const[i].last_item){
                                    // console.log(event.target,event.target.children[0]);
                                    ul_info.const[i]['last_item'] = event.target.tagName == 'P'?event.target:event.target.children[0];
                                    ul_info.current_anim.push(i);
                                    // console.log(`START :: ${ul_info.const[i].last_item.innerHTML} index:: ${ul_info.current_anim}`);
                                    btn_ul.html.showDrakScene?  btn_ul.html.HideNav(i):anim_for(ul_info.const[i]);
                                    btn_ul.inProgressAnim = true;
                                }
                            }
                        }
                        break;
                    }
                }
            }
            else{
                btn_ul.clouse();
            }
    },
    checkTextMargin:function(){
            for(let i = 0 ; i < ul_nav_bar[0].childElementCount;i++){
                if(!this.darkMode){
                    if( (ul_nav_bar[0].children[i].offsetTop+window.scrollY+ul_nav_bar[0].children[i].offsetHeight)/window.innerHeight >= 1.04 ){
                        ul_nav_bar[0].children[i].style.color = 'black';
                    }
                    else{
                        ul_nav_bar[0].children[i].style.color = 'white';
                    }
                }
                else{
                    ul_nav_bar[0].children[i].style.color = 'white';
                }
            }
    },
    ChangeMod:function (){
        this.darkMode == false? this.darkMode = true:this.darkMode = false; 
        this.darkMode == true? document.getElementsByClassName('lrA')[0].style.backgroundImage = "url(./imgs/tower.png)":document.getElementsByClassName('lrA')[0].style.backgroundImage = "url(./imgs/radar.png)";
        this.darkMode == false? document.getElementsByClassName('changeMode')[0].innerHTML = 'DarkMode (off)':document.getElementsByClassName('changeMode')[0].innerHTML = 'DarkMode (on)';
        // console.log(this.darkMode,this.html.showDrakScene);
        this.darkMode == false? document.body.style.backgroundColor = '#dae2f8':document.body.style.backgroundColor = '#141517';
        this.html.showDrakScene == true?0:this.darkMode == false? document.getElementsByClassName('wrap_for_bgc')[0].style.opacity = '1':document.getElementsByClassName('wrap_for_bgc')[0].style.opacity = '0.5';
        for(let i =0; i < main_wrap[0].childElementCount;i++){
            // i == 0?document.getElementsByClassName('block-content')[i].style.opacity = 0.5:0;
            this.darkMode == false? document.getElementsByClassName('block-content')[0].style.opacity = 1:document.getElementsByClassName('block-content')[0].style.opacity = 0.5;
            this.darkMode == false? document.getElementsByClassName('block-content')[i].style.color = 'black': document.getElementsByClassName('block-content')[i].style.color = 'white';
        }
        this.checkTextMargin();
        obj.fresh_data();
    },
    html:{
        class:document.getElementsByClassName('DarkScene'),
        showDrakScene:true,
        showNav:function(){
            btn_ul.class[0].offsetParent.style.position = 'absolute';
            btn_ul.class[0].offsetParent.style.zIndex = '6';
            // setTimeout(hui,500);
            // function hui(){
            //     btn_ul.open();
            // }
            this.class[0].style.textAlign = 'center';
            // this.class[0].style.display = 'flex';
            this.class[0].classList.add('flex-column-center-between');
            this.class[0].style.color = '#fff';
            this.class[0].style.transition = 'opacity 2s linear';
            this.class[0].style.justifyContent = 'flex-end';
            this.class[0].style.fontSize = '2rem';
            
            this.class[0].innerHTML = `<p>Please!<br><span style = 'color:violet'>Use</span> this nav-bar<br><--<br> for <span style = 'color:#efd81d' >best</span> experience<p><br>
            👑`;
            this.class[0].children[0].style.margin = '0';
            this.class[0].children[1].style.margin = '0 0 1rem 0';
            document.body.style.overflow = 'hidden';
        },
        HideNav:function(num){
            
            btn_ul.class[0].offsetParent.style.position = 'fixed';
            btn_ul.class[0].offsetParent.style.zIndex = '2';
            this.class[0].style.opacity = '1';
            setTimeout(function(){
                document.getElementsByClassName('wrap-content')[0].style.opacity = '0';
                document.getElementsByClassName('content')[0].style.zIndex = '3'
            },2000);
            setTimeout(function(){
                document.getElementsByClassName('wrap-content')[0].style.opacity = '1';
                document.getElementsByClassName('wrap-content')[0].style.overflow = 'hidden';
                document.body.style.overflow = '';
                btn_ul.html.class[0].remove();
                document.getElementsByClassName('preview')[0].remove();
                anim_for(ul_info.const[num]);
                    setTimeout(function(){
                        btn_ul.html.showDrakScene = false;
                        btn_ul.html.showDrakScene == true?0:btn_ul.darkMode == false? document.getElementsByClassName('wrap_for_bgc')[0].style.opacity = '1'
                        :document.getElementsByClassName('wrap_for_bgc')[0].style.opacity = '0.5';
                    },3000);
            },3000);
        }
    }
}
let obj = {
    y:window.scrollY,
    noScroll:false,
    last_elem:ul_nav_bar[0].children[0],
    change_color:function(){
        for(let i = 0; i < main_wrap[0].childElementCount;i++){
            if(this.y + window.innerHeight*0.5 >= main_wrap[0].children[i].offsetTop &&
                this.y + window.innerHeight*0.5 < main_wrap[0].children[i].offsetHeight + main_wrap[0].children[i].offsetTop ){
                ul_nav_bar[0].children[i].style.color = 'lightcoral';
                if(ul_nav_bar[0].children[i].innerText == 'Secret' && btn_ul.inProgressAnim == false){
                    ul_info.const[i]['last_item'] = ul_nav_bar[0].children[i].children[0]
                    ul_info.current_anim.push(i);
                    anim_for(ul_info.const[i]);
                }
                document.title = ul_nav_bar[0].children[i].innerText.includes('Secret')? document.title = ul_nav_bar[0].children[i].innerText+' 0'+i: document.title = ul_nav_bar[0].children[i].innerText;
                break;
            }
        }
    },
    fresh_data:function(){
        this.y = window.scrollY;
        this.change_color();
    },
    itIsPhone:false,    
}
let ul_info = {
    current_anim:[],
    can_anim:[],
    const:[],
    n0:[],
    n1:[],
    scrollFinish:false,
    reset:function(finish_number){
        btn_ul.inProgressAnim == false?0:btn_ul.clouse();
        // console.log('RESET OBJ',this.current_anim[0]);
        // this.const[finish_number].last_item.parentElement.style.color == 'lightcoral'?this.unlockItem(finish_number):this.scrollTo({item:main_wrap[0].children[finish_number].offsetTop,index:window.scrollY,finish_num:finish_number});
        // console.log(this.const[finish_number].last_item,this.const[finish_number].last_item.parentElement,this.const[finish_number].last_item.parentElement.style.color);
        this.scrollTo({item:main_wrap[0].children[finish_number].offsetTop,index:window.scrollY,finish_num:finish_number});
        // this.const[finish_number].last_item.innerHTML = this.const[finish_number].const;
        this.const[finish_number].class[0] != undefined? this.const[finish_number].last_item.classList.add(`${this.const[finish_number].class[0]}`):0;
        // console.log(finish_number);
        this.can_anim[finish_number] = true;
        this.n0[finish_number] = 0;
        this.n1[finish_number] = 0;
        this.const[finish_number].last_item = 0;
        obj.noScroll = false;
        this.current_anim.pop();
    },
    scrollTo:function(obj){
        // console.log(obj,this.const[obj.finish_num]);
        if(this.scrollFinish){
            // console.log('finish',obj,main_wrap[0].children[obj.finish_num].offsetTop,window.scrollY);
            window.scrollTo(0,main_wrap[0].children[obj.finish_num].offsetTop);
            // console.log('finish',obj,main_wrap[0].children[obj.finish_num].offsetTop,window.scrollY);
            this.scrollFinish = false;
            this.unlockItem(obj.finish_num);
        }
        else{
            window.scrollTo(0,obj.index);
            if(obj.index >= obj.item - 5 && obj.index <= obj.item +5){ // -5 & +5 is half of speed (10)
                this.scrollFinish = true;

            }
            obj.index > obj.item ? obj.index -= 10:obj.index += 10;
            setTimeout(function(){
                ul_info.scrollTo(obj);
            },1);
        }
    },
    unlockItem:function(num){
        btn_ul.inProgressAnim = false;
        // console.log(num,'UNLOCK',btn_ul.inProgressAnim);
        ul_nav_bar[0].children[num].innerHTML = `<p>${this.const[num].const}</p>`;
        document.title = this.const[num].const;
    }
}
let arr_sym = ['诶','比','西','迪','伊','弗','吉','尺','艾','杰','开','勒','马','娜','哦','屁','吉','儿','丝','提','伊','维','维','克','艾','德'];
// let arr_sym2 = ['💥','😾','👻','🌈','🌍','🎄','🎨','🎋','🍭','🍪','🍑','🦊','🐅','🤔','👑','📚','💰','🍍','🦋','🍁','🦆'];
const mouse_pos ={
    x:0,
    y:0
}
let dis_pers = 25;

init();

window.addEventListener('mousemove',function(event){
    // console.log(event.target);
    // if(main_wrap[0].children[0].className.includes('no-display')){}
    // else{
        if(event.clientX > avatar[0].offsetParent.parentElement.offsetLeft && 
            event.clientX < avatar[0].offsetParent.parentElement.offsetLeft + avatar[0].offsetParent.parentElement.offsetWidth &&
            event.clientY + window.scrollY> avatar[0].offsetParent.parentElement.offsetTop && 
            event.clientY + window.scrollY< avatar[0].offsetParent.parentElement.offsetTop + avatar[0].offsetParent.parentElement.offsetHeight){
                if(event.target == avatar[0]){
                    mouse_pos.x = event.clientX - avatar[0].offsetParent.offsetLeft;
                    mouse_pos.y = event.clientY - avatar[0].offsetParent.offsetTop + window.scrollY;                    
                    css_class_js(true);
                }
        }
        else{css_class_js(false);}
    // }
    if(btn_ul.hideBtnUl){
        if(event.target == btn_ul.class[0]){
            btn_ul.onFocus = true;
            for(let i = 0; i < btn_ul.class[0].classList.length;i++){
                if(btn_ul.class[0].classList[i] == 'btn-mini-hide'){
                    btn_ul.class[0].classList.remove('btn-mini-hide');
                }
            }
        }
        else{
            btn_ul.onFocus = false;
            if(btn_ul.class[0].innerHTML == 'Open'){
                btn_ul.class[0].classList.add('btn-mini-hide');
            }                
        }
    } 
    else{
        if(event.target == btn_ul.class[0]){
            btn_ul.onFocus = true;
        }
        else{
            btn_ul.onFocus = false;
        }
        btn_ul.class[0].classList.remove('btn-mini-hide');
    }
    if(obj.itIsPhone){
        if(btn_ul.class[0].innerHTML == 'Clouse'){
            btn_ul.clickOnChild(event);
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
    if(btn_ul.class[0].innerHTML == 'Clouse'){
        if(!obj.itIsPhone){
            btn_ul.clickOnChild(event);
        }  
    } 
})
window.addEventListener('scroll',function(){
    btn_ul.hideBtnUl = window.scrollY > btn_ul.class[0].offsetHeight;
    ddd_card.whic_item();
    btn_ul.checkTextMargin();
        if(window.scrollY >= window.innerHeight*2){
            canvas[0].style.position = '';
            canvas[0].style.top = (window.innerHeight*2)+'px';
        }
        else{
            canvas[0].style.position = 'fixed';
            canvas[0].style.top = 0;
        }
    if(btn_ul.hideBtnUl){
        btn_ul.class[0].innerHTML == 'Open'?btn_ul.class[0].classList.add('btn-mini-hide'):0;
    }
    else{
        btn_ul.class[0].classList.remove('btn-mini-hide');
    }
    obj.fresh_data();
})
function anim_for(item){
    if(obj.noScroll){
        ul_info.reset(item.index);
    }
    else{
        if(ul_info.can_anim){
            
            ul_info.can_anim[item.index] = false;
            ul_info.n0[item.index] = 0;
            ul_info.n1[item.index] = item.last_item.innerHTML.length;
            ul_info.const[item.index].class[0] != ''? ul_info.const[item.index].last_item.classList.remove(`${ul_info.const[item.index].class[0]}`):0;
            help_first(ul_info.n0[item.index],ul_info.n1[item.index],item.index);
        }
    }
    
}
function help_first(start_num,finish_num,index){
    ul_info.n0[index] = start_num;
    // console.log(start_num,finish_num);
    if(start_num < finish_num){
        help_two(index);
    }
    else{
        setTimeout(function(){
            ul_info.reset(index);
        },150);
    }
}
function help_two(index,n = 0,l = arr_sym.length){
    if(n < l){
        let leftPart,RightPart,Finish,ChangedElem;
        leftPart = ul_info.const[index].last_item.innerHTML.slice(0,ul_info.n0[index]);
        RightPart = ul_info.const[index].last_item.innerHTML.slice(ul_info.n0[index]+1,ul_info.const[index].last_item.innerHTML.length);
            ChangedElem = arr_sym[(Math.round(Math.random()*(arr_sym.length-1)))];
        if(ul_info.const[index].last_item.innerHTML[ul_info.n0[index]] != ' '){
            Finish = `${leftPart}${ChangedElem}${RightPart}`;
        }
        else{
            Finish = leftPart + ' ' + RightPart;
        }
            ul_info.const[index].last_item.innerHTML = Finish;
        setTimeout(function(){
            help_two(index,n+1,l);
        },0);
    }
    else{
        setTimeout(function(){
            help_first(ul_info.n0[index]+1,ul_info.n1[index],index);
        },0);
    }
}
function init(){
        btn_ul.inProgressAnim = true;
        window.innerWidth < 900?obj.itIsPhone = true:0;
            canvas[0].style.position = 'fixed';
            canvas[0].style.top = 0;
            canvas[0].style.zIndex = 2;
            canvas[0].style.maxWidth = "100%";
            canvas[0].style.maxHeight = "100%";
            canvas[0].style.overflow = "hidden";

        for( let i = 0; i < ul_nav_bar[0].children.length;i++){
            let obj = {};
                obj['index'] = i;
                obj['const'] = ul_nav_bar[0].children[i].children[0].innerHTML;
                obj['class'] = ul_nav_bar[0].children[i].children[0].classList;

            ul_info.const.push(obj);
            ul_info.can_anim.push(true);
            ul_info.n0.push(0);
            ul_info.n1.push(0);

            // console.log(ul_nav_bar[0].children[i].className);
            ul_nav_bar[0].children[i].innerHTML = '<p>Secret</p>';
            // ul_nav_bar[0].children[i].innerHTML = '<p>Secret</p>';
            // main_wrap[0].children[i].classList.add('no-display');
        }
            let child = document.createElement('P');
            child.classList.add('hide');
            child.classList.add('changeMode');
            child.style.marginLeft = obj.itIsPhone?'-2rem':'-4rem';
            child.innerHTML = `DarkMode (off)`;
            ul_nav_bar[0].appendChild(child);
            btn_ul.html.showNav();
            setTimeout(function(){
                window.scrollTo(0,0);
            },300);
        // btn_ul.html.HideNav(0);
}
// event.clientX > wrap_avatar[0].offsetParent.parentElement.offsetLeft && event.clientX < wrap_avatar[0].offsetParent.parentElement.offsetLeft+wrap_avatar[0].offsetParent.parentElement.offsetWidth &&
// event.clientY > wrap_avatar[0].offsetParent.parentElement.offsetTop && event.clientY < wrap_avatar[0].offsetParent.parentElement.offsetTop+wrap_avatar[0].offsetParent.parentElement.offsetHeight