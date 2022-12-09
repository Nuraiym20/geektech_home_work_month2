const card = {
    numberCard:'123456789123456',
    expirationDate:'12.27',
    typeCard:'Visa',
    CVC:234
}
console.log(card);


const bank = {
    code:55678,
    nameof:'Demir',
    schedule:'10:00-18:00',
    workNigth:false,
    adress:{
        city: 'Bishkek',
        street:'shopokova-chuy',
        home:'23'
    }           
}
console.log(bank);

let  servis= "RIA";

switch (servis) {
    case "RIA":
        console.log("деньги отправлены  RIA ");
        break;
    case "Unistream":
        console.log("деньги отправлены Unistream");
        break;
    case "Contact":
        console.log("деньги отправлены Contact");
        break;
    case "MoneyGram":
        console.log("деньги отправлены MoneyGram ");
        break;
    default:
        console.log("Unknown SERVIS");
    }

    let number = Number(prompt('enter number between 1 and 9'));

    switch (number) {
        case 1:
            console.log("I");
            break;
        case 2:
            console.log("II");
            break;
        case 3:
            console.log("III");
            break;
        case 4:
            console.log("IV");
            break;
        case 5:
            console.log("V");
            break;

        case 6:
            console.log("VI");
            break;

        case 7:
            console.log("VII");
            break;
        case 8:
            console.log("VII");
            break;
        case 9:
            console.log("IX");
            break;
        default:
            console.log("Unknown NUMBER");
        }

    let CustomerType = 1
        // if (CustomerType === 1) {
        //     console.log("Лицо: Физическое");
        // } else if(customerType === 2){
        //     console.log("Лицо: Юридическое");
        // }

        CustomerType===1 ? console.log("Лицо: Физическое"):customerType === 2 ?  console.log("Лицо: Юридическое"):console.log('enter 1 or 2');

        