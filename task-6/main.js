const prompt = require('prompt');
prompt.start();

prompt.get('input', function(err,result) {
   
    let a= parseInt(result.input.split(',')[0])
    let b= parseInt(result.input.split(',')[1])
    console.log(a*b);

  });   
