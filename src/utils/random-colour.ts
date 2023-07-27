export default function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function getRandomColorStatic(): string {
  let pickedColour = "";
  const colours = ["#E27D60", "#3FEEE6", "#E8A87C", "#C38D9E", "#41B3A3"];

  for (let i = 0; i < 5; i++) {
    pickedColour = colours[Math.floor(Math.random() * 5)];
  }
  return pickedColour;
}
