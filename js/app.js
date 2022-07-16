const back = document.querySelector(".alt-header__column a");

function goBack() {
    window.history.back();
}

back.addEventListener("click",goBack);