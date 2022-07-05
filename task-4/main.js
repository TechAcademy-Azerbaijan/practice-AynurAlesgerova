const prompt = require('prompt');
prompt.start();

prompt.get('input', function(err,result) {
    let a=parseInt(result.input)


    let x= (a-1)+ (a-2)
    console.log(x);
    
  }); 
