import React from 'react'

export default function NavLink(
    { active, href, text }
) {
    if (active == true) {
        return (
            <>
                <a className="nav-link active my-auto" aria-current="page" href={href}>{text}</a>
            </>
        )
    } else {
        return (
            <>
                <a className="nav-link my-auto" href={href}>{text}</a>
            </>
        )
    }
}
