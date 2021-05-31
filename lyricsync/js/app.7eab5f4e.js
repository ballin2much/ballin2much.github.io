(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"0648":function(e,t,n){},"0a3d":function(e,t,n){},"0de9":function(e,t,n){},"27f7":function(e,t,n){"use strict";var r=n("b7c3"),i=n.n(r);i.a},"2f13":function(e,t,n){"use strict";var r=n("0de9"),i=n.n(r);i.a},"399e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),i=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(i["a"]);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("VideoSelect")],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",{staticClass:"head justify-content-center",attrs:{fluid:""}},[n("b-row",{staticClass:"d-flex justify-content-center brand botspace"},[e._v("LyricSync")]),n("b-row",{staticClass:"d-flex justify-content-center text-center botspace"},[n("b-form",{attrs:{inline:""},on:{submit:function(t){return t.preventDefault(),e.loadVideo(null)}}},[n("b-form-input",{attrs:{type:"url",name:"YTurl",placeholder:"Enter Youtube URL"},model:{value:e.YTurl,callback:function(t){e.YTurl=t},expression:"YTurl"}}),n("b-button",{attrs:{type:"submit",value:"Load Video"}},[e._v("Load Video")])],1)],1),n("b-row",{staticClass:"d-flex justify-content-center botspace col-sm-4 center"},[n("b-form-file",{ref:"myFile",attrs:{accept:".txt"},on:{input:e.loadFile},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)],1),e._l(e.IDT,(function(e){return n("div",{key:e.ID},[n("YTVideo",{attrs:{ytid:e.ID,lines:e.Lines}})],1)}))],2)},c=[],s=(n("4160"),n("baa5"),n("ac1f"),n("1276"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("youtube",{ref:"youtube",attrs:{"video-id":e.ytid},on:{playing:function(t){return e.refreshtime()}}}),n("div",[n("b-button",{staticClass:"saveButton",attrs:{type:"button"},on:{click:e.saveLyrics}},[e._v("Save Lyrics to Text")])],1),n("b-form",{staticClass:"justify-content-center",attrs:{inline:""},on:{submit:function(t){return t.preventDefault(),e.addLine(t)}}},[n("b-form-input",{attrs:{type:"text",name:"linetext",placeholder:"Add Lyrics..."},model:{value:e.linetext,callback:function(t){e.linetext=t},expression:"linetext"}}),n("b-button",{attrs:{type:"submit",value:"Enter Lyrics"}},[e._v("Submit")])],1),n("LineList",{staticClass:"justify-content-left text-left lyrics",attrs:{lines:e.lines},on:{changeTime:e.skipTo}})],1)}),l=[],f=(n("a434"),n("96cf"),n("1da1")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.lines,(function(t){return n("div",{key:t.timeStamp},[n("LineItem",{attrs:{line:t},on:{changeTime:function(n){return e.$emit("changeTime",t)}}})],1)})),0)},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{class:{active:e.line.active}},[n("b-button",{class:{activeButton:e.line.active},on:{click:function(t){return e.$emit("changeTime",e.line)}}},[e._v(" "+e._s(e.line.formattedTime())+" ")]),e._v(" "+e._s(e.line.text)+" ")],1)])},v=[],h={name:"LineItem",props:["line"]},b=h,y=(n("63a9"),n("2877")),g=Object(y["a"])(b,m,v,!1,null,"2e61b2d9",null),x=g.exports,T={name:"YTVideo",components:{LineItem:x},props:{lines:Array}},w=T,j=(n("27f7"),Object(y["a"])(w,p,d,!1,null,"be81d548",null)),_=j.exports,O=null,L={name:"YTVideo",props:{ytid:String,lines:Array},data:function(){return{linetext:""}},components:{LineList:_},methods:{getDuration:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.youtube.player.getDuration();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},getTime:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("time gotten"),t.next=3,e.$refs.youtube.player.getCurrentTime();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},saveLyrics:function(){var e=[this.ytid];this.lines.forEach((function(t){return e.push("\n["+t.timeStamp+"] "+t.text)}));var t=n("21a6"),r=new Blob(e,{type:"text/plain;charset=utf-8"});t.saveAs(r,"Lyrics")},addLine:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("click"),t.next=3,e.getTime();case 3:n=t.sent,r={timeStamp:n,text:e.linetext,formattedTime:function(){var e=Math.floor(n/3600);n%=3600;var t=Math.floor(n/60),r=Math.round(n%60);return e+":"+t+":"+r},active:!0},e.addTodo(r),e.linetext="";case 7:case"end":return t.stop()}}),t)})))()},addTodo:function(e){for(var t=this.lines.length+1,n=!0,r=0;r<this.lines.length;r++)this.lines[r].active=!1,this.lines[r].timeStamp>e.timeStamp&&n&&(t=r,n=!1);this.lines=this.lines.splice(t,0,e)},skipTo:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.lines.forEach((function(e){return e.active=!1})),e.active=!0,n.next=4,t.$refs.youtube.player.seekTo(e.timeStamp,!0);case 4:case"end":return n.stop()}}),n)})))()},refreshtime:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:null!=O&&clearInterval(O),O=setInterval(Object(f["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.youtube.player.getCurrentTime();case 2:n=t.sent,r=null,null!=e.lines&&e.lines.forEach((function(e){e.active=!1,null==r?e.timeStamp<n&&(r=e):e.timeStamp<n&&e.timeStamp>r.timeStamp&&(r=e)})),null!=r&&(r.active=!0);case 6:case"end":return t.stop()}}),t)}))),1e3);case 2:case"end":return t.stop()}}),t)})))()}}},S=L,k=(n("2f13"),Object(y["a"])(S,s,l,!1,null,"78dec822",null)),I=k.exports,D={name:"VideoSelect",components:{YTVideo:I},methods:{loadVideo:function(e){var t=this.YTurl,n="";n=this.$youtube.getIdFromUrl(t),console.log("File:"),console.log(e),null==e?(this.IDT=[{ID:n,Lines:[]}],console.log("IDT:"),console.log(this.IDT[0].Lines)):this.IDT=[{ID:n,Lines:e}],this.YTurl=""},loadFile:function(){var e=this,t=this.file;if(t&&"text/plain"===t.type){var n=new FileReader;n.readAsText(t,"UTF-8"),n.onload=function(t){var n=t.target.result;n=n.split("\n"),console.log(n),e.YTurl="https://www.youtube.com/watch?v="+n.shift();var r=[];n.forEach((function(e){var t=parseFloat(e.substring(e.lastIndexOf("[")+1,e.lastIndexOf("]"))),n={timeStamp:t,text:e.split("] ")[1],formattedTime:function(){var e=Math.floor(t/3600);t%=3600;var n=Math.floor(t/60),r=Math.round(t%60);return e+":"+n+":"+r},active:!1};r.push(n)})),console.log(r),e.loadVideo(r)}}}},data:function(){return{IDT:[],YTurl:"",File:null}}},R=D,Y=(n("e5af"),n("f86a"),Object(y["a"])(R,u,c,!1,null,"750cc007",null)),$=Y.exports,V={name:"App",components:{VideoSelect:$}},E=V,M=(n("034f"),Object(y["a"])(E,a,o,!1,null,null,null)),C=M.exports,F=n("e0ec"),P=n.n(F);r["default"].use(P.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(C)}}).$mount("#app")},"63a9":function(e,t,n){"use strict";var r=n("0a3d"),i=n.n(r);i.a},"85ec":function(e,t,n){},b7c3:function(e,t,n){},e5af:function(e,t,n){"use strict";var r=n("0648"),i=n.n(r);i.a},f86a:function(e,t,n){"use strict";var r=n("399e"),i=n.n(r);i.a}});
//# sourceMappingURL=app.7eab5f4e.js.map