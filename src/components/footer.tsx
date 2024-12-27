import React from 'react';

function ContactLink( {title, link} : {title: string; link: string} ) {
	return (
		<div>
			<a href={link}>
				{title} 
			</a>
{/*            <span>
				 - {desc}
			</span>*/}
		</div>
	);
};

export default function Footer() {
	return (
		<div className="text-center bg-black border-t border-white py-4">
			<h1 className="text-xl font-bold">Contact me</h1>
			<ContactLink title="Telegram" link="https://t.me/satiniize" />
			<ContactLink title="Email" link="mailto:rayhansat1210@gmail.com" />
			<ContactLink title="LinkedIn" link="https://id.linkedin.com/in/rayhan-satrio-adi-nurdjaman-143536263" />
			<ContactLink title="GitHub" link="https://github.com/satiniize" />
		</div>
	);
}