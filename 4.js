let bdays = ["10-17", "05-19", "20-19"];
for (let i = 0; i < bdays.length; i++) {
  let str = bdays[i];
  let newStr = str.replace("-", "/");
  let ubahArray = newStr.split(" ");
  console.log(ubahArray);
}
