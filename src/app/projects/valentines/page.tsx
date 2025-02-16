"use client"

import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Valentines(){
	const [pos, setPos] = useState([0, 0])

	const moveNo = () => {
		const randomSignX = Math.random() < 0.5 ? -1 : 1;
		const randomSignY = Math.random() < 0.5 ? -1 : 1;
		const randomX = randomSignX * (64 + 32 * Math.random());
		const randomY = randomSignY * (64 + 32 * Math.random());
		setPos([pos[0] + randomX, pos[1] + randomY]);
	}

	return (
		<div className="animate-fadeIn bg-[#ffa3a8]">
			<div className="absolute bg-[url('/tile.png')] bg-[length:128px_128px] opacity-50 animate-scroll w-full h-full">
				<div className="bg-[radial-gradient(circle,transparent,#ffa3a8)] w-full h-full"> {/*Gradient to fade out symbols*/}
				</div>
			</div>
			<div className="relative">
				<Image src='/cat.png' height={200} width={200} alt="cat" className="absolute bottom-4 right-4"/>
				<div className="flex items-center justify-center h-screen overflow-hidden">
					<div className="flex flex-col h-fit w-fit justify-center items-center space-y-4">
						<h1 className="text-4xl font-bold text-white">Will you be my valentines?</h1>
						<div className="flex flex-row space-x-4">
							<Link
								href="/projects/valentines/yippee" 
								className="flex items-center justify-center font-bold text-white bg-[#77EE77] my-auto h-16 w-24 shadow rounded-2xl">
								Yes
							</Link>
							<button 
								onMouseEnter={moveNo}
								style={{ transform: `translate(${pos[0]}px, ${pos[1]}px)` }}
								className="font-bold text-white bg-[#FF6961] transition duration-200 ease-in-out relative my-auto h-16 w-24 shadow rounded-2xl"
							>
								No
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}