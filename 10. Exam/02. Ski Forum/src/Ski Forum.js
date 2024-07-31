export class Forum {
    #users;
    #questions;
    #id;

    constructor() {
        this.#users = [];
        this.#questions = [];
        this.#id = Number(1);
    }
    
    checkIfEmpty(properties) {
        let isEmpty = false;

        for (const property of properties) {
            if (property === "") {
                isEmpty = true;
            }
        }

        return isEmpty;
    }

    errorHandler(message) {
        throw new Error(message);
    }

    register(username, password, repeatPassword, email) {
        if (this.checkIfEmpty([username, password, repeatPassword, email])) {
            this.errorHandler('Input can not be empty!');
        }

        if (password !== repeatPassword) {
            this.errorHandler('Passwords do not match!');
        }

        if (this.#users.find(user => user.username === username)) {
            this.errorHandler(`A user with the username ${username} already exists!`);
        }

        if (this.#users.find(user => user.email === email)) {
            this.errorHandler(`A user with the email ${email} already exists!`);
        }

        this.#users.push({
            username,
            email,
            password,
            isLogged: false
        });

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        const user = this.#users.find(user => user.username === username);

        if (!user) {
            this.errorHandler('There is no such user!');
        }

        if (user.isLogged) {
            this.errorHandler('User is already logged in!');
        }

        if (user.password === password) {
            user.isLogged = true;

            return 'Hello! You have logged in successfully!';
        } else {
            this.errorHandler('Wrong password!');
        }
    }

    logout(username, password) {
        const user = this.#users.find(user => user.username === username);

        if (!user) {
            this.errorHandler('There is no such user!');
        }

        if (!user.isLogged) {
            this.errorHandler('You are already logged out!');
        }

        if (user.password === password) {
            user.isLogged = false;

            return 'You have logged out successfully!';
        }
        else {
            this.errorHandler('Wrong password!');
        }
    }

    postQuestion(username, question) {
        const user = this.#users.find(user => user.username === username);

        if (!user) {
            this.errorHandler('There is no such user!');
        }
    
        if (!user.isLogged) {
            this.errorHandler('The user is not logged in!');
        }
    
        if (question === '') {
            this.errorHandler('Invalid question!');
        }
    
        this.#questions.push({
            id: this.#id,
            username,
            question
        });
    
        this.#id++;

        return 'Your question has been posted successfully!';
    }

    postAnswer(username, questionId, answer) {
        const user = this.#users.find(user => user.username === username);

        if (!user) {
            this.errorHandler('There is no such user!');
        }

        if (!user.isLogged) {
            this.errorHandler('The user is not logged in!');
        }

        if (answer === '') {
            this.errorHandler('Invalid answer!');
        }

        const question = this.#questions.find(question => question.id === questionId);

        if (!question) {
            this.errorHandler('There is no such question!');
        }

        if (!question.answers) {
            question.answers = [];
        }

        question.answers.push({
            username: user.username,
            answer
        });

        return 'Your answer has been posted successfully!';
    }

    showQuestions() {
        let result = '';

        for (const question of this.#questions) {
            result += `Question ${question.id} by ${question.username}: ${question.question}\n`;

            if (question.answers && question.answers.length > 0) {
                for (const answer of question.answers) {
                    result += `---${answer.username}: ${answer.answer}\n`;
                }
            }
        }

        return result.trim();
    }
}