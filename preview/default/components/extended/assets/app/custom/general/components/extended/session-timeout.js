"use strict";var KTSessionTimeoutDemo={init:function(){$.sessionTimeout({title:"Session Timeout Notification",message:"Your session is about to expire.",keepAliveUrl:"https://keenthemes.com/keen/themes/themes/keen/dist/preview/inc/api/session-timeout/keepalive.php",redirUrl:"?page=custom/user/login-v1&demo=default",logoutUrl:"?page=custom/user/login-v1&demo=default",warnAfter:3e3,redirAfter:35e3,ignoreUserActivity:!0,countdownMessage:"Redirecting in {timer} seconds.",countdownBar:!0})}};jQuery(document).ready(function(){KTSessionTimeoutDemo.init()});