import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { GenericSection } from "@/components/sections/GenericSection";
import { Hero } from "@/components/sections/Hero";
import { Steps } from "@/components/sections/Steps";
import { heroHighlights, featuresItems, stepsItems, faqItems } from "@/content/pages/Index";

export default function IndexPage() {
  return (
    <>
      <title>FixCell</title>
      <meta name="description" content="Um jeito novo de organizar o seu dia. Chega em breve." />
      <Hero
        id="hero"
        eyebrow="Lançamento em breve"
        title="Organize o seu dia sem abrir dez aplicativos"
        subtitle="Estamos finalizando o Aurora, agenda, tarefas e notas em um só lugar. Entre na lista de espera e ganhe acesso antecipado e desconto de lançamento."
        buttonText="Entrar na lista de espera"
        buttonUrl="/lista"
        variant="minimal"
        highlights={heroHighlights}
      />
      <GenericSection
        id="countdown"
        eyebrow="Contagem regressiva"
        title="O acesso antecipado abre em"
        subtitle="Você recebe o convite por e-mail assim que abrirmos."
        buttonText="Garantir meu lugar"
        buttonUrl="/lista"
        date="2027-02-15T09:00"
      />
      <Features
        id="features"
        eyebrow="O que vem por aí"
        title="Feito para o seu dia a dia, não para o seu chefe"
        layout="grid"
        items={featuresItems}
      />
      <Steps
        id="steps"
        tone="soft"
        title="Como funciona"
        layout="horizontal"
        items={stepsItems}
      />
      <Faq
        id="faq"
        title="Perguntas frequentes"
        items={faqItems}
      />
      <GenericSection
        id="signup"
        title="Entre na lista de espera"
        subtitle="Acesso antecipado e desconto de lançamento para quem entrar agora."
        buttonText="Quero entrar"
      />
    </>
  );
}
