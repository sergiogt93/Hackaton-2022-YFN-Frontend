import './profile.scss';
import PersonalInformation from '../../components/PersonalInformation';

function Profile(pops) {

    const userData = {
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        city: localStorage.getItem("city"),
        country: localStorage.getItem("country")
    };

    return (
        <main>
            <PersonalInformation name={userData.name}
                email={userData.email}
                city={userData.city}
                country={userData.country} />
        </main>
    );
}

export default Profile;