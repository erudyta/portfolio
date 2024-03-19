import {useRef} from 'react'

import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
	const homeSection = useRef()
	const aboutSection = useRef()
	const skillsSection = useRef()
	const projectSection = useRef()
	const contactSection = useRef()

	const sectionRefs = {
		home: homeSection,
		about: aboutSection,
		skills: skillsSection,
		project: projectSection,
		contact : contactSection
	}

	return (
		<>
			<Header sectionRefs={sectionRefs}/>
			<main>
				<Home ref ={homeSection}/>
				<About ref ={aboutSection}/>
				<Skills ref ={skillsSection}/>
				<Projects ref={projectSection}/>
				<Contact ref ={contactSection}/>
			</main>
			<Footer />
		</>
	)
}

export default App
