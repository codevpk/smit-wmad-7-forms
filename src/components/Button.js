import React from 'react'

export default function Button(props) {
    console.log("props", props)
    const { type, size, text, style } = props

    // let x = 5
    // if (x > 5) {
    //     alert(x)
    // } else {
    //     console.log(x)
    // }

    // x > 5 ? alert(x) : console.log(x)
    // x > 5 && alert(x)

    return (
        // <button className={`btn btn-${type || "primary"} ${size && "btn-" + size}`}>This is a button</button>
        <button style={style} className={`btn btn-${type || "primary"} ${size && `btn-${size}`}`}>{text || "This is a button"}</button>
    )
}
