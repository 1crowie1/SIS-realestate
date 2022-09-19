/**
 * Abstract Class AbstractStreetService.
 *
 * @class AbstractStreetService
 */

class AbstractStreetService {

    constructor() {
        if (this.constructor == AbstractStreetService) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
  
    say() {
        throw new Error("Method 'say()' must be implemented.");
    }
  
    eat() {
        console.log("eating");
    }
}