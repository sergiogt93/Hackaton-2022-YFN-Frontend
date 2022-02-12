import { useNavigate } from 'react-router-dom';
import { Formik, Form } from "formik";
import { PROFILE } from "../../routes/routes";
import CustomSelect from '../../components/CustomSelect';
import allSkills from "../../resources/skills.json";
import userSkills from "../../utils/useSkillUser";
import Skills from "../../components/Skills";
import './formSkillUser.scss';
import unassignedSkills from '../../utils/useUnassignedSkills';

export default function FormSkill() {
    const navigate = useNavigate();

    return (
        <main>
            <Formik
                initialValues = {unassignedSkills(userSkills())}
                onSubmit={(values) => {
                    const oldSkillsUser = JSON.parse(localStorage.getItem("skillsUser"));
                    const newSkill = allSkills.find(skill => skill.name === values.skill);
                    oldSkillsUser.push(newSkill);
                    localStorage.setItem("skillsUser", JSON.stringify(oldSkillsUser));
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
                            <button type="submit">
                                Añadir
                            </button>
                        </section>
                    </Form>
                )}
            </Formik>
            <Skills/>
        </main>
    )
}