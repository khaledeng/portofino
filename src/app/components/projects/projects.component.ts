import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItem } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <article id="projects" class="projects-card glass-card">
      <!-- Card Header with Folder Icon & View All link -->
      <div class="card-header">
        <div class="header-title">
          <app-icon name="folder" [size]="20" strokeMode="#00e599" [strokeWidth]="2"></app-icon>
          <h2>{{ title }}</h2>
        </div>

        <button type="button" class="view-all-link" (click)="openAllProjects.emit()">
          <span>{{ viewAllText }}</span>
          <app-icon name="chevron-right" [size]="14" strokeMode="currentColor"></app-icon>
        </button>
      </div>

      <!-- Projects List Items matching Screenshot -->
      <div class="projects-list">
        @for (project of projects; track project.id) {
          <div
            class="project-item"
            (click)="selectProject.emit(project)"
            role="button"
            tabindex="0"
            (keydown.enter)="selectProject.emit(project)"
            (keydown.space)="selectProject.emit(project); $event.preventDefault()"
            [attr.aria-label]="'View details for ' + project.title"
          >
            <!-- Project Icon Box -->
            <div class="project-icon-box" [ngClass]="'icon-' + project.icon">
              <app-icon [name]="project.icon" [size]="20"></app-icon>
            </div>

            <!-- Project Details -->
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-tech">{{ getTechSummary(project.techStack) }}</p>
            </div>

            <!-- Arrow Indicator -->
            <div class="project-arrow">
              <app-icon name="chevron-right" [size]="18" strokeMode="currentColor"></app-icon>
            </div>
          </div>
        }
      </div>
    </article>
  `,
  styles: [`
    .projects-card {
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

    .view-all-link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text-secondary);
      transition: color var(--transition-fast);

      &:hover {
        color: var(--accent);
      }
    }

    .projects-list {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .project-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.85rem 1rem;
      background-color: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: all var(--transition-fast);

      &:hover {
        border-color: rgba(0, 229, 153, 0.35);
        background-color: rgba(0, 229, 153, 0.04);
        transform: translateX(3px);

        [dir="rtl"] & {
          transform: translateX(-3px);
        }

        .project-arrow {
          color: var(--accent);
          transform: translateX(2px);

          [dir="rtl"] & {
            transform: translateX(-2px);
          }
        }
      }
    }

    .project-icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: var(--radius-sm);
      background-color: rgba(0, 229, 153, 0.1);
      color: var(--accent);
      flex-shrink: 0;

      &.icon-cart {
        background-color: rgba(56, 189, 248, 0.12);
        color: #38bdf8;
      }

      &.icon-globe {
        background-color: rgba(45, 212, 191, 0.12);
        color: #2dd4bf;
      }

      &.icon-network {
        background-color: rgba(16, 185, 129, 0.12);
        color: #10b981;
      }
    }

    .project-info {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .project-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
    }

    .project-tech {
      font-size: 0.8rem;
      color: var(--text-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
    }

    .project-arrow {
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-fast);
      flex-shrink: 0;
    }
  `]
})
export class ProjectsComponent {
  @Input() title: string = 'Projects';
  @Input() viewAllText: string = 'View All';
  @Input() projects: ProjectItem[] = [];

  @Output() selectProject = new EventEmitter<ProjectItem>();
  @Output() openAllProjects = new EventEmitter<void>();

  getTechSummary(stack: string[]): string {
    return stack.slice(0, 4).join(' · ');
  }
}
