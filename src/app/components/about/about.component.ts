import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <article id="about" class="about-card glass-card">
      <!-- Card Header -->
      <div class="card-header">
        <div class="header-title">
          <app-icon name="user" [size]="20" strokeMode="#00e599" [strokeWidth]="2"></app-icon>
          <h2>{{ title }}</h2>
        </div>
      </div>

      <!-- Card Body: Strict CV Content -->
      <div class="card-body">
        @for (p of paragraphs; track $index) {
          <p class="about-paragraph">{{ p }}</p>
        }
      </div>

      <!-- Card Footer: Status Indicator -->
      <div class="card-footer">
        <div class="status-indicator">
          <span class="status-dot"></span>
          <span class="status-text">{{ statusBadge }}</span>
        </div>

        <button type="button" class="certs-link-btn" (click)="openCertificates.emit()">
          <app-icon name="certificate" [size]="16" strokeMode="currentColor"></app-icon>
          <span>{{ viewCertsText }}</span>
        </button>
      </div>
    </article>
  `,
  styles: [`
    .about-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1.6rem;
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;
    }

    .header-title {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      h2 {
        font-family: var(--font-heading);
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0;
      }
    }

    .card-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      margin-bottom: 1.5rem;
    }

    .about-paragraph {
      font-size: 0.95rem;
      color: var(--text-secondary);
      line-height: 1.65;
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.75rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .status-indicator {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
    }

    .status-text {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--accent);
    }

    .certs-link-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.82rem;
      color: var(--text-secondary);
      padding: 0.35rem 0.65rem;
      border-radius: var(--radius-pill);
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.02);
      transition: all var(--transition-fast);

      &:hover {
        color: var(--accent);
        border-color: var(--accent-border);
        background: var(--accent-muted);
      }
    }
  `]
})
export class AboutComponent {
  @Input() title: string = 'About Me';
  @Input() paragraphs: string[] = [];
  @Input() statusBadge: string = 'Always open to new opportunities.';
  @Input() viewCertsText: string = 'View Certifications';

  @Output() openCertificates = new EventEmitter<void>();
}
