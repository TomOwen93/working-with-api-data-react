export default function capitalize(str: string): string | undefined {
  if (str === undefined) {
    return "";
  }
  return str[0].toUpperCase() + str.slice(1);
}
