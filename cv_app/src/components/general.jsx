import { useState } from "react";

function General({setPageContent, setInputShow, inputShow}) {

    const [generalFormData, setGeneralFormData] = useState({
        name: 'Andy Chung',
        email: 'andychc731@gmail.com',
        phone: '555-555-5555',
      });

    const inputHandler = (event) => {
        const {name, value} = event.target;

        
        setGeneralFormData((prevForm) => ({
            ...prevForm,
            [name]: value,
        }))
    }
    
    const submitHandler = (event) => {
        
        event.preventDefault();

        setInputShow(prevShow => ({
            ...prevShow,
            general: false
        }))

        setPageContent((prevPage) => ({
            ...prevPage,
            name: generalFormData.name,
            email: generalFormData.email,
            phone: generalFormData.phone
        }));
    }

    const buttonHandler = () => {
        setInputShow(prevShow => ({
            ...prevShow,
            general: true
        }))
    }

    return (
    <form action="" onSubmit={submitHandler}>
        <h2>General</h2>
        {inputShow.general && (
        <div className="input-container general">
            <input 
            type="text"
            name='name'
            value={generalFormData.name}
            onChange={inputHandler}
            placeholder='Name'
            />
            <input 
            type="email"
            name='email'
            value={generalFormData.email}
            onChange={inputHandler}
            placeholder='Email'
            />
            <input 
            type="tel"
            name='phone'
            value={generalFormData.phone}
            onChange={inputHandler}
            placeholder='Phone'
            />
        </div>
        )}
        <button type='button' name='general' onClick={buttonHandler}>Edit</button>
        {inputShow.general && (
            <button type='submit' name='general'>Submit</button>
        )}
    </form>
    )
}

export default General;