const findLongestWord = (sentence) => {
  const regex1 = /[a-z]/gi;

  const ar = sentence.toLowerCase().split(/[ ,]+/).sort((x, y) => y.length - x.length).map(w => w.match(regex1).join(''));
  const maxWord = ar.filter(w => w.length === ar[0].length);

  const regex2 = /[aiueo]/g;
  return maxWord.sort((x, y) => y.match(regex2).length - x.match(regex2).length)[0];
}

const sentence = "'Smart people learn from everything and everyone, average people, from their experience, ahsadeoifwafsgergh stupid people already, have all the answers' (Socrates)";

const result = findLongestWord(sentence)

console.log(result);
