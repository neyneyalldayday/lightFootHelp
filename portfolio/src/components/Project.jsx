
import projects from "../data/projects.json";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"

// The styling for the individual project cards
const styles = {
    projectCard: {
        minHeight: '300px',
        boxShadow: '3px 3px 15px rgba(0, 0, 0, 0.4)'
    },
    cardBtn: {
        margin: '5px',
        padding: '12px',
        backgroundColor: '#AD974F'
    }
}

// The code for the individual project cards, props grabs the information for the project cards from the array of objects in data/projects.json
function Project({ id, title, description, skills, image, site, repo }) {

    
    return <div className="col-lg-4 mb-3">
        <div className="card" style={styles.projectCard}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body mx-auto">
                <h5 className="card-title">{title}</h5>
                <div className="card-subtitle mb-2 text-body-secondary">{skills}</div>

                <p className="card-text">{description}</p>
                <a href={site} className="btn btn-primary col-5" style={styles.cardBtn}>Go to Project</a>

                <a href={repo} className="btn btn-primary col-5" style={styles.cardBtn}>View Repo</a>

                <Link className="nav-link" style={styles.cardBtn} to={`/project-details/${id}`}>More Details</Link>
            </div>
        </div>
    </div>
}


Project.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
};

export default Project;