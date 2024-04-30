
export class Tutorial {
    constructor(id, name, description, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.available = available;
        this.status = this.available === true ? 'Available' : 'Unavailable';
    }


    static fromDisplayableTutorial(displayableTutorial) {
        return new Tutorial(
            displayableTutorial.id,
            displayableTutorial.name,
            displayableTutorial.description,
            displayableTutorial.status.label === 'Available');
    }


    static toDisplayableTutorial(tutorial) {
        return {
            id: tutorial.id,
            name: tutorial.name,
            description: tutorial.description,
            status: tutorial.available === true ? 'Available' : 'Unavailable'
        };
    }

}