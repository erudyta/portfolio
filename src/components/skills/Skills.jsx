import { forwardRef } from 'react'
import { skills } from '../../js/skillsData.js'

import './skills.css'
const Skills = forwardRef(function Skills({}, ref) {
	return (
		<section ref={ref} id='skills' className='skills section'>
			<h1 className='center-text'>Skills</h1>
			<div className='underline'></div>
			<div className='container skills-container'>
				{skills.map(skill => (
					<div key={skill.name} className='skill'>
						{' '}
						<i className={`skill-icon ${skill.icon}`}></i>
						<p className='skill-text'> {skill.name}</p>
					</div>
				))}
			</div>
		</section>
	)
})

export default Skills
