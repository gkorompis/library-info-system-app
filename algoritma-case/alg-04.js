//Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
MatrixRowDoesNotSatisfy = [[1, 2, 0, 5], [4, 5, 6], [7, 8, 9]];
MatrixColumnDoesNotSatisfy =[[1, 2, 0, 5], [4, 5, 6], [7, 8, 9], [7, 8, 9]];
Matrix4n4 = [[1, 2, 0, 5], [4, 5, 6, 7], [7, 8, 9, 10], [11, 12, 13, 14]];

//d1 = 1 + 5 + 9 = 15 
//d2= 0 + 5 + 7 = 12 
// diagonal count 15 - 12 = 3

const differenceDiagonalSum = (matrix) =>{
    const n = matrix[0].length;

    const condition1 = matrix.filter(x => +x.length != +n); // row length satisfy n x n
    const condition2 = +matrix.length == +n; // column length satisfy n x n

    if(!condition1.length){
        if(condition2){
            const d1 = [];
            const d2 = [];
            //iterate per matrix array
            for (let i in matrix){
                let row = matrix[i];
                //assuming nth diagonal == i, get nth diagonal, then push to each array;
                d1.push(row[i]);
                d2.push(row.reverse()[i]);
            }
            const sumD1 = +d1.reduce((a,b)=>a+b,0);
            const sumD2 = +d2.reduce((a,b)=>a+b,0);
            const difference = sumD1 - sumD2;
            return difference;
        } else {
            return "column length does not satisfy n x n"
        }
    } else {
        return "row length does not satisfy n x n"
    }
};

const result = {
    Matrix: differenceDiagonalSum(Matrix),
    MatrixRowDoesNotSatisfy: differenceDiagonalSum(MatrixRowDoesNotSatisfy),
    MatrixColumnDoesNotSatisfy: differenceDiagonalSum(MatrixColumnDoesNotSatisfy),
    Matrix4n4: differenceDiagonalSum(Matrix4n4)

}
console.log(result);