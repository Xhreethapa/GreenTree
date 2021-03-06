import React from 'react'
import {Avatar} from '@material-ui/core';
import './Sidebarrow.css'


function Sidebarrow({src,Icon, title}) {
    return (
        <div className="sidebarrow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <h4>{title}</h4>
            
        </div>
    )
}

export default Sidebarrow
