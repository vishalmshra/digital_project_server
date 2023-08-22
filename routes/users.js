var express = require('express');
var router = express.Router();
var connection = require('./../database/database')




// router.post('/registeruser', (req,res)=>{
//   console.log('hit');
//   console.log(req.body);
//   var firstName = req.body.formdata.firstName;
//   var fatherName =req.body.formdata.fatherName;
//   var email=req.body.formdata.email;
//   var number=req.body.formdata.number;
//   var adhar=req.body.formdata.adhar;
//   var bdate=req.body.formdata.bdate;
//   var gender=req.body.formdata.gender;
//   var password=req.body.formdata.password;
//   var cpassword=req.body.formdata.cpassword;
//   var sql = `insert into register_users (name, email, password, mobile_no, gender,  fathername, aadhar) 
//   values('${firstName}', '${email}', '${password}', '${number}', '${gender}', '${fatherName}', '${adhar}');` 
//   console.log(sql);
// // con.query
// connection.query(sql, (err, rows)=>{
//   if(err){
//     throw err;
//   } else {
//     res.json("inserted");
//   }
// })

// })





// router.post('/loginuser', (req,res)=>{
//   // console.log(req.body);

//   var username=req.body.loginformdata.UserName;
//   var password=req.body.loginformdata.password;
 
//   var sql = `select * from register_users where email='${username}'and password='${password}'`
//   // var sql = "select * from register_users where email="+ username + " " + "and password=" + password;
//     console.log(sql);
//   connection.query(sql, (err, rows)=>{
//     if(err){
//       console.log(err);
//     } else {
//       if(rows.length>0){
//         res.json('success')
//       }
//       else{
//         res.json("denied");

//       }
//     }
//   })
//   // var data = `'${name}'`
//   })



//   router.get('/userlist',(req,res)=>{
//     var sql = `select * from register_users;`
//     connection.query(sql, (err, rows)=>{
//       if(err){
//         throw err;
//       } else {
//         res.json(rows);
//       }
//     })
//   })


//   router.post('/edituserdetails',(req,res)=>{
//     var userid=req.body.userid
//     var sql= `select * from register_users where id='${userid}'`
//     console.log(sql);
//     connection.query(sql, (err, rows)=>{
//       if(err){
//         throw err;
//       } else {
//         res.json(rows);
//       }
//     })
//   })

//   router.post('/deleteuserdetails',(req,res)=>{
//  console.log(req.body);


//     var userid=req.body.userid
//     var sql= `delete from register_users where id='${userid}'`
//     console.log(sql);
//     connection.query(sql, (err, rows)=>{
//       if(err){
//         throw err;
//       } else {
//         res.json("Deleted");
//       }
//     })
//     })

//  router.post('/Updateuserdetails',(req,res)=>{
//   console.log('hit');
//  console.log(req.body);
//  var firstName = req.body.formdata.firstName;
//   var fatherName =req.body.formdata.fatherName;
//   var email=req.body.formdata.email;
//   var number=req.body.formdata.number;
//   var adhar=req.body.formdata.adhar;
//   var bdate=req.body.formdata.bdate;
//   var gender=req.body.formdata.gender;
//   var password=req.body.formdata.password;
//  var userid=req.body.userid
//  var sql= `UPDATE register_users set name='${firstName}', fathername='${fatherName}', email='${email}',mobile_no='${number}', aadhar='${adhar}', birth_date='${bdate}', gender='${gender}', password='${password}' where id='${userid}';`
// console.log(sql);
//  connection.query(sql, (err, rows)=>{
//    if(err){
//      throw err;
//    } else {
//      res.json("Update");
//    }
//  })
//  })


 
// router.post('/registeruserApp',(req,res)=>{
//   console.log('hit');
//   console.log(req.body);
//   var id =req.body.id;
//   console.log('vishal',id)
//   var first_name = req.body.first_name;
//   var last_name=req.body.last_name
//   var User_name=req.body.User_name
//   var email=req.body.email
//   var password=req.body.password
//   // var gender=req.body.formdata.gender;
//   // var password=req.body.formdata.password;
//   // var cpassword=req.body.formdata.cpassword;
//   // var sql = `insert into register_users (name, email, password, mobile_no, gender,  fathername, aadhar) 
//   // values('${firstName}', '${email}', '${password}', '${number}', '${gender}', '${fatherName}', '${adhar}');` 
//   if(id=='' || id==undefined || id==null )
//   {
//   var sql= `insert into register_users(name, username, email, password)
//   values('${first_name}', '${last_name}' '${User_name}', '${email}', '${password}');`
//   console.log('vishal',sql);
// // con.query
// connection.query(sql, (err, rows)=>{
//   if(err){
//     throw err;
//   } else {
//     res.json("inserted");
//   }
// })
// }
// else{
//   var sql = `UPDATE register_users set name='${first_name}', lastname='${last_name}', username='${User_name}',email='${email}', password='${password}' where id='${id}';`  
//   connection.query(sql, (err, rows)=>{
//     if(err){
//       throw err;
//     } else {
//       res.json("updated");
//     }
//   })
// }
// })

