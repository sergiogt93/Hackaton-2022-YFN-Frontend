import './personalInformation.scss';

function PersonalInformation({ name = '', email = '', city = '', country = ''}) {
    return (
        <section className='personalInfo'>
            <article>
                <img alt='avatarPerfil'/>
            </article>
            <article>
                <h2>{name !== null && name}</h2>
                <p>{email !== null && email}</p>
                <p>{city !== null && city + ","} {country !== null && country}</p>
            </article>
        </section>
    );
}

export default PersonalInformation;