import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_INFO, PORTFOLIO_CONTENT_EN, PORTFOLIO_CONTENT_AR } from './data/portfolio.data';
import { ProjectItem } from './core/models/portfolio.model';
import { SeoService } from './core/services/seo.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { EducationCertsComponent } from './components/education-certs/education-certs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    HighlightsComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    ProjectModalComponent,
    EducationCertsComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  private seoService = inject(SeoService);

  public readonly personalInfo = PERSONAL_INFO;
  public readonly currentLang = signal<'en' | 'ar'>(
    typeof window !== 'undefined' && window.localStorage?.getItem('portfolio_lang') === 'en' ? 'en' : 'ar'
  );

  public readonly content = computed(() => {
    return this.currentLang() === 'en' ? PORTFOLIO_CONTENT_EN : PORTFOLIO_CONTENT_AR;
  });

  public selectedProject = signal<ProjectItem | null>(null);
  public isEducationCertsOpen = signal<boolean>(false);

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem('portfolio_lang');
      if (saved === 'en' || saved === 'ar') {
        this.currentLang.set(saved);
      }
    }
    // Initialize SEO and JSON-LD structured data
    this.seoService.initSeo(this.currentLang());
  }

  onLanguageChange(lang: 'en' | 'ar'): void {
    this.currentLang.set(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('portfolio_lang', lang);
    }
    this.seoService.updateLanguageAndMeta(lang);

    // If a project modal is currently open, switch it to the corresponding language item
    const current = this.selectedProject();
    if (current) {
      const activeContent = lang === 'en' ? PORTFOLIO_CONTENT_EN : PORTFOLIO_CONTENT_AR;
      const matched = activeContent.projects.items.find(p => p.id === current.id);
      if (matched) {
        this.selectedProject.set(matched);
      }
    }
  }

  onSelectProject(project: ProjectItem): void {
    this.selectedProject.set(project);
  }

  onCloseProjectModal(): void {
    this.selectedProject.set(null);
  }

  onOpenEducationCerts(): void {
    this.isEducationCertsOpen.set(true);
  }

  onCloseEducationCerts(): void {
    this.isEducationCertsOpen.set(false);
  }
}
