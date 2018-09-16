class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.Comparator = (a, b) => a - b;
    
  }

  add(element) {
    // your implementation
    this.arr.push(element);
    
  
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation    
    return this.arr;    
  }

  sort(indices) {
    // your implementation
   
    var ArrayIndices = []; //массив для входящих индексов
    for (var n = 0; n<indices.length; n++) {
    ArrayIndices[n] = indices[n];
    }
    ArrayIndices.sort(function(a, b) {
      return a - b;}); //отсортировали индексы по возраст
    var arr2 = []; //массив для значений этих индексов
    for (var j = 0; j<ArrayIndices.length; j++) {
      arr2[j] = this.arr[ArrayIndices[j]];
    }
         
    arr2.sort(this.Comparator);//отсортировали значения в массиве
    for (var k = 0; k<arr2.length; k++) 
    {
      this.arr[ArrayIndices[k]] = arr2[k];
     
    }

  }

  setComparator(compareFunction) {
    // your implementation
       
    if (compareFunction !== undefined) {
      this.Comparator = compareFunction;
          
      }
          
        
  }
        
  
}

module.exports = Sorter;