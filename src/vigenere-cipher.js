const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  }

  encrypt(text, keyword) {

    if (!text || !keyword) {
      throw new Error('Incorrect arguments!');
    }

    let outputText = '';
    let idx = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if (!/[a-zA-Z]/.test(char)) {
        outputText += char;
        continue;
      }

      const textIndex = this.alphabet.indexOf(char.toLowerCase());
      const keyChar = keyword[idx % keyword.length].toLowerCase();
      const keyIndex = this.alphabet.indexOf(keyChar);

      const mod = (textIndex + keyIndex) % 26;
      const encryptedChar = this.alphabet[mod];

      outputText += encryptedChar.toUpperCase();

      idx++;
    }

    return this.direct ? outputText : outputText.split('').reverse().join('');

  }
  
  decrypt(text, keyword) {

    if (!text || !keyword) {
      throw new Error('Incorrect arguments!');
    }


    let outputText = '';
    let idx = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if (!/[a-zA-Z]/.test(char)) {
        outputText += char;
        continue;
      }

      const textIndex = this.alphabet.indexOf(char.toLowerCase());
      const keyChar = keyword[idx % keyword.length].toLowerCase();
      const keyIndex = this.alphabet.indexOf(keyChar);

      const mod = (textIndex - keyIndex + 26) % 26;
      const encryptedChar = this.alphabet[mod];

      outputText += encryptedChar.toUpperCase();

      idx++;
    }

    return this.direct ? outputText : outputText.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

