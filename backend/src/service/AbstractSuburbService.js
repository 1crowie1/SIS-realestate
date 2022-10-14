/**
 * Abstract Class AbstractSuburbService.
 *
 * @class AbstractSuburbService
 */
 class AbstractSuburbService {

    constructor() {
      if (this.constructor == AbstractSuburbService) {
        throw new Error("Abstract classes can't be instantiated.");
      }
    }

    getSuburb
  
    say() {
      throw new Error("Method 'say()' must be implemented.");
    }
  
    eat() {
      console.log("eating");
    }
  }