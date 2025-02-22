import React from 'react';

function ContactLink( {title, link} : {title: string; link: string} ) {
	return (
			<a href={link} className="block w-fit m-auto hover:underline">
				{title} 
			</a>
	);
};

export default function Footer() {
	return (
		<div className="text-center">
			<hr className="my-4"></hr>
			<h1 className="text-xl font-bold">Contact me</h1>
			<ContactLink title="Telegram" link="https://t.me/satiniize" />
			<ContactLink title="Email" link="mailto:rayhansat1210@gmail.com" />
			<ContactLink title="LinkedIn" link="https://id.linkedin.com/in/rayhan-satrio-adi-nurdjaman-143536263" />
			<ContactLink title="GitHub" link="https://github.com/satiniize" />
		</div>
	);
}