import { forwardRef } from 'react'

import { projects } from '../../js/projects-data.js'

import AButton from '../AButton.jsx'

import calculatorJS from '../../assets/Vanilla_JS_Calculator.png'
import ticTacToeImg from '../../assets/tic-tac-toe.png'
import dayPlannerImg from '../../assets/day-planner.png'

const images = [
	{
		source: calculatorJS,
		alt: 'Personal website',
	},
	{
		source: ticTacToeImg,
		alt: 'Tic Tac Toe game',
	},
	{
		source: dayPlannerImg,
		alt: 'Planner Day app',
	},
]

const aIcon = 'bx bx-chevron-right'

import './projects.css'
const Projects = forwardRef(function Projects({}, ref) {
	return (
		<section ref={ref} id='projects' className='projects section'>
			<h1 className='center-text'>Projects</h1>
			<div className='underline'></div>
			<div className='container'>
				<div className='projects-container'>
					{projects.map((project, index) => (
						<div key={project.title} className='project'>
							<div className={`project-header ${project.subtitle.length > 0 ? 'project-photo-blur' : ''}`}>
								<img src={images[index].source} alt={images[index].alt}></img>
							</div>
							<div className='project-content'>
								<div className={`project-techs ${project.subtitle.length > 0 ? 'project-blur' : ''}`}>
									{project.technologies.map(tech => (
										<span key={tech}>{tech}</span>
									))}
								</div>
								<div className='project-desc'>
									<h3 className='project-title'>{project.title}</h3>
									{project.subtitle.length > 0 ? <p className='project-subtitle'>{project.subtitle}</p> : undefined}
									<p className={`project-description ${project.subtitle.length > 0 ? 'project-blur' : ''}`}>
										{project.description}
									</p>
								</div>
								<div className={`project-btns ${project.subtitle.length > 0 ? 'project-blur' : ''}`}>
									<AButton icon={aIcon} link={project.liveDemoLink} disable={project.subtitle.length > 0}>
										Live Demo
									</AButton>
									<AButton icon={aIcon} link={project.gitHubLink} disable={project.subtitle.length > 0}>
										GitHub
									</AButton>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
})

export default Projects
