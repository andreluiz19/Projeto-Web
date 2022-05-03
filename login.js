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


fetch('https://reqres.in/api/login')
.then(response => response.json())
.then(json =>{
    console.log(json.data);
})
