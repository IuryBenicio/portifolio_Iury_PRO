import Base from "../assets/projects/BaseLanding.png";
// import DeVolta from "../assets/projects/De volta para o futuro.png";
import efood from "../assets/projects/Efood.png";
import myMoovies from "../assets/projects/MyMoviesAtualizado.png";

export type cardModel = {
  id: string;
  link?: string;
  img: string;
  title: string;
  description: string;
  status?: boolean;
};

export const CardModels: cardModel[] = [
  {
    id: "1",
    img: Base,
    status: true,
    link: "https://base-igreja-crista.vercel.app/",
    title: "Base Igreja Cristã",
    description: "Landing Page feita para uma igreja chamada Base Cristâ",
  },
  {
    id: "2",
    img: efood,
    status: true,
    link: "https://efood-atividade.vercel.app/",
    title: "Efood",
    description:
      "Emula o modelo de um site para restaurantes onde possui sistema de pedido, pagamento e validação de dados",
  },
  // {
  //   id: "3",
  //   img: DeVolta,
  //   status: true,
  //   link: "https://devoltaparaofuturo.vercel.app/",
  //   title: "Blog de volta para o futuro",
  //   description:
  //     "Blog em homenagem a um dos filmes que mais amo, De volta para o futuro",
  // },
  {
    id: "4",
    img: myMoovies,
    link: "https://mymoovies.vercel.app/",
    title: "My Movies!",
    status: true,
    description:
      "aplicação web com sistema de cadastro e login em que o usuário tera acesso a milhões de filmes, e poderá criar listas personalizadas com eles. Exemplo: criar uma lista com os seus filmes favoritos, ou com os filmes que você ainda quer assistir naquele mês",
  },
];
