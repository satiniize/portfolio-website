import React from 'react';

function ContactLink( {title, link, desc} ) {
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
			<ContactLink title="Whatsapp" link="#" desc="For urgent matters" />
			<ContactLink title="Email" link="#" desc="For important matters" />
			<ContactLink title="GitHub" link="#" desc="For coding projects" />
			<ContactLink title="Instagram" link="#" desc="For photography content" />
		</div>
	);
}