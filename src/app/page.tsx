import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Habilidades from "./components/Habilidades";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Habilidades />
      <Servicos />
      <Contato />
      <Footer />
    </>
  );
}
