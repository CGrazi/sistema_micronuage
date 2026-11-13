# FixCell — regras do projeto

Regras que toda mudança deste projeto mantém. A IA da Micronuage lê este arquivo a cada pedido e acrescenta as decisões que tomar.

- Os dados do negócio (nome, contatos, menu, rodapé) ficam em `src/content/site.ts`.
- As listas de cada página (serviços, equipe, produtos, perguntas, preços) ficam em `src/content/pages/<Página>.ts`, tipadas pela seção que as mostra; a página guarda os títulos e textos.
- Formulários enviam com `submitLead()` de `src/lib/micronuage.ts` (as mensagens chegam na caixa de Leads da Micronuage); contas e dados salvos usam `@micronuage/sdk` e `data/model.json`.
- Cores, fontes e cantos vêm dos tokens de `src/index.css` (`@theme`); nenhum componente fixa uma cor.
- Ícones são do `lucide-react`; nunca emoji no lugar de ícone.
- Cada página tem sua rota em `src/routes.ts`; `npm test` confere que o menu só leva a páginas que existem.
- Número de registro profissional (CRO, CRM, OAB…), CNPJ, preços e números do negócio só entram quando o cliente informar.
