let name = prompt('enter your name');
alert(`Hello ${name}`)
//_______________________________________

var number = Number(prompt('enter first number'));
var number1 = Number(prompt('enter second number'));
if(isNaN(number) || isNaN(number1)) console.log('Вы должны были ввести числа');
else{
    if (number>number1) console.log(number,'>',number1)
    else if (number<number1) console.log(number,'<',number1)
    else console.log(number,'=',number1)
}
// const min=()=>{
//     if(isNaN(number) || isNaN(number1)) console.log('Вы должны были ввести числа');
// else{
//     if (number>number1) console.log(number,'>',number1)
//     else if (number<number1) console.log(number,'<',number1)
//     else console.log(number,'=',number1)
// }
// }
// min()
//__________________________________________________________________________

var svetofor = (prompt('enter color svetofor')).toLowerCase()
if( svetofor === 'red') {console.log('stop')}
else if ( svetofor ==='yellow'){
    console.log('get ready')
}
else if ( svetofor ==='green'){
    console.log('go')
}
else( console.log('enter color of svetofor'))


