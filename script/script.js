console.clear();



// Scroll Fade In, Header Bg Change 
function scroll_event(){
    const header = document.querySelector("header");
    const work_wrap = document.querySelector("div.work_wrap");
    const work_list = document.querySelectorAll("div.work_wrap > ul > li");
    const fade_in_contents = document.querySelectorAll(".scrollAni");
    
    window.addEventListener('scroll', scrollEvent);
    function scrollEvent(){
        let curScroll = document.documentElement.scrollTop;
    
        // Header Bg Change
        if(curScroll < 100){
            header.style.background = "";
        }else{
            header.style.background = "#0464b3";
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
}

// Header Brands
function hover_header_brands(){
    const br_title_li = document.querySelectorAll("ul.brands_title_list > li");
    const br_item_li = document.querySelectorAll("ul.brands_item_list > li");
    for(let i = 0 ; i < br_title_li.length ; i++){
        br_title_li[i].addEventListener("mouseover", ()=>{
            init_brands_list();
            br_item_li[i].classList.add("active_brands");
        })
    }
    function init_brands_list(){
        for(let i = 0 ; i < br_title_li.length ; i++){
            br_item_li[i].classList.remove("active_brands");
        }
    }
}

// Header Side Nav Bar
function side_nav(){
    const sectionEls = document.querySelectorAll("section");
    const dark_filter = document.querySelector("div.dark_filter");
    const nav_bar = document.querySelector("div.nav_bar");
    const nav_bar_list = document.querySelector("div.side_nav_list_wrap");
    const nav_list_title = document.querySelectorAll("ul.side_nav_list > li > a");
    const side_nav_one = document.querySelectorAll("div.side_nav_one");
    const side_nav_one_title = document.querySelectorAll("div.side_nav_one > h3 > a");
    const side_nav_one_btn = document.querySelectorAll("div.side_nav_one > ul > li > a");
    const side_nav_two = document.querySelectorAll("div.side_nav_two");
    const side_nav_two_title = document.querySelectorAll("div.side_nav_two > h4 > a");
    

    for(let i = 0 ; i < sectionEls.length ; i++){
        sectionEls[i].addEventListener("click", ()=> {
            nav_bar.classList.remove("active_nav");
            nav_bar_list.classList.remove("active_side_nav");
            dark_filter.classList.remove("active_filter");
        })
    }
    nav_bar.addEventListener("click", click_nav);
    function click_nav(){
        nav_bar.classList.toggle("active_nav");
        nav_bar_list.classList.toggle("active_side_nav");
        dark_filter.classList.toggle("active_filter");
    }
    for(let i = 0 ; i < nav_list_title.length ; i++){
        nav_list_title[i].addEventListener("click", ()=>{
            side_nav_one[i].classList.toggle("active_side_nav");
        })
    }
    for(let i = 0 ; i < side_nav_one_title.length ; i++){
        side_nav_one_title[i].addEventListener("click", ()=>{
            side_nav_one[i].classList.toggle("active_side_nav");
        })
    }
    for(let i = 0 ; i < side_nav_two_title.length ; i++){
        side_nav_two_title[i].addEventListener("click", ()=>{
            side_nav_two[i].classList.toggle("active_side_nav");
        })
    }
    for(let i = 0 ; i < side_nav_one_btn.length ; i++){
        side_nav_one_btn[i].addEventListener("click", ()=>{
            side_nav_two[i].classList.toggle("active_side_nav");
        })
    }


}

// Ment Change
function ment_change(){
    const list_btn = document.querySelectorAll("ul.list_btn_wrap > li");
    const list_ment = document.querySelectorAll("ul.ment_txt_wrap > li");
    function click_Mnet_list(){
        for(let i = 0 ; i < list_btn.length ; i++){
            list_btn[i].addEventListener("click", ()=>{
                init_Ment_list();
                list_btn[i].classList.add("active_btn");
                list_ment[i].classList.add("active_ment");
            })
        }
    }
    function init_Ment_list(){
        for(let i = 0 ; i < list_btn.length ; i++){
            list_btn[i].classList.remove("active_btn");
            list_ment[i].classList.remove("active_ment");
        }
    }
    click_Mnet_list();
}

// Hire Input Alert
function input_alert(){
    const hire_name = document.querySelector(".hire_name");
    const hire_Email = document.querySelector(".hire_Email");
    const hire_title = document.querySelector(".hire_title");
    const hire_comment = document.querySelector(".hire_comment");
    
    if(hire_name.value == "" || hire_Email.value == "" || hire_title.value == "" || hire_comment.value == ""){
        alert("모두 입력해주세요.");
    }else{
        alert("감사합니다.")
    }
    
}

function init(){
    scroll_event();
    hover_header_brands();
    side_nav();
    ment_change();
}
init();