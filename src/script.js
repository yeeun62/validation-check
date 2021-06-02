// 동영상 강의에 나온 코드를 그대로 실습하세요
let elInputUsername = document.querySelector('#username');

let elFailuerMessage = document.querySelector('.failure-message');
let elsuccessMessage = document.querySelector('.success-message');

let elPassFail = document.querySelector('.mismatch-message');
let elPassSuc = document.querySelector('.passMatch');

let elPassword = document.querySelector('#password');
let elCheckPassword = document.querySelector('#password-retype');

let btn = document.querySelector('#btn');

let special = document.querySelector('.specialStr');
let number = document.querySelector('.number');
let string = document.querySelector('.string');


function passCheck(){
  let num = [];
  let str = [];
  let speStr = [];
  for(let i = 0; i < elPassword.value.length; i++){
    if(elPassword.value[i] / 0 === Infinity){
      num.push(elPassword.value[i]);
    } else if(elPassword.value[i] === '~' || elPassword.value[i] === '`' || elPassword.value[i] === '₩'||
    elPassword.value[i] === '!' || elPassword.value[i] === '@' || elPassword.value[i] === '#' ||
    elPassword.value[i] === '$' || elPassword.value[i] === '%' || elPassword.value[i] === '^' || 
    elPassword.value[i] === '&' || elPassword.value[i] === '*'){
      speStr.push(elPassword.value[i]);
    } else{
      str.push(elPassword.value[i]);
      //console.log(num,str,speStr);
    }
  } return num.length >= 3 && str.length >= 3 && speStr.length >= 3
}


function active(){
  if(elInputUsername.value !== '' && elPassword.value !== '' && elCheckPassword.value !== '' && 
    isMoreThan4Length(elInputUsername.value) && isMatch(elPassword.value, elCheckPassword.value) && passCheck()){
      btn.disabled = false;
    } else{
      btn.disabled = true;
    }
}

function isMoreThan4Length(value) {
  return value.length >= 4;
}

function isMatch (password1, password2) {
  return password1 === password2;
}

elInputUsername.onkeyup = function(){
  if(isMoreThan4Length(elInputUsername.value)){
    elsuccessMessage.classList.remove('hide');

    elFailuerMessage.classList.add('hide')

  } else {
    elFailuerMessage.classList.remove('hide')
    elsuccessMessage.classList.add('hide');
  }

  active()
}

elPassword.onkeyup = function(){
  let num = [];
  let str = [];
  let speStr = [];
  for(let i = 0; i < elPassword.value.length; i++){
    if(elPassword.value[i] / 0 === Infinity){
      num.push(elPassword.value[i]);
    } else if(elPassword.value[i] === '~' || elPassword.value[i] === '`' || elPassword.value[i] === '₩'||
    elPassword.value[i] === '!' || elPassword.value[i] === '@' || elPassword.value[i] === '#' ||
    elPassword.value[i] === '$' || elPassword.value[i] === '%' || elPassword.value[i] === '^' || 
    elPassword.value[i] === '&' || elPassword.value[i] === '*'){
      speStr.push(elPassword.value[i]);
    } else{
      str.push(elPassword.value[i]);
    }
  }
    if(num.length >= 3){
      number.classList.add('hide');
    } else{
      number.classList.remove('hide');
    }

    if(str.length >= 3){
      string.classList.add('hide');
    } else{
      string.classList.remove('hide');
    }

    if(speStr.length >= 3){
      special.classList.add('hide');
    } else{
      special.classList.remove('hide');
    }

  active()
  console.log(num,str,speStr);
  }

elCheckPassword.onkeyup = function(){
  if(elPassword.value.length > 0 && elCheckPassword.value.length > 0){
    if(isMatch(elPassword.value, elCheckPassword.value)){
      elPassFail.classList.add('hide') 
      elPassSuc.classList.remove('hide'); 
    } else {
      elPassFail.classList.remove('hide');
      elPassSuc.classList.add('hide');
    }  
  } else{
    elPassFail.classList.add('hide');
    elPassSuc.classList.add('hide');
  }
    active()
}