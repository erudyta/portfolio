import { navbarData } from '../../js/navbar-data.js'

import { useEffect, useState } from 'react'

import './header.css'
export default function Header({ sectionRefs }) {
	const [activeNav, setActiveNav] = useState({
		home: true,
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

	function changeActiveNav() {
		let scrollY = window.scrollY
		const scrolledTo = window.scrollY + window.innerHeight;
		const isReachBottom = document.body.scrollHeight === scrolledTo;
		if (
			scrollY >= sectionRefs.home.current.offsetTop &&
			scrollY < sectionRefs.home.current.offsetTop - 90 + sectionRefs.home.current.offsetHeight
		) {
			handleActiveNav('home')
		} else if (
			scrollY >= sectionRefs.about.current.offsetTop - 90 &&
			scrollY < sectionRefs.about.current.offsetTop - 90 + sectionRefs.about.current.offsetHeight
		) {
			handleActiveNav('about')
		} else if (
			scrollY >= sectionRefs.skills.current.offsetTop - 90 &&
			scrollY < sectionRefs.skills.current.offsetTop - 90 + sectionRefs.skills.current.offsetHeight
		) {
			handleActiveNav('skills')
		}  else if (
			(scrollY >= sectionRefs.contact.current.offsetTop - 90 &&
			scrollY < sectionRefs.contact.current.offsetTop - 90 + sectionRefs.contact.current.offsetHeight) || isReachBottom
		) {
			handleActiveNav('contact')
		}
		 else if (
			scrollY >= sectionRefs.project.current.offsetTop - 90 &&
			scrollY < sectionRefs.project.current.offsetTop - 90 + sectionRefs.project.current.offsetHeight
		) {
			handleActiveNav('projects')
		}
	}

	useEffect(() => {
		window.addEventListener('scrollend', changeActiveNav)
		return () => window.removeEventListener('scrollend', changeActiveNav)
	}, [activeNav])

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
