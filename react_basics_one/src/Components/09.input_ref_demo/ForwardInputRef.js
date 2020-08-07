import React from 'react'

const ForwardInputRef = React.forwardRef((props, ref) =>
    <div>
        <input placeholder="ForwardRef Demo" type="text" className="form-control" ref={ref}/>
    </div>
)
export default ForwardInputRef