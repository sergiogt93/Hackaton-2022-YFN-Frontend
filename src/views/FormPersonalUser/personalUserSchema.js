import * as Yup from "yup";

const personslUserSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, "The field fullName is empty")
        .max(255, "The field fullName is too long!")
        .required("The field fullName is required"),

    email: Yup.string()
        .email('Invalid email')
        .required('Required'),

    description: Yup.string()
        .max(255, "The field description is too long!"),

    city: Yup.string()
        .min(2, "The field city is empty")
        .max(50, "The field city is too long!")
        .required("The field city is required"),

    country: Yup.string()
        .min(2, "The field country is empty")
        .max(50, "The field country is too long!")
        .required("The field country is required"),
});

export default personslUserSchema;