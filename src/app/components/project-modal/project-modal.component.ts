import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItem } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    @if (project) {
      <div class="modal-backdrop" (click)="close.emit()" role="dialog" aria-modal="true" [attr.aria-labelledby]="'modal-title-' + project.id">
        <div class="modal-dialog glass-card animate-fade-in" (click)="$event.stopPropagation()">
          <!-- Modal Header -->
          <div class="modal-header">
            <div class="header-left">
              <div class="project-badge">{{ project.type }}</div>
              <h2 [id]="'modal-title-' + project.id" class="modal-title">{{ project.title }}</h2>
              <span class="modal-category">{{ project.category }}</span>
            </div>

            <button type="button" class="close-btn" (click)="close.emit()" aria-label="Close project modal">
              <app-icon name="close" [size]="20" strokeMode="currentColor"></app-icon>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="modal-body">
            <!-- Summary / Overview -->
            <div class="section-block">
              <h3 class="section-heading">{{ currentLang === 'ar' ? 'نبذة عامة' : 'Overview' }}</h3>
              <p class="description-text">{{ project.description || project.summary }}</p>
            </div>

            <!-- Key Features & Architecture -->
            <div class="section-block">
              <h3 class="section-heading">{{ currentLang === 'ar' ? 'المميزات الرئيسية والبنية البرمجية' : 'Key Features & Technical Implementation' }}</h3>
              <ul class="features-list">
                @for (feat of project.features; track $index) {
                  <li class="feature-item">
                    <span class="feature-check">
                      <app-icon name="check" [size]="14" strokeMode="#00e599"></app-icon>
                    </span>
                    <span>{{ feat }}</span>
                  </li>
                }
              </ul>
            </div>

            <!-- Technologies Used -->
            <div class="section-block">
              <h3 class="section-heading">{{ currentLang === 'ar' ? 'التقنيات والأدوات المستخدمة' : 'Technologies & Tools' }}</h3>
              <div class="tech-tags">
                @for (tech of project.techStack; track tech) {
                  <span class="tech-tag">{{ tech }}</span>
                }
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="modal-footer">
            @if (project.liveUrl && project.liveUrl !== '#') {
              <a
                [href]="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-btn accent"
              >
                <app-icon name="external-link" [size]="17" strokeMode="currentColor"></app-icon>
                <span>{{ currentLang === 'ar' ? 'معاينة حية للموقع' : 'Live Preview' }}</span>
              </a>
            }

            @if (project.githubFrontendUrl && project.githubBackendUrl) {
              <a
                [href]="project.githubFrontendUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-btn outline"
              >
                <app-icon name="github" [size]="18"></app-icon>
                <span>{{ currentLang === 'ar' ? 'مستودع Frontend (Angular)' : 'Frontend (Angular)' }}</span>
              </a>
              <a
                [href]="project.githubBackendUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-btn outline"
              >
                <app-icon name="github" [size]="18"></app-icon>
                <span>{{ currentLang === 'ar' ? 'مستودع Backend (.NET)' : 'Backend (.NET)' }}</span>
              </a>
            } @else if (project.githubUrl) {
              <a
                [href]="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="modal-btn outline"
              >
                <app-icon name="github" [size]="18"></app-icon>
                <span>{{ currentLang === 'ar' ? 'عرض على GitHub' : 'View on GitHub' }}</span>
              </a>
            }
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
      max-width: 680px;
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

    .project-badge {
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
      line-height: 1.3;
    }

    .modal-category {
      font-size: 0.85rem;
      color: var(--text-muted);
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
      gap: 1.5rem;
    }

    .section-block {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    .section-heading {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-primary);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin: 0;
    }

    .description-text {
      font-size: 0.95rem;
      color: var(--text-secondary);
      line-height: 1.65;
      margin: 0;
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }

    .feature-item {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      font-size: 0.92rem;
      color: var(--text-secondary);
      line-height: 1.55;
    }

    .feature-check {
      color: var(--accent);
      margin-top: 0.15rem;
      flex-shrink: 0;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      font-size: 0.82rem;
      font-weight: 500;
      color: var(--text-primary);
      background-color: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border-color);
      padding: 0.35rem 0.75rem;
      border-radius: var(--radius-pill);
    }

    .modal-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      gap: 0.75rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-color);
      margin-top: 1.75rem;
    }

    .modal-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.65rem 1.25rem;
      border-radius: var(--radius-sm);
      font-weight: 600;
      font-size: 0.9rem;
      transition: all var(--transition-fast);

      &.accent {
        background-color: var(--accent);
        color: #0b0f14;
        box-shadow: 0 0 16px rgba(0, 229, 153, 0.25);

        &:hover {
          background-color: #00ffaa;
          box-shadow: 0 0 22px rgba(0, 229, 153, 0.45);
          transform: translateY(-1px);
        }
      }

      &.primary {
        background-color: rgba(255, 255, 255, 0.08);
        border: 1px solid var(--border-color);
        color: var(--text-primary);

        &:hover {
          background-color: rgba(255, 255, 255, 0.15);
          border-color: var(--text-muted);
        }
      }

      &.outline {
        border: 1px solid var(--border-color);
        color: var(--text-primary);

        &:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
      }
    }
  `]
})
export class ProjectModalComponent {
  @Input() project: ProjectItem | null = null;
  @Input() currentLang: 'en' | 'ar' = 'en';
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close.emit();
  }
}
