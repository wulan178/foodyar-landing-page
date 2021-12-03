import React from 'react'

export default function CategoriesLink(
    { active, text, href }
) {
    if (active == true) {
        return (
            <>
                <li>
                    <a  className="menu-item active" href={href}>{text}</a>
                </li>
            </>
        )
    } else {
        return (
            <li>
                <a  className="menu-item" href={href}>{text}</a>
            </li>
        )
    }
}
