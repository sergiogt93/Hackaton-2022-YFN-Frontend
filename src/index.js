import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import './scss/app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FORM_PERSONAL_USER, FORM_SKILLS_USER, PROFILE, FORM_WORK_USER} from './routes/routes';
import FormPersonalUser from './pages/FormPersonalUser';
import Profile from './pages/Profile';
import FormSkillUser from './pages/FormSkillUser';
import FormWorkUser from './pages/FormWorkUser';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path={PROFILE} element={<Profile/>}/>
        <Route path={FORM_PERSONAL_USER} element={<FormPersonalUser/>}/>
        <Route path={FORM_SKILLS_USER} element={<FormSkillUser/>}/>
        <Route path={FORM_WORK_USER} element={<FormWorkUser/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
