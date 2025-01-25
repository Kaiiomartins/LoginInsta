import Styles from '../Styles/Button.module.css';
import Informaçoes from './Informaçoes.jsx';
import useService from '../Services/userService.ts'




const ButtonSingUp = () => {

    const handleSignUp = async () => {
        const formData = Informaçoes.getDados();

        if (!formData.email || !formData.password || !formData.fullName || !formData.userName) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        console.log('Enviando os dados para a API:');
        useService.Informaçoes(formData)

    };

    return (
        <div>


            <button className={Styles.SingUP} onClick={handleSignUp}>

                Sign Up

            </button>
        </div>
    );
};

export default ButtonSingUp;
