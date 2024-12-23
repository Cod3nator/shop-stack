
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






function setCookie(name, value, days = 7, path = "/") {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Set expiry in days
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=${path}`;
  }
  
  // Generate a UUID or use your UUID logic
  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  
  // Set the cookie when the page loads
  window.onload = function () {
    const uuid = generateUUID(); // Replace with your own UUID generation logic if needed
    setCookie("xid", uuid, 30);
  };
  