export class Bookstore {
    #id = '';
    #isbn = '';
    #title = '';
    #author = '';
    #price = 0.0;
    #quantity = 0;
  
    get Id() {
      return this.#id;
    }
  
    set Id(id) {
      this.#id = id;
    }
  
    get Isbn() {
      return this.#isbn;
    }
  
    set Isbn(isbn) {
      this.#isbn = isbn;
    }
  
    get Title() {
      return this.#title;
    }
  
    set Title(title) {
      this.#title = title;
    }
  
    get Author() {
      return this.#author;
    }
  
    set Author(author) {
      this.#author = author;
    }
  
    get Price() {
      return this.#price;
    }
  
    set Price(price) {
      this.#price = price;
    }
  
    get Quantity() {
      return this.#quantity;
    }
  
    set Quantity(quantity) {
      this.#quantity = quantity;
    }
  }
  