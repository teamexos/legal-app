(function(e,t,a){function r(e){var t={},r=/^jQuery\d+$/;return a.each(e.attributes,function(e,a){a.specified&&!r.test(a.name)&&(t[a.name]=a.value)}),t}function n(e,r){var n=this,l=a(n);if(n.value==l.attr("placeholder")&&l.hasClass("placeholder"))if(l.data("placeholder-password")){if(l=l.hide().next().show().attr("id",l.removeAttr("id").data("placeholder-id")),e===!0)return l[0].value=r;l.focus()}else n.value="",l.removeClass("placeholder"),n==t.activeElement&&n.select()}function l(){var e,t=this,l=a(t),i=this.id;if(""==t.value){if("password"==t.type){if(!l.data("placeholder-textinput")){try{e=l.clone().attr({type:"text"})}catch(o){e=a("<input>").attr(a.extend(r(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":i}).bind("focus.placeholder",n),l.data({"placeholder-textinput":e,"placeholder-id":i}).before(e)}l=l.removeAttr("id").hide().prev().attr("id",i).show()}l.addClass("placeholder"),l[0].value=l.attr("placeholder")}else l.removeClass("placeholder")}var i,o,s="placeholder"in t.createElement("input"),d="placeholder"in t.createElement("textarea"),c=a.fn,h=a.valHooks;s&&d?(o=c.placeholder=function(){return this},o.input=o.textarea=!0):(o=c.placeholder=function(){var e=this;return e.filter((s?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":n,"blur.placeholder":l}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},o.input=s,o.textarea=d,i={get:function(e){var t=a(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,r){var i=a(e);return i.data("placeholder-enabled")?(""==r?(e.value=r,e!=t.activeElement&&l.call(e)):i.hasClass("placeholder")?n.call(e,!0,r)||(e.value=r):e.value=r,i):e.value=r}},s||(h.input=i),d||(h.textarea=i),a(function(){a(t).delegate("form","submit.placeholder",function(){var e=a(".placeholder",this).each(n);setTimeout(function(){e.each(l)},10)})}),a(e).bind("beforeunload.placeholder",function(){a(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);