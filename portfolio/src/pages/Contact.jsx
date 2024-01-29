import Form from '../components/Form';


// The styling for the contact me page
const styles = {
    contactLink: {
        boxShadow: '3px 3px 15px rgba(0, 0, 0, 0.4)',
        fontSize: '1.1rem',
        fontWeight: '500'
    }
}

function Contact() {
    return <div className="pageBorder container-lg text-center">
        <div className="row mt-3 mb-5">
            <div className="col-lg-6 mb-3">
                <h2 className="underline pb-3 mb-3">Contact Me</h2>
                <Form />
            </div>
            <div className="col-lg-6">
                <h2 className="underline pb-3 mb-3">Places you can find me</h2>
                <div className="row mx-auto justify-content-center">
                    <a href="https://www.linkedin.com/in/matthew-lightfoot-5aba00b8" style={styles.contactLink} className="btn btn-light mt-4 mx-3 col-4 d-flex justify-content-around align-items-center" role="button"><img src="./assets/linkedin.svg" alt="" />LinkedIn</a>
                    <a href="https://github.com/Mtlightfoot" className="btn btn-light mt-4 mx-3 col-4 d-flex justify-content-around align-items-center" style={styles.contactLink} role="button"><img src="./assets/github.svg" alt="" />GitHub</a>
                    <a href="https://docs.google.com/document/d/1VZxcRjzsV2ZTtb0msm2PhW421wem9iupoWJ9Ka_OO4I/edit?usp=sharing" style={styles.contactLink} className="btn btn-light mt-4 mx-3 col-4 d-flex justify-content-around align-items-center" role="button"><img src="./assets/resume.png" alt="" />Resume</a>
                    <a href="mailto: m-lightfoot@hotmail.com" style={styles.contactLink} className="btn btn-light mt-4 mx-3 col-4 d-flex justify-content-around align-items-center" role="button"><img src="./assets/email.png" alt="" />Email</a>
                    <a href="tel:07801963340" style={styles.contactLink} className="btn btn-light mt-4 mx-3 col-4 d-flex justify-content-around align-items-center" role="button"><img src="./assets/phone.svg" alt="" />Phone</a>
                </div>
            </div>

        </div>
    </div>
}

export default Contact;