import ContentWrapper from '@/components/content-wrapper'
import ImageLoader from '@/components/image-loader'

const photos = [
	"/Photos/RYHN6842.JPG",
	"/Photos/RYHN6848.JPG",
	"/Photos/RYHN7267.JPG",
	"/Photos/RYHN7296.JPG",
	"/Photos/RYHN7394.JPG",
	"/Photos/RYHN7403.JPG",
	"/Photos/RYHN7431.JPG",
	"/Photos/RYHN7441.JPG",
	"/Photos/RYHN7560.JPG",
	"/Photos/RYHN7611.JPG",
	"/Photos/RYHN7689.JPG",
	"/Photos/RYHN7708.JPG",
	"/Photos/RYHN7791.JPG",
	"/Photos/RYHN7849.JPG",
	"/Photos/RYHN7872.JPG",
	"/Photos/RYHN7875.JPG",
	"/Photos/RYHN7901.JPG",
	"/Photos/RYHN7967.JPG",
	"/Photos/RYHN8020.JPG",
	"/Photos/RYHN8050.JPG",
	"/Photos/RYHN8060.JPG",
	"/Photos/RYHN8094.JPG",
	"/Photos/RYHN8122.JPG",
	"/Photos/RYHN8148.JPG",
	"/Photos/RYHN8202.JPG",
	"/Photos/RYHN8236.JPG",
	"/Photos/RYHN8244.JPG",
]

export default function Photography() {
	return (
		<main className="space-y-4">
			<ContentWrapper>
				<p className="text-justify">
					I do photography for events, but I also do it for fun. This is a collection of those moments. Everything SooC.
				</p>
				<div>
					<h1 className="text-xl font-bold">
						Lenses I use:
					</h1>
					<ul className="list-disc pl-6">
						<li>TTArtisan 23mm f/1.4</li>
						<li>XF18-55mm f/2.8-f/4</li>
					</ul>
				</div>
				<div className="grid grid-cols-2 gap-4">
					{photos.map((path, index) => (<ImageLoader key={index} path={path}/>))}
				</div>
			</ContentWrapper>
		</main>
	);
}