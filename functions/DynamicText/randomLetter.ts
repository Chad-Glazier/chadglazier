export default function randomLetter(): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const index = Math.floor(Math.random() * alphabet.length);
  return alphabet[index];
}
