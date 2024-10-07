import { getSingleProject } from "@/src/api/api";
import { Actions } from "@/src/components/sections/actions/actions";
import { CaseContent } from "@/src/components/sections/case-content/case-content";
import { HeroCarousel } from "@/src/components/sections/hero-carousel/hero-carousel";


export default async function Page(
	{ params }: { 
		params: { slug: string } 
	}
) {

  let caseDate; 

  try {
    caseDate = await getSingleProject(params.slug).then(data => data.data);
    console.log(caseDate);
  } catch (e) {
    console.error(e);
  }

  return (
    <div>
      <HeroCarousel heading={""} items={caseDate.slider} />
      <CaseContent data={caseDate} />
      <Actions heading="Как с нами связаться?" contacts />
    </div>
  )
}