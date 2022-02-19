//Import libraries react
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from "formik";

//Import routes
import { PROFILE } from "../../routes/routes";

//Import helpers
import { showVerificationSuccess } from "../../helpers/showVerification";

//Import schema verification form
import PersonalUserSchema from "./personalUserSchema";

//Import styles of component
import './formPersonalUser.scss';

//initial values that the form will have by default
const valuesDefault = {
    name: '',
    email: '',
    description: '',
    city: '',
    country: ''
}

function FormPersonalUser() {

    let navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem("userData"));

    const initialValues = {
        name: (userData !== null) ? userData.name : valuesDefault.name,
        email: (userData !== null) ? userData.email : valuesDefault.email,
        description: (userData !== null) ? userData.description : valuesDefault.description,
        city: (userData !== null) ? userData.city : valuesDefault.city,
        country: (userData !== null) ? userData.country : valuesDefault.country
    }



    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {PersonalUserSchema}
            onSubmit={(values, {resetForm}) => {
                localStorage.setItem("userData", JSON.stringify(values));
                resetForm();
                showVerificationSuccess(userData);
                navigate(PROFILE, {replace:true});
            }}
        >
            {({
                touched,
                errors,
            }) => (
            <Form className='formPersonal container'>
                <section className='sectionForm'>
                    <label htmlFor="name">Name</label>
                    <Field id="name" name="name" placeholder="write your name"/>
                    {touched.name && errors.name && <p className="error" role="alert">{errors.name}</p>}
                </section>
                <section className='sectionForm'>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" placeholder="write your email"/>
                    {touched.email &&  errors.email && <p className=" error" role="alert">{errors.name}</p>}
                </section>
                <section className='sectionForm'>
                    <label htmlFor="description">Description</label>
                    <Field as="textarea" id="description" name="description" placeholder="write your description"/>
                    {touched.description &&  errors.description && <p>{errors.description}</p>}
                </section>
                <section className='sectionForm'>
                    <label htmlFor="city">City</label>
                    <Field id="city" name="city" placeholder="write your city"/>
                    {touched.city &&  errors.city && <p>{errors.city}</p>}
                </section>
                <section className='sectionForm'>
                    <label htmlFor="country">Country</label>
                    <Field id="country" name="country" placeholder="write your country"/>
                    {touched.country &&  errors.country && <p>{errors.country}</p>}
                </section>
                <section className='sectionForm'>
                    <button type="submit">
                        Enviar
                    </button>
                </section>
                <section className='sectionForm'>
                    {userData !== null && (<Link to={PROFILE} className="back-href">VIEW PROFILE</Link>)}
                </section>
            </Form>
            )}
        </Formik>
    )
}

export default FormPersonalUser;