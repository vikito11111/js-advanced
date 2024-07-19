class CheckingAccount {
    checkClientId(clientId) {
        let isCorrect = false;

        const pattern = /^[0-9]{6}$/;

        if (pattern.test(clientId)) {
            isCorrect = true;
        }
        else {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        return isCorrect;
    }

    checkEmail(email) {
        let isCorrect = false;

        const pattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{5,}(\.[a-zA-Z]{5,})?$/;

        if (pattern.test(email)) {
            isCorrect = true;
        }
        else {
            throw new TypeError('Invalid e-mail');
        }

        return isCorrect;
    }

    checkNames(name, type) {
        let isCorrect = false;

        if (name.length >= 3 && name.length <= 20) {
            const pattern = /^[a-zA-Z]+$/;

            if (pattern.test(name)) {
                isCorrect = true;
            } 
            else {
                throw new TypeError(`${type} name must contain only Latin characters`);
            }
        } 
        else {
            throw new TypeError(`${type} name must be between 3 and 20 characters long`);
        }

        return isCorrect;
    }

    constructor(clientId, email, firstName, lastName) {
        if (this.checkClientId(clientId)) {
            this.clientId = clientId;
        }

        if (this.checkEmail(email)) {
            this.email = email;
        }

        if (this.checkNames(firstName, 'First')) {
            this.firstName = firstName;
        }

        if (this.checkNames(lastName, 'Last')) {
            this.lastName = lastName;
        }
    }
}

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');