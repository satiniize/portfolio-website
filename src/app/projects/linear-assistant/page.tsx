import ContentWrapper from '@/components/content-wrapper'
import { Send } from 'lucide-react';

function ChatBubble({ role, text }: { role: string; text: string }) {
	return (
		<div className={`${role == 'user' ? 'ml-auto bg-secondary text-secondary-foreground' : 'mr-auto bg-primary text-primary-foreground'} w-fit p-4 max-w-[75%] shadow border`}>
			{text}
		</div>
	)
}

export default function LinearAssistant() {
	return (
		<ContentWrapper>
			<div className="flex-grow space-y-4 min-h-screen">
				<ChatBubble role={'user'} text="Test message. Lorem ipsum dolor sit amet..." />
				<ChatBubble role={'assistant'} text="Test message. Lorem ipsum dolor sit amet...Test message. Lorem ipsum dolor sit amet...Test message. Lorem ipsum dolor sit amet...Test message. Lorem ipsum dolor sit amet..." />
				<ChatBubble role={'user'} text="Test message. Lorem ipsum dolor sit amet..." />
				<ChatBubble role={'assistant'} text="Test message. Lorem ipsum dolor sit amet..." />
				<ChatBubble role={'user'} text="Test message. Lorem ipsum dolor sit amet..." />
				<ChatBubble role={'assistant'} text="Test message. Lorem ipsum dolor sit amet..." />
				<ChatBubble role={'user'} text="Test message. Lorem ipsum dolor sit amet..." />
				<ChatBubble role={'assistant'} text="Test message. Lorem ipsum dolor sit amet..." />
				<ChatBubble role={'user'} text="Test message. Lorem ipsum dolor sit amet..." />
				<ChatBubble role={'assistant'} text="Test message. Lorem ipsum dolor sit amet..." />
			</div>
			<div className="sticky bottom-0 py-4 w-[75%] mx-auto">
				<div className="bg-sidebar border shadow w-full flex p-4 gap-4">
					<textarea
						placeholder="How can I help you?"
						className="bg-transparent flex-grow p-0 m-0 resize-none"
					/>
					<button className="h-8 w-8 border shadow bg-sidebar hover:bg-sidebar-accent"><Send className="m-auto"/></button>
				</div>
			</div>
		</ContentWrapper>
	);
}
