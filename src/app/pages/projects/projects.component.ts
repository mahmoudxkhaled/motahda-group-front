import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BannerComponent } from '../../common/banner/banner.component';
import { ProjectDataService, ProjectListItem } from '../../services/project-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, BannerComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private title = inject(Title);
  private projectDataService = inject(ProjectDataService);

  projects: ProjectListItem[] = [];

  constructor() {
    this.title.setTitle('Projects | Motahida  Group');
    this.projects = this.projectDataService.getProjectsForListing();
  }

  getProjectImages(projectId: string): string[] {
    const project = this.projectDataService.getProjectById(projectId);
    return project?.images ?? [];
  }
}
