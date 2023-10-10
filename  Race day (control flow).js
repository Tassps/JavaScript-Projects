let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let runnersAge = 28;

if(early && runnersAge > 18) {
  raceNumber += 1000;
}

if(early && runnersAge > 18) {
  console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`);
}
else if(!early && runnersAge > 18) {
  console.log(`Race will begin at 11:00, your race number is: ${raceNumber}.`);
}
else if(runnersAge < 18) {
  console.log(`Race will begin at 12:30, your race number is: ${raceNumber}.`);
}
else{
  console.log('Please approach the registration desk, thanks!');
}