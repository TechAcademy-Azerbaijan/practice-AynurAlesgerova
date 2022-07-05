const prompt = require('prompt');
prompt.start();

prompt.get('input', function(err,result) {
    let array=result.input.split(',')

    let max=0
    for (let i = 0; i < array.length; i++) {
        if (max<array[i]) {
            max=array[i]
        }
        
    }
    console.log(max);

   
    
  });   
