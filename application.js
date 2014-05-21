define([
	'system',
	'jquery',
	'widget/register',
	'widget/login',
	'widget/filter',
	'widget/ctrl'
], function(SYS, $, REG, LOGIN, FILTER, CTRL) {
var 
	// 全局功能配置
	GLOBAL_SERVICE = [
		// 注册
		{
			name: 'register',
			exec: function() {
				REG.init();
			}
		}, 
		// 登陆
		{ 
			name: 'login',
			exec: function() {
				LOGIN.init();
				CTRL.get('login-help').init();
			}  
		}, 
		// 拦截器
		{
			name: 'filter',
			exec: function() {
				FILTER.init();
			}
		},
		// 头部功能
		{
			name: 'header',
			exec: function() {
				CTRL.get('header-help').init();
			}
		},
		// 底部功能
		{
			name: 'footer',
			exec: function() {
				CTRL.get('footer-help').init();
			}
		},
		// 统计
		{ 
			name: 'sum',
			exec: function() {
				CTRL.get('ping-help').init();
			}
		}, 
		// 全局简历引导
		{
			name: 'global-resume-guide',
			exec: function() {
				CTRL.get('ginfo-1').showIf();
				CTRL.get('ginfo-2').showIf();
			}
		}
	];

	return {
		init: function() {
			var service = null;

			for(var i=0; i<GLOBAL_SERVICE.length; i++) {
				service = GLOBAL_SERVICE[i];
				if(service && service.exec) {
					service.exec();
				}
			}
		}
	};
});