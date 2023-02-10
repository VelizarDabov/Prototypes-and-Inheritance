(function solve(){
    //last element
    Array.prototype.last = function(){
        return this[this.length - 1];
    }
    //skip element
Array.prototype.skip = function(e){
    let result = [];
    for(let i = n; i < this.length; i++){
        result.push(this[i])
    }
    return result
};
//take element
Array.prototype.take = function(n){
    let result = [];
    for(let i = 0; i < n; i++){
result.push(this[i])
    }
    return result;
}
Array.prototype.sum = function(){
    let sum = 0;
    for(let i = 0; i < this.length; i++){
        sum += this[i];
    }
    return sum;
}
Array.prototype.average = function(){
    return this.sum() / this.length
}

})()

let arr = [1,2,3,4,5]
console.log(arr.average());
console.log(arr.last());