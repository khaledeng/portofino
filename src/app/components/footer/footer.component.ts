import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <footer class="portfolio-footer">
      <div class="container footer-container">
        <!-- Copyright Text -->
        <div class="footer-left">
          <p class="copyright-text">{{ copyright }}</p>
        </div>

        <!-- Built With Angular Badge -->
        <div class="footer-center">
          <span class="built-text">{{ builtWith }}</span>
          <app-icon name="angular" [size]="18"></app-icon>
        </div>

        <!-- Motto -->
        <div class="footer-right">
          <span class="motto-text">{{ motto }}</span>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .portfolio-footer {
      padding: 2.2rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      background-color: rgba(11, 15, 20, 0.9);
      margin-top: 3.5rem;
    }

    .footer-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }
    }

    .copyright-text {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin: 0;
    }

    .footer-center {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: var(--text-secondary);
      padding: 0.35rem 0.75rem;
      border-radius: var(--radius-pill);
      background-color: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .motto-text {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-muted);
      letter-spacing: 0.06em;
    }
  `]
})
export class FooterComponent {
  @Input() copyright: string = 'Khaled Ahmed Ezzat © 2026. All rights reserved.';
  @Input() builtWith: string = 'Built with Angular';
  @Input() motto: string = 'Code • Learn • Build';
}
