import './profile.scss';
import PersonalInformation from '../../components/PersonalInformation';

function Profile() {

    const userData = {
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        city: localStorage.getItem("city"),
        country: localStorage.getItem("country"),
        description: localStorage.getItem("description")
    };

    return (
        <main>
            <PersonalInformation
                name={userData.name}
                email={userData.email}
                city={userData.city}
                country={userData.country}
                description={userData.description}
            />
        </main>
    );
}

export default Profile;