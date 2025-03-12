import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Education from './components/education'
import General from './components/general'
import Experience from './components/experience'
import PageContent from './components/pageContent'

function Form() {

  const [pageContent, setPageContent] = useState({
    name: 'Andy Chung',
    email: 'andychc731@gmail.com',
    phone: '555-555-5555',
    education: [{institution: 'University of Blah', degree: 'Computer Science', startDate: '2013-03', endDate: '2014-06'}],
    experience: [{workPlace: 'Pizzalappa', title: 'Cashier', startDate: '2013-03-04', endDate: '2014-06-07', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, risus sit amet elementum eleifend, metus dolor finibus orci, id luctus nisi ipsum id tortor. Cras sodales facilisis finibus. Donec venenatis suscipit ante, sit amet finibus odio ultrices sed. Aliquam a fringilla erat. Nunc sagittis id ante sit amet accumsan. Etiam id mi egestas, semper dui sit amet, varius lectus. Morbi et finibus ligula. Sed quis commodo mi, in ullamcorper elit.'}]
  });

  const [inputShow, setInputShow] = useState({
    general: true,
    education: true,
    experience: true
  })


  return (
    <>
      <div className='container'>
        <div className='form-container'>

          <General setPageContent={setPageContent} setInputShow={setInputShow} inputShow={inputShow}></General>

          <Education setPageContent={setPageContent} setInputShow={setInputShow} inputShow={inputShow}></Education>

          <Experience setPageContent={setPageContent} setInputShow={setInputShow} inputShow={inputShow}></Experience>
        </div>
          {PageContent(pageContent)}
      </div>
    </>
  )
}

export default Form
