import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule],
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

  projects = [
    {
      id: 'p1',
      image: 'assets/Images/projects/1.webp',
      title: 'King Faisal Specialist Hospital and Research Center',
      text: 'The contract involved the construction of a new medical center north of Jeddah, including several medical buildings, research and academic buildings, an admin building, several utility buildings, and associated infrastructure. The contract\'s value was about 3.7 billion SARs (nearly 1 billion USDs).',
    },
    {
      id: 'p2',
      image: 'assets/Images/projects/1.webp',
      title: 'General Authority for Economic Zones',
      text: 'Raising the efficiency of the fire network, changing the fire pump group, and establishing an external network with a total of 13 million Egyptian pounds.',
    },
    {
      id: 'p3',
      image: 'assets/Images/projects/1.webp',
      title: 'Industrial Infrastructure Development',
      text: 'Comprehensive industrial facility construction with advanced firefighting systems, HVAC infrastructure, and electrical distribution networks.',
    },
    {
      id: 'p4',
      image: 'assets/Images/projects/1.webp',
      title: 'Smart City Infrastructure Project',
      text: 'Modern urban development including smart grid systems, automated fire suppression networks, and integrated building management systems.',
    },
    {
      id: 'p5',
      image: 'assets/Images/projects/1.webp',
      title: 'Maritime Port Expansion',
      text: 'Large-scale port development with advanced cargo handling systems, fire safety infrastructure, and electrical power distribution networks.',
    }
  ];

  partners = Array.from({ length: 10 }).map((_, i) => `assets/Images/cropped-logo-180x180.png`);

  constructor(private title: Title) {
    this.title.setTitle('Motahida Group - Home');
  }

  scroll(id: 'proj' | 'logo', dir: 1 | -1) {
    const track = document.getElementById(id === 'proj' ? 'projTrack' : 'logoTrack');
    if (!track) { return; }
    const amount = id === 'proj' ? 320 : 240;
    track.scrollBy({ left: amount * dir, behavior: 'smooth' });
  }

  responsiveOptions = [

    {
      breakpoint: '1360px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1200px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '992px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
