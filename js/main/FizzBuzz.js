class FizzBuzz {
    constructor(fizz, buzz) {
      this.fizz = fizz;
      this.buzz = buzz;
    }
  
    isFizz(num) {
        if (num % this.fizz == 0) {
            return true;
        } else {
            return false;
        }  
    }
  
    isBuzz(num) {
        if (num % this.buzz == 0) {
            return true;
        } else {
            return false;
        } 
    }
  
    isFizzBuzz(num) {
        if (num % this.fizz == 0 && num % this.buzz == 0) {
            return true;
        } else {
            return false;
        }
    }
  
    getOutput(num) {
        let output = "FizzBuzz ";
        for (let i=1; i<=num; i++) {
            if (this.isFizzBuzz(i)) {
                output += "FizzBuzz ";
            } else if (this.isFizz(i)) {
                output += "Fizz ";
            } else if (this.isBuzz(i)) {
                output += "Buzz "
            } else {
                output += i + " ";
            }
        }
        return output;
    }
  }
  