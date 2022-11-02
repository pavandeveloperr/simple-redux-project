import React from "react";
import "./App.css"

const Employee = () => {
    return (
        <div className="employeeStyle">
            <div><label>Employee Name : </label><input type="text" value="ABC"></input></div>
            <div><label>DOB : </label><input type="text" value="10/10/2010"></input></div>
            <div><label>Position Held : </label><input type="text" value="Manager"></input></div>
        </div>
    )
}

export default Employee;