import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

		const [formData, setFormData] = useState({
		  name: '',
		  email: '',
		  subject: '',
		  message: '',
		});
	  
		const [formErrors, setFormErrors] = useState({
		  name: '',
		  email: '',
		  subject: '',
		  message: '',
		});
	  
		const handleChange = (e) => {
		  const { name, value } = e.target;
		  setFormData({ ...formData, [name]: value });
		  setFormErrors({ ...formErrors, [name]: '' }); // Clear previous error when user starts typing
		};
	  
		const handleSubmit = (e) => {
		  e.preventDefault();
	  
		  // Validate inputs
		  const newFormErrors = {};
		  Object.entries(formData).forEach(([key, value]) => {
			if (!value.trim()) {
			  newFormErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
			}
		  });
	  
		  // If there are errors, update the state with the errors
		  if (Object.keys(newFormErrors).length > 0) {
			setFormErrors(newFormErrors);
		  } else {
			// Submit the form or perform other actions
			console.log('Form submitted:', formData);
		  }
		};
	

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							on my website to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media, you can find me on{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. I post regular updates and engage with my
							followers there, so don't hesitate to reach out.
							Thanks again for your interest, and I look forward
							to hearing from you!
							
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<div className="contactFormCard">
							<form id="contact-form" noValidate onSubmit={handleSubmit}>
								<div className="row formRow">
								<div className="col">
									<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className={`form-control formInput ${formErrors.name && 'is-invalid'}`}
									placeholder="Name"
									required
									style={{ marginBottom: '10px' }}
									/>
									{formErrors.name && <div className="invalid-feedback" style={{ color: 'red' }}>{formErrors.name}</div>}
								</div>
								<div className="col">
									<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className={`form-control formInput ${formErrors.email && 'is-invalid'}`}
									placeholder="Email address"
									required
									/>
									{formErrors.email && <div className="invalid-feedback" style={{ color: 'red' }}>{formErrors.email}</div>}
								</div>
								</div>

								<div className="row formRow">
								<div className="col">
									<input
									type="text"
									name="subject"
								value={formData.subject}
								onChange={handleChange}
								className={`form-control formInput ${formErrors.subject && 'is-invalid'}`}
								placeholder="Subject"
								required
								/>
								{formErrors.subject && <div className="invalid-feedback" style={{ color: 'red' }}>{formErrors.subject}</div>}
							</div>
							</div>

							<div className="row formRow">
							<div className="col">
								<textarea
								rows={3}
								name="message"
								value={formData.message}
								onChange={handleChange}
								className={`form-control formInput ${formErrors.message && 'is-invalid'}`}
								placeholder="Message"
								required
								></textarea>
								{formErrors.message && <div className="invalid-feedback" style={{ color: 'red' }}>{formErrors.message}</div>}
							</div>
							</div>

							<button className="submit-btn">Submit</button>
						</form>
						</div>
					</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
