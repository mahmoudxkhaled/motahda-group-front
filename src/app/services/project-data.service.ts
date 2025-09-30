import { Injectable } from '@angular/core';

export interface ProjectData {
    id: string;
    title: string;
    projectDescription: string;
    companyScope: string;
    heroImage: string;
    images: string[];
}

export interface ProjectListItem {
    id: string;
    title: string;
    description: string;
    heroImage: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProjectDataService {

    private projectsData: { [key: string]: ProjectData } = {
        "p1": {
            "id": "p1",
            "title": "Ismailia Road Tunnels Project",
            "projectDescription": "The project involved the construction of two road tunnels under Suez Canal, with a total length of 10 km.",
            "companyScope": "Installation, testing & commissioning of the tunnels' Fire Fighting network (water-based), including 2 pump stations. Installation, testing & commissioning of the tunnels' Storm Water Drainage system, including 4 pump stations.",
            "heroImage": "assets/images/projects/ismailia/ismailia-1.jpg",
            "images": [
                "assets/images/projects/ismailia/ismailia-1.jpg",
                "assets/images/projects/ismailia/ismailia-2.jpg",
                "assets/images/projects/ismailia/ismailia-3.jpg",
                "assets/images/projects/ismailia/Ismailia-4.jpg",
                "assets/images/projects/ismailia/ismailia-5.jpg",
                "assets/images/projects/ismailia/ismailia-6.jpg",
                "assets/images/projects/ismailia/ismailia-7.jpg",
                "assets/images/projects/ismailia/ismailia-8.jpg",
                "assets/images/projects/ismailia/ismailia-9.jpg"
            ]
        },
        "p2": {
            "id": "p2",
            "title": "Bugesera International Airport Project (Phase 1)",
            "projectDescription": "Phase 1 involved the Construction of the Airport's infrastructure and utility buildings & networks.",
            "companyScope": "Installation of the Electrical Power equipment within the Airport's main Substation (incl. MV/LV switchgear, transformers, and telecom systems). Supply & Installation of Fire Fighting Network (water system, and FM200).",
            "heroImage": "assets/images/projects/bugasera/bugasera-1.jpg",
            "images": [
                "assets/images/projects/bugasera/bugasera-1.jpg",
                "assets/images/projects/bugasera/bugasera-2.jpg",
                "assets/images/projects/bugasera/bugasera-3.jpg",
                "assets/images/projects/bugasera/bugasera-4.jpg",
                "assets/images/projects/bugasera/bugasera-5.jpg",
                "assets/images/projects/bugasera/bugasera-6.jpg",
                "assets/images/projects/bugasera/bugasera-7.jpg",
                "assets/images/projects/bugasera/bugasera-8.jpg",
                "assets/images/projects/bugasera/bugasera-9.jpg",
                "assets/images/projects/bugasera/bugasera-10.jpg"
            ]
        },
        "p3": {
            "id": "p3",
            "title": "Galala City Main Domestic & Irrigation Water Stations",
            "projectDescription": "The project involved the construction of 2 main water stations for the city of Galala in Suez. The two stations are the city's main supply stations for domestic & irrigation water.",
            "companyScope": "Supply, installation, testing & commissioning of Fire Fighting networks: Water based system, CO₂ system, and FM200 system.",
            "heroImage": "assets/images/projects/galala/galala-1.jpg",
            "images": [
                "assets/images/projects/galala/galala-1.jpg",
                "assets/images/projects/galala/galala-2.jpg",
                "assets/images/projects/galala/galala-3.jpg",
                "assets/images/projects/galala/galala-4.jpg"
            ]
        },
        "p4": {
            "id": "p4",
            "title": "General Authority for Economic Zones Project",
            "projectDescription": "The project involved the MEP works of the head quarters of the Egyptian Authority of Economic Zones.",
            "companyScope": "Dismantling of the existing Fire Fighting pump station. Supply, installation, testing and commissioning of a new Fire Fighting pump station. Supply, installation, testing and commissioning of a new external Fire Hydrant network.",
            "heroImage": "assets/images/projects/authority/authority-1.jpg",
            "images": [
                "assets/images/projects/authority/authority-1.jpg",
                "assets/images/projects/authority/authority-2.jpg",
                "assets/images/projects/authority/authority-3.jpg",
                "assets/images/projects/authority/authority-4.jpg",
                "assets/images/projects/authority/authority-5.jpg",
                "assets/images/projects/authority/authority-6.jpg"
            ]
        },
        "p5": {
            "id": "p5",
            "title": "Knauf Gypsum Board Factory Project",
            "projectDescription": "The construction of Knauf Gypsum Board factory in Suez, Egypt.",
            "companyScope": "Supply, installation, testing and commissioning of Fire Fighting networks: Water based system, and FM200 system.",
            "heroImage": "assets/images/projects/knauf/knauf-1.jpg",
            "images": [
                "assets/images/projects/knauf/knauf-1.jpg",
                "assets/images/projects/knauf/knauf-2.jpg",
                "assets/images/projects/knauf/knauf-3.jpg",
                "assets/images/projects/knauf/knauf-4.jpg",
                "assets/images/projects/knauf/knauf-5.jpg",
                "assets/images/projects/knauf/knauf-6.jpg"
            ]
        },
        "p6": {
            "id": "p6",
            "title": "National Bank of Egypt - Central Storage Warehouses Project",
            "projectDescription": "The project involved the construction of a 36,000 m² warehouses (phase 1) for the National Bank of Egypt.",
            "companyScope": "Installation, testing, and commissioning of the warehouses' Fire Fighting network (water-based), including a 2,000 gpm pumping station.",
            "heroImage": "assets/images/projects/bank/bank-1.jpg",
            "images": [
                "assets/images/projects/bank/bank-1.jpg",
                "assets/images/projects/bank/bank-2.jpg",
                "assets/images/projects/bank/bank-3.jpg",
                "assets/images/projects/bank/bank-4.jpg"
            ]
        },
        "p7": {
            "id": "p7",
            "title": "Kuraymat Power Generation Station",
            "projectDescription": "The project involved the full refurbishment of the fire fighting system of Kuraymat power generation station.",
            "companyScope": "Dismantling the existing Fire Fighting network. Supply, installation, testing and commissioning of a new Fire Fighting network (water-based). Refurbishment of existing Pump House.",
            "heroImage": "assets/images/projects/kuraimat/kuraimat-1.jpg",
            "images": [
                "assets/images/projects/kuraimat/kuraimat-1.jpg",
                "assets/images/projects/kuraimat/kuraimat-2.jpg",
                "assets/images/projects/kuraimat/kuraimat-3.jpg",
                "assets/images/projects/kuraimat/kuraimat-4.jpg",
                "assets/images/projects/kuraimat/kuraimat-5.jpg"
            ]
        },
        "p8": {
            "id": "p8",
            "title": "Shopping Malls",
            "projectDescription": "The company supported in the construction of several Shopping malls in Egypt (in Asyut, Mansoura, Ismailia & Alexandria).",
            "companyScope": "Supply, Installation testing and commissioning of fire fighting networks.",
            "heroImage": "assets/images/projects/malls/malls-1.jpg",
            "images": [
                "assets/images/projects/malls/malls-1.jpg",
                "assets/images/projects/malls/malls-2.jpg",
                "assets/images/projects/malls/malls-3.jpg",
                "assets/images/projects/malls/malls-4.jpg",
                "assets/images/projects/malls/malls-5.jpg",
                "assets/images/projects/malls/malls-6.jpg"
            ]
        },
    };

    getProjectById(id: string): ProjectData | null {
        return this.projectsData[id] || null;
    }

    getAllProjects(): ProjectData[] {
        return Object.values(this.projectsData);
    }

    getProjectsForListing(): ProjectListItem[] {
        return Object.values(this.projectsData).map(project => ({
            id: project.id,
            title: project.title,
            description: `${project.projectDescription}`,
            heroImage: project.heroImage
        }));
    }

    getProjectsForHome(): Array<{ id: string, image: string, title: string, text: string }> {
        return Object.values(this.projectsData).map(project => ({
            id: project.id,
            image: project.heroImage,
            title: project.title,
            text: `${project.projectDescription}`
        }));
    }
}
