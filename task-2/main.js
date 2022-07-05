const prompt = require('prompt');
prompt.start();

prompt.get('input', function(err,result) {
    let a=parseInt(result.input)

    let count=0
    for (let i = 1; i <= a; i++) {
        if(a%i==0){
            count=count+1
        }
        
    }
    
    if (count<=2) {
        console.log("Yes");
    }
    else{
        console.log("No");
    }
    
  });   
