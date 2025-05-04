var accountNavpanelContainer=document.querySelector(".account-navpanel-container");
var accountLogo=document.querySelector(".account-logo");

var headerSearchBox=document.querySelector(".header-search-box");
var headerSearchButton=document.querySelector(".header-search-button");

var mainContentContainer=document.querySelector(".main-content-container");
var marketDetailsContainer=document.querySelector(".market-details-container");
var marketNameDetails=document.querySelector(".market-name-details");
var marketLocationDetails=document.querySelector(".market-location-details");
var marketImageDetails=document.querySelector(".market-image-details");
var markets=document.querySelectorAll(".market");
var marketFloors=document.querySelectorAll(".market-floor");
var floorDetails=document.querySelectorAll(".floor-details");
var backButton=document.querySelector(".back");
var marketDistances=document.querySelectorAll(".market-distance");
backButton.addEventListener("click",goBack);

function goBack(){
    marketDetailsContainer.style.display="none";
    mainContentContainer.style.display="flex";
    backButton.style.display="none";
    refresh();
}

function refresh(){
    for(var i=0;i<markets.length;i++){
        markets[i].style.display="flex";
    }
}

const clickSound = new Audio('click.mp3');
const hoverSound = new Audio('hover.mp3');


headerSearchBox.addEventListener("input",playClickSound);
headerSearchBox.addEventListener("click",playClickSound);
headerSearchButton.addEventListener("click",playSearchSound);
headerSearchButton.addEventListener("click",computeFloors);
function playClickSound(){
    clickSound.play();
}

function playSearchSound(){
    hoverSound.play();
}

const users = [];

// Select elements
let usernameInput = document.querySelector('.account-email');
let emailInput = document.querySelector('input[type="email"]');
let passwordInput = document.querySelector('input[type="password"]');
let signUpBtn = document.querySelector('.sign-up');
let signInBtn = document.querySelector('.sign-in');
const userDisplay = document.querySelector('.account-user-name');
const formContainer = document.querySelector('.account-elements-container');

// Create Sign Out button with proper classes
const signOutBtn = document.createElement('button');
signOutBtn.textContent = 'Sign out';
signOutBtn.className = 'account-buttons sign-out';
signOutBtn.style.marginTop = '10px';

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Clear input fields
function clearInputs() {
    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}

// Show user panel with proper classes
function showUserPanel(user) {
    formContainer.innerHTML = `
        <div class="account-user-name header-heading">Logged in</div>
        <div class="account-input">Username: ${user.username}</div>
        <div class="account-input">Email: ${user.email}</div>
    `;
    formContainer.appendChild(signOutBtn);
}

// Restore form UI
function showAuthForm() {
    formContainer.innerHTML = `
        <div class="account-user-name header-heading">Guest6765</div>
        <input type="text" class="account-input account-email" placeholder="User-name" required>
        <input type="email" class="account-input" placeholder="Email" required>
        <input type="password" class="account-input" placeholder="Password" required>
        <button class="account-buttons sign-up">Sign up</button>
        <button class="account-buttons sign-in">Sign in</button>
    `;
    // Re-select elements
    usernameInput = document.querySelector('.account-email');
    emailInput = document.querySelector('input[type="email"]');
    passwordInput = document.querySelector('input[type="password"]');
    signUpBtn = document.querySelector('.sign-up');
    signInBtn = document.querySelector('.sign-in');

    // Re-attach events
    signUpBtn.addEventListener('click', handleSignUp);
    signInBtn.addEventListener('click', handleSignIn);
}

var floorImages0=document.querySelector(".floor-images-0");
var floorImages1=document.querySelector(".floor-images-1");
var floorImages2=document.querySelector(".floor-images-2");
var floorImages3=document.querySelector(".floor-images-3");

var floorImages=document.querySelectorAll(".floor-images");

