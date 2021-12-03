import Image from 'next/image'
import React from 'react'

export default function CategoriesCard(
    { menu, owner, img }
) {
    return (
        <div className="col-lg-3 text-center">
            <Image className="menu-img" src={img} width={287} height={300} />
            <h5 className="desc-menu">{menu}</h5>
            <h6 className="owner-menu">{owner}</h6>
            <div className="rate-menu">
                <Image className="rate-img" src="/icons/stars.svg" width={126} height={22} />
            </div>
        </div>
    )
}
