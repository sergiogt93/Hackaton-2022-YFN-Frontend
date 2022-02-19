import { Link } from 'react-router-dom';
import { FORM_PERSONAL_USER } from '../../../routes/routes';
import './personalInforUser.scss';

function PersonalInforUser({ name, email, city, country, description}) {
    const avatarPerfil = "https://avatars.dicebear.com/api/micah/" + name + ".svg";
    localStorage.setItem("avatar", avatarPerfil);

    return (
        <section className='personalInfo container'>
            <Link to={FORM_PERSONAL_USER} className='edit-personal'><i className='bx bxs-edit'></i></Link>
            <article>
                <img src={avatarPerfil} alt='avatarPerfil' className='profileAvatar'/>
            </article>
            <article>
                <h2>{name !== null && name}</h2>
                <p>{email !== null && email}</p>
                <p>{city !== null && city + ","} {country !== null && country}</p>
            </article>
            <article className='description'>
                <h2>Description</h2>
                <p>{description !== null && description}</p>
            </article>
        </section>
    );
}

export default PersonalInforUser;