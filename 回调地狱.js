fs.readFile('./file/1.txt','utf8',(err1,r1)=>{
  if(err1)return console.log(err1.message)
  console.log(r1);
  fs.readFile('./file/2.txt','utf8',(err2,r2)=>{
    if(err2)return console.log(err2.message)
    console.log(r2);
    fs.readFile('./file/3.txt','utf8',(err3,r3)=>{
      if(err3)return console.log(err3.message)
      console.log(r3);
    
    })
  })
})