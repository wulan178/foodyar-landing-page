import React from 'react'

export default function FooterLink(
    { href, text, active }
) {
    if (active == true) {
        return (
            <>
            <p className="footer-content active text-start">
                <a href="">{text}</a>
            </p>
            </>
        )
    } else {
        return (
            <>
            <p className="footer-content text-start">
                <a href={href}>{text}</a>
            </p>
            </>
        )
    }
}
