let value = 0;
for (let index = 2; index < process.argv.length; index++){
   value += Number(process.argv[index]) 
}
console.log(value)
