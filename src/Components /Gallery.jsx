import React from 'react'
import Item from './Item'
import { postings } from '../postings'
function Gallery () {
    console.log(postings)
    return (
        <div style = {{padding: '50px'}}>
            <div>
                <select>
                    <option value="gallery">Gallery</option>
                </select>
                <div style= {{width: '200px', border: '1px solid grey', height: '30px', borderRadius:'4px'}}>

                </div>
            </div>
            <h1>Gallery</h1>
                <div style={{display:'flex', flexWrap:'wrap'}}>
                    {postings.map((data, i) => <Item data ={data} key={i}/>)}
                    {/* will use this alot to render a list of data */}
                </div>
        </div>
    )
}
export default Gallery 
