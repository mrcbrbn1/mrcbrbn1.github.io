(window.webpackJsonp=window.webpackJsonp||[]).push([[34,11],{1093:function(t,e,o){"use strict";o.r(e);var n,C,r,c,l,d,f,v,m,L,h,x,y,w,M,k,_,P,F,U,D=o(6),R=(o(45),o(14),o(28),o(33),o(38),o(822),o(268),o(27),o(824)),B=o(283),j=o(825),A=100,Z=Math.max(2,window.devicePixelRatio),z={data:function(){return{ctx:null,muted:!1}},beforeDestroy:function(){B.Howler.unload(),document.body.style=""},mounted:(U=Object(D.a)(regeneratorRuntime.mark((function t(){var e,v,polygon,m,x,y,w,M,F,U=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k=[],_=[],P=[],h=[],document.body.style="overflow: hidden;",this.createRender(),t.next=8,o.e(60).then(o.t.bind(null,1063,7));case 8:for(n=t.sent,C=n.Vec2,n.Settings.maxPolygonVertices=50,r=n.World({gravity:C(0,-100)}),l=r.createBody(),d=r.createBody(),f=r.createBody(),this.onResize(),e=0;e<4;e++)v=this.createRockVertices(),polygon=n.Polygon(v),(m=r.createBody().setDynamic()).createFixture({shape:polygon,density:.3,friction:.3}),x=Math.floor(12*Math.random()),m.setUserData({index:e}),h[e]=j.d(L,{src:"/rocks/rock".concat(x,".jpg")}),m.setAngularDamping(1),m.setPosition(C(0,0)),k.push(m),_.push(this.scaleVertices(polygon.m_vertices)),y={position:_[e]},w=j.a(L,y),P.push(w);M=0,F=function(time){r.step((time-M)/1e3);var t=k.map((function(body){var t=body.getPosition();return[t.x/A,t.y/A]}));t=t.flat(),U.renderRocks(time/1e3,t),U.renderPost(time/1e3,t),M=time},new B.Howl({src:["/rocks/beach.mp3"],autoplay:!0,loop:!0,volume:.15}),r.on("pre-solve",(function(t){var e=t.getWorldManifold(),o=t.getFixtureA().getBody(),n=t.getFixtureB().getBody(),r=e.points[0],l=o.getLinearVelocityFromWorldPoint(r),d=n.getLinearVelocityFromWorldPoint(r),f=Math.abs(C.dot(d.sub(l),e.normal));if(f>15&&!c){var v=Math.floor(3*Math.random());-1!==o.m_userData.index&&-1!==n.m_userData.index||(v="sand"),new B.Howl({src:["/rocks/rock".concat(v,".mp3")],volume:Math.min(1.4,f/50)}).play()}})),this.$requestAnimationFrame(F),this.$addEventListener("resize",this.onResize);case 23:case"end":return t.stop()}}),t,this)}))),function(){return U.apply(this,arguments)}),methods:{createRender:function(){L=this.$refs.canvas.getContext("webgl",{preserveDrawingBuffer:!1}),v=j.c(L,["vs-rocks","fs-rocks"]),m=j.c(L,["vs-post","fs-post"]),L.enableVertexAttribArray(0),y=j.b(L);F=j.a(L,{position:{numComponents:2,data:[-1,-1,-1,1,1,1,1,1,-1,-1,1,-1]}}),x=j.d(L,{src:"/rocks/bg.jpg",flipY:!0})},onResize:function(){j.f(L.canvas,Z),L.viewport(0,0,L.canvas.width,L.canvas.height);var t=d.getFixtureList(),e=f.getFixtureList(),o=l.getFixtureList();o&&l.destroyFixture(o),t&&d.destroyFixture(t),e&&f.destroyFixture(e),this.createBounds()},createBounds:function(){w=window.innerWidth,M=window.innerHeight,w/=M,M=1,l.createFixture({shape:n.Edge(C(-120*w,-80*M),C(120*w,-80*M)),friction:.5}),l.setUserData({index:-1}),d.createFixture(n.Edge(C(-120*w,-100*M),C(-120*w,100*M))),d.setUserData({index:-2}),f.createFixture(n.Edge(C(120*w,-100*M),C(120*w,100*w))),f.setUserData({index:-2})},renderRocks:function(time,t){j.g(L,y),k.forEach((function(body,i){var e=body.getPosition(),o=body.getAngle(),n={time:.001*time,resolution:[window.innerWidth*Z,window.innerHeight*Z],offset:[e.x/A,e.y/A],angle:o,rock:h[body.m_userData.index],rocksPos:t};L.useProgram(v.program),L.bindFramebuffer(L.FRAMEBUFFER,y.framebuffer),j.h(L,v,P[i]),j.i(v,n),j.e(L,P[i],L.TRIANGLE_FAN)}))},renderPost:function(time,t){var e={scene:y.attachments[0],resolution:[window.innerWidth*Z,window.innerHeight*Z],bg:x,time:time,rocksPos:t};L.useProgram(m.program),L.bindFramebuffer(L.FRAMEBUFFER,null),j.h(L,m,F),j.i(m,e),j.e(L,F,L.TRIANGLES)},scaleVertices:function(t){for(var e=[],i=0;i<t.length;i++)e.push(t[i].x/100,t[i].y/100),e.push(0);return e},createRockVertices:function(){for(var t=new R.Noise(Math.random()),e=[],o=Math.min(window.innerWidth/window.innerHeight,1),n=6*Math.random()*o+11,r=6*Math.random()*o+7,c=0;c<2*Math.PI;c+=2*Math.PI/50){var l=n+t.perlin2(Math.cos(c),Math.sin(c))*(n/4),d=Math.cos(c)*(l+r),f=Math.sin(c)*l;e.push(C(d,f))}return e},toPhysicsCoordY:function(t){return-200*(t/window.innerHeight-M/2)},toPhysicsCoordX:function(t){return 200*(t/window.innerHeight-w/2)},onMouseDown:function(t){var e,o,l=this,d=null!==(e=t.clientX)&&void 0!==e?e:t.touches[0].clientX,f=null!==(o=t.clientY)&&void 0!==o?o:t.touches[0].clientY;r.queryAABB(new n.AABB(C(this.toPhysicsCoordX(d),this.toPhysicsCoordY(f))),(function(t){var e=t.getBody(),o=r.createBody(C(l.toPhysicsCoordX(d),l.toPhysicsCoordY(f)),0);c&&r.destroyJoint(c),(c=r.createJoint(n.RevoluteJoint({bodyA:e,bodyB:o,localAnchorA:e.getLocalPoint(o.getPosition()),collideConnected:!1}))).enableLimit()}))},onMouseMove:function(t){var e,o;t.preventDefault();var n=null!==(e=t.clientX)&&void 0!==e?e:t.touches[0].clientX,r=null!==(o=t.clientY)&&void 0!==o?o:t.touches[0].clientY;c&&c.getBodyB().setPosition(C(this.toPhysicsCoordX(n),this.toPhysicsCoordY(r)))},onMouseUp:function(){c&&(r.destroyJoint(c),c=null)},toggleMute:function(){this.muted=!this.muted,B.Howler.mute(this.muted)},takeScreenshot:function(){var link=document.createElement("a");link.download="rocks",link.href=this.$refs.canvas.toDataURL("image/png"),link.click()}}},S=(o(826),o(23)),component=Object(S.a)(z,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("nuxt-link",{staticClass:"site-link",attrs:{to:"/"}},[o("logo",{attrs:{color:"white"}})],1),t._v(" "),o("div",{staticClass:"controls"},[o("img",{staticClass:"control-icon",attrs:{src:t.muted?"/rocks/muted.svg":"/rocks/unmuted.svg"},on:{click:t.toggleMute}})]),t._v(" "),o("canvas",{ref:"canvas",staticClass:"rocks",on:{mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp,mouseleave:t.onMouseUp,touchstart:t.onMouseDown,touchmove:t.onMouseMove,touchend:t.onMouseUp,touchcancel:t.onMouseUp}}),t._v(" "),o("script",{attrs:{id:"vs-rocks",type:"notjs"}},[t._v("\n    precision mediump float;\n    attribute vec4 position;\n    varying vec2 rockUv;\n    varying vec2 uv;\n    varying mat2 rotation;\n    uniform float time;\n    uniform float angle;\n    uniform vec2 offset;\n    uniform vec2 resolution;\n\n    mat2 rotate(float angle) {\n      float s = sin(angle);\n      float c = cos(angle);\n\n      return mat2(\n        c, -s,\n        s, c\n      );\n    }\n\n    void main() {\n      float aspectRatio = resolution.y / resolution.x;\n      vec2 pos = position.xy;\n      rotation = rotate(angle);\n      pos *= rotation;\n      pos.x *= aspectRatio;\n      vec2 adjOffset = vec2(offset.x * aspectRatio, offset.y);\n\n      gl_Position = vec4(pos * 1.01 + adjOffset, 0, 1.0);\n      rockUv = position.xy * 2.0 - .5;\n    }\n  ")]),t._v(" "),o("script",{attrs:{id:"fs-rocks",type:"notjs"}},[t._v("\n    precision mediump float;\n\n    varying mat2 rotation;\n    varying vec2 rockUv;\n    varying vec2 uv;\n\n    uniform vec2 resolution;\n    uniform float time;\n    uniform sampler2D rock;\n    uniform float angle;\n    uniform vec2 offset;\n    uniform vec2 rocksPos[4];\n\n    void main() {\n      vec2 uv = gl_FragCoord.xy / resolution - .5;\n      uv.x *= resolution.x / resolution.y;\n\n      vec4 color = texture2D(rock, rockUv * 2.0);\n\n      color.rgb *= clamp(1.0 - distance(uv - .03, offset / 2.0) * 8.5, .20, 1.2);\n\n      for (int i = 0; i < 4; i++) {\n        vec2 rockShadow = vec2(rocksPos[i].x, rocksPos[i].y - .08) / 2.0;\n        color.rgb *=  clamp(distance(uv, rockShadow) * 14.0, 0.5, 1.35) * vec3(1.0, .92, .91);\n      }\n\n      gl_FragColor = color;\n    }\n  ")]),t._v(" "),o("script",{attrs:{id:"vs-post",type:"notjs"}},[t._v("\n    precision mediump float;\n    attribute vec2 position;\n    uniform vec2 resolution;\n    varying vec2 uv;\n\n    void main() {\n      uv = position;\n      gl_Position = vec4(position, 0., 1.);\n    }\n  ")]),t._v(" "),o("script",{attrs:{id:"fs-post",type:"notjs"}},[t._v("\n    precision mediump float;\n    uniform sampler2D scene;\n    uniform sampler2D bg;\n    uniform vec2 resolution;\n    uniform float time;\n    varying vec2 uv;\n\n    float invLerp(float a, float b, float v) {\n      return (v - a) / (b - a);\n    }\n\n    float rand(vec2 co){\n      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);\n    }\n\n    void main() {\n      vec2 adjUv = uv / 2.0 + .5;\n\n      vec2 bgUv = vec2(adjUv.x * min(resolution.x / resolution.y, 1.0), adjUv.y);\n      vec2 heatUv = bgUv + smoothstep(0., .6, uv.y + .6) * .005 * sin(time * .8 + (uv.y + 1.0) * 8.5);\n\n      vec4 bgColor = texture2D(bg, heatUv);\n\n      float fogOpacity = .56 * max(0., invLerp(-.8, -1.0, -1.0 * uv.y - 1.8));\n      fogOpacity *= 1.1 - step(-.8, uv.y);\n\n      vec4 sceneColor = texture2D(scene, adjUv);\n      float shadowColor = fogOpacity * texture2D(scene, vec2(adjUv.x, adjUv.y * -1.0) + vec2(0.0, .2)).a;\n      bgColor.rgb *= 1.0 - shadowColor;\n\n      vec4 color = mix(bgColor, sceneColor, sceneColor.a);\n\n      gl_FragColor = color;\n    }\n  ")])],1)}),[],!1,null,"34af5f84",null);e.default=component.exports;installComponents(component,{Logo:o(220).default})},220:function(t,e,o){"use strict";o.r(e);var n={props:{color:{type:String,required:!1,default:"black"}}},C=(o(233),o(23)),component=Object(C.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{staticClass:"logo",staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},style:{"--color":t.color},attrs:{width:"100%",height:"100%",viewBox:"0 0 141 35",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[o("g",{attrs:{transform:"matrix(1,0,0,1,-322.599,-52.5985)"}},[o("g",{attrs:{transform:"matrix(1.03258,0,0,1.69762,0,0)"}},[o("g",{attrs:{transform:"matrix(2.13932,0,0,0.628751,-443.791,9.43172)"}},[o("g",{attrs:{transform:"matrix(0.752129,0,0,1,87.6626,0)"}},[o("path",{staticClass:"letter",attrs:{d:"M364.204,65.961C364.144,65.992 364.069,66.007 363.978,66.007C363.646,66.007 363.39,65.826 363.209,65.464C362.787,64.679 362.515,64.076 362.395,63.654C360.615,58.496 358.956,52.931 357.418,46.959C357.176,46.024 356.98,45.179 356.83,44.425C356.558,43.279 356.287,42.185 356.015,41.145C355.744,40.104 355.533,39.584 355.382,39.584C355.261,39.584 355.201,40.172 355.201,41.348C355.14,43.701 355.11,45.662 355.11,47.23C355.11,48.769 355.156,50.201 355.246,51.528C355.276,51.921 355.291,52.524 355.291,53.338L355.291,55.51C355.291,56.294 355.306,57.214 355.337,58.27C355.367,59.326 355.397,60.125 355.427,60.668L355.518,62.432L355.653,64.649C355.653,64.981 355.623,65.207 355.563,65.328C355.502,65.418 355.419,65.516 355.314,65.622C355.208,65.728 355.125,65.765 355.065,65.735C354.763,65.735 354.537,65.599 354.386,65.328C354.296,65.207 354.243,65.057 354.228,64.876C354.213,64.695 354.205,64.559 354.205,64.468C353.874,60.969 353.738,58.179 353.798,56.098C353.828,55.344 353.813,54.213 353.753,52.705C353.693,51.619 353.662,50.805 353.662,50.262C353.662,48.995 353.693,47.125 353.753,44.651C353.813,41.816 353.874,39.689 353.934,38.272C353.964,37.669 354.07,36.764 354.251,35.557C354.281,35.436 354.356,35.323 354.477,35.218C354.598,35.112 354.718,35.029 354.839,34.969L354.975,34.969C355.306,34.969 355.533,35.15 355.653,35.512C355.744,35.783 355.819,36.07 355.879,36.372C355.94,36.673 356.015,36.96 356.106,37.231L356.784,39.448C357.086,40.413 357.418,41.529 357.78,42.796L361.173,54.831L362.259,58.722C362.802,60.834 363.3,62.447 363.752,63.563C363.752,62.508 363.692,60.351 363.571,57.093C363.42,54.288 363.345,51.966 363.345,50.126C363.345,45.873 363.39,41.62 363.481,37.367C363.481,36.854 363.571,36.085 363.752,35.059C363.782,34.969 363.85,34.886 363.956,34.811C364.061,34.735 364.174,34.682 364.295,34.652L364.431,34.652C364.672,34.652 364.838,34.803 364.928,35.105C364.959,35.346 364.974,35.708 364.974,36.191C364.974,39.508 364.959,41.997 364.928,43.656C364.928,45.224 364.913,46.401 364.883,47.185L364.838,50.759L364.838,63.292C364.838,63.684 364.808,64.302 364.747,65.147C364.747,65.539 364.566,65.811 364.204,65.961Z"}}),t._v(" "),o("path",{staticClass:"letter",attrs:{d:"M372.348,65.961C370.629,65.961 369.347,65.946 368.503,65.916C367.96,65.916 367.658,65.645 367.598,65.102C367.568,64.86 367.507,64.235 367.417,63.224C367.326,62.214 367.311,61.256 367.372,60.351C367.402,59.657 367.417,58.632 367.417,57.274L367.417,54.243C367.417,53.187 367.387,51.634 367.326,49.583C367.266,46.506 367.236,44.199 367.236,42.66C367.236,40.79 367.281,38.935 367.372,37.095C367.372,36.854 367.432,36.281 367.553,35.376C367.764,35.346 368.013,35.293 368.299,35.218C368.586,35.142 368.834,35.105 369.046,35.105C369.377,35.075 369.86,35.059 370.493,35.059C371.157,35.059 371.655,35.075 371.987,35.105C372.258,35.105 372.484,35.15 372.665,35.24C372.937,35.452 373.072,35.617 373.072,35.738C373.012,36.1 372.891,36.326 372.71,36.417C372.409,36.537 371.956,36.628 371.353,36.688L369,36.643C368.88,37.246 368.819,37.593 368.819,37.684C368.819,42.6 368.834,46.295 368.865,48.769C368.865,48.859 368.895,49.085 368.955,49.447C369.196,49.538 369.558,49.583 370.041,49.583L371.398,49.538C372.122,49.538 372.65,49.568 372.982,49.628C373.103,49.658 373.208,49.726 373.299,49.832C373.389,49.937 373.464,50.066 373.525,50.216L373.57,50.307C373.57,50.427 373.502,50.556 373.366,50.691C373.231,50.827 373.103,50.91 372.982,50.94C371.896,51.001 371.082,51.061 370.539,51.121C370.207,51.121 369.709,51.151 369.046,51.212C368.925,51.574 368.865,51.785 368.865,51.845C368.925,57.033 368.985,60.924 369.046,63.518C369.046,63.579 369.106,63.85 369.227,64.333L370.765,64.378L372.71,64.468C373.103,64.529 373.344,64.725 373.434,65.057L373.434,65.102C373.434,65.283 373.359,65.449 373.208,65.599C373.057,65.75 372.891,65.856 372.71,65.916C372.62,65.946 372.499,65.961 372.348,65.961Z"}}),t._v(" "),o("path",{staticClass:"letter",attrs:{d:"M385.727,65.961C385.697,65.992 385.637,66.007 385.546,66.007C385.426,66.007 385.305,65.954 385.185,65.848C385.064,65.743 384.973,65.615 384.913,65.464L384.687,64.106L384.551,62.749C383.918,57.139 383.45,53.172 383.149,50.85C383.149,50.759 383.126,50.654 383.081,50.533C383.035,50.412 382.998,50.292 382.968,50.171C381.761,50.111 380.871,50.081 380.298,50.081C379.725,50.081 378.835,50.111 377.629,50.171C377.448,50.865 377.342,51.332 377.312,51.574C377.131,53.323 377.01,54.711 376.95,55.736L376.588,60.577L376.452,62.659C376.332,63.805 376.226,64.664 376.136,65.237C376.075,65.599 375.864,65.811 375.502,65.871C375.321,65.871 375.163,65.796 375.027,65.645C374.891,65.494 374.824,65.313 374.824,65.102C374.793,64.559 374.793,64.031 374.824,63.518L375.05,60.713C375.08,60.23 375.208,58.519 375.434,55.578C375.661,52.637 375.94,49.885 376.271,47.321C376.452,45.692 376.875,43.309 377.538,40.172C377.599,39.75 377.719,39.116 377.9,38.272C378.172,37.035 378.624,36.115 379.257,35.512C379.77,34.999 380.193,34.743 380.524,34.743C380.947,34.743 381.429,35.044 381.972,35.648C382.213,35.919 382.387,36.213 382.492,36.53C382.598,36.847 382.696,37.261 382.787,37.774C383.179,39.825 383.556,42.268 383.918,45.104C384.34,47.969 384.853,51.755 385.456,56.46C385.727,58.451 386.014,60.864 386.316,63.699L386.361,64.378C386.361,64.589 386.331,64.936 386.27,65.418C386.21,65.66 386.029,65.841 385.727,65.961ZM382.787,48.316C382.696,47.773 382.591,46.929 382.47,45.782L381.429,38.588C381.339,38.046 381.241,37.631 381.135,37.344C381.03,37.058 380.826,36.794 380.524,36.552C380.162,36.794 379.914,37.065 379.778,37.367C379.642,37.669 379.514,38.106 379.393,38.679C379.212,39.373 379.001,40.444 378.76,41.891C378.669,42.314 378.586,42.826 378.511,43.43C378.436,44.033 378.383,44.5 378.353,44.832C378.172,46.34 378.006,47.487 377.855,48.271C378.609,48.422 379.529,48.497 380.615,48.497C381.55,48.497 382.274,48.437 382.787,48.316Z"}}),t._v(" "),o("path",{staticClass:"letter",attrs:{d:"M394.414,65.916C393.992,65.976 393.374,66.007 392.559,66.007C391.504,66.007 390.599,65.931 389.845,65.78C389.121,65.69 388.714,65.253 388.623,64.468L388.533,63.609L388.352,53.157C388.291,45.978 388.231,40.64 388.171,37.141C388.171,36.598 388.186,36.175 388.216,35.874C388.216,35.723 388.276,35.497 388.397,35.195C388.548,34.833 388.774,34.713 389.076,34.833C389.166,34.863 389.264,34.924 389.37,35.014C389.475,35.105 389.528,35.195 389.528,35.286C389.649,35.798 389.709,36.387 389.709,37.05L389.754,41.258C389.754,43.128 389.784,45.933 389.845,49.673L389.98,53.067C390.041,54.515 390.071,55.6 390.071,56.324C390.131,58.134 390.161,59.461 390.161,60.306L390.207,62.297L390.207,64.061C390.689,64.272 391.293,64.378 392.016,64.378L393.6,64.333C393.781,64.333 393.992,64.31 394.233,64.265C394.475,64.219 394.671,64.212 394.822,64.242C394.942,64.272 395.07,64.34 395.206,64.446C395.342,64.551 395.425,64.664 395.455,64.785L395.455,64.876C395.455,65.147 395.365,65.373 395.184,65.554C395.003,65.735 394.746,65.856 394.414,65.916Z"}}),t._v(" "),o("path",{staticClass:"letter",attrs:{d:"M398.532,65.645C398.2,65.645 397.906,65.524 397.649,65.283C397.393,65.041 397.265,64.74 397.265,64.378C397.265,64.076 397.37,63.82 397.582,63.609C397.793,63.398 398.049,63.292 398.351,63.292C398.682,63.292 398.969,63.42 399.21,63.677C399.452,63.933 399.572,64.257 399.572,64.649C399.572,64.921 399.474,65.155 399.278,65.351C399.082,65.547 398.833,65.645 398.532,65.645Z"}}),t._v(" "),o("path",{staticClass:"letter",attrs:{d:"M404.64,66.007C404.489,66.007 404.353,65.931 404.232,65.78C404.112,65.63 404.051,65.434 404.051,65.192L403.961,63.744C403.931,63.262 403.901,62.674 403.87,61.98C403.84,61.286 403.825,60.472 403.825,59.537L403.87,54.469C403.87,52.961 403.825,51.257 403.735,49.357C403.705,48.995 403.69,48.391 403.69,47.547L403.735,43.475L403.69,40.217C403.659,39.493 403.644,38.423 403.644,37.005C403.644,36.462 403.674,35.738 403.735,34.833L410.748,34.833C411.049,34.833 411.276,34.848 411.426,34.878C411.728,34.999 411.879,35.165 411.879,35.376C411.879,35.497 411.826,35.64 411.72,35.806C411.615,35.972 411.502,36.07 411.381,36.1C411.019,36.191 410.627,36.236 410.205,36.236L407.581,36.236C405.982,36.236 405.198,36.281 405.228,36.372L405.228,39.991C405.198,40.745 405.213,41.891 405.273,43.43C405.303,43.882 405.311,44.304 405.296,44.696C405.281,45.089 405.273,45.42 405.273,45.692C405.273,46.446 405.303,47.215 405.364,47.999C405.876,48.15 406.427,48.218 407.015,48.203C407.603,48.188 408.003,48.18 408.214,48.18L411.2,48.361C411.381,48.361 411.547,48.407 411.698,48.497C411.909,48.769 412.014,48.949 412.014,49.04C412.014,49.13 411.984,49.236 411.924,49.357C411.864,49.477 411.788,49.568 411.698,49.628C411.366,49.719 411.019,49.764 410.657,49.764L406.268,49.719C406.057,49.719 405.801,49.749 405.499,49.809C405.469,49.869 405.431,49.93 405.386,49.99C405.341,50.05 405.318,50.111 405.318,50.171L405.364,56.189L405.409,57.048C405.348,58.315 405.318,59.25 405.318,59.853C405.318,61.12 405.364,62.432 405.454,63.79C405.454,64.363 405.439,64.815 405.409,65.147C405.348,65.66 405.122,65.946 404.73,66.007L404.64,66.007Z"}}),t._v(" "),o("path",{staticClass:"letter",attrs:{d:"M417.489,65.237C415.921,64.091 414.895,62.523 414.412,60.532C414.05,58.994 413.87,57.621 413.87,56.415L413.824,48.361L413.87,40.308C413.9,39.192 414.02,37.714 414.231,35.874C414.292,35.663 414.412,35.436 414.593,35.195C414.684,35.105 414.85,35.059 415.091,35.059C415.212,35.059 415.325,35.09 415.43,35.15C415.536,35.21 415.604,35.286 415.634,35.376C415.725,35.587 415.74,35.829 415.679,36.1C415.679,36.311 415.649,36.749 415.589,37.412L415.453,39.674L415.453,49.447C415.453,50.985 415.438,52.132 415.408,52.886L415.363,54.65C415.363,56.732 415.559,58.541 415.951,60.08C416.313,61.588 417.052,62.779 418.168,63.654C418.741,64.137 419.344,64.378 419.978,64.378C420.52,64.378 420.996,64.197 421.403,63.835C421.81,63.473 422.104,62.96 422.285,62.297C422.677,60.819 422.941,59.28 423.077,57.682C423.213,56.083 423.28,54.288 423.28,52.298C423.28,51.151 423.235,49.794 423.145,48.226L423.099,46.642L422.964,37.774C422.964,37.442 422.949,37.118 422.918,36.801C422.888,36.485 422.873,36.191 422.873,35.919C422.933,35.497 423.16,35.286 423.552,35.286L423.642,35.286C423.853,35.286 424.019,35.346 424.14,35.467C424.261,35.587 424.336,35.753 424.366,35.964C424.396,36.175 424.404,36.394 424.389,36.62C424.374,36.847 424.381,37.08 424.411,37.322L424.819,50.171L424.864,52.117C424.864,54.439 424.713,57.033 424.411,59.899C424.291,60.804 424.08,61.814 423.778,62.93C423.507,63.865 423.009,64.612 422.285,65.17C421.561,65.728 420.762,66.007 419.887,66.007C419.012,66.007 418.213,65.75 417.489,65.237Z"}}),t._v(" "),o("path",{staticClass:"letter",attrs:{d:"M437.216,65.961C437.155,65.992 437.08,66.007 436.989,66.007C436.658,66.007 436.401,65.826 436.22,65.464C435.798,64.679 435.527,64.076 435.406,63.654C433.626,58.496 431.967,52.931 430.429,46.959C430.188,46.024 429.992,45.179 429.841,44.425C429.569,43.279 429.298,42.185 429.026,41.145C428.755,40.104 428.544,39.584 428.393,39.584C428.272,39.584 428.212,40.172 428.212,41.348C428.152,43.701 428.122,45.662 428.122,47.23C428.122,48.769 428.167,50.201 428.257,51.528C428.287,51.921 428.303,52.524 428.303,53.338L428.303,55.51C428.303,56.294 428.318,57.214 428.348,58.27C428.378,59.326 428.408,60.125 428.438,60.668L428.529,62.432L428.664,64.649C428.664,64.981 428.634,65.207 428.574,65.328C428.514,65.418 428.431,65.516 428.325,65.622C428.22,65.728 428.137,65.765 428.076,65.735C427.775,65.735 427.548,65.599 427.398,65.328C427.307,65.207 427.254,65.057 427.239,64.876C427.224,64.695 427.217,64.559 427.217,64.468C426.885,60.969 426.749,58.179 426.809,56.098C426.84,55.344 426.825,54.213 426.764,52.705C426.704,51.619 426.674,50.805 426.674,50.262C426.674,48.995 426.704,47.125 426.764,44.651C426.825,41.816 426.885,39.689 426.945,38.272C426.975,37.669 427.081,36.764 427.262,35.557C427.292,35.436 427.367,35.323 427.488,35.218C427.609,35.112 427.729,35.029 427.85,34.969L427.986,34.969C428.318,34.969 428.544,35.15 428.664,35.512C428.755,35.783 428.83,36.07 428.891,36.372C428.951,36.673 429.026,36.96 429.117,37.231L429.796,39.448C430.097,40.413 430.429,41.529 430.791,42.796L434.184,54.831L435.27,58.722C435.813,60.834 436.311,62.447 436.763,63.563C436.763,62.508 436.703,60.351 436.582,57.093C436.431,54.288 436.356,51.966 436.356,50.126C436.356,45.873 436.401,41.62 436.492,37.367C436.492,36.854 436.582,36.085 436.763,35.059C436.793,34.969 436.861,34.886 436.967,34.811C437.072,34.735 437.186,34.682 437.306,34.652L437.442,34.652C437.683,34.652 437.849,34.803 437.94,35.105C437.97,35.346 437.985,35.708 437.985,36.191C437.985,39.508 437.97,41.997 437.94,43.656C437.94,45.224 437.925,46.401 437.894,47.185L437.849,50.759L437.849,63.292C437.849,63.684 437.819,64.302 437.759,65.147C437.759,65.539 437.578,65.811 437.216,65.961Z"}})]),t._v(" "),o("g",{attrs:{transform:"matrix(0.752129,0,0,1,87.6626,0)"}},[o("g",{attrs:{transform:"matrix(45.2445,0,0,45.2445,353.662,66.0519)"}},[o("path",{staticClass:"letter-inner",staticStyle:{"fill-rule":"nonzero"},attrs:{d:"M0.233,-0.002C0.232,-0.001 0.23,-0.001 0.228,-0.001C0.221,-0.001 0.215,-0.005 0.211,-0.013C0.202,-0.03 0.196,-0.044 0.193,-0.053C0.154,-0.167 0.117,-0.29 0.083,-0.422C0.078,-0.443 0.073,-0.461 0.07,-0.478C0.064,-0.503 0.058,-0.528 0.052,-0.551C0.046,-0.574 0.041,-0.585 0.038,-0.585C0.035,-0.585 0.034,-0.572 0.034,-0.546C0.033,-0.494 0.032,-0.451 0.032,-0.416C0.032,-0.382 0.033,-0.35 0.035,-0.321C0.036,-0.312 0.036,-0.299 0.036,-0.281L0.036,-0.233C0.036,-0.216 0.036,-0.195 0.037,-0.172C0.038,-0.149 0.038,-0.131 0.039,-0.119L0.041,-0.08L0.044,-0.031C0.044,-0.024 0.043,-0.019 0.042,-0.016C0.041,-0.014 0.039,-0.012 0.037,-0.01C0.034,-0.007 0.032,-0.006 0.031,-0.007C0.024,-0.007 0.019,-0.01 0.016,-0.016C0.014,-0.019 0.013,-0.022 0.013,-0.026C0.012,-0.03 0.012,-0.033 0.012,-0.035C0.005,-0.112 0.002,-0.174 0.003,-0.22C0.004,-0.237 0.003,-0.262 0.002,-0.295C0.001,-0.319 0,-0.337 0,-0.349C0,-0.377 0.001,-0.418 0.002,-0.473C0.003,-0.536 0.005,-0.583 0.006,-0.614C0.007,-0.627 0.009,-0.647 0.013,-0.674C0.014,-0.677 0.015,-0.679 0.018,-0.682C0.021,-0.684 0.023,-0.686 0.026,-0.687L0.029,-0.687C0.036,-0.687 0.041,-0.683 0.044,-0.675C0.046,-0.669 0.048,-0.663 0.049,-0.656C0.05,-0.649 0.052,-0.643 0.054,-0.637L0.069,-0.588C0.076,-0.567 0.083,-0.542 0.091,-0.514L0.166,-0.248L0.19,-0.162C0.202,-0.115 0.213,-0.08 0.223,-0.055C0.223,-0.078 0.222,-0.126 0.219,-0.198C0.216,-0.26 0.214,-0.311 0.214,-0.352C0.214,-0.446 0.215,-0.54 0.217,-0.634C0.217,-0.645 0.219,-0.662 0.223,-0.685C0.224,-0.687 0.225,-0.689 0.228,-0.691C0.23,-0.692 0.232,-0.693 0.235,-0.694L0.238,-0.694C0.243,-0.694 0.247,-0.691 0.249,-0.684C0.25,-0.679 0.25,-0.671 0.25,-0.66C0.25,-0.587 0.25,-0.532 0.249,-0.495C0.249,-0.46 0.249,-0.434 0.248,-0.417L0.247,-0.338L0.247,-0.061C0.247,-0.052 0.246,-0.039 0.245,-0.02C0.245,-0.011 0.241,-0.005 0.233,-0.002Z"}})]),t._v(" "),o("g",{attrs:{transform:"matrix(45.2445,0,0,45.2445,367.236,66.0519)"}},[o("path",{staticClass:"letter-inner",staticStyle:{"fill-rule":"nonzero"},attrs:{d:"M0.113,-0.002C0.075,-0.002 0.047,-0.002 0.028,-0.003C0.016,-0.003 0.009,-0.009 0.008,-0.021C0.007,-0.026 0.006,-0.04 0.004,-0.063C0.002,-0.085 0.002,-0.106 0.003,-0.126C0.004,-0.141 0.004,-0.164 0.004,-0.194L0.004,-0.261C0.004,-0.284 0.003,-0.319 0.002,-0.364C0.001,-0.432 0,-0.483 0,-0.517C0,-0.558 0.001,-0.599 0.003,-0.64C0.003,-0.645 0.004,-0.658 0.007,-0.678C0.012,-0.679 0.017,-0.68 0.024,-0.682C0.03,-0.683 0.035,-0.684 0.04,-0.684C0.047,-0.685 0.058,-0.685 0.072,-0.685C0.087,-0.685 0.098,-0.685 0.105,-0.684C0.111,-0.684 0.116,-0.683 0.12,-0.681C0.126,-0.676 0.129,-0.673 0.129,-0.67C0.128,-0.662 0.125,-0.657 0.121,-0.655C0.114,-0.652 0.104,-0.65 0.091,-0.649L0.039,-0.65C0.036,-0.637 0.035,-0.629 0.035,-0.627C0.035,-0.518 0.035,-0.437 0.036,-0.382C0.036,-0.38 0.037,-0.375 0.038,-0.367C0.043,-0.365 0.051,-0.364 0.062,-0.364L0.092,-0.365C0.108,-0.365 0.12,-0.364 0.127,-0.363C0.13,-0.362 0.132,-0.361 0.134,-0.359C0.136,-0.356 0.138,-0.353 0.139,-0.35L0.14,-0.348C0.14,-0.345 0.139,-0.343 0.136,-0.34C0.133,-0.337 0.13,-0.335 0.127,-0.334C0.103,-0.333 0.085,-0.331 0.073,-0.33C0.066,-0.33 0.055,-0.329 0.04,-0.328C0.037,-0.32 0.036,-0.315 0.036,-0.314C0.037,-0.199 0.039,-0.113 0.04,-0.056C0.04,-0.055 0.041,-0.049 0.044,-0.038L0.078,-0.037L0.121,-0.035C0.13,-0.034 0.135,-0.029 0.137,-0.022L0.137,-0.021C0.137,-0.017 0.135,-0.013 0.132,-0.01C0.129,-0.007 0.125,-0.004 0.121,-0.003C0.119,-0.002 0.116,-0.002 0.113,-0.002Z"}})]),t._v(" "),o("g",{attrs:{transform:"matrix(45.2445,0,0,45.2445,374.778,66.0519)"}},[o("path",{staticClass:"letter-inner",staticStyle:{"fill-rule":"nonzero"},attrs:{d:"M0.242,-0.002C0.241,-0.001 0.24,-0.001 0.238,-0.001C0.235,-0.001 0.233,-0.002 0.23,-0.005C0.227,-0.007 0.225,-0.01 0.224,-0.013L0.219,-0.043L0.216,-0.073C0.202,-0.197 0.192,-0.285 0.185,-0.336C0.185,-0.338 0.185,-0.34 0.184,-0.343C0.183,-0.346 0.182,-0.348 0.181,-0.351C0.154,-0.352 0.135,-0.353 0.122,-0.353C0.109,-0.353 0.09,-0.352 0.063,-0.351C0.059,-0.336 0.057,-0.325 0.056,-0.32C0.052,-0.281 0.049,-0.251 0.048,-0.228L0.04,-0.121L0.037,-0.075C0.034,-0.05 0.032,-0.031 0.03,-0.018C0.029,-0.01 0.024,-0.005 0.016,-0.004C0.012,-0.004 0.009,-0.006 0.006,-0.009C0.003,-0.012 0.001,-0.016 0.001,-0.021C0,-0.033 0,-0.045 0.001,-0.056L0.006,-0.118C0.007,-0.129 0.01,-0.167 0.015,-0.232C0.02,-0.297 0.026,-0.357 0.033,-0.414C0.037,-0.45 0.046,-0.503 0.061,-0.572C0.062,-0.581 0.065,-0.595 0.069,-0.614C0.075,-0.641 0.085,-0.662 0.099,-0.675C0.11,-0.686 0.12,-0.692 0.127,-0.692C0.136,-0.692 0.147,-0.685 0.159,-0.672C0.164,-0.666 0.168,-0.66 0.171,-0.653C0.173,-0.646 0.175,-0.636 0.177,-0.625C0.186,-0.58 0.194,-0.526 0.202,-0.463C0.211,-0.4 0.223,-0.316 0.236,-0.212C0.242,-0.168 0.248,-0.115 0.255,-0.052L0.256,-0.037C0.256,-0.032 0.255,-0.025 0.254,-0.014C0.253,-0.009 0.249,-0.005 0.242,-0.002ZM0.177,-0.392C0.175,-0.404 0.173,-0.423 0.17,-0.448L0.147,-0.607C0.145,-0.619 0.143,-0.628 0.141,-0.635C0.138,-0.641 0.134,-0.647 0.127,-0.652C0.119,-0.647 0.114,-0.641 0.111,-0.634C0.108,-0.627 0.105,-0.618 0.102,-0.605C0.098,-0.59 0.093,-0.566 0.088,-0.534C0.086,-0.525 0.084,-0.513 0.083,-0.5C0.081,-0.487 0.08,-0.476 0.079,-0.469C0.075,-0.436 0.071,-0.41 0.068,-0.393C0.085,-0.39 0.105,-0.388 0.129,-0.388C0.15,-0.388 0.166,-0.389 0.177,-0.392Z"}})]),t._v(" "),o("g",{attrs:{transform:"matrix(45.2445,0,0,45.2445,388.171,66.0519)"}},[o("path",{staticClass:"letter-inner",staticStyle:{"fill-rule":"nonzero"},attrs:{d:"M0.138,-0.003C0.129,-0.002 0.115,-0.001 0.097,-0.001C0.074,-0.001 0.054,-0.003 0.037,-0.006C0.021,-0.008 0.012,-0.018 0.01,-0.035L0.008,-0.054L0.004,-0.285C0.003,-0.444 0.001,-0.562 0,-0.639C0,-0.651 0,-0.66 0.001,-0.667C0.001,-0.67 0.002,-0.675 0.005,-0.682C0.008,-0.69 0.013,-0.693 0.02,-0.69C0.022,-0.689 0.024,-0.688 0.027,-0.686C0.029,-0.684 0.03,-0.682 0.03,-0.68C0.033,-0.669 0.034,-0.656 0.034,-0.641L0.035,-0.548C0.035,-0.507 0.036,-0.445 0.037,-0.362L0.04,-0.287C0.041,-0.255 0.042,-0.231 0.042,-0.215C0.043,-0.175 0.044,-0.146 0.044,-0.127L0.045,-0.083L0.045,-0.044C0.056,-0.039 0.069,-0.037 0.085,-0.037L0.12,-0.038C0.124,-0.038 0.129,-0.039 0.134,-0.04C0.139,-0.041 0.144,-0.041 0.147,-0.04C0.15,-0.039 0.153,-0.038 0.156,-0.036C0.159,-0.033 0.16,-0.031 0.161,-0.028L0.161,-0.026C0.161,-0.02 0.159,-0.015 0.155,-0.011C0.151,-0.007 0.145,-0.004 0.138,-0.003Z"}})]),t._v(" "),o("g",{attrs:{transform:"matrix(45.2445,0,0,45.2445,397.265,66.0519)"}},[o("path",{staticClass:"letter-inner",staticStyle:{"fill-rule":"nonzero"},attrs:{d:"M0.028,-0.009C0.021,-0.009 0.014,-0.012 0.009,-0.017C0.003,-0.022 0,-0.029 0,-0.037C0,-0.044 0.002,-0.049 0.007,-0.054C0.012,-0.059 0.017,-0.061 0.024,-0.061C0.031,-0.061 0.038,-0.058 0.043,-0.053C0.048,-0.047 0.051,-0.04 0.051,-0.031C0.051,-0.025 0.049,-0.02 0.045,-0.016C0.04,-0.011 0.035,-0.009 0.028,-0.009Z"}})]),t._v(" "),o("g",{attrs:{transform:"matrix(45.2445,0,0,45.2445,403.644,66.0519)"}},[o("path",{staticClass:"letter-inner",staticStyle:{"fill-rule":"nonzero"},attrs:{d:"M0.022,-0.001C0.019,-0.001 0.016,-0.003 0.013,-0.006C0.01,-0.009 0.009,-0.014 0.009,-0.019L0.007,-0.051C0.006,-0.062 0.006,-0.075 0.005,-0.09C0.004,-0.105 0.004,-0.123 0.004,-0.144L0.005,-0.256C0.005,-0.289 0.004,-0.327 0.002,-0.369C0.001,-0.377 0.001,-0.39 0.001,-0.409L0.002,-0.499L0.001,-0.571C0,-0.587 0,-0.611 0,-0.642C0,-0.654 0.001,-0.67 0.002,-0.69L0.157,-0.69C0.164,-0.69 0.169,-0.69 0.172,-0.689C0.179,-0.686 0.182,-0.683 0.182,-0.678C0.182,-0.675 0.181,-0.672 0.179,-0.669C0.176,-0.665 0.174,-0.663 0.171,-0.662C0.163,-0.66 0.154,-0.659 0.145,-0.659L0.087,-0.659C0.052,-0.659 0.034,-0.658 0.035,-0.656L0.035,-0.576C0.034,-0.559 0.035,-0.534 0.036,-0.5C0.037,-0.49 0.037,-0.481 0.037,-0.472C0.036,-0.463 0.036,-0.456 0.036,-0.45C0.036,-0.433 0.037,-0.416 0.038,-0.399C0.049,-0.396 0.062,-0.394 0.075,-0.395C0.088,-0.395 0.096,-0.395 0.101,-0.395L0.167,-0.391C0.171,-0.391 0.175,-0.39 0.178,-0.388C0.183,-0.382 0.185,-0.378 0.185,-0.376C0.185,-0.374 0.184,-0.372 0.183,-0.369C0.182,-0.366 0.18,-0.364 0.178,-0.363C0.171,-0.361 0.163,-0.36 0.155,-0.36L0.058,-0.361C0.053,-0.361 0.048,-0.36 0.041,-0.359C0.04,-0.358 0.04,-0.356 0.039,-0.355C0.038,-0.354 0.037,-0.352 0.037,-0.351L0.038,-0.218L0.039,-0.199C0.038,-0.171 0.037,-0.15 0.037,-0.137C0.037,-0.109 0.038,-0.08 0.04,-0.05C0.04,-0.037 0.04,-0.027 0.039,-0.02C0.038,-0.009 0.033,-0.002 0.024,-0.001L0.022,-0.001Z"}})]),t._v(" "),o("g",{attrs:{transform:"matrix(45.2445,0,0,45.2445,413.824,66.0519)"}},[o("path",{staticClass:"letter-inner",staticStyle:{"fill-rule":"nonzero"},attrs:{d:"M0.081,-0.018C0.046,-0.043 0.024,-0.078 0.013,-0.122C0.005,-0.156 0.001,-0.186 0.001,-0.213L0,-0.391L0.001,-0.569C0.002,-0.594 0.004,-0.626 0.009,-0.667C0.01,-0.672 0.013,-0.677 0.017,-0.682C0.019,-0.684 0.023,-0.685 0.028,-0.685C0.031,-0.685 0.033,-0.684 0.036,-0.683C0.038,-0.682 0.039,-0.68 0.04,-0.678C0.042,-0.673 0.042,-0.668 0.041,-0.662C0.041,-0.657 0.04,-0.648 0.039,-0.633L0.036,-0.583L0.036,-0.367C0.036,-0.333 0.036,-0.308 0.035,-0.291L0.034,-0.252C0.034,-0.206 0.038,-0.166 0.047,-0.132C0.055,-0.099 0.071,-0.072 0.096,-0.053C0.109,-0.042 0.122,-0.037 0.136,-0.037C0.148,-0.037 0.159,-0.041 0.168,-0.049C0.177,-0.057 0.183,-0.068 0.187,-0.083C0.196,-0.116 0.202,-0.15 0.205,-0.185C0.208,-0.22 0.209,-0.26 0.209,-0.304C0.209,-0.329 0.208,-0.359 0.206,-0.394L0.205,-0.429L0.202,-0.625C0.202,-0.632 0.202,-0.64 0.201,-0.647C0.2,-0.654 0.2,-0.66 0.2,-0.666C0.201,-0.675 0.206,-0.68 0.215,-0.68L0.217,-0.68C0.222,-0.68 0.225,-0.679 0.228,-0.676C0.231,-0.673 0.232,-0.67 0.233,-0.665C0.234,-0.66 0.234,-0.656 0.234,-0.651C0.233,-0.646 0.233,-0.64 0.234,-0.635L0.243,-0.351L0.244,-0.308C0.244,-0.257 0.241,-0.199 0.234,-0.136C0.231,-0.116 0.227,-0.094 0.22,-0.069C0.214,-0.048 0.203,-0.032 0.187,-0.02C0.171,-0.007 0.153,-0.001 0.134,-0.001C0.115,-0.001 0.097,-0.007 0.081,-0.018Z"}})]),t._v(" "),o("g",{attrs:{transform:"matrix(45.2445,0,0,45.2445,426.674,66.0519)"}},[o("path",{staticClass:"letter-inner",staticStyle:{"fill-rule":"nonzero"},attrs:{d:"M0.233,-0.002C0.232,-0.001 0.23,-0.001 0.228,-0.001C0.221,-0.001 0.215,-0.005 0.211,-0.013C0.202,-0.03 0.196,-0.044 0.193,-0.053C0.154,-0.167 0.117,-0.29 0.083,-0.422C0.078,-0.443 0.073,-0.461 0.07,-0.478C0.064,-0.503 0.058,-0.528 0.052,-0.551C0.046,-0.574 0.041,-0.585 0.038,-0.585C0.035,-0.585 0.034,-0.572 0.034,-0.546C0.033,-0.494 0.032,-0.451 0.032,-0.416C0.032,-0.382 0.033,-0.35 0.035,-0.321C0.036,-0.312 0.036,-0.299 0.036,-0.281L0.036,-0.233C0.036,-0.216 0.036,-0.195 0.037,-0.172C0.038,-0.149 0.038,-0.131 0.039,-0.119L0.041,-0.08L0.044,-0.031C0.044,-0.024 0.043,-0.019 0.042,-0.016C0.041,-0.014 0.039,-0.012 0.037,-0.01C0.034,-0.007 0.032,-0.006 0.031,-0.007C0.024,-0.007 0.019,-0.01 0.016,-0.016C0.014,-0.019 0.013,-0.022 0.013,-0.026C0.012,-0.03 0.012,-0.033 0.012,-0.035C0.005,-0.112 0.002,-0.174 0.003,-0.22C0.004,-0.237 0.003,-0.262 0.002,-0.295C0.001,-0.319 0,-0.337 0,-0.349C0,-0.377 0.001,-0.418 0.002,-0.473C0.003,-0.536 0.005,-0.583 0.006,-0.614C0.007,-0.627 0.009,-0.647 0.013,-0.674C0.014,-0.677 0.015,-0.679 0.018,-0.682C0.021,-0.684 0.023,-0.686 0.026,-0.687L0.029,-0.687C0.036,-0.687 0.041,-0.683 0.044,-0.675C0.046,-0.669 0.048,-0.663 0.049,-0.656C0.05,-0.649 0.052,-0.643 0.054,-0.637L0.069,-0.588C0.076,-0.567 0.083,-0.542 0.091,-0.514L0.166,-0.248L0.19,-0.162C0.202,-0.115 0.213,-0.08 0.223,-0.055C0.223,-0.078 0.222,-0.126 0.219,-0.198C0.216,-0.26 0.214,-0.311 0.214,-0.352C0.214,-0.446 0.215,-0.54 0.217,-0.634C0.217,-0.645 0.219,-0.662 0.223,-0.685C0.224,-0.687 0.225,-0.689 0.228,-0.691C0.23,-0.692 0.232,-0.693 0.235,-0.694L0.238,-0.694C0.243,-0.694 0.247,-0.691 0.249,-0.684C0.25,-0.679 0.25,-0.671 0.25,-0.66C0.25,-0.587 0.25,-0.532 0.249,-0.495C0.249,-0.46 0.249,-0.434 0.248,-0.417L0.247,-0.338L0.247,-0.061C0.247,-0.052 0.246,-0.039 0.245,-0.02C0.245,-0.011 0.241,-0.005 0.233,-0.002Z"}})])])])])])])}),[],!1,null,"382aa60b",null);e.default=component.exports},224:function(t,e,o){var content=o(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("31f7e1e8",content,!0,{sourceMap:!1})},233:function(t,e,o){"use strict";o(224)},234:function(t,e,o){var n=o(59)(!1);n.push([t.i,".letter[data-v-382aa60b]{fill:none;stroke:var(--color);fill-rule:nonzero;stroke-width:.57px}.letter-inner[data-v-382aa60b]{fill:var(--color)}.logo[data-v-382aa60b]:hover{transform:scale(1.04)}",""]),t.exports=n},554:function(t,e,o){var content=o(827);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("00d7e5dc",content,!0,{sourceMap:!1})},826:function(t,e,o){"use strict";o(554)},827:function(t,e,o){var n=o(59)(!1);n.push([t.i,".rocks[data-v-34af5f84]{position:fixed;top:0;left:0;width:100%;height:100%;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.site-link[data-v-34af5f84]{left:20px;opacity:.8;text-decoration:none;max-width:115px}.controls[data-v-34af5f84],.site-link[data-v-34af5f84]{position:fixed;top:20px;z-index:3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.controls[data-v-34af5f84]{right:20px}.control-icon[data-v-34af5f84]{width:25px;opacity:.8;cursor:pointer;margin-left:15px}@media only screen and (max-width:600px){.site-link[data-v-34af5f84]{top:15px;left:15px;max-width:110px}}",""]),t.exports=n}}]);