import Base from "../assets/projects/BaseLanding.png";
import DeVolta from "../assets/projects/De volta para o futuro.png";
import efood from "../assets/projects/Efood.png";

export type cardModel = {
  id: string;
  link: string;
  img: string;
  title: string;
  description: string;
};

export const CardModels: cardModel[] = [
  {
    id: "1",
    img: Base,
    link: "https://base-igreja-crista.vercel.app/",
    title: "Base Igreja Cristã",
    description: "Landing Page feita para uma igreja chamada Base Cristâ",
  },
  {
    id: "2",
    img: efood,
    link: "https://efood-atividade.vercel.app/",
    title: "Efood",
    description:
      "Emula o modelo de um site para restaurantes onde possui sistema de pedido, pagamento e validação de dados",
  },
  {
    id: "3",
    img: DeVolta,
    link: "https://devoltaparaofuturo.vercel.app/",
    title: "Blog de volta para o futuro",
    description:
      "Blog em homenagem a um dos filmes que mais amo, De volta para o futuro",
  },
];
