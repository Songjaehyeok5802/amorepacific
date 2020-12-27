console.clear();

const headerBg = document.querySelector("header");
const work_wrap = document.querySelector("div.work_wrap");
const work_list = document.querySelectorAll("div.work_wrap > ul > li");
const fade_in_contents = document.querySelectorAll(".scrollAni");

window.addEventListener('scroll', scrollEvent);
function scrollEvent(){
    let curScroll = document.documentElement.scrollTop;
    // Header Bg Change
    if(curScroll < 100){
        headerBg.style.background = "transparent";
    }else{
        headerBg.style.background = "#0464b3";
    }

    // List Fade In
    let work_wrap_top = work_wrap.getBoundingClientRect().top;
    if(work_wrap_top < window.innerHeight * 0.9){
        for(let i = 0 ; i < work_list.length ; i++){
            work_list[i].classList.add('active_list');
        }
    }

    // Common Fade In
    let fade_in_contents_top = [];
    for(let i = 0 ; i < fade_in_contents.length ; i++){
        fade_in_contents_top[i] = fade_in_contents[i].getBoundingClientRect().top;
        if(fade_in_contents_top[i] < window.innerHeight * 0.9){
            fade_in_contents[i].classList.add('fade_in')
        }
    }
}

const hire_name = document.querySelector(".hire_name");
const hire_Email = document.querySelector(".hire_Email");
const hire_title = document.querySelector(".hire_title");
const hire_comment = document.querySelector(".hire_comment");

function clickBtn_hire(e){
    if(hire_name.value == "" || hire_Email.value == "" || hire_title.value == "" || hire_comment.value == ""){
        alert("모두 입력해주세요.");
    }else{
        alert("감사합니다.")
    }
}