const m01 = ["/items/lays.jpg", "/items/milkbikis.jpg", "/items/moongdal.jpg", "/items/oats.jpg", "/items/patanjalidalia.jpg", "/items/redgram.jpg", "/items/amulyogurt.jpg", "/items/gulabjamun.jpg", "/items/patanjaliGroundnutoil.jpg", "/items/patanjalicocooil.jpg", "/items/bingomadangles.jpg", "/items/tatacoffe.jpg", "/items/besan.jpg", "/items/biryanirice.jpg", "/items/thumsup.jpg", "/items/redBull.jpg", "/items/fortuneMaida.jpg", "/items/tataSalt.jpg", "/items/amul.png", "/items/sprite.jpg", "/items/aashirvaadAtta.jpg", "/items/amulcheese.jpg", "/items/bournvita.jpg", "/items/britaniaBread.jpg", "/items/catchredchillipowder.jpg", "/items/cococola.jpg", "/items/complanChocolate.jpg", "/items/haldiramsRasgulla.jpg", "/items/horlicks.jpg"];
const m02 = ["/items/img1.jpg","/items/img2.jpg","/items/img3.jpg","/items/img4.png","/items/img5.jpg","/items/img6.jpg","/items/img7.jpg","/items/img8.jpg","/items/img9.jpg","/items/img10.jpg","/items/img11.jpg","/items/img12.jpg","/items/img13.jpg","/items/img14.jpg","/items/img15.jpg","/items/img16.jpg","/items/img17.jpg","/items/img18.jpg","/items/img19.png","/items/img20.jpg","/items/img21.jpg","/items/img22.jpg","/items/img23.jpg","/items/img24.jpg","/items/img25.jpg","/items/img26.jpg","/items/img27.jpg","/items/img28.jpg","/items/img29.jpg"];
const m03 = ["/items/img30.jpg","/items/img31.jpg","/items/img32.jpg","/items/img33.jpg","/items/img34.jpg","/items/img35.jpg","/items/img36.jpg","/items/img37.jpg","/items/img38.jpg","/items/img39.jpg","/items/img40.jpg","/items/img41.jpg","/items/img42.jpg"];
const m04 = ["/items/img43.jpg","/items/img44.jpg","/items/img45.jpg","/items/img46.jpg","/items/img47.jpg","/items/img48.jpg","/items/img49.jpg","/items/img50.jpg","/items/img51.jpg","/items/img52.jpg","/items/img53.jpg","/items/img54.jpg","/items/img55.jpg","/items/img56.jpg"];

const m11 = ["/items/thumsup.jpg","/items/redBull.jpg","/items/tataSalt.jpg","/items/sprite.jpg","/items/aashirvaadAtta.jpg","/items/amulcheese.jpg","/items/britaniaBread.jpg","/items/cococola.jpg","/items/img57.jpg","/items/img58.jpg","/items/img59.jpg","/items/img60.jpg","/items/img61.jpg","/items/img62.jpg","/items/img63.jpg","/items/img64.jpg","/items/img65.jpg","/items/img66.jpg","/items/img67.jpg","/items/img68.jpg","/items/img69.jpg","/items/img70.jpg","/items/img71.jpg","/items/img72.jpg","/items/img73.jpg","/items/img74.jpg","/items/img75.jpg","/items/img76.jpg","/items/img77.jpg","/items/img78.jpg"];
const m12 = ["/items/img5.jpg","/items/img9.jpg","/items/img17.jpg","/items/img4.png","/items/img13.jpg","/items/img10.jpg","/items/img1.jpg","/items/img8.jpg","/items/img27.jpg","/items/img28.jpg","/items/img14.jpg","/items/img22.jpg","/items/img16.jpg","/items/img24.jpg","/items/img11.jpg","/items/img6.jpg","/items/img29.jpg","/items/img7.jpg","/items/img21.jpg","/items/img12.jpg","/items/img2.jpg","/items/img26.jpg","/items/img18.jpg","/items/img19.png","/items/img25.jpg","/items/img20.jpg","/items/img23.jpg","/items/img15.jpg","/items/img3.jpg"];
const m13 = ["/items/img79.jpg","/items/img80.jpg","/items/img81.jpg","/items/img82.jpg","/items/img83.jpg","/items/img84.jpg","/items/img85.jpg","/items/img86.jpg","/items/img87.jpg","/items/img88.jpg","/items/img89.jpg","/items/img90.jpg","/items/img91.jpg","/items/img92.jpg","/items/img93.jpg","/items/img94.jpg","/items/img95.jpg","/items/img96.jpg","/items/img97.jpg","/items/img98.jpg","/items/img99.jpg","/items/img100.jpg","/items/img101.jpg","/items/img102.jpg"];

