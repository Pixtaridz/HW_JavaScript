// Функция не чего не принемает на вход
function yolochka(){
    let text_1 = "Hello world";
    console.log(text_1);
}

yolochka()

// Функция принемает на вход
function yolochka_1(q1, q2){
    // let result = q1 + q2;
    // console.log("Summ == " + result);
    console.log(`"Summ == " ${q1 + q2}`);
    console.log("Summ == ", q1 + q2);
    console.log("Summ == ", q1 * q2);
}
yolochka_1(5,10)

function yolochka_1(q1, q2){
    if(q1 > 4){
     let m_result = q2 * 10;
     console.log(m_result);
    
    }
}

function yolochka_2(...arguments) {
    let result = 0;
    for (let arg of arguments) {
        result +=arg;
    }
console.log(result);
}
yolochka_2(5, 10, 20, 100);


// поиск по массиву
names = ['Alex', 'Inna', 'Vadom', 'Anatoly', 'Natalia'];
function names_editor(person_name) {
    let name_1 = "Hello " + person_name + " !";
    console.log(name_1);
}
for (let  i=0; i < names.length; i++){
    names_editor(names[i]);
}

// Стрелочная функция
let f1 = () => console.log('-----');
f1()

let t1 = 10;
let t2 = 15;
let t3 = 20;

let summ = (n1, n2) => {console.log(`Summ == ${n1 + n2}`)}
summ(t1, t2)

function yolochka_pro(){}

yolochka_pro.prototype.method_1 = function(){
    console.log('method_1');
}

yolochka_pro.prototype.method_2 = function(tt1, tt2){
    console.log(`method_2 = ${tt1 + tt2}`);
}

let wood = new yolochka_pro();

wood.method_1();
wood.method_2(10, 20);


let t5 = 20;
let f3 = (t5 > 10) ?
    (tt1, tt2) => console.log(tt1 + tt2):
    (tt1, tt2) => console.log(tt1 - tt2);

 f3(10, 30);
