class Hex {
    constructor (value){
        this.value = value;
    
    }
    valueOF(){
        return this.value;
    }
    toString(){
        let hex = this.value.toString(16).toUpperCase();
        let result = `0x${hex}`;
        return result;
    }
    plus(num){
        let result = this.value + Number(num);
        return `0x${result.toString(16).toUpperCase()}`;
    }
    minus(num)
    {
        let result = this.value - Number(num);
        return `0x${result.toString(16).toUpperCase()}`;
    }
 
    parse(num)
    {
        return parseInt(num, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
