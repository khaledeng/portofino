import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  public initSeo(lang: 'en' | 'ar' = 'en'): void {
    this.updateLanguageAndMeta(lang);
    this.injectJsonLd();
  }

  public updateLanguageAndMeta(lang: 'en' | 'ar'): void {
    const htmlElement = this.document.documentElement;
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    if (lang === 'ar') {
      this.title.setTitle('خالد أحمد عزت | مهندس شبكات ومطور مواقع ويب Full-Stack (.NET & Angular) | قنا، مصر');
      this.meta.updateTag({
        name: 'description',
        content: 'خالد أحمد عزت، خريج كلية حاسبات و معلومات جامعة جنوب الوادي (قنا) ومطور برمجيات متكامل Full-Stack (.NET & Angular) وأخصائي شبكات CCNA في قنا، مصر. متخصص في بناء تطبيقات ويب تفاعلية وقواعد بيانات قوية وحلول برمجية حديثة.'
      });
      this.meta.updateTag({ property: 'og:title', content: 'خالد أحمد عزت | مهندس شبكات ومطور مواقع ويب Full-Stack (.NET & Angular) | قنا، مصر' });
      this.meta.updateTag({
        property: 'og:description',
        content: 'الموقع الشخصي للمهندس خالد أحمد عزت: مشاريع تخرج ITI، تطبيقات Angular، واجهات ASP.NET Core، وخبرات هندسة الشبكات وقواعد البيانات.'
      });
    } else {
      this.title.setTitle('Khaled Ahmed Ezzat | Full-Stack Developer (.NET & Angular) | Qena, Egypt');
      this.meta.updateTag({
        name: 'description',
        content: 'Khaled Ahmed Ezzat is an IT graduate, Full-Stack Developer (.NET & Angular), and CCNA networking specialist based in Qena, Egypt. Hands-on expertise in ASP.NET Core Web API, Angular, SQL Server, and game development instruction.'
      });
      this.meta.updateTag({ property: 'og:title', content: 'Khaled Ahmed Ezzat | Full-Stack Developer (.NET & Angular) | Qena, Egypt' });
      this.meta.updateTag({
        property: 'og:description',
        content: 'Explore Khaled Ahmed Ezzat’s developer portfolio: Full-stack .NET & Angular web solutions, ITI graduation projects, database design, and networking credentials.'
      });
    }

    this.meta.updateTag({ property: 'og:type', content: 'profile' });
    this.meta.updateTag({ property: 'og:image', content: 'assets/images/khaled-profile.jpg' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  private injectJsonLd(): void {
    const scriptId = 'portfolio-jsonld';
    let script = this.document.getElementById(scriptId) as HTMLScriptElement;

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': 'https://khaled-ezzat.dev/#person',
          name: 'Khaled Ahmed Ezzat',
          alternateName: 'خالد أحمد عزت',
          jobTitle: 'Full-Stack Developer (.NET & Angular) & Programming Instructor',
          description: 'IT graduate and Full-Stack Developer specializing in ASP.NET Core, Angular, SQL Server, and CCNA networking.',
          image: 'assets/images/khaled-profile.jpg',
          email: 'mailto:khaled.pro.963@gmail.com',
          telephone: '+201062568365',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Qena',
            addressRegion: 'Qena Governorate',
            addressCountry: 'EG'
          },
          alumniOf: [
            {
              '@type': 'EducationalOrganization',
              name: 'South Valley University',
              department: 'Faculty of Computers and Information'
            },
            {
              '@type': 'EducationalOrganization',
              name: 'Information Technology Institute (ITI)',
              department: 'Full Stack Web & Generative AI Development'
            }
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'iSchool',
            jobTitle: 'Programming Instructor – Game Development'
          },
          knowsAbout: [
            'Angular',
            'TypeScript',
            'ASP.NET Core Web API',
            'C#',
            '.NET Core',
            'SQL Server',
            'MySQL',
            'Entity Framework Core',
            'Routing and Switching',
            'CCNA',
            'Generative AI'
          ],
          sameAs: [
            'https://github.com/khaled-ezzat',
            'https://www.linkedin.com/in/khaled-ezzat3/'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': 'https://khaled-ezzat.dev/#website',
          url: 'https://khaled-ezzat.dev',
          name: 'Khaled Ahmed Ezzat Portfolio',
          author: {
            '@id': 'https://khaled-ezzat.dev/#person'
          },
          description: 'Official portfolio of Khaled Ahmed Ezzat - Full-Stack Developer & IT Graduate in Qena, Egypt.'
        }
      ]
    };

    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.text = JSON.stringify(structuredData);
  }
}
