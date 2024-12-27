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
			<h1 className="text-xl font-bold">Contact me</h1>
			<ContactLink title="Telegram" link="#" />
			<ContactLink title="Email" link="#" />
			<ContactLink title="LinkedIn" link="#" />
			<ContactLink title="GitHub" link="#" />
		</div>
	);
}