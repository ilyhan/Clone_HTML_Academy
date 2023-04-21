const a61 = document.getElementById('6_A_1');
const a62 = document.getElementById('6_A_2');
const a63 = document.getElementById('6_A_3');
const a64 = document.getElementById('6_A_4');
const table = document.querySelectorAll(".tdd")
const prov6 = document.getElementById('prov6');
prov6.onclick = function () {
  if ((a61.value == '1')&&(a62.value == '1')&&(a63.value == '0')&&(a64.value == '1')){
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



const a71 = document.getElementById('7_A_1');
const a72 = document.getElementById('7_A_2');
const a73 = document.getElementById('7_A_3');
const a74 = document.getElementById('7_A_4');
const prov7 = document.getElementById('prov7');
prov7.onclick = function () {
  if ((a71.value == '1')&&(a72.value == '1')&&(a73.value == '1')&&(a74.value == '1')){
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
