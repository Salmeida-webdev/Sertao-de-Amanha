# Sertão de Amanhã — Soluções Agro

Site institucional demonstrativo construído com Angular, TypeScript e SCSS. As rotas são pré-renderizadas para publicação estática na Netlify.

## Rodar localmente

```powershell
npm install
npm start
```

Abra `http://localhost:4200`.

## Build de produção

```powershell
npm run build
```

O build estático é gerado em `dist/sertao-de-amanha/browser`. Na Netlify, use `npm run build` como comando de build e `dist/sertao-de-amanha/browser` como diretório de publicação.

## Antes de usar comercialmente

- Esta é uma marca fictícia para portfólio; confirme disponibilidade de domínio e marca no INPI antes de uso comercial.
- Serviços, etapas, artigos, projetos e fotografias são demonstrativos. Conteúdos agronômicos devem passar por revisão profissional.
- Ajuste `public/sitemap.xml` e a URL canônica ao domínio que vier a ser escolhido. O `example.com` atual é apenas um marcador.
- Confirme o número de WhatsApp, área de atendimento, horários e dados empresariais antes de publicar como negócio real.

## Tecnologias

- Angular 20 + TypeScript + Angular Router
- Angular SSR com pré-renderização estática (SSG)
- SCSS com layout responsivo e suporte a movimento reduzido
- Fontes locais Fraunces e Source Sans 3 via Fontsource
- Netlify para publicação estática

## Estrutura

- `src/app`: shell, rotas e conteúdo por página
- `src/styles.scss`: identidade visual e responsividade
- `public/images`: fotografias conceituais otimizadas em WebP
- `public/logo.svg`, `public/logo-light.svg`, `public/favicon.svg`: identidade vetorial

## Imagens

As fotografias foram geradas para este projeto e são ilustrativas. Elas não representam propriedades ou clientes reais.

Arquivos finais usados pelo site:

- `public/images/propriedade-semiarido.webp` — imagem principal e estudo conceitual de propriedade.
- `public/images/manejo-agua-solo.webp` — irrigação e manejo da água.
- `public/images/caderno-de-campo.webp` — caderno, observação e planejamento.
- `public/images/conversa-no-campo.webp` — conversa e acompanhamento no terreno.
- `public/logo-principal.png` e `public/simbolo.png` — versões PNG com transparência.
- `public/brand-lockup.svg`, `public/simbolo.svg`, `public/logo.svg` e `public/logo-light.svg` — originais vetoriais.
