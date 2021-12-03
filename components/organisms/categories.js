import React from 'react'
import CategoriesLink from '../atoms/Link/categoriesLink'
import CategoriesCard from '../molecules/Cards/categoriesCard'

export default function Categories() {
    return (
        <div className="container categories">
            <h6 className="watch text-center">Watch Now</h6>
            <h5 className="special text-center">Special to Try</h5>
            <div className="container">
                <div className="menu">
                    <ul>
                        <CategoriesLink active href="" text="Healthy Food" />
                        <CategoriesLink href="" text="Lunch" />
                        <CategoriesLink href="" text="Vege Desert" />
                        <CategoriesLink href="" text="Shake" />
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <CategoriesCard menu="Salad Kiwi Sugga" owner="Amir Samantha" img="/img/avocado.svg" />
                    <CategoriesCard menu="Bayam Red Poppeye" owner="Toekang Sayoer" img="/img/bayam.svg" />
                    <CategoriesCard menu="Avocado Muscle" owner="John Lennonk" img="/img/avocado.svg" />
                    <CategoriesCard menu="Naga Fruity Joss" owner="Imelda Saranghae" img="/img/naga.svg" />
                </div>
            </div>
        </div>
    )
}
