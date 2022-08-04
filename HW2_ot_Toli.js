// 2я домашка по JS со звездочками:

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
const a = Math.pow(2,10);
console.log(a);

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function pow(x) {return Math.pow(2,x);
}
   console.log(pow(10));

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее.
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
let str = "";
for(let i = 1; i < 6; i++){
    str = str +":)";
    console.log(str);
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows){
let req = "";
for(let i = 0; i < numberOfRows; i++){
    req = req + stroka; 
    console.log(req);
}
}
 printSmile("pixta", 5);

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word){
    let vowelsCount = 0;
    let consonantsCount = 0;
    const vowels = ['a','e', 'i'];
    const consonants = ['c','s','h','k','l','t'];
    for (let char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelsCount += 1;
        } else if(consonants.includes(char)) {
           consonantsCount += 1;
        }
    }
    return "гласных = "  + vowelsCount + " "  + "и" + " " + "согласных = " + consonantsCount;
} 
console.log(getWordStructure("case"));
console.log(getWordStructure("Case"));
console.log(getWordStructure("Check-list"));
console.log(getWordStructure("Check-List"));


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(word){
    const lowerCaseWord = word.toLowerCase();
return lowerCaseWord  === lowerCaseWord.split('').reverse().join('');
}
console.log(isPalindrom("abba")); 
console.log(isPalindrom("Abba")); 
console.log(isPalindrom("ABba"));
console.log(isPalindrom("Ablba"));
console.log(isPalindrom("absa"));


