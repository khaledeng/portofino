import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationItem, CertificationItem } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-education-certs',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    @if (isOpen) {
      <div class="modal-backdrop" (click)="close.emit()" role="dialog" aria-modal="true" aria-labelledby="certs-modal-title">
        <div class="modal-dialog glass-card animate-fade-in" (click)="$event.stopPropagation()">
          <!-- Header -->
          <div class="modal-header">
            <div class="header-left">
              <div class="modal-badge">{{ currentLang === 'ar' ? 'المؤهلات والشهادات' : 'Credentials' }}</div>
              <h2 id="certs-modal-title" class="modal-title">{{ title }}</h2>
            </div>

            <button type="button" class="close-btn" (click)="close.emit()" [attr.aria-label]="currentLang === 'ar' ? 'إغلاق نافذة المؤهلات' : 'Close credentials modal'">
              <app-icon name="close" [size]="20" strokeMode="currentColor"></app-icon>
            </button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <!-- Academic Degrees -->
            <section class="section-group">
              <h3 class="group-title">
                <app-icon name="graduation-cap" [size]="20" strokeMode="#00e599"></app-icon>
                <span>{{ currentLang === 'ar' ? 'التعليم الجامعي والدبلومات' : 'Higher Education & Diplomas' }}</span>
              </h3>

              <div class="items-stack">
                @for (edu of degrees; track edu.degree) {
                  <div class="credential-item">
                    <div class="item-header">
                      <div>
                        <h4 class="item-title">{{ edu.degree }}</h4>
                        <p class="item-subtitle">{{ edu.institution }}</p>
                      </div>
                      <span class="item-period">{{ edu.period }}</span>
                    </div>

                    @if (edu.graduationProject) {
                      <div class="grad-project-box">
                        <span class="grad-label">{{ currentLang === 'ar' ? 'مشروع التخرج:' : 'Graduation Project:' }}</span>
                        <span class="grad-name">{{ edu.graduationProject.name }}</span>
                        <span class="grad-grade">{{ currentLang === 'ar' ? ('التقدير: ' + edu.graduationProject.grade) : ('Grade: ' + edu.graduationProject.grade) }}</span>
                      </div>
                    }

                    <ul class="highlights-list">
                      @for (hl of edu.highlights; track hl) {
                        <li>
                          <span class="hl-dot"></span>
                          <span>{{ hl }}</span>
                        </li>
                      }
                    </ul>
                  </div>
                }
              </div>
            </section>

            <!-- Professional Certifications -->
            <section class="section-group">
              <h3 class="group-title">
                <app-icon name="certificate" [size]="20" strokeMode="#00e599"></app-icon>
                <span>{{ certsTitle }}</span>
              </h3>

              <div class="items-stack">
                @for (cert of certifications; track cert.title) {
                  <div class="credential-item">
                    <div class="item-header">
                      <div>
                        <h4 class="item-title">{{ cert.title }}</h4>
                        <p class="item-subtitle">{{ cert.issuer }}</p>
                      </div>
                      @if (cert.period || cert.hours) {
                        <span class="item-period">{{ cert.hours || cert.period }}</span>
                      }
                    </div>

                    @if (cert.score) {
                      <div class="score-badge">{{ currentLang === 'ar' ? cert.score : ('Official Score: ' + cert.score) }}</div>
                    }

                    <ul class="highlights-list">
                      @for (detail of cert.details; track detail) {
                        <li>
                          <span class="hl-dot"></span>
                          <span>{{ detail }}</span>
                        </li>
                      }
                    </ul>

                    @if (cert.imagePreview) {
                      <div class="cert-preview-container">
                        <img [src]="cert.imagePreview" [alt]="cert.title + ' Certificate'" class="cert-image" loading="lazy" />
                      </div>
                    }
                  </div>
                }
              </div>
            </section>
          </div>

          <!-- Footer -->
          <div class="modal-footer">
            <button type="button" class="modal-btn primary" (click)="close.emit()">
              <span>{{ currentLang === 'ar' ? 'إغلاق' : 'Close' }}</span>
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background-color: rgba(6, 9, 13, 0.85);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }

    .modal-dialog {
      width: 100%;
      max-width: 780px;
      max-height: 88vh;
      display: flex;
      flex-direction: column;
      background-color: #131922;
      border: 1px solid rgba(0, 229, 153, 0.3);
      border-radius: var(--radius-lg);
      padding: 2rem;
      overflow-y: auto;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 229, 153, 0.1);
    }

    .modal-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      padding-bottom: 1.25rem;
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 1.5rem;
    }

    .header-left {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .modal-badge {
      display: inline-block;
      align-self: flex-start;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--accent);
      background-color: rgba(0, 229, 153, 0.1);
      border: 1px solid rgba(0, 229, 153, 0.25);
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-pill);
      letter-spacing: 0.03em;
    }

    .modal-title {
      font-family: var(--font-heading);
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--text-primary);
      margin: 0.2rem 0;
    }

    .close-btn {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-sm);
      border: 1px solid var(--border-color);
      color: var(--text-secondary);
      transition: all var(--transition-fast);
      flex-shrink: 0;

      &:hover {
        color: var(--text-primary);
        border-color: var(--accent);
      }
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .section-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .group-title {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      font-family: var(--font-heading);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .items-stack {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .credential-item {
      padding: 1.25rem;
      border-radius: var(--radius-md);
      background-color: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .item-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;

      @media (max-width: 600px) {
        flex-direction: column;
      }
    }

    .item-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--accent);
      margin: 0;
    }

    .item-subtitle {
      font-size: 0.88rem;
      color: var(--text-secondary);
      margin-top: 0.2rem;
    }

    .item-period {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text-muted);
      white-space: nowrap;
    }

    .grad-project-box {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.6rem;
      padding: 0.55rem 0.85rem;
      border-radius: var(--radius-sm);
      background-color: rgba(0, 229, 153, 0.06);
      border: 1px solid rgba(0, 229, 153, 0.2);
      font-size: 0.88rem;
    }

    .grad-label {
      color: var(--text-secondary);
    }

    .grad-name {
      font-weight: 600;
      color: var(--text-primary);
    }

    .grad-grade {
      color: var(--accent);
      font-weight: 700;
    }

    .score-badge {
      display: inline-block;
      align-self: flex-start;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--accent);
      background: rgba(0, 229, 153, 0.08);
      padding: 0.25rem 0.6rem;
      border-radius: var(--radius-sm);
    }

    .highlights-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
    }

    .highlights-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
      font-size: 0.88rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }

    .hl-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: var(--accent);
      margin-top: 0.55rem;
      flex-shrink: 0;
    }

    .cert-preview-container {
      margin-top: 0.5rem;
      border-radius: var(--radius-md);
      overflow: hidden;
      border: 1px solid var(--border-color);
      max-height: 280px;

      .cert-image {
        width: 100%;
        height: 100%;
        max-height: 280px;
        object-fit: contain;
        background-color: #0b0f14;
      }
    }

    .modal-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-color);
      margin-top: 1.75rem;
    }

    .modal-btn.primary {
      padding: 0.65rem 1.4rem;
      border-radius: var(--radius-sm);
      background-color: var(--accent);
      color: #0b0f14;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all var(--transition-fast);

      &:hover {
        background-color: #00ffaa;
      }
    }
  `]
})
export class EducationCertsComponent {
  @Input() isOpen: boolean = false;
  @Input() currentLang: 'en' | 'ar' = 'en';
  @Input() title: string = 'Education & Certifications';
  @Input() certsTitle: string = 'Certifications & Professional Programs';
  @Input() degrees: EducationItem[] = [];
  @Input() certifications: CertificationItem[] = [];

  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen) {
      this.close.emit();
    }
  }
}
