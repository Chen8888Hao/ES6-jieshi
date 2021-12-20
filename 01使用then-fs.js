import  thenFs from 'then-fs'
thenFs.readFile('./file/1.txt','utf8').then((r1) => {console.log(r1);})
thenFs.readFile('./file/2.txt','utf8').then((r2) => {console.log(r2);})
thenFs.readFile('./file/3.txt','utf8').then((r3) => {console.log(r3);})