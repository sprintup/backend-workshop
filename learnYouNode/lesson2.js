// console.log(Number(process.argv[2]) + Number(process.argv[3])+Number(process.argv[4]));

var obj = process.argv;
var total = 0;
for (var i = 2; i < obj.length; i++) {
	total += +obj[i];
	// console.log('i: ' + i + '  total: ' + total);
};
console.log(total);

/*
Answer:

 var result = 0  
   
 for (var i = 2; i < process.argv.length; i++)  
   result += Number(process.argv[i])  
   
 console.log(result) 

*/