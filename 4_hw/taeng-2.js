class Vector {
    constructor(components) {
      this.components = components;
    }
  
    add(other) {
      if (this.components.length !== other.components.length) {
        throw new Error('Vectors must have the same length for addition.');
      }
      const result = this.components.map((value, index) => value + other.components[index]);
      return new Vector(result);
    }
  
    subtract(other) {
      if (this.components.length !== other.components.length) {
        throw new Error('Vectors must have the same length for subtraction.');
      }
      const result = this.components.map((value, index) => value - other.components[index]);
      return new Vector(result);
    }
  
    dot(other) {
      if (this.components.length !== other.components.length) {
        throw new Error('Vectors must have the same length for dot product.');
      }
      const result = this.components.reduce((sum, value, index) => sum + value * other.components[index], 0);
      return result;
    }
  
    norm() {
      const squaredSum = this.components.reduce((sum, value) => sum + value * value, 0);
      return Math.sqrt(squaredSum);
    }
  
    toString() {
      return `(${this.components.join(',')})`;
    }
  
    equals(other) {
      if (this.components.length !== other.components.length) {
        return false;
      }
      return this.components.every((value, index) => value === other.components[index]);
    }
  }