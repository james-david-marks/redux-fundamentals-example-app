import React from 'react'
import { availableColors } from '../filters/filtersSlice'

function ColorDropdown({color, onChange}){

    const colorDropdownEntries = ['', ...availableColors]
    const colorOptions =
    colorDropdownEntries.map((color, index) => (
        <option className={"option " + color} value={color} key={index} >{color}</option>
    ))
    const handleSelectChange = (event) => {
        console.log(event.target)
        onChange(event.target.value)
    };


    return (
        <div>
        <select className="select" value={color} name="colors" onChange={handleSelectChange} id="colors">
            {colorOptions}
        </select>
        </div>
    )
}

export default ColorDropdown