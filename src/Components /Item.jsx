import React from 'react'
function Item (props){
Return(
    <div className="item">
    <h1>{props.data.title}</h1>
    <img src = {props.data.imageURL} alt = {props.data.title}/>
    <div>{props.data.price}</div>
    </div>
)
}

export default Item

