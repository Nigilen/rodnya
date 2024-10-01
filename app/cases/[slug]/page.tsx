import { Actions } from "@/src/components/sections/actions/actions";
import { CaseContent } from "@/src/components/sections/case-content/case-content";
import { HeroCarousel } from "@/src/components/sections/hero-carousel/hero-carousel";


const slides = [
  {
    link: "/slide-hero-cases.webp",
    alt: "hero carousel 1"
  },
  {
    link: "/slide-hero-cases.webp",
    alt: "hero carousel 2"
  }
];


export default function Page(
	{ params }: { 
		params: { slug: string } 
	}
) {
  return (
    <div>
      <HeroCarousel heading={""} items={slides} />
      {/* <h1>{params.slug}</h1> */}
      <CaseContent />
      <Actions heading="Как с нами связаться?" contacts />
    </div>
  )
}