import './workInforUser.scss';

function WorkInforUser({ experienceYears, sector }) {
    return (
        <section className='workInfo'>
            <article>
                <h2>Años de experiencia</h2>
                <p>{experienceYears !== null && experienceYears}</p>
                <h2>Sector Especializado</h2>
                <p>{sector !== null && sector}</p>
            </article>
        </section>
    );
}

export default WorkInforUser;