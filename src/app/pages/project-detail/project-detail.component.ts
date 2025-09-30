import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ProjectDataService, ProjectData } from '../../services/project-data.service';

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
  private projectDataService = inject(ProjectDataService);

  project: ProjectData | null = null;
  error: string | null = null;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = params['id'];
      if (projectId) {
        this.loadProject(projectId);
        const project = this.projectDataService.getProjectById(projectId);
        if (project) {
          this.title.setTitle(`${project.title} | Motahida Group`);
        }
      }
    });
  }

  private loadProject(projectId: string) {
    const project = this.projectDataService.getProjectById(projectId);
    if (project) {
      this.project = project;
      this.error = null;
    } else {
      this.error = `Project "${projectId}" not found.`;
      this.project = null;
    }
  }

}
