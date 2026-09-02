//binary is a searching algo even in assending or desending order 
//target =67 
/*
target = mid
target > mid
target < mid

mid formula = first + last / 2 

first=0
last=arr.length-1
*/

let arr=[2,5,8,9,12,18,20,25,67,101,125]
let index = binarySearch(arr , 0 , arr.length-1 , 67)
function binarySearch(arr , first , last , target){
if (index== -1 )console.log("not found");
else console.log("target found at",index +"index");


    while(first<=last){
         let mid=Math.floor((first+last)/2)
         if ( arr[mid] == target) return mid
         else if (arr[mid]>target)  last=mid-1
         else (first = mid+1)
    }
   return -1;
}



// time complexity - logerthematic ( log n )