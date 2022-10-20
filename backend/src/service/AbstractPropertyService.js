/**
 * Abstract Class AbstractPropertyService.
 *
 * @class AbstractPropertyService
 */

 class AbstractPropertyService {

    constructor() {
        if (this.constructor == AbstractPropertyService) {
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