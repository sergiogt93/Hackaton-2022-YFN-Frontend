import { Link } from 'react-router-dom';
import { FORM_WORK_USER } from '../../../routes/routes';
import './workInforUser.scss';

function WorkInforUser({ experienceYears, sector }) {

    return (
        <section className='workInfo'>
            <article className='container'>
                <Link to={FORM_WORK_USER}><i className='bx bxs-edit'></i></Link>
                <h3>Años de experiencia</h3>
                <p className='article_subtitle'>{experienceYears && experienceYears}</p>
            </article>
            <article className='container'>
                <Link to={FORM_WORK_USER}><i className='bx bxs-edit'></i></Link>
                <h3>Sector Especializado</h3>
                <p className='article_subtitle'>{sector && sector}</p>
            </article>
        </section>
    );
}

export default WorkInforUser;