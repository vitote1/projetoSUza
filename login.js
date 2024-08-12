let btCadastro = document.getElementById('signup-btn');
let btLogin = document.getElementById('login');


btCadastro.addEventListener('click', function() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    if (email && senha) {
      
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        if(email == '' && senha == ''){
            alert('Preencha os campos!!')
        }

        let usuarioExistente = usuarios.find(usuario => usuario.email === email);
        if (usuarioExistente) {
            alert('Este e-mail já está cadastrado!');
        } else {
         
            let novoUsuario = {
                email: email,
                senha: senha
            };
            usuarios.push(novoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            alert('Cadastro realizado com sucesso!');
            email.value == ''
            senha.value = ''
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});


btLogin.addEventListener('click', function() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    if (email && senha) {
       
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

      
        let usuarioValido = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

        if (usuarioValido) {
            alert('Login realizado com sucesso!');
        } else {
            alert('Email ou senha incorretos.');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
    window.location.href = 'index.html';
});
