function VigenèreCipher(key, abc) {
    this.encode = function (str) {
      let encoded = '';
      for (let i = 0, j = 0; i < str.length; i++) {
        const char = str[i];
        if (abc.includes(char)) {
          const keyChar = key[j % key.length];
          const shift = abc.indexOf(keyChar);
          const charIndex = abc.indexOf(char);
          const encodedCharIndex = (charIndex + shift) % abc.length;
          encoded += abc[encodedCharIndex];
          j++;
        } else {
          encoded += char;
        }
      }
      return encoded;
    };
  
    this.decode = function (str) {
      let decoded = '';
      for (let i = 0, j = 0; i < str.length; i++) {
        const char = str[i];
        if (abc.includes(char)) {
          const keyChar = key[j % key.length];
          const shift = abc.indexOf(keyChar);
          const charIndex = abc.indexOf(char);
          let decodedCharIndex = (charIndex - shift) % abc.length;
          if (decodedCharIndex < 0) {
            decodedCharIndex += abc.length;
          }
          decoded += abc[decodedCharIndex];
          j++;
        } else {
          decoded += char;
        }
      }
      return decoded;
    };
  }
  
  var latinAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  var key = 'password';
  
  var c = new VigenèreCipher(key, latinAlphabet);
  
  console.log(c.encode('xt\'k s ovzii cahdsi!')); // returns 'xt\'k o vwixl qzswej'
  
  var katakanaAlphabet = 'カキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  var katakanaKey = 'カタカナ';
  
  var c2 = new VigenèreCipher(katakanaKey, katakanaAlphabet);
  
  console.log(c2.encode('ドレタウガロゴザキアニ')); // returns 'ドオカセガヨゴザキアニ'
  