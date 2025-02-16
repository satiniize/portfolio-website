import ContentWrapper from '@/components/content-wrapper'
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard() {
	return (
		<Link href="#" className="border shadow p-4 bg-sidebar transition duration-200 ease-in-out">
			<div className="w-full relative aspect-[16/9] shadow bg-white">
				<Image 
					src="/Photos/RYHN6848.JPG"
					alt="Banner image"
					fill={true}
					className="object-cover"
				/>
			</div>
			<h1 className="text-lg font-bold">ChatGPT Wrapper</h1>
			<span className="text-sm">DD MMM YYYY - DD MMM YYYY</span>
			<p className="text-justify">A basic ChatGPT wrapper. Some might call it RotBot. Lorem ipsum dolor sit amet. The brown dog jumped over the lazy dog. Crazy? I was crazy once.</p>
		</Link>
	)
}

export default function Blog() {
	return (
		<ContentWrapper>
			<p className="text-justify mb-4">
				This is the Blog page. I&apos;ll post here to talk about my projects in detail. Adding blog functionality soon.
			</p>
			<div className="grid grid-cols-2 gap-2">
				<ProjectCard></ProjectCard>
				<ProjectCard></ProjectCard>
				<ProjectCard></ProjectCard>
				<ProjectCard></ProjectCard>
				<ProjectCard></ProjectCard>
				<ProjectCard></ProjectCard>
			</div>
		</ContentWrapper>
	);
}