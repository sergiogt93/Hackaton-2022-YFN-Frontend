import { Field } from 'formik';

export default function CustomSelect({ name, options}) {
    // options = options.sort((a,b)=>a > b);
    return (
        <section className='sectionForm'>
            <Field as='select' id={name} className={name}>
                <option value="">
                    Select a {name}
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