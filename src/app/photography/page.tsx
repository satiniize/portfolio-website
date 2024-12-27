import Image from 'next/image';

function PhotoItem({ path }: { path: string }) {
	return (
	<div className="w-full relative aspect-[3/2]">
	  <Image
	    src={path}
	    alt="A photo"
	    fill
	    className="rounded-2xl object-cover"
	  />
	</div>
	);
}

export default function Photography() {
	return (
		<main className="space-y-4">
			{/*Info Box*/}
			<div>
				<p className="text-justify">
					I do photography for events, but I also do it for fun. This is a collection of those moments. Everything SooC.
				</p>
				<h1 className="text-xl font-bold mt-4">
					Lenses I use:
				</h1>
				<ul className="list-disc pl-6">
					<li>TTArtisan 23mm f/1.4</li>
					<li>XF18-55mm f/2.8-f/4</li>
				</ul>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<PhotoItem path="/RYHN6822.JPG" />
				<PhotoItem path="/RYHN6842.JPG" />
				<PhotoItem path="/RYHN6848.JPG" />
				<PhotoItem path="/RYHN7267.JPG" />
				<PhotoItem path="/RYHN7296.JPG" />
				<PhotoItem path="/RYHN7344.JPG" />
				<PhotoItem path="/RYHN7361.JPG" />
				<PhotoItem path="/RYHN7394.JPG" />
				<PhotoItem path="/RYHN7403.JPG" />
				<PhotoItem path="/RYHN7431.JPG" />
				<PhotoItem path="/RYHN7441.JPG" />
				<PhotoItem path="/RYHN7449.JPG" />
				<PhotoItem path="/RYHN7560.JPG" />
				<PhotoItem path="/RYHN7611.JPG" />
			</div>
		</main>
	);
}