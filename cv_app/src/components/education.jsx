import { useState } from "react";

function Education({setPageContent, setInputShow, inputShow}) {

    const [educationFormData, setEducationFormData] = useState([{
        institution: 'University of Blah',
        degree: 'Computer Science',
        startDate: '2013-03',
        endDate: '2014-06'
    }])

    const [count, setCount] = useState(0);
    
    const submitHandler = (event) => {
        event.preventDefault();
    
        setInputShow(prevShow => ({
            ...prevShow,
            education: false
        }))

        setPageContent((prevPage) => ({
            ...prevPage,
            education: educationFormData
        }))
    }

    const inputHandler = (event, index) => {
        const {name, value} = event.target;
        setEducationFormData((prevForm) => {
            const updatedForm = [...prevForm]
            updatedForm[index] = {
                ...updatedForm[index],
                [name]: value
            }
            return updatedForm;
        })
    }

    const buttonHandler = (event) => {
        setInputShow(prevShow => ({
            ...prevShow,
            [event.target.name]: true
        }))
    }

    const newButtonHandler = () => {
        if (count < 3 && inputShow.education) {
            setEducationFormData((prevForm) => {
                const updatedForm = [...prevForm]
                updatedForm.push(
                    {
                        institution: '',
                        degree: '',
                        startDate: '',
                        endDate: '',
                    }
                )
                return updatedForm;
            })
            setCount(prevCount => prevCount + 1);
        }
    }

    const deleteButtonHandler = (e, index) => {
        setEducationFormData((prevForm) => {
            const updatedForm = [...prevForm]
            updatedForm.splice(index, 1);
            return updatedForm;
        })
        setCount(prevCount => prevCount - 1);
    }


    return (
    <form action="" onSubmit={submitHandler}>
        <h2>Education</h2>
        {inputShow.education && (
            <div>
                {educationFormData.map((education, index) => (
                    <div key={`experience-${index}`} className="input-container">
                        <button type="button" onClick={e => deleteButtonHandler(e, index)} className="delete-button">X</button>
                        <div>

                            <input 
                            type="text"
                            name='institution'
                            value={education.institution}
                            onChange={e => {inputHandler(e, index)}}
                            placeholder='School'
                            />
                            <input 
                            type="text"
                            name='degree'
                            value={education.degree}
                            onChange={e => {inputHandler(e, index)}}
                            placeholder='Degree'
                            />
                        </div>
                        <div className="date-container">
                            <label htmlFor="startDate">Start Date: </label>
                            <input 
                            type="month"
                            name='startDate'
                            value={education.startDate}
                            onChange={e => {inputHandler(e, index)}}
                            />
                            <label htmlFor="endDate">End Date: </label>
                            <input 
                            type="month"
                            name='endDate'
                            value={education.endDate}
                            onChange={e => {inputHandler(e, index)}}
                            />

                        </div>
                    </div>

                ))}

            </div>
        )}
        {inputShow.education && (
            <button type="button" name="education" onClick={newButtonHandler}>New</button>
        )}
        <button type='button' name='education' onClick={buttonHandler}>Edit</button>
        {inputShow.education && (
            <button type='submit' name='education'>Submit</button>
        )}
    </form>
    );
}

export default Education;