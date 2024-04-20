import React, { useState, useEffect } from 'react';
import arrow from './assets/images/icon-arrow.svg';
import DateInput from './DateInput';

const UserInput = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [inputError, setInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });
  const [ageInterval, setAgeInterval] = useState(null);

  const setError = (error, message) => {
    setInputError(error);
    setErrorMessage(message);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputError(false);

    switch (name) {
      case 'day':
        setDay(value);
        break;
      case 'month':
        setMonth(value);
        break;
      case 'year':
        setYear(value);
        break;
      default:
        break;
    }
  };

  const getuserInput = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const userDate = new Date(`${year}-${month}-${day}`);

    if (day === '' || month === '' || year === '') {
      setError(true, 'This Field is Required');
    } else if (day > 31 || day < 1 || month > 12 || month < 1 || year > 9999 || year < 1000) {
      setError(true, 'Enter Valid Input');
    } else if (year < 1900) {
      setError(true, 'Enter year above 1900');
    } else if (userDate > currentDate) {
      setError(true, 'Must be in the Past');
    } else if (!inputError) {
      setError(false, '');
      setAge({ years: '--', months: '--', days: '--' });

      // Clear the previous interval if it exists
      if (ageInterval) {
        clearInterval(ageInterval);
      }
      calculation(currentDate);
    }
  };

  useEffect(() => {
    setAge({ years: '--', months: '--', days: '--' });
   
    return ()=>clearInterval(ageInterval);
     // eslint-disable-next-line
  }, [day,month,year]);

  function calculation(currentDate) {
    let ageYears = currentDate.getFullYear() - year;
    let ageMonths = currentDate.getMonth() - month + 1;
    let ageDays = currentDate.getDate() - day;

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays = currentDate.getDate();
    }

    if (ageMonths < 0) {
      ageMonths += 12;
      ageYears -= 1;
    }

    let daycount = 0;
    let monthcount = 0;
    let yearcount = 0;

    const Age_count = setInterval(() => {
      if (daycount < ageDays) {
        daycount += 1;
      }
      if (monthcount < ageMonths) {
        monthcount += 1;
      }
      if (yearcount < ageYears) {
        yearcount += 1;
      }

      setAge({
        years: yearcount,
        months: monthcount,
        days: daycount,
      });
    }, 30);

    setAgeInterval(Age_count);
  }

  return (
    <main className="container">
      <form>
        <section className='input-container'>
          <DateInput 
            name="day" 
            placeholder="DD"
            onChange={handleInputChange} 
            max={31} 
            min={1} 
            error={inputError} 
            errorMessage={errorMessage} />
          <DateInput 
            name="month" 
            placeholder='MM'
            onChange={handleInputChange} 
            max={12} 
            min={1} 
            error={inputError} 
            errorMessage={errorMessage} />
          <DateInput 
            name="year" 
            placeholder='YYYY'
            onChange={handleInputChange} 
            max={9999} 
            min={1000} 
            error={inputError} 
            errorMessage={errorMessage} />
        </section>
        <section className="button-container">
          <hr />
          <button type='submit' onClick={getuserInput}>
            <img src={arrow} alt='Click' className="js-btn" />
          </button>
        </section>
      </form>
      <section>
        {Object.entries(age).map(([unit, value]) => (
          <p key={unit} className='result-container'>
            <span className={`age-${unit}`}>{value}</span>
            <span className='result-age'>{unit}</span>
          </p>
        ))}
      </section>
    </main>
  );
};

export default UserInput;
