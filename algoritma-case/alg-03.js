//Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

// OUTPUT = [1, 0, 2]

const countOccurence = (inputArray, queryArray) =>{
    // itirate per query, filter input array == query, and then count length filtered array
    const output = queryArray.map(x => inputArray.filter(y => y == x).length);
    return output;
};

const result = countOccurence(INPUT, QUERY);
console.log(result)