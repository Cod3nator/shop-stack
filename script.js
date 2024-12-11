
const loginBtn = document.getElementById('login');
const signBtn = document.getElementById('signup');

loginBtn.addEventListener('click',()=>{
    location.href='./login/index.html';
})

signBtn.addEventListener('click',()=>{
    location.href='./signup/index.html'
})

localStorage.setItem("currUser", JSON.stringify({
    "firstName": "ashish",
    "lastName": "bose",
    "email": "asishbosek@gmail.com",
    "password": "123456",
    "token": "2+lEdQsB7e7rzS0Jj+j/wA=="
}));

localStorage.setItem("totalUser", JSON.stringify([
    {
        "firstName": "ashish",
        "lastName": "bose",
        "email": "asishbosek@gmail.com",
        "password": "123456"
    }
]));