(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},2:function(e,t,a){e.exports={wrapper:"Counter_wrapper__3u92Y",buttons:"Counter_buttons__26tmG",btn:"Counter_btn__3qF7A",count:"Counter_count__9BcjU",red:"Counter_red__1Kgtl",inp:"Counter_inp__1Hu9z"}},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),u=(a(14),a(15),a(2)),i=a.n(u),s=function(e){return r.a.createElement("div",{className:e.value===e.max?i.a.red:i.a.count},e.max<e.min?"Min > Max":e.min<0||e.max<0?"\u041c\u0438\u043d\u0443\u0441 \u043d\u0435\u043b\u044c\u0437\u044f!":e.value)},o=function(e){return r.a.createElement("button",{className:i.a.btn,disabled:e.disable,onClick:function(){e.callback()}},e.nameButton)},m=a(3),b=a(1),p={value:"0",max:5,min:0,isDisabledSet:!1,isDisabledBtn:!0},E=function(){var e=Object(m.c)((function(e){return e.counter})),t=Object(m.b)();return Object(n.useEffect)((function(){var e=localStorage.getItem("max"),a=localStorage.getItem("start");if(null!=a){var n=JSON.parse(a);t({type:"NUM_START",n:n})}if(null!=e){var r=JSON.parse(e);t(function(e){return{type:"NUM_MAX",n:e}}(r))}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i.a.wrapper},r.a.createElement("span",{style:{color:"white"}},"max Value"),r.a.createElement("input",{className:i.a.inp,type:"number",placeholder:"Max value",onChange:function(e){t(function(e){return{type:"MAX_VALUE_HANDLER",e:e}}(+e.currentTarget.value))},value:e.max}),r.a.createElement("br",null),r.a.createElement("span",{style:{color:"white"}},"start Value"),r.a.createElement("input",{className:i.a.inp,type:"number",placeholder:"Start value",onChange:function(e){t(function(e){return{type:"START_VALUE_HANDLER",e:e}}(+e.currentTarget.value))},value:e.min}),r.a.createElement("br",null),r.a.createElement(o,{callback:function(){t({type:"SET_BTN"})},nameButton:"set",disable:e.isDisabledSet})),r.a.createElement("div",{className:i.a.wrapper},r.a.createElement(s,{value:e.value,max:e.max,min:e.min}),r.a.createElement("div",{className:i.a.buttons},r.a.createElement(o,{callback:function(){t({type:"VALUE_INC"})},nameButton:"inc",disable:e.isDisabledBtn||e.value===e.max}),r.a.createElement(o,{callback:function(){t({type:"RESET_VALUE_INC"})},nameButton:"reset",disable:e.isDisabledBtn}))))};var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))},v=a(6),d=Object(v.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_VALUE_HANDLER":return Object(b.a)(Object(b.a)({},e),{},{value:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 set",min:t.e,isDisabledBtn:!0,isDisabledSet:!1});case"MAX_VALUE_HANDLER":return Object(b.a)(Object(b.a)({},e),{},{value:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 set",max:t.e,isDisabledBtn:!0,isDisabledSet:!1});case"SET_BTN":return localStorage.setItem("start",JSON.stringify(e.min)),localStorage.setItem("max",JSON.stringify(e.max)),Object(b.a)(Object(b.a)({},e),{},{value:e.min,isDisabledBtn:!1,isDisabledSet:!0});case"RESET_VALUE_INC":return Object(b.a)(Object(b.a)({},e),{},{value:e.min});case"VALUE_INC":return"number"===typeof e.value&&e.value<e.max?Object(b.a)(Object(b.a)({},e),{},{value:e.value+1}):e;case"NUM_MAX":return Object(b.a)(Object(b.a)({},e),{},{max:t.n});case"NUM_START":return Object(b.a)(Object(b.a)({},e),{},{value:t.n,min:t.n});default:return e}}}),f=Object(v.b)(d);c.a.render(r.a.createElement(m.a,{store:f},r.a.createElement(_,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(22)}},[[9,1,2]]]);
//# sourceMappingURL=main.b64ed781.chunk.js.map