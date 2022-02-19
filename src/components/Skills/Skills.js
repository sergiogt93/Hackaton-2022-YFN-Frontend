import { Link } from 'react-router-dom';
import { FORM_SKILLS_USER } from "../../routes/routes";
import './skills.scss';

function Skill({isForm = false}) {
    const skillsUser = JSON.parse(localStorage.getItem("skillsUser")) || [];

    return (
        <section className='container box-skills'>
            <h2>Skills</h2>
            {isForm && <Link to={FORM_SKILLS_USER} className='edit-skill'><i className='bx bxs-edit'></i></Link>}
            <div className='skills'>
                {skillsUser.map((skill) => (
                <figure key={skill.name}>
                    <img src={"https://cdn.svgporn.com/logos/"+skill.files[0]} alt="skill"/>
                    <figcaption><a href={skill.url}>{skill.name} </a></figcaption>
                </figure>))}
            </div>
        </section>
    );
}

export default Skill;