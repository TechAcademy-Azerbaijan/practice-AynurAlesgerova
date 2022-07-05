const prompt = require('prompt');
prompt.start();

prompt.get('input', function(err,result) {
   
    let a= parseInt(result.input)
  
    for (let i = 1; i < a; i++) {

        if (i*i<a) {
            console.log(i*i);
        }
        
        
    }

  });   
