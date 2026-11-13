import { Features } from "@/components/sections/Features";
import { Steps } from "@/components/sections/Steps";
import { stepsItems, featuresItems } from "@/content/pages/ComoFunciona";

export default function ComoFuncionaPage() {
  return (
    <>
      <title>Como funciona · FixCell</title>
      <meta name="description" content="Um jeito novo de organizar o seu dia. Chega em breve." />
      <Steps
        id="steps"
        title="Como funciona"
        layout="vertical"
        items={stepsItems}
      />
      <Features
        id="features"
        title="O que vem por aí"
        layout="list"
        items={featuresItems}
      />
    </>
  );
}
