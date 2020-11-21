import React from 'react';

const DataTable = ({ tableData, headingColumns }) => {

    const clases = (heading, value) => {
        var clase = "";
        if (heading === "Team") {
            if (value === "Mercedes") {
                clase = "success-color";
            } else if (value === "Haas") {
                clase = "warning-color";
            } else {
                clase = "danger-color";
            }
        }
        return clase;
    }
    const data = tableData.map((row, index) => {
        let rowData = [];
        let i = 0;
        for (const key in row) {
            rowData.push({
                key: headingColumns[i],
                val: row[key]
            });
            i++;
        }
        console.log(rowData);
        return <tr key={index}>
            {rowData.map((data, index) => <td key={index} className={clases(data.key,data.val)} data-heading={data.key}>{data.val}</td>)}
        </tr>;
    });

    return (
        
        <table className="table table-sm">
                <thead>
                <tr className="text-light font-weight-bold elegant-color-dark">
                        {headingColumns.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
      
    );
}


export default DataTable;