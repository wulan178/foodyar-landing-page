import React from 'react'
import Brand from '../atoms/Brand/brand'
import FooterLink from '../atoms/Link/footerLink'

export default function Footer() {
    return (
        <div className="container-fluid px-0 footer">
            <div className="container text-center">
                <footer className="row">
                    <Brand footer />
                    <div className="col-lg-3">
                        <h6 className="footer-title text-start">Special Course</h6>
                        <FooterLink href="" text="Wedding Foods" />
                        <FooterLink active href="" text="Healthy and Muscle" />
                        <FooterLink href="" text="Office Food Daily" />
                        <FooterLink href="" text="Happy Kids" />
                    </div>
                    <div className="col-lg-3">
                        <h6 className="footer-title text-start">Company</h6>
                        <FooterLink href="" text="APIs Developer" />
                        <FooterLink href="" text="Career" />
                        <FooterLink href="" text="Terms & Conditions" />
                        <FooterLink href="" text="Privacy Policy" />
                    </div>
                    <div className="col-lg-3">
                        <h6 className="footer-title text-start">Be Our Friend</h6>
                        <FooterLink href="" text="3, Season Park, Jakarta" />
                        <FooterLink href="" text="support@foodyar.co,id" />
                        <FooterLink href="" text="021 - 1111 - 2222" />
                    </div>
                </footer>
            </div>
            <div className="container-fluid text-center footer">
                <p className="copyright">All Rights Reserved Foodyar by Pixel from BuildWith Angga 2020</p>
            </div>
        </div>
    )
}