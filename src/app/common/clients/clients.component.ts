import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-clients',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './clients.component.html',
    styleUrl: './clients.component.scss'
})
export class ClientsComponent {
    @Input() gradient: boolean = false;
    logos: string[] = [
        'assets/images/clients/1.png',
        'assets/images/clients/2.jpg',
        'assets/images/clients/3.jpg',
        'assets/images/clients/4.jpg',
        'assets/images/clients/5.jpg',
        'assets/images/clients/6.jpg',
        'assets/images/clients/7.jpg',
        'assets/images/clients/8.jpg',
        'assets/images/clients/9.jpg',
        'assets/images/clients/10.jpg',
        'assets/images/clients/11.jpg',
        'assets/images/clients/12.jpg',
        'assets/images/clients/13.jpg',
        'assets/images/clients/14.jpg',
        'assets/images/clients/15.jpg',
        'assets/images/clients/16.jpg',
    ];
}


