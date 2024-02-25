import './header.css'
import { navbarData } from '../../js/navbarData.js'

import { useState } from 'react'

export default function Header() {
	const [activeNav, setActiveNav] = useState({
		home: false,
		about: false,
		skills: false,
		projects: false,
		contact: false,
	})

	function handleActiveNav(identifier) {
		let sectionName = identifier.toLowerCase()
		setActiveNav(
			prev => (
				Object.keys(prev).forEach(val => (prev[val] = false)),
				{
					...prev,
					[sectionName]: true,
				}
			)
		)
	}

	return (
		<header>
			<nav>
				<div className='nav'>
					<ul>
						{navbarData.map(data => (
							<li
								key={data.title}
								className={`nav-list ${activeNav[data.title.toLowerCase()] ? 'active' : ''}`}
								onClick={() => handleActiveNav(data.title)}>
								<a href={data.href}>
									<span className='nav-icon'>
										{' '}
										<i className={data.icon}></i>
									</span>
									<span className='nav-text'>{data.title}</span>
								</a>
							</li>
						))}
						<div className='nav-circle'></div>
					</ul>
				</div>
			</nav>
		</header>
	)
}
