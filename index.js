
const form = document.querySelector('#regForm');

const register = (e)=>{
    e.preventDefault();
    const tel = form.querySelector('#tel');
    
    //what was really required..
    window.alert ( 'Registered Successfully !!' );
    
    //if(tel.value.length < 11)  alert('incomplete telephone number'); 

}


form.addEventListener('submit', register);