const m21 = ["/items/moongdal.jpg","/items/besan.jpg","/items/biryanirice.jpg","/items/thumsup.jpg","/items/tataSalt.jpg","/items/amul.png","/items/sprite.jpg","/items/aashirvaadAtta.jpg","/items/amulcheese.jpg","/items/catchredchillipowder.jpg","/items/haldiramsRasgulla.jpg","/items/img103.jpg","/items/img104.jpg","/items/img105.jpg","/items/img106.jpg","/items/img107.jpg","/items/img108.jpg","/items/img109.jpg","/items/img110.jpg","/items/img111.jpg","/items/img112.jpg","/items/img113.jpg","/items/img114.jpg","/items/img115.jpg"];
const m22 = ["/items/img15.jpg","/items/img3.jpg","/items/img27.jpg","/items/img8.jpg","/items/img21.jpg","/items/img12.jpg","/items/img19.png","/items/img5.jpg","/items/img29.jpg","/items/img1.jpg","/items/img16.jpg","/items/img23.jpg","/items/img10.jpg","/items/img4.png","/items/img18.jpg","/items/img7.jpg","/items/img25.jpg","/items/img13.jpg","/items/img2.jpg","/items/img20.jpg","/items/img9.jpg","/items/img26.jpg","/items/img14.jpg","/items/img22.jpg","/items/img6.jpg","/items/img28.jpg","/items/img11.jpg","/items/img17.jpg","/items/img24.jpg"];
const m23 = ["/items/img81.jpg","/items/img47.jpg","/items/img92.jpg","/items/img55.jpg","/items/img79.jpg","/items/img46.jpg","/items/img99.jpg","/items/img85.jpg","/items/img43.jpg","/items/img94.jpg","/items/img51.jpg","/items/img88.jpg","/items/img102.jpg","/items/img50.jpg","/items/img83.jpg","/items/img96.jpg","/items/img45.jpg","/items/img90.jpg","/items/img53.jpg","/items/img87.jpg","/items/img100.jpg","/items/img48.jpg","/items/img93.jpg","/items/img80.jpg","/items/img56.jpg","/items/img89.jpg","/items/img44.jpg","/items/img97.jpg"];

const m31 = ["/items/img109.jpg","/items/moongdal.jpg","/items/sprite.jpg","/items/img72.jpg","/items/besan.jpg","/items/amulcheese.jpg","/items/img57.jpg","/items/thumsup.jpg","/items/img103.jpg","/items/aashirvaadAtta.jpg","/items/img66.jpg","/items/catchredchillipowder.jpg","/items/redBull.jpg","/items/img115.jpg","/items/biryanirice.jpg","/items/img60.jpg","/items/amul.png","/items/img75.jpg","/items/cococola.jpg","/items/haldiramsRasgulla.jpg","/items/img69.jpg","/items/tataSalt.jpg","/items/img111.jpg","/items/britaniaBread.jpg","/items/img63.jpg","/items/lays.jpg","/items/img105.jpg","/items/img78.jpg","/items/img107.jpg","/items/img113.jpg"];
const m32 = ['/items/img102.jpg', '/items/img52.jpg', '/items/img80.jpg', '/items/img32.jpg', '/items/img95.jpg', '/items/img88.jpg', '/items/img35.jpg', '/items/img33.jpg', '/items/img79.jpg', '/items/img101.jpg', '/items/img89.jpg', '/items/img34.jpg', '/items/img55.jpg', '/items/img39.jpg', '/items/img36.jpg', '/items/img92.jpg', '/items/img96.jpg', '/items/img43.jpg', '/items/img31.jpg', '/items/img44.jpg', '/items/img53.jpg', '/items/img83.jpg', '/items/img90.jpg', '/items/img48.jpg', '/items/img50.jpg', '/items/img38.jpg', '/items/img30.jpg', '/items/img86.jpg', '/items/img47.jpg', '/items/img91.jpg', '/items/img82.jpg', '/items/img45.jpg'];

