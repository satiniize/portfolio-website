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
				<PhotoItem path="/Photos/RYHN6822.JPG" />
				<PhotoItem path="/Photos/RYHN6842.JPG" />
				<PhotoItem path="/Photos/RYHN6848.JPG" />
				<PhotoItem path="/Photos/RYHN7267.JPG" />
				<PhotoItem path="/Photos/RYHN7296.JPG" />
				<PhotoItem path="/Photos/RYHN7394.JPG" />
				<PhotoItem path="/Photos/RYHN7403.JPG" />
				<PhotoItem path="/Photos/RYHN7431.JPG" />
				<PhotoItem path="/Photos/RYHN7441.JPG" />
				<PhotoItem path="/Photos/RYHN7560.JPG" />
				<PhotoItem path="/Photos/RYHN7611.JPG" />
				<PhotoItem path="/Photos/RYHN7689.JPG" />
				<PhotoItem path="/Photos/RYHN7708.JPG" />
				<PhotoItem path="/Photos/RYHN7791.JPG" />
				<PhotoItem path="/Photos/RYHN7849.JPG" />
				<PhotoItem path="/Photos/RYHN7872.JPG" />
				<PhotoItem path="/Photos/RYHN7875.JPG" />
				<PhotoItem path="/Photos/RYHN7901.JPG" />
				<PhotoItem path="/Photos/RYHN7967.JPG" />
				<PhotoItem path="/Photos/RYHN8020.JPG" />
				<PhotoItem path="/Photos/RYHN8050.JPG" />
				<PhotoItem path="/Photos/RYHN8060.JPG" />
				<PhotoItem path="/Photos/RYHN8094.JPG" />
				<PhotoItem path="/Photos/RYHN8122.JPG" />
				<PhotoItem path="/Photos/RYHN8148.JPG" />
				<PhotoItem path="/Photos/RYHN8202.JPG" />
				<PhotoItem path="/Photos/RYHN8236.JPG" />
				<PhotoItem path="/Photos/RYHN8244.JPG" />
			</div>
		</main>
	);
}