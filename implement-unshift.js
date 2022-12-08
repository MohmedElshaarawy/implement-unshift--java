const add = (arr, ...newVal) => {
    let x= arr.length + newVal.length -1; 
    for( x ; x >= newVal.length; x--) {    
        arr[x] = arr[x - newVal.length ]; 
                                          
                                          
                                        
                                        
                                                                           
    }                                      
    for(x; x >= 0; x--) {         
        arr[x] = newVal[x];                
    }                            
    return arr.length;           
}                                 
array = [7,8,9];              
console.log(add(array,4,5,6));
console.log(array);



// Notes
// x=(4) + (2)-1 start by 5