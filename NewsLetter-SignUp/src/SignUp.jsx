import {useState} from 'react';
import './stylesheets/signup.css'

const SignUp = () => {
    const [mail,setMail]=useState('');
    const [error,setError] = useState(false);
    const [popup,setPopup]= useState(false);
  
    const handleChange=(e)=>{
      setError(false)
      const userMail = e.target.value;
      setMail(userMail);
    }
  
    const formSubmit=(e)=>{
      e.preventDefault();
  
      let format =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if(format.test(mail)){
        setError(false)
        setPopup(true)
      }else{
       setError(true)
      } 
    }

    const hidepopup = (e) =>{
      e.preventDefault();
      setPopup(false)
    }
    return (
      <>
        <main>
          <section className="container">
            <form className="signup-form">
            <h1>Stay updated!</h1> 
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>Product discovery and building what matters</li>
              <li> Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
            <div className="input-container">
              <label htmlFor="mail"><p>Email address</p>{error&&<p className="error-text">Valid email required!</p>}</label>
              <input type="mail" className={error?`input-errorstate`:''} placeholder="email@company.com" id="mail" onChange={handleChange} required/>
            </div>
            <input type="submit" onClick={formSubmit} value={'Subscribe to monthly newsletter'}></input>
            </form>
            <aside>
              <figure></figure>
            </aside>
          </section>
        </main>
        <section className={popup?`popup-screen popup-screen-active`:`popup-screen`}>
          <form className="popup-container">
              <figure></figure>
              <h1>Thanks for subscribing!</h1>
              <p> A confirmation email has been sent to <b>{mail?mail:`mail@company.com`}</b>.Please open it and click the button inside to confirm your subscription.</p>
              <input type='submit' onClick={hidepopup} value={`Dismiss message`}/>
          </form>
        </section>
      </>
    )
}

export default SignUp
