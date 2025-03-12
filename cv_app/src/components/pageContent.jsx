function PageContent (content) {
    return (

    <div className='page'>
        <h1>{content.name}</h1>
        <div className='email'>{content.email}</div>
        <div className='phone'>{content.phone}</div>
        <div className="divider"></div>
        <h3>Education</h3>
        {content.education.map((education, index) => (
        <div key={index} className='education'>
            <div>
                <div className="header">{education.institution}</div>
                <div className="title">{education.degree}</div>
            </div>
            <div className="date">{education.startDate} - {education.endDate}</div>
        </div>
        )
        )}
        <div className="divider"></div>

        <h3>Experience</h3>
        {content.experience.map((experience, index) => (
        <div key={index} className='experience'>
            <div>
                <div className="header">{experience.workPlace}</div>
                <div className="title">{experience.title}</div>
            </div>
            <div className="date">{experience.startDate} - {experience.endDate}</div>            
            <div className="description">{experience.description}</div>
        </div>
        )
        )}
    </div>
    )
}

export default PageContent;