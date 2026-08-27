# HR Performance — Design System

Direção: **clínica premium**. Extremamente profissional, sóbrio, confiável — nunca "academia" ou moda dramática. Toda decisão de cor, tipografia, espaçamento e motion nesta LP deriva deste documento.

## Teses

**Visual:** preto profundo como base, marfim para respiro e conteúdo, champagne fosco só em detalhes (nunca preenchendo áreas grandes, nunca brilhante), grafite neutro como apoio. Tipografia serifada (Lora) comedida para títulos, sans (Inter) para leitura e rótulos. Espaçamento arejado mas estruturado — comunica controle, não vazio decorativo. Componentes quase retos (0–2px de raio), bordas finas em vez de sombra, nada de gradiente ou ícone ilustrativo.

**Interação:** 200ms em hovers, 600ms em revelações de scroll — rápido o bastante pra parecer preciso, nunca lento. Hover muda cor/borda + translate de 1–2px, nunca scale. Scroll reveals em fade + slide curto (16px), sem parallax. Proibido: bounce/elastic, confetti, gradiente animado, qualquer coisa "gamificada".

## Cores

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#0a0a0a` | Base escura — seções dark, texto sobre fundo claro |
| `marfim` (offwhite) | `#f6f3ec` | Fundo/conteúdo em seções claras, texto sobre fundo escuro |
| `papel` (paper) | `#eeeade` | Superfície secundária clara |
| `champagne` | `#b7975f` | Destaque decorativo (bordas, ícones, badges) e **texto apenas sobre fundo escuro** (7.2:1 contra ink) |
| `champagne-light` | `#d0b686` | Hover/estado ativo do champagne |
| `bronze` | `#7d6636` | **Texto em tom dourado sobre fundo claro** (4.9:1 contra marfim) — nunca usar champagne para texto sobre marfim/papel, cai pra 2.5:1 e falha WCAG AA |
| `grafite-1` | `#9c968c` | Texto de apoio sobre fundo escuro |
| `grafite-2` | `#625d54` | Texto de apoio sobre fundo claro |
| `line-dark` | `rgba(183,151,95,0.22)` | Linhas/divisores sobre fundo escuro |
| `line-light` | `rgba(10,10,10,0.10)` | Linhas/divisores sobre fundo claro |

**Regra de uso do dourado:** `champagne` é decorativo (bordas, ícones, hover, badges) e serve como texto **apenas sobre fundo escuro** (ink). `bronze` é o único tom dourado aprovado como texto sobre fundo claro (marfim/papel) — eyebrows, números de destaque, ícones de estado em seções claras.

## Tipografia

- **Lora** (serif) — títulos, peso 500 (600 em destaques pontuais), itálico reservado a citações/pull-quotes.
- **Inter** (sans) — corpo de texto, rótulos, UI. Pesos 300–600.
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
