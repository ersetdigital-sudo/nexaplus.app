import { InfiniteSlider } from "@/components/infinite-slider";

export function LogoCloud() {
	return (
		<div className="mask-[linear-gradient(to_right,transparent,black,transparent)] overflow-hidden py-4">
			<InfiniteSlider gap={56} reverse speed={70} speedOnHover={25}>
				{logos.map((logo) => (
					<img
						alt={logo.alt}
						className="pointer-events-none h-9 w-auto select-none opacity-80 transition-opacity hover:opacity-100 md:h-11"
						key={`logo-${logo.alt}`}
						loading="lazy"
						src={logo.src}
					/>
				))}
			</InfiniteSlider>
		</div>
	);
}

const logos = [
	{
		src: "https://cdn.simpleicons.org/nextdotjs/000000",
		alt: "Next.js",
	},
	{
		src: "https://cdn.simpleicons.org/react/61DAFB",
		alt: "React",
	},
	{
		src: "https://cdn.simpleicons.org/typescript/3178C6",
		alt: "TypeScript",
	},
	{
		src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
		alt: "Tailwind CSS",
	},
	{
		src: "https://cdn.simpleicons.org/vercel/000000",
		alt: "Vercel",
	},
	{
		src: "https://cdn.simpleicons.org/framer/0055FF",
		alt: "Framer Motion",
	},
	{
		src: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
		alt: "Node.js",
	},
	{
		src: "https://cdn.simpleicons.org/postgresql/4169E1",
		alt: "PostgreSQL",
	},
];
