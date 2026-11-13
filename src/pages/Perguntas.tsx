import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { faqItems } from "@/content/pages/Perguntas";

export default function PerguntasPage() {
  return (
    <>
      <title>Perguntas · FixCell</title>
      <meta name="description" content="Um jeito novo de organizar o seu dia. Chega em breve." />
      <Faq
        id="faq"
        title="Perguntas frequentes"
        items={faqItems}
      />
      <Contact
        id="contact"
        title="Fale com a equipe"
        subtitle="Dúvidas ou parcerias? Escreva para a gente."
        email="contato@exemplo.com.br"
        phone="(11) 4000-0000"
        buttonText="Enviar mensagem"
        namePlaceholder="Seu nome"
        emailPlaceholder="Seu e-mail"
        messagePlaceholder="Como podemos ajudar"
        showPhone={false}
        showMap={false}
        mode="message"
      />
    </>
  );
}
