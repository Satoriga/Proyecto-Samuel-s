document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const googleLogin = document.getElementById('googleLogin');
    const microsoftLogin = document.getElementById('microsoftLogin');
    const appleLogin = document.getElementById('appleLogin');
    const facebookLogin = document.getElementById('facebookLogin');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log(`Iniciando sesión con usuario: ${username}`);
        
        // Mostrar ventana de confirmación
        const confirmation = confirm("¿Estás seguro de que deseas iniciar sesión?");
        if (confirmation) {
        
            window.location.href = 'carpeta1/index.html';
        } else {
        
            console.log('Inicio de sesión cancelado');
        }
    });

    googleLogin.addEventListener('click', function() {
        authenticate(new Google());
    });

    microsoftLogin.addEventListener('click', function() {
        authenticate(new Microsoft());
    });

    appleLogin.addEventListener('click', function() {
        authenticate(new Apple());
    });

    facebookLogin.addEventListener('click', function() {
        authenticate(new Facebook());
    });

    function authenticate(adapter) {
        adapter.login();
    }

    class Google {
        login() {
            console.log('Iniciando sesión con Google');
            window.location.href = 'https://accounts.google.com/signin';
        }
    }

    class Microsoft {
        login() {
            console.log('Iniciando sesión con Microsoft');
            window.location.href = 'https://login.microsoftonline.com/';
        }
    }

    class Apple {
        login() {
            console.log('Iniciando sesión con Apple');
            window.location.href = 'https://appleid.apple.com/';
        }
    }

    class Facebook {
        login() {
            console.log('Iniciando sesión con Facebook');
            window.location.href = 'https://www.facebook.com/login/';
        }
    }
});
