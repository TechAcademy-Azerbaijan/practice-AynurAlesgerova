const prompt = require('prompt');
prompt.start();

prompt.get('input', function(err,result) {
    let a=result.input.split(',')[0]
    let b= result.input.split(',')[1]

    let number=1
    for (let i = a; i <=b; i++) {
        number=number*i
        
    }
    // console.log(number);

    if (number>0) {
        console.log("1");
    }
    else if(number<0){
        console.log("-1");
    }
    else{
        console.log("0");
    }

  
   
  });   
