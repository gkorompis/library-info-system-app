// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
const reverseString = (stringInput)=>{
    const stringLength = stringInput.length;
    const alphabet = stringInput.substr(0,stringLength-1);
    const reversedAlphabet = alphabet.split("").reverse().join().replace(/,/g,"");
    const angka = stringInput.substr(stringLength-1,1);
    const reversedOutput = `${reversedAlphabet}${angka}`;
    return reversedOutput;
};

const result = reverseString("NEGIE1");
console.log(result);