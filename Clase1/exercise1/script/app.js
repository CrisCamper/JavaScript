const actualHour = parseInt(prompt("Actual Hour: "));
const hourCantue = parseInt(prompt("Cantue hours: "));

const futureHour = (actualHour + hourCantue) % 12;

console.log(futureHour);