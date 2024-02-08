import React, { useState } from 'react';
import arrow from './assets/images/icon-arrow.svg';

const UserInput = () => {
  // State variables to manage input values, errors, and age
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [inputError, setInputError] = useState(false);
  const [errorMessage,seterrorMessage]=useState('');
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });
  let Age_count;

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputError(false)
    setAge({ years: '--', months: '--', days: '--' });

    // Validation and updating state based on input changes

    switch (name) {
      case 'day':
          setDay(value);
          break
      case 'month':
          setMonth(value); 
          break
      case 'year':
          setYear(value);
          break
      default:
          break
    }
  };

  // Function to calculate and display age
  const getuserInput = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const userDate = new Date(`${year}-${month}-${day}`);
    
    if( day==='' || month === '' || year===''){
      setInputError(true);
      seterrorMessage('This Field is Required')
    }else if( day>31||day<1 || month>12||month<1 || year>9999||year<1000 ){
      setInputError(true)
      seterrorMessage('Enter Valid Input')
    }else if(year<1900){
      setInputError(true)
      seterrorMessage('Enter year above 1800')
    }else if(year>currentDate.getFullYear()|| userDate>currentDate){
      seterrorMessage('Must be in the Past')
      setInputError(true)
    }else if(inputError===false){
      seterrorMessage('')
      setAge({ years: '--', months: '--', days: '--' });
      calculation();
    };


    function calculation(){
      let ageYears =  currentDate.getFullYear() - year;
      let ageMonths = currentDate.getMonth() - month+1;
      let ageDays =currentDate.getDate() - day;

      if(ageDays<0){
        ageMonths-=1;
        ageDays = currentDate.getDate();
      }

      if(ageMonths<0){
        ageMonths+=12;
        ageYears-=1;
      }
      let daycount=0;
      let monthcount=0;
      let yearcount=0;

      Age_count=setInterval(()=>{

        if(daycount<ageDays){
          daycount+=1
        }
        if(monthcount<ageMonths){
          monthcount+=1
        }
        if(yearcount<ageYears){
          yearcount+=1
        }
        
          // Set the calculated age to state
        setAge({
          years: yearcount,
          months: monthcount,
          days: daycount,
        })
      },30);

      setTimeout(()=>{
        clearInterval(Age_count)
      },3500);
      }

  }

  return (
    <div className="container">
      <form>
        <section className='input-container'>
          {/* Input fields for day, month, and year */}
          {['day', 'month', 'year'].map((fieldName) => (
            <div key={fieldName} className={`js-${fieldName} `}>
              <label className={ `fieldlabel ${inputError ? 'errorstate' : ''}`}>{fieldName}</label>
              <input
                type="number"
                className={`input-field ${inputError ? 'input-errstate' : ''}`}
                placeholder={fieldName.toUpperCase()}
                max={fieldName === 'day' ? 31 : 9999}
                min={fieldName === 'day' ? 1 : 1000}
                name={fieldName}
                onChange={handleInputChange}
              />
              <p className={`error-text`}>{errorMessage}</p>
            </div>
          ))}
        </section>
        <div className="button-container">
          <hr></hr>
          {/* Button to calculate age */}
          <button type='submit' onClick={getuserInput}>
            <img src={arrow} alt='Click' className="js-btn"/>
          </button>
        </div>
      </form>

      <section>
        {/* Display calculated age */}
        {Object.entries(age).map(([unit, value]) => (
          <p key={unit} className='result-container'><span className={`age-${unit}`}>{value}</span> <span className='result-age'>{unit}</span></p>
        ))}
      </section>
    </div>
  );
};

export default UserInput;
