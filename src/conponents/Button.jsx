import React from 'react'
const Button = (props) => {
    return (
        <button onClick={props.fn} disabled={props.text.length > 0 ? false : true} className=' mt-1 me-1 btn btn-warning'> {props.name}</button>
    )
}
export default Button
