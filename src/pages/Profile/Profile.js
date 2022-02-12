import PersonalInforUser from '../../components/User/PersonalInforUser';
import WorkInforUser from '../../components/User/WorkInforUser';
import Skills from '../../components/Skills/Skills';
import './profile.scss';

function Profile() {

    const userData = {
        "name": "sergio",
        "email": "sergio.ber0556@gmail.com",
        "city": "Rubi",
        "country": "España",
        "description": "DGNBA",
        "experienceYears": "2 años",
        "sector": "Backend",
        "skills": ["HTML5", "CSS3", "JS"]
    };

    return (
        <main className="profile">
            <PersonalInforUser
                name={userData.name}
                email={userData.email}
                city={userData.city}
                country={userData.country}
                description={userData.description}
            />
            <WorkInforUser
                experienceYears={userData.experienceYears}
                sector={userData.sector}
            />
            <Skills isForm={true}/>
        </main>
    );
}

export default Profile;