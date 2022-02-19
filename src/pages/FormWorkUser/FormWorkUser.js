//Import libraries react
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from "formik";

//Import routes
import { PROFILE } from "../../routes/routes";

//Import other components
import CustomSelect from '../../components/CustomSelect';

//Import helpers
import { showVerificationSuccess } from "../../helpers/showVerification";

//Import styles of component
import './formWorkUser.scss';

const valuesDefault = {
    experienceYear: '',
    sector: '',
}

export default function FormWork() {
    let navigate = useNavigate();

    const sectors = ["Front", "Backend", "Mobile", "Data"];

    const workData = JSON.parse(localStorage.getItem("workUser"));

    const initialValues = {
        experienceYear: (workData !== null) ? workData.experienceYear : valuesDefault.experienceYear,
        sector: (workData !== null) ? workData.sector : valuesDefault.sector,
        sectors: sectors
    }

    initialValues.selectedSector = sectors.findIndex(item => item === initialValues.sector) + 1 || 0

    return (
        <main className='mainWorkForm'>
            <Formik
                initialValues = {initialValues}
                onSubmit={(values) => {
                    if(!isNaN(values.experienceYear) && values.sector) {
                        const workUser = {experienceYear: values.experienceYear, sector: values.sector};
                        localStorage.setItem("workUser", JSON.stringify(workUser));
                        showVerificationSuccess(workData);
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
                        <section className='sectionForm sectionExperencieYears'>
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