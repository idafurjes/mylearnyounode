//console.log(process.argv);

let path = process.argv;
let sum=0;
for (i=2; i<path.length; i++){
  sum+=Number(path[i]);
};
console.log(sum);
