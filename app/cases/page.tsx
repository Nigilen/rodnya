import { getProjects } from "@/src/api/api";
import { Grid } from "@/src/components/layout/grid";
import { Hero } from "@/src/components/sections/hero/hero";

// TODO функционал: подгрузка при скролле «Кейсы»

// NOTE cролл-подгрузка: React intersection observer 

export default async function Page() {
  const cases = await getProjects(); 
  
  return (
    <>
      <Hero title="Кейсы" description="Мы наверняка знаем, что источником информационного повода может стать всё, что угодно: наружная реклама, чат-бот, мероприятие, контент у блогера, подкаст." />
      <div>
        <Grid cases={cases.data} />
      </div>
    </>
  );
}