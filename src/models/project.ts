namespace App {
  export enum ProjectStatus {
    Active,
    Finished,
  }

  //project Type

  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus
    ) {}
  }
}
