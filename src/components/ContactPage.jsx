import React, { useState } from 'react';
import { Button } from './Button';

export const ContactPage = () => {

        const [nameInput,setNameInput] = useState('');
        const [emailInput,setEmailInput] = useState('');
        const [textarea,setTextarea] = useState('');

        const [nameErrorMessage, setNameErrorMessage] = useState('');
        const [emailErrorMessage, setEmailErrorMessage] = useState('');
        const [textareaErrorMessage, setTextareaErrorMessage] = useState('');
        const [submitmessage,setSubmitMessage] = useState('');


        const nameInputHandler = (e) => {
            setNameInput(e.target.value)
        }

        const eamilInputHandler = (e) => {
            setEmailInput(e.target.value)
        }

        const textareaHandler = (e) => {
            setTextarea(e.target.value)
        }



//validation function for contact's name phone and email 
//console.log(validation('amir','+989128483270','amir@gmail.com'));

function validation(name,textarea,email){

    let namevalid = false; let textareavalid = false ;let emailvalid = false
    const nameFormat = /^[A-Z]+$/i;
    const textareaFormat =  /^[A-Za-z0-9_-]*$/ ;
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(name.length < 15 && name.match(nameFormat)){
        namevalid = true;
        setNameErrorMessage('');
    } else {
        namevalid = false;
        setNameErrorMessage('*name is invalid');
        setSubmitMessage('')
    }
    if(email.match(mailFormat)){
        emailvalid = true 
        setEmailErrorMessage('')
    } else {
        emailvalid = false  
        setEmailErrorMessage('*email is invalid')  
        setSubmitMessage('')
   
    }
    
    if(textarea.length < 200 && textarea.match(textareaFormat) && textarea !== '' ){
        textareavalid = true 
        setTextareaErrorMessage('')
    } else {
        textareavalid = false   
        setTextareaErrorMessage('*message is invalid')
        setSubmitMessage('')

  
    }
  
  
    if(namevalid && textareavalid && emailvalid) {
     return true;
    } else {
    return false;
  }
  }


  const submitFormHandler = (e) => {
      e.preventDefault();
      if(validation(nameInput,textarea,emailInput)){
        
    setSubmitMessage('Message Sent!')    
    setNameInput('');
    setEmailInput('');
    setTextarea('');
    }
}



    return (
        <div className='contactpage__container'>
            <form> 
                <label className='input__label'>Name</label>
                <input value={nameInput} onChange={nameInputHandler} className='input name' placeholder='Enter Your Name' ></input>
                <label className='input__error name'>{nameErrorMessage}</label>

                <label className='input__label email'>Email</label>
                <input value={emailInput} onChange={eamilInputHandler} className='input__ha email' placeholder='Enter Your Email' ></input>
                <label className='input__error email'>{emailErrorMessage}</label>

                <label className='input__label message'>Message</label>
                <textarea value={textarea} onChange={textareaHandler} className='textarea' placeholder='Enter Your message' ></textarea>
                <label className='input__error textarea'>{textareaErrorMessage}</label>
                <div className='container__btn'>
                <Button submitFormHandler={submitFormHandler} value='Submit' cssClass='contact__btn' />
                <label className='input__submit textarea'>{submitmessage}</label>
                </div>
                
                </form>


        </div>
    );
};

