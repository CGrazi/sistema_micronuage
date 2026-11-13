import type { ComponentProps } from "react";
import type { Features } from "@/components/sections/Features";
import type { Steps } from "@/components/sections/Steps";

/** The lists the "Como funciona" page shows. Edit them here: src/pages/ComoFunciona.tsx reads them. */
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
    "description": "Ligue notas a tarefas e a eventos."
  },
  {
    "icon": "zap",
    "title": "Rápido e offline",
    "description": "Abre na hora e funciona mesmo sem internet."
  }
];
