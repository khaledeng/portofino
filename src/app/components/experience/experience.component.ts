import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceItem } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <article id="experience" class="experience-card glass-card">
      <!-- Card Header -->
      <div class="card-header">
        <div class="header-title">
          <app-icon name="briefcase" [size]="20" strokeMode="#00e599" [strokeWidth]="2"></app-icon>
          <h2>{{ title }}</h2>
        </div>

        @if (items.length > 0) {
          <span class="period-badge">{{ items[0].period }}</span>
        }
      </div>

      <!-- Experience Items -->
      <div class="experience-list">
        @for (item of items; track item.id) {
          <div class="experience-item">
            <!-- Icon Box -->
            <div class="role-icon-box">
              <app-icon [name]="item.icon" [size]="22"></app-icon>
              <span class="company-badge">{{ item.company }}</span>
            </div>

            <!-- Role & Bullets -->
            <div class="experience-details">
              <div class="role-header">
                <h3 class="role-title">{{ item.role }}</h3>
                <span class="company-type">{{ item.company }} | {{ item.employmentType }}</span>
              </div>

              <ul class="bullet-list">
                @for (bullet of item.bullets; track $index) {
                  <li class="bullet-item">
                    <span class="bullet-dot"></span>
                    <span>{{ bullet }}</span>
                  </li>
                }
              </ul>
            </div>
          </div>
        }
      </div>
    </article>
  `,
  styles: [`
    .experience-card {
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

    .period-badge {
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--text-muted);
    }

    .experience-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .experience-item {
      display: flex;
      gap: 1.25rem;

      @media (max-width: 600px) {
        flex-direction: column;
        gap: 0.85rem;
      }
    }

    .role-icon-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      width: 72px;
      height: 72px;
      border-radius: var(--radius-md);
      background-color: rgba(0, 229, 153, 0.08);
      border: 1px solid rgba(0, 229, 153, 0.2);
      color: var(--accent);
      flex-shrink: 0;

      .company-badge {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.04em;
      }
    }

    .experience-details {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      flex: 1;
    }

    .role-header {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .role-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--accent);
      margin: 0;
    }

    .company-type {
      font-size: 0.82rem;
      color: var(--text-secondary);
      font-weight: 500;
    }

    .bullet-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
      padding: 0;
      margin: 0;
    }

    .bullet-item {
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.55;
    }

    .bullet-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: var(--accent);
      margin-top: 0.55rem;
      flex-shrink: 0;
    }
  `]
})
export class ExperienceComponent {
  @Input() title: string = 'Experience';
  @Input() items: ExperienceItem[] = [];
}
