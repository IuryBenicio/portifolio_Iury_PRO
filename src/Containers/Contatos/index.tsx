import { useFormik } from "formik";
import * as Yup from "yup";
import { ContatosContainer, RedesSociais } from "./styles";
import Gmail from "../../assets/socialmedia/gmail-svgrepo-com (1).svg";
import Instagram from "../../assets/socialmedia/instagram-167-svgrepo-com.svg";
import Whats from "../../assets/socialmedia/whatsapp-128-svgrepo-com.svg";
import Linkedin from "../../assets/socialmedia/linkedin-svgrepo-com (1).svg";

const Contatos = () => {
  const form = useFormik({
    initialValues: {
      NomeUsuario: "",
      Email: "",
      Mensagem: "",
    },
    validationSchema: Yup.object({
      NomeUsuario: Yup.string()
        .min(3, "Seu nome precisa ser válido ou ter pelo menos 5 caracteres")
        .required("o campo é obrigatório"),
      Email: Yup.string().required("o campo é obrigatório"),
      Mensagem: Yup.string()
        .min(4, "A mensagem precisa ser uma mensagem válida")
        .required("o campo é obrigatório"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  function openNewTab(url: string) {
    const win = window.open(url, "_blank");
    win!.focus();
  }

  return (
    <ContatosContainer className="container">
      <div className="Title">
        <h2>Entrar em contato</h2>
      </div>
      <div className="ContainerDivided">
        <form onSubmit={form.handleSubmit}>
          <label htmlFor="NomeUsuario">
            <span>Nome:</span>
            <input
              type="text"
              id="NomeUsuario"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.NomeUsuario}
            />
          </label>
          <label htmlFor="Email">
            <span>Email:</span>
            <input
              type="email"
              id="Email"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.Email}
            />
          </label>
          <label htmlFor="Mensagem">
            <span>Mensagem:</span>
            <textarea
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              value={form.values.Mensagem}
              name=""
              id="Mensagem"
              cols={30}
              rows={5}
            />
          </label>
          <button type="submit">ENVIAR</button>
        </form>
        <RedesSociais>
          <img
            onClick={() => openNewTab("iury620@gmail.com")}
            src={Gmail}
            alt=""
          />
          <img
            onClick={() =>
              openNewTab("https://www.instagram.com/iury_benicio/")
            }
            src={Instagram}
            alt=""
          />
          <img
            onClick={() =>
              openNewTab(
                "https://wa.me/5598992239773?text=Ol%C3%A1%2C+vi+seu+portfolio+e+gostaria+de+entrar+em+contato+com+voc%C3%AA%21"
              )
            }
            src={Whats}
            alt=""
          />
          <img
            onClick={() =>
              openNewTab("https://www.linkedin.com/in/iurybenicio/")
            }
            src={Linkedin}
            alt=""
          />
        </RedesSociais>
      </div>
    </ContatosContainer>
  );
};

export default Contatos;
