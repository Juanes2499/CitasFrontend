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
        if (heading === "Temperatura") {
            if (value > 30) {
                clase = "danger-color";
            } else if (value >= 16) {
                clase = "warning-color";
            } else {
                clase = "success-color";
            }
        } else if (heading === "Humedad") {
            if (value < 35) {
                clase = "danger-color";
            } else if (value >= 35 && value <= 70) {
                clase = "warning-color";
            } else {
                clase = "success-color";
            }
} else if (heading === "VelocidadViento") {
            if (value > 28) {
                clase = "danger-color";
            } else if (value >= 20 && value <= 28) {
                clase = "warning-color";
            } else {
                clase = "success-color";
            }
        } else if (heading === "Temperatura Agua") {
            if (value > 30) {
                clase = "danger-color";
            } else if (value >= 16 && value <= 30) {
                clase = "warning-color";
            } else {
                clase = "success-color";
            }
        } else if (heading === "Nivel Agua") {
            if (value > 7) {
                clase = "danger-color";
            } else if (value >= 4 && value <= 7) {
                clase = "warning-color";
            } else {
                clase = "success-color";
            }
        } else if (heading === "Caudal") {
            if (value > 4) {
                clase = "danger-color";
            } else if (value >= 2 && value <= 4){
                clase = "warning-color";
            } else {
                clase = "success-color";
            }
        } else if (heading === "Flujo"){
            if (value > 4) {
                clase = "danger-color";
            } else if (value >= 2 && value <= 4){
                clase = "warning-color";
            } else {
                clase = "success-color";
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