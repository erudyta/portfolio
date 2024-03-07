import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'

function App() {
	return (
		<>
			<Header />
			<main>
				<Home />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</>
	)
}

export default App
