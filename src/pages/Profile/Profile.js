import './profile.scss';
import PersonalInforUser from '../../components/User/PersonalInforUser';
import WorkInforUser from '../../components/User/WorkInforUser';

function Profile() {

    const userData = JSON.parse(localStorage.getItem("user"));
    const workUserData = JSON.parse(localStorage.getItem("workUserData"));

    return (
        <main>
            <PersonalInforUser
                name={userData.name}
                email={userData.email}
                city={userData.city}
                country={userData.country}
                description={userData.description}
            />
            <WorkInforUser
                experienceYears={workUserData.experienceYears}
                sector={workUserData.sector}
            />
        </main>
    );
}

export default Profile;