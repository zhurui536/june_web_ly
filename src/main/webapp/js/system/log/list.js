var dialog;
var grid;
$(function() {
	// 本地数据..
	// var localData =
	// [{"id":179,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"执行成功!","operTime":1447128013000,"logType":"0","actionTime":"18"},{"id":178,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"执行成功!","operTime":1447128005000,"logType":"0","actionTime":"91"},{"id":177,"methods":"资源管理-新增资源","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"执行成功!","operTime":1447127935000,"logType":"0","actionTime":"45"},{"id":176,"methods":"资源管理-新增资源","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"执行成功!","operTime":1447127895000,"logType":"0","actionTime":"9"},{"id":175,"methods":"资源管理-新增资源","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"执行成功!","operTime":1447127801000,"logType":"0","actionTime":"330"},{"id":174,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1447123067000,"logType":"0","actionTime":"91"},{"id":112,"methods":"用户管理-新增用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446021619000,"logType":"0","actionTime":"9040"},{"id":111,"methods":"用户管理-新增用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446020502000,"logType":"0","actionTime":"7494"},{"id":110,"methods":"用户管理-新增用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446020448000,"logType":"0","actionTime":"3"},{"id":109,"methods":"用户管理-删除用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446020421000,"logType":"0","actionTime":"34"},{"id":108,"methods":"用户管理-修改用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446020208000,"logType":"0","actionTime":"61327"},{"id":107,"methods":"用户管理-修改用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446017679000,"logType":"0","actionTime":"66391"},{"id":106,"methods":"用户管理-新增用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446017604000,"logType":"0","actionTime":"20"},{"id":105,"methods":"用户管理-修改用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446017296000,"logType":"0","actionTime":"20"},{"id":104,"methods":"用户管理-修改用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446017244000,"logType":"0","actionTime":"21912"},{"id":103,"methods":"用户管理-修改用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446014686000,"logType":"0","actionTime":"27"},{"id":102,"methods":"用户管理-修改用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446014632000,"logType":"0","actionTime":"7867"},{"id":101,"methods":"用户管理-修改用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446002192000,"logType":"0","actionTime":"18100"},{"id":100,"methods":"<font
	// color=\"red\">执行方法异常:-->用户管理-新增用户</font>","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"java.lang.NullPointerException\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:179)\r\n\tat
	// org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:653)\r\n\tat
	// com.apm.server.controller.system.UserController$$EnhancerBySpringCGLIB$$4b12ba30.addEntity(<generated>)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.</font>","operTime":1446001186000,"logType":"0","actionTime":"0"},{"id":99,"methods":"用户管理-修改用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446000973000,"logType":"0","actionTime":"8073"},{"id":98,"methods":"用户管理-修改用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446000931000,"logType":"0","actionTime":"211"},{"id":97,"methods":"用户管理-修改用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1446000915000,"logType":"0","actionTime":"192"},{"id":96,"methods":"用户管理-删除用户","accountName":"admin","module":"系统管理","userIP":"192.168.10.18","description":"执行成功!","operTime":1445941546000,"logType":"0","actionTime":"3"},{"id":95,"methods":"用户管理-新增用户","accountName":"admin","module":"系统管理","userIP":"192.168.10.18","description":"执行成功!","operTime":1445941509000,"logType":"0","actionTime":"166"},{"id":93,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445851324000,"logType":"0","actionTime":"335"},{"id":92,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445841969000,"logType":"0","actionTime":"18"},{"id":91,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445841917000,"logType":"0","actionTime":"26"},{"id":90,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445841905000,"logType":"0","actionTime":"33"},{"id":89,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445841850000,"logType":"0","actionTime":"57"},{"id":88,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445841769000,"logType":"0","actionTime":"33"},{"id":87,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445841713000,"logType":"0","actionTime":"23"},{"id":86,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445841691000,"logType":"0","actionTime":"49"},{"id":85,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445841619000,"logType":"0","actionTime":"24"},{"id":84,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445840226000,"logType":"0","actionTime":"8"},{"id":83,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445840201000,"logType":"0","actionTime":"8"},{"id":82,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445839083000,"logType":"0","actionTime":"16"},{"id":81,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445839049000,"logType":"0","actionTime":"17508"},{"id":80,"methods":"<font
	// color=\"red\">执行方法异常:-->资源管理-修改资源</font>","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"org.springframework.dao.DataIntegrityViolationException:
	// \r\n### Error updating database. Cause: java.sql.SQLException: Data
	// truncated for column 'parentId' at row 1\r\n### The error may involve
	// defaultParameterMap\r\n### The error occurred while setting
	// parameters\r\n### SQL: update apm_resources set name= ?,parentId=
	// ?,resKey= ?,type= ?,resUrl= ?,ishide= ?,description= ? where id =
	// ?\r\n### Cause: java.sql.SQLException: Data truncated for column
	// 'parentId' at row 1\n; SQL []; Data truncated for column 'parentId' at
	// row 1; nested exception is java.sql.SQLException: Data truncated for
	// column 'parentId' at row 1\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodIn</font>","operTime":1445836524000,"logType":"0","actionTime":"0"},{"id":79,"methods":"<font
	// color=\"red\">执行方法异常:-->资源管理-修改资源</font>","accountName":"admin","module":"系统管理","userIP":"192.168.10.88","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"org.springframework.dao.DataIntegrityViolationException:
	// \n### Error updating database. Cause: java.sql.SQLException: Data
	// truncated for column 'parentId' at row 1\n### The error may involve
	// defaultParameterMap\n### The error occurred while setting parameters\n###
	// SQL: update apm_resources set name= ?,parentId= ?,resKey= ?,type=
	// ?,resUrl= ?,ishide= ?,description= ? where id = ?\n### Cause:
	// java.sql.SQLException: Data truncated for column 'parentId' at row 1\n;
	// SQL []; Data truncated for column 'parentId' at row 1; nested exception
	// is java.sql.SQLException: Data truncated for column 'parentId' at row
	// 1\"}\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat
	// java.lang.reflect.Method.invoke(Method.java:606)\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(R</font>","operTime":1445835995000,"logType":"0","actionTime":"0"},{"id":78,"methods":"<font
	// color=\"red\">执行方法异常:-->资源管理-修改资源</font>","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"org.springframework.dao.DataIntegrityViolationException:
	// \r\n### Error updating database. Cause: java.sql.SQLException: Data
	// truncated for column 'parentId' at row 1\r\n### The error may involve
	// defaultParameterMap\r\n### The error occurred while setting
	// parameters\r\n### SQL: update apm_resources set name= ?,parentId=
	// ?,resKey= ?,type= ?,resUrl= ?,ishide= ?,description= ? where id =
	// ?\r\n### Cause: java.sql.SQLException: Data truncated for column
	// 'parentId' at row 1\n; SQL []; Data truncated for column 'parentId' at
	// row 1; nested exception is java.sql.SQLException: Data truncated for
	// column 'parentId' at row 1\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodIn</font>","operTime":1445835932000,"logType":"0","actionTime":"0"},{"id":77,"methods":"<font
	// color=\"red\">执行方法异常:-->资源管理-修改资源</font>","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"org.springframework.dao.DataIntegrityViolationException:
	// \r\n### Error updating database. Cause: java.sql.SQLException: Data
	// truncated for column 'parentId' at row 1\r\n### The error may involve
	// defaultParameterMap\r\n### The error occurred while setting
	// parameters\r\n### SQL: update apm_resources set name= ?,parentId=
	// ?,resKey= ?,type= ?,resUrl= ?,ishide= ?,description= ? where id =
	// ?\r\n### Cause: java.sql.SQLException: Data truncated for column
	// 'parentId' at row 1\n; SQL []; Data truncated for column 'parentId' at
	// row 1; nested exception is java.sql.SQLException: Data truncated for
	// column 'parentId' at row 1\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodIn</font>","operTime":1445832588000,"logType":"0","actionTime":"0"},{"id":76,"methods":"<font
	// color=\"red\">执行方法异常:-->资源管理-修改资源</font>","accountName":"admin","module":"系统管理","userIP":"192.168.10.88","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"org.springframework.dao.DataIntegrityViolationException:
	// \n### Error updating database. Cause: java.sql.SQLException: Data
	// truncated for column 'parentId' at row 1\n### The error may involve
	// defaultParameterMap\n### The error occurred while setting parameters\n###
	// SQL: update apm_resources set name= ?,parentId= ?,resKey= ?,type=
	// ?,resUrl= ?,ishide= ?,description= ? where id = ?\n### Cause:
	// java.sql.SQLException: Data truncated for column 'parentId' at row 1\n;
	// SQL []; Data truncated for column 'parentId' at row 1; nested exception
	// is java.sql.SQLException: Data truncated for column 'parentId' at row
	// 1\"}\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat
	// java.lang.reflect.Method.invoke(Method.java:606)\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(R</font>","operTime":1445832532000,"logType":"0","actionTime":"0"},{"id":75,"methods":"<font
	// color=\"red\">执行方法异常:-->资源管理-修改资源</font>","accountName":"admin","module":"系统管理","userIP":"192.168.10.88","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"org.springframework.dao.DataIntegrityViolationException:
	// \n### Error updating database. Cause: java.sql.SQLException: Data
	// truncated for column 'parentId' at row 1\n### The error may involve
	// defaultParameterMap\n### The error occurred while setting parameters\n###
	// SQL: update apm_resources set name= ?,parentId= ?,resKey= ?,type=
	// ?,resUrl= ?,ishide= ?,description= ? where id = ?\n### Cause:
	// java.sql.SQLException: Data truncated for column 'parentId' at row 1\n;
	// SQL []; Data truncated for column 'parentId' at row 1; nested exception
	// is java.sql.SQLException: Data truncated for column 'parentId' at row
	// 1\"}\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat
	// java.lang.reflect.Method.invoke(Method.java:606)\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(R</font>","operTime":1445832497000,"logType":"0","actionTime":"0"},{"id":74,"methods":"<font
	// color=\"red\">执行方法异常:-->资源管理-修改资源</font>","accountName":"admin","module":"系统管理","userIP":"192.168.10.88","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"org.springframework.dao.DataIntegrityViolationException:
	// \n### Error updating database. Cause: java.sql.SQLException: Data
	// truncated for column 'parentId' at row 1\n### The error may involve
	// defaultParameterMap\n### The error occurred while setting parameters\n###
	// SQL: update apm_resources set name= ?,parentId= ?,resKey= ?,type=
	// ?,resUrl= ?,ishide= ?,description= ? where id = ?\n### Cause:
	// java.sql.SQLException: Data truncated for column 'parentId' at row 1\n;
	// SQL []; Data truncated for column 'parentId' at row 1; nested exception
	// is java.sql.SQLException: Data truncated for column 'parentId' at row
	// 1\"}\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat
	// java.lang.reflect.Method.invoke(Method.java:606)\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(R</font>","operTime":1445832455000,"logType":"0","actionTime":"0"},{"id":73,"methods":"资源管理-删除资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445830252000,"logType":"0","actionTime":"13"},{"id":72,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"192.168.10.88","description":"执行成功!","operTime":1445829779000,"logType":"0","actionTime":"2"},{"id":69,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1445590071000,"logType":"0","actionTime":"997"},{"id":68,"methods":"资源管理-新增资源","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"执行成功!","operTime":1445585581000,"logType":"0","actionTime":"261"},{"id":67,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"执行成功!","operTime":1445583952000,"logType":"0","actionTime":"116"},{"id":66,"methods":"<font
	// color=\"red\">执行方法异常:-->资源管理-修改资源</font>","accountName":"admin","module":"系统管理","userIP":"192.168.10.105","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"org.springframework.dao.DataIntegrityViolationException:
	// \n### Error updating database. Cause: java.sql.SQLException: Data
	// truncated for column 'parentId' at row 1\n### The error may involve
	// defaultParameterMap\n### The error occurred while setting parameters\n###
	// SQL: update apm_resources set name= ?,parentId= ?,resKey= ?,type=
	// ?,resUrl= ?,ishide= ?,description= ? where id = ?\n### Cause:
	// java.sql.SQLException: Data truncated for column 'parentId' at row 1\n;
	// SQL []; Data truncated for column 'parentId' at row 1; nested exception
	// is java.sql.SQLException: Data truncated for column 'parentId' at row
	// 1\"}\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat
	// java.lang.reflect.Method.invoke(Method.java:606)\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(R</font>","operTime":1445570351000,"logType":"0","actionTime":"0"},{"id":65,"methods":"<font
	// color=\"red\">执行方法异常:-->资源管理-修改资源</font>","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"org.springframework.dao.DataIntegrityViolationException:
	// \r\n### Error updating database. Cause: java.sql.SQLException: Data
	// truncated for column 'parentId' at row 1\r\n### The error may involve
	// defaultParameterMap\r\n### The error occurred while setting
	// parameters\r\n### SQL: update apm_resources set name= ?,parentId=
	// ?,resKey= ?,type= ?,resUrl= ?,ishide= ?,description= ? where id =
	// ?\r\n### Cause: java.sql.SQLException: Data truncated for column
	// 'parentId' at row 1\n; SQL []; Data truncated for column 'parentId' at
	// row 1; nested exception is java.sql.SQLException: Data truncated for
	// column 'parentId' at row 1\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodIn</font>","operTime":1445567758000,"logType":"0","actionTime":"0"},{"id":64,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"192.168.10.105","description":"执行成功!","operTime":1445417185000,"logType":"0","actionTime":"2"},{"id":63,"methods":"资源管理-新增资源","accountName":"admin","module":"系统管理","userIP":"192.168.10.105","description":"执行成功!","operTime":1445416859000,"logType":"0","actionTime":"2"},{"id":62,"methods":"资源管理-新增资源","accountName":"admin","module":"系统管理","userIP":"192.168.10.105","description":"执行成功!","operTime":1445416588000,"logType":"0","actionTime":"2"},{"id":44,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444962645000,"logType":"0","actionTime":"11"},{"id":43,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444962450000,"logType":"0","actionTime":"7"},{"id":42,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444960855000,"logType":"0","actionTime":"60"},{"id":41,"methods":"资源管理-新增资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444960822000,"logType":"0","actionTime":"252"},{"id":40,"methods":"<font
	// color=\"red\">执行方法异常:-->组管理-修改组</font>","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"000000000000\"}\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.transaction.interceptor.TransactionInterceptor$1.proceedWithInvocation(TransactionInterceptor.java:99)\r\n\tat
	// org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:281)\r\n\tat
	// org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:96)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:179)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocat</font>","operTime":1444904370000,"logType":"0","actionTime":"0"},{"id":39,"methods":"<font
	// color=\"red\">执行方法异常:-->组管理-修改组</font>","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"000000000000\"}\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.transaction.interceptor.TransactionInterceptor$1.proceedWithInvocation(TransactionInterceptor.java:99)\r\n\tat
	// org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:281)\r\n\tat
	// org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:96)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:179)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocat</font>","operTime":1444904341000,"logType":"0","actionTime":"0"},{"id":38,"methods":"组管理-修改组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444904152000,"logType":"0","actionTime":"22"},{"id":37,"methods":"组管理-删除组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444903885000,"logType":"0","actionTime":"6"},{"id":36,"methods":"<font
	// color=\"red\">执行方法异常:-->组管理-新增组</font>","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"java.lang.NullPointerException\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:179)\r\n\tat
	// org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:653)\r\n\tat
	// com.apm.server.controller.system.GroupsController$$EnhancerBySpringCGLIB$$1b006ec0.addEntity(<generated>)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// or</font>","operTime":1444878875000,"logType":"0","actionTime":"0"},{"id":35,"methods":"<font
	// color=\"red\">执行方法异常:-->组管理-新增组</font>","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"java.lang.NullPointerException\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:179)\r\n\tat
	// org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:653)\r\n\tat
	// com.apm.server.controller.system.GroupsController$$EnhancerBySpringCGLIB$$1b006ec0.addEntity(<generated>)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// or</font>","operTime":1444876201000,"logType":"0","actionTime":"0"},{"id":34,"methods":"<font
	// color=\"red\">执行方法异常:-->组管理-新增组</font>","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"java.lang.NullPointerException\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:179)\r\n\tat
	// org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:653)\r\n\tat
	// com.apm.server.controller.system.GroupsController$$EnhancerBySpringCGLIB$$1b006ec0.addEntity(<generated>)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// or</font>","operTime":1444875529000,"logType":"0","actionTime":"0"},{"id":33,"methods":"<font
	// color=\"red\">执行方法异常:-->组管理-新增组</font>","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"java.lang.NullPointerException\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:179)\r\n\tat
	// org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:653)\r\n\tat
	// com.apm.server.controller.system.GroupsController$$EnhancerBySpringCGLIB$$8445277b.addEntity(<generated>)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// or</font>","operTime":1444832608000,"logType":"0","actionTime":"0"},{"id":32,"methods":"<font
	// color=\"red\">执行方法异常:-->组管理-新增组</font>","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"java.lang.NullPointerException\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:179)\r\n\tat
	// org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:653)\r\n\tat
	// com.apm.server.controller.system.GroupsController$$EnhancerBySpringCGLIB$$caf70b21.addEntity(<generated>)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// or</font>","operTime":1444829903000,"logType":"0","actionTime":"0"},{"id":31,"methods":"组管理-删除组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444829896000,"logType":"0","actionTime":"5"},{"id":30,"methods":"<font
	// color=\"red\">执行方法异常:-->组管理-新增组</font>","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"<font
	// color=\"red\">执行方法异常:-->java.lang.RuntimeException:
	// com.apm.frame.exception.SystemException:
	// {\"results\":\"error\",\"message\":\"java.lang.NullPointerException\"}\r\n\tat
	// com.apm.server.logAop.LogAopAction.doBefore(LogAopAction.java:124)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)\r\n\tat
	// org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:68)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:58)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:168)\r\n\tat
	// org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n\tat
	// org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:179)\r\n\tat
	// org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:653)\r\n\tat
	// com.apm.server.controller.system.GroupsController$$EnhancerBySpringCGLIB$$caf70b21.addEntity(<generated>)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat
	// sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\r\n\tat
	// sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\r\n\tat
	// java.lang.reflect.Method.invoke(Method.java:597)\r\n\tat
	// or</font>","operTime":1444829883000,"logType":"0","actionTime":"0"},{"id":29,"methods":"资源管理-删除资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444817519000,"logType":"0","actionTime":"9"},{"id":28,"methods":"资源管理-新增资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444817515000,"logType":"0","actionTime":"6"},{"id":24,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444817377000,"logType":"0","actionTime":"6"},{"id":23,"methods":"组管理-修改组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444816609000,"logType":"0","actionTime":"15"},{"id":22,"methods":"组管理-新增组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444816587000,"logType":"0","actionTime":"17"},{"id":21,"methods":"组管理-删除组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444816225000,"logType":"0","actionTime":"10"},{"id":20,"methods":"组管理-新增组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444816210000,"logType":"0","actionTime":"5"},{"id":19,"methods":"组管理-新增组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444816044000,"logType":"0","actionTime":"6"},{"id":18,"methods":"组管理-删除组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444815394000,"logType":"0","actionTime":"5"},{"id":17,"methods":"用户管理-删除用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444815388000,"logType":"0","actionTime":"5"},{"id":16,"methods":"组管理-删除组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444811543000,"logType":"0","actionTime":"19"},{"id":15,"methods":"组管理-新增组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444811537000,"logType":"0","actionTime":"6"},{"id":14,"methods":"组管理-删除组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444811522000,"logType":"0","actionTime":"5"},{"id":13,"methods":"组管理-新增组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444811514000,"logType":"0","actionTime":"9"},{"id":12,"methods":"组管理-删除组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444811500000,"logType":"0","actionTime":"5"},{"id":11,"methods":"组管理-新增组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444811492000,"logType":"0","actionTime":"65"},{"id":10,"methods":"组管理-删除组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444811451000,"logType":"0","actionTime":"6"},{"id":9,"methods":"组管理-新增组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444811448000,"logType":"0","actionTime":"5"},{"id":8,"methods":"用户管理-新增用户","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444810975000,"logType":"0","actionTime":"6923"},{"id":7,"methods":"组管理-新增组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444810889000,"logType":"0","actionTime":"31"},{"id":6,"methods":"组管理-新增组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444810860000,"logType":"0","actionTime":"28"},{"id":5,"methods":"组管理-新增组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444810798000,"logType":"0","actionTime":"30"},{"id":4,"methods":"组管理-删除组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444810478000,"logType":"0","actionTime":"6"},{"id":3,"methods":"组管理-新增组","accountName":"admin","module":"系统管理","userIP":"127.0.0.1","description":"执行成功!","operTime":1444810171000,"logType":"0","actionTime":"37"},{"id":2,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"执行成功!","operTime":1444792228000,"logType":"0","actionTime":"14"},{"id":1,"methods":"资源管理-修改资源","accountName":"admin","module":"系统管理","userIP":"0:0:0:0:0:0:0:1","description":"执行成功!","operTime":1444735072000,"logType":"0","actionTime":"20"}];

	grid = lyGrid({
		id : 'paging',
		l_column : [ {
			colkey : "id",
			name : "id",
			hide : true
		}, {
			colkey : "accountName",
			name : "账号",
			isSort : true
		}, {
			colkey : "module",
			name : "模块",
			isSort : true
		}, {
			colkey : "methods",
			name : "方法",
			isSort : true
		}, {
			colkey : "actionTime",
			name : "响应时间",
			width : "150px",
			isSort : true
		}, {
			colkey : "userIP",
			name : "IP地址",
			isSort : true
		}, {
			colkey : "operTime",
			name : "执行时间",
			isSort : true,
			renderData : function(rowindex, data, rowdata, column) {
				return new Date(data).format("yyyy-MM-dd hh:mm:ss");
			}
		}, {
			colkey : "description",
			name : "执行描述"
		}, /*{
			colkey : "userIP",
			name : "IP地址",
			isSort : true
		}, {
			colkey : "operTime",
			name : "执行时间",
			isSort : true,
			renderData : function(rowindex, data, rowdata, column) {
				return new Date(data).format("yyyy-MM-dd hh:mm:ss");
			}
		}, {
			colkey : "description",
			name : "执行描述"
		}, {
			colkey : "actionTime",
			name : "响应时间",
			width : "150px",
			isSort : true
		}, {
			colkey : "userIP",
			name : "IP地址",
			isSort : true
		}, {
			colkey : "operTime",
			name : "执行时间",
			isSort : true,
			renderData : function(rowindex, data, rowdata, column) {
				return new Date(data).format("yyyy-MM-dd hh:mm:ss");
			}
		}, {
			colkey : "description",
			name : "执行描述"
		}, {
			colkey : "userIP",
			name : "IP地址",
			isSort : true
		}, {
			colkey : "operTime",
			name : "执行时间",
			isSort : true,
			renderData : function(rowindex, data, rowdata, column) {
				return new Date(data).format("yyyy-MM-dd hh:mm:ss");
			}
		}, {
			colkey : "description",
			name : "执行描述"
		}*/ ],
		// localData:localData,
		jsonUrl : rootPath + '/log/findByPage.shtml',
		local : false,// 支持本地数据前端分页
		width : "1500px",
		checkbox : false
	});
	$("#search").click("click", function() {// 绑定查询按扭
		var searchParams = $("#searchForm").serializeJson();
		grid.setOptions({
			data : searchParams
		});
	});
});