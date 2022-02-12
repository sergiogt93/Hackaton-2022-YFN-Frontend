import React from 'react';
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

    return (
        <Formik
            initialValues = {{
                name: _name,
                email: _email,
                description: _description,
                city: _city,
                country: _country
            }}
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
            </Form>
            )}
        </Formik>
    )
}

export default FormPersonalUser;