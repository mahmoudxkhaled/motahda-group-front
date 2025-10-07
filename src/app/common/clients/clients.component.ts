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
    @Input() subtitle: string | null = null;
    logos: string[] = [
        'assets/images/clients/1.png',
        'assets/images/clients/2.png',
        'assets/images/clients/3.png',
        'assets/images/clients/4.png',
        'assets/images/clients/5.png',
        'assets/images/clients/6.png',
        'assets/images/clients/7.png',
        'assets/images/clients/8.png',
        'assets/images/clients/9.png',
        'assets/images/clients/10.png',
        'assets/images/clients/11.png',
        'assets/images/clients/12.png',
        'assets/images/clients/13.png',
        'assets/images/clients/14.png',
        'assets/images/clients/15.png',
        'assets/images/clients/16.png',
    ];
}


