import { getProjects } from "@/src/api/api";
import { CasesGrid } from "@/src/components/blocks/grid/CasesGrid";
import { Hero } from "@/src/components/sections/hero/hero";

export default async function Page() {
  let cases = null;

  try {
    cases = await getProjects();
  } catch (error) {
    console.log(error);
  }
  
  return (
    <>
      <Hero title="Кейсы" description="Мы наверняка знаем, что источником информационного повода может стать всё, что угодно: наружная реклама, чат-бот, мероприятие, контент у блогера, подкаст." />
      <div>
        {cases &&
          <CasesGrid cases={cases.data} />
        }
      </div>
    </>
  );
}