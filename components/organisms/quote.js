import Image from 'next/image'
import React from 'react'

export default function Quote() {
    return (   
        <div className="container text-center quote">
            <div className="quotes">“</div>
            <div className="quote-text mx-auto text-center">Awalnya saya malu dengan mertua karena tidak bisa memasak, kini mereka lebih suka makan malam di rumah demi menyantap masakan yang saya buat sendiri</div>
            <div className="quote-user mx-auto">
                <Image className="camella" src="/icons/camella.svg" width={99} height={99} />
                <div className="user-info">
                    <p className="info-name text-start">Camella Sarrah</p>
                    <p className="info-title text-start">Vege Master</p>
                </div>
            </div>
        </div>
    )
}