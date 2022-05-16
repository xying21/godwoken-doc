"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[2194],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,m=u["".concat(s,".").concat(k)]||u[k]||c[k]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},737:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=n(4996),l=["components"],s={id:"liteGodwokenWithdraw",title:"Light Godwoken Tutorial"},d=void 0,p={unversionedId:"liteGodwokenWithdraw",id:"version-1.1(WIP)/liteGodwokenWithdraw",title:"Light Godwoken Tutorial",description:"",source:"@site/versioned_docs/version-1.1(WIP)/liteGodwokenWithdraw.md",sourceDirName:".",slug:"/liteGodwokenWithdraw",permalink:"/godwoken-doc/liteGodwokenWithdraw",draft:!1,tags:[],version:"1.1(WIP)",frontMatter:{id:"liteGodwokenWithdraw",title:"Light Godwoken Tutorial"},sidebar:"sidebar2",previous:{title:"Light Godwoken",permalink:"/godwoken-doc/lightGodwoken"},next:{title:"Godwoken V1.1 Release Note",permalink:"/godwoken-doc/releaseNote"}},c={},u=[{value:"Deposit CKB or Supported sUDT from Layer 1 to Layer 2 wallet",id:"deposit-ckb-or-supported-sudt-from-layer-1-to-layer-2-wallet",level:2},{value:"Withdraw Assets from Godwoken v0 to Godwoken v1",id:"withdraw-assets-from-godwoken-v0-to-godwoken-v1",level:2},{value:"Reference",id:"reference",level:2}],k={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial assumes users have already downloaded a web3 wallet, such as MetaMask, and that users have CKB or tokens in the wallet."),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," to download the wallet. For more information about the concepts of Godwoken and CKB, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/introduction"},"Nervos CKB")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.godwoken.io"},"Godwoken"),". "),(0,a.kt)("h2",{id:"deposit-ckb-or-supported-sudt-from-layer-1-to-layer-2-wallet"},"Deposit CKB or Supported sUDT from Layer 1 to Layer 2 wallet"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the Godwoken Network manually to the MetaMask wallet.  "),(0,a.kt)("p",{parentName:"li"},"Godwoken v1 is currently in active development. For more information on Godwoken public networks, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-info"},"godwoken"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Bridge Your Own Assets"),(0,a.kt)("p",{parentName:"li"},"Login to the bridge with user's own MetaMask wallet, and connect to the Godwoken Network. "),(0,a.kt)("img",{src:(0,i.Z)("img/liteGdwknCon1.jpg"),width:"40%"}),(0,a.kt)("img",{src:(0,i.Z)("img/liteGdwknCon2.jpg"),width:"40%"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deposit CKB to Layer 2 Wallet"),(0,a.kt)("p",{parentName:"li"},"Entering the amount, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Deposit")," and press ",(0,a.kt)("inlineCode",{parentName:"p"},"sign")," to authorize the transaction on the MetaMask popup to complete the transfer. "),(0,a.kt)("img",{src:(0,i.Z)("img/depo2lyr2.png"),width:"40%"}),(0,a.kt)("img",{src:(0,i.Z)("img/sign1.png"),width:"40%"}),(0,a.kt)("p",{parentName:"li"},"Refresh the page after a few minutes to check the changes in Layer 1 and Layer 2 account balances.\n",(0,a.kt)("strong",{parentName:"p"},"Note:")," The minimum amount of deposit from Layer 1 to Layer 2 is 400 CKB."))),(0,a.kt)("h2",{id:"withdraw-assets-from-godwoken-v0-to-godwoken-v1"},"Withdraw Assets from Godwoken v0 to Godwoken v1"),(0,a.kt)("p",null," In the ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.bridge.godwoken.io/#/v0"},"Godwoken Bridge Withdrawal UI"),", choose the destination that you want to move the assets into, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Request Withdrawal")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Confirm")," to complete the transaction. "),(0,a.kt)("img",{src:(0,i.Z)("img/V0-V1.png"),width:"40%"}),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Note:")," Withdrawing assets from Layer 0 to Layer 1 has a withdrawal period of at least 5 days, which means that the user will have to wait at least 5 days until receiving the assets."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource"),(0,a.kt)("th",{parentName:"tr",align:null},"Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken Docs"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"},"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken Demos"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/classicalliu/gw-demos"},"https://github.com/classicalliu/gw-demos"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken testnet config"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Polyjuice Provider"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/polyjuice-provider"},"https://github.com/nervosnetwork/polyjuice-provider"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Godwoken Web3"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"},"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Lumos Documentation"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/lumos"},"https://github.com/nervosnetwork/lumos"))))))}m.isMDXComponent=!0}}]);