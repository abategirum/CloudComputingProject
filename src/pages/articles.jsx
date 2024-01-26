import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>
					
					<div className="articles-main-container">
					<div className="article-title">
					<h2 style={{ fontSize: '2.5em', fontWeight: 'bold' }}>{INFO.articles.title}</h2>
					</div>
						
						<div class="image">
						<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*I4s_VY1Ju7QuXb07bJXTGA.png" alt="articles" 
						 style={{ maxWidth: '100%', height: 'auto' }}/>
					</div>

						<div className="articles-container">
						<div className="articles-wrapper">
							<p>
								Let's explore how each of these AWS services can effectively host and deliver My React portfolio website:

								<h2>Step 1: Amazon S3 (Simple Storage Service)</h2>

								Amazon S3 is an object storage service, ideal for a static website like your React portfolio. Follow these steps:

								<ul>
									<li>Create a new S3 bucket to store static content like HTML, CSS, JavaScript, and images.</li>
									<li>Enable static website hosting for your S3 bucket.</li>
									<li>Upload your React application's build directory to the S3 bucket (run `npm run build`).</li>
								</ul>

								<h2>Step 2: Amazon CloudFront</h2>

								Amazon CloudFront, a content delivery network (CDN) service, enhances data delivery speed. Take these actions:

								<ul>
									<li>Create a new CloudFront distribution.</li>
									<li>Choose the S3 bucket created in Step 1 as the "Origin Domain Name."</li>
									<li>Enable "Compress Objects Automatically" for improved performance.</li>
									<li>Set the "Default Root Object" to `index.html`.</li>
									<li>Use the unique URL provided by CloudFront to access your website.</li>
								</ul>

								<h2>Step 3: AWS Lambda</h2>

								AWS Lambda allows serverless code execution. For a static React website, you might not need AWS Lambda.

								<h2>Step 4: Amazon Route 53</h2>

								Amazon Route 53, a scalable DNS, helps users access your website. Follow these steps:

								<ul>
									<li>Register a domain, serving as your website's URL.</li>
									<li>Create a new "Hosted zone" and then create a "Record Set."</li>
									<li>In the "Record Set," set "Alias" to yes and choose the CloudFront distribution from Step 2 as the "Alias Target."</li>
								</ul>

								<h2>Step 5: AWS Certificate Manager</h2>

								AWS Certificate Manager facilitates SSL/TLS certificate management. Use it as follows:

								<ul>
									<li>Request a new public certificate.</li>
									<li>Enter your domain name from Step 4.</li>
									<li>Validate the certificate through DNS or email validation.</li>
									<li>After issuance, modify your CloudFront distribution settings to use this certificate for HTTPS connections.</li>
								</ul>

								<p>Remember, configure each service according to your use case. Refer to AWS documentation or consult with a cloud solutions architect for accurate implementation. Happy blogging!</p>
							</p>
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

export default Articles;
