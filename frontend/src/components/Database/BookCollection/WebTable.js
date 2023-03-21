import React, {Fragment} from 'react';

const WebTable=({data})=>{
    
    const columns_name = ["code", "stock", "available","title", "author", "borrower"] || Object.keys(data[0]);
    return (
        <Fragment>
            <table>
                <thead>
                    <ChunksColumnsRow columns={columns_name}/>
                </thead>
                <tbody>
                    {data.map((row,index) => {
                        return (
                            <ChunksRow key={index} row={row} columns={columns_name}/>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
};

const ChunksColumnsRow=({columns})=>{
    return (
        <Fragment>
            <tr style={{color: '#332D2D'}} >
                {columns.map((column_name, index)=>{
                    return <th key={index} className='chunks-row chunks-row-head'>{column_name}</th>
                })}
            </tr>
        </Fragment>
    )
}

const ChunksRow=({row, columns})=>{
    const {code, stock, title, author, borrower, available} = row;
    const listBorrower = borrower ? borrower.join().replace(/,/g, ", ") : "new comer";
    // console.log({listBorrower}, "here");
    const bookAvailable = available ? available : available == 0 ? available : stock;
    // console.log(listBorrower);
    const row_list = {code, stock,available: bookAvailable, title, author, borrower: listBorrower};
    const columns_list = ["code", "stock","available", "title", "author", "borrower"] || columns;
    return (
        <Fragment>
            <tr className='chunks-row'>
                {Object.keys(row_list).map( (name, index) => {
                    return <td key={index} className='chunks-row chunks-row-body'>{row_list[columns_list[index]]}</td>
                } )}
            </tr>
        </Fragment>
    )
}

export default WebTable;