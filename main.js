const btnStart = document.querySelector(".start");
const info = document.querySelector(".information");
const help  = document.querySelector(".help");
btnStart.addEventListener('click',function () {
  info.style.display = 'none';
  help.style.display = 'none';
});

const btnPlus = document.querySelector(".rotate");
btnPlus.addEventListener('click',function () {
  info.style.display = 'none';
  help.style.display = 'none';
      table.style.border = '2px solid red'
});

const ulList = document.querySelector(".none-block-nav");
const btnNav = document.querySelector(".btn-nav");
btnNav.addEventListener('click',function () {
  ulList.classList.toggle('block');
});

const theory = document.querySelector(".theory");
theory.addEventListener('click',function () {
  info.style.display = 'block';
});

const closeDiv = document.querySelector(".close");
closeDiv.addEventListener('click',function () {
    info.style.display = 'none';
    ulList.classList.remove('block')
});





window.onscroll = function () {
  if (window.pageYOffset > 10) {
    console.log('456');
  } // Добавьте else сюда

};
