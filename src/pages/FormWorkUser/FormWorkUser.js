import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { PROFILE } from "../../routes/routes";
import CustomSelect from '../../components/CustomSelect';
import './formWorkUser.scss';

export default function FormWork() {
    let navigate = useNavigate();

    const sectors = ["Front", "Backend", "Mobile", "Data"];

    const workData = JSON.parse(localStorage.getItem("workUser"));

    const {experienceYear, sector} = workData;

    const initialValues = {
        experienceYear: experienceYear,
        sectors: sectors,
        selectedSector: sectors.findIndex(item => item === sector) + 1 || 0
    };

    return (
        <main>
            <Formik
                initialValues = {initialValues}
                onSubmit={(values) => {
                    if(!isNaN(values.experienceYear) && values.sector) {
                        const workUser = {experienceYear: values.experienceYear, sector: values.sector};
                        localStorage.setItem("workUser", JSON.stringify(workUser));
                    }
                    navigate(PROFILE, {replace:true});
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                }) => (
                    <Form className='formWork container'>
                        <section className='sectionForm'>
                            <label htmlFor="experienceYear">Experencie years: (only numbers)</label>
                            <Field type="number" id="experienceYear" name="experienceYear" placeholder="write your experience"/>
                            {touched.name && errors.name && <p className="error" role="alert">{errors.name}</p>}
                        </section>
                        <CustomSelect
                            name = "sector"
                            options = {values.sectors}
                            selectedIndex = {values.selectedSector}
                        ></CustomSelect>
                        <section className='sectionForm'>
                            <button type="submit">GUARDAR</button>
                        </section>
                        <section className='sectionForm'>
                        <Link to={PROFILE} className="back-href">VIEW PROFILE</Link>
                        </section>
                    </Form>
                )}
            </Formik>
        </main>
    )
}