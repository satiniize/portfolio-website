import ContentWrapper from '@/components/content-wrapper'
import Image from 'next/image'

export default function Yippee(){
	return (
		<ContentWrapper>
		<div className='flex flex-col items-center items-center justify-center space-y-4 w-full h-full'>
			<Image src='/happy.gif' width={256} height={256} alt=''/>
			<h1 className='text-xl font-bold'>Happy Anniversary</h1>
			<p>halo bbyy udah ngga kerasa setahun lewat. aku jujur masih ngga paham kenapa atau gimana bisa ketemu km. ya pertama karena situasinya kayak spesifik banget sm random tp kedua juga km baik banget sm aku... mmf aku tau km sering dapet gini tp ya ur so full of love makasih udah ngasihnya ke aku. maaf kalo aku kadang nyebelin atau ngeselin</p>

			<p>aku ngga tau km muak/seneng tiap kali aku mention tp aku suka muka bareface km yang happy itu. pertama ya pas di braga itu tp tiap kali km bagi selfie bareface di kamar gitu aku kayak yey hepi pacarku lucu cantik.</p>

			<p>maaf akhir akhir ini slowres. kuliah is kuliahing tp kadang bingung mau gimana. yang aku inget tp kita blm TOUR GEDUNG TEKNIK.</p>

			<p>anw i lov u bby heres to more days with u</p>
		</div>
		</ContentWrapper>
	);
}