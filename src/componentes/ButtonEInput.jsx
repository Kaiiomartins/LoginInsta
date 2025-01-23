import Styles from '../Styles/Button.module.css';

function Button() {
    return (
        <>
            <h1>Instagram </h1>

            <button className={Styles.buttonFacebook}>
                <span className="material-icons">facebook</span> Log in with Facebook</button>
            <br></br>
            <p className={Styles.frase}>---------------Or---------------</p>
            <div className={Styles.StilosInput}>
                <label>
                    <input
                        type="email"
                        style={{ color: "#ADD8E6" }}
                        placeholder="Mobile Number or Email"
                    />
                </label>
                <br />
                <label>
                    <input type="password" placeholder="Password" />
                </label>
                <br />
                <label>
                    <input type="text" placeholder="Full Name" />
                </label>
                <br />
                <label>
                    <input type="text" placeholder="UserName" />
                </label>
                <br />
            </div>


        </>
    );
}

export default Button;
