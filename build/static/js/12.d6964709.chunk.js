(this["webpackJsonptest-to-earn"]=this["webpackJsonptest-to-earn"]||[]).push([[12],{1595:function(r,t){},1767:function(r,t,n){"use strict";n.r(t),function(r){n.d(t,"getED25519Key",(function(){return c}));var e=n(26),a=n(1634),o=n.n(a).a.lowlevel;function c(t){var n;n="string"===typeof t?r.from(t,"hex"):t;var a=new Uint8Array(64),c=[o.gf(),o.gf(),o.gf(),o.gf()],f=new Uint8Array([].concat(Object(e.a)(new Uint8Array(n)),Object(e.a)(new Uint8Array(32)))),i=new Uint8Array(32);o.crypto_hash(a,f,32),a[0]&=248,a[31]&=127,a[31]|=64,o.scalarbase(c,a),o.pack(i,c);for(var s=0;s<32;s+=1)f[s+32]=i[s];return{sk:r.from(f),pk:r.from(i)}}}.call(this,n(39).Buffer)}}]);
//# sourceMappingURL=12.d6964709.chunk.js.map