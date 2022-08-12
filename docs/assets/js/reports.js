!function(u){"use strict";var e,r=(r=document.baseURI).replace("report.html","assets/data/"),a=u(".block-chart"),b="Space Grotesk",T=window.echarts,d={padding:[15,20],backgroundColor:"#21063C",borderWidth:0,extraCssText:"border-radius: 10px;box-shadow: 0 4px 50px rgba(161, 107, 216, 0.5);",textStyle:{fontFamily:b,color:"#7B8098",fontSize:14,fontWeight:"500"}},l=u.extend(!0,{},d,{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"rgba(255,255,255,0.3)"},lineStyle:{type:[4,4],color:"rgba(255,255,255,0.3)"}}}),y={show:!0,icon:"roundRect",textStyle:{fontFamily:b,color:"#ffffff",fontSize:13,fontWeight:"600",padding:[0,0,0,3]},itemWidth:14,itemHeight:14,itemGap:30,top:"bottom",type:"scroll",pageIconColor:"#ffffff",pageIconInactiveColor:"rgba(255,255,255,0.2)",pageTextStyle:{fontFamily:b,color:"#ffffff",fontSize:13,fontWeight:"600"}},s={label:{color:"#66E1B6",backgroundColor:"#262C4A"}};function p(e){return e.replace(/,(?=[\d,]*\.\d{2}\b)/g,"")}function f(e,t){var a=Math.pow(10,t);return Math.round((t<0?e:.01/a+e)*a)/a}function c(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function m(e){return 1e9<=Math.abs(Number(e))?Math.abs(Number(e))/1e9+"B":1e6<=Math.abs(Number(e))?Math.abs(Number(e))/1e6+"M":1e3<=Math.abs(Number(e))?Math.abs(Number(e))/1e3+"K":Math.abs(Number(e))}function n(){var e={};return 767<window.innerWidth?e={xAxis:{splitNumber:8}}:(e={tooltip:{trigger:"axis"},xAxis:{splitNumber:4}},window.innerWidth<460&&u.extend(e,{xAxis:{splitNumber:2}})),e}function Z(){var e={};return 767<window.innerWidth?e={xAxis:{splitNumber:8}}:(e={xAxis:{splitNumber:4}},window.innerWidth<460&&u.extend(!0,e,{xAxis:{splitNumber:2}})),e}function h(){var e={};return 767<window.innerWidth?e={yAxis:{axisLabel:{formatter:"{value}"}},xAxis:{splitNumber:8}}:(e={yAxis:{axisLabel:{formatter:m}},xAxis:{splitNumber:4}},window.innerWidth<460&&u.extend(e,{xAxis:{splitNumber:2}})),e}function x(){return 767<window.innerWidth?{yAxis:{axisLabel:{fontSize:18}},series:[{label:{fontSize:18},barMaxWidth:48,itemStyle:{borderRadius:[8,0,0,8]}},{label:{fontSize:18},barMaxWidth:48,itemStyle:{borderRadius:[0,8,8,0]}}]}:{yAxis:{axisLabel:{fontSize:13}},series:[{label:{fontSize:16},barMaxWidth:32,itemStyle:{borderRadius:[5,0,0,5]}},{label:{fontSize:16},barMaxWidth:32,itemStyle:{borderRadius:[0,5,5,0]}}]}}function g(){var e={};return 767<window.innerWidth?e={xAxis:{splitNumber:8}}:(e={xAxis:{splitNumber:4}},window.innerWidth<460&&u.extend(!0,e,{xAxis:{splitNumber:2}})),e}function S(){var e={};return 767<window.innerWidth?e={grid:{left:78},yAxis:{nameGap:100,nameTextStyle:{fontSize:15},axisLabel:{formatter:"{value}"}},xAxis:{splitNumber:8,axisLabel:{formatter:"{dd} {MMM} {yy}"}}}:(e={grid:{left:50},yAxis:{nameGap:50,nameTextStyle:{fontSize:14},axisLabel:{formatter:m}},xAxis:{splitNumber:4,axisLabel:{formatter:"{MMM} {yy}"}}},window.innerWidth<460&&u.extend(e,{xAxis:{splitNumber:3}})),e}function v(a,e,o,i,r,t){var n=a.length,l=[];e.forEach(function(e){l[e.name]=[]});for(var s=0;s<n;s++)e.forEach(function(e){var t=a[s][e.name]?p(a[s][e.name]):"";l[e.name].push([a[s].date,t])});var c=[],m=(e.forEach(function(e,t){e={name:e.label,data:l[e.name],itemStyle:{color:o[t]},type:"line",smooth:!0,showSymbol:!1,connectNulls:!0,emphasis:{focus:"series"}};i&&i[t]&&(e.areaStyle={color:new T.graphic.LinearGradient(0,0,1,1,[{offset:0,color:i[t][0]},{offset:1,color:i[t][1]}])}),void 0!==r&&(e=u.extend(!0,{},e,r)),c.push(e)}),{color:o,textStyle:{fontFamily:b,fontWeight:500},tooltip:u.extend(!0,{},d,{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"rgba(255,255,255,0.3)"},lineStyle:{type:[4,4],color:"rgba(255,255,255,0.3)"}}}),legend:y,grid:{left:"3%",right:"3%",top:"3%",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,axisTick:{show:!1},axisLine:{lineStyle:{color:"#212845"}},splitLine:{show:!1,lineStyle:{type:[4,4],color:["#212845"]}},axisPointer:{label:{color:"#66E1B6",backgroundColor:"#262C4A"}},axisLabel:{formatter:"{dd} {MMM} {yy}",color:"#7B8098"}},yAxis:{type:"value",axisLine:{show:!1},splitNumber:4,splitLine:{lineStyle:{type:[4,4],color:["#212845"]}},axisPointer:{label:{color:"#66E1B6",backgroundColor:"#262C4A"}},axisLabel:{color:"#7B8098"}},series:c});return t?u.extend(!0,{},m,t):m}function w(e){var t={},a=(767<window.innerWidth?t={xAxis:{splitNumber:8}}:(t={xAxis:{splitNumber:3}},window.innerWidth<460&&u.extend(!0,t,{xAxis:{splitNumber:2}})),{});switch(e){case"polkadot-parachain":case"kusama-parachain":case"dotsama-dex":case"dotsama-lending-protocol":case"ausd-issuance":t.tooltip={valueFormatter:function(e){return e?"$"+c(e):"-"}},a=767<window.innerWidth?{axisPointer:{label:{formatter:"${value}"}},axisLabel:{formatter:"${value}"}}:{axisPointer:{label:{formatter:"${value}"}},axisLabel:{formatter:function(e){return e?"$"+m(e):"-"}}},t.yAxis=a;break;case"rmrk-cumulative-sales":a=767<window.innerWidth?{axisLabel:{formatter:"{value}"}}:{axisLabel:{formatter:function(e){return e?m(e):"-"}}},t.yAxis=a}return"rmrk-cumulative-sales"===e&&(767<window.innerWidth?u.extend(!0,t,{grid:{left:54},yAxis:{nameTextStyle:{fontSize:15},nameGap:83},series:[{lineStyle:{width:4}}]}):u.extend(!0,t,{grid:{left:40},yAxis:{nameTextStyle:{fontSize:14},nameGap:56},series:[{lineStyle:{width:2}}]})),t}u(document).ready(function(){var t;a.waypoint(function(){var e=this.element||this,e=u(e),a=e.data("chart-name"),t=e.data("chart-source"),o=T.init(e.get(0),"macarons");if(o.showLoading("default",{text:"loading",color:"#66e1b6",textColor:"#66e1b6",maskColor:"#070e30",zlevel:0,fontSize:18,showSpinner:true,spinnerRadius:10,lineWidth:2,fontWeight:600,fontStyle:"normal",fontFamily:b}),a)if("inline"!==t)fetch(r+(void 0!==t?t:a)+".json").then(function(e){return e.json()}).then(function(e){var t={};switch(a){case"price-dev-act":t=function(e){for(var t=e.length,a={kusama:[],polkadot:[],dev:[]},o=["#66E1B6","#EC4E44","#A2B253"],i=0;i<t;i++)a.kusama.push([e[i].date,e[i].ksm]),a.polkadot.push([e[i].date,e[i].dot]),a.dev.push([e[i].date,e[i].dev]);var o={color:o,textStyle:{fontFamily:b,fontWeight:500},tooltip:l,legend:y,grid:{left:"3%",right:95,top:"3%",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,splitLine:{show:!0,lineStyle:{type:[4,4],color:["#212845"]}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#212845"}},axisPointer:s,axisLabel:{formatter:"{dd} {MMM} {yy}",color:"#7B8098"}},yAxis:[{type:"value",name:"KSM Price",nameTextStyle:{fontSize:0},position:"right",alignTicks:!0,axisLine:{show:!0,lineStyle:{color:o[0]}},splitLine:{lineStyle:{type:[4,4],color:["#212845"]}},axisPointer:{label:{color:"#020722",backgroundColor:"#66E1B6"}},axisLabel:{color:"#7B8098"}},{type:"value",name:"DOT Price",nameTextStyle:{fontSize:0},position:"right",alignTicks:!0,offset:60,axisLine:{show:!0,lineStyle:{color:o[1]}},splitLine:{lineStyle:{type:[4,4],color:["#212845"]}},axisLabel:{color:"#7B8098"}},{type:"value",name:"Development Activity",nameTextStyle:{fontSize:0},position:"right",alignTicks:!0,offset:120,splitLine:{lineStyle:{type:[4,4],color:["#212845"]}},axisLine:{show:!0,lineStyle:{color:o[2]}},axisLabel:{color:"#7B8098"}}],series:[{name:"KSM Price",data:a.kusama,itemStyle:{color:o[0]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:"DOT Price",data:a.polkadot,itemStyle:{color:o[1]},type:"line",smooth:!0,showSymbol:!1,yAxisIndex:1,emphasis:{focus:"series"}},{name:"Development Activity",data:a.dev,areaStyle:{color:new T.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"rgba(213, 234, 114,0.5)"},{offset:1,color:"rgba(7, 14, 48,0)"}])},itemStyle:{color:o[2]},type:"line",smooth:!0,showSymbol:!1,yAxisIndex:2,emphasis:{focus:"series"}}]},r=n();return u.extend(!0,o,r),o}(e);break;case"dev-act-comparison":t=function(e){for(var t=e.length,a={cosmos:[],dot:[],eth:[],sol:[],btc:[]},o=["#4CFCFC","#004BFF","#8E54F7","#E6007A","#EA973D"],i=0;i<t;i++)a.dot.push([e[i].date,e[i].dot]),a.eth.push([e[i].date,e[i].eth]),a.sol.push([e[i].date,e[i].sol]),a.cosmos.push([e[i].date,e[i].near]),a.btc.push([e[i].date,e[i].matic]);var o={color:o,textStyle:{fontFamily:b,fontWeight:500},tooltip:l,legend:y,grid:{left:"3%",right:"3%",top:"3%",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,axisTick:{show:!1},axisLine:{lineStyle:{color:"#212845"}},splitLine:{show:!0,lineStyle:{type:[4,4],color:["#212845"]}},axisPointer:s,axisLabel:{formatter:"{dd} {MMM} {yy}",color:"#7B8098"}},yAxis:{type:"value",position:"right",axisLine:{show:!0,lineStyle:{color:o[0]}},splitLine:{lineStyle:{type:[4,4],color:["#212845"]}},axisPointer:s,axisLabel:{color:"#7B8098"}},series:[{name:"Cosmos",data:a.cosmos,itemStyle:{color:o[0]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:"Ethereum",data:a.eth,itemStyle:{color:o[1]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:"Solana",data:a.sol,itemStyle:{color:o[2]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:"Polkadot",data:a.dot,itemStyle:{color:o[3]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:"Bitcoin",data:a.btc,itemStyle:{color:o[4]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}}]},r=Z();return u.extend(!0,o,r)}(e);break;case"polkadot-parachain":t=function(e,t){t=v(t,[{name:"parallel",label:"Parallel"},{name:"acala",label:"Acala"}],["#2F74F7","#EA1B53"],[["rgba(26,65,149,1)","rgba(26,65,149,0)"],["rgba(102,19,63,1)","rgba(102,19,63,0.3)"]]),e=w(e);return u.extend(!0,t,e)}(a,e);break;case"kusama-parachain":t=function(e,t){t=v(t,[{name:"karura",label:"Karura"},{name:"bifrost",label:"Bifrost"},{name:"genshiro",label:"Genshiro"}],["#C30D00","#5A25F0","#FB7930"]),e=w(e);return u.extend(!0,t,e)}(a,e);break;case"dotsama-dex":t=function(e,t){t=v(t,[{name:"stellaswap",label:"StellaSwap"},{name:"beamswap",label:"Beamswap"},{name:"solarbeam",label:"Solarbeam"},{name:"solarflare",label:"Solarflare"},{name:"zenlink",label:"Zenlink"},{name:"arthswap",label:"ArthSwap"}],["#66E1B6","#C30D00","#F7A21B","#9D3BEA","#89C900","#004BFF"]),e=w(e);return u.extend(!0,t,e)}(a,e);break;case"dotsama-lending-protocol":t=function(e,t){t=v(t,[{name:"starlay",label:"Starlay"},{name:"artemis",label:"Moonwell Artemis"},{name:"apollo",label:"Moonwell Apollo"}],["#D50075","#B8E94A","#5C42FB"],[["rgba(95,16,102,1)","rgba(95,16,102,0.4)"],["rgba(77,99,64,1)","rgba(77,99,64,0.4)"],["rgba(37,33,122,1)","rgba(37,33,122,0.4)"]]),e=w(e);return u.extend(!0,t,e)}(a,e);break;case"ausd-issuance":t=function(e,t){t=v(t,[{name:"acala",label:"Acala"},{name:"karura",label:"Karura"}],["#C30D00","#004BFF"],[["rgba(108,13,22,0.9)","rgba(108,13,22,0.3)"],["rgba(23,46,152,0.9)","rgba(23,46,152,0.3)"]],{stack:"total"}),e=w(e);return u.extend(!0,t,e)}(a,e);break;case"rmrk-cumulative-sales":t=function(e,t){t=v(t,[{name:"cumulative_sum_of_amount",label:"Cumulative Sum of Amount"}],["#CA2B77"],[["rgba(86,25,77,1)","rgba(86,25,77,0)"]],{lineStyle:{width:4}},{legend:{show:!1},grid:{left:54,bottom:"3%"},xAxis:{splitLine:{show:!0}},yAxis:{name:"Volume (KSM)",nameLocation:"middle",nameGap:83,nameTextStyle:{fontFamily:b,color:"#7B8098",fontSize:15,fontWeight:"500"},splitNumber:4}}),e=w(e);return u.extend(!0,t,e),t}(a,e);break;case"rmrk-daily-sales":t=function(a){var e=[{name:"kanbird",label:"KANBIRD"},{name:"kanchamp",label:"KANCHAMP"},{name:"kanprtn",label:"KANPRTN"},{name:"evrloot",label:"EVRLOOT"},{name:"kk01",label:"KK01"},{name:"rmrkbnnrs",label:"RMRKBNNRS"},{name:"kq01",label:"KQ01"},{name:"kanbg",label:"KANBG"},{name:"others",label:"Others"}],o=["#004BFF","#DF5C53","#709BF5","#66E1B6","#9D3BEA","#2D9C42","#889641","#E12C29","#F7A21B"],t=a.length,i=[],r=[];e.forEach(function(e){i[e.name]=[]});for(var n=0;n<t;n++)e.forEach(function(e){var t=a[n][e.name]?p(a[n][e.name]):"";i[e.name].push([a[n].date,t])});e.forEach(function(e,t){r.push({name:e.label,data:i[e.name],itemStyle:{color:o[t]},type:"bar",stack:"total",emphasis:{focus:"series"}})});var l={color:o,textStyle:{fontFamily:b,fontWeight:500},tooltip:{trigger:"axis",padding:[15,20],backgroundColor:"#21063C",borderWidth:0,extraCssText:"border-radius: 10px;box-shadow: 0 4px 50px rgba(161, 107, 216, 0.5);",textStyle:{fontFamily:b,color:"#7B8098",fontSize:14,fontWeight:"500"},axisPointer:{type:"shadow",label:{color:"#020722",backgroundColor:"#4ccbc9"},crossStyle:{color:"rgba(255,255,255,0.3)"},lineStyle:{type:[4,4],color:"rgba(255,255,255,0.3)"}}},legend:y,grid:{left:78,right:"3%",top:"3%",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"#212845"}},splitLine:{show:!0,lineStyle:{type:[4,4],color:["#212845"]}},axisPointer:{label:{color:"#66E1B6",backgroundColor:"#262C4A"}},axisLabel:{formatter:"{dd} {MMM} {yy}",color:"#7B8098"}},yAxis:{type:"value",axisLine:{show:!1},splitLine:{show:!0,lineStyle:{type:[4,4],color:["#212845"]}},axisPointer:{label:{color:"#66E1B6",backgroundColor:"#262C4A"}},axisLabel:{color:"#7B8098"},name:"Volume (KSM)",nameLocation:"middle",nameGap:100,nameTextStyle:{fontFamily:b,color:"#7B8098",fontSize:15,fontWeight:"500"}},series:r},s=S();return u.extend(!0,l,s),l}(e);break;case"web-assembly-usage":t=function(e){var t=[{name:"notused",label:"Not used"},{name:"occasionally",label:"Have used occasionally"},{name:"sometimes",label:"Use sometimes"},{name:"frequently",label:"Use frequently"}],a=t.length,o=["#004BFF","#DF5C53","#F7A21B","#66E1B6"],i=[{name:"rust",label:"Rust"},{name:"javascript",label:"JavaScript"},{name:"c_plus",label:"C++"},{name:"blazor",label:"Blazor"},{name:"assemblyscript",label:"AssemblyScript"},{name:"python",label:"Python"},{name:"go",label:"Go"},{name:"wat",label:"WAT"},{name:"zig",label:"Zig"},{name:"java",label:"Java"},{name:"swift",label:"Swift"},{name:"ruby",label:"Ruby"},{name:"grain",label:"Grain"}],r=e.length,n=[],l=[];t.forEach(function(e){n[e.name]=[]});for(var s=0;s<i.length;s++)for(var c=i[s].total=0;c<r;c++){var m=parseInt(e[c][i[s].name]);switch(i[s].total+=m,e[c].category){case"use frequently":i[s].frequently=m;break;case"use sometimes":i[s].sometimes=m;break;case"have used occasionally":i[s].occasionally=m;break;case"not used":i[s].notused=m}}for(c=0;c<i.length;c++){var u=i[c].total;i[c].frequentlyPercent=f(i[c].frequently/u*100,2),i[c].sometimesPercent=f(i[c].sometimes/u*100,2),i[c].occasionallyPercent=f(i[c].occasionally/u*100,2),i[c].notusedPercent=f(100-i[c].frequentlyPercent-i[c].sometimesPercent-i[c].occasionallyPercent,2)}for(var T=0;T<t.length;T++){t[T].data=[];for(var d=t[T].name,s=0;s<i.length;s++)t[T].data.push(i[s][d+"Percent"])}return t.forEach(function(e,t){e={name:e.label,data:e.data,realData:e.realData,foo:"bar",itemStyle:{color:o[t]},barMaxWidth:24,type:"bar",stack:"total",emphasis:{focus:"series"}};0===t&&(e.itemStyle.borderRadius=[0,0,3,3]),t===a-1&&(e.itemStyle.borderRadius=[3,3,0,0]),l.push(e)}),{color:o,textStyle:{fontFamily:b,fontWeight:500},tooltip:{trigger:"axis",padding:[15,20],backgroundColor:"#21063C",borderWidth:0,extraCssText:"border-radius: 10px;box-shadow: 0 4px 50px rgba(161, 107, 216, 0.5);",textStyle:{fontFamily:b,color:"#7B8098",fontSize:14,fontWeight:"500"},valueFormatter:function(e){return e+"%"},axisPointer:{type:"shadow",label:{color:"#020722",backgroundColor:"#4ccbc9"},crossStyle:{color:"rgba(255,255,255,0.3)"},lineStyle:{type:[4,4],color:"rgba(255,255,255,0.3)"}}},legend:y,grid:{left:"3%",right:"3%",top:"3%",containLabel:!0},xAxis:{type:"category",data:["Rust","JavaScript","C++","Blazor","AssemblyScript","Python","Go","WAT","Zig","Java","Swift","Ruby","Grain"],axisLabel:{interval:0,rotate:30}},yAxis:{type:"value",axisLine:{show:!1},splitLine:{show:!0,lineStyle:{type:[4,4],color:["#212845"]}},axisLabel:{formatter:"{value}%",color:"#7B8098"}},series:l}}(e);break;case"dot-treasury-activity":t=function(a){var e=[{name:"income",label:"Income"},{name:"output",label:"Output"},{name:"treasury_balance",label:"Treasury"}],t=["#66E1B6","#EA1B53","#F7A21B"],o=a.length,i=[];e.forEach(function(e){i[e.name]=[]});for(var r=0;r<o;r++)e.forEach(function(e){var t=a[r][e.name]?p(a[r][e.name]):"";i[e.name].push([a[r].date,t])});var t={color:t,textStyle:{fontFamily:b,fontWeight:500},tooltip:l,legend:y,grid:{left:"3%",right:"3%",top:"3%",containLabel:!0},xAxis:{type:"time",boundaryGap:!1,axisTick:{show:!1},axisLine:{lineStyle:{color:"#212845"}},splitLine:{show:!1,lineStyle:{type:[4,4],color:["#212845"]}},axisPointer:s,axisLabel:{formatter:"{MMM} {yy}",color:"#7B8098"}},yAxis:{type:"value",position:"right",axisLine:{show:!1},splitLine:{lineStyle:{type:[4,4],color:["#212845"]}},axisPointer:u.extend(!0,{},s,{label:{formatter:function(e){return c(parseInt(e.value))}}}),axisLabel:{formatter:m,color:"#7B8098"}},series:[{name:"Income",data:i.income,areaStyle:{opacity:.2},itemStyle:{color:t[0]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:"Output",data:i.output,zlevel:3,areaStyle:{opacity:1,color:new T.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(107,20,63,1)"},{offset:1,color:"rgba(42,16,53,0)"}])},itemStyle:{color:t[1]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}},{name:"Treasury",data:i.treasury_balance,areaStyle:{opacity:1,color:new T.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(92,91,61,1)"},{offset:.7,color:"rgba(7,14,48,1)"}])},itemStyle:{color:t[2]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"}}]},n=g();return u.extend(!0,t,n)}(e)}o.hideLoading(),o.setOption(t)});else{var i={};switch(a){case"treasury-output":i={color:["#66E1B6","#F7A21B","#DF5C53","#004BFF"],tooltip:u.extend(!0,{},d,{trigger:"item",valueFormatter:function(e){return c(e)+" DOT"}}),legend:y,grid:{left:"3%",right:"3%",top:"0",containLabel:!0},series:[{name:"Treasury Output",type:"pie",center:["50%","45%"],radius:["68%","86%"],label:{color:"#A8ADC3",fontFamily:b,fontWeight:500,fontSize:18,position:"center",formatter:["{a|6.66M} {x|DOT}","{t|Total amount}"].join("\n"),rich:{a:{color:"#66E1B6",fontFamily:b,fontWeight:700,fontSize:"30"},x:{color:"#ffffff",fontFamily:b,fontWeight:700,fontSize:"30"},t:{color:"#A8ADC3",fontFamily:b,fontWeight:500,fontSize:18,padding:[18,0,0,0]}}},labelLine:{show:!1},itemStyle:{borderColor:"#070e30",borderWidth:4},emphasis:{scaleSize:5},data:[{value:470447,name:"Proposal"},{value:12212,name:"Tips"},{value:1103232,name:"Bounties"},{value:5070182,name:"Burnt"}]}]};break;case"polkadot-account-overview":i=function(){var e=["#E6007A"],t=[["date","incremental","cumulative"],["2021-11-04T00:00:00Z",1510,1510],["2021-11-05T00:00:00Z",17925,19435],["2021-11-06T00:00:00Z",15073,34508],["2021-11-07T00:00:00Z",14832,49340],["2021-11-08T00:00:00Z",14791,64131],["2021-11-09T00:00:00Z",13825,77956],["2021-11-10T00:00:00Z",15283,93239],["2021-11-11T00:00:00Z",15526,108765],["2021-11-12T00:00:00Z",9788,118553],["2021-11-13T00:00:00Z",8617,127170],["2021-11-14T00:00:00Z",6755,133925],["2021-11-15T00:00:00Z",6921,140846],["2021-11-16T00:00:00Z",7674,148520],["2021-11-17T00:00:00Z",7364,155884],["2021-11-18T00:00:00Z",6514,162398],["2021-11-19T00:00:00Z",5257,167655],["2021-11-20T00:00:00Z",4981,172636],["2021-11-21T00:00:00Z",5238,177874],["2021-11-22T00:00:00Z",5349,183223],["2021-11-23T00:00:00Z",5225,188448],["2021-11-24T00:00:00Z",5559,194007],["2021-11-25T00:00:00Z",5234,199241],["2021-11-26T00:00:00Z",5055,204296],["2021-11-27T00:00:00Z",4513,208809],["2021-11-28T00:00:00Z",4744,213553],["2021-11-29T00:00:00Z",5511,219064],["2021-11-30T00:00:00Z",8117,227181],["2021-12-01T00:00:00Z",7671,234852],["2021-12-02T00:00:00Z",8154,243006],["2021-12-03T00:00:00Z",5360,248366],["2021-12-04T00:00:00Z",7452,255818],["2021-12-05T00:00:00Z",5739,261557],["2021-12-06T00:00:00Z",5985,267542],["2021-12-07T00:00:00Z",5754,273296],["2021-12-08T00:00:00Z",4882,278178],["2021-12-09T00:00:00Z",4832,283010],["2021-12-10T00:00:00Z",4694,287704],["2021-12-11T00:00:00Z",4485,292189],["2021-12-12T00:00:00Z",4582,296771],["2021-12-13T00:00:00Z",4820,301591],["2021-12-14T00:00:00Z",4955,306546],["2021-12-15T00:00:00Z",4350,310896],["2021-12-16T00:00:00Z",3768,314664],["2021-12-17T00:00:00Z",4932,319596],["2021-12-18T00:00:00Z",4344,323940],["2021-12-19T00:00:00Z",3581,327521],["2021-12-20T00:00:00Z",3852,331373],["2021-12-21T00:00:00Z",4102,335475],["2021-12-22T00:00:00Z",4771,340246],["2021-12-23T00:00:00Z",4344,344590],["2021-12-24T00:00:00Z",4244,348834],["2021-12-25T00:00:00Z",3854,352688],["2021-12-26T00:00:00Z",4226,356914],["2021-12-27T00:00:00Z",5112,362026],["2021-12-28T00:00:00Z",4761,366787],["2021-12-29T00:00:00Z",4593,371380],["2021-12-30T00:00:00Z",4620,376e3],["2021-12-31T00:00:00Z",4125,380125],["2022-01-01T00:00:00Z",3287,383412],["2022-01-02T00:00:00Z",3848,387260],["2022-01-03T00:00:00Z",4034,391294],["2022-01-04T00:00:00Z",4187,395481],["2022-01-05T00:00:00Z",4485,399966],["2022-01-06T00:00:00Z",4187,404153],["2022-01-07T00:00:00Z",4165,408318],["2022-01-08T00:00:00Z",3636,411954],["2022-01-09T00:00:00Z",3271,415225],["2022-01-10T00:00:00Z",3512,418737],["2022-01-11T00:00:00Z",4693,423430],["2022-01-12T00:00:00Z",5989,429419],["2022-01-13T00:00:00Z",3919,433338],["2022-01-14T00:00:00Z",3424,436762],["2022-01-15T00:00:00Z",2918,439680],["2022-01-16T00:00:00Z",3436,443116],["2022-01-17T00:00:00Z",3207,446323],["2022-01-18T00:00:00Z",2973,449296],["2022-01-19T00:00:00Z",3533,452829],["2022-01-20T00:00:00Z",3505,456334],["2022-01-21T00:00:00Z",4251,460585],["2022-01-22T00:00:00Z",4989,465574],["2022-01-23T00:00:00Z",3941,469515],["2022-01-24T00:00:00Z",4241,473756],["2022-01-25T00:00:00Z",3865,477621],["2022-01-26T00:00:00Z",3643,481264],["2022-01-27T00:00:00Z",3108,484372],["2022-01-28T00:00:00Z",3008,487380],["2022-01-29T00:00:00Z",3136,490516],["2022-01-30T00:00:00Z",2950,493466],["2022-01-31T00:00:00Z",2998,496464],["2022-02-01T00:00:00Z",3397,499861],["2022-02-02T00:00:00Z",2975,502836],["2022-02-03T00:00:00Z",2672,505508],["2022-02-04T00:00:00Z",2847,508355],["2022-02-05T00:00:00Z",2989,511344],["2022-02-06T00:00:00Z",2702,514046],["2022-02-07T00:00:00Z",3533,517579],["2022-02-08T00:00:00Z",3286,520865],["2022-02-09T00:00:00Z",3398,524263],["2022-02-10T00:00:00Z",3183,527446],["2022-02-11T00:00:00Z",2895,530341],["2022-02-12T00:00:00Z",2545,532886],["2022-02-13T00:00:00Z",2642,535528],["2022-02-14T00:00:00Z",2682,538210],["2022-02-15T00:00:00Z",2877,541087],["2022-02-16T00:00:00Z",2795,543882],["2022-02-17T00:00:00Z",2382,546264],["2022-02-18T00:00:00Z",2511,548775],["2022-02-19T00:00:00Z",2679,551454],["2022-02-20T00:00:00Z",2959,554413],["2022-02-21T00:00:00Z",2946,557359],["2022-02-22T00:00:00Z",3101,560460],["2022-02-23T00:00:00Z",2849,563309],["2022-02-24T00:00:00Z",3631,566940],["2022-02-25T00:00:00Z",2458,569398],["2022-02-26T00:00:00Z",2583,571981],["2022-02-27T00:00:00Z",3072,575053],["2022-02-28T00:00:00Z",3257,578310],["2022-03-01T00:00:00Z",3516,581826],["2022-03-02T00:00:00Z",3558,585384],["2022-03-03T00:00:00Z",3403,588787],["2022-03-04T00:00:00Z",2761,591548],["2022-03-05T00:00:00Z",2474,594022],["2022-03-06T00:00:00Z",2225,596247],["2022-03-07T00:00:00Z",2531,598778],["2022-03-08T00:00:00Z",2582,601360],["2022-03-09T00:00:00Z",3086,604446],["2022-03-10T00:00:00Z",2405,606851],["2022-03-11T00:00:00Z",2335,609186],["2022-03-12T00:00:00Z",3445,612631],["2022-03-13T00:00:00Z",2315,614946],["2022-03-14T00:00:00Z",2663,617609],["2022-03-15T00:00:00Z",2383,619992],["2022-03-16T00:00:00Z",2358,622350],["2022-03-17T00:00:00Z",2198,624548],["2022-03-18T00:00:00Z",2063,626611],["2022-03-19T00:00:00Z",2057,628668],["2022-03-20T00:00:00Z",2023,630691],["2022-03-21T00:00:00Z",1961,632652],["2022-03-22T00:00:00Z",2438,635090],["2022-03-23T00:00:00Z",2303,637393],["2022-03-24T00:00:00Z",2610,640003],["2022-03-25T00:00:00Z",2394,642397],["2022-03-26T00:00:00Z",2080,644477],["2022-03-27T00:00:00Z",2362,646839],["2022-03-28T00:00:00Z",3069,649908],["2022-03-29T00:00:00Z",2767,652675],["2022-03-30T00:00:00Z",2433,655108],["2022-03-31T00:00:00Z",2547,657655],["2022-04-01T00:00:00Z",2286,659941],["2022-04-02T00:00:00Z",2551,662492],["2022-04-03T00:00:00Z",2265,664757],["2022-04-04T00:00:00Z",2207,666964],["2022-04-05T00:00:00Z",2321,669285],["2022-04-06T00:00:00Z",2320,671605],["2022-04-07T00:00:00Z",2024,673629],["2022-04-08T00:00:00Z",2006,675635],["2022-04-09T00:00:00Z",1765,677400],["2022-04-10T00:00:00Z",1791,679191],["2022-04-11T00:00:00Z",2124,681315],["2022-04-12T00:00:00Z",2297,683612],["2022-04-13T00:00:00Z",2277,685889],["2022-04-14T00:00:00Z",2035,687924],["2022-04-15T00:00:00Z",2191,690115],["2022-04-16T00:00:00Z",1784,691899],["2022-04-17T00:00:00Z",1934,693833],["2022-04-18T00:00:00Z",2171,696004],["2022-04-19T00:00:00Z",2017,698021],["2022-04-20T00:00:00Z",1968,699989],["2022-04-21T00:00:00Z",2952,702941],["2022-04-22T00:00:00Z",2273,705214],["2022-04-23T00:00:00Z",2171,707385],["2022-04-24T00:00:00Z",2152,709537],["2022-04-25T00:00:00Z",2090,711627],["2022-04-26T00:00:00Z",2046,713673],["2022-04-27T00:00:00Z",2131,715804],["2022-04-28T00:00:00Z",2281,718085],["2022-04-29T00:00:00Z",1873,719958],["2022-04-30T00:00:00Z",1828,721786],["2022-05-01T00:00:00Z",1911,723697],["2022-05-02T00:00:00Z",1894,725591],["2022-05-03T00:00:00Z",1812,727403],["2022-05-04T00:00:00Z",1850,729253],["2022-05-05T00:00:00Z",2069,731322],["2022-05-06T00:00:00Z",1889,733211],["2022-05-07T00:00:00Z",1737,734948],["2022-05-08T00:00:00Z",2006,736954],["2022-05-09T00:00:00Z",3705,740659],["2022-05-10T00:00:00Z",3501,744160],["2022-05-11T00:00:00Z",5308,749468],["2022-05-12T00:00:00Z",6105,755573],["2022-05-13T00:00:00Z",4395,759968],["2022-05-14T00:00:00Z",3228,763196],["2022-05-15T00:00:00Z",2726,765922],["2022-05-16T00:00:00Z",2526,768448],["2022-05-17T00:00:00Z",2313,770761],["2022-05-18T00:00:00Z",2277,773038],["2022-05-19T00:00:00Z",2023,775061],["2022-05-20T00:00:00Z",1904,776965],["2022-05-21T00:00:00Z",1701,778666],["2022-05-22T00:00:00Z",1760,780426],["2022-05-23T00:00:00Z",1804,782230],["2022-05-24T00:00:00Z",1670,783900],["2022-05-25T00:00:00Z",1703,785603],["2022-05-26T00:00:00Z",1871,787474],["2022-05-27T00:00:00Z",1891,789365],["2022-05-28T00:00:00Z",1549,790914],["2022-05-29T00:00:00Z",1653,792567],["2022-05-30T00:00:00Z",1787,794354],["2022-05-31T00:00:00Z",1879,796233],["2022-06-01T00:00:00Z",1638,797871],["2022-06-02T00:00:00Z",1754,799625],["2022-06-03T00:00:00Z",1432,801057],["2022-06-04T00:00:00Z",1313,802370],["2022-06-05T00:00:00Z",1390,803760],["2022-06-06T00:00:00Z",1627,805387],["2022-06-07T00:00:00Z",1714,807101],["2022-06-08T00:00:00Z",1579,808680],["2022-06-09T00:00:00Z",1626,810306],["2022-06-10T00:00:00Z",1645,811951],["2022-06-11T00:00:00Z",1877,813828],["2022-06-12T00:00:00Z",2256,816084],["2022-06-13T00:00:00Z",3948,820032],["2022-06-14T00:00:00Z",2979,823011],["2022-06-15T00:00:00Z",3080,826091],["2022-06-16T00:00:00Z",2366,828457],["2022-06-17T00:00:00Z",2248,830705],["2022-06-18T00:00:00Z",2867,833572],["2022-06-19T00:00:00Z",2389,835961],["2022-06-20T00:00:00Z",2220,838181],["2022-06-21T00:00:00Z",2186,840367],["2022-06-22T00:00:00Z",1742,842109],["2022-06-23T00:00:00Z",1758,843867],["2022-06-24T00:00:00Z",1824,845691],["2022-06-25T00:00:00Z",1649,847340],["2022-06-26T00:00:00Z",1642,848982],["2022-06-27T00:00:00Z",1580,850562],["2022-06-28T00:00:00Z",1848,852410],["2022-06-29T00:00:00Z",2048,854458],["2022-06-30T00:00:00Z",2322,856780],["2022-07-01T00:00:00Z",2520,859300],["2022-07-02T00:00:00Z",3903,863203],["2022-07-03T00:00:00Z",2633,865836],["2022-07-04T00:00:00Z",2490,868326],["2022-07-05T00:00:00Z",2438,870764],["2022-07-06T00:00:00Z",2220,872984],["2022-07-07T00:00:00Z",2304,875288],["2022-07-08T00:00:00Z",2227,877515],["2022-07-09T00:00:00Z",1594,879109],["2022-07-10T00:00:00Z",1720,880829],["2022-07-11T00:00:00Z",1793,882622],["2022-07-12T00:00:00Z",1856,884478],["2022-07-13T00:00:00Z",1552,886030],["2022-07-14T00:00:00Z",2083,888113],["2022-07-15T00:00:00Z",1871,889984],["2022-07-16T00:00:00Z",1976,891960],["2022-07-17T00:00:00Z",2023,893983],["2022-07-18T00:00:00Z",2464,896447],["2022-07-19T00:00:00Z",2472,898919],["2022-07-20T00:00:00Z",2216,901135],["2022-07-21T00:00:00Z",1887,903022],["2022-07-22T00:00:00Z",2038,905060],["2022-07-23T00:00:00Z",1886,906946],["2022-07-24T00:00:00Z",1751,908697],["2022-07-25T00:00:00Z",1743,910440],["2022-07-26T00:00:00Z",2119,912559],["2022-07-27T00:00:00Z",2052,914611],["2022-07-28T00:00:00Z",2191,916802],["2022-07-29T00:00:00Z",2621,919423],["2022-07-30T00:00:00Z",2741,922164],["2022-07-31T00:00:00Z",3546,925710],["2022-08-01T00:00:00Z",718,926428]],t={color:e,textStyle:{fontFamily:b,fontWeight:500},tooltip:l,legend:{show:!1},grid:{left:"3%",right:"3%",top:"3%",bottom:"3%",containLabel:!0},dataset:{source:t},xAxis:{type:"time",boundaryGap:["0%","0%"],splitLine:{show:!0,lineStyle:{type:[4,4],color:["#212845"]}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#212845"}},axisPointer:s,axisLabel:{formatter:"{dd} {MMM} {yy}",color:"#7B8098"}},yAxis:{type:"value",splitLine:{lineStyle:{type:[4,4],color:["#212845"]}},axisLine:{show:!1,lineStyle:{type:[4,4],color:"#212845"}},axisPointer:s,axisLabel:{color:"#7B8098"}},series:{name:"Cumulative",areaStyle:{color:new T.graphic.LinearGradient(.5,.5,1,1,[{offset:.6,color:"rgba(80,9,72,0.6)"},{offset:1,color:"rgba(80,9,72,0)"}])},itemStyle:{color:e[0]},type:"line",smooth:!0,showSymbol:!1,emphasis:{focus:"series"},encode:{x:"date",y:"cumulative"}}},e=h();return u.extend(!0,t,e)}();break;case"vc-polkadot":i=function(){var e=function(){for(var e=[["category","investing","total"],["H1 2021",19,44],["Q3 2021",21,53],["Q4 2021",24,57],["H1 2022",29,82]],t=[["category","investing_percent","total_percent","investing","total"]],a=1;a<e.length;a++){var o=e[a][1],i=e[a][2],r=f(o/i*100,2);t.push([e[a][0],r,100,o,i])}return t}(),e={color:["#66E1B6","#004BFF"],textStyle:{fontFamily:b,fontWeight:500},tooltip:u.extend(!0,{},d,{valueFormatter:function(e){return e+"%"},trigger:"axis",axisPointer:{type:"shadow",label:{color:"#020722",backgroundColor:"#4ccbc9"},crossStyle:{color:"rgba(255,255,255,0.3)"},lineStyle:{type:[4,4],color:"rgba(255,255,255,0.3)"}}}),legend:y,grid:{left:"3%",right:"3%",top:"3%",containLabel:!0},xAxis:{type:"value",max:100,splitNumber:4,maxInterval:25,axisLine:{show:!1},splitLine:{lineStyle:{type:[4,4],color:["#2D3863"]}},axisLabel:{formatter:"{value}%",color:"#7B8098"}},yAxis:{type:"category",inverse:!0,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{type:[4,4],color:"#2D3863"}},splitLine:{lineStyle:{type:[4,4],color:["#2D3863"]}},axisLabel:{fontFamily:b,fontSize:18,fontWeight:500,color:"#A8ADC3"}},dataset:{source:e,dimensions:["category","investing","total","investing_percent","total_percent"]},series:[{type:"bar",stack:"total",name:"VCs Investing in Polkadot",label:{fontFamily:b,fontSize:18,fontWeight:500,align:"right",color:"#020722",show:!0,formatter:"{@[3]}"},barMaxWidth:48,itemStyle:{borderRadius:[8,0,0,8]},emphasis:{focus:"series"},datasetIndexnumber:4},{type:"bar",stack:"total",name:"Total VCs",label:{fontFamily:b,fontSize:18,fontWeight:500,align:"right",show:!0,formatter:"{@[4]}"},barMaxWidth:48,itemStyle:{borderRadius:[0,8,8,0]},emphasis:{focus:"series"},datasetIndexnumber:5}]},t=x();return u.extend(!0,e,t)}()}o.hideLoading(),o.setOption(i)}this.destroy()},{offset:"90%"}),u("#table-nft-market-overview").DataTable({info:!1,paging:!1,searching:!1}),(t=u("#table-of-contents")).on("click",".btn-close-panel",function(e){e.preventDefault(),e.stopPropagation(),t.removeClass("open")}),t.on("click",function(e){e.target===this&&t.removeClass("open")}),t.on("click","a",function(e){t.removeClass("open")}),u(document).on("click","#btn-open-panel",function(e){e.preventDefault(),e.stopPropagation(),t.addClass("open")})}),u(window).on("resize",function(){clearTimeout(e),e=setTimeout(function(){a.each(function(){var e=u(this),t=T.getInstanceByDom(e.get(0)),a=e.data("chart-name");if(void 0!==t){t.resize({width:"auto",height:"auto"});var o=!1;switch(a){case"price-dev-act":o=n();break;case"dev-act-comparison":o=Z();break;case"vc-polkadot":o=x();break;case"polkadot-account-overview":o=h();break;case"dot-treasury-activity":o=g();break;case"polkadot-parachain":case"kusama-parachain":case"dotsama-dex":case"dotsama-lending-protocol":case"ausd-issuance":case"rmrk-cumulative-sales":o=w(a);break;case"rmrk-daily-sales":o=S()}o&&t.setOption(o)}})},500)})}(jQuery);