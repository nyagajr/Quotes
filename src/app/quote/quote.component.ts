import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})


export class QuoteComponent implements OnInit {

  upvote=0;
  downvote = 0;
  quotes = [
  new Quote(1,'service before self','USAF',new Date(2018,3,14), 0,0 ),
  new Quote (2,'How sharper than a serpent’s tooth it is to have a thankless child!','william shakespeare',new Date(2018,6,9) ,0,0),
  new Quote (3, 'Aim High, Fly-Fight-Win','USAF',new Date(2018,1,12), 0,0),
  ]

      addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }
      deleteQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1);
            }
            }

      toogleDetails(index){
          this.quotes[index].showAuthor = !this.quotes[index].showAuthor;}

      upVote(i){
        this.quotes[i].upvote += 1;
      }
        downVote(i){
          this.quotes[i].downvote += 1;
      }
  constructor() { }

  ngOnInit() {
  }

}
