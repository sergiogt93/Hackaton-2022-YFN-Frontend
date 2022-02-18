import { Field } from 'formik';

export default function CustomSelect({ name, options}) {
    // options = options.sort((a,b)=>a > b);
    return (
        <section className='sectionForm'>
            <Field as='select' id={name} name={name} className="selectSkills">
                <option value="">
                    Select a {name}
                </option>
                {
                    options.length > 0 && options.map(option => {
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