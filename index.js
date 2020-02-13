// Add your functions here
function map(array, func ){
  let newArray =[];
  for (let element of array)
  {
       let val = func(element);
       newArray.push(val);
  }
  return newArray;
}
function reduce(array,func,start){
   let val = 0;
  if(typeof(start) ==='undefined'){
    val = 0;
  }
  else val=start;
  if (typeof func(true,true) == 'boolean') val =true 

  for(let element of array){
    val = func(element,val);
    
  }
  return val;
}
/* another solution for reduce 
function reduce (arr,fn,startingValue=0){
  let sum =0,memo=0;
  for(let i=0; i<arr.length; i++){
    memo += arr[i-1]
    sum = fn(arr[i],memo + startingValue)
  }
  return sum 
}*/
