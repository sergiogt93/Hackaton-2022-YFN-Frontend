import { useParams } from "react-router";
import { Formik, Form } from "formik";
import CustomSelect from '../../components/CustomSelect';
import './formWorkUser.scss';

export default function FormWork() {
    const { experienceYear , sector } = useParams();
    console.log(experienceYear, sector);

    const sectors = ["Front", "Backend", "Mobile", "Data"];

    const initialValues = {
        experienceYear: experienceYear,
        sector: sector || sectors,
        selectedValue: sectors.findIndex(item => item === sector) || 0
    };

    return (
        <main>
            <Formik
                initialValues = {initialValues}
                onSubmit={(values) => {
                    // const oldSkillsUser = JSON.parse(localStorage.getItem("skillsUser"));
                    // const newSkill = allSkills.find(skill => skill.name === values.skill);
                    // oldSkillsUser.push(newSkill);
                    // localStorage.setItem("skillsUser", JSON.stringify(oldSkillsUser));
                    // navigate(PROFILE, {replace:true});
                    console.log(values);
                }}
            >
                {({
                    values,
                }) => (
                    <Form className='formSkill container'>
                        <CustomSelect
                            name = "sector"
                            options = {values.sector}
                            selectedValue = {values.selectedValue}
                        ></CustomSelect>
                        <section className='sectionForm'>
                            <button type="submit">
                                Guardar
                            </button>
                        </section>
                    </Form>
                )}
            </Formik>
        </main>
    )
}