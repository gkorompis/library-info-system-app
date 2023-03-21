//Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

const longest = (sentence) =>{
    const wordsArray = sentence.split(" ");
    const length = wordsArray.map(x => +x.length);
    const maxLength = length.sort((a,b)=>{return b-a})[0];
    const longestWord = wordsArray.filter(x => +x.length == +maxLength)[0];
    return longestWord;
};


const sentence = "Saya sangat senang mengerjakan soal algoritma"
const result = longest(sentence);
console.log(result);

