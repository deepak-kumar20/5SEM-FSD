const fs=require('fs');

function dataWrite(){
  let statusmsg="";
  try{
    fs.writeFileSync("studentData.txt","Welcome to Node JS");
    console.log("Data written successfully");
    statusmsg="Data written successfully";  
  }catch(e){
    console.log("Error in writing data");
    statusmsg="Error in writing data: "+e.message;
  }
  return statusmsg;
}
module.exports=dataWrite;