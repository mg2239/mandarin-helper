const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const fs = require('fs');
const { chars, pinyin, hints } = require('./char_info');

const dict = {}

readline.question("input boundaries: ", (b) => {
  const inf = chars.indexOf(b.charAt(0));
  const inl = chars.indexOf(b.charAt(2));
  dict[1] = []
  for (let i = inf; i < inl + 1; i++) {
    dict[1].push({
      c: chars[i],
      p: pinyin[i],
      h: hints[i]
    });
  }
  readline.close();
  fs.writeFileSync("data.json", JSON.stringify(dict));
});