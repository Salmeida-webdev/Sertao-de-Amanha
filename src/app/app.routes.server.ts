import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'solucoes', renderMode: RenderMode.Prerender },
  { path: 'como-trabalhamos', renderMode: RenderMode.Prerender },
  { path: 'campo-e-conhecimento', renderMode: RenderMode.Prerender },
  { path: 'projetos', renderMode: RenderMode.Prerender },
  { path: 'contato', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client }
];
