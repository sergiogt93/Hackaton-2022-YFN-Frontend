import Profile from './pages/Profile';
import FormPersonalUser from './components/User/PersonalInforUser';
import '../node_modules/boxicons/css/boxicons.min.css';
import './scss/app.scss';

localStorage.setItem("userData", JSON.stringify({
  name: "nombre",
  email: "correo",
  description: "descripcion",
  city: "ciudad",
  country: "pais",
}))
localStorage.setItem("workUser", JSON.stringify({
  experienceYear: 0,
  sector: "sector",
}))
localStorage.setItem("skillsUser", JSON.stringify([
]))

function App() {
  const session = localStorage.getItem('userData');

  return (
    <div className="App">
      <main>
        { session ? <Profile/> : <FormPersonalUser/> }
      </main>
    </div>
  );
}

export default App;
