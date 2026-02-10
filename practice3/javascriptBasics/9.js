let i2 = 3;

while (i) {
  alert( i-- );
}


let i = 0;
while (++i < 5) alert( i );


for(let i=0; i<=10; ++i){
    if(i%2==0)alert(i);
}


for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}


let while_i;
while(while_i<3){
    alert(`number ${while_i}!` );
    while_i++;
}



while(true) {
    let input = prompt("Enter a number greater than 100:");
    
    let sotka = Number(input);

    if (sotka > 100) {
        alert("Krasava!");
        break; 
    } else {
        alert("Not greater than 100, try again.");
    }
}


let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false; 
    for (let p = 2; p * p <= n; p++) {
        if (isPrime[p] === true) {
            for (let i = p * p; i <= n; i += p) {
                isPrime[i] = false;
            }
        }
    }

    let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}


let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}