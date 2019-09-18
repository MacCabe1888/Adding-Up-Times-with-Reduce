const timeNodes = [...document.querySelectorAll("[data-time]")];

// const total = timeNodes.map(node => {
//   const time = node.dataset.time;
//   const [m, s] = time.split(":").map(parseFloat);
//   return m * 60 + s;
// }).reduce((total, s) => total + s, 0);

const total = timeNodes.reduce((total, node) => {
  const [m, s] = node.dataset.time.split(":").map(parseFloat);
  return total + m * 60 + s;
}, 0);

let secondsLeft = total;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
const seconds = secondsLeft % 60;

console.log(`${hours}:${minutes}:${seconds}`);
