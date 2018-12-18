function $(id) {return document.getElementById(id);}
function checkReg( )
{
	var name=$("name").value;
	var email=$("email").value;
	var pwd=$("password").value;
	var conpwd=$("confirmpasdsword").value;
    var regex = /\@/g;//是否存在"@";
	if(name==""||email==""||pwd==""||conpwd=="")
	{
		alert("请确认信息是否输入！！");
	}
	else{
		if(name.length<6)
		{
			alert("用户名长度太短，至少6个字符！！");
			$("name").value="";
		}
		else if(regex.test(email)==0)
		{
			alert("邮箱地址不正确！！");
			$("email").value="";
		}
		else if(pwd.length<6){
			alert("密码长度太短，至少6个字符！！");
			$("password").value="";
		}
		else if(conpwd!=pwd)
		{
			alert("请重复输入密码时保持一致！！");
			$("confirmpasdsword").value="";
		}
                else {
                       alert("注册成功！！");
                       $("name").value="";
                       $("email").value="";
                       $("password").value="";
                       $("confirmpasdsword").value="";
                    }
	}
}


