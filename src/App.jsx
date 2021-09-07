import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import NavB from './components/NavB';
import FooterB from './components/FooterB';
import Memes from './pages/Memes';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Perfil from './pages/Perfil';
import { useState } from 'react';
import { leerLocalStorage } from './utils/localStorage';

const memesLocal = leerLocalStorage('memes') || [];

function App() {
    const [seccion, setSeccion] = useState('memes');
    const [memes, setMemes] = useState(memesLocal);

    return (
        <div className="footer-fix">
            <NavB setSeccion={setSeccion} />
            <Container>
                {seccion === 'memes' && <Memes memes={memes} />}
                {seccion === 'login' && <Login />}
                {seccion === 'admin' && (
                    <Admin memes={memes} setMemes={setMemes} />
                )}
                {seccion === 'perfil' && <Perfil />}
            </Container>
            <FooterB />
        </div>
    );
}

export default App;
