import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    // Company information
    companyName: string = 'Motahida';
    companyTagline: string = 'GROUP';
    companyAddress: string = 'Mokattam, New Cairo, Egypt';
    companyDescription: string = '';

    // Company contact information
    companyEmail: string = 'info@motahda.com';
    companyWhatsapp: string = '96891428180'; // Oman WhatsApp number without + sign
    companyWhatsappString: string = '+968 9142 8180'; // Display format

    // Social media links
    socialLinks = {
        facebook: 'https://www.facebook.com/quantumpmc',
        instagram: 'https://www.instagram.com/quantumpmc',
        twitter: 'https://www.twitter.com/quantumpmc',
        linkedin: 'https://www.linkedin.com/company/quantumpmc'
    };

    // Current year for copyright
    currentYear: number = new Date().getFullYear();
}
