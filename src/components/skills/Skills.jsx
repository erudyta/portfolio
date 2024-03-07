import { skills } from '../../js/skillsData.js'

import './skills.css'
export default function Skills() {
	return (
		<section id='skills' className='skills section'>
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
}
