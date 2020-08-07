import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo() {
    return ReactDom.createPortal(
        <h4>
            <hr/>
            <br/>
            <br/>
            <center>Portal Demo</center>
            <br/>
            <br/>
            <hr/>
        </h4>,
        document.getElementById('portal-demo')
    )
}

export default PortalDemo