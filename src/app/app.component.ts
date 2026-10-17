import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'sda-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" routerLink="/" aria-label="Sertão de Amanhã, página inicial">
          <img src="/logo.svg" width="44" height="44" alt="" />
          <span><strong>Sertão de Amanhã</strong><small>Soluções Agro</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a routerLink="/solucoes" routerLinkActive="is-active">Soluções</a>
          <a routerLink="/como-trabalhamos" routerLinkActive="is-active">Como trabalhamos</a>
          <a routerLink="/campo-e-conhecimento" routerLinkActive="is-active">Campo & conhecimento</a>
          <a routerLink="/projetos" routerLinkActive="is-active">Projetos</a>
        </nav>
        <a class="header-cta" href="https://wa.me/5583998739712?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20agro." target="_blank" rel="noopener noreferrer">Vamos conversar <span aria-hidden="true">↗</span></a>
      </div>
    </header>
    <main id="conteudo"><router-outlet /></main>
    <footer class="site-footer">
      <div class="footer-top">
        <a class="brand brand-footer" routerLink="/">
          <img src="/logo-light.svg" width="44" height="44" alt="" />
          <span><strong>Sertão de Amanhã</strong><small>Soluções Agro</small></span>
        </a>
        <p>Planejamento atento ao território,<br>às pessoas e ao que vem pela frente.</p>
        <a class="footer-contact" routerLink="/contato">Fale com a equipe <span aria-hidden="true">↗</span></a>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Sertão de Amanhã · Projeto conceitual de portfólio</span>
        <span>Desenvolvido por <b>LMX Soluções Digitais / Segundo Almeida</b></span>
      </div>
    </footer>
  `
})
export class AppComponent {}
