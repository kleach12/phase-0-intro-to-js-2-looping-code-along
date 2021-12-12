const names = ["Guadalupe", "Ollie", "Aki"];

const event = ["surprise"]

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    message.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
  };
  return message;
}

const message = [] 

function countDown(int) {
  let i = 10;
  while (i > -1) {
    console.log (i--)
  }
}
countDown;