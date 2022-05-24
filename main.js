class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }


 get title() {
    return this._title;
  }
 get isCheckedOut() {
    return this._isCheckedOut;
  }
get ratings() {
    return this._ratings;
  }

 set tittle(tittle) {
     this._tittle = tittle;
  }
 set isCheckedOut(isCheckedOut) {
   this._isCheckedOut = isCheckedOut;
  }
set ratings(ratings) {
  this._ratings = ratings;
  }


  toggleCheckOutStatus() {
  this._isCheckedOut = !this._isCheckedOut;
}
getAverageRating(){
let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
return ratingsSum / this.ratings.length;
}
addRating(inputValue) {
  this.ratings.push(inputValue);
}
} ////


class Book extends Media {


  constructor(author, title, pages){
     super(title);
     this._author = author;
     this._pages = pages;
  }


get author() {
    return this._author;
  }
get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime){
     super(title);
     super._director = director;
     this._runTime = runTime;
  }
get director() {
    return this._director;
  }
get runTime() {
    return this._runTime;
  }
 
}
class CD extends Media {
  constructor(band, title, numberOfSongs){
     super(title);
     super._band = band;
     this._numberOfSongs= numberOfSongs;
  }
get band() {
    return this._band;
  }
get numberOfSongs() {
    return this._numberOfSongs;
  }
 
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 166);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const mammoth = new CD('Under Acid Hoof', 'Acid Mammoth', 5);
mammoth.toggleCheckOutStatus();
console.log(mammoth.isCheckedOut);
mammoth.addRating(4);
mammoth.addRating(5);
mammoth.addRating(5);
console.log(mammoth.getAverageRating());
