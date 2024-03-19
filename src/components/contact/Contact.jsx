import { forwardRef } from 'react'
import { contactMethods } from '../../js/contactData.js'

import './contact.css'
const Contact = forwardRef(function Contact({}, ref) {
	return (
		<section ref={ref} id='contact' className='contact section'>
			<h1 className='center-text'>Contact</h1>
			<div className='underline'></div>
			<div className='container'>
				<div className='contact-container'>
					{contactMethods.map(contact => (
						<div key={contact.data} className='contact-info'>
							<i className={contact.icon}></i>
							<div>
								<p className='contact-mth'>{contact.method}</p>
								<p className='contact-data'>{contact.data}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
})

export default Contact
