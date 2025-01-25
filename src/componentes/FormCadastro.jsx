import Styles from '../Styles/Button.module.css';
import { useState } from 'react';
import Informaçoes from './Informaçoes';

function Button() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');

    const handleInputChange = () => {
        
        const novosDados = {
            email,
            password,
            fullName,
            userName,
        };
        Informaçoes.setDados(novosDados);
    };

    return (
        <>
            <h1>Instagram</h1>
            <button className={Styles.buttonFacebook}>
                <span className="material-icons">facebook</span> Log in with Facebook
            </button>
            <br />
            <p className={Styles.frase}>---------------Or---------------</p>
            <div className={Styles.StilosInput}>
                <label>
                    <input
                        type="email"
                        placeholder="Mobile Number or Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            handleInputChange(); 
                        }}
                    />
                </label>
                <br />
                <label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            handleInputChange();
                        }}
                    />
                </label>
                <br />
                <label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                            handleInputChange();
                        }}
                    />
                </label>
                <br />
                <label>
                    <input
                        type="text"
                        placeholder="UserName"
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                            handleInputChange();
                        }}
                    />
                </label>
            </div>
        </>
    );
}

export default Button;
