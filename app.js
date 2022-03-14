const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');

trigger.addEventListener('click', function(){
    openModal();
});

closeBtn.addEventListener('click', function(){
    closeModal();
});

modalWrapper.addEventListener('click', function(e){
    if(e.target !== this) return;
    closeModal();
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        closeModal();
    }
})

function openModal() {
    modalWrapper.classList.add('active');
}
function closeModal() {
    modalWrapper.classList.remove('active');
}
// const LOCAL_STORAGE_KEY = "toggle-bootstrap-theme";

// const LOCAL_META_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));


// const DARK_THEME_PATH = "https://bootswatch.com/4/cyborg/bootstrap.min.css";

// const DARK_STYLE_LINK = document.getElementById("dark-theme-style");
// const THEME_TOGGLER = document.getElementById("theme-toggler");

// let isDark = LOCAL_META_DATA && LOCAL_META_DATA.isDark;


// if (isDark) {
//   enableDarkTheme();
// } else {
//   disableDarkTheme();
// }



// function toggleTheme() {
//   isDark = !isDark;
//   if (isDark) {
//     enableDarkTheme();
//   } else {
//     disableDarkTheme();
//   }
//   const META = { isDark };
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(META));
// }

// function enableDarkTheme() {
//   DARK_STYLE_LINK.setAttribute("href", DARK_THEME_PATH);
//   THEME_TOGGLER.innerHTML = "🌙 Dark";
// }

// function disableDarkTheme() {
//   DARK_STYLE_LINK.setAttribute("href", "");
//   THEME_TOGGLER.innerHTML = "🌞 Light";
// }

