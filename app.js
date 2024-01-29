//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.
/*
function processNumbers (callBack){
     return callBack(10,10)
}
function callBackFunction(number1, number2){
    console.log(number1 + number2);
}
processNumbers(callBackFunction)
*/

//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!
/*
const isValidUser = (username, password) => {
    console.log(typeof username);
    console.log(typeof password);
    if (username === "" || password === "" || typeof username  !== 'string' || typeof password !== 'string') {
        return true;
    } else {
        return false;
    }
};
console.log(isValidUser("eli", "123"));
*/

//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.
/*
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}   
    n = 10
    for (let i = 0; i < n; i++){
        console.log(fibonacci(i));
}
*/  

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!
/*
let seconds = 10;

const countdown = setInterval(function () {
    if (seconds > 0) {
        console.log(seconds + ' 🕘')
        seconds --;
    } else {
        console.log('timed out')
    }
},1000)
*/

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.
/*
function calculateAge(dateBirth) {
    const currentDate = new Date();
    const birthDate = new Date(dateBirth)
    let age = currentDate.getFullYear() - birthDate.getFullYear()
    return age;
}
const dateBirth = "2005"
const age = calculateAge(dateBirth)
console.log(age,` ${'year'}`);
*/
                    
// 6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
// კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით8!!
/*
const date = new Date().getDay();
const weekdAays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
const today = weekdAays[date];
console.log(today);
*/