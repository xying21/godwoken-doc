"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[442],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,k=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8489:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=(n(4996),n(9960),["components"]),l={id:"integration",title:"Integration Guide for Ethererm Developers"},s=void 0,c={unversionedId:"integration",id:"integration",title:"Integration Guide for Ethererm Developers",description:"",source:"@site/docs/integration.md",sourceDirName:".",slug:"/integration",permalink:"/godwoken-doc/next/integration",draft:!1,tags:[],version:"current",frontMatter:{id:"integration",title:"Integration Guide for Ethererm Developers"},sidebar:"sidebar2",previous:{title:"Decentralization Roadmap",permalink:"/godwoken-doc/next/decentralizationRoadmap"},next:{title:"Comparison with EVM",permalink:"/godwoken-doc/next/comparisonEVM"}},d={},u=[{value:"Why Develop on Godwoken?",id:"why-develop-on-godwoken",level:2},{value:"Known Caveats",id:"known-caveats",level:2},{value:"Account Creation",id:"account-creation",level:2},{value:"pCKB",id:"pckb",level:2},{value:"All Tokens Are ERC20 Tokens",id:"all-tokens-are-erc20-tokens",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ethereum developers can simply use Godwoken as an EVM-compatible layer 2 chain, just like Arbitrum and Optimism."),(0,a.kt)("p",null,"This documentation can be used as an integration guide for wallets and exchanges, or as a reference for developing dApps on Godwoken. It describes how to interact with Godwoken using existing Ethereum development tools, known caveats of version 1 and corresponding workarounds."),(0,a.kt)("p",null,"The knowledge of Ethereum is a prerequisite for using this guide."),(0,a.kt)("h2",{id:"why-develop-on-godwoken"},"Why Develop on Godwoken?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Security")," - Nervos Network is a Proof-of-Work (PoW) layer 1 chain and Godwoken is an optimistic rollup layer 2 chain built on Nervos Network. The security model is quite different from other EVM-compatible PoS/DPoS/PoA chains or sidechains. For more information, see the references section."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Low cost")," - A typical Godwoken transaction currently costs less than $0.0001."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ecosystem"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"With Force Bridge, assets from 3 chains (Nervos, Ethereum and BSC) are already available on Godwoken. The support for more chains (Cardano, BTC) is on the way."),(0,a.kt)("li",{parentName:"ul"},"The TVL of Godwoken is now nearly ",(0,a.kt)("a",{parentName:"li",href:"https://defillama.com/chains"},"100 million"),". A number of DeFi dApps (e.g. ",(0,a.kt)("a",{parentName:"li",href:"https://www.yokaiswap.com/"},"YokaiSwap"),", ",(0,a.kt)("a",{parentName:"li",href:"https://www.daruma.money/"},"DARUMA"),") and wallets (e.g. ",(0,a.kt)("a",{parentName:"li",href:"https://www.safepal.io/download"},"SafePal"),") have already been integrated. "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/nervosnetwork/blockchain-abstraction-and-interoperability-2-0-eea98d81b7b6"},(0,a.kt)("strong",{parentName:"a"},"Interoperability 2.0"))," - This may be the trump card of Godwoken. With the design abstractions of Nervos Network and Godwoken, it is possible to use any on-chain tool to port smart contracts to manipulate assets on the corresponding chain.")),(0,a.kt)("h2",{id:"known-caveats"},"Known Caveats"),(0,a.kt)("p",null,"Godwoken V1 is still under development and targets 100% EVM compatibility. Having the best compatibility is the objective of designing and building Godwoken/Polyjuice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The EVM being used in Godwoken/Polyjuice should be 100% compatible with the latest forked version of Ethereum."),(0,a.kt)("li",{parentName:"ul"},"Godwoken/Polyjuice should be 100% compatible with Ethereum over the Web3 interfaces by using the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-web3"},"Web3 layer"),".")),(0,a.kt)("p",null,"Given the wide architechtural and design differences between Godwoken/Polyjuice and Ethereum, several discrepancies inevitably exsit. "),(0,a.kt)("h2",{id:"account-creation"},"Account Creation"),(0,a.kt)("p",null,"It is mandatory to create an account on a Godwoken chain in order to use Polyjuice. Two ways to create a layer 2 account:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make a deposit to Godwoken at layer 1;"),(0,a.kt)("li",{parentName:"ul"},"Call the Godwoken built-in ",(0,a.kt)("inlineCode",{parentName:"li"},"[meta_contract](https://github.com/nervosnetwork/godwoken-scripts/blob/86b299f/c/contracts/meta_contract.c)")," and create an account at layer 2.")),(0,a.kt)("h2",{id:"pckb"},"pCKB"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"pCKB")," is a defined layer 2 sUDT token type of choice when deploying a Godwoken/Polyjuice chain. The pCKB serves a similar purpose for the Godwoken/Polyjuice chain as ETH does for the Ethereum chain, i.e., to collect transaction fees. The gas price of a Godwoken transaction is measured with the pCKB that is designated to the Godwoken chain, and will be debited from the sender's account once the transaction is committed on the chain. Godwoken chain uses CKB as pCKB by default, while different Godwoken chains may use different token types as pCKB."),(0,a.kt)("h2",{id:"all-tokens-are-erc20-tokens"},"All Tokens Are ERC20 Tokens"),(0,a.kt)("p",null,"The difference in handling ERC20 tokens and native ETH tokens in Ethereum brought wETH into existence. But with Godwoken, this difference disappears. Either the native CKB or any sUDT token types are all layer 2 sUDT types in Godwoken."),(0,a.kt)("p",null,"From this layer 2 sUDT contract, Polyjuice ensures that all tokens on Godwoken are ERC20 compatible, regardless the tokens are backed by native CKBs or sUDTs. In other words, it will not be necessary to deal with native tokens and ERC20 tokens separately, as all the different tokens have the same ERC20 interface."))}h.isMDXComponent=!0}}]);