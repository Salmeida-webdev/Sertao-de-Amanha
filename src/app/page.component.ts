import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'sda-page', standalone: true, imports: [RouterLink],
  template: `
    @switch (kind) {
      @case ('home') {
        <section class="home-hero">
          <div class="hero-copy">
            <p class="eyebrow"><span class="eyebrow-line"></span> Caderno de campo · Semiárido brasileiro</p>
            <h1>O futuro<br>também se <em>planta.</em></h1>
            <p class="hero-lede">Soluções agro que começam escutando quem conhece a terra. Planejamento, água e solo pensados para a realidade de cada propriedade.</p>
            <div class="hero-actions"><a class="button button-copper" href="https://wa.me/5583998739712?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20a%20minha%20propriedade." target="_blank" rel="noopener noreferrer">Conversar sobre minha propriedade <span>↗</span></a><a class="text-link" routerLink="/solucoes">Conhecer as soluções <span>→</span></a></div>
            <div class="hero-note"><span class="note-index">01 / 04</span><span>Ideias enraizadas no território.</span><span class="note-rule"></span></div>
          </div>
          <div class="hero-visual">
            <img src="/images/propriedade-semiarido.webp" width="1680" height="945" alt="Produtora cuida de canteiros em uma propriedade rural do semiárido, com cisterna e vegetação nativa ao fundo." fetchpriority="high">
            <div class="photo-caption"><span class="caption-dot"></span><span>Território em foco</span><small>Imagem ilustrativa · Caatinga</small></div>
            <div class="image-coordinate">07° 35′ S<br>37° 37′ W</div>
            <div class="hero-stamp" aria-hidden="true"><span>RAIZ</span><b>+</b><span>FUTURO</span></div>
          </div>
          <div class="hero-index" aria-hidden="true">SDA—01</div>
        </section>
        <section class="intro-band section-pad">
          <div class="section-kicker">01 — Nosso ponto de partida</div>
          <div class="intro-layout"><h2>O conhecimento<br>que vem do campo<br><em>abre caminhos.</em></h2><div class="intro-text"><p>A Sertão de Amanhã é uma marca conceitual de soluções agro para pequenos e médios produtores do semiárido. A proposta une escuta, planejamento e ferramentas adequadas ao contexto de cada propriedade.</p><p>Sem receita pronta: cada conversa começa pelas pessoas, pelos recursos disponíveis e pelos objetivos de quem produz.</p><a class="text-link" routerLink="/como-trabalhamos">Entenda nosso processo <span>→</span></a></div></div>
        </section>
        <section class="solutions-preview section-pad">
          <div class="section-head"><div><div class="section-kicker">02 — Frentes de atuação</div><h2>Planejar com<br><em>o território.</em></h2></div><a class="text-link" routerLink="/solucoes">Ver todas as soluções <span>→</span></a></div>
          <div class="editorial-services">
            <a class="service-row" routerLink="/solucoes"><span class="service-num">01</span><span class="service-title">Água & irrigação</span><span class="service-desc">Leitura de necessidades e planejamento de uso da água.</span><span class="service-arrow">↗</span></a>
            <a class="service-row" routerLink="/solucoes"><span class="service-num">02</span><span class="service-title">Solo & manejo</span><span class="service-desc">Orientação para observar o solo e suas condições.</span><span class="service-arrow">↗</span></a>
            <a class="service-row" routerLink="/solucoes"><span class="service-num">03</span><span class="service-title">Planejamento produtivo</span><span class="service-desc">Organização de etapas, recursos e prioridades.</span><span class="service-arrow">↗</span></a>
            <a class="service-row" routerLink="/solucoes"><span class="service-num">04</span><span class="service-title">Organização digital</span><span class="service-desc">Ferramentas simples para acompanhar a rotina rural.</span><span class="service-arrow">↗</span></a>
          </div>
        </section>
        <section class="field-image-band"><img src="/images/manejo-agua-solo.webp" width="1448" height="1024" loading="lazy" alt="Mãos ajustam uma conexão simples de irrigação por gotejamento entre canteiros de cultivo."><div class="field-image-copy"><span class="section-kicker">Anotação de campo · 02</span><h2>Recurso bem<br>observado é recurso<br><em>bem planejado.</em></h2><a class="button button-light" routerLink="/campo-e-conhecimento">Ler caderno de campo <span>↗</span></a></div><span class="photo-disclaimer">Imagem ilustrativa</span></section>
        <section class="process-strip section-pad"><div class="section-kicker">03 — Um caminho construído junto</div><div class="process-grid"><h2>Da conversa<br>ao <em>próximo passo.</em></h2><div class="process-step"><b>01</b><strong>Escuta</strong><span>Entender a propriedade e as prioridades.</span></div><div class="process-step"><b>02</b><strong>Leitura</strong><span>Organizar contexto, recursos e desafios.</span></div><div class="process-step"><b>03</b><strong>Planejamento</strong><span>Desenhar caminhos possíveis em conjunto.</span></div><a class="process-more" routerLink="/como-trabalhamos">Conheça as etapas <span>→</span></a></div></section>
        <section class="closing-cta"><div><span class="section-kicker">Um bom começo</span><h2>Vamos conversar<br>sobre a sua <em>terra?</em></h2></div><a class="button button-copper" href="https://wa.me/5583998739712?text=Ol%C3%A1%2C%20quero%20iniciar%20uma%20conversa%20sobre%20minha%20propriedade." target="_blank" rel="noopener noreferrer">Chamar no WhatsApp <span>↗</span></a><span class="cta-ornament" aria-hidden="true">SDA<br>↗</span></section>
      }
      @case ('solutions') {
        <section class="page-hero"><p class="eyebrow">Caderno de campo · 02</p><h1>Soluções que<br>partem do <em>contexto.</em></h1><p>Frentes de trabalho para organizar decisões e explorar possibilidades com atenção aos recursos e aos objetivos de cada propriedade.</p></section>
        <section class="solutions-page section-pad"><div class="solution-detail"><span>01 / ÁGUA</span><div><h2>Planejamento<br>de irrigação</h2><p>Leitura das necessidades da propriedade e conversa sobre alternativas de irrigação, considerando disponibilidade de água, cultivo e rotina local.</p><a class="text-link" href="https://wa.me/5583998739712?text=Quero%20conversar%20sobre%20planejamento%20de%20irriga%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer">Conversar sobre esta frente ↗</a></div><img src="/images/manejo-agua-solo.webp" alt="Produtor verifica uma conexão de irrigação por gotejamento no campo." loading="lazy"></div>
          <div class="solution-detail"><span>02 / SOLO</span><div><h2>Manejo de água<br>e solo</h2><p>Orientação para observar as condições do solo e pensar práticas de manejo adequadas ao lugar. Recomendações específicas dependem de avaliação profissional.</p><a class="text-link" href="https://wa.me/5583998739712?text=Quero%20conversar%20sobre%20%C3%A1gua%20e%20solo." target="_blank" rel="noopener noreferrer">Conversar sobre esta frente ↗</a></div><img src="/images/caderno-de-campo.webp" alt="Caderno de campo com anotações conceituais ao lado de uma amostra de solo." loading="lazy"></div>
          <div class="solution-detail"><span>03 / PLANEJAMENTO</span><div><h2>Organização<br>produtiva</h2><p>Planejamento de etapas, necessidades e prioridades para apoiar decisões do dia a dia, respeitando o calendário e a capacidade de cada negócio rural.</p><a class="text-link" href="https://wa.me/5583998739712?text=Quero%20conversar%20sobre%20planejamento%20produtivo." target="_blank" rel="noopener noreferrer">Conversar sobre esta frente ↗</a></div><div class="solution-art art-rows" aria-hidden="true"><i></i><i></i><i></i><b>03</b></div></div>
          <div class="solution-detail"><span>04 / FERRAMENTAS</span><div><h2>Organização<br>e monitoramento</h2><p>Introdução a ferramentas digitais simples para registrar informações e acompanhar tarefas. A escolha depende da rotina e do acesso disponível.</p><a class="text-link" href="https://wa.me/5583998739712?text=Quero%20conversar%20sobre%20ferramentas%20digitais%20para%20organiza%C3%A7%C3%A3o%20rural." target="_blank" rel="noopener noreferrer">Conversar sobre esta frente ↗</a></div><div class="solution-art art-grid" aria-hidden="true"><span>CAMPO</span><span>REGISTRO</span><span>ROTINA</span><span>LEITURA</span></div></div>
        </section><aside class="disclaimer section-pad">Esta apresentação é conceitual. Escopo, disponibilidade e orientações técnicas devem ser validados com profissional habilitado antes de qualquer contratação ou aplicação.</aside>
      }
      @case ('process') {
        <section class="page-hero"><p class="eyebrow">Caderno de campo · 03</p><h1>Primeiro, a gente<br><em>escuta.</em></h1><p>Um processo transparente, construído em conjunto e adaptado ao que a propriedade precisa investigar e decidir.</p></section>
        <section class="process-page section-pad"><div class="process-visual"><img src="/images/conversa-no-campo.webp" alt="Produtor e consultora conversam enquanto observam o solo em uma área cultivada." loading="lazy"><small>Imagem ilustrativa · situação conceitual</small></div><div class="timeline"><article><span>01</span><div><h2>Conversa inicial</h2><p>Conhecer a atividade, as prioridades e as perguntas que orientam o primeiro contato.</p></div></article><article><span>02</span><div><h2>Leitura do contexto</h2><p>Reunir informações disponíveis sobre a propriedade, os recursos e as condições locais.</p></div></article><article><span>03</span><div><h2>Planejamento conjunto</h2><p>Organizar alternativas e próximos passos de forma clara, considerando limites e possibilidades.</p></div></article><article><span>04</span><div><h2>Acompanhamento</h2><p>Revisar o percurso e ajustar o plano conforme novas informações e necessidades.</p></div></article></div></section><section class="note-panel section-pad"><span class="section-kicker">Nota de trabalho</span><p>O processo não parte de prazo ou resultado fixo. Cada propriedade tem suas condições, e a orientação adequada depende de avaliação do caso.</p></section>
      }
      @case ('knowledge') {
        <section class="page-hero"><p class="eyebrow">Caderno de campo · 04</p><h1>Campo &<br><em>conhecimento.</em></h1><p>Ideias para observar melhor, organizar perguntas e apoiar conversas sobre a rotina rural.</p></section>
        <section class="knowledge-page section-pad"><div class="knowledge-feature"><img src="/images/caderno-de-campo.webp" alt="Anotações de campo conceituais em um caderno aberto sobre mesa de trabalho rural." loading="lazy"><div><span class="article-category">Caderno · água e observação</span><h2>O que vale registrar antes de planejar o uso da água?</h2><p>Um roteiro de perguntas para organizar uma primeira conversa sobre a rotina da propriedade, as fontes disponíveis e as necessidades percebidas.</p><small>Conteúdo demonstrativo · revisão técnica necessária</small></div></div><div class="article-list"><article><span>01 · PLANEJAMENTO</span><h3>Transformar tarefas da semana em um plano visível</h3><p>Uma reflexão conceitual sobre organização e registro da rotina produtiva.</p><small>Leitura: 3 min · Material demonstrativo</small></article><article><span>02 · SOLO</span><h3>Observar o solo começa com boas perguntas</h3><p>Como reunir contexto e dúvidas antes de buscar uma orientação técnica.</p><small>Leitura: 4 min · Material demonstrativo</small></article><article><span>03 · FERRAMENTAS</span><h3>Registro simples também é informação útil</h3><p>Ideias para pensar em registros que façam sentido para a rotina local.</p><small>Leitura: 3 min · Material demonstrativo</small></article></div></section><aside class="disclaimer section-pad">Os textos desta página são conceituais e não constituem recomendação agronômica. Revise e valide todo conteúdo técnico com profissional qualificado antes de publicar ou aplicar.</aside>
      }
      @case ('projects') {
        <section class="page-hero"><p class="eyebrow">Caderno de campo · 05</p><h1>Ideias em<br><em>construção.</em></h1><p>Estudos visuais para mostrar como uma leitura organizada da propriedade pode começar — sem representar clientes ou resultados reais.</p></section>
        <section class="projects-page section-pad"><article class="project-card project-large"><img src="/images/propriedade-semiarido.webp" alt="Estudo visual conceitual de uma propriedade no semiárido com cultivo diversificado e cisterna." loading="lazy"><div class="project-caption"><span>ESTUDO 01 · CONCEITUAL</span><h2>Leitura de propriedade<br>e organização do espaço</h2><p>Exercício visual sobre observação do terreno, áreas de cultivo e recursos presentes.</p></div></article><article class="project-card project-small"><img src="/images/manejo-agua-solo.webp" alt="Estudo visual conceitual sobre planejamento de irrigação em pequena propriedade." loading="lazy"><div class="project-caption"><span>ESTUDO 02 · CONCEITUAL</span><h2>Água na rotina produtiva</h2><p>Composição ilustrativa para uma conversa inicial sobre manejo.</p></div></article><article class="project-card project-small"><img src="/images/caderno-de-campo.webp" alt="Estudo visual conceitual de anotações e observações em caderno de campo." loading="lazy"><div class="project-caption"><span>ESTUDO 03 · CONCEITUAL</span><h2>Registro de observações</h2><p>Uma ideia de apoio à organização das informações de campo.</p></div></article></section><p class="disclaimer section-pad">Imagens geradas para este projeto demonstrativo. Os estudos não representam propriedades atendidas, dados de produção ou resultados comprovados.</p>
      }
      @case ('contact') {
        <section class="page-hero"><p class="eyebrow">Caderno de campo · 06</p><h1>Uma conversa<br>pode ser o <em>começo.</em></h1><p>Conte um pouco sobre sua propriedade, sua atividade e o que gostaria de organizar. O primeiro passo é entender o contexto.</p></section>
        <section class="contact-page section-pad"><div class="contact-copy"><span class="section-kicker">Contato direto</span><h2>Fale com a<br>nossa equipe.</h2><p>Use o WhatsApp para iniciar uma conversa. Você pode compartilhar sua dúvida e combinar os próximos passos.</p><a class="button button-copper" href="https://wa.me/5583998739712?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20minha%20propriedade%20rural." target="_blank" rel="noopener noreferrer">Abrir conversa no WhatsApp <span>↗</span></a><div class="contact-number"><small>WHATSAPP</small><a href="tel:+5583998739712">(83) 99873-9712</a></div></div><div class="contact-note"><span>NOTA 06—A</span><p>Para uma primeira conversa, ajuda saber:</p><ul><li>Qual atividade você desenvolve?</li><li>Em que município fica a propriedade?</li><li>Qual questão gostaria de entender melhor?</li></ul><small>O endereço, a área de atendimento e os horários ainda serão definidos.</small></div></section>
        <section class="faq-section section-pad"><div class="section-kicker">Perguntas frequentes</div><details><summary>Este site representa uma empresa em operação?</summary><p>Não. Sertão de Amanhã é uma marca fictícia criada para demonstração de portfólio. Os serviços, páginas, projetos e imagens são conceituais.</p></details><details><summary>O contato pelo WhatsApp já está conectado?</summary><p>O botão abre uma conversa com o número informado para este projeto. As demais informações operacionais ainda precisam ser confirmadas antes de uso comercial.</p></details><details><summary>O site oferece recomendações agronômicas?</summary><p>Não. O conteúdo é informativo e demonstrativo. Orientações específicas exigem avaliação profissional qualificada e contexto da propriedade.</p></details></section>
      }
    }
  `
})
export class PageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  kind = 'home';
  ngOnInit(): void {
    const data = this.route.snapshot.data;
    this.kind = String(data['kind'] ?? 'home');
    const pageTitle = String(data['title'] ?? 'Sertão de Amanhã — Soluções Agro');
    this.titleService.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: this.descriptionFor(this.kind) });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.descriptionFor(this.kind) });
  }
  private descriptionFor(kind: string): string {
    const descriptions: Record<string, string> = {
      home: 'Planejamento rural atento ao território. Soluções agro conceituais para água, solo e organização produtiva no semiárido.',
      solutions: 'Conheça frentes conceituais de planejamento de irrigação, manejo de água e solo, organização produtiva e ferramentas digitais.',
      process: 'Conheça um processo de escuta, leitura do contexto, planejamento conjunto e acompanhamento rural.',
      knowledge: 'Conteúdos demonstrativos sobre planejamento, água, solo e organização rural, sujeitos a revisão técnica.',
      projects: 'Estudos visuais conceituais de propriedades e planejamento rural. Imagens ilustrativas, sem métricas ou resultados inventados.',
      contact: 'Inicie uma conversa pelo WhatsApp com a Sertão de Amanhã, marca conceitual de soluções agro.'
    };
    return descriptions[kind] ?? descriptions['home'];
  }
}
