        window.onload = function(){
            /* 
                获取邮箱，密码以及确认密码这三个输入框以及提示的对象
            */
           var emailtip = document.getElementById("emailtip");
           var passwordtip1 = document.getElementById("passwordtip1");
           var passwordtip2 = document.getElementById("passwordtip2");
           var email = document.getElementById("email");
           var password1 = document.getElementById("password");
           var password2 = document.getElementById("con-password");
        
            /* 
                检验邮箱格式
            */
           email.onblur = function(){
                var emailvalue = email.value;
                var emailvalue = emailvalue.trim();

                if(emailvalue.length != 0){
                    var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
                    var flag1 = emailReg.test(emailvalue);
                    if(flag1){
                        emailtip.style.color = "green";
                        emailtip.innerText = "邮箱符合规范";
                    }else{
                        emailtip.style.color = "red";
                        emailtip.innerText = "请输入正确的邮箱格式";
                    }
                }else{
                    emailtip.style.color = "red";
                    emailtip.innerText = "对不起，邮箱不能为空";
                }
           }

           /* 
                检验密码格式
           */
          password1.onblur = function(){
              var psw1value = password1.value;
              var psw1value = psw1value.trim();
              var passwordReg1 = /^.*[A-Z]{1}.*[A-Z]{1}.*[A-Z]{1}.*$/;
              var passwordReg2 = /(\#|\&|\*|\?)/;
              var passwordReg3 = /(0|1|9)/;
              var passwordReg4 = /([\s\S])[\s\S]*?\1/;

              if(psw1value.length != 0){
                  /* 判断密码长度 */
                  if(psw1value.length<9||psw1value.length>15){
                      passwordtip1.style.color = "red";
                      passwordtip1.innerText = "对不起，密码长度应该在9-15位";
                  }
                  else{
                    var Flag1 = passwordReg1.test(psw1value);
                    var Flag2 = passwordReg2.test(psw1value);
                    var Flag3 = passwordReg3.test(psw1value);
                    var Flag4 = passwordReg4.test(psw1value);
                    // var Flag4 = passwordReg4.test(psw1value);
                    if(Flag1&&Flag2&&(!Flag3)&&(!Flag4)){
                        passwordtip1.style.color = "green";
                        passwordtip1.innerText = "密码符合规范";
                    }else if(!Flag1){
                        passwordtip1.style.color = "red";
                        passwordtip1.innerText = "密码必须含有三个大写字母";
                    }else if(!Flag2){
                        passwordtip1.style.color = "red";
                        passwordtip1.innerText = "密码至少含有#,&,*,?中的一种符号";
                    }else if(Flag3){
                        passwordtip1.style.color = "red";
                        passwordtip1.innerText = "密码只能含有数字2-8";
                    }else if(Flag4){
                        passwordtip1.style.color = "red";
                        passwordtip1.innerText = "密码不能含有重复字符";
                    }
                 }
              }else{
                  passwordtip1.style.color = "red";
                  passwordtip1.innerText = "密码不能为空!";
              }
          }

          /* 
            检测确认密码输入框的值是否等于密码框里面的值
          */
          password2.onblur = function(){
              var psw1value = password1.value;
              var psw1value = psw1value.trim();
              var psw2value = password2.value;
              var psw2value = psw2value.trim();
              if(psw2value.length != 0){
                if(psw1value == psw2value){
                passwordtip2.style.color = "green";
                passwordtip2.innerText = "密码一致";
              }else{
                passwordtip2.style.color = "red";
                passwordtip2.innerText = "密码不一致";
              }
            }else{
                passwordtip2.style.color = "red";
                passwordtip2.innerText = "密码不能为空";
            }
              
          }


          /* 
          设置提交按钮
          */
         var btn = document.getElementById("login");
         btn.onclick = function(){
             if((emailtip.innerText=="邮箱符合规范")&&(passwordtip1.innerText=="密码符合规范")&&(passwordtip2.innerText=="密码一致")){
             alert("注册成功！");
          }else{
             alert("邮箱或者密码有错");
             }
         }

        }
 