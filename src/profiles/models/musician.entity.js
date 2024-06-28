export class Musician {
    constructor(id, name, description, available) {
        this.id = id;
        this.fullName = fullName;
        this.description = description;
        this.available = available;
        this.status = this.available === true ? 'Available' : 'Unavailable';
    }


    static fromDisplayableMusician(displayableMusician) {
        return new Musician(
            displayableMusician.id,
            displayableMusician.fullName,
            displayableMusician.description,
            displayableMusician.status.label === 'Available');
    }


    static toDisplayableMusician(musician) {
        return {
            id: musician.id,
            name: musician.fullName,
            description: musician.description,
            status: musician.available === true ? 'Available' : 'Unavailable'
        };
    }

}
