import Brand from '../atoms/Brand/brand'
import MainButton from '../atoms/Button/mainButton'
import NavLink from '../atoms/Link/navLink'

export default function Navbar() {
    return (
        <div className="container container-navbar">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Brand />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink active href="" text="Home" />
                            <NavLink href="" text="Beverages" />
                            <NavLink href="" text="Chef" />
                            <NavLink href="" text="Ingredient" />
                            <NavLink href="" text="Stories" />
                            <MainButton href="" bg="mykitchen" text="My Kitchen" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
