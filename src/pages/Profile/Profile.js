//Import other components
import PersonalInforUser from '../../components/User/PersonalInforUser';
import WorkInforUser from '../../components/User/WorkInforUser';
import Skills from '../../components/Skills/Skills';

//Import styles of component
import './profile.scss';

function Profile() {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    const workUser = JSON.parse(localStorage.getItem("workUser")) || [];

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
                experienceYears={workUser.experienceYear}
                sector={workUser.sector}
            />
            <Skills isForm={true}/>
        </main>
    );
}

export default Profile;