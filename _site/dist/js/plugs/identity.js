/*!
 * uwkui
 * Author: lmy
 * Version: 1.0.0
 * Last Update: 2017-03-15 05:49:16
 */
!function(a){"use strict";function b(a){return/(^\d{15}$)|(^\d{17}(\d|X)$)/.test(a)}function c(a){return h[a.substr(0,2)]}function d(a){var b=a.length;if("15"==b){var c=/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/,d=a.match(c);return e("19"+d[2],d[3],d[4])}if("18"==b){var f=/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,d=a.match(f);return e(d[2],d[3],d[4])}return!1}function e(a,b,c){var d=new Date(a+"/"+b+"/"+c),e=(new Date).getFullYear();if(d.getFullYear()==a&&d.getMonth()+1==b&&d.getDate()==c){var f=e-a;return f>=3&&200>=f}return!1}function f(a){if(a=g(a),18!==a.length)return!1;var b=0;return i.map(function(c,d){b+=a.substr(d,1)*c}),j[b%11]==a.substr(17,1)}function g(a){if(15!==a.length)return a;var b=0;return a=a.substr(0,6)+"19"+a.substr(6,a.length-6),i.map(function(c,d){b+=a.substr(d,1)*c}),a+j[b%11]}var h={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"},i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],j=["1","0","X","9","8","7","6","5","4","3","2"];a.checkIdentity=function(a){return a?b(a)?c(a)?d(a)?f(a)?"":"身份证号校验位不正确":"身份证号生日不正确":"身份证号省份不正确":"身份证号格式不正确":"身份证号不能为空"}}($);