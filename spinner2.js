process.stdout.write('hello from spinner2.js... \rheyyy\n');
let count = 100;
let arrayCharacters = ["|", "/","-", "\\","|","/","-","\\","|"];

for(let x = 0; x < 9; x++){
    setTimeout(() => {
    process.stdout.write('\r'+arrayCharacters[x]+"   ");
  }, count);
  count +=200;
}

