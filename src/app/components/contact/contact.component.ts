import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfo } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <article id="contact" class="contact-card glass-card">
      <!-- Card Header -->
      <div class="card-header">
        <div class="header-title">
          <app-icon name="mail" [size]="20" strokeMode="#00e599" [strokeWidth]="2"></app-icon>
          <h2>{{ title }}</h2>
        </div>
        <span class="connect-tag">{{ subtitle }}</span>
      </div>

      <!-- Contact Details Grid (Matching Screenshot) -->
      <div class="contact-grid">
        <!-- Left Column: Direct Communication -->
        <div class="contact-col">
          <!-- Email with Copy Action -->
          <div
            class="contact-item clickable"
            (click)="copyToClipboard(info.email, 'email')"
            role="button"
            tabindex="0"
            [title]="copyTooltip"
          >
            <div class="contact-icon">
              <app-icon name="mail" [size]="18" strokeMode="currentColor"></app-icon>
            </div>
            <div class="contact-content">
              <span class="contact-label">{{ emailLabel }}</span>
              <span class="contact-value">{{ info.email }}</span>
            </div>
            <div class="copy-action">
              <app-icon [name]="copiedField === 'email' ? 'check' : 'copy'" [size]="14" strokeMode="currentColor"></app-icon>
            </div>
          </div>

          <!-- Phone with Copy Action -->
          <div
            class="contact-item clickable"
            (click)="copyToClipboard(info.phone, 'phone')"
            role="button"
            tabindex="0"
            [title]="copyTooltip"
          >
            <div class="contact-icon">
              <app-icon name="phone" [size]="18" strokeMode="currentColor"></app-icon>
            </div>
            <div class="contact-content">
              <span class="contact-label">{{ phoneLabel }}</span>
              <span class="contact-value" dir="ltr">{{ info.phone }}</span>
            </div>
            <div class="copy-action">
              <app-icon [name]="copiedField === 'phone' ? 'check' : 'copy'" [size]="14" strokeMode="currentColor"></app-icon>
            </div>
          </div>
        </div>

        <!-- Right Column: Location & Profiles -->
        <div class="contact-col">
          <!-- Location -->
          <div class="contact-item static">
            <div class="contact-icon accent-icon">
              <app-icon name="location" [size]="18" strokeMode="currentColor"></app-icon>
            </div>
            <div class="contact-content">
              <span class="contact-label">{{ locationLabel }}</span>
              <span class="contact-value">{{ locationValue || info.location }}</span>
            </div>
          </div>

          <!-- Social Links (LinkedIn & GitHub) -->
          <div class="social-links-row">
            <a
              [href]="info.socials.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-social-link"
              aria-label="Khaled Ahmed Ezzat on LinkedIn"
            >
              <app-icon name="linkedin" [size]="18"></app-icon>
              <span>LinkedIn</span>
            </a>

            <a
              [href]="info.socials.github"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-social-link"
              aria-label="Khaled Ahmed Ezzat on GitHub"
            >
              <app-icon name="github" [size]="18"></app-icon>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .contact-card {
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
      margin-bottom: 1.4rem;
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

    .connect-tag {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--accent);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .contact-col {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
      background-color: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all var(--transition-fast);

      &.clickable {
        cursor: pointer;

        &:hover {
          border-color: rgba(0, 229, 153, 0.35);
          background-color: rgba(0, 229, 153, 0.04);
          transform: translateY(-1px);

          .copy-action {
            opacity: 1;
            color: var(--accent);
          }
        }
      }
    }

    .contact-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      flex-shrink: 0;

      &.accent-icon {
        color: var(--accent);
      }
    }

    .contact-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      min-width: 0;
    }

    .contact-label {
      font-size: 0.72rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
    }

    .contact-value {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .copy-action {
      opacity: 0.4;
      transition: opacity var(--transition-fast), color var(--transition-fast);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .social-links-row {
      display: flex;
      gap: 0.85rem;
      align-items: center;
      margin-top: 0.15rem;
    }

    .contact-social-link {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
      background-color: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      color: var(--text-secondary);
      font-size: 0.88rem;
      font-weight: 600;
      transition: all var(--transition-fast);

      &:hover {
        color: var(--text-primary);
        border-color: rgba(0, 229, 153, 0.35);
        background-color: rgba(0, 229, 153, 0.06);
        transform: translateY(-1px);
      }
    }
  `]
})
export class ContactComponent {
  @Input() title: string = 'Contact';
  @Input() subtitle: string = "Let's connect!";
  @Input() info!: PersonalInfo;
  @Input() emailLabel: string = 'Email';
  @Input() phoneLabel: string = 'Phone';
  @Input() locationLabel: string = 'Location';
  @Input() locationValue: string = '';
  @Input() copyTooltip: string = 'Click to copy';
  @Input() copiedTooltip: string = 'Copied!';

  public copiedField: string | null = null;

  copyToClipboard(text: string, field: string): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      this.copiedField = field;
      setTimeout(() => {
        this.copiedField = null;
      }, 2200);
    }
  }
}
