import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  heroImage: string;
  images: string[];
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private title = inject(Title);

  project: ProjectData | null = null;
  error: string | null = null;

  // Static project data - no HTTP needed
  private projectsData = {
    "p1": {
      "id": "p1",
      "title": "King Faisal Specialist Hospital and Research Center",
      "description": "The contract involved the construction of a new medical center north of Jeddah, including several medical buildings, research and academic buildings, an admin building, several utility buildings, and associated infrastructure. The contract's value was about 3.7 billion SARs (nearly 1 billion USDs).",
      "heroImage": "assets/Images/projects/1.webp",
      "images": [
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
      ]
    },
    "p2": {
      "id": "p2",
      "title": "General Authority for Economic Zones",
      "description": "Raising the efficiency of the fire network, changing the fire pump group, and establishing an external network with a total of 13 million Egyptian pounds.",
      "heroImage": "assets/Images/projects/1.webp",
      "images": [
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
      ]
    },
    "p3": {
      "id": "p3",
      "title": "Industrial Infrastructure Development",
      "description": "Comprehensive industrial facility construction with advanced firefighting systems, HVAC infrastructure, and electrical distribution networks.",
      "heroImage": "assets/Images/projects/1.webp",
      "images": [
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
      ]
    },
    "p4": {
      "id": "p4",
      "title": "Smart City Infrastructure Project",
      "description": "Modern urban development including smart grid systems, automated fire suppression networks, and integrated building management systems.",
      "heroImage": "assets/Images/projects/1.webp",
      "images": [
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
      ]
    },
    "p5": {
      "id": "p5",
      "title": "Maritime Port Expansion",
      "description": "Large-scale port development with advanced cargo handling systems, fire safety infrastructure, and electrical power distribution networks.",
      "heroImage": "assets/Images/projects/1.webp",
      "images": [
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
        "assets/Images/projects/2.webp",
      ]
    },
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      if (projectId) {
        this.loadProject(projectId);
        const project = this.projectsData[projectId as keyof typeof this.projectsData];
        if (project) {
          this.title.setTitle(`${project.title} | Motahda Group`);
        }
      }
    });
  }

  private loadProject(projectId: string) {
    const project = this.projectsData[projectId as keyof typeof this.projectsData];
    if (project) {
      this.project = project;
      this.error = null;
    } else {
      this.error = `Project "${projectId}" not found.`;
      this.project = null;
    }
  }

}
