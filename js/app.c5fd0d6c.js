(function(e){function t(t){for(var n,a,i=t[0],s=t[1],d=t[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},c=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/todo-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=s;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0603":function(e,t,o){"use strict";o("d107")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r=o("2909"),c=(o("4de4"),o("d81d"),o("a4d3"),o("e01a"),o("5502")),a=o("11c1"),i=function(){var e=new Date,t={year:"numeric",month:"long",day:"numeric"};return e.toLocaleDateString("en-US",t)},s=Object(c["a"])({state:{error:!1,priorities:{Low:{name:"Low",color:"#3b037a"},Medium:{name:"Medium",color:"#f80"},High:{name:"High",color:"#f00"}},currentTodos:"total",displayedTodos:[],totalTodos:[{id:1,description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",priority:"Low",date:"March 31, 2021",complete:!1},{id:2,description:"Ab, magni quod hic dolore omnis culpa perferendis temporibus tempore ratione, molestias exercitationem odio numquam ipsum.",priority:"Medium",date:"March 31, 2021",complete:!0},{id:3,description:"Laborum repellendus officiis itaque nisi in!",priority:"High",date:"March 31, 2021",complete:!1}]},mutations:{setError:function(e,t){e.error=t},setCurrentTodos:function(e,t){e.currentTodos=t},setDisplayedTodos:function(e,t){e.displayedTodos=t},setTotalTodos:function(e,t){e.totalTodos=t}},getters:{error:function(e){return e.error},priorities:function(e){return e.priorities},currentTodos:function(e){return e.currentTodos},displayedTodos:function(e){return"done"===e.currentTodos?Object(r["a"])(e.totalTodos).filter((function(e){return!0===e.complete})):"pending"===e.currentTodos?Object(r["a"])(e.totalTodos).filter((function(e){return!1===e.complete})):"total"===e.currentTodos?Object(r["a"])(e.totalTodos):void 0},totalTodos:function(e){return e.totalTodos},doneTodos:function(e){return Object(r["a"])(e.totalTodos).filter((function(e){return!0===e.complete}))},pendingTodos:function(e){return Object(r["a"])(e.totalTodos).filter((function(e){return!1===e.complete}))}},actions:{selectTodos:function(e,t){var o=e.commit;o("setCurrentTodos",t)},addTodo:function(e,t){var o=e.commit,n=e.state;if(!t)return o("setError",!0);o("setError",!1);var c=Object(r["a"])(n.totalTodos),s={id:Object(a["v4"])(),description:t,priority:"Low",date:i(),complete:!1};c.unshift(s),o("setTotalTodos",c)},deleteTodo:function(e,t){var o=e.commit,n=e.state,c=Object(r["a"])(n.totalTodos).filter((function(e){return e.id!==t}));o("setTotalTodos",c)},completeTodo:function(e,t){var o=e.commit,n=e.state,c=Object(r["a"])(n.totalTodos).map((function(e){return e.id===t&&(e.complete=!e.complete),e}));o("setTotalTodos",c)},editDescription:function(e,t){var o=e.commit,n=e.state,c=Object(r["a"])(n.totalTodos).map((function(e){return e.id===t.id&&(e.description=t.description),e}));o("setTotalTodos",c)},changePriority:function(e,t){var o=e.commit,n=e.state,c=Object(r["a"])(n.totalTodos).map((function(e){return e.id===t.todoId&&(e.priority=t.priorityName),e}));o("setTotalTodos",c)},clearAll:function(e){var t=e.commit;t("setTotalTodos",[])}}}),d={class:"container"};function l(e,t,o,r,c,a){var i=Object(n["m"])("Header"),s=Object(n["m"])("Dashboard");return Object(n["h"])(),Object(n["c"])("div",d,[Object(n["f"])(i),Object(n["f"])(s)])}var u=Object(n["u"])("data-v-204d16ce");Object(n["j"])("data-v-204d16ce");var p={class:"header"},b=Object(n["f"])("span",{class:"header__title"},"todo-list",-1),f={class:"header__info"},O={class:"header__form"},h=Object(n["f"])("i",{class:"fas fa-arrow-right"},null,-1),j={class:"header__error"};Object(n["i"])();var m=u((function(e,t,o,r,c,a){return Object(n["h"])(),Object(n["c"])("div",p,[b,Object(n["f"])("div",f,[Object(n["f"])("span",{class:["header__done",{active:"done"===e.currentTodos}],onClick:t[1]||(t[1]=function(t){return e.selectTodos("done")})},"done: "+Object(n["n"])(e.doneTodos.length),3),Object(n["f"])("span",{class:["header__pending",{active:"pending"===e.currentTodos}],onClick:t[2]||(t[2]=function(t){return e.selectTodos("pending")})},"pending: "+Object(n["n"])(e.pendingTodos.length),3),Object(n["f"])("span",{class:["header__total",{active:"total"===e.currentTodos}],onClick:t[3]||(t[3]=function(t){return e.selectTodos("total")})},"total: "+Object(n["n"])(e.totalTodos.length),3)]),Object(n["f"])("form",O,[Object(n["r"])(Object(n["f"])("input",{class:"header__input","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.value=t}),type:"text",placeholder:e.placeholder},null,8,["placeholder"]),[[n["o"],e.value]]),Object(n["f"])("button",{class:"header__button",onClick:t[5]||(t[5]=Object(n["t"])((function(){return a.submitForm&&a.submitForm.apply(a,arguments)}),["prevent"]))},[h])]),Object(n["r"])(Object(n["f"])("span",j,"Please do not leave the field empty",512),[[n["p"],e.error]])])})),T=o("5530"),_={name:"Header",data:function(){return{value:"",placeholder:"Enter anything"}},computed:Object(T["a"])({},Object(c["c"])(["error","currentTodos","totalTodos","doneTodos","pendingTodos"])),methods:Object(T["a"])(Object(T["a"])({},Object(c["b"])(["selectTodos","addTodo"])),{},{submitForm:function(){this.addTodo(this.value),this.value=""}})};o("8cae");_.render=m,_.__scopeId="data-v-204d16ce";var v=_,y=(o("b0c0"),Object(n["u"])("data-v-6f052fd0"));Object(n["j"])("data-v-6f052fd0");var g={key:0,class:"dashboard__list"},k={class:"dashboard__control"},w={class:"dashboard__block"},C={class:"dashboard__select"},x={class:"dashboard__block"},I=Object(n["f"])("i",{class:"dashboard__tag fas fa-tag"},null,-1),L={class:"dashboard__date"},P={class:"dashboard__block"},M=Object(n["f"])("i",{class:"fas fa-trash"},null,-1),D={key:1,class:"dashboard__list"},A=Object(n["f"])("li",{class:"dashboard__empty"},"The list is empty",-1),S=Object(n["e"])(" Clear All "),H=Object(n["f"])("i",{class:"fas fa-trash"},null,-1);Object(n["i"])();var E=y((function(e,t,o,r,c,a){return Object(n["h"])(),Object(n["c"])("div",{class:"dashboard",onClick:t[3]||(t[3]=function(){return a.clickListener&&a.clickListener.apply(a,arguments)})},[0!==e.displayedTodos.length?(Object(n["h"])(),Object(n["c"])("ul",g,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(e.displayedTodos,(function(o){return Object(n["h"])(),Object(n["c"])("li",{class:"dashboard__item",key:o.id},[Object(n["r"])(Object(n["f"])("textarea",{class:["dashboard__description",{done:o.complete}],"onUpdate:modelValue":function(e){return o.description=e},onKeypress:Object(n["s"])((function(t){return e.editDescription(o)}),["enter"]),onKeyup:t[1]||(t[1]=Object(n["s"])((function(e){return e.target.blur()}),["enter"])),type:"text"},null,42,["onUpdate:modelValue","onKeypress"]),[[n["o"],o.description]]),Object(n["f"])("div",k,[Object(n["f"])("div",w,[Object(n["f"])("i",{class:"dashboard__color",style:{background:e.priorities[o.priority].color}},null,4),Object(n["f"])("span",{class:"dashboard__priority",onClick:function(e){return a.showOptions(o.id)}},Object(n["n"])(o.priority),9,["onClick"]),Object(n["r"])(Object(n["f"])("div",C,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(e.priorities,(function(e){return Object(n["h"])(),Object(n["c"])("span",{class:"dashboard__option",key:e[o.priority],onClick:function(t){return a.chooseOption(o.id,e.name)}},Object(n["n"])(e.name),9,["onClick"])})),128))],512),[[n["p"],o.id===e.selectId]])]),Object(n["f"])("div",x,[I,Object(n["f"])("span",L,Object(n["n"])(o.date),1)]),Object(n["f"])("div",P,[Object(n["f"])("input",{id:o.id,class:"dashboard__input",onChange:function(t){return e.completeTodo(o.id)},type:"checkbox",checked:o.complete},null,40,["id","onChange","checked"]),Object(n["f"])("label",{class:"dashboard__label",for:o.id},null,8,["for"]),Object(n["f"])("button",{class:"dashboard__delete",onClick:Object(n["t"])((function(t){return e.deleteTodo(o.id)}),["prevent"])},[M],8,["onClick"])])])])})),128))])):(Object(n["h"])(),Object(n["c"])("ul",D,[A])),0!==e.displayedTodos.length?(Object(n["h"])(),Object(n["c"])("button",{key:2,class:"dashboard__clear",onClick:t[2]||(t[2]=Object(n["t"])((function(){return e.clearAll&&e.clearAll.apply(e,arguments)}),["prevent"]))},[S,H])):Object(n["d"])("",!0)])})),U={name:"Dashboard",data:function(){return{selectId:null}},computed:Object(T["a"])({},Object(c["c"])(["priorities","displayedTodos"])),methods:Object(T["a"])(Object(T["a"])({},Object(c["b"])(["deleteTodo","completeTodo","editDescription","changePriority","clearAll"])),{},{clickListener:function(e){e.target.classList.contains("dashboard__priority")||null===this.selectId||this.resetOptions()},showOptions:function(e){null===this.selectId||this.selectId!==e?this.selectId=e:this.resetOptions()},resetOptions:function(){this.selectId=null},chooseOption:function(e,t){this.resetOptions(),this.changePriority({todoId:e,priorityName:t})}})};o("0603");U.render=E,U.__scopeId="data-v-6f052fd0";var q=U,F={name:"App",components:{Header:v,Dashboard:q}};o("7314");F.render=l;var K=F;Object(n["b"])(K).use(s).mount("#app")},7314:function(e,t,o){"use strict";o("e586")},"807a":function(e,t,o){},"8cae":function(e,t,o){"use strict";o("807a")},d107:function(e,t,o){},e586:function(e,t,o){}});
//# sourceMappingURL=app.c5fd0d6c.js.map