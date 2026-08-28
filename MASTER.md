# HR Performance — Design System

Direção: **saúde/performance esportiva**. Extremamente profissional, sóbrio, confiável — evitar tanto "academia" quanto ambiente clínico/hospitalar (nada de azul/teal). Toda decisão de cor, tipografia, espaçamento e motion nesta LP deriva deste documento.

> **v2 — Guia de Design do cliente (PDF).** Substitui a paleta preto/champagne pela paleta verde/bege/dourado abaixo. Ver seção "Atualização de marca" no fim deste arquivo para o histórico da mudança.

## Teses

**Visual:** verde performance como cor de marca (hero, seções de destaque), bege areia como fundo principal das seções claras, branco gelo como fundo alternado/respiro, dourado HR em divisores/CTAs/destaques, preto grafite como texto principal e fundo de footer/prova social. Tipografia serifada (Lora) comedida para títulos, sans (Inter) para leitura e rótulos, Barlow Condensed (semibold, uso moderado) para números/estatísticas de destaque. Espaçamento arejado mas estruturado — comunica controle, não vazio decorativo. Componentes quase retos (0–2px de raio), bordas finas em vez de sombra, nada de gradiente ou ícone ilustrativo.

**Interação:** 200ms em hovers, 600ms em revelações de scroll — rápido o bastante pra parecer preciso, nunca lento. Hover muda cor/borda + translate de 1–2px, nunca scale. Scroll reveals em fade + slide curto (16px), sem parallax. Proibido: bounce/elastic, confetti, gradiente animado, qualquer coisa "gamificada".

## Cores

| Token (código) | Nome (guia) | Hex | Uso |
|---|---|---|---|
| `verde` | Verde Performance | `#2f4a3e` | Cor primária — hero, fundos de destaque (Proposta, Diferencial, Sobre, CTA final) |
| `verde-salvia` | Verde Sálvia | `#4f6f5c` | Variação clara do verde — reservado para hover/detalhes futuros |
| `offwhite` | Bege Areia | `#ede6d6` | Fundo principal das seções claras, cards |
| `paper` | Branco Gelo | `#f7f6f3` | Fundo alternado, respiros entre seções |
| `gold` | Dourado HR | `#c9a227` | Divisores, CTAs, destaques, ícones de plano premium — **texto apenas sobre fundo escuro** (verde/grafite, ~6.6:1) |
| `gold-light` | — | `#dcc064` | Hover/estado ativo do dourado |
| `bronze` | — (derivado) | `#7a5f1a` | **Texto/borda em tom dourado sobre fundo claro** (4.86:1 contra bege areia) — nunca usar `gold` para texto sobre bege/branco gelo, cai pra ~2.4:1 e falha WCAG AA |
| `ink` | Preto Grafite | `#14170f` | Texto principal (todo o site), footer, fundo da seção de prova social |
| `muted-dark` | — | `#aeb7ab` | Texto de apoio sobre fundo escuro (verde/grafite) |
| `muted-light` | — | `#5c6050` | Texto de apoio sobre fundo claro (bege/branco gelo) |
| `line-dark` | — | `rgba(201,162,39,0.22)` | Linhas/divisores sobre fundo escuro |
| `line-light` | — | `rgba(20,23,15,0.10)` | Linhas/divisores sobre fundo claro |

**Regra de uso do dourado:** `gold` é decorativo (bordas, ícones, hover, badges) e serve como texto **apenas sobre fundo escuro** (`verde` ou `ink`). `bronze` é o único tom dourado aprovado como texto/borda sobre fundo claro (`offwhite`/`paper`) — eyebrows, números de destaque, ícones de estado em seções claras. Esse token não vem do guia do cliente (que reintroduziu o dourado puro `#c9a227` "já existente na marca") — foi recalculado a partir dele pra manter a mesma proteção de contraste que já existia com o champagne.

**Papel de cada fundo escuro:** `verde` é a cor de marca — usada nas seções "grandes" (Hero, Proposta, Diferencial, Sobre, CTA final). `ink` (preto grafite) é utilitário — texto em qualquer lugar, footer e a seção de Prova Social (conforme o guia: "fundo de seção de prova social").

## Tipografia

- **Lora** (serif) — títulos, peso 500 (600 em destaques pontuais), itálico reservado a citações/pull-quotes.
- **Inter** (sans) — corpo de texto, rótulos, UI. Pesos 300–600.
- **Barlow Condensed** (semibold 600) — uso moderado, só em números/estatísticas de destaque e tags numeradas de seção (`01`/`02`/`03`, contadores). Nunca em corpo de texto.
- Rótulos em uppercase sempre com `letter-spacing` (0.08em–0.28em conforme tamanho).

## Espaçamento

Escala em múltiplos de 4px: `4 · 8 · 16 · 24 · 32 · 48 · 64 · 96`.

## Cantos & bordas

- `0px` — cards, botões (postura "quase reto")
- `2px` — inputs, elementos pequenos
- `full` (`999px`) — apenas tags/badges arredondados
- Bordas de 1px no lugar de sombra em toda a interface. Sem `box-shadow` decorativo.

## Motion

- Hover: `200ms`, `cubic-bezier(0.16, 1, 0.3, 1)`
- Scroll reveal: `600ms`, mesma curva, fade + `translateY(16px)`
- Propriedades animáveis: `opacity`, `transform` — nunca `width`/`height`/`top`/`left`
- Proibido: springs com bounce/elastic, parallax, gradiente animado, scale em hover

## Componentes base

