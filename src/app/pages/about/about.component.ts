import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../common/banner/banner.component';
import { ClientsComponent } from '../../common/clients/clients.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, BannerComponent, ClientsComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private title: Title) {
    this.title.setTitle('About | Motahida Group');
  }
}
