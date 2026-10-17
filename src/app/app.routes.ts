import { Routes } from '@angular/router';
import { PageComponent } from './page.component';

export const routes: Routes = [
  { path: '', component: PageComponent, data: { kind: 'home', title: 'Sertão de Amanhã — O futuro também se planta.' } },
  { path: 'solucoes', component: PageComponent, data: { kind: 'solutions', title: 'Soluções agro | Sertão de Amanhã' } },
  { path: 'como-trabalhamos', component: PageComponent, data: { kind: 'process', title: 'Como trabalhamos | Sertão de Amanhã' } },
  { path: 'campo-e-conhecimento', component: PageComponent, data: { kind: 'knowledge', title: 'Campo e conhecimento | Sertão de Amanhã' } },
  { path: 'projetos', component: PageComponent, data: { kind: 'projects', title: 'Projetos conceituais | Sertão de Amanhã' } },
  { path: 'contato', component: PageComponent, data: { kind: 'contact', title: 'Contato | Sertão de Amanhã' } },
  { path: '**', redirectTo: '' }
];
