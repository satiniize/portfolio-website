export default function ContentWrapper({children,}: Readonly<{children: React.ReactNode;}>){
	return (
		<div className="animate-fadeIn block space-y-4">
			{children}
		</div>
	)
};