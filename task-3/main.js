const prompt = require('prompt');
prompt.start();

prompt.get('input', function(err,result) {
   
    let arr= result.input.split(',')
    let arr2 = arr.reverse()

   console.log(arr2);
  });   
