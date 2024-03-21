window.onload = function () {
    screen();
};
window.onresize = function () {
    screen()
}
function screen() {
    let resizeWidth = window.innerWidth;
    if (resizeWidth < 991) {
        document.querySelector(".sidebar").classList.add("sidebar-close");
        document.querySelector("body").classList.add("fullcontent");
    } else {
        document.querySelector(".sidebar").classList.remove("sidebar-close");
        document.querySelector("body").classList.remove("fullcontent");
    }
}
function showSubmenu(itemEl) {
    let li = document.getElementById(itemEl)
    li.classList.toggle("showMenu");
    // Remove 'active' class from all elements with class 'showMenu'
    // var showMenus = document.querySelectorAll('.showMenu');
    // showMenus.forEach(function(menu) {
    //   menu.classList.remove('active');
    // });
}

const changemaincon_full = () => {
    document.querySelector(".sidebar").classList.toggle("sidebar-close");
    document.querySelector("body").classList.toggle("fullcontent");
};
