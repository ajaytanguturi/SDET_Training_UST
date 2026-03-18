let str3: string="correspondence";
let resul:string="";
for(let i=0;i<str3.length;i++){
    let count=0;
    for(let j=0;j<str3.length;j++){
        if(str3[j]==str3[i]) count++;
    }
    if(count==1 && str3[i]=='a' && str3[i]=='e' && str3[i]=='o' && str3[i]=='u'){
        resul=resul+str[i];
    }
}
console.log(resul.length);