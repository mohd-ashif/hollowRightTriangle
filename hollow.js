let n = 4;
let star = '';

for (let i =0 ; i<=n ; i++){

    for (let j = i ; j <=n ; j++){
        star += ' '

    }
   
    for (let k =0 ; k< i; k++){
        if (k <= i || k == i  ){
            star +='*'
        }
      
        
    }

    star +='\n'
    
   
}

console.log(star)