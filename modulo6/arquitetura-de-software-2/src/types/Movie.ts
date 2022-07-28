export class Movie {
    constructor (
        private id: string,
        private title: string,
        private description: string,
        private duration_in_minutes: number,
        private year_of_release: number
    ) {}

    public getId = () => {
        return this.id
    }

    public getTitle = () => {
        return this.title
    }

    public getDescription = () => {
        return this.description
    }

    public getDuration_in_minutes = () => {
        return this.duration_in_minutes
    }

    public getYear_of_release = () => {
        return this.year_of_release
    }

}