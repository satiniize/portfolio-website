import ContentWrapper from '@/components/content-wrapper'
import Image from 'next/image';
import Link from 'next/link';

const projectLinks = [
	{
		'title' : 'Linear Assistant',
		'desc' : 'A basic ChatGPT wrapper for me to learn next.js route handling.',
		'link' : '/projects/linear-assistant',
		'img' : '/Photos/RYHN6848.JPG',
	},
	{
		'title' : 'Coming Soon',
		'desc' : 'More projects coming soon. Stay tuned!',
		'link' : '#',
		'img' : '/Photos/RYHN6848.JPG',
	},
]

function ProjectCard({title, desc, link, img} : {title: string; desc: string; link: string; img: string}) {
	return (
		<Link href={link} className="flex border shadow p-4 space-x-4 bg-sidebar hover:bg-sidebar-accent">
		  <div className="inline h-40 relative aspect-[1/1] shadow bg-white">
		    <Image 
		      src={img}
		      alt="Banner image"
		      fill={true}
		      className="object-cover"
		    />
		  </div>
		  <div className="inline">
		    <h1 className="block text-lg font-bold">{title}</h1>
		    <p className="block text-justify">{desc}</p>
		  </div>
		</Link>
	);
}

export default function Projects() {
	return (
		<ContentWrapper>
			<p className="text-justify mb-4">
				This is the Projects page. This will be used to host my projects in a web interface for you to use.
			</p>
			<div className="block space-y-4">
			  {projectLinks.map((item, index) => (
			    <ProjectCard 
			      key={index} 
			      title={item.title} 
			      desc={item.desc} 
			      link={item.link}
			      img={item.img}
			    />
			  ))}
			</div>
		</ContentWrapper>
	);
}