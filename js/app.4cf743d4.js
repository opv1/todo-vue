(function(e){function t(t){for(var r,a,s=t[0],d=t[1],i=t[2],u=0,b=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,s=1;s<o.length;s++){var d=o[s];0!==n[d]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},n={app:0},c=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/todo-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=d;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"23ea":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("7a23"),n=o("2909"),c=(o("4de4"),o("a4d3"),o("e01a"),o("5502")),a=o("11c1"),s=function(){var e=new Date,t={year:"numeric",month:"long",day:"numeric"};return e.toLocaleDateString("en-US",t)},d=Object(c["a"])({state:{error:!1,todos:[{id:1,description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",priority:"Low",date:"March 31, 2021",complete:!1},{id:2,description:"Ab, magni quod hic dolore omnis culpa perferendis temporibus tempore ratione, molestias exercitationem odio numquam ipsum.",priority:"Medium",date:"March 31, 2021",complete:!0},{id:3,description:"Laborum repellendus officiis itaque nisi in!",priority:"High",date:"March 31, 2021",complete:!1}]},mutations:{setError:function(e,t){e.error=t},setTodos:function(e,t){e.todos=t}},getters:{error:function(e){return e.error},todos:function(e){return e.todos},doneTodos:function(e){return Object(n["a"])(e.todos).filter((function(e){return!0===e.complete}))},pendingTodos:function(e){return Object(n["a"])(e.todos).filter((function(e){return!1===e.complete}))}},actions:{addTodo:function(e,t){var o=e.commit,r=e.state;if(!t)return o("setError",!0);o("setError",!1);var c=Object(n["a"])(r.todos),d={id:Object(a["v4"])(),description:t,priority:"Low",date:s(),complete:!1};c.unshift(d),o("setTodos",c)},deleteTodo:function(e,t){var o=e.commit,r=e.state,c=Object(n["a"])(r.todos).filter((function(e){return e.id!==t}));o("setTodos",c)},completeTodo:function(e,t){var o=e.commit,r=e.state,c=Object(n["a"])(r.todos).filter((function(e){return e.id===t&&(e.complete=!e.complete),e}));o("setTodos",c)},editDescription:function(e,t){var o=e.commit,r=e.state,c=Object(n["a"])(r.todos).filter((function(e){return e.id===t.id&&(e.description=t.description),e}));o("setTodos",c)},clearAll:function(e){var t=e.commit;t("setTodos",[])}}}),i={class:"container"};function l(e,t,o,n,c,a){var s=Object(r["m"])("Header"),d=Object(r["m"])("Dashboard");return Object(r["h"])(),Object(r["c"])("div",i,[Object(r["f"])(s),Object(r["f"])(d)])}var u=Object(r["u"])("data-v-4ae1267a");Object(r["j"])("data-v-4ae1267a");var b={class:"header"},f=Object(r["f"])("span",{class:"header__title"},"todo-list",-1),p={class:"header__info"},j={class:"header__done"},O={class:"header__pending"},h={class:"header__total"},m={class:"header__form"},_=Object(r["f"])("i",{class:"fas fa-arrow-right"},null,-1),v={class:"header__error"};Object(r["i"])();var y=u((function(e,t,o,n,c,a){return Object(r["h"])(),Object(r["c"])("div",b,[f,Object(r["f"])("div",p,[Object(r["f"])("span",j,"done: "+Object(r["n"])(e.doneTodos.length),1),Object(r["f"])("span",O,"pending: "+Object(r["n"])(e.pendingTodos.length),1),Object(r["f"])("span",h,"total: "+Object(r["n"])(e.todos.length),1)]),Object(r["f"])("form",m,[Object(r["r"])(Object(r["f"])("input",{class:"header__input","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.value=t}),type:"text",placeholder:e.placeholder},null,8,["placeholder"]),[[r["o"],e.value]]),Object(r["f"])("button",{class:"header__button",onClick:t[2]||(t[2]=Object(r["t"])((function(){return a.submitForm&&a.submitForm.apply(a,arguments)}),["prevent"]))},[_])]),Object(r["r"])(Object(r["f"])("span",v,"Please do not leave the field empty",512),[[r["p"],e.error]])])})),g=o("5530"),T={name:"Header",data:function(){return{value:"",placeholder:"Enter anything"}},computed:Object(g["a"])({},Object(c["c"])(["error","todos","doneTodos","pendingTodos"])),methods:Object(g["a"])({submitForm:function(){this.addTodo(this.value),this.value=""}},Object(c["b"])(["addTodo"]))};o("6a3a");T.render=y,T.__scopeId="data-v-4ae1267a";var k=T,w=Object(r["u"])("data-v-66dfad84");Object(r["j"])("data-v-66dfad84");var x={class:"dashboard"},D={key:0,class:"dashboard__list"},M={class:"dashboard__control"},P={class:"dashboard__block"},A=Object(r["f"])("i",{class:"dashboard__color"},null,-1),C={class:"dashboard__priority"},S={class:"dashboard__block"},L=Object(r["f"])("i",{class:"dashboard__tag fas fa-tag"},null,-1),E={class:"dashboard__date"},H={class:"dashboard__block"},U=Object(r["f"])("i",{class:"fas fa-trash"},null,-1),q={key:1,class:"dashboard__list"},F=Object(r["f"])("li",{class:"dashboard__empty"},"The list is empty",-1),K=Object(r["e"])(" Clear All "),V=Object(r["f"])("i",{class:"fas fa-trash"},null,-1);Object(r["i"])();var I=w((function(e,t,o,n,c,a){return Object(r["h"])(),Object(r["c"])("div",x,[0!==e.todos.length?(Object(r["h"])(),Object(r["c"])("ul",D,[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["l"])(e.todos,(function(o){return Object(r["h"])(),Object(r["c"])("li",{class:"dashboard__item",key:o.id},[Object(r["r"])(Object(r["f"])("textarea",{class:["dashboard__description",{done:o.complete}],"onUpdate:modelValue":function(e){return o.description=e},onKeypress:Object(r["s"])((function(t){return e.editDescription(o)}),["enter"]),onKeyup:t[1]||(t[1]=Object(r["s"])((function(e){return e.target.blur()}),["enter"])),type:"text"},null,42,["onUpdate:modelValue","onKeypress"]),[[r["o"],o.description]]),Object(r["f"])("div",M,[Object(r["f"])("div",P,[A,Object(r["f"])("span",C,Object(r["n"])(o.priority),1)]),Object(r["f"])("div",S,[L,Object(r["f"])("span",E,Object(r["n"])(o.date),1)]),Object(r["f"])("div",H,[Object(r["f"])("input",{id:o.id,class:"dashboard__input",onChange:function(t){return e.completeTodo(o.id)},type:"checkbox",checked:o.complete},null,40,["id","onChange","checked"]),Object(r["f"])("label",{class:"dashboard__label",for:o.id},null,8,["for"]),Object(r["f"])("button",{class:"dashboard__delete",onClick:Object(r["t"])((function(t){return e.deleteTodo(o.id)}),["prevent"])},[U],8,["onClick"])])])])})),128))])):(Object(r["h"])(),Object(r["c"])("ul",q,[F])),0!==e.todos.length?(Object(r["h"])(),Object(r["c"])("button",{key:2,class:"dashboard__clear",onClick:t[2]||(t[2]=Object(r["t"])((function(){return e.clearAll&&e.clearAll.apply(e,arguments)}),["prevent"]))},[K,V])):Object(r["d"])("",!0)])})),J={name:"Dashboard",computed:Object(g["a"])({},Object(c["c"])(["todos"])),methods:Object(g["a"])({},Object(c["b"])(["deleteTodo","completeTodo","editDescription","clearAll"]))};o("f05a");J.render=I,J.__scopeId="data-v-66dfad84";var z=J,B={name:"App",components:{Header:k,Dashboard:z}};o("7314");B.render=l;var G=B;Object(r["b"])(G).use(d).mount("#app")},"6a3a":function(e,t,o){"use strict";o("23ea")},7314:function(e,t,o){"use strict";o("e586")},c0f8:function(e,t,o){},e586:function(e,t,o){},f05a:function(e,t,o){"use strict";o("c0f8")}});
//# sourceMappingURL=app.4cf743d4.js.map