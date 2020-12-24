console.clear();

const headerBg = document.querySelector("header");
const work_wrap = document.querySelector("div.work_wrap");
const work_list = document.querySelectorAll("div.work_wrap > ul > li");

window.addEventListener('scroll', scrollEvent);
function scrollEvent(){
    let curScroll = document.documentElement.scrollTop;
    if(curScroll < 100){
        headerBg.style.background = "transparent";
    }else{
        headerBg.style.background = "#0464b3";
    }

    let work_wrap_top = work_wrap.getBoundingClientRect().top;

    if(work_wrap_top < window.innerHeight * 0.9){
        for(let i = 0 ; i < work_list.length ; i++){
            work_list[i].classList.add('active_list');
        }
    }


}
