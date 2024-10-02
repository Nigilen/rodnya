'use client'

import { CasesPreview } from "@/src/components/blocks/cases-preview";
import { Grid } from "@/src/components/layout/grid";
import { Hero } from "@/src/components/sections/hero/hero";
import { useState } from "react";


const casesMock = [
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
  {
    alias: "yandexGo",
    title: "Семейная сокотерапия",
    company: "Мултон",
    img: "/case-preview.png",
  },
];

export default function Page() {
  const [scro, setScrollY] = useState(0);

  return (
    <>
      <div className="sol"></div>
      <Hero title="Кейсы" description="Мы наверняка знаем, что источником информационного повода может стать всё, что угодно: наружная реклама, чат-бот, мероприятие, контент у блогера, подкаст." />
      <div>
        <Grid>
          {casesMock.map((item) => (
            <CasesPreview key={item.alias} alias={'/cases/' + item.alias} company={item.company} title={item.title} img={item.img} />
          ))}
        </Grid>
      </div>
    </>
  );
}