// Sign up handler
function handleSignUp() {
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!username || !email || !password) {
        alert('Please fill in all fields to sign up.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email.');
        return;
    }

    const userExists = users.some(
        user => user.email.toLowerCase() === email.toLowerCase() ||
                user.username.toLowerCase() === username.toLowerCase()
    );
    if (userExists) {
        alert('Email or username already used. Please choose a different one or sign in.');
        return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    alert(`Sign up successful! Welcome, ${username}.`);
    clearInputs();
    showUserPanel(newUser);
}

// Sign in handler
function handleSignIn() {
    const identifier = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!identifier || !password) {
        alert('Please enter your username/email and password to sign in.');
        return;
    }

    const user = users.find(
        user =>
            (user.email.toLowerCase() === identifier.toLowerCase() ||
             user.username.toLowerCase() === identifier.toLowerCase()) &&
            user.password === password
    );

    if (user) {
        alert(`Sign in successful! Welcome back, ${user.username}.`);
        clearInputs();
        showUserPanel(user);
    } else {
        alert('Incorrect username/email or password. Please try again.');
    }
}

// Sign out handler
signOutBtn.addEventListener('click', function () {
    alert('You have signed out.');
    showAuthForm();
});

// Initial listeners
signUpBtn.addEventListener('click', handleSignUp);
signInBtn.addEventListener('click', handleSignIn);


for(var i=0;i<markets.length;i++){
    markets[i].addEventListener("click",playClickSound);
    markets[i].addEventListener("click",openMarketDetails);
    markets[i].addEventListener("click",loadMarketItems);
}

function openMarketDetails(e){
    mainContentContainer.style.display="none";
    marketDetailsContainer.style.display="flex";
    var marketName,marketLocation,marketImage;

    if(e.target.tagName=="DIV"&&e.target.classList.contains("market")){
        marketName=e.target.children[2].children[0].innerText;
        marketLocation=e.target.children[2].children[1].innerText;
        marketImage=e.target.children[0].children[0].src;
    }
    else{
        marketName=e.target.parentElement.parentElement.children[2].children[0].innerText;
        marketLocation=e.target.parentElement.parentElement.children[2].children[1].innerText;
        marketImage=e.target.parentElement.parentElement.children[0].children[0].src;
    }
    if(e.target.tagName=="DIV"&&e.target.classList.contains("market-floor")){
        marketName=e.target.parentElement.children[2].children[0].innerText;
        marketLocation=e.target.parentElement.children[2].children[1].innerText;
        marketImage=e.target.parentElement.children[0].children[0].src;
    }

    marketNameDetails.innerText=marketName;
    marketLocationDetails.innerText=marketLocation;
    marketImageDetails.src=marketImage;
    e.stopPropagation();
}

accountLogo.addEventListener("click",transformNav);

function transformNav(){
    accountNavpanelContainer.classList.toggle("appear");
    accountLogo.classList.toggle("transform")
}



//market stuff



