import ButtonSingUp from './componentes/ButtonSingUp';
import Button from './componentes/ButtonEInput';
import './App.css';
;



function App() {


  return (
    <div>
      <div>
        <div className="filterConteudo">

          <div className='filterConteudo6'>
            <div className='filtroConteudo8'>
              <p>Sign up to see photos and videos from your friends</p>
            </div>
          </div>

          <Button></Button>

          <div className='filterConteudo10'>
            <p style={{ textAlign: 'center' }}>
              People who use our service may have uploaded<br />
              your contact information to Instagram <br />
              <a href="https://www.instagram.com">Learn More</a>
            </p>

          </div>

          <div className='filterConteudo11'>
            <p style={{ textAlign: 'center' }}>
              By signing up, you agree to you agree to our <strong> Terms, Privacy<br />
                <a href="https://www.seusite.com/privacy-policy"> Policy</a></strong> and <strong><a href="https://www.termsfeed.com/blog/cookie-policy/"> Cookies Policy</a></strong></p>
          </div>

          <ButtonSingUp ></ButtonSingUp>
        </div>


        <div className="filterConteudo2">
          <h2>
            Have an account? <strong style={{ color: "#ADD8E6" }}>Log in</strong>
          </h2>
        </div>

      </div>
      <h3>Get the app</h3>
      <div className='filterConteudo5'>

        <div className='filterConteudo5'>
          <div className='filterConteudo3'>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                style={{ width: "92px", height: "auto" }}
              />
            </a>

          </div>
          <div className='filterConteudo4'>
            <a href="https://apps.microsoft.com/store/apps" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png"
                alt="Get it from Microsoft"
                style={{ width: "74px", height: "auto" }}
              />
            </a>

          </div>


        </div>
      </div>


    </div>

  )
}

export default App
