import { useNavigate } from 'react-router-dom';
import { FORM_PERSONAL_USER, PROFILE} from './routes/routes';
import '../node_modules/boxicons/css/boxicons.min.css';
import './scss/app.scss';

function App() {
  const session = localStorage.getItem('userData');
  let navigate = useNavigate();

  return (
    <div className="App">
      <main>
        { console.log(!session)}
        { !session ? navigate(FORM_PERSONAL_USER, {replace: true}) : navigate(PROFILE, {replace: true}) }
      </main>
    </div>
  );
}

export default App;
