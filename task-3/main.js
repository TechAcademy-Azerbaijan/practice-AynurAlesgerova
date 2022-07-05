const prompt = require('prompt');
prompt.start();

prompt.get('input', function(err,result) {
   
    let arr= result.input.split(',')

for (let i=arr.length-1; i>=0;i--) {
    console.log(arr[i]);
    
}
  });   
