/*!
 * uwkui
 * Author: lmy
 * Version: 1.0.0
 * Last Update: 2017-01-19 06:03:18
 */
!function(a){"use strict";var b=function(c,d){this.opt=a.extend({},b.defaults,d),this.$list=a(c),this.init()};b.defaults={$cont:a(window),pageName:"page",distance:200},b.prototype={init:function(){this.lock=!1,this.loadend=!1,this.$loadbar=a(this.opt.loadbar),this.$loadbar.length||(this.$loadbar=a('<div class="list-loader fadeAnime"><i class="loader"></i></div>').insertAfter(this.$list)),this.$loadnone=a(this.opt.loadnone),this.$loadnone.length||(this.$loadnone=a('<div class="list-none" hidden><div class="list-item t-center"><i class="item-inner pd-tb-big desc">还没有任何记录</i></div></div>').insertAfter(this.$list)),this.bindEvent().loadList()},bindEvent:function(){var a=this,b=a.opt.$cont,c=b.height();return b.on("scroll",function(){b.scrollTop()+c>a.$list.height()-a.opt.distance&&a.loadList()}),this.$loadbar.on("click",this.loadList.bind(this,"")),this},loadStart:function(){return this.lock||this.loadend?!1:(this.$loadbar.slideDown(500).html('<i class="loader"></i>'),this.lock=!0)},loadStop:function(a){this.lock=!1,this.ajax=null,this.$loadbar.html('<i class="desc">'+(a||"加载更多")+"</i>")},loadEnd:function(){this.loadend=!0,this.opt.end?"function"==typeof this.opt.end&&this.opt.end.call(this):(this.$loadbar.html('<i class="desc">-- 就这些了 --</i>'),setTimeout(this.$loadbar.slideUp.bind(this.$loadbar,500),800))},noData:function(){this.$list.hide(),this.$loadnone.show(),this.loadEnd()},setList:function(a){var b=this.opt.renderData.call(this,a);b===!1?this.noData():(this.$list.show(),this.$loadnone.hide(),this.opt.inData[this.opt.pageName]++)},loadList:function(b){if(b&&(this.ajax&&this.ajax.abort(),this.lock=!1,this.loadend=!1,"object"==typeof b&&a.extend(this.opt,b),this.opt.inData[this.opt.pageName]=1,this.$list.html(""),this.$loadnone.hide(),this.opt.init&&this.opt.init()),!this.loadStart())return!1;var c=this;this.ajax=a.ajax({type:"POST",timeout:5e3,url:this.opt.dataUrl,data:this.opt.inData,success:function(a){c.loadStop(),a?c.setList(JSON.parse(a)):c.noData()},error:function(b,d,e){c.loadStop(),"timeout"==d&&a.warning("请求超时")}})}},a.fn.scrollLoad=function(c,d){return this.each(function(){var e=a(this),f=e.data("scrollLoad"),g=a.fn.scrollLoad.pluginData[f],h="object"==typeof c&&c;g||(f=a.fn.scrollLoad.pluginData.index++,a.fn.scrollLoad.pluginData[f]=new b(this,h),e.data("scrollLoad",f),g=a.fn.scrollLoad.pluginData[f]),"string"==typeof c&&g[c](d)})},a.fn.scrollLoad.pluginData={index:0},a.fn.scrollLoad.Constructor=b}($);