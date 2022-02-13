import Profile from './pages/Profile';
import FormPersonalUser from './components/User/PersonalInforUser';
import '../node_modules/boxicons/css/boxicons.min.css';
import './scss/app.scss';

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
