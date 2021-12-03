import React from 'react'

export default function MainButton(
    {text, href, bg}
) {
    return (
        <>
            <a href={href} className={bg}>{text}</a>
        </>
    )
}
