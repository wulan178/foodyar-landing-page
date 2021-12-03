import React from 'react'
import Image from 'next/image'

export default function AppButton(
    { className, src, href }
) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 py-0 px-0 text-center">
            <div className={className}>
                <a href={href}><Image src={src} width={200} height={50} /></a>
            </div>
        </div>
    )
}
