import React, {Fragment} from 'react';

const WebTable=({data})=>{
    
    const columns_name =["code", "name", "borrowing", "quota"] || Object.keys(data[0]);
    return (
        <Fragment>
            <table>
                <thead>
                    
                    <ChunksColumnsRow columns={columns_name}/>
                </thead>
                <tbody>
                    
                    {!columns_name? <h1>no member yet</h1> : data.map((row,index) => {
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
    // console.log({row});
    const {code, name, borrowing, quota} = row; 
    
    const listBorrowing = borrowing ? borrowing.join().replace(/,/g, ", ") : "new member";
    const countQuota = quota ? quota : "-"
    // console.log(listBorrowing);
    const row_list = {code, name, borrowing: listBorrowing, quota: countQuota};
    const columns_list = ["code", "name", "borrowing", "quota"] || columns;
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