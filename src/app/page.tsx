import ContentWrapper from '@/components/content-wrapper'

export default function Home() {
	return (
		<main>
			<ContentWrapper>
				<h1 className="text-2xl font-bold">Rayhan Satrio Adi Nurdjaman</h1>
				<p className="text-justify">
					A Mechanical Engineering student at the National University of Singapore, fully funded by the Beasiswa Indonesia Maju scholarship for my achievements in national physics competitions.
				</p>
				<p className="text-justify">
					 Aside from academics, I’ve also led the mechanical subteam for Hornet X, managed design and publicity for community initiatives, and developed a skills from CAD and 3D modeling to Python and C++.
				</p>
			</ContentWrapper>
		</main>
	);
}