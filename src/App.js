import FormPersonalUser from './views/FormPersonalUser';
import Profile from './views/Profile';
import './App.scss';

function App() {
  const session = localStorage.getItem('userData');

  return (
    <div className="App">
      <main>
        { session ? <Profile/> : <FormPersonalUser/>}
      </main>
    </div>
  );
}

export default App;
