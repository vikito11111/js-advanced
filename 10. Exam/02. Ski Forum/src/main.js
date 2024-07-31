import { Forum } from './Ski Forum.js';

let forum = new Forum();

console.log(forum.register('Michael', '123', '123', 'michael@abv.bg')); 
console.log(forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com'));
//console.log(forum.register('Stoyan', '123ab7', '123ab7', 'any@gmail@.com'));
//console.log(forum.register('Marian', '123ab7', '123ab7', 'some@gmail@.com'));

console.log(forum.login('Michael', '123'));
console.log(forum.login('Stoyan', '123ab7'));
//console.log(forum.login('Emily', '123'));
//console.log(forum.login('Michael', '1234'));
//console.log(forum.login('Michael', '123'));

//console.log(forum.logout('Michael', '123'));
//console.log(forum.logout('Emily', '123'));
//console.log(forum.logout('Michael', '1234'));
//console.log(forum.logout('Michael', '123'));

console.log(forum.postQuestion('Michael', 'Can I rent a snowboard from your ship?'));
console.log(forum.postQuestion('Michael', 'Do I need glasses for skiing?'));
//console.log(forum.postQuestion('Michael', ''));
console.log(forum.postQuestion('Stoyan', 'Can I rent a snowboard from your ship?'));

console.log(forum.postAnswer('Michael', 1, 'Yes, I have rented one last year.'));
console.log(forum.postAnswer('Michael', 1, 'Yes!'));
console.log(forum.postAnswer('Michael', 3, 'No.'));

console.log(forum.showQuestions());