(this["webpackJsonptest-to-earn"]=this["webpackJsonptest-to-earn"]||[]).push([[14],{1586:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(3),a=n(19),i=n(5),c=n(4),o=n(17),s=n(18),u=n(21),h=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"authenticateUser",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){var e,n,a,i,c,o,s,h,d,l;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.provider&&null!==(e=this.chainConfig)&&void 0!==e&&e.chainId){t.next=2;break}throw u.l.notConnectedError();case 2:if(n=this.chainConfig,a=n.chainNamespace,i=n.chainId,this.status===u.d.CONNECTED){t.next=5;break}throw u.l.notConnectedError("Not connected with wallet, Please login/connect first");case 5:return t.next=7,this.provider.request({method:"eth_accounts"});case 7:if(!((c=t.sent)&&c.length>0)){t.next=26;break}if(!(o=Object(u.q)(c[0],this.name))){t.next=14;break}if(Object(u.n)(o)){t.next=14;break}return t.abrupt("return",{idToken:o});case 14:return s={domain:window.location.origin,uri:window.location.href,address:c[0],chainId:parseInt(i,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:(new Date).toISOString()},t.next=17,Object(u.u)(s,a);case 17:return h=t.sent,t.next=20,this.provider.request({method:"personal_sign",params:[h,c[0]]});case 20:return d=t.sent,t.next=23,Object(u.w)(a,d,h,this.name,this.sessionTime);case 23:return l=t.sent,Object(u.t)(c[0],this.name,l),t.abrupt("return",{idToken:l});case 26:throw u.l.notConnectedError("Not connected with wallet, Please login/connect first");case 27:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){var e;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.status===u.d.CONNECTED){t.next=2;break}throw u.l.disconnectionError("Not connected with wallet");case 2:return t.next=4,this.provider.request({method:"eth_accounts"});case 4:(e=t.sent)&&e.length>0&&Object(u.o)(e[0],this.name);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),n}(u.e)},1775:function(t,e,n){"use strict";n.r(e),n.d(e,"WalletConnectV1Adapter",(function(){return y}));var r=n(3),a=n(19),i=n(5),c=n(4),o=n(22),s=n(46),u=n(42),h=n(17),d=n(18),l=n(24),p=n.n(l),b=n(702),f=n(578),v=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t,r){return Object(i.a)(this,n),e.call(this,{cryptoLib:f,connectorOpts:t,pushServerOpts:r})}return Object(c.a)(n)}(b.a),w=n(21),O=n(1586),k=n(1635),j=[{name:"Rainbow",chains:[w.g.EIP155],logo:"https://images.web3auth.io/login-rainbow.svg",mobile:{native:"rainbow:",universal:"https://rnbwapp.com"},desktop:{native:"",universal:""}},{name:"MetaMask",chains:[w.g.EIP155],logo:"https://images.web3auth.io/login-metamask.svg",mobile:{native:"metamask:",universal:"https://metamask.app.link"},desktop:{native:"",universal:""}}];function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){p()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=e.call(this),p()(Object(o.a)(t),"name",w.j.WALLET_CONNECT_V1),p()(Object(o.a)(t),"adapterNamespace",w.c.EIP155),p()(Object(o.a)(t),"currentChainNamespace",w.g.EIP155),p()(Object(o.a)(t),"type",w.a.EXTERNAL),p()(Object(o.a)(t),"adapterOptions",void 0),p()(Object(o.a)(t),"status",w.d.NOT_READY),p()(Object(o.a)(t),"adapterData",{uri:"",extensionAdapters:j}),p()(Object(o.a)(t),"connector",null),p()(Object(o.a)(t),"wcProvider",null),p()(Object(o.a)(t),"rehydrated",!1),t.adapterOptions=m({},r),t.chainConfig=r.chainConfig||null,t.sessionTime=r.sessionTime||86400,t}return Object(c.a)(n,[{key:"connected",get:function(){var t;return!(null===(t=this.connector)||void 0===t||!t.connected)}},{key:"provider",get:function(){var t;return(null===(t=this.wcProvider)||void 0===t?void 0:t.provider)||null},set:function(t){throw new Error("Not implemented")}},{key:"init",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(s.a)(Object(u.a)(n.prototype),"checkInitializationRequirements",this).call(this),this.chainConfig||(this.chainConfig=Object(w.p)(w.g.EIP155,1)),this.connector=this.getWalletConnectInstance(),this.wcProvider=new k.WalletConnectProvider({config:{chainConfig:this.chainConfig},connector:this.connector}),this.emit(w.b.READY,w.j.WALLET_CONNECT_V1),this.status=w.d.READY,w.s.debug("initializing wallet connect v1 adapter"),!this.connector.connected){t.next=11;break}return this.rehydrated=!0,t.next=11,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId});case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connect",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){var e,i,c=this;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(s.a)(Object(u.a)(n.prototype),"checkConnectionRequirements",this).call(this),this.connector){t.next=3;break}throw w.k.notReady("Wallet adapter is not ready yet");case 3:if(!this.connected){t.next=7;break}return t.next=6,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId});case 6:return t.abrupt("return",this.provider);case 7:if(this.status===w.d.CONNECTING){t.next=13;break}return null!==(e=this.adapterOptions.adapterSettings)&&void 0!==e&&e.qrcodeModal&&(this.connector=this.getWalletConnectInstance(),this.wcProvider=new k.WalletConnectProvider({config:{chainConfig:this.chainConfig,skipLookupNetwork:null===(i=this.adapterOptions.adapterSettings)||void 0===i?void 0:i.skipNetworkSwitching},connector:this.connector})),t.next=11,this.createNewSession();case 11:this.status=w.d.CONNECTING,this.emit(w.b.CONNECTING,{adapter:w.j.WALLET_CONNECT_V1});case 13:return t.abrupt("return",new Promise((function(t,e){if(!c.connector)return e(w.k.notReady("Wallet adapter is not ready yet"));c.connector.on("modal_closed",Object(a.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.status=w.d.READY,c.emit(w.b.READY,w.j.WALLET_CONNECT_V1),t.abrupt("return",e(new Error("User closed modal")));case 3:case"end":return t.stop()}}),t)}))));try{c.connector.on("connect",function(){var e=Object(a.a)(Object(r.a)().mark((function e(n,a){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&c.emit(w.b.ERRORED,n),w.s.debug("connected event emitted by web3auth"),e.next=4,c.onConnectHandler(a.params[0]);case 4:return e.abrupt("return",t(c.provider));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}catch(n){w.s.error("Wallet connect v1 adapter error while connecting",n),c.status=w.d.READY,c.rehydrated=!0,c.emit(w.b.ERRORED,n),e(n instanceof w.m?n:w.l.connectionError("Failed to login with wallet connect: ".concat((null===n||void 0===n?void 0:n.message)||"")))}})));case 14:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(t){this.status!==w.d.READY&&null!==t&&void 0!==t&&t.sessionTime&&(this.sessionTime=t.sessionTime)}},{key:"getUserInfo",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.connected){t.next=2;break}throw w.l.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){var e,a,i=arguments;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i.length>0&&void 0!==i[0]?i[0]:{cleanup:!1},a=e.cleanup,this.connector&&this.connected){t.next=4;break}throw w.l.notConnectedError("Not connected with wallet");case 4:return t.next=6,Object(s.a)(Object(u.a)(n.prototype),"disconnect",this).call(this);case 6:return t.next=8,this.connector.killSession();case 8:this.rehydrated=!1,a?(this.connector=null,this.status=w.d.NOT_READY,this.wcProvider=null):this.status=w.d.READY,this.emit(w.b.DISCONNECTED);case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"addChain",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){var n,a;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.wcProvider){t.next=3;break}throw w.k.notReady("Wallet adapter is not ready yet");case 3:if(!(a=null===(n=this.adapterOptions.adapterSettings)||void 0===n?void 0:n.networkSwitchModal)){t.next=7;break}return t.next=7,a.addNetwork({chainConfig:e,appOrigin:window.location.hostname});case 7:return t.next=9,this.wcProvider.addChain(e);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),w.s.error(t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},{key:"switchChain",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n){var a,i;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.wcProvider){t.next=2;break}throw w.k.notReady("Wallet adapter is not ready yet");case 2:if(!(i=null===(a=this.adapterOptions.adapterSettings)||void 0===a?void 0:a.networkSwitchModal)){t.next=6;break}return t.next=6,i.switchNetwork({currentChainConfig:n,newChainConfig:e,appOrigin:window.location.hostname});case 6:return t.next=8,this.wcProvider.switchChain({chainId:n.chainId,lookup:!1,addChain:!1});case 8:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"createNewSession",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){var e,n,i,c,o=this,s=arguments;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=s.length>0&&void 0!==s[0]?s[0]:{forceNewSession:!1},this.connector){t.next=3;break}throw w.k.notReady("Wallet adapter is not ready yet");case 3:if(!i.forceNewSession||!this.connector.pending){t.next=6;break}return t.next=6,this.connector.killSession();case 6:if(null===(e=this.adapterOptions)||void 0===e||null===(n=e.adapterSettings)||void 0===n||!n.qrcodeModal){t.next=10;break}return t.next=9,this.connector.createSession({chainId:parseInt((null===(c=this.chainConfig)||void 0===c?void 0:c.chainId)||"0x1",16)});case 9:return t.abrupt("return");case 10:return t.abrupt("return",new Promise((function(t,e){var n;if(!o.connector)return e(w.k.notReady("Wallet adapter is not ready yet"));w.s.debug("creating new session for web3auth wallet connect"),o.connector.on("display_uri",function(){var n=Object(a.a)(Object(r.a)().mark((function n(a,i){var c,s;return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a){n.next=3;break}return o.emit(w.b.ERRORED,w.l.connectionError("Failed to display wallet connect qr code")),n.abrupt("return",e(a));case 3:return s=i.params[0],o.updateAdapterData({uri:s,extensionAdapters:j}),null===(c=o.connector)||void 0===c||c.off("display_uri"),n.abrupt("return",t());case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()),o.connector.createSession({chainId:parseInt((null===(n=o.chainConfig)||void 0===n?void 0:n.chainId)||"0x1",16)}).catch((function(t){return w.s.error("error while creating new wallet connect session",t),o.emit(w.b.ERRORED,t),e(t)}))})));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"onConnectHandler",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){var n,a,i,c,o,s;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.connector&&this.wcProvider){t.next=2;break}throw w.k.notReady("Wallet adapter is not ready yet");case 2:if(this.chainConfig){t.next=4;break}throw w.k.invalidParams("Chain config is not set");case 4:if(n=e.chainId,w.s.debug("connected chainId in hex"),n===parseInt(this.chainConfig.chainId,16)){t.next=27;break}if(o=Object(w.p)(w.g.EIP155,n)||{chainId:"0x".concat(n.toString(16)),displayName:"Unknown Network"},(s=null===(a=this.adapterOptions.adapterSettings)||void 0===a?void 0:a.qrcodeModal)&&(!s||null!==(i=this.adapterOptions)&&void 0!==i&&null!==(c=i.adapterSettings)&&void 0!==c&&c.skipNetworkSwitching)){t.next=27;break}return t.prev=10,t.next=13,this.addChain(this.chainConfig);case 13:return t.next=15,this.switchChain(o,this.chainConfig);case 15:this.connector=this.getWalletConnectInstance(),t.next=27;break;case 18:return t.prev=18,t.t0=t.catch(10),w.s.error("error while chain switching",t.t0),t.next=23,this.createNewSession({forceNewSession:!0});case 23:return this.emit(w.b.ERRORED,w.k.fromCode(5e3,"Not connected to correct network. Expected: ".concat(this.chainConfig.displayName,", Current: ").concat((null===o||void 0===o?void 0:o.displayName)||n,", Please switch to correct network from wallet"))),this.status=w.d.READY,this.rehydrated=!0,t.abrupt("return");case 27:return t.next=29,this.wcProvider.setupProvider(this.connector);case 29:this.subscribeEvents(this.connector),this.status=w.d.CONNECTED,this.emit(w.b.CONNECTED,{adapter:w.j.WALLET_CONNECT_V1,reconnected:this.rehydrated});case 32:case"end":return t.stop()}}),t,this,[[10,18]])})));return function(e){return t.apply(this,arguments)}}()},{key:"subscribeEvents",value:function(t){var e=this;t.on("session_update",function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&e.emit(w.b.ERRORED,n);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"getWalletConnectInstance",value:function(){var t=this.adapterOptions.adapterSettings||{};return t.bridge=t.bridge||"https://bridge.walletconnect.org",new v(t)}}]),n}(O.a)}}]);
//# sourceMappingURL=14.ee591e84.chunk.js.map