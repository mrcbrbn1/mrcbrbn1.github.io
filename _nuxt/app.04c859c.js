(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{116:function(e,t,o){"use strict";var n=o(12),r=(o(27),o(37),{install:function(e,t){e.prototype.$_timeouts=[],e.prototype.$_intervals=[],e.prototype.$_listeners=[],e.prototype.$_requestAnimationFrames=[],e.mixin({destroyed:function(){this.$_timeouts.forEach((function(e){return window.clearTimeout(e)})),this.$_intervals.forEach((function(e){return window.clearInterval(e)})),this.$_listeners.forEach((function(e){var t=Object(n.a)(e,2),o=t[0],r=t[1];return window.removeEventListener(o,r)})),this.$_requestAnimationFrames.forEach((function(e){return window.cancelAnimationFrame(e.id)}))}}),e.prototype.$setInterval=function(e,t){this.$_intervals.push(window.setInterval(e,t))},e.prototype.$setTimeout=function(e,t){this.$_timeouts.push(window.setTimeout(e,t))},e.prototype.$requestAnimationFrame=function(e){var t={id:null};requestAnimationFrame((function o(time){e(time),t.id=requestAnimationFrame(o)})),this.$_requestAnimationFrames.push(t)},e.prototype.$addEventListener=function(e,t,o){this.$_listeners.push([e,t]),window.addEventListener(e,t,o)}}});o(1).default.use(r)},117:function(e,t,o){"use strict";var n=o(1),r=o(161);n.default.use(r.a,{config:{id:"G-L7MJCSDHKV",params:{send_page_view:!0}}})},156:function(e,t,o){var content=o(211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(60).default)("56b15182",content,!0,{sourceMap:!1})},157:function(e,t,o){var content=o(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(60).default)("67e4946d",content,!0,{sourceMap:!1})},164:function(e,t,o){"use strict";var n={mounted:function(){document.body.style="background: white"},head:function(){return this.$store.getters.getMeta(this.$route.path)}},r=(o(210),o(23)),component=Object(r.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},165:function(e,t,o){"use strict";var n={},r=(o(214),o(23)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("iframe",{staticClass:"old-frame",attrs:{src:"http://old.neal.fun.s3-website-us-east-1.amazonaws.com/draw-your-island/"}})])}],!1,null,"167fb083",null);t.a=component.exports},181:function(e,t,o){o(182),e.exports=o(183)},210:function(e,t,o){"use strict";o(156)},211:function(e,t,o){var n=o(59),r=o(168),l=o(212),c=o(213),h=n(!1),d=r(l),f=r(c);h.push([e.i,"@font-face{font-family:Roboto;src:url("+d+")}@font-face{font-family:Roboto;font-weight:700;src:url("+f+")}html{font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;color:#000;font-family:Roboto,sans-serif}*,:after,:before{box-sizing:border-box;margin:0}.simple-page{background:#f1f2f6}.pw_report_ad_container{display:none!important}",""]),e.exports=h},212:function(e,t,o){e.exports=o.p+"fonts/Roboto-Medium.7c8d04c.ttf"},213:function(e,t,o){e.exports=o.p+"fonts/Roboto-Bold.f80816a.ttf"},214:function(e,t,o){"use strict";o(157)},215:function(e,t,o){var n=o(59)(!1);n.push([e.i,".old-frame[data-v-167fb083]{position:fixed;top:0;left:0;width:100%;height:100%;border:none}",""]),e.exports=n},216:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return n})),o.d(t,"getters",(function(){return r}));o(173);var n=function(){return{homeMeta:{title:"neal.fun",link:[{rel:"canonical",href:"https://neal.fun"},{rel:"icon",type:"image/png",href:"/favicons/home.png"}]},posts:[{title:"Design the next iPhone",desc:"Apple is running out of ideas and needs your help.",path:"design-the-next-iphone"},{title:"Absurd Trolley Problems",desc:"Every problem is the trolley problem.",path:"absurd-trolley-problems"},{title:"Earth Reviews",desc:"Help improve the simulation.",path:"earth-reviews"},{title:"Privacy Policy",desc:"",path:"privacy-policy",hidden:!0},{title:"Let's Settle This",desc:"It's time to settle the endless internet debates.",path:"lets-settle-this"},{title:"Ambient Chaos",desc:"Ambient music gone a little too far...",path:"ambient-chaos"},{title:"Ten Years Ago",desc:"What did the internet look like ten years ago?",path:"ten-years-ago"},{title:"Rocks",desc:"It's just rocks",path:"rocks"},{title:"Sell! Sell! Sell!",desc:"Visualizing the products that won capitalism.",path:"sell-sell-sell"},{title:"Universe Forecast",desc:"What does the future look like?",path:"universe-forecast"},{title:"The Auction Game",desc:"Can you guess the price of these paintings?",path:"auction-game"},{title:"Printing Money",desc:"Visualize the flow of money",path:"printing-money"},{title:"Life Stats",desc:"Find out what's happened in your lifetime.",path:"life-stats"},{title:"The Deep Sea",desc:"Scroll down the deep sea in this interactive page.",path:"deep-sea"},{title:"The Size of Space",desc:"Explore the scale of the universe",path:"size-of-space"},{title:"Share This Page",desc:"There are so many ways to share this page",path:"share-this-page"},{title:"Dark Patterns",desc:"Dark patterns are tricks that companies use to get you to do things without your knowledge",path:"dark-patterns"},{title:"Who Was Alive?",desc:"View history in a new way",path:"who-was-alive"},{title:"Where does the day go?",desc:"Why does it often feel like you have no time?",path:"where-does-the-day-go"},{title:"Life Checklist",desc:"How many items have you completed?",path:"life-checklist"},{title:"Speed",desc:"See how fast you're moving right now!",path:"speed"},{title:"Paper",desc:"What happens if you keep folding a piece of paper?",path:"paper"},{title:"Draw Logos From Memory",desc:"How well can you draw famous logos?",path:"logos-from-memory"},{title:"Progress",desc:"Visualizing the world with progress bars",path:"progress"},{title:"Spend Bill Gates' Money",desc:"What would you do with 100 billion dollars? Find out by spending all of Bill Gates' money!",path:"spend"},{title:"Baby Map",desc:"Where are babies being born?",path:"baby-map"},{title:"Draw Your Island",desc:"What would you island have?",path:"draw-your-island",hidden:!0},{title:"Macaroni Draw",desc:"Make your masterpiece",path:"macaroni-draw",hidden:!0},{title:"Conquer the World",desc:"How many countries have you visited?",path:"conquer-the-world",hidden:!0}]}},r={getMeta:function(e){return function(path){if("/"===path)return e.homeMeta;var t=e.posts.find((function(e){return"/".concat(e.path,"/")===path}));if(!t)return{link:[],meta:[],title:""};var o="https://neal.fun",n="".concat(o,"/").concat(t.path,"/"),r="".concat(o,"/share-cards/").concat(t.path,".png");"absurd-trolley-problems"===t.path&&(r="".concat(o,"/share-cards/").concat(t.path,"2.png"));var l="/favicons/".concat(t.path,".png");return{title:t.title,link:[{rel:"canonical",href:n},{rel:"icon",type:"image/png",href:l}],meta:[{name:"title",content:t.title},{name:"description",content:t.desc},{property:"og:type",content:"website"},{property:"og:url",content:n},{property:"og:title",content:t.title},{property:"og:description",content:t.desc},{property:"og:image",content:r},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:url",content:n},{property:"twitter:title",content:t.title},{property:"twitter:description",content:t.desc}]}}}}}},[[181,44,7,45]]]);