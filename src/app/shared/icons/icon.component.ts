import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.viewBox]="viewBox"
      [attr.width]="size"
      [attr.height]="size"
      [attr.fill]="fillMode"
      [attr.stroke]="strokeMode"
      [attr.stroke-width]="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="app-icon"
      [ngClass]="customClass"
      aria-hidden="true"
    >
      <!-- Monogram Logo K -->
      @if (name === 'logo') {
        <path d="M4 2v20M4 12l14-10M7.5 9.5L18 22" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      }

      <!-- GitHub -->
      @else if (name === 'github') {
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="currentColor"/>
      }

      <!-- LinkedIn -->
      @else if (name === 'linkedin') {
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37h2.79V10.9H6.46M7.86 6.28a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" fill="currentColor" />
      }

      <!-- Graduation Cap -->
      @else if (name === 'graduation-cap') {
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Certificate -->
      @else if (name === 'certificate') {
        <circle cx="12" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M15.4 13.5L18 21l-6-3.5L6 21l2.6-7.5" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Code / Brackets -->
      @else if (name === 'code') {
        <polyline points="16 18 22 12 16 6" fill="none" stroke="currentColor" stroke-width="2"/>
        <polyline points="8 6 2 12 8 18" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Network / CCNA -->
      @else if (name === 'network') {
        <rect x="9" y="2" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="2"/>
        <rect x="2" y="16" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="2"/>
        <rect x="16" y="16" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M5 16v-5h14v5M12 8v3" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Cisco -->
      @else if (name === 'cisco') {
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M8 12h8M12 8v8M8 8l8 8M16 8l-8 8" fill="none" stroke="currentColor" stroke-width="1.8"/>
      }

      <!-- Angular -->
      @else if (name === 'angular') {
        <path d="M12 2L2 5.5l1.6 13.3L12 22l8.4-3.2L22 5.5 12 2z" fill="#E23237"/>
        <path d="M12 4.2v15.3l6.5-2.5L19.8 7 12 4.2z" fill="#B52E31"/>
        <path d="M12 6.5L6.5 17.5h2.4l1.1-2.8h4l1.1 2.8h2.4L12 6.5zm1.3 6.4h-2.6L12 9.7l1.3 3.2z" fill="#FFFFFF"/>
      }

      <!-- TypeScript -->
      @else if (name === 'typescript') {
        <rect width="24" height="24" rx="4" fill="#3178C6"/>
        <path d="M5 10h6m-3 0v9M13 16.5c.8.6 1.8 1 2.9 1 1.2 0 1.9-.5 1.9-1.3 0-1.8-4.5-.8-4.5-3.8 0-1.5 1.2-2.7 3.3-2.7 1 0 1.8.3 2.5.7l-.6 1.6c-.6-.4-1.2-.6-1.9-.6-1 0-1.6.5-1.6 1.1 0 1.7 4.5.8 4.5 3.8 0 1.6-1.3 2.8-3.6 2.8-1.1 0-2.2-.4-3-1l.6-1.6z" fill="#FFFFFF"/>
      }

      <!-- .NET Core / ASP.NET -->
      @else if (name === 'dotnet') {
        <circle cx="12" cy="12" r="10" fill="#512BD4"/>
        <path d="M7 8v8M10 8l4 8V8M17 8h4M19 8v8" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round"/>
      }

      <!-- C# -->
      @else if (name === 'csharp') {
        <circle cx="12" cy="12" r="10" fill="#239120"/>
        <path d="M12 6a6 6 0 1 0 4 2.5l-2 1.5A3.5 3.5 0 1 1 12 8.5" fill="#FFFFFF"/>
        <path d="M15 11h5M15 14h5M16.5 9.5v6M18.5 9.5v6" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
      }

      <!-- SQL Server -->
      @else if (name === 'sqlserver') {
        <ellipse cx="12" cy="5" rx="8" ry="3" fill="none" stroke="#CC292B" stroke-width="2"/>
        <path d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5" fill="none" stroke="#CC292B" stroke-width="2"/>
        <path d="M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7" fill="none" stroke="#CC292B" stroke-width="2"/>
      }

      <!-- MySQL -->
      @else if (name === 'mysql') {
        <ellipse cx="12" cy="5" rx="8" ry="3" fill="none" stroke="#00758F" stroke-width="2"/>
        <path d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5" fill="none" stroke="#00758F" stroke-width="2"/>
        <path d="M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7" fill="none" stroke="#00758F" stroke-width="2"/>
      }

      <!-- Database -->
      @else if (name === 'database') {
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- API -->
      @else if (name === 'api') {
        <path d="M4 14h6m-3-3v6M13 11h5a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-5v-4zM2 6h20v12H2z" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- JWT -->
      @else if (name === 'jwt') {
        <path d="M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4z" fill="none" stroke="#00e599" stroke-width="2"/>
        <polyline points="9 12 11 14 15 10" fill="none" stroke="#00e599" stroke-width="2"/>
      }

      <!-- AI / GenAI -->
      @else if (name === 'ai') {
        <path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M19 17l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor"/>
      }

      <!-- Git / GitHub -->
      @else if (name === 'git') {
        <circle cx="6" cy="6" r="3" fill="none" stroke="#F05032" stroke-width="2"/>
        <circle cx="6" cy="18" r="3" fill="none" stroke="#F05032" stroke-width="2"/>
        <circle cx="18" cy="9" r="3" fill="none" stroke="#F05032" stroke-width="2"/>
        <path d="M6 9v6M9 6h4a5 5 0 0 1 5 5" fill="none" stroke="#F05032" stroke-width="2"/>
      }

      <!-- Node.js -->
      @else if (name === 'nodejs') {
        <polygon points="12 2 21 7.2 21 16.8 12 22 3 16.8 3 7.2 12 2" fill="none" stroke="#5FA04E" stroke-width="2"/>
      }

      <!-- Python -->
      @else if (name === 'python') {
        <path d="M12 3c-4.4 0-4.1 1.9-4.1 1.9v2h4.2v.6H6.2S2 7 2 11.4s3.7 4.3 3.7 4.3h2.2v-2.1s-.1-2.4 2.4-2.4h4.1s2.3 0 2.3-2.3V5.3s.4-2.3-4.7-2.3zm-1.8 1.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB"/>
        <path d="M12 21c4.4 0 4.1-1.9 4.1-1.9v-2h-4.2v-.6h5.9s4.2.5 4.2-3.9-3.7-4.3-3.7-4.3h-2.2v2.1s.1 2.4-2.4 2.4H9.6s-2.3 0-2.3 2.3v3.4s-.4 2.3 4.7 2.3zm1.8-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD438"/>
      }

      <!-- Visual Studio -->
      @else if (name === 'visualstudio') {
        <path d="M17.5 2L8.5 9 4 5.5 2 7l3.5 5L2 17l2 1.5 4.5-3.5 9 7 4.5-2V4l-4.5-2zm0 4.5v11L10 12l7.5-5.5z" fill="#5C2D91"/>
      }

      <!-- VS Code -->
      @else if (name === 'vscode') {
        <path d="M17 2l5 2.5v15L17 22l-8-7-5 3.8-2-1.4 4.5-5.4L2 6.6l2-1.4 5 3.8 8-7zm0 4.8L11 12l6 5.2V6.8z" fill="#007ACC"/>
      }

      <!-- HTML5 -->
      @else if (name === 'html5') {
        <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3zm14 6h-8l.3 3h7.4l-.6 6.3-5.1 1.4-5.1-1.4-.3-3.3h2.4l.2 1.7 2.8.8 2.8-.8.3-3.3H6.8L6 5h11.2l-.2 3z" fill="#E34F26"/>
      }

      <!-- CSS3 -->
      @else if (name === 'css3') {
        <path d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3zm14 6h-8l.3 3h7.4l-.6 6.3-5.1 1.4-5.1-1.4-.3-3.3h2.4l.2 1.7 2.8.8 2.8-.8.3-3.3H6.8L6 5h11.2l-.2 3z" fill="#1572B6"/>
      }

      <!-- Bootstrap -->
      @else if (name === 'bootstrap') {
        <rect width="24" height="24" rx="5" fill="#7952B3"/>
        <path d="M7 6h5.5c2 0 3.2 1 3.2 2.4 0 1-.6 1.8-1.5 2.1 1.2.3 2 1.2 2 2.5 0 1.7-1.4 2.8-3.5 2.8H7V6zm2.4 3.7h2.8c.8 0 1.3-.4 1.3-1s-.5-1-1.3-1H9.4v2zm0 3.9v2.2h3.1c.9 0 1.4-.4 1.4-1.1 0-.7-.5-1.1-1.4-1.1H9.4z" fill="#FFFFFF"/>
      }

      <!-- i18n / Translate -->
      @else if (name === 'i18n' || name === 'translate') {
        <path d="M2 5h12M7 2v3M4 15l4-8 4 8M5.5 12.5h5M14 10a7 7 0 0 1 7 7M18 10a7 7 0 0 1 3 7M14 17a9 9 0 0 0 7-7" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Barbell / Gym -->
      @else if (name === 'barbell') {
        <path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12M3 12h3M18 12h3" fill="none" stroke="#00e599" stroke-width="2"/>
      }

      <!-- Cart -->
      @else if (name === 'cart') {
        <circle cx="9" cy="21" r="1" fill="currentColor"/>
        <circle cx="20" cy="21" r="1" fill="currentColor"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" fill="none" stroke="#38bdf8" stroke-width="2"/>
      }

      <!-- Globe -->
      @else if (name === 'globe') {
        <circle cx="12" cy="12" r="10" fill="none" stroke="#2dd4bf" stroke-width="2"/>
        <line x1="2" y1="12" x2="22" y2="12" stroke="#2dd4bf" stroke-width="2"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="#2dd4bf" stroke-width="2"/>
      }

      <!-- Gamepad -->
      @else if (name === 'gamepad') {
        <rect x="2" y="6" width="20" height="12" rx="6" fill="none" stroke="#00e599" stroke-width="2"/>
        <path d="M6 12h4M8 10v4M16 11h.01M18 13h.01" stroke="#00e599" stroke-width="2" stroke-linecap="round"/>
      }

      <!-- Mail -->
      @else if (name === 'mail') {
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" stroke-width="2"/>
        <polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Phone -->
      @else if (name === 'phone') {
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Location -->
      @else if (name === 'location') {
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Download -->
      @else if (name === 'download') {
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- External Link -->
      @else if (name === 'external-link') {
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Chevron Right -->
      @else if (name === 'chevron-right') {
        <polyline points="9 18 15 12 9 6" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- User -->
      @else if (name === 'user') {
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="7" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Gear / Cog -->
      @else if (name === 'gear') {
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Folder -->
      @else if (name === 'folder') {
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Briefcase -->
      @else if (name === 'briefcase') {
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Copy -->
      @else if (name === 'copy') {
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" fill="none" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Check -->
      @else if (name === 'check') {
        <polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" stroke-width="2.5"/>
      }

      <!-- Close -->
      @else if (name === 'close') {
        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2"/>
        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Menu -->
      @else if (name === 'menu') {
        <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2"/>
        <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2"/>
        <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2"/>
      }

      <!-- Default circle fallback -->
      @else {
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
      }
    </svg>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
    .app-icon {
      vertical-align: middle;
      display: inline-block;
      transition: transform 0.2s ease;
    }
  `]
})
export class IconComponent {
  @Input() name: string = '';
  @Input() size: number = 20;
  @Input() viewBox: string = '0 0 24 24';
  @Input() fillMode: string = 'currentColor';
  @Input() strokeMode: string = 'none';
  @Input() strokeWidth: number = 2;
  @Input() customClass: string = '';
}
