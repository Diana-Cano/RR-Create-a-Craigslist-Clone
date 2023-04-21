import React from 'react'
function Sidebar (){
return (
    <div style={{padding: "0 0 0 20px"}}>
    <h3>furniture</h3>
    <div>
        <span>all</span>
        <span>owner</span>
        <span>dealer</span>
    </div>
    <ul>
        <li>
            <input type="checkbox" />
            <span>search titles only</span>
        </li>
        <li>
            <input type="checkbox" />
            <span>has image</span>
        </li>
        <li>
            <input type="checkbox" />
            <span>posted today</span>
        </li>
        <li>
            <input type="checkbox" />
            <span>bundle duplicates</span>
        </li>
        <li>
            <input type="checkbox" />
            <span>include nearby areas</span>
        </li>
    </ul>
</div>
)
}

export default Sidebar
