import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfo } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/icons/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() info!: PersonalInfo;
  @Input() firstName: string = 'Khaled';
  @Input() highlightName: string = 'Ahmed';
  @Input() lastName: string = 'Ezzat';
  @Input() greeting: string = "Hello, I'm";
  @Input() rolesText: string = 'Full-Stack Developer (.NET & Angular) | Networking (CCNA)';
  @Input() bioText: string = '';
  @Input() viewProjectsBtn: string = 'View Projects';
  @Input() contactBtn: string = 'Contact Me';
  @Input() floatingBadges: string[] = ['Build', 'Learn', 'Grow'];

  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
