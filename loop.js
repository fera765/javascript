let i = 0;
while ( i < 5){
  console.log(`While ${i}`)
  i++
}

let b = 0;
do {
  console.log(`Do While ${b}`);
  b++;
} while (b < 3);


for (let c = 0; c < 3; c++) { // shows 0, then 1, then 2
  console.log(`For loop ${c}`);
}


for (let l = 0; l < 10; l++) {

  // if true, skip the remaining part of the body
  if (l % 2 == 0) continue;

  console.log(`For loop continue ${l}`); // 1, then 3, 5, 7, 9
}