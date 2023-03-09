export default function randomLetter(length: number = 1): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];    
  }
  return randomString;
}
