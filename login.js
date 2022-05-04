let bt = document.getElementById('Logar');
let form = document.getElementById('formLogin');

bt.addEventListener("click", fnEntrar);

function fnEntrar(){
    form.style.display = 'block';
}

let btf = document.getElementById('fechar');

btf.addEventListener("click", fnFechar);

function fnFechar(){
    form.style.display = 'none';
}

let formu = document.getElementById('formLogin');
let email = document.getElementById('user');
let senha = document.getElementById('senha');

formu.addEventListener('submit', function(e) {
    axios.post('https://reqres.in/api/login', {
        email: email.value,
        password: senha.value
    })
    .then(function (response) {
    console.log(response);
    })
    e.preventDefault();
});


/*
let email = document.getElementById('user');
let password = document.getElementById('senha');
let credenciais = {email, password};
let parametros = { method: 'POST' , body:  credenciais};

fetch('https://reqres.in/api/login', parametros)
.then(response => response.json())
.then(json =>{
    console.log(json.data);
})
*/





/*
let http = new XMLHttpRequest();
http.open('POST', 'https://reqres.in/api/login', true);
console.log(json.data);


function validaLogin(){
    http.open('POST', 'https://reqres.in/api/login', true);
    console.log(json.data);
}
*/
