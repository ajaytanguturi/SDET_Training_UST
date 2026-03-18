let arr :number[] =[8,2,5,1,4,9,7,6,3];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]<arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
let output="";

for(let i=0;i<arr.length;i++){
    output+=arr[i];
    if(i!=arr.length-1){
        output=output+",";
    }
    
}
console.log(output);