function loadMarketItems(e){
    backButton.style.display="block";
    var marketName,startIndex,endIndex;
    if(e.target.tagName=="DIV"&&e.target.classList.contains("market")){
        marketName=e.target.children[2].children[0].innerText;
    }
    else{
        marketName=e.target.parentElement.parentElement.children[2].children[0].innerText;
    }
    if(e.target.tagName=="DIV"&&e.target.classList.contains("market-floor")){
        marketName=e.target.parentElement.children[2].children[0].innerText;
    }
    fetch('itemsInfo.json')
  .then(response => response.json())
  .then(data => {
    const allItemNames = data.map(item => item["Item Name"]);
    const allItemPrices = data.map(item => item["Item Price"]);
    const allFloors = data.map(item => item["Floor"]);
    const allMarketNames = data.map(item => item["Market"]);

    if(marketName=="DMart – Petbasheerabad"){
        startIndex=0;
        endIndex=618;
        for(var i=0;i<m01.length;i++){
            var img=document.createElement('IMG');
            img.src=m01[i];
            var div=document.createElement('DIV');
            div.append(img);
            floorImages0.append(div);
        }
        for(var i=0;i<m02.length;i++){
            var img=document.createElement('IMG');
            img.src=m02[i];
            var div=document.createElement('DIV');
            div.append(img);
            floorImages1.append(div);
        }
        for(var i=0;i<m03.length;i++){
            var img=document.createElement('IMG');
            img.src=m03[i];
            var div=document.createElement('DIV');
            div.append(img);
            floorImages2.append(div);
        }
        for(var i=0;i<m04.length;i++){
            var img=document.createElement('IMG');
            img.src=m04[i];
            var div=document.createElement('DIV');
            div.append(img);
            floorImages3.append(div);
        }
    }
    if(marketName=="DMart – Alwal"){
        startIndex=619;
        endIndex=1083;
        for(var i=0;i<m11.length;i++){
            var img=document.createElement('IMG');
            img.src=m11[i];
            var div=document.createElement('DIV');
            div.append(img);
            floorImages0.append(div);
        }
        for(var i=0;i<m12.length;i++){
            var img=document.createElement('IMG');
            img.src=m12[i];
            var div=document.createElement('DIV');
            div.append(img);
            floorImages1.append(div);
        }
        for(var i=0;i<m13.length;i++){
            var img=document.createElement('IMG');
            img.src=m13[i];
            var div=document.createElement('DIV');
            div.append(img);
            floorImages2.append(div);
        }
    }
    if(marketName=="DMart – Bowenpally"){
        startIndex=1084;
        endIndex=1565;
        for(var i=0;i<m21.length;i++){
            var img=document.createElement('IMG');
            img.src=m21[i];
            var div=document.createElement('DIV');
            div.append(img);
            floorImages0.append(div);
        }
        for(var i=0;i<m22.length;i++){
            var img=document.createElement('IMG');
            img.src=m22[i];
            var div=document.createElement('DIV');
            div.append(img);
            floorImages1.append(div);
        }
        for(var i=0;i<m23.length;i++){
            var img=document.createElement('IMG');
            img.src=m23[i];
            var div=document.createElement('DIV');
            div.append(img);
            floorImages2.append(div);
        }
    }
    if(marketName=="DMart – IDPL Colony"){
        startIndex=1566;
        endIndex=2036;
        for(var i=0;i<m31.length;i++){
            var img=document.createElement('IMG');
            img.src=m31[i];
            var div=document.createElement('DIV');
            div.append(img);
            floorImages0.append(div);
        }
        for(var i=0;i<m32.length;i++){
            var img=document.createElement('IMG');
            img.src=m32[i];
            var div=document.createElement('DIV');
            div.append(img);
            floorImages1.append(div);
        }
    }


    for(var i=startIndex;i<=endIndex;i++){
        var div=document.createElement("div");
        div.classList.add("floor-item");
        div.innerText=allItemNames[i]+"\n(₹"+allItemPrices[i]+")";
        floorDetails[allFloors[i]].append(div);
    }
    for(var i=0;i<floorDetails.length;i++){
        if(floorDetails[i].children.length==0){
            floorDetails[i].parentElement.remove();
        }
    }
    var floorItems=document.querySelectorAll(".floor-item");
for(var i=0;i<floorItems.length;i++){
    floorItems[i].addEventListener("mouseenter",playHoverSound);
}
const hoverSound = new Audio('hover.mp3');

function playHoverSound(){
    hoverSound.play();
}

var s1=0,s2=619,s3=1084,s4=1566;
    var e1=618,e2=1083,e3=1565,e4=2036; 

    if(marketName=="DMart – Petbasheerabad"){
        for(var i=s1;i<=e1;i++){
            if(storeSearchBit[0][i]==1){
                console.log(floorItems[i]);
                floorItems[i].style.color="red";
            }
        }
    }
    if(marketName=="DMart – Alwal"){
        for(var i=s2;i<=e2;i++){
            if(storeSearchBit[1][i-s2]==1){
                console.log(floorItems[i]);
                floorItems[i-s2].style.color="red";
            }
        }
    }
    if(marketName=="DMart – Bowenpally"){
        for(var i=s3;i<=e3;i++){
            if(storeSearchBit[2][i-s3]==1){
                console.log(floorItems[i]);
                floorItems[i-s3].style.color="red";
            }
        }
    }
    if(marketName=="DMart – IDPL Colony"){
        for(var i=s4;i<=e4;i++){
            if(storeSearchBit[3][i-s4]==1){
                console.log(floorItems[i]);
                floorItems[i-s4].style.color="red";
            }
        }
    }

  });
}

