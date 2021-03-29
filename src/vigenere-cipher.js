const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type;
  }

  encrypt (messege, key) {
    if (!messege || !key) throw new Error('Error')

    const arrAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const arrMessege = messege.toUpperCase().split('');
    const arrKey = key.toUpperCase().split('');
    let arrResult = [];
    let count = 0;
    
    arrMessege.forEach(elem => {
      if (arrAlphabet.indexOf(elem) !== -1) {
        let indexKey = arrKey[count % arrKey.length];
        arrResult.push(arrAlphabet[((arrAlphabet.indexOf(elem) + arrAlphabet.indexOf(indexKey)) % 26)]);
        count++;
      } else {
        arrResult.push(elem);
      }
    })
    return (this.type === true) ? arrResult.join('') : arrResult.reverse().join('');
  }

  decrypt (messege, key) {
    if (!messege || !key) throw new Error('Error')

    const arrAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const arrMessege = messege.toUpperCase().split('');
    const arrKey = key.toUpperCase().split('');
    let arrResult =[];
    let count = 0;

    arrMessege.forEach(elem => {
      if (arrAlphabet.indexOf(elem) !== -1) {
        let indexKey = arrKey[count % arrKey.length];
        arrResult.push(arrAlphabet[((arrAlphabet.indexOf(elem) - arrAlphabet.indexOf(indexKey) + 26) % 26)]);
        count++;
      } else {
        arrResult.push(elem);
      }
    })
    return (this.type === true) ? arrResult.join('') : arrResult.reverse().join('');
  }
}
module.exports = VigenereCipheringMachine;