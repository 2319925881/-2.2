function $(id) {return document.getElementById(id);}
function checkReg2( )
{
	var name=$("name").value;
	var pwd=$("password").value;
	if(name==""||pwd=="")
	{
		alert("请确认信息是否输入！！");
	}
	else{
		if(name.length<6)
		{
			alert("用户名长度太短，至少6个字符！！");
			$("name").value="";
		}
		else if(pwd.length<6){
			alert("密码长度太短，至少6个字符！！");
			$("password").value="";
		}
                else {
                       alert("登录成功！！");
                       $("name").value="";
                       $("password").value="";
                    }
	}
}