//search compute
var storeSearchBit=[619, 465, 482, 471].map(size => Array(size).fill(0));

headerSearchBox.addEventListener("input",computeSearchBox);

function computeSearchBox(e){
    var input=headerSearchBox.value;
    var n=input.length;
    var searchedValue=input.toLowerCase().split(',').map(word => word.trim()).filter(word => word !== '');
    if(searchedValue===""){
        refresh();
        return;
    }
    var s1=0,s2=619,s3=1084,s4=1566;
    var e1=618,e2=1083,e3=1565,e4=2036; 
    fetch('itemsInfo.json')
  .then(response => response.json())
  .then(data => {
    const allItemNames = data.map(item => item["Item Name"]);
    const allItemPrices = data.map(item => item["Item Price"]);
    const allFloors = data.map(item => item["Floor"]);
    const allMarketNames = data.map(item => item["Market"]);
    let matched = new Array(5).fill(0);
    let validKeywords = searchedValue.filter(word => word.length >= 3);
    for(var i=s1;i<=e1;i++){
        for(var j=0;j<searchedValue.length;j++){
            if(allItemNames[i].toLowerCase().includes(searchedValue[j])&&searchedValue[j].length>=4){
                matched[0]+=1;
                storeSearchBit[0][i]=1;
                continue;
            }
            if(i==e1 && j==searchedValue.length-1){
                if(matched[0]>= validKeywords.length && validKeywords.length > 0){
                    markets[0].style.display="flex";
                }else{
                    markets[0].style.display="none";
                }
            }
            if(searchedValue[j].length<4&&searchedValue.length==1){
                markets[0].style.display="flex"
            }


        }
    }
    for(var i=s2;i<=e2;i++){
        for(var j=0;j<searchedValue.length;j++){
            if(allItemNames[i].toLowerCase().includes(searchedValue[j])&&searchedValue[j].length>=4){
                matched[1]+=1;
                storeSearchBit[1][i-s2]=1;
                continue;
            }
            if(i==e2 && j==searchedValue.length-1){
                if(matched[1]>= validKeywords.length && validKeywords.length > 0){
                    markets[1].style.display="flex";
                }else{
                    markets[1].style.display="none";
                }
            }
            if(searchedValue[j].length<4&&searchedValue.length==1){
                markets[1].style.display="flex"
            }

        }
    }
    for(var i=s3;i<=e3;i++){
        for(var j=0;j<searchedValue.length;j++){
            if(allItemNames[i].toLowerCase().includes(searchedValue[j])&&searchedValue[j].length>=4){
                matched[2]+=1;
                storeSearchBit[2][i-s3]=1;
                continue;
            }
            if(i==e3 && j==searchedValue.length-1){
                if(matched[2]>= validKeywords.length && validKeywords.length > 0){
                    markets[2].style.display="flex";
                }else{
                    markets[2].style.display="none";
                }
            }
            if(searchedValue[j].length<4&&searchedValue.length==1){
                markets[2].style.display="flex"
            }

        }
    }
    for(var i=s4;i<=e4;i++){
        for(var j=0;j<searchedValue.length;j++){
            if(allItemNames[i].toLowerCase().includes(searchedValue[j])&&searchedValue[j].length>=4){
                matched[3]+=1;
                storeSearchBit[3][i-s4]=1;
                continue;
            }
            if(i==e4 && j==searchedValue.length-1){
                if(matched[3]>= validKeywords.length && validKeywords.length > 0){
                    markets[3].style.display="flex";
                }else{
                    markets[3].style.display="none";
                }
            }
            if(searchedValue[j].length<4&&searchedValue.length==1){
                markets[3].style.display="flex"
            }

        }
    }


  });
}
var h3=document.querySelectorAll("h3");
function computeFloors() {
    fetch('itemsInfo.json')
    .then(response => response.json())
    .then(data => {
        const allItemNames = data.map(item => item["Item Name"]);
        const allFloors = data.map(item => item["Floor"]);

        var input = headerSearchBox.value;
        var searchedValue = input.toLowerCase().split(',').map(word => word.trim()).filter(word => word !== '');

        var s1=0,s2=619,s3=1084,s4=1566;
    var e1=618,e2=1083,e3=1565,e4=2036; 

        const ranges = [
            [s1, e1, 0],
            [s2, e2, 1],
            [s3, e3, 2],
            [s4, e4, 3],
        ];

        ranges.forEach(([start, end, marketIndex]) => {
            let floors = [0, 0, 0, 0];
            for (let i = start; i <= end; i++) {
                for (let j = 0; j < searchedValue.length; j++) {
                    if (allItemNames[i].toLowerCase().includes(searchedValue[j]) && searchedValue[j].length >= 3) {
                        floors[allFloors[i]] += 1;
                        break; 
                    }
                }
            }
            for (let k = 0; k < 4; k++) {
                marketFloors[marketIndex].children[k].innerText = "Floor " + k + ": " + "⚫".repeat(floors[k]);
            }
            marketDetailsContainer.style.display="none";
            mainContentContainer.style.display="flex";
            backButton.style.display="none";
            for(var i=0;i<h3.length;i++){
                h3[i].style.display="flex";
            }
        });
    });
}
// DMart Petbasheerabad
var lat0 = 17.5420;
var lon0 = 78.4850;

// DMart IDPL
var lat1 = 17.4770;
var lon1 = 78.4300;

// DMart Alwal
var lat2 = 17.5020;
var lon2 = 78.5100;

// DMart Bowenpally
var lat3 = 17.4670;
var lon3 = 78.4750;

function getDistanceInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in km
  const dLat = degToRad(lat2 - lat1);
  const dLon = degToRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

// Get user's location
navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat+" "+lon);
    const distances = [];
    distances[0] = getDistanceInKm(lat0, lon0, lat, lon);
    distances[1] = getDistanceInKm(lat1, lon1, lat, lon);
    distances[2] = getDistanceInKm(lat2, lon2, lat, lon);
    distances[3] = getDistanceInKm(lat3, lon3, lat, lon);

    // Assuming you have elements with class 'marketDistances' to show these
    for (let i = 0; i < marketDistances.length; i++) {
      marketDistances[i].innerText = distances[i].toFixed(2) + ' km';
    }
  },
  (error) => {
    console.error("Error getting location:", error.message);
  }
);

var hideImagesbtn=document.querySelector(".hide-images");

function toggleFloorImages() {
    floorImages.forEach((image) => {
      image.classList.toggle('hide');
    });
  }
  
  // Click event for hide-images button
  hideImagesbtn.addEventListener('click', toggleFloorImages);
  
  // Keyboard event for 'h' key
  document.addEventListener('keydown', (event) => {
    // Only trigger if market-details-container is visible and 'h' is pressed
    if (event.key.toLowerCase() === 'h' && marketDetailsContainer.style.display !== 'none') {
      toggleFloorImages();
    }
  });
  
  // Double-tap detection for mobile
  let lastTap = 0;
  let tapTimeout;
  marketDetailsContainer.addEventListener('touchstart', (event) => {
    const currentTime = new Date().getTime();
    const tapDelay = currentTime - lastTap;
  
    // Check if taps are within 300ms
    if (tapDelay < 300 && tapDelay > 0) {
      toggleFloorImages();
      clearTimeout(tapTimeout); // Clear any pending single-tap actions
    }
  
    lastTap = currentTime;
  
    // Optional: Prevent accidental zoom or other touch behaviors
    event.preventDefault();
  });
  
  // Optional: Ensure hide-images button is only visible when market-details-container is
  function toggleHideImagesButton() {
    hideImagesbtn.style.display = marketDetailsContainer.style.display !== 'none' ? 'block' : 'none';
  }
  
  // Update button visibility when market-details-container changes
  marketDetailsContainer.addEventListener('transitionend', toggleHideImagesButton);
  toggleHideImagesButton();



  