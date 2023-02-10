function extesibleObject(){
    function ExtensibleObject(){}
        ExtensibleObject.prototype.extend = function(template){
Object.entries(template).forEach(([key, value]) => {
    if(value instanceof Function){
        Object.getPrototypeOf(this)[key] = value
    }else{
this[key] = value;
    }
});
        }
        return new ExtensibleObject();
    }
    const myObj = extesibleObject();
    console.log(myObj);
const template = {
    extensionMethod : function(){

    }, extensionProperty:'somethig'
}
myObj.extend(template);
console.log(myObj);