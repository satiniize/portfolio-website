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
		<div className="text-center bg-black py-8">
			<span>Built with pride and passion.</span>
			<h1 className="text-xl font-bold">Contact me</h1>
			<ContactLink title="Whatsapp" link="#" />
			<ContactLink title="Telegram" link="#" />
			<ContactLink title="Email" link="#" />
			<ContactLink title="LinkedIn" link="#" />
			<ContactLink title="GitHub" link="#" />
			<ContactLink title="Instagram" link="#" />
		</div>
	);
}