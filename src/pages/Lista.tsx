import { GenericSection } from "@/components/sections/GenericSection";

export default function ListaPage() {
  return (
    <>
      <title>Lista de espera · FixCell</title>
      <meta name="description" content="Um jeito novo de organizar o seu dia. Chega em breve." />
      <GenericSection
        id="signup"
        title="Entre na lista de espera"
        subtitle="Acesso antecipado e desconto de lançamento para quem entrar agora."
        buttonText="Quero entrar"
      />
      <GenericSection
        id="countdown"
        title="O acesso antecipado abre em"
        buttonUrl="/"
        date="2027-02-15T09:00"
      />
    </>
  );
}
