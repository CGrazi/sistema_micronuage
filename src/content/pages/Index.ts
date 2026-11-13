import type { ComponentProps } from "react";
import type { Faq } from "@/components/sections/Faq";
import type { Features } from "@/components/sections/Features";
import type { Hero } from "@/components/sections/Hero";
import type { Steps } from "@/components/sections/Steps";

/** The lists the "FixCell" page shows. Edit them here: src/pages/Index.tsx reads them. */
export const heroHighlights: NonNullable<ComponentProps<typeof Hero>["highlights"]> = [
  {
    "value": "2.300",
    "label": "pessoas na lista"
  },
  {
    "value": "-30%",
    "label": "para quem entrar agora"
  }
];

export const featuresItems: NonNullable<ComponentProps<typeof Features>["items"]> = [
  {
    "icon": "calendar",
    "title": "Agenda inteligente",
    "description": "Junta seus compromissos e sugere o melhor horário para cada tarefa."
  },
  {
    "icon": "check",
    "title": "Tarefas sem atrito",
    "description": "Adicione por voz ou texto e organize em segundos."
  },
  {
    "icon": "book",
    "title": "Notas conectadas",
    "description": "Ligue notas a tarefas e a eventos, sem copiar e colar."
  },
  {
    "icon": "zap",
    "title": "Rápido e offline",
    "description": "Abre na hora e funciona mesmo sem internet."
  }
];

export const stepsItems: NonNullable<ComponentProps<typeof Steps>["items"]> = [
  {
    "title": "Entre na lista",
    "description": "Deixe o seu e-mail. É rápido e sem cartão."
  },
  {
    "title": "Receba o convite",
    "description": "Enviamos o acesso antecipado por e-mail, em ondas."
  },
  {
    "title": "Use e opine",
    "description": "Ajude a moldar o produto com o seu feedback."
  }
];

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
    "answer": "Usamos apenas para avisar sobre o lançamento. Você pode sair da lista a qualquer momento por um link em cada e-mail."
  }
];
