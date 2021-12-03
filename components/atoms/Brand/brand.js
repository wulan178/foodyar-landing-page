import Image from 'next/image'
import React from 'react'

export default function Brand(
    { footer }
) {
    if (footer == true) {
        return (
            <div className="col-lg-3 footer-brand">
                <a href="#">
                    <Image className="brand-icon" src="/icons/burger.svg" width={28} height={28} />
                </a>
                <a href="#">
                    <h4 className="brand-text">Foodyar</h4>
                </a>
            </div>
        )
    } else {
        return (
            <>
                <a className="navbar-brand" href="#">
                    <Image className="brand-icon" src="/icons/burger.svg" width={28} height={28} />
                </a>
                <a className="navbar-brand" href="#">
                    <h4 className="brand">Foodyar</h4>
                </a>
            </>
        )
    }
}
