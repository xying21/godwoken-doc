"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[2780],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},976:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"evmTraining",title:"Hands-On EVM Training"},p=void 0,l={unversionedId:"evmTraining",id:"evmTraining",title:"Hands-On EVM Training",description:"This section covers Nervos' Layer 2 EVM training. With each task in this section, developers can practice step-by-step on developing EVM dapps on Nervos platform so as to gain direct development experience and prepare for deploying their own dapps.",source:"@site/docs/evmTraining.md",sourceDirName:".",slug:"/evmTraining",permalink:"/godwoken-doc/next/evmTraining",draft:!1,tags:[],version:"current",frontMatter:{id:"evmTraining",title:"Hands-On EVM Training"},sidebar:"sidebar2",previous:{title:"Godwoken Web3 API Compatibility",permalink:"/godwoken-doc/next/web3Compatible"},next:{title:"Deploy Local Network with Godwoken-kicker",permalink:"/godwoken-doc/next/deployLocalNetwork"}},c={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section covers Nervos' Layer 2 EVM training. With each task in this section, developers can practice step-by-step on developing EVM dapps on Nervos platform so as to gain direct development experience and prepare for deploying their own dapps. "),(0,a.kt)("p",null,"The following nine tasks will walk developers through the process. Each task will give instructions on what needs to be done, the guidance on all the necessary tooling and informative materials needed for completing the task:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/1.create.godwoken.account"},"Create account on the EVM Layer 2 Testnet")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/2.deploy.eth.contract"},"Deploy a Simple Ethereum Smart Contract on Polyjuice")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/3.issue.contract.call"},"Issue a Smart Contract Call to the Deployed Smart Contract")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/4.issue.sudt.deposit"},"Issue an SUDT Token on Layer 1 and Deposit it to Layer 2")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/5.deploy.erc20.proxy.contract"},"Deploy the ERC20 Proxy Contract for the Deposited SUDT")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/6.use.force.bridge.to.deposit"},"Use Force Bridge to Deposit Tokens on Ethereum to Polyjuice")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/7.port.eth.dapp"},"Port an Existing Ethereum dApp to Polyjuice")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/8.modify.dapp.support.force.bridge"},"Modify the Ported dApp so it Supports Ethereum Assets via Force Bridge")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://nervos.gitbook.io/layer-2-evm/tasks/9.withdraw"},"Withdraw From Layer 2 Back to Layer 1"))))}m.isMDXComponent=!0}}]);