- **Botão**: preenchido champagne / texto ink, hover → champagne-light + translateY(-1px), active → bronze, focus-visible → outline champagne-light 2px offset 3px, disabled → opacity 0.35.
- **Card**: borda 1px `line-light`/`line-dark` conforme fundo, hover → borda champagne + translateY(-2px). Sem sombra.
- **Eyebrow/label**: uppercase, 11px, `letter-spacing: 0.28em`, cor **bronze** sobre fundo claro, **champagne** sobre fundo escuro.
- **Badge/tag**: `rounded-full`, borda 1px, texto pequeno uppercase.

## Auditoria de acessibilidade (resolvida nesta versão)

- ❌ → ✅ Champagne como texto sobre marfim/papel (2.5:1, falha AA) — substituído por `bronze` (4.9:1) em: eyebrows de seções claras, números de destaque (Problem, HowItWorks, Proof), ícone "+" do FAQ.
- ❌ → ✅ Champagne como borda estrutural sobre fundo branco (2.49:1, falha o não-texto 3:1 da WCAG 1.4.11) — substituído por `bronze` na borda do card hover (Included) e do plano em destaque (Pricing).
- ❌ → ✅ Navbar animava `padding` no scroll (propriedade de layout, gera reflow) — padding agora fixo, só cor de fundo/borda transicionam.
- Champagne mantido como texto/borda apenas em fundos escuros (Differentiator, About, Proposal, Hero, FinalCTA), onde atinge 7.2:1.
- `prefers-reduced-motion` cobre tanto o Framer Motion (via `useReducedMotion`) quanto as transições CSS (regra global em `globals.css`).
- FAQ: `aria-expanded`, `aria-controls` e `role="region"` adicionados ao acordeão; ícone "+" e setas decorativas (Proposal) marcados `aria-hidden`.
- Motion tokens consolidados: 200ms (hover), 300ms (UI transitions como navbar/FAQ), 600ms (scroll reveal), todos na mesma curva `cubic-bezier(0.16, 1, 0.3, 1)` — só 3 durações distintas no projeto inteiro, sem bounce/elastic em nenhum ponto.

## Camada de interatividade (adicionada via `/genjutsu:cast`)

Pedido do colega: "mais interativa, mantendo o profissionalismo". Implementado dentro do vocabulário já aprovado (transform/opacity, mesma curva, sem parallax/scale/bounce):

- **`Shared/ScrollProgress.tsx`** — barra de 2px no topo (`z-60`, acima da navbar), `scaleX` ligado 1:1 ao scroll da página. Scroll-driven, sem easing/duração (reflete a posição real).
- **Eyebrow** — o traço abaixo do label cresce de `scaleX(0)` a `1` (500ms, mesma curva) quando entra na tela. Nunca anima `width`.
- **`Shared/CountUp.tsx`** — números de destaque (depoimentos) contam de 0 até o valor real em 900ms (mesma curva), disparo único via `useInView` a 60% visível. Usado em `testimonialsData.ts` (`statValue` + `statSuffix`).
- **`Shared/GlowCard.tsx`** — brilho radial que segue o cursor dentro da borda do card (raio 180px, opacidade 0→1 em 200ms). Aplicado em Included, Proof e Pricing. É luz, não escala — não viola a regra de "nunca scale em hover".
- Todos os itens acima respeitam `prefers-reduced-motion` (checado via `useReducedMotion`/CSS global) — a contagem aparece direto no valor final e o traço já nasce cheio.

## Atualização de marca — "Guia de Design" do cliente (PDF)

O parceiro do Heitor definiu uma nova identidade formal em PDF, com objetivo explícito de reforçar "saúde/performance esportiva" e evitar tanto conotação clínica quanto "academia". Mudanças aplicadas:

- **Paleta trocada**: preto+champagne → verde performance + bege areia + branco gelo + dourado + preto grafite (valores exatos na tabela de Cores acima). Os *nomes* das variáveis CSS (`--ink`, `--gold`, `--offwhite`, `--paper`, `--bronze`...) foram mantidos — só os valores hex mudaram — então qualquer classe Tailwind existente (`bg-ink`, `text-gold`, etc.) já reflete a nova paleta automaticamente. Foi adicionado um token novo, `--verde` (`--color-verde`), para a cor de marca primária.
- **Fonte nova**: Barlow Condensed (peso 600) para números/estatísticas de destaque, via `next/font/google` (`--font-barlow` → utilitário `font-accent`).
- **Renomeação obrigatória**: "Home Care" → "**HR Performance Elite**" em todo o site (copy, dados de FAQ/Quiz, metadata, CTAs). Motivo do cliente: no Brasil "Home Care" remete a cuidado domiciliar de idosos/pós-operatório/paliativo — o oposto do posicionamento esportivo. A explicação funcional "a HR Performance vai até você" foi mantida.
- **Header/nav**: passou a ter fundo claro (bege/branco gelo) ao rolar, em vez de escuro — conforme a lógica de aplicação do guia ("Header/nav: fundo bege ou branco gelo, logo em verde/dourado").
- **Prova Social**: fundo passou de claro (`paper`) para escuro (`ink`/grafite), conforme o guia.
- **Recomendações de UX aplicadas**: contador/estatística real (`-23kg em 6 meses`, dado de depoimento real — nunca inventar número) logo abaixo do CTA do Hero; código de cor por tier nos 3 planos (verde = Individual, dourado = Multidisciplinar, grafite+dourado = Elite); botão fixo de WhatsApp no mobile (`Shared/StickyWhatsApp.tsx`, oculto em `md:`+).
- **Não aplicado** (fora de escopo desta rodada): troca de ícones genéricos por ícones esportivos (exigiria escolher/instalar uma biblioteca de ícones — não decidido ainda) e fotos de todos os pacientes nos depoimentos (só temos a do Heitor até agora).