// router.post('/loginusers', (req,res)=>{
//   console.log("vishal",req.body);

//   var User_name=req.body.loginformdata.User_name;
//   var password=req.body.loginformdata.password;
 
//   // var sql = `select * from register_users where email='${User_name}'and password='${password}'`
//   var sql = `select * from register_users where username= '${User_name}' and password= '${password}'`
//   // var sql = "select * from register_users where email="+ username + " " + "and password=" + password;
//     console.log(sql);
//   connection.query(sql, (err, rows)=>{
//     if(err){
//       console.log(err);
//     } else {
//       if(rows.length>0){
//         res.json('success')
//       }
//       else{
//         res.json("denied");

//       }
//     }
//   })
//   // var data = `'${name}'`
//   })

//   router.get('/tablelist',(req,res)=>{
//     // var sql = `select * from register_users;`
//     var sql = `select * from register_users;`
//     connection.query(sql, (err, rows)=>{
//       if(err){
//         throw err;
//       } else {
//         res.json(rows);
//       }
//     })
//   })
//   router.post('/editdetails',(req,res)=>{
//     var userid=req.body.userid
//     var sql= `select * from register_users where id='${userid}'`
//     console.log(sql);
//     connection.query(sql, (err, rows)=>{
//       if(err){
//         throw err;
//       } else {
//         res.json(rows);
//       }
//     })
//   })

//   router.post('/deletedetails',(req,res)=>{
//     console.log(req.body);
   
   
//        var userid=req.body.userid
//       //  var sql= `delete from register_users where id='${userid}'`
//       var sql = `delete from register_users where id='${userid}'`
//        console.log(sql);
//        connection.query(sql, (err, rows)=>{
//          if(err){
//            throw err;
//          } else {
//            res.json("Deleted");
//          }
//        })
//        })

//       //  router.post('/Updatedetails',(req,res)=>{
//       //   console.log('hit');
//       //  console.log(req.body);
//       //  var first_name = req.body.formdata.first_name;
//       //  var number=req.body.formdata.number;
//       //  var email=req.body.formdata.email;
//       //  var password=req.body.formdata.password;
//       //  var userid=req.body.userid
      
//       //  var sql= `UPDATE register_users set name='${firstName}', fathername='${fatherName}', email='${email}',mobile_no='${number}', aadhar='${adhar}', birth_date='${bdate}', gender='${gender}', password='${password}' where id='${userid}';`
//       // var sql = `UPDATE register_users set name='${first_name}', lastname='${last_name}', username='${User_name}',email='${email}', password='${password}' where id='${userid}';`  
//       //   connection.query(sql, (err, rows)=>{
//       //     if(err){
//       //       throw err;
//       //     } else {
//       //       res.json("Update");
//       //     }
//       //   })
//       //   })
//       router.get('/getNews',(req,res)=>{
//         var sql = `SELECT news_id,header,content,image,table_content FROM articles where table_content='article_stories';`
//         connection.query(sql, (err, rows)=>{
//           if(err){
//             throw err;
//           } else {

//             res.json(rows);
//           }
//         })
//       })


//       router.get('/topStories',(req,res)=>{
//         var sql = `SELECT news_id,header,content,image,table_content FROM articles where table_content='top_stories';`
//         connection.query(sql, (err, rows)=>{
//           if(err){
//             throw err;
//           } else {

//             res.json(rows);
//           }
//         })
//       })





//       router.get('/nagaland',(req,res)=>{
//         var sql = `SELECT news_id,header,content,image,table_content FROM articles where table_content='nagaland_stories';`
//         connection.query(sql, (err, rows)=>{
//           if(err){
//             throw err;
//           } else {

//             res.json(rows);
//           }
//         })
//       })



//  router.get('/neStories',(req,res)=>{
//   var sql = `SELECT news_id,header,content,image,table_content FROM articles where table_content='ne_stories';`
//   connection.query(sql, (err, rows)=>{
//           if(err){
//             throw err;
//           } else {

//             res.json(rows);
//           }
//         })
//       })



