import { NavLink } from 'react-router-dom';

// The styling used for the header and navbar on every page of the website
const styles = {
    headerTitle: {
        fontWeight: '700'
    },
    headerLink: {
        fontSize: '1.4rem'
    },
    navBar: {
        borderBottom: '2px solid #AD974F'
    }
}

// The header and navbar code, the code also includes a hamburger icon for when the screen goes below a large screen
function Header() {
    return (
        <header className="row mx-auto justify-content-center container-lg">

            <nav className="mt-3 navbar navbar-expand-lg navbar-light" style={styles.navBar}>
                <div className="container-fluid px-4">
                    <h2 style={styles.headerTitle}>Matthew Lightfoot. <span><h5>Front-End Web Developer</h5></span></h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" style={styles.headerLink}>
                                <NavLink className="nav-link" to="/" end>Home</NavLink>
                            </li>
                            <li className="nav-item" style={styles.headerLink}>
                                <NavLink className="nav-link" to="/projects-gallery" end>Projects Gallery</NavLink>
                            </li>
                            <li className="nav-item" style={styles.headerLink}>
                                <NavLink className="nav-link" to="/contact" end>Contact Me</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;