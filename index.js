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
