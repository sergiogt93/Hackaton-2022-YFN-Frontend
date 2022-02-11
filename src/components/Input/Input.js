import './input.scss';

function Profile({
    type = 'text',
    label = '',
    id = '',
    value = '',
    placeholder = '',
    handleChange = () => {},
    handleBlur = () => {},
    hasErrorMessage,errorMessage
}) {

    return (
        <section>
            <label htmlFor={id}> {label} </label>
            <input type={type} id={id} name={id} placeholder={placeholder} onChange={handleChange} onBlur={handleBlur} value={value} />
            {hasErrorMessage && (<p>{errorMessage}</p>) }
        </section>
    );
}

export default Profile;