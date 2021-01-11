export class Credit {
    id:number;
    actorId:number;
    movieId:number;
    role:string;

    constructor(id:number=0, actorId:number=0, movieId:number=0, role:string="") {
        this.id=id;
        this.actorId=actorId;
        this.movieId=movieId;
        this.role=role;

    }
}