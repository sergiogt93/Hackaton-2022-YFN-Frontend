import { Link } from 'react-router-dom';
import { FORM_SKILLS_USER } from "../../routes/routes";
import './skills.scss';

function Skill({isForm = false}) {
    const skillsUser = JSON.parse(localStorage.getItem("skillsUser")) || [];

    return (
        <section className='container box-skills'>
            {isForm && <Link to={FORM_SKILLS_USER} className='edit-skill'><i class='bx bxs-edit'></i></Link>}
            {skillsUser.map((skill) => (
            <figure>
                <img src={"https://cdn.svgporn.com/logos/"+skill.files[0]} alt="skill"/>
                {/* <figcaption><a href={skill.url}>{skill.name} </a></figcaption> */}
            </figure>))}
        </section>
    );
}

export default Skill;