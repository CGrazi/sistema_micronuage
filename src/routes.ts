import type { ComponentType } from "react";
import IndexPage from "@/pages/Index";
import ListaPage from "@/pages/Lista";
import ComoFuncionaPage from "@/pages/ComoFunciona";
import PerguntasPage from "@/pages/Perguntas";

/** Every page of the site. The menu (src/content/site.ts) links to these paths. */
export const routes: { path: string; name: string; Page: ComponentType }[] = [
  { path: "/", name: "FixCell", Page: IndexPage },
  { path: "/lista", name: "Lista de espera", Page: ListaPage },
  { path: "/como-funciona", name: "Como funciona", Page: ComoFuncionaPage },
  { path: "/perguntas", name: "Perguntas", Page: PerguntasPage },
];
