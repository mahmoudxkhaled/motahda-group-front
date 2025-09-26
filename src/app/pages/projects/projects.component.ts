import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BannerComponent } from '../../common/banner/banner.component';

interface ProjectListItem {
  id: string;
  title: string;
  description: string;
  heroImage: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, BannerComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private title: Title) {
    this.title.setTitle('Projects | Motahda Group');
  }

  projects: ProjectListItem[] = [
    {
      id: 'king-faisal',
      title: 'King Faisal Specialist Hospital and Research Center',
      description: 'The contract involved the construction of a new medical center north of Jeddah, including several medical buildings, research and academic buildings, an admin building, several utility buildings, and associated infrastructure. The contract\'s value was about 3.7 billion SARs (nearly 1 billion USDs).',
      heroImage: 'assets/Images/projects/1.webp'
    },
    {
      id: 'p2',
      title: 'General Authority for Economic Zones',
      description: 'Raising the efficiency of the fire network, changing the fire pump group, and establishing an external network with a total of 13 million Egyptian pounds.',
      heroImage: 'assets/Images/projects/1.webp'
    },
    {
      id: 'p3',
      title: 'Industrial Infrastructure Development',
      description: 'Comprehensive industrial facility construction with advanced firefighting systems, HVAC infrastructure, and electrical distribution networks.',
      heroImage: 'assets/Images/projects/1.webp'
    },
    {
      id: 'p4',
      title: 'Smart City Infrastructure Project',
      description: 'Modern urban development including smart grid systems, automated fire suppression networks, and integrated building management systems.',
      heroImage: 'assets/Images/projects/1.webp'
    },
    {
      id: 'p5',
      title: 'Maritime Port Expansion',
      description: 'Large-scale port development with advanced cargo handling systems, fire safety infrastructure, and electrical power distribution networks.',
      heroImage: 'assets/Images/projects/1.webp'
    }
  ];
}
