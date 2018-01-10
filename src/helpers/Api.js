// 保存所有接口的API
export const API = {
	/**
	 * 获取用户专业信息列表
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * 无
	 */
	FindMajor: 'major/findMajor',

	/**
	 * 获取专业介绍
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * majorid              Int               true                      专业ID
	 */		
	Majorindex: 'major/majorindex/',

	/**
	 * 获取学生当前可选课程
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * userid               Int               true                      学生ID
	 */		
	FindCourseByUser: 'major/findCourseByUser',

	/**
	 * 登陆接口
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * loginname            String            true                      用户名
	 * password             String            true                      用户密码
	 * code                 String            true                      验证码
	 */		
	Login: 'Luser/login',

	/**
	 * 退出登录接口
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * 无
	 */
	BreakLogin: 'Luser/breakLogin',

	/**
	 * 验证码接口
	 * get 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * 无
	 */		
	Code: 'Luser/code',	

	/**
	 * 最后一次观看课时接口
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * 无
	 */
	GetLastLesson: 'Luser/getLastLesson',

	/**
	 * 批量录入考勤-查询班级所有学生接口
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * classid              Integer            true                      班级ID
	 */		
	GetLuserStudent: 'Luser/getLuserStudent',	

	/**
	 * 修改密码接口
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * password             String            true                       密码
	 */		
	IfLuserpassword: 'Luser/ifLuserpassword',

	/**
	 * 新密码接口
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * password             String            true                       新密码
	 */		
	LoginUserPassword: 'Luser/loginUserPassword',

	/**
	 * 获取学生信息接口
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * 无
	 */		
	MeansLuser: 'Luser/meansLuser',

	/**
	 * 用户升级提示响应
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * 无
	 */		
	UpLevel: 'Luser/upLevel',

  /**
   * 发送邮件
   * post 获取配置信息
   * -------------------------------------参入的参数---------------------------------------------
   * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
   * toEmails            String       true                       邮箱号
   */
  SendEmailTask: 'Luser/sendEmailTask',

  /**
   * 重置用户密码
   * post 获取配置信息
   * -------------------------------------参入的参数---------------------------------------------
   * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
   * password            String       true                       密码
 	* codeString          String       true                       匹配码
   */
  UpdateLuser: 'Luser/updateLuser',

	/**
	 * 课程介绍
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * courseid             Integer            true                       课程ID
	 */		
	Courseindex: 'course/courseindex',

	/**
	 * 根据班级id查询课程
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * classid              Integer            true                       班级ID
	 * term                 Integer            true                       学期
	 */		
	FindCoursebyClassid: 'course/findCoursebyClassid',

	/**
	 * 获取课程详情
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * courseid             Integer            true                       课程ID
	 */		
	FindCourseById: 'lesson/findCourseById',

	/**
	 * 获取课时详情
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 * lessonid             Integer            true                       课时ID
	 */		
	FindLessonById: 'lesson/findLessonById',

	/**
	 * 获取消息数量
	 * post 获取配置信息
	 * -------------------------------------参入的参数---------------------------------------------
	 * name(字段名称)       type(类型)   Required(是否是必须的)    description(描述)
	 */	
	Findnoreadmessagecount: 'message/findnoreadmessagecount'
};