const fs = require('fs');

module.exports = async function fileAppend(file, addedContent) {
  fs.appendFileSync(file, addedContent.toString('utf-8') + '\n');
  console.log(`${file} updated!`);
}

module.exports = async function fileDelete(file, deletion) {
  const text = fs.readFileSync(file, 'utf8');
  const textByLine = text.split('\n');
  if (textByLine.includes(deletion)) {
    let newArray = textByLine.filter(image => image !== deletion);
    let newFile = newArray.join('\n');
    fs.writeFileSync(file, newFile, (err) => {
      if (err) {
        throw err;
      }
      console.log(`${file} updated!`);
    });
  }
}

module.exports = function arrayCount(file) {
  const text = fs.readFileSync(file).toString('utf-8');
  const textByLine = text.split('\n');
  return textByLine.length - 1;
}

module.exports = function arrayValueSend(file, rng) {
  const text = fs.readFileSync(file).toString('utf-8');
  const textByLine = text.split('\n');
  const max = textByLine.length - 2;
  const selection = Math.floor(Math.random() * max);
  return textByLine[selection];
}

module.exports = function fileCheck(file, deletion) {
  const text = fs.readFileSync(file, 'utf8');
  const textByLine = text.split('\n');
  if (textByLine.includes(deletion)) {
    return true;
  }
}