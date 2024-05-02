export class Musician {
    constructor(id, name, description, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.available = available;
        this.status = this.available === true ? 'Available' : 'Unavailable';
    }


    static fromDisplayableMusician(displayableMusician) {
        return new Musician(
            displayableMusician.id,
            displayableMusician.name,
            displayableMusician.description,
            displayableMusician.status.label === 'Available');
    }


    static toDisplayableMusician(musician) {
        return {
            id: musician.id,
            name: musician.name,
            description: musician.description,
            status: musician.available === true ? 'Available' : 'Unavailable'
        };
    }

}
