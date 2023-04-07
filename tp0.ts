
// Exo 0
interface Person {
    name: string;
    age: number;
    licence: boolean;
}
let aPerson: Person = {name: "John", age: 34, licence: true};
console.log(aPerson);

// Exo 1
function pourToiPourMoi(name: string = "") : string {
    if(!name){
        return "Un pour toi, un pour moi";
    }
    return `Un pour ${name}, un pour moi`;
}

console.log(pourToiPourMoi());

// Exo 2
function tellBob(sentence: string): string {
    if(sentence.endsWith("?")){
        return "Bien sur";
    }
    if(!sentence.toUpperCase().localeCompare(sentence)){
        return "Du calme";
    }
    if(!sentence){
        return "Ok, si tu veux";
    }
    return "Peu m'importe";
}
console.log(tellBob("Est-ce que ?"));
console.log(tellBob("HELLO"));

// Exo 3
const alphabet = "abcdefghijklmnopqrstuvwxyz"

function isPangram(sentence: string): boolean {
    sentence = sentence.toLowerCase();
    for(let lettre of alphabet){
        if(sentence.indexOf(lettre) == -1){
            return false;
        }
    }
    return true;
}

console.log(isPangram("portez ce vieux whisky au juge blond qui fume"));

// Exo 4

const allergies = ["oeuf", "cacahuète", "fruit de mer", 
"fraise", "tomate", "chocolat", "pollen", "chats"]

class Patient {
    private score: number;

    constructor(score: number) {
        this.score = score;
    }

    isAllergicTo(allergie: string): boolean {
        return (this.score & (1 << allergies.indexOf(allergie))) != 0;
    }

    listAllergies(): string[] {        
        return allergies.filter(a => this.isAllergicTo(a));
    }

}

let dude = new Patient(34);
console.log(dude.isAllergicTo("chocolat"));
console.log(dude.listAllergies());

// Exo 6


class MyNode<T> {
    public val: any; 
    public next: MyNode<T>|undefined;
    public prev: MyNode<T>|undefined;
    
    constructor(val: T){
        this.val = val;
        this.prev = this.next = undefined;
    }

    extract(){
        if(this.prev != undefined && this.next != undefined){
            this.prev.next = this.next;
            this.next.prev = this.prev;
        }
        this.prev = this.next = undefined;
    }

}

class DoubleLinkedList<T> {
    private head: MyNode<T>|undefined;
    private tail: MyNode<T>|undefined;
    
    push(val: any) : void{
        let node = new MyNode<T>(val);
        if(this.head == undefined){
            this.head = this.tail = node;
            node.next = node.prev = node;
            return;
        }
        this.tail.next = node;
        node.next = this.head;
        node.prev = this.tail;
        this.tail = node;
    }

    unshift(val: any){
        this.push(val);
        let tmp = this.tail;
        this.head = tmp;
        this.tail = tmp.prev;
    }

    pop(): any{
        let node = this.tail;
        if(!node) return node;
        if(this.head == this.tail){
            this.head = this.tail = undefined;
            return node.val;
        }
        this.tail = node.prev;
        this.tail.next = this.head;
        node.extract();
        return node.val;
    }

    shift(): any {
        this.head = this.head.next;
        this.tail = this.tail.next;
        return this.pop();
    }

    print(): void{
        if(this.head == undefined) return;
        let tmp = this.head;
        let txt = ""+ tmp.val;
        tmp = tmp.next;
        while(tmp != this.head){
            txt += " -> " + tmp.val;
            tmp = tmp.next;
        }
        console.log(txt);
    }
}

let list = new DoubleLinkedList();
list.push("e");
list.push("a");
list.unshift("c");
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
