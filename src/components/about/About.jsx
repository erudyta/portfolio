import { learningPath } from '../../js/learningPath.js'
import Bar from '../Bar.jsx'

import './about.css'
export default function About() {
	return (
		<section id='about' className='abt'>
			<h1 className='center-text'>About me</h1>
			<div className='underline center-text'></div>
			<div className='container'>
				<p className='abt-description'>
					I graduated with a degree in automation and robotics. Currently I have been working for more than 3 years as a
					PLC programmer. I have been interested in programming in the IT area for a few years. I started my coding
					journey by programming in Java and getting to know the Spring framework. I am currently focusing my attention
					on developing my frontend development skills - HTML, CSS, JavaScript.
				</p>
				<h3 className='center-text'>Learning Path</h3>
				<div className='abt-lng-container'>
					{learningPath.map((path, index) => (
						<div key={index} className='lng-method' data-index={index+1}>
							<div className='lng-logos'>
								{path.iconsImg.map((logo, index) => (
									<img className='lng-logo' key={index} src={logo} alt={path.imgAlt[index]} />
								))}
							</div>
							<div className='lng-text'>
								<a className='lng-course' href=''>
									{path.description}
								</a>
							</div>
							<div className='lng-bar-container'>
								<div className='lng-bar'>
									<Bar percentage={path.completedPercentage} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
