import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { createFormEntity } from './form-helpers.js';

// Firebase Configuration (move this from index.html)
const firebaseConfig = {
  apiKey: "AIzaSyBCQfJ9SZvB6QPO9V2ipIo4VWetlOYqGqs",
  authDomain: "anotherfbproject-d0621.firebaseapp.com",
  projectId: "anotherfbproject-d0621",
  storageBucket: "anotherfbproject-d0621.appspot.com",
  messagingSenderId: "891309681369",
  appId: "1:891309681369:web:5a28c82157847ce9a42cc8",
  measurementId: "G-K840G3YWQY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Get the auth instance from Firebase


async function homeViewHandler() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    }

    this.partial('./templates/home/home.hbs');
}

async function aboutViewHandler() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')  
    }

    this.partial('./templates/about/about.hbs');
}

async function loginViewHandler() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        loginForm: await this.load('./templates/login/loginForm.hbs')
    }

    await this.partial('./templates/login/loginPage.hbs');
}

async function registerViewHandler() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        registerForm: await this.load('./templates/register/registerForm.hbs')
    }

    await this.partial('./templates/register/registerPage.hbs');

    let formRef = document.querySelector('#register-form');

    let form = createFormEntity(formRef, ['username', 'password', 'repeatPassword']);

    formRef.addEventListener('submit', (e) => {
        e.preventDefault;

        let formValue = form.getValue();

        if (formValue.password !== formValue.repeatPassword) {
            console.error("Passwords do not match");

            return;
        }

        createUserWithEmailAndPassword(auth, formValue.username, formValue.password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log('User registered:', user);
            })
            .catch(error => {
                console.error('Error registering user:', error);
            });

        console.log(form.getValue());
    });
}

var app = Sammy('#main', function() {
    this.use('Handlebars', 'hbs');

    this.get('#/', homeViewHandler);
    this.get('#/home', homeViewHandler);
    this.get('#/about', aboutViewHandler);
    this.get('#/login', loginViewHandler);
    this.get('#/register', registerViewHandler);
    this.post('#/register', () => false);
});

$(function () {
    app.run('#/');
});