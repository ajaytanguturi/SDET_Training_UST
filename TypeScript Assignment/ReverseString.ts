let str: string="TypeScript";
let revstr: string="";
for(let i=str.length-1;i>=0;i--){
    revstr=revstr + str[i];
}
console.log(`Reversed String is : ${revstr}`);