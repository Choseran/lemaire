document.addEventListener("DOMContentLoaded", function () {
    // .sec_2 구역 content background-image 변경 
    const contents = document.querySelectorAll('.sec_2 .collection_bottom .content');

    for (let i = 0; i < contents.length; i++){
        const content = contents[i];
        content.style.background = `url(../image/fw_0${i+1}.jpg) no-repeat center top / cover`
    }
    
    // AOS
    // let aos = undefined;

    // function initAos() {
    //     const windowWidth = window.innerWidth;

    //     if (windowWidth >= 760 && aos == undefined) {
            AOS.init();
    //     } else if (windowWidth < 760 && aos != undefined) {
    //         aos.destroy();
    //         aos = undefined
    //     }
    // }
    // initAos();

    // 마우스휠 이벤트(헤더가 휠이 내려갈 때는 안 보이다가 올라갈 때 보이게끔 설정)
    // e = 매개변수 || deltaY 활용
    window.addEventListener("wheel", (e) => {
        const headerArea = document.querySelector('.header_area');

        if (e.deltaY > 0) {
            // wheel down
            headerArea.classList.remove('scroll');
        } else {
            // wheel up
            headerArea.classList.add('scroll');
        }
    });

    // body에 bg 변경(스크롤 이벤트 offset 값(top 값만 가져올 수 있음) 활용)
    const sec2 = document.querySelector('.sec_2');
    const sec3 = document.querySelector('.sec_3');

    window.addEventListener('scroll', () => {
        const sec2Offset = sec2.offsetTop - 500;
        const sec3Offset = sec3.offsetTop;

        const scrollTop = window.scrollY;
        const bodyBg = document.querySelector('body');

        if (scrollTop > sec2Offset && scrollTop < sec3Offset) {
            bodyBg.classList.add('bg');
        } else {
            bodyBg.classList.remove('bg');
        }
    });

    // sec_4 swiper
    var ceoSwiper = new Swiper(".ceoSwiper", {
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,    // 다른 인터렉션이 있을 때 자동재생이 멈추는 것을 방지
        },
    })

    // sub_menu
    // 마우스 올리면 카테고리에 맞는 탭 활성화
    const submenuTab = document.querySelectorAll('.main_menu li');
    const submenuBox = document.querySelector('.sub_menu_box');
    
    for (const menu of submenuTab) {
        menu.addEventListener('mouseenter', function () {
            submenuBox.classList.add('active');

            // 탭메뉴 연결
            const tab = this.getAttribute('data-tab');
            const subMenu = document.querySelectorAll('.sub_menu');
            
            for (const menu of subMenu) {
                menu.classList.remove('active');
            }

            const changeTab = document.querySelector(`#${tab}`);
            // const changeTab = document.getElementById(tab);

            changeTab.classList.add('active');
        });
    }

    // 서브메뉴박스에서 마우스 나가면 기존 상태로 변경
    submenuBox.addEventListener('mouseleave', function () {
        submenuBox.classList.remove('active');
        // this.classList.remove('active');
    });

    // 상단이동버튼
    // 300px 이상일 때 top_btn  보이게끔(scroll 클래스명 설정)
    const topBtn = document.querySelector('.top_btn');
    
    window.addEventListener("scroll", function () {
        const scrollTop = window.scrollY;

        if (scrollTop >= 300) {
            topBtn.classList.add('scroll');
        } else {
            topBtn.classList.remove('scroll');
        }

    });
    
    // 최상단으로 올라가는 상단이동 버튼 구현 -> 클릭했을 때 최상단으로 이동
    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    });

    // 작은그리드에서 햄버거버튼 클릭하면 메인메뉴만 출력 / 햄버거 버튼은 위치값 서로 바뀌도록 처리
    const menuBtn = document.querySelector('#hamburger');
    const mainMenu = document.querySelector('.main_menu');

    menuBtn.addEventListener("click", function () {
        this.classList.toggle('active');

        // contains 활용해서 메인메뉴를 메뉴 버튼 active가 있을 때 추가 아니면 제거
        const hasClass = this.classList.contains('active');
        
        if (hasClass) {
            mainMenu.classList.add('active');
        } else {
            mainMenu.classList.remove('active');
        }
    });

    // 나만의 과제 - getAttribute 속성을 사용하여 tab메뉴 내용 변경하는 법, 상단이동버튼(scrollTo({})), script 반응형, favicon 생성 사이트 블로그 정리
}); 