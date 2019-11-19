class SortedList {
    constructor(items, length) {
      this.items = [];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.items.sort(function (a, b){
        if(a < b) return -1;
        if(a > b) return 1;
        if(a === b) return 0;
      })
      this.length++
    }
    get(pos) {
      if(pos <= this.length){
        return this.items[pos];
      } else {
        throw new Error("OutOfBounds");
      }
    }
    // à changer le max()
    max(high) { 
      if(high === this.items[pos]){ 
        return this.items[high];
      } else {
        throw new Error("EmptySortedList");
      }
    }
    min() {}
    average() {}
    sum() {}
  };
  
  module.exports = SortedList;