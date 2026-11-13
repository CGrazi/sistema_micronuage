import type { ComponentProps } from "react";
import type { Faq } from "@/components/sections/Faq";

/** The lists the "Perguntas" page shows. Edit them here: src/pages/Perguntas.tsx reads them. */
export const faqItems: NonNullable<ComponentProps<typeof Faq>["items"]> = [
  {
    "question": "Quando o produto será lançado?",
    "answer": "O acesso antecipado abre na data da contagem regressiva. O lançamento geral vem algumas semanas depois."
  },
  {
    "question": "Quanto vai custar?",
    "answer": "O plano gratuito cobre o uso pessoal. Quem entrar na lista terá 30% de desconto no plano pago no primeiro ano."
  },
  {
    "question": "O que acontece com o meu e-mail?",
    "answer": "Usamos apenas para avisar sobre o lançamento. Você pode sair da lista a qualquer momento."
  }
];
