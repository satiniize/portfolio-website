export default function ContentWrapper({children,}: Readonly<{children: React.ReactNode;}>){
	return (
		<div className="animate-fadeIn mx-auto pt-16 px-4 max-w-4xl">
			{children}
		</div>
	)
};