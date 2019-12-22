const log = document.querySelector('#loginForm');

const login = (e)=>{
    e.preventDefault();
    alert('successfully Logged in!');
}

log.addEventListener('submit',login);