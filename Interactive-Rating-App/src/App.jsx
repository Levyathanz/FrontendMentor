import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet/App.css'
import star from './assets/icon-star.svg'
import illustration from './assets/illustration-thank-you.svg'

function App() {
  const [rating,setRating] = useState(0);
  const [submit,setSubmit] = useState(false);

  const handleInput=(e)=>{
    const rating = e.target.innerText;
    setRating(rating);
  }
  

  return (
      <main className='d-flex align-items-center justify-content-center' style={{"height":"100vh","backgroundColor":"hsl(216, 12%,8%)"}}>
        <section className='p-4 rounded-5' style={{"width":"22rem","backgroundColor":"hsl(213, 19%, 18%)"}}>
        <img src={star} alt='star' className='p-2 rounded-circle mt-2' style={{"width":"2rem","backgroundColor":"hsl(215, 13%, 30%)"}}/>
        <h1 className='fs-2 fw-bold mt-4'>How did we do?</h1>
        <p className='mt-3' style={{"color":"hsl(217, 12%, 63%)","fontSize":"14px"}}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <section className='d-flex align-items-center justify-content-between'>
          {[1,2,3,4,5].map((value,i)=>{
            return <button className='rating border-0 p-2 rounded-5 mt-3' key={i} onClick={handleInput}>{value}</button>
          })}
        </section>
        <button className='submit mt-4 p-2 fw-bold border-0 text-uppercase rounded-5' onClick={()=>setSubmit(true)}>Submit</button>
        </section>
        <section className={submit?'thanks-card active':'thanks-card'} style={{"width":"22rem","backgroundColor":"hsl(213, 19%, 18%)"}}>
          <img src={illustration} alt='illustration' className="mt-3" style={{"width":"7rem"}}/>
          <p className='mt-4 p-1 px-4 border-0 rounded-4' style={{"fontSize":".8rem","backgroundColor":"hsl(215, 13%, 30%)","color":"hsl(25, 97%, 53%)"}}>You selected {rating} out of 5</p>
          <h2 className='mt-3 fs-3 fw-bold '>Thank you!</h2>
          <p className='mt-2 text-center' style={{"color":"hsl(217, 12%, 63%)","fontSize":"14px"}}>We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!</p>
        </section>
      </main>
  )
}

export default App
