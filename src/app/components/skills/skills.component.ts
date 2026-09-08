import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory, SkillItem } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <article id="skills" class="skills-card glass-card">
      <!-- Header with Icon & Category Filters -->
      <div class="card-header">
        <div class="header-title-row">
          <div class="header-title">
            <app-icon name="gear" [size]="20" strokeMode="#00e599" [strokeWidth]="2"></app-icon>
            <h2>{{ title }}</h2>
          </div>

          <!-- Quick Toggle Button in Header if in All mode -->
          @if (selectedCategory === 'all') {
            <button
              type="button"
              class="header-toggle-btn"
              (click)="toggleShowAll()"
              [attr.aria-expanded]="isExpanded"
            >
              <span>{{ isExpanded ? (currentLang === 'ar' ? 'عرض أقل' : 'Show Less') : (currentLang === 'ar' ? 'عرض الكل (' + totalSkillsCount + ')' : 'Show All (' + totalSkillsCount + ')') }}</span>
              <app-icon [name]="isExpanded ? 'close' : 'chevron-right'" [size]="12" strokeMode="currentColor"></app-icon>
            </button>
          }
        </div>

        <!-- Filter Chips -->
        <div class="category-filters">
          <button
            type="button"
            class="filter-chip"
            [class.active]="selectedCategory === 'all'"
            (click)="selectCategory('all')"
          >
            {{ filterAll }}
          </button>
          @for (cat of categories; track cat.id) {
            <button
              type="button"
              class="filter-chip"
              [class.active]="selectedCategory === cat.id"
              (click)="selectCategory(cat.id)"
            >
              {{ cat.label }}
            </button>
          }
        </div>
      </div>

      <!-- Skills Badges Grid -->
      <div class="skills-grid" [class.expanded]="isExpanded">
        @for (skill of displayedSkills; track skill.name) {
          <div class="skill-badge animate-fade-in" [class.highlighted]="skill.highlight">
            <div class="skill-icon">
              <app-icon [name]="skill.iconType" [size]="18"></app-icon>
            </div>
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        }
      </div>

      <!-- Footer Action / Show All Toggle Button -->
      @if (selectedCategory === 'all' && totalSkillsCount > defaultLimit) {
        <div class="card-footer">
          <button
            type="button"
            class="show-more-btn"
            (click)="toggleShowAll()"
          >
            <span class="btn-text">
              {{ isExpanded 
                  ? (currentLang === 'ar' ? 'عرض المهارات الأساسية فقط' : 'Show Core Skills Only') 
                  : (currentLang === 'ar' ? 'عرض جميع المهارات (' + totalSkillsCount + ' مهارة)' : 'Show All Skills (' + totalSkillsCount + ')') 
              }}
            </span>
            <app-icon [name]="isExpanded ? 'close' : 'chevron-right'" [size]="14" strokeMode="currentColor"></app-icon>
          </button>
        </div>
      }
    </article>
  `,
  styles: [`
    .skills-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1.6rem;
      transition: all var(--transition-normal);
    }

    .card-header {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      margin-bottom: 1.25rem;
    }

    .header-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
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

    .header-toggle-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--accent);
      padding: 0.25rem 0.6rem;
      border-radius: var(--radius-pill);
      background: rgba(0, 229, 153, 0.08);
      border: 1px solid rgba(0, 229, 153, 0.2);
      transition: all var(--transition-fast);

      &:hover {
        background: var(--accent);
        color: var(--text-inverse);
        border-color: var(--accent);
      }
    }

    .category-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .filter-chip {
      font-size: 0.76rem;
      font-weight: 600;
      color: var(--text-secondary);
      background-color: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.07);
      padding: 0.28rem 0.65rem;
      border-radius: var(--radius-pill);
      transition: all var(--transition-fast);

      &:hover {
        color: var(--text-primary);
        border-color: rgba(255, 255, 255, 0.2);
      }

      &.active {
        color: #0b0f14;
        background-color: var(--accent);
        border-color: var(--accent);
        box-shadow: 0 0 10px rgba(0, 229, 153, 0.35);
      }
    }

    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
      align-content: flex-start;
      flex: 1;
    }

    .skill-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.85rem;
      background-color: rgba(255, 255, 255, 0.025);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-pill);
      transition: all var(--transition-fast);

      &:hover {
        border-color: rgba(0, 229, 153, 0.4);
        background-color: rgba(0, 229, 153, 0.06);
        transform: translateY(-2px);
      }

      &.highlighted {
        border-color: rgba(255, 255, 255, 0.14);
        background-color: rgba(255, 255, 255, 0.04);
      }
    }

    .skill-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .skill-name {
      font-size: 0.86rem;
      font-weight: 500;
      color: var(--text-primary);
      white-space: nowrap;
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 1.1rem;
      margin-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .show-more-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.45rem 1rem;
      border-radius: var(--radius-pill);
      border: 1px solid var(--border-color);
      background: rgba(255, 255, 255, 0.02);
      color: var(--text-secondary);
      font-size: 0.82rem;
      font-weight: 600;
      transition: all var(--transition-fast);

      &:hover {
        color: var(--accent);
        border-color: var(--accent-border);
        background: var(--accent-muted);
      }
    }
  `]
})
export class SkillsComponent implements OnInit, OnChanges {
  @Input() title: string = 'Technical Skills';
  @Input() filterAll: string = 'All Skills';
  @Input() categories: SkillCategory[] = [];
  @Input() currentLang: 'en' | 'ar' = 'en';

  public selectedCategory: string = 'all';
  public displayedSkills: SkillItem[] = [];
  public isExpanded: boolean = false;
  public totalSkillsCount: number = 0;
  public readonly defaultLimit: number = 10;

  // The 10 prioritized core skills matching the screenshot reference
  private readonly coreSkillNames = [
    'Angular',
    'TypeScript',
    'ASP.NET Core Web API',
    'C#',
    'SQL Server',
    'MySQL',
    'Entity Framework Core',
    'Networking / CCNA',
    'JWT Authentication',
    'Git / GitHub'
  ];

  ngOnInit(): void {
    this.calculateTotalSkills();
    this.updateDisplayedSkills();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categories']) {
      this.calculateTotalSkills();
      this.updateDisplayedSkills();
    }
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
    this.updateDisplayedSkills();
  }

  toggleShowAll(): void {
    this.isExpanded = !this.isExpanded;
    this.updateDisplayedSkills();
  }

  private calculateTotalSkills(): void {
    const seen = new Set<string>();
    for (const cat of this.categories) {
      for (const skill of cat.skills) {
        seen.add(skill.name);
      }
    }
    this.totalSkillsCount = seen.size;
  }

  private updateDisplayedSkills(): void {
    if (this.selectedCategory === 'all') {
      const all: SkillItem[] = [];
      const seen = new Set<string>();
      
      for (const cat of this.categories) {
        for (const skill of cat.skills) {
          if (!seen.has(skill.name)) {
            seen.add(skill.name);
            all.push(skill);
          }
        }
      }

      if (!this.isExpanded) {
        // Prioritize the 10 core skills from the screenshot
        const prioritized = all.filter(s => 
          this.coreSkillNames.some(core => s.name.toLowerCase().includes(core.toLowerCase()) || core.toLowerCase().includes(s.name.toLowerCase()))
        );

        // If fewer than defaultLimit found, top up from the remaining skills
        if (prioritized.length < this.defaultLimit) {
          const remaining = all.filter(s => !prioritized.includes(s));
          prioritized.push(...remaining.slice(0, this.defaultLimit - prioritized.length));
        }

        this.displayedSkills = prioritized.slice(0, this.defaultLimit);
      } else {
        this.displayedSkills = all;
      }
    } else {
      const targetCat = this.categories.find(c => c.id === this.selectedCategory);
      this.displayedSkills = targetCat ? targetCat.skills : [];
    }
  }
}
