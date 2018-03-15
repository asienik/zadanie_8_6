// Hello.
//
// This is a task "what if".

/*alert var name = prompt('Enter your name');
('Hello, ' + name);
console.log('Hello, ' + name);*/
var a = prompt('podaj wybraną cyfrę');
var b = prompt('poda drugą cyfrę');
var value = (a * a) - (2 * a * b) - (b * b);
console.log(value);
if (value < 0) {
	console.log('wynik ujemny');
} else if (value > 0) {
	console.log('wynik dodatni');
} else if (value === 0) {
	console.log('wynik równy zero');
} else {
	console.log('błędna dana - podaj CYFRĘ');
}