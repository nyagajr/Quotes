export class Quote {
  public showAuthor:boolean;
constructor(
public id: number,
public quote: string,
public author: string,
public completeDate:Date,
public upvote:number,
public downvote:number

)
{ this.showAuthor= false}

}
