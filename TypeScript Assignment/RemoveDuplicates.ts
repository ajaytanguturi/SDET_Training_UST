let str1:string ="correspondence";
let result:string="";
for(let i=0;i<str1.length;i++){
    let count=0;
    for(let j=0;j<str1.length;j++){
        if(str1[i]==str1[j]){
            count++;
        }
    }
    if(count==1){
        result=result+str1[i];
    }
}
console.log(result);