(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f722a42"],{"0aa2":function(t,n,a){"use strict";var i=a("bf57"),e=a.n(i);e.a},6166:function(t,n,a){"use strict";a.r(n);var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"vcl-container"},[a("el-switch",{staticClass:"run",attrs:{"active-text":"开始","inactive-text":"暂停"},nativeOn:{click:function(n){return t.handleRun(n)}},model:{value:t.runFlag,callback:function(n){t.runFlag=n},expression:"runFlag"}}),a("div",{staticClass:"title"},[a("p",{staticClass:"sub-title"},[t._v("截止至当前时间招聘最火热的职位是:")]),0!=t.data.length?a("p",[t._v(t._s(t.data[t.data.length-1].name))]):t._e()]),a("div",{staticClass:"chart"},[a("p",{staticClass:"time"},[t._v(t._s(t.dateList[t.index]))]),a("div",{ref:"vcl",staticClass:"vcl"})])],1)},e=[],r=a("c466"),o=a("c72b"),s={data:function(){return{vclData:o["a"].data,option:[],index:0,data:[],positionList:[],positionColors:[],dateList:[],timer:null,runFlag:!1}},mounted:function(){},activated:function(){console.log("vcl upupup"),this.ininChart()},methods:{getData:function(t){var n=this.vclData.map((function(n){return{name:n.name,value:n.value[t]}}));this.data=n.sort((function(t,n){return t.value-n.value})),this.positionList=this.data.map((function(t){return t.name}))},run:function(t){var n=this,a=this.data;this.getData(++this.index);for(var i=this.data,e=[],r=0;r<i.length;r++){var o=(i[r].value-a[r].value)/10;o=Math.round(o),e.push({name:i[r].name,speed:o})}var s=0,c=setInterval((function(){s++;for(var a=function(t){var a=e.find((function(a){return a.name===n.data[t].name})),i=a.speed;n.data[t].value+=i},i=0;i<n.data.length;i++)a(i);n.data.sort((function(t,n){return t.value-n.value})),n.positionList=n.data.map((function(t){return t.name})),n.option=n.getOption(n.positionList,n.data),t.setOption(n.option,n.data),10===s&&(n.index===n.dateList.length-1&&(n.getData(n.dateList.length-1),n.option=n.getOption(n.positionList,n.data),t.setOption(n.option,n.data),n.runFlag=!1,clearInterval(n.timer)),clearInterval(c))}),100)},getOption:function(t,n){var a=this;return{tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,0.3)",axisPointer:{type:"cross",label:{precision:"0"}}},grid:{left:"2%",right:"2%",bottom:"2%",top:"2%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01],axisTick:{show:!1}},yAxis:{show:!0,type:"category",axisTick:{show:!1},axisLabel:{fontSize:18,color:function(t){var n=t,i=a.positionColors.find((function(t){return t.name===n})).color;return i}},data:t},series:[{name:this.dateList[0],type:"bar",data:n,barMaxWidth:21,label:{show:!0,position:"insideRight",fontSize:21,offset:[0,-10],formatter:function(t){var n=t.name,a=t.value;return"".concat(n,": ").concat(a," 条")}},itemStyle:{barBorderRadius:[0,7,7,0],color:function(t){var n=t.name,i=a.positionColors.find((function(t){return t.name===n})).color;return i}}}]}},handleRun:function(){var t=this,n=this.$echarts.init(this.$refs.vcl);this.index===this.dateList.length-1&&(this.index=0,this.ininChart()),this.runFlag?this.timer=setInterval((function(){t.run(n)}),1e3):clearInterval(this.timer)},ininChart:function(){var t=Object(r["a"])("2020-02-19",Object(r["b"])()),n=Object(r["b"])(t+1).reverse();this.dateList=n,this.getData(this.index);var a=this.$echarts.init(this.$refs.vcl);this.positionColors=this.positionList.map((function(t){var n="rgb(".concat(Math.round(255*Math.random()),", ").concat(Math.round(255*Math.random()),", ").concat(Math.round(255*Math.random()),")");return{name:t,color:n}})),this.option=this.getOption(this.positionList,this.data),a.setOption(this.option,this.data)}}},c=s,u=(a("0aa2"),a("2877")),l=Object(u["a"])(c,i,e,!1,null,"74d218b9",null);n["default"]=l.exports},bf57:function(t,n,a){},c466:function(t,n,a){"use strict";function i(t){return o(t)||r(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(t){if(Array.isArray(t)){for(var n=0,a=new Array(t.length);n<t.length;n++)a[n]=t[n];return a}}function s(t){var n=i(Array(t).keys()).map((function(t){var n=new Date(Date.now()-864e5*(t+1)),a=n.getMonth()+1;a<10&&(a="0".concat(a));var i=n.getDate();i<10&&(i="0".concat(i));var e="".concat(n.getFullYear(),"-").concat(a,"-").concat(i);return e}));return n}function c(t,n){var a=Date.parse(t),i=Date.parse(n),e=(i-a)/864e5;return e}a.d(n,"b",(function(){return s})),a.d(n,"a",(function(){return c}))},c72b:function(t,n,a){"use strict";var i=a("c466"),e=Object(i["a"])("2020-02-19",Object(i["b"])()),r=Object(i["b"])(e+1).reverse(),o=["后端开发","测试","人工智能","移动前端开发","运维","数据开发","前端开发","高端技术职位","项目管理","硬件开发","企业软件","产品经理","运营"],s=o.map((function(t){var n=0,a=r.map((function(){return n+=Math.round(2e4*Math.random()+100),n}));return{name:t,value:a}}));n["a"]={success:!0,msg:null,code:200,data:s}}}]);
//# sourceMappingURL=chunk-4f722a42.8a59c87b.js.map