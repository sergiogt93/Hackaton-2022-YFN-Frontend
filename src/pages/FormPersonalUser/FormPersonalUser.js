import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { PROFILE } from "../../routes/routes";
import PersonalUserSchema from "./personalUserSchema";
import './formPersonalUser.scss';

function FormPersonalUser() {

    let navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem("userData"));

    const {name, email, description, city, country} = userData;

    const initialValues = {
        name: name,
        email: email,
        description: description,
        city: city,
        country: country
    }

    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {PersonalUserSchema}
            onSubmit={(values, {resetForm}) => {
                localStorage.setItem("userData", JSON.stringify(values));
                resetForm();
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
                    <button type="submit">
                        Enviar
                    </button>
                </section>
            </Form>
            )}
        </Formik>
    )
}

export default FormPersonalUser;