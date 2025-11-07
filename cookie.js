function getCookie(name) {

const match = document.cookie.match(new RegExp(name + '=([^;]+)'));
 
return match ? match[1] : null;
}

function setCookie(name, value, days){
const expires = new Date(Date.now() + days * 864e5).toUTCString(); // 864e5 = 86400000 ms = 1 day
document.cookie = name + '=' + value + '; expires=' + expires + '; path=/';  
}

function acceptCookies(){
setCookie('CookiesAccepted', 'true', 30);
document.getElementById('cookie-banner').style.display = 'none';
}

window.onLoad = function () {
if (!getCookie('cookiesAccepted')) {
  document.getElementById('cookie-banner').style.display = 'block';
}
};
