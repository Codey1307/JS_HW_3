let num = +prompt("Введіть число, більше за 0");

if(num < 0){
  console.log("Sorry, no numbers");
}

for(let i = 0; i <= num; i++){
if(i % 5 === 0){
  console.log(i)
}
}
