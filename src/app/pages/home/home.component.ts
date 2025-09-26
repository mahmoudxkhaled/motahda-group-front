import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
      ])
    ]),
    trigger('fadeInDelayed', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(16px)' }),
        animate('700ms 150ms ease-out', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ]
})
export class HomeComponent {
  protected readonly hero = {
    title: 'Your Trusted Partner In Fire Protection',
    subtitle: 'HVAC, Electrical, And Plumbing Systems Since 2003.',
    description:
      'We provide design, supply, installation, and maintenance services aligned with NFPA, European, and Egyptian standards.'
  } as const;

  services = [
    { icon: '🧯', title: 'Automatic Sprinklers (Wet/Dry)' },
    { icon: '🧱', title: 'Standpipe Systems' },
    { icon: '💨', title: 'CO₂ and FM200 Systems' },
    { icon: '💧', title: 'Water Mist & Clean Agent Systems' },
    { icon: '🚰', title: 'Fire Pumps and Fire Tanks' },
    { icon: '📟', title: 'Addressable & Conventional Alarms' }
  ];

  projects = Array.from({ length: 8 }).map((_, i) => ({
    image: `assets/Images/muscat-airport/muscat-airport-${(i % 10) + 1}.jpg`,
    title: 'General authority for economic zones',
    text: 'Raising the efficiency of the fire network, changing the fire...',
  }));

  partners = Array.from({ length: 10 }).map((_, i) => `assets/Images/cropped-logo-180x180.png`);

  constructor(private title: Title) {
    this.title.setTitle('Motahda Group - Home');
  }

  scroll(id: 'proj' | 'logo', dir: 1 | -1) {
    const track = document.getElementById(id === 'proj' ? 'projTrack' : 'logoTrack');
    if (!track) { return; }
    const amount = id === 'proj' ? 320 : 240;
    track.scrollBy({ left: amount * dir, behavior: 'smooth' });
  }
}
