import { Field } from 'formik';

export default function CustomSelect({ name, options}) {
    options = options.map(element => element.name).sort((a,b)=>a > b);
    return (
        <section className='sectionForm'>
            <Field as='select' id={name} name={name}>
                <option value="">
                    Select a skill
                </option>
                {
                    options.map(option => {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        )
                    })
                }
            </Field>
        </section>
    );
}