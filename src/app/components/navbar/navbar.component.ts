import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLink } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() brandName: string = 'KHALED AHMED EZZAT';
  @Input() links: NavLink[] = [];
  @Input() downloadCvText: string = 'Download CV';
  @Input() cvUrl: string = 'assets/cv/Khaled_Ahmed_Ezzat_CV.pdf';
  @Input() currentLang: 'en' | 'ar' = 'en';

  @Output() langChange = new EventEmitter<'en' | 'ar'>();
  @Output() openEducation = new EventEmitter<void>();

  public isScrolled: boolean = false;
  public isMobileMenuOpen: boolean = false;
  public activeSection: string = 'home';
  private isUserNavigating: boolean = false;
  private navTimeout: any = null;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 30;

    // If user clicked a link recently, don't let scroll-listener override activeSection
    if (this.isUserNavigating) {
      return;
    }

    const scrollPos = window.scrollY + 220;

    // 1. Check contact (bottom of page)
    const contactEl = document.getElementById('contact');
    if (contactEl && scrollPos >= contactEl.offsetTop - 50) {
      this.activeSection = 'contact';
      this.applyHighlight(contactEl, false);
      return;
    }

    // 2. Check experience
    const expEl = document.getElementById('experience');
    if (expEl && scrollPos >= expEl.offsetTop - 50) {
      this.activeSection = 'experience';
      this.applyHighlight(expEl, false);
      return;
    }

    // 3. Check bento top row cards (About, Skills, Projects)
    const bentoTop = document.querySelector('.bento-row-top') as HTMLElement;
    if (bentoTop && scrollPos >= bentoTop.offsetTop - 80) {
      // If activeSection is already one of the bento items (about, skills, projects), keep it
      if (!['about', 'skills', 'projects'].includes(this.activeSection)) {
        this.activeSection = 'about';
        const aboutEl = document.getElementById('about');
        if (aboutEl) this.applyHighlight(aboutEl, false);
      }
      return;
    }

    // 4. Hero section (top of page)
    this.activeSection = 'home';
    this.clearHighlights();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  toggleLanguage(): void {
    const nextLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.langChange.emit(nextLang);
  }

  scrollToSection(href: string): void {
    this.closeMobileMenu();
    const id = href.replace('#', '');
    
    // Set active link immediately
    this.activeSection = id === 'hero' ? 'home' : id;

    if (id === 'education') {
      this.openEducation.emit();
      return;
    }

    // Prevent scroll listener from overriding the active link during smooth scroll
    this.isUserNavigating = true;
    if (this.navTimeout) {
      clearTimeout(this.navTimeout);
    }
    this.navTimeout = setTimeout(() => {
      this.isUserNavigating = false;
    }, 1000);

    const element = document.getElementById(id);
    if (element) {
      this.applyHighlight(element, true);

      // Smooth scroll with offset for sticky navbar
      const navbarHeight = 85;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = id === 'hero' ? 0 : elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  private applyHighlight(element: HTMLElement, isUserClick: boolean): void {
    this.clearHighlights();
    element.classList.add('section-highlighted');

    if (isUserClick) {
      element.classList.remove('pulse-glow');
      void element.offsetWidth; // Force reflow
      element.classList.add('pulse-glow');
    }
  }

  private clearHighlights(): void {
    document.querySelectorAll('.section-highlighted').forEach(el => {
      el.classList.remove('section-highlighted', 'pulse-glow');
    });
  }

  downloadCv(): void {
    fetch(this.cvUrl)
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Khaled_Ahmed_Ezzat_CV.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
  }
}
