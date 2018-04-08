import React from 'react'
import Category from './category'

function Categories(props) {
    console.log("wtf")
    return (
        <div>
            {
                props.categories.map((item) => {
                    return   <Category key={ item.id } {...item}/>
                })
            }
        </div>
    )
}

export default Categories