//       router.get('/nationalStories',(req,res)=>{
//         var sql = `SELECT news_id,header,content,image,table_content FROM articles where table_content='national_stories';`
//         connection.query(sql, (err, rows)=>{
//                 if(err){
//                   throw err;
//                 } else {
      
//                   res.json(rows);
//                 }
//               })
//             })



//  router.get('/worldStories',(req,res)=>{
//  var sql = `SELECT news_id,header,content,image,table_content FROM articles where table_content='world_stories';`
//  connection.query(sql, (err, rows)=>{
//                       if(err){
//                         throw err;
//                       } else {
            
//                         res.json(rows);
//                       }
//                     })
//                   })



//   router.get('/entertainmentStories',(req,res)=>{
//    var sql = `SELECT news_id,header,content,image,table_content FROM articles where table_content='entertainment_stories';`
//    connection.query(sql, (err, rows)=>{
//                             if(err){
//                               throw err;
//                             } else {
                  
//                               res.json(rows);
//                             }
//                           })
//                         })



//   router.get('/sportsStories',(req,res)=>{
//   var sql = `SELECT news_id,header,content,image,table_content FROM articles where table_content='sports_stories';`
//   connection.query(sql, (err, rows)=>{
//   if(err){
//   throw err;
// } else {
                                         
//  res.json(rows);
//  }
//  })
//  })    


 
//  router.get('/businesss',(req,res)=>{
//   var sql = `SELECT news_id,header,content,image,table_content FROM articles where table_content='business_stories';`
//   connection.query(sql, (err, rows)=>{
//   if(err){
//   throw err;
// } else {
                                         
//  res.json(rows);
//  }
//  })
//  })   


 
//  router.get('/recentstories',(req,res)=>{
//   var sql = `SELECT news_id,header,content,image,table_content FROM articles where table_content='recent_stories';`
//   connection.query(sql, (err, rows)=>{
//   if(err){
//   throw err;
// } else {
                                         
//  res.json(rows);
//  }
//  })
//  }) 


//  router.post('/registerusers',(req,res)=>{
//   console.log('hit');
//   console.log(req.body);
//   var id =req.body.id;
//   console.log(id)
//   var name = req.body.name;
//   var contact=req.body.contact
//   var email=req.body.email
//   if(id=='' || id==undefined || id==null )
//   {
//   var sql= `insert into register_users(name,  mobile_no, email) 
//   values('${name}', '${contact}', '${email}');`
//   console.log(sql);
//   connection.query(sql, (err, rows)=>{
//     if(err){
//       throw err;
//     } else {
//       res.json("inserted");
//     }
//   })
// }else
// {
//   var sql= `UPDATE register_users set name='${name}', mobile_no='${contact}',email='${email}' where id='${id}';`
//   console.log(sql);
//   connection.query(sql, (err, rows)=>{
//     if(err){
//       throw err;
//     } else {
//       res.json("updated");
//     }
//   })
// }
// });



// router.get('/tabledata',(req,res)=>{
//   var sql = `select * from register_users;`
//   connection.query(sql, (err, rows)=>{
//     if(err){
//       throw err;
//     } else {
//       res.json(rows);
//     }
//   })
// })

// router.post('/editdata',(req,res)=>{
//   var userid=req.body.userid
  

  
//   var sql= `select * from register_users where id='${userid}'`
//   console.log(sql);
//   connection.query(sql, (err, rows)=>{
//     if(err){
//       throw err;
//     } else {
//       res.json(rows);
//     }
//   })


// })

//   router.post('/deletedata',(req,res)=>{
//   console.log(req.body);
 
 
//      var userid=req.body.userid
//     var sql = `delete from register_users where id='${userid}'`
//      console.log(sql);
//      connection.query(sql, (err, rows)=>{
//        if(err){
//          throw err;
//        } else {
//          res.json("Deleted");
//        }
//      })
//      })


     router.post('/persondata', (req,res)=>{
      console.log('hit');
      console.log(req.body);
      var FirstName = req.body.userdata.FirstName;
      var LastName =req.body.userdata.LastName;
      var email=req.body.userdata.email;
      var password=req.body.userdata.password;
      
      var sql = `insert into person_data (firstname, lastname, email, password) 
      values('${FirstName}', '${LastName}', '${email}', '${password}');` 
      console.log(sql);
    // con.query
    connection.query(sql, (err, rows)=>{
      if(err){
        throw err;
      } else {
        console.log(rows)
        res.json(`{rows:${rows},status:1}`);
      }
    })
    
    })



module.exports = router;