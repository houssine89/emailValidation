function validate(email){
  let index = email.indexOf('@');
  
     if(index === -1 || index ===0 || index === email.length-1){
         return false
       }
  
  let dotIndex = email.indexOf('.',index);
    if(dotIndex === -1 || dotIndex === index+1 || dotIndex === email.length-1){
     return false
    }
  
   
     if(email === ' '){
       return false 
       
   } 
return true;
  }
console.log(validate('joe@example.com'))
