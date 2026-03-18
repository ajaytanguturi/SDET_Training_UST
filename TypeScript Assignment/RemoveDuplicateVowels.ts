let str2: string="correspondence";
let res ="";
for(let i=0;i<str2.length;i++){
    let ch=str2[i];
    if(ch!=='a'&& ch!=='e' && ch!=='i'&& ch!=='o'&&ch!=='u'){
        res+=ch;
    }
}
console.log(res);