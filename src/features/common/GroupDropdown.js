import React from 'react'
import { availableGroups } from '../filters/filtersSlice'

function GroupDropdown({group, onChange}){

    const groupDropdownEntries = ['', ...availableGroups]
    const groupOptions =
    groupDropdownEntries.map((group, index) => (
        <option className={"option " + group} value={group} key={index} >{group}</option>
    ))
    const handleSelectChange = (event) => {
        console.log(event.target.value)
        group = event.target.value
        onChange(event.target.value)
    };


    return (
        <div>
        <select className="select" value={group} name="group" onChange={handleSelectChange} id="colgroupors">
            {groupOptions}
        </select>
        </div>
    )
}

export default GroupDropdown