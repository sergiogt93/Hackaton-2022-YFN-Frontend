//Import libraries react
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Formik, Form } from "formik";
import { PROFILE } from "../../routes/routes";

//Import other components
import CustomSelect from '../../components/CustomSelect';
import Skills from "../../components/Skills";

//Import data
import allSkills from "../../resources/skills.json";

//Import helpers
import { userSkills, unassignedSkills } from "../../helpers/helpersSkills";

//Import styles of component
import './formSkillUser.scss';

export default function FormSkill() {
    const navigate = useNavigate();
    const nameSkills = unassignedSkills(userSkills()).map(element => element.name);

    return (
        <main className='mainFormSkill'>
            <Formik
                initialValues = {nameSkills}
                onSubmit={(values) => {
                    if(values.skill.length > 0) {
                        const oldSkillsUser = JSON.parse(localStorage.getItem("skillsUser")) || [];
                        const newSkill = allSkills.find(skill => skill.name === values.skill);
                        oldSkillsUser.push(newSkill);
                        localStorage.setItem("skillsUser", JSON.stringify(oldSkillsUser));
                    }
                    navigate(PROFILE, {replace:true});
                }}
            >
                {({
                    values,
                }) => (
                    <Form className='formSkill container'>
                        <CustomSelect
                            name = "skill"
                            options = {values}
                        ></CustomSelect>
                        <section className='sectionForm'>
                            <button type="submit">AÑADIR</button>
                        </section>
                        <section className='sectionForm'>
                        <Link to={PROFILE} className="back-href">VIEW PROFILE</Link>
                        </section>
                    </Form>
                )}
            </Formik>
            <Skills/>
        </main>
    )
}