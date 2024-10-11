import { getContacts, getProjects, getSingleProject, getSocials } from "@/src/api/api";
import { Actions } from "@/src/components/sections/actions/actions";
import { CaseContent } from "@/src/components/sections/case-content/case-content";
import { HeroCarousel } from "@/src/components/sections/hero-carousel/hero-carousel";

export default async function Page(
	{ params }: { 
		params: { slug: string } 
	}
) {

  let caseDate; 
  let contacts;
  let socials;
  let allCases;

  try {
    allCases = await getProjects().then(data => data.data);
    caseDate = await getSingleProject(params.slug).then(data => data.data);
    contacts = await getContacts();
    socials = await getSocials();
  } catch (e) {
    console.error(e);
  }
  
  return (
    <div>
      <HeroCarousel heading={""} items={caseDate.slider} />
      <CaseContent data={caseDate} allCases={allCases} />
      <Actions heading="Как с нами связаться?" contacts={contacts.data} socials={socials.data} />
    </div>
  )
}