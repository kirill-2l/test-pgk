(function(e){function t(t){for(var n,i,u=t[0],s=t[1],c=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/test-pgk/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"407b":function(e,t,r){var n=r("278c").default;r("a15b"),r("d81d"),r("ac1f"),r("1276"),r("a9e3"),r("4de4"),r("b0c0"),document.addEventListener("DOMContentLoaded",(function(){function e(e,t){var r=this;this.message=e,setTimeout((function(){return r.blowUp()}),1e3*t)}function t(e){for(var t=[],r=1,n=1,a=e[0];r<e.length+1;r++)e[r]===a?n++:(n>1?t.push(a,n):t.push(a),n=1,a=e[r]);return t.join("")}e.prototype.blowUp=function(){console.log(this.message)},new e("Explosion!",.5),console.log(t("AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD"));var r=function(e){document.querySelector("#banner");var t=document.querySelector("#banner img"),r=document.querySelector("#banner p"),a=document.querySelector("#banner button"),o=e.split("").map((function(e){return!!Number(e)})),i=n(o,3),u=i[0],s=i[1],c=i[2];u&&t.addEventListener("click",(function(){return alert("bannerImg")})),s&&r.addEventListener("click",(function(){return alert("bannerText")})),c&&a.addEventListener("click",(function(){return alert("bannerButton")}))};r("011");var a=[{name:"Ivan",job:"programmer"},{name:"Alex",job:"designer"}],o=a.filter((function(e){return"programmer"===e.job})).map((function(e){return e.name}));console.log(o)}))},4629:function(e,t,r){"use strict";r("f1a5")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",[r("v-container",[r("div",{attrs:{id:"banner"}},[r("img",{attrs:{src:"https://picsum.photos/300/200"}}),r("p",[e._v(" Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. ")]),r("button",[e._v("Click")])]),r("br"),r("br"),r("br"),r("br"),r("v-text-field",{attrs:{label:"Фильтрация по названию"},model:{value:e.filterByName,callback:function(t){e.filterByName=t},expression:"filterByName"}}),r("v-select",{attrs:{items:e.options,"item-text":"label","item-value":"value",label:"Соритровка по дате"},model:{value:e.sortByDate,callback:function(t){e.sortByDate=t},expression:"sortByDate"}}),r("BaseList",{attrs:{list:e.filteredList}})],1)],1)],1)},o=[],i=r("1da1"),u=r("2909"),s=(r("96cf"),r("4de4"),r("caad"),r("2532"),r("bc3a")),c=r.n(s),l=r("2cf3"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list-grid"},e._l(e.list,(function(t){return r("v-card",{key:t.episode_id},[r("v-card-title",[e._v(" "+e._s(t.title))]),r("v-card-text",[e._v(" "+e._s(t.release_date)+" ")])],1)})),1)},p=[],d={name:"BaseList",props:{list:{type:Array,required:!0}}},b=d,v=(r("4629"),r("2877")),m=r("6544"),y=r.n(m),h=r("b0af"),g=r("99d9"),D=Object(v["a"])(b,f,p,!1,null,null,null),_=D.exports;y()(D,{VCard:h["a"],VCardText:g["a"],VCardTitle:g["b"]});var w=c.a.create({baseURL:"https://swapi.dev/api/films/"}),x="yyyy-MM-dd",j={name:"App",components:{BaseList:_},data:function(){return{list:[],filterByName:null,sortByDate:"ASC",options:[{value:"ASC",label:"По возрастанию"},{value:"DESC",label:"По убыванию"}]}},computed:{filteredList:function(){var e=this,t=this.list;return this.filterByName&&(t=this.list.filter((function(t){return t.title.toLowerCase().includes(e.filterByName.toLowerCase())}))),"ASC"===this.sortByDate?t=Object(u["a"])(t).sort((function(t,r){var n=e.parseDate(t.release_date),a=e.parseDate(r.release_date);return n-a})):"DESC"===this.sortByDate&&(t=Object(u["a"])(t).sort((function(t,r){var n=e.parseDate(t.release_date),a=e.parseDate(r.release_date);return a-n}))),t}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.get();case 2:return r=t.sent,t.next=5,r.data.results;case 5:e.list=t.sent;case 6:case"end":return t.stop()}}),t)})))()},methods:{parseDate:function(e){return Object(l["a"])(e,x,new Date)}}},B=j,S=(r("5c0b"),r("7496")),O=r("a523"),C=r("f6c4"),L=r("b974"),V=r("8654"),k=Object(v["a"])(B,a,o,!1,null,null,null),A=k.exports;y()(k,{VApp:S["a"],VContainer:O["a"],VMain:C["a"],VSelect:L["a"],VTextField:V["a"]});var E=r("f309");n["a"].use(E["a"]);var M=new E["a"]({});r("407b");n["a"].config.productionTip=!1,new n["a"]({vuetify:M,render:function(e){return e(A)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},f1a5:function(e,t,r){}});
//# sourceMappingURL=app.cd253370.js.map