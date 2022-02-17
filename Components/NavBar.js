import React from 'react'
import Link from 'next/link'
const NavBar = () => {
    return ( < nav class = "navbar navbar-light bg-light" >
        <
        div class = "container-fluid" > <
        a class = "navbar-brand"
        onClick = { clickHandle } >
        أمن < /a>

        <
        /div > </nav >
    )
}
const clickHandle = () => {
    document.location.href = '/';
}

export default NavBar