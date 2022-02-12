import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { PROFILE } from "../../routes/routes";
import PersonalUserSchema from "./personalUserSchema";
import './formPersonalUser.scss';

function FormPersonalUser({
    _name = '',
    _email = '',
    _description = '',
    _city = '',
    _country = ''
}) {

    let navigate = useNavigate();

    const initialValues = {
        name: _name,
        email: _email,
        description: _description,
        city: _city,
        country: _country
    }

    const sectorValues = [
        { value: "Front", label: "Front" },
        { value: "Back", label: "Back" },
        { value: "Mobile", label: "Mobile" },
        { value: "Data", label: "Data" },
    ];

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