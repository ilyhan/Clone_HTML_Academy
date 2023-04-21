const provBtn = document.getElementById("prov");
const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');
const table = document.querySelectorAll(".tdd")
provBtn.addEventListener('click',function () {
  if ((firstInput.value == '1')&&(secondInput.value == '0')){
  for (let i = 0;i<6;i++){
    table[i].style.border = '2px solid green'
  };
}
else{
  for (let i = 0;i<6;i++){
    table[i].style.border = '2px solid red'
  };
  function black() {
    for (let i = 0;i<6;i++){
      table[i].style.border = '2px solid black'
    };
  };
  setTimeout(black,5000)
}
});

const a21 = document.getElementById('2_A_1');
const b21 = document.getElementById('2_B_1');
const a22 = document.getElementById('2_A_2');
const b22 = document.getElementById('2_B_2');
const a23 = document.getElementById('2_A_3');
const b23 = document.getElementById('2_B_3');
const a24 = document.getElementById('2_A_4');
const b24 = document.getElementById('2_B_4');
const prov2 = document.getElementById('prov-2');
prov2.addEventListener('click',function () {
  if ((a21.value == '1')&&(b21.value == '0')&&(b22.value == '1')&&(b24.value == '0')&&(a22.value == '0')&&(a23.value == '0')&&(a24.value == '0')){
  for (let i = 6;i<26;i++){
    table[i].style.border = '2px solid green'
  };
}
else{
  for (let i = 6;i<26;i++){
    table[i].style.border = '2px solid red'
  };
  function black() {
    for (let i = 6;i<26;i++){
      table[i].style.border = '2px solid black'
    };
  };
  setTimeout(black,5000)
}
});

const a31 = document.getElementById('3_A_1');
const b31 = document.getElementById('3_B_1');
const a32 = document.getElementById('3_A_2');
const b32 = document.getElementById('3_B_2');
const a33 = document.getElementById('3_A_3');
const b33 = document.getElementById('3_B_3');
const a34 = document.getElementById('3_A_4');
const b34 = document.getElementById('3_B_4');
const prov3 = document.getElementById('prov3');
prov3.addEventListener('click',function () {
  if ((a31.value == '1')&&(b31.value == '1')&&(b32.value == '0')&&(b34.value == '1')&&(b33.value == '0')&&(a32.value == '0')&&(a33.value == '0')&&(a34.value == '0')){
  for (let i = 26;i<46;i++){
    table[i].style.border = '2px solid green'
  };
}
else{
  for (let i = 26;i<46;i++){
    table[i].style.border = '2px solid red'
  };
  function black() {
    for (let i = 26;i<46;i++){
      table[i].style.border = '2px solid black'
    };
  };
  setTimeout(black,5000)
}
});
