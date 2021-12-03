import Image from 'next/image'
import React from 'react'
import AppButton from '../atoms/Button/appButton'
import MainButton from '../atoms/Button/mainButton'

export default function Hero(
    { imgRight, title, desc, img }
) {
    if (imgRight == true) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="heading">{title}</h1>
                        <p className="desc">{desc}</p>
                        <MainButton href="" bg="decide" text="Decide a menu" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Image className="hero-img" src={img} width={619} height={413} />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container text-center app">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Image className="hero-img" src={img} width={428} height={538} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-start my-auto app-content">
                        <h1 className="heading">{title}</h1>
                        <p className="desc desc-app">{desc}</p>
                        <div className="row mx-0">
                            <AppButton className="appstore" href="" src="/img/appstore.svg" />
                            <AppButton className="gplay" href="" src="/img/gplay.svg" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
