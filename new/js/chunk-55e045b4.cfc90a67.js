(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55e045b4"],{"00f9":function(t,a,e){},"0aed":function(t,a,e){"use strict";var i=e("7346"),n=e.n(i);n.a},7346:function(t,a,e){},"87fa":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"compared"},[e("div",{staticClass:"analysis"},[e("positionCopy",{staticClass:"position",attrs:{"position-data":t.leftData.positionData,"action-type":"setComparedLeftForm","is-loading":t.leftData.isLoading}}),e("heat-map",{staticClass:"heat-map",attrs:{"heat-map-data":t.leftData.heatMapData,title:"预测薪资","is-loading":t.leftData.isLoading},on:{fromSonComp:t.getFromHeat}}),e("columnBar",{staticClass:"company-size",attrs:{"column-data":t.leftData.companySizeData,title:"企业规模","is-loading":t.leftData.isLoading},on:{fromSonComp:t.getFromBar}}),e("columnBarSub",{staticClass:"education",attrs:{"column-bar-data":t.leftData.educationData,title:"学历要求","is-loading":t.leftData.isLoading},on:{fromSonComp:t.getFromBarSub}}),e("wordCloud",{staticClass:"word-cloud",attrs:{"word-cloud-data":t.leftData.benefitData,title:"薪资福利","is-loading":t.leftData.isLoading},on:{fromSonComp:t.getFromWordCloud}}),e("pie",{staticClass:"finance-stage",attrs:{"pie-data":t.leftData.financeStage,title:"企业融资","is-loading":t.leftData.isLoading},on:{fromSonComp:t.getFromPie}})],1),e("div",{staticClass:"analysis"},[e("positionCopy",{staticClass:"position",attrs:{"position-data":t.rightData.positionData,"action-type":"setComparedRightForm","is-loading":t.rightData.isLoading}}),e("heat-map",{staticClass:"heat-map",attrs:{"heat-map-data":t.rightData.heatMapData,title:"预测薪资","is-loading":t.rightData.isLoading},on:{fromSonComp:t.getFromHeat}}),e("columnBar",{staticClass:"company-size",attrs:{"column-data":t.rightData.companySizeData,title:"企业规模","is-loading":t.rightData.isLoading},on:{fromSonComp:t.getFromBar}}),e("columnBarSub",{staticClass:"education",attrs:{"column-bar-data":t.rightData.educationData,title:"学历要求","is-loading":t.rightData.isLoading},on:{fromSonComp:t.getFromBarSub}}),e("wordCloud",{staticClass:"word-cloud",attrs:{"word-cloud-data":t.rightData.benefitData,title:"薪资福利","is-loading":t.rightData.isLoading},on:{fromSonComp:t.getFromWordCloud}}),e("pie",{staticClass:"finance-stage",attrs:{"pie-data":t.rightData.financeStage,title:"企业融资","is-loading":t.rightData.isLoading},on:{fromSonComp:t.getFromPie}})],1)])},n=[],o=e("a34a"),s=e.n(o),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"position-container"},[e("div",{staticClass:"left-container"},[e("selectRegion",{staticClass:"select-region",attrs:{"default-value":"广东省"},on:{changeRegion:t.changeRegion}}),e("el-row",{staticClass:"top"},[Object.keys(t.positionDest).length>0?e("el-col",{staticClass:"box",attrs:{span:8}},[e("div",{staticClass:"title"},[e("p",[t._v(t._s(t.positionDest.title))]),e("span",[t._v(t._s(t.positionDest.rank))])]),e("div",{staticClass:"num"},[e("div",{staticClass:"num-item"},[e("p",{staticClass:"item-name"},[t._v("今月新增")]),e("p",{staticClass:"item-num"},[t._v(t._s(t.positionDest.new))])]),e("div",{staticClass:"num-item"},[e("p",{staticClass:"item-name"},[t._v("职位总量")]),e("p",{staticClass:"item-num"},[t._v(t._s(t.positionDest.total))])])])]):e("el-col",{staticClass:"box",attrs:{span:8}},[e("div",{staticClass:"title"},[e("p",[t._v("CodeRush")]),e("span",[t._v("TOP 39")])]),e("div",{staticClass:"num"},[e("div",{staticClass:"num-item"},[e("p",{staticClass:"item-name"},[t._v("今月新增")]),e("p",{staticClass:"item-num"},[t._v("0")])]),e("div",{staticClass:"num-item"},[e("p",{staticClass:"item-name"},[t._v("职位总量")]),e("p",{staticClass:"item-num"},[t._v("0")])])])]),e("el-col",{staticClass:"box",attrs:{span:16}},[e("div",{staticClass:"title"},[e("p",{staticClass:"city"},[t._v("热门地区")])]),t.positionHotRegion.length>0?e("div",{staticClass:"num"},t._l(t.positionHotRegion,(function(a,i){return e("div",{key:i,staticClass:"num-item"},[e("p",{staticClass:"item-name"},[t._v(t._s(a.name))]),e("p",{staticClass:"item-num"},[t._v(t._s(a.value))])])})),0):e("div",{staticClass:"num"},t._l(3,(function(a,i){return e("div",{key:i,staticClass:"num-item"},[e("p",{staticClass:"item-name"},[t._v("CodeRush")]),e("p",{staticClass:"item-num "},[t._v("0")])])})),0)])],1),e("el-row",{staticClass:"bottom"},[e("el-col",{staticClass:"box",attrs:{span:24}},[e("div",{staticClass:"title"},[t._v(t._s(t.positionDest.title)+"技术栈要求")]),t.positionSkill.length>0?e("ul",t._l(t.positionSkill,(function(a,i){return e("el-popover",{key:a.name,staticClass:"card-li",attrs:{placement:"top-start",width:"200",trigger:"hover"}},[e("div",[t._v("关键词总数："+t._s(a.total)+"条")]),e("div",[t._v("较上月增长：："+t._s(a.new)+" 条")]),e("div"),e("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(i+1+". "+a.name))])],1)})),1):e("ul",[e("li",{staticClass:"card-li-null"},[t._v(" "+t._s(t.positionForm.region)+'没有"'+t._s(t.positionDest.title)+'"的职位哦～ ')])])]),e("el-col",{staticClass:"box",attrs:{span:24}},[e("div",{staticClass:"title"},[t._v("技术社区")]),t.positionCommunity.length>0?e("ul",t._l(t.positionCommunity,(function(a){return e("el-popover",{key:a.name,staticClass:"card-li",attrs:{placement:"top-start",width:"200",trigger:"hover"}},[e("div",[t._v(t._s(a.title))]),e("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.openUrl(a.url)}},slot:"reference"},[e("img",{staticClass:"com-img",attrs:{src:a.icon,alt:"logo"}}),e("p",[t._v(t._s(a.name))])])],1)})),1):e("ul",[e("li",{staticClass:"card-li-null"},[t._v(" 广告位招租 ")])])]),e("el-col",{staticClass:"box",attrs:{span:24}},[e("div",{staticClass:"title"},[t._v("视频学习网站")]),t.positionVideo.length>0?e("ul",t._l(t.positionVideo,(function(a){return e("el-popover",{key:a.name,staticClass:"card-li",attrs:{placement:"top-start",width:"200",trigger:"hover"}},[e("div",[t._v(t._s(a.title))]),e("el-button",{attrs:{slot:"reference"},on:{click:function(e){return t.openUrl(a.url)}},slot:"reference"},[e("img",{staticClass:"com-img",attrs:{src:a.icon,alt:"logo"}}),e("p",[t._v(t._s(a.name))])])],1)})),1):e("ul",[e("li",{staticClass:"card-li-null"},[t._v(" 广告位招租 ")])])])],1)],1),e("div",{staticClass:"right-container"},[t.otherPosition.length>0?e("div",{staticClass:"bottom-right"},t._l(t.otherPosition,(function(a,i){return e("div",{key:i,staticClass:"bottom-right-item",on:{click:function(e){return t.handleOther(a.name)}}},[e("p",{staticClass:"item-name"},[t._v(t._s(a.name))]),e("p",{staticClass:"item-num"},[e("span",{staticStyle:{"font-size":"12px"}},[t._v("总量")]),t._v(" "+t._s(a.value)+" ")])])})),0):t._e()])])},c=[],l=e("da47"),p=e("2f62");function m(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function u(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?m(Object(e),!0).forEach((function(a){d(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var h={components:{selectRegion:l["a"]},props:{positionData:{type:Object,default:function(){return[]}},isLoading:{type:Boolean,default:!0},actionType:{type:String,default:""}},data:function(){return{positionDest:[],positionHotRegion:[],otherPosition:[],positionSkill:[],positionCommunity:[],positionVideo:[],loading:!0}},computed:u({},Object(p["b"])(["positionForm"])),watch:{isLoading:{handler:function(){console.log(22222),this.loading=!0}},positionData:{handler:function(){this.initPositionData()}}},mounted:function(){},methods:{openUrl:function(t){t&&window.open(t)},initPositionData:function(){var t=this;setTimeout((function(){t.loading=!1}),300),this.positionDest=this.positionData.desc,this.positionHotRegion=this.positionData.hotRegion,this.otherPosition=this.positionData.other,this.positionSkill=this.positionData.skill,this.positionCommunity=this.positionData.community,this.positionVideo=this.positionData.video},changeRegion:function(t){t.name&&(this.$store.dispatch(this.actionType,{key:"region",value:t.name}),this.$store.dispatch(this.actionType,{key:"level",value:t.level}))},handleOther:function(t){this.$store.dispatch(this.actionType,{key:"position",value:t})}}},g=h,f=(e("f413"),e("0aed"),e("2877")),v=Object(f["a"])(g,r,c,!1,null,"7e2651b6",null),D=v.exports,C=e("78b3"),b=e("daac"),_=e("0a85"),y=e("f705"),O=e("f698"),w=e("6e6f");function S(t,a,e,i,n,o,s){try{var r=t[o](s),c=r.value}catch(l){return void e(l)}r.done?a(c):Promise.resolve(c).then(i,n)}function j(t){return function(){var a=this,e=arguments;return new Promise((function(i,n){var o=t.apply(a,e);function s(t){S(o,i,n,s,r,"next",t)}function r(t){S(o,i,n,s,r,"throw",t)}s(void 0)}))}}function P(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function F(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?P(Object(e),!0).forEach((function(a){x(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function x(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var L={components:{positionCopy:D,heatMap:C["a"],columnBar:b["a"],columnBarSub:_["a"],wordCloud:y["a"],pie:O["a"]},data:function(){return{leftData:{positionData:{},heatMapData:[],companySizeData:[],educationData:[],benefitData:[],financeStage:[],isLoading:!0},rightData:{positionData:{},heatMapData:[],companySizeData:[],educationData:[],benefitData:[],financeStage:[],isLoading:!0}}},computed:F({},Object(p["b"])(["comparedLeftForm","comparedRightForm","changedPage","showingName"])),watch:{comparedLeftForm:{handler:function(){this.leftData.isLoading=!this.leftData.isLoading,this.getLeftData(this.comparedLeftForm)},deep:!0},comparedRightForm:{handler:function(){this.rightData.isLoading=!this.rightData.isLoading,this.getRightData(this.comparedRightForm)},deep:!0}},created:function(){this.compArr=[]},mounted:function(){var t=this;this.getLeftData(this.comparedLeftForm),this.getRightData(this.comparedRightForm).then((function(){t.$store.dispatch("setChartDOM",t.compArr)}))},activated:function(){this.$store.dispatch("getName",["compared-salaryExp","compared-companySize","compared-education","compared-benefit","compared-financeStage","_compared-salaryExp","_compared-companySize","_compared-education","_compared-benefit","_compared-financeStage"]),this.changedPage.includes("compared")&&(this.$store.dispatch("getShowingName"),this.showingName.map((function(t){t.chartDom.resize()})),this.$store.dispatch("deleteChangePage","compared"))},methods:{getFromHeat:function(t){this.compArr.push({name:"compared-salaryExp",chartDom:t})},getFromBar:function(t){this.compArr.push({name:"compared-companySize",chartDom:t})},getFromBarSub:function(t){this.compArr.push({name:"compared-education",chartDom:t})},getFromWordCloud:function(t){this.compArr.push({name:"compared-benefit",chartDom:t})},getFromPie:function(t){this.compArr.push({name:"compared-financeStage",chartDom:t})},_getFromHeat:function(t){this.compArr.push({name:"_compared-salaryExp",chartDom:t})},_getFromBar:function(t){this.compArr.push({name:"_compared-companySize",chartDom:t})},_getFromBarSub:function(t){this.compArr.push({name:"_compared-education",chartDom:t})},_getFromWordCloud:function(t){this.compArr.push({name:"_compared-benefit",chartDom:t})},_getFromPie:function(t){this.compArr.push({name:"_compared-financeStage",chartDom:t})},getLeftData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return j(s.a.mark((function e(){var i,n,o,r,c,l,p,m,u,d,h,g;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(w["f"])(a);case 2:return i=e.sent,n=i.data,t.leftData.heatMapData=n,e.next=7,Object(w["b"])(a);case 7:return o=e.sent,r=o.data,t.leftData.companySizeData=r,e.next=12,Object(w["c"])(a);case 12:return c=e.sent,l=c.data,t.leftData.educationData=l,e.next=17,Object(w["a"])(a);case 17:return p=e.sent,m=p.data,0===m.length&&(m=[{name:"CodeRush",value:2739},{name:"大数据招聘分析平台",value:2739},{name:"广告位招租",value:2739}]),t.leftData.benefitData=m,e.next=23,Object(w["d"])(a);case 23:return u=e.sent,d=u.data,t.leftData.financeStage=d,e.next=28,Object(w["e"])(a);case 28:h=e.sent,g=h.data,t.leftData.positionData=g;case 31:case"end":return e.stop()}}),e)})))()},getRightData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return j(s.a.mark((function e(){var i,n,o,r,c,l,p,m,u,d,h,g;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(w["f"])(a);case 2:return i=e.sent,n=i.data,t.rightData.heatMapData=n,e.next=7,Object(w["b"])(a);case 7:return o=e.sent,r=o.data,t.rightData.companySizeData=r,e.next=12,Object(w["c"])(a);case 12:return c=e.sent,l=c.data,t.rightData.educationData=l,e.next=17,Object(w["a"])(a);case 17:return p=e.sent,m=p.data,0===m.length&&(m=[{name:"CodeRush",value:2739},{name:"大数据招聘分析平台",value:2739},{name:"广告位招租",value:2739}]),t.rightData.benefitData=m,e.next=23,Object(w["d"])(a);case 23:return u=e.sent,d=u.data,t.rightData.financeStage=d,e.next=28,Object(w["e"])(a);case 28:h=e.sent,g=h.data,t.rightData.positionData=g;case 31:case"end":return e.stop()}}),e)})))()}}},k=L,R=(e("d685"),Object(f["a"])(k,i,n,!1,null,"498305bc",null));a["default"]=R.exports},a6a5:function(t,a,e){},d685:function(t,a,e){"use strict";var i=e("a6a5"),n=e.n(i);n.a},f413:function(t,a,e){"use strict";var i=e("00f9"),n=e.n(i);n.a}}]);
//# sourceMappingURL=chunk-55e045b4.cfc90a67.js.map