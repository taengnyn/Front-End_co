function groupAnagrams(words) {
    let listLet;
    let groups = {};
    for (let word of words) {
      listLett = word.split("").sort().join("");
      if (key in groups) {
        groups[listLet].push(word);
      } 
      else {
        groups[listLet] = [word];
      }
    }
    return Object.values(groups);
}
  
let words = ["tsar", "rat", "tar", "star", "tars", "cheese"];
console.log(groupAnagrams(words));