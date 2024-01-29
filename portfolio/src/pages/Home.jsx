import '../styles/style.css';

// The styling for the homepage of the website
const styles = {
    homeTextBig: {
        fontWeight: '700',
        fontSize: '2.5em',
        color: 'white',
    },
    homeTextMedium: {
        fontWeight: '500',
        fontSize: '1.5em'
    },
    icon: {
        width: '80px',
        paddingLeft: '20px',
        paddingTop: '20px'
    },
    headshot: {
        width: '100%',
        borderRadius: '50px'
    },
    backgroundText: {
        filter: 'drop-shadow(1px 2px 0rem #323232)'
    },
    contactIconsHover: {
    }
}

// This is the function that renders the home page using the header and navbar form header.jsx and also various images from public/assets
function Home() {
    return <div className="pageBorder container-lg">
        <div className="row mx-auto container-lg backgroundImage mt-4" style={{ backgroundImage: "url(./assets/matt-landscape.jpg)" }}>
            <div className="card noBackground noBorder" style={styles.homeTextBig}>
                <div className="card-body col-9 justify-content-center" style={styles.backgroundText}>
                    <h1>Crafting seamless and captivating digital experiences through innovative front-end development</h1>
                </div>
            </div>
        </div>

        <main className="row mx-auto container-lg">
            <div className="col-lg-8 mainCol my-auto">
                <div className="card noBackground underline pb-4" style={styles.homeTextMedium}>
                    <div className="card-body">
                        <h4>Welcome to my Portfolio!
                            <br></br><br></br>
                            A showcase of my journey as an aspiring Front-End Web Developer, featuring a collection of projects of mine that demonstrate my passion for creating interactive and visually appealing websites.</h4>
                    </div>
                </div>
                <div className="row col-6 mx-auto container-lg mt-4">
                    <a href="https://www.linkedin.com/in/matthew-lightfoot-5aba00b8" className="col contactIcons" target="_blank"><img src="./assets/linkedin.svg" alt="An icon of a Linkedin Logo" style={styles.contactIcons} /></a>
                    <a href="https://github.com/Mtlightfoot" className="col contactIcons"><img src="./assets/github.svg" alt="An icon of a Github Logo" style={styles.contactIcons} /></a>
                    <a href="https://docs.google.com/document/d/1VZxcRjzsV2ZTtb0msm2PhW421wem9iupoWJ9Ka_OO4I/edit?usp=sharing" className="col contactIcons"><img src="./assets/resume.png" alt="An icon of a Resume" style={styles.contactIcons} /></a>
                    <a href="mailto: m-lightfoot@hotmail.com" className="col contactIcons"><img src="./assets/email.png" alt="An icon of an email" style={styles.contactIcons} /></a>
                    <a href="tel:07801963340" className="col contactIcons"><img src="./assets/phone.svg" alt="An icon of a phone" style={styles.contactIcons} /></a>
                </div>

            </div>
            <div className="col-lg-4 mainCol my-auto">
                <div className="card noBackground noBorder" style={styles.homeTextBig}>
                    <div className="card-body">
                        <img src="./assets/profile-picture.jpg" alt="A headshot picture of myself" style={styles.headshot} />
                    </div>
                </div></div>
        </main>


    </div>
}

export default Home;