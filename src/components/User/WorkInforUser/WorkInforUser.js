import './workInforUser.scss';

function WorkInforUser({ experienceYears, sector }) {
    return (
        <section className='workInfo'>
            <article className='container'>
                <a href='#'><i class='bx bxs-edit'></i></a>
                <h3>Años de experiencia</h3>
                <p className='article_subtitle'>{experienceYears !== null && experienceYears}</p>
            </article>
            <article className='container'>
                <a href='#'><i class='bx bxs-edit'></i></a>
                <h3>Sector Especializado</h3>
                <p className='article_subtitle'>{sector !== null && sector}</p>
            </article>
        </section>
    );
}

export default WorkInforUser;