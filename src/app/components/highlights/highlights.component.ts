import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightStat } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="highlights-section">
      <div class="container">
        <div class="highlights-grid">
          @for (stat of stats; track stat.id) {
            <div class="stat-card glass-card" [title]="stat.description || ''">
              <div class="stat-icon-wrapper">
                <app-icon [name]="stat.icon" [size]="24" strokeMode="currentColor" [strokeWidth]="1.8"></app-icon>
              </div>
              <div class="stat-info">
                <h2 class="stat-title">{{ stat.title }}</h2>
                <p class="stat-subtitle">{{ stat.subtitle }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .highlights-section {
      padding: 1.5rem 0 2.5rem;
    }

    .highlights-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.25rem;

      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }

    .stat-card {
      display: flex;
      align-items: center;
      gap: 1.15rem;
      padding: 1.2rem 1.4rem;
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      transition: all var(--transition-fast);

      &:hover {
        border-color: rgba(0, 229, 153, 0.4);
        transform: translateY(-2px);
        background-color: var(--bg-card-hover);

        .stat-icon-wrapper {
          color: #00ffaa;
          transform: scale(1.08);
        }
      }
    }

    .stat-icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      flex-shrink: 0;
      color: var(--accent);
      transition: transform var(--transition-fast);
    }

    .stat-info {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      min-width: 0;
    }

    .stat-title {
      font-family: var(--font-heading);
      font-size: 1.12rem;
      font-weight: 700;
      color: var(--text-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
    }

    .stat-subtitle {
      font-size: 0.85rem;
      color: var(--text-secondary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
    }
  `]
})
export class HighlightsComponent {
  @Input() stats: HighlightStat[] = [];
}
