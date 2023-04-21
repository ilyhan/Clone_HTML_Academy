const a41 = document.getElementById('4_A_1');
const a42 = document.getElementById('4_A_2');
const a43 = document.getElementById('4_A_3');
const a44 = document.getElementById('4_A_4');
const table = document.querySelectorAll(".tdd")
const prov4 = document.getElementById('prov4');
prov4.onclick = function () {
  if ((a41.value == '0')&&(a42.value == '0')&&(a43.value == '0')&&(a44.value == '1')){
  for (let i = 0;i<15;i++){
    table[i].style.border = '2px solid green'
  };
}
else{
  for (let i = 0;i<15;i++){
    table[i].style.border = '2px solid red'
  };
  function black() {
    for (let i = 0;i<15;i++){
      table[i].style.border = '2px solid black'
    };
  };
  setTimeout(black,5000)
}
};



const a51 = document.getElementById('5_A_1');
const a52 = document.getElementById('5_A_2');
const a53 = document.getElementById('5_A_3');
const a54 = document.getElementById('5_A_4');
const prov5 = document.getElementById('prov5');
prov5.onclick = function () {
  if ((a51.value == '1')&&(a52.value == '0')&&(a53.value == '0')&&(a54.value == '1')){
  for (let i = 15;i<30;i++){
    table[i].style.border = '2px solid green'
  };
}
else{
  for (let i = 15;i<30;i++){
    table[i].style.border = '2px solid red'
  };
  function black() {
    for (let i = 15;i<30;i++){
      table[i].style.border = '2px solid black'
    };
  };
  setTimeout(black,5000)
}
};
