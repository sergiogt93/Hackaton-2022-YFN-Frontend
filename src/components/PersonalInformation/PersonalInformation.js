import './personalInformation.scss';


function PersonalInformation({ name, email, city, country, description}) {
    const avatarPerfil = "https://avatars.dicebear.com/api/micah/" + name + ".svg";

    return (
        <section className='personalInfo'>
            <article>
                <img src={avatarPerfil} alt='avatarPerfil' className='profileAvatar'/>
            </article>
            <article>
                <h2>{name !== null && name}</h2>
                <p>{email !== null && email}</p>
                <p>{city !== null && city + ","} {country !== null && country}</p>
            </article>
            <p>{description !== null && description}</p>
        </section>
    );
}

export default PersonalInformation;