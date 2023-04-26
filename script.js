var arr = [];
var userCount = 0;
var userArray = [];
var newUser;

var userStorage = {};
userStorage.users = [];

var cups=[];
function cup(img,name,color,type,price){
   this.img=img,
   this.name=name,
   this.color=color,
   this.type=type,
   this.price=price;

   this.show=function(){
      var tmp = [];
      tmp[0] = this.img;
      tmp[1] = this.name;
      tmp[2] = this.color;
      tmp[3] = this.type;
      tmp[4] = this.price;
      console.log(tmp);
      
      return tmp;
   }

};

// Открыть или закрыть попап

function popClose(id) {
   var popap;
   popap = document.getElementById(id);
   popap.style.display = "none";
   a = false;
   if (a !== true) {
      var wrap = document.getElementById('wrap');
      wrap.style.filter = 'none';
   }
}

function popOpen(id) {
   ifOpen();
   ifOpen1();
   var popap;
   popap = document.getElementById(id);
   popap.style.display = "block";
   a = true;
   if (a == true) {
      var wrap = document.getElementById('wrap');
      wrap.style.filter = 'blur(8px)';
   }
}


// 
function ifOpen() {
   var popaps = document.getElementsByClassName('popap');
   for (i = 0; i < popaps.length; i++) {
      popaps[i].style.display = 'none';

   }
}

function ifOpen1() {
   var popaps = document.getElementsByClassName('product__card');
   for (i = 0; i < popaps.length; i++) {
      popaps[i].style.display = 'none';
   }
}

function closeForm() {
   var popap = document.getElementsByClassName('popap');
   for (var i = 0; i < popap.length; i++) {
      if (popap[i].style.display = 'block') {
         popap[i].style.display = 'none';
         wrap.style.filter = 'none';
      }
   }
}


// Добавление пользователей

function addUser() {
   var name = document.getElementById('regName');
   var surname = document.getElementById('regSurname');
   var mail = document.getElementById('regMail');
   var photo = document.getElementById('output');
   var pass = document.getElementById('regPass');
   var repeatPass = document.getElementById('regPassRepeat');

   var okName = validName(name.value);
   var okSurname = validSurname(surname.value);
   var okMail = validMail(mail.value);
   var okPass = validPass(pass.value);
   var okRepeatPass = validRepeatPass(pass.value, repeatPass.value);

   if (okName == true && okSurname == true && okMail == true && okPass == true && okRepeatPass == true) {
      newUser = new user(name.value, surname.value, mail.value, pass.value, photo.src, userCount);
      var user0 = newUser.arrUser();
      var userView = joinDate(user0);
      
      userArray.push(userView);
      
      userStorage.users = userArray;
      
      userCount++;
      saveUser();
      clearRegForm();
      alert('Вы успешно зарегистрировались!');      
   }

}


function saveUser() {

   localStorage.setItem("userStorage", JSON.stringify(userStorage.users));
}

function getUser() {
   if(localStorage.getItem("userStorage")){
      var users = localStorage.getItem("userStorage");
      userArray = JSON.parse(users);
      return userArray;
   }
   
}






// Конструктор обьектов

function user(name, surname, mail, pass, photo, idUser) {
   this.name = name;
   this.surname = surname;
   this.mail = mail;
   this.pass = pass;
   this.photo = photo;
   this.idUser = idUser;

   this.arrUser = function arrUser() {
      var tmp = [];
      tmp[0] = this.name;
      tmp[1] = this.surname;
      tmp[2] = this.mail;
      tmp[3] = this.pass;
      tmp[4] = this.photo;
      tmp[5] = this.idUser;
      return tmp;
   }
}


//Превращаем массив с пользовательскими данными в строку
function joinDate(array) {
   var str = array.join();
   return str;
}

//очистка оформи

function clearRegForm() {
   var input = document.getElementsByName('reg__input');
   for (var i = 0; i < input.length; i++) {
      input[i].value = '';
   }
}

function clearAuthForm() {
   var input = document.getElementsByName('authInput');
   for (var i = 0; i < input.length; i++) {
      input[i].value = '';
   }
}


// Проверка на валидацию

function validName(name) {
   var text = document.getElementsByName('pName')[0];
   var p = /^\D{3}\D*$/gi;
   var ok = false;

   if (p.test(name)) {
      text.style.color = 'green';
      ok = true;
   }
   else {
      text.style.color = 'red';
   }
   return ok;
}

function validSurname(surname) {
   var text = document.getElementsByName('pSurname')[0];
   var p = /^\D{3}\D*$/gi;
   var ok = false;

   if (p.test(surname)) {
      text.style.color = 'green';
      ok = true;
   }
   else {
      text.style.color = 'red';
   }
   return ok;
}

function validMail(mail) {
   var text = document.getElementsByName('pMail')[0];
   var p = /^(\w+\.)*\w+@\w+(\.\w+)*\.\D{2,5}$/gi;
   var ok = false;

   if (p.test(mail)) {
      text.style.color = 'green';
      ok = true;
   }
   else {
      text.style.color = 'red';
   }
   return ok;
}

function validMailAuth(mail) {
   var text = document.getElementsByName('pMail1')[0];
   var p = /^(\w+\.)*\w+@\w+(\.\w+)*\.\D{2,5}$/gi;
   var ok = false;

   if (p.test(mail)) {
      text.style.color = 'green';
      ok = true;
   }
   else {
      text.style.color = 'red';
   }
   return ok;
}

function validPassAuth(pass) {
   var text = document.getElementsByName('pPass1')[0];

   var p = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z!@#$%^&*].{5,16})$/g;
   var ok = false;

   if (p.test(pass)) {
      text.style.color = 'green';
      ok = true;
   }
   else {
      text.style.color = 'red';
   }

   return ok;
}



function validPass(pass) {
   var text = document.getElementsByName('pPass')[0];

   var p = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z!@#$%^&*].{5,16})$/g;
   var ok = false;

   if (p.test(pass)) {
      text.style.color = 'green';
      ok = true;
   }
   else {
      text.style.color = 'red';
   }

   return ok;
}

function validRepeatPass(pass1, pass2) {
   var ok = false;
   var text = document.getElementsByName('pPassRepeat')[0];
   if (pass1 == pass2) {
      text.style.color = 'green';
      ok = true;
   }
   else {
      text.style.color = 'red';
   }
   return ok;
}

// Авторизация

var regMass = [];
function enter() {

   var mail = document.getElementById('authMail');
   var pass = document.getElementById('authPass');
   var ok = false;


   if (userArray.length >= 1) {
      var okMail = validMailAuth(mail.value);
      var okPass = validPassAuth(pass.value);
      if (okMail == true && okPass == true) {

         for (var i = 0; i <= userArray.length; i++) {
            regMass = userArray[i].split(',');

            if (regMass[2] == mail.value && regMass[3] == pass.value) {
               

               var src = regMass[4] + ',' + regMass[5];
               profImg.src = src;
               output1.src = src;

               profName.innerHTML = regMass[0];
               myName.innerHTML += "<p class='p__myname'>" + regMass[0] + "</p>";
               mySurname.innerHTML += "<p class='p__myname'>" + regMass[1] + "</p>";
               myMail.innerHTML += "<p class='p__myname'>" + regMass[2] + "</p>";
               console.log('такой пользователь существует!');
               clearAuthForm();
               closeForm();
               ok=true;

               if(ok){
                  document.getElementById('addCardNew').style.display='block';
                  
               }
               localStorage.prof=JSON.stringify(regMass);
               return ok;

            }
            else if(i==userArray.length-1 && regMass[2] !== mail.value && regMass[3] !== pass.value) {
               console.log('Пользователь с таким Email не зарегистрирован');
               document.getElementsByName('pPass1')[0].innerHTML += '<br><p class="red">Пользователь с таким Email не зарегистрирован!</p>';

            }
         }
      }
   } else {
      alert('Еще никто не зарегистрирован');
   }

}

// 

function deleteAuth() {
   if (profName.innerHTML) {
      var auth = document.getElementsByClassName('auth')[0];
      var prof = document.getElementsByClassName('prof')[0];
      auth.style.display = 'none';
      prof.style.display = 'flex';
   }
}

// exit

function exit() {
   var ok=true;
   var auth = document.getElementsByClassName('auth')[0];
   var prof = document.getElementsByClassName('prof')[0];
   auth.style.display = 'block';
   prof.style.display = 'none';
   myName.innerHTML = 'Имя: ';
   mySurname.innerHTML = 'Фамилия: ';
   myMail.innerHTML = 'E-Mail: ';
   ok=false;
   if(ok==false){
      document.getElementById('addCardNew').style.display='none';
      
   }

   localStorage.removeItem('prof');

   
   return ok;
}



// Выбор фото

fr.onchange = function (e) {
   var input = e.target;
   var reader = new FileReader();

   reader.onload = function () {
      var dataUrl = reader.result;
      output.src = dataUrl;
   }
   reader.readAsDataURL(input.files[0]);
}

cp.onchange = function (e) {
   var input = e.target;
   var reader = new FileReader();

   reader.onload = function () {
      var dataUrl = reader.result;
      output1.src = dataUrl;
   }
   reader.readAsDataURL(input.files[0]);
}

document.body.onload = getUserLocal();

document.body.onload = getUser();

// Загрузка профиля и чашек из localStorage

function getUserLocal(){
   if(localStorage.prof !== undefined){
      deleteAuth();
      console.log("work");
      tempUs = localStorage.getItem("prof");
      profile = JSON.parse(tempUs);
      cupss = JSON.parse(localStorage.getItem('cp'));
      
      mail = profile[2];
      pass = profile[3];

      var ok = false;
      var src = profile[4] + ',' + profile[5];
      profImg.src = src;
      output1.src = src;
      profName.innerHTML = profile[0];
      myName.innerHTML += "<p class='p__myname'>" + profile[0] + "</p>";
      mySurname.innerHTML += "<p class='p__myname'>" + profile[1] + "</p>";
      myMail.innerHTML += "<p class='p__myname'>" + profile[2] + "</p>";
      ok=true;
      if(ok){
         document.getElementById('addCardNew').style.display='block';
      }

      if(localStorage.main){
         mainInner.innerHTML=JSON.parse(localStorage.main);
      }
      
      
      return ok;
   }
   
} 
   
// setTimeout
document.body.onload = show;


function show() {
   var a = false;
   var n = document.getElementById('auth');
   var wrap = document.getElementById('wrap');
   n.style.display = 'none';
   setTimeout(function () {
      a = true;
      n.style.display = 'block';

      wrap.style.filter = 'blur(8px)';
   }, 10000)
   var authMail = document.getElementById('authMail');
   var authPass = document.getElementById('authPass');
   setTimeout(function () {
      if (authMail.value == '' && authPass.value == '') {
         n.style.display = 'none';
         wrap.style.filter = 'none';
      }
   }, 15000)
}


// mouseover

var pic1 = document.getElementById('pic1');
var item1 = document.getElementById('item1');

function change1() {
   pic1.src = 'img/cups/1.jpg';
}
function change2() {
   pic1.src = 'img/cups/1-2.jpg';
}
pic1.onmouseover = change2;
pic1.onmouseout = change1;


// События onclick

var prof = document.getElementsByClassName('prof')[0];
prof.onclick = function () {
   popOpen('prof');
}

cartWinOpen.onclick = function () {
   popOpen('cart');
   
}

enterAuth.onclick = function () {
   document.getElementsByName('pPass1')[0].innerText='Латинскі літери та цифри, min одна цифра, min одна  велика літера, min 6 символів';
   popOpen('auth');
}


regAuth.onclick = function () {
   popOpen('reg');
}


closeReg.onclick = function () {
   popClose('reg');
}
addUserBtn.onclick = function () {
   addUser();
   closeForm();
}
regEnter.onclick = function () {
   popOpen('auth');
}
authorizationClose.onclick = function () {
   popClose('auth');
}
authBtn.onclick = function () {
   enter();
   deleteAuth();
}
authRegBtn.onclick = function () {
   popOpen('reg');
}
addCardClose.onclick = function () {
   popClose('addCard');
}
profileClose.onclick = function () {
   popClose('prof');
}
product1Close.onclick = function () {
   popClose('product1');
}
product2Close.onclick = function () {
   popClose('product2');
}
product3Close.onclick = function () {
   popClose('product3');
}
product4Close.onclick = function () {
   popClose('product4');
}
cartClose.onclick = function () {
   popClose('cart');
}
exitBtn.onclick = function () {
   exit();
   popClose('prof');
}

addToCart.onclick=function(){
   ifProdInCart();
   popClose('cart');      
}

// проверка наличия товара в корзине

function ifProdInCart(){
   var cartImg=document.getElementsByClassName('cart__img');
   if(cartImg.length>1){
      alert('Ваш заказ принят! Ожидайте звонка оператора');
   } else {
      alert('Вы еще не добавили товар');
   }
}


// Добавление товара в корзину

var main = document.getElementsByClassName('main')[0];

var counter1 = 0;


var toCart = document.getElementsByClassName('addToCart')[0];
var cartCounter1=document.getElementsByClassName('counter')[0];
onload=function(){
   cartCounter1.innerText=counter1;
   if(counter1===0){
      document.getElementsByClassName('counter')[0].style.backgroundColor='green';}
}
if(cartCounter1.innerText==='0'){
   cartCounter1.style.backgroundColor='green';
}
main.onclick=function(e){
   
   
   prod=e.target;
   if(prod.name=='addToCart'){
      counter1++;
      
      cartCounter1.innerText=counter1;
      
      prod.id='vibran';
      img=vibran.closest('.main__item').children[0].src;
      prodname=vibran.closest('.main__item').children[1].children[0].innerText;
      prodPrice=vibran.closest('.main__item').children[1].children[1].innerText;
      

      var cartProd=document.createElement('div');
      cartProd.className='cart__item';
      var img2=document.createElement('img');
      img2.src=img;
      img2.className='cart__img';
      var prodName2=document.createElement('p');
      prodName2.className='name';
      prodName2.innerText=' '+prodname;
      var prodprice2=document.createElement('p');
      prodprice2.className='price';
      prodprice2.innerText=' '+prodPrice;
      var imgDel=document.createElement('img');
      imgDel.src="img/icons/cart.svg";
      imgDel.className='del__prod';

      

      document.getElementById('cartInner').appendChild(cartProd);
      document.getElementsByClassName('cart__item')[counter1].appendChild(img2);
      document.getElementsByClassName('cart__item')[counter1].appendChild(prodName2);
      document.getElementsByClassName('cart__item')[counter1].appendChild(prodprice2);
      document.getElementsByClassName('cart__item')[counter1].appendChild(imgDel);
   }
   if(counter1>0){
      document.getElementsByClassName('counter')[0].style.backgroundColor='orange';}

   prod.id='';
   
}

// Удаление из корзины

cartInner.onclick=function(e){
   var prod = e.target.closest('.cart__item');
   var f = document.getElementById('cartInner');
   f.removeChild(prod);
   
   counter1--;
   cartCounter1.innerText=counter1;
   if(counter1<1){
      document.getElementsByClassName('counter')[0].style.backgroundColor='green';}
   
}

// Добавление товара на страницу


addCardNew.onclick = function () {
   // popOpen('addCard');

   var win=open('','_blank');
   win.document.open();
   win.document.write('<html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0">  <link rel="stylesheet" href="style.css"><title>WIN</title></head><body><div class="container"><div class="bg"></div><div id="wrap" class="wrapper"><h1 class="m20">Добавить товар</h1><div class="flex"><img id="winAddImg" class="win__img"  src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png" alt=""><div class="winprod__des"><input type="file" id="winButtonApi" ><p class="green m10">Введите название товара</p><input type="text" class="border" id="winName"><p class="green m10">Введите цвет товара</p>   <input type="text" class="border" id="winColor"><p class="green m10">Введите материал товара</p><input type="text" class="border" id="winMatt"><p class="green m10">Введите цену товара</p>   <input type="text" class="border" id="winPrice"><input class="btn flex" type="submit" id="adddCup" value="Добавить"></div></div></div></div></body></html>');

   
   var buttonapi=win.document.getElementById('winButtonApi').onchange = function(e){
      var input = event.target;
      var reader = new FileReader();
   
      reader.onload = function(){
         var dataUrl = reader.result;
         var output=win.document.getElementById('winAddImg');
         output.src = dataUrl;
      }
      reader.readAsDataURL(input.files[0]);
   };

   var cupaddd=win.document.getElementById('adddCup');
   cupaddd.onclick=function(){
      
      newCup=new cup(win.winAddImg.src,win.winName.value,win.winColor.value,win.winMatt.value,win.winPrice.value).show();
      cups.push(newCup);
      
      cpprint();
      
      win.self.close();
      localStorage.cp=JSON.stringify(cups);
      localStorage.main=JSON.stringify(mainInner.innerHTML);
   } 
   
}

function cpprint(){
   var str='';
   for(var i=0; i<cups.length; i++){
      str='<div class="main__item"><img src="'+newCup[0]+'" alt="" class="main__img"><div class="item__describe"><div class="item__name">'+newCup[1]+'</div><div class="item__price">'+newCup[4]+'</div></div><button name="addToCart" class="btn to__cart" type="button">В корзину</button><input class="btn to__cart" name="del" type="button" id="" value="delete"></div>'
      
      
   };
   mainInner.innerHTML+=str;
   
}

document.onclick=function(e){
   var t=e.target;
   
   if(t.name=='del'){
      
      t.closest('.main__item').style.display='none';

      localStorage.main=JSON.stringify(mainInner.innerHTML);
   }
}



// redact

redact.onclick=function(){
   src=document.getElementById('output1').src;
   profImg.src=src;
   var prof=document.getElementById('prof');
   prof.style.display='none';
   a = false;
   if (a !== true) {
      var wrap = document.getElementById('wrap');
      wrap.style.filter = 'none';
   }
}


