"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[814],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2790:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"web3Compatible",title:"Godwoken Web3 API Compatibility"},p="Eth Compatibility",s={unversionedId:"web3Compatible",id:"version-1.1(WIP)/web3Compatible",title:"Godwoken Web3 API Compatibility",description:"Godwoken Web3 API is a Web3 RPC compatible layer built atop Godwoken/Polyjuice.",source:"@site/versioned_docs/version-1.1(WIP)/web3Compatible.md",sourceDirName:".",slug:"/web3Compatible",permalink:"/godwoken-doc/web3Compatible",draft:!1,tags:[],version:"1.1(WIP)",frontMatter:{id:"web3Compatible",title:"Godwoken Web3 API Compatibility"},sidebar:"sidebar2",previous:{title:"Comparison with EVM",permalink:"/godwoken-doc/comparisonEVM"},next:{title:"Integration Guide for Ethererm Developers",permalink:"/godwoken-doc/integration"}},c={},u=[{value:"RPC compatibility",id:"rpc-compatibility",level:2},{value:"<code>transaction.to</code> MUST be a Contract Address",id:"transactionto-must-be-a-contract-address",level:4},{value:"Signing Transaction Only Support EIP155",id:"signing-transaction-only-support-eip155",level:4},{value:"ZERO ADDRESS",id:"zero-address",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eth-compatibility"},"Eth Compatibility"),(0,a.kt)("p",null,"Godwoken Web3 API is a Web3 RPC compatible layer built atop Godwoken/Polyjuice."),(0,a.kt)("h2",{id:"rpc-compatibility"},"RPC compatibility"),(0,a.kt)("h4",{id:"transactionto-must-be-a-contract-address"},(0,a.kt)("inlineCode",{parentName:"h4"},"transaction.to")," MUST be a Contract Address"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," member of a Godwoken transaction must be a contract."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Result")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the following RPCs, the ",(0,a.kt)("inlineCode",{parentName:"li"},"to")," parameter can only be a contract address and ",(0,a.kt)("strong",{parentName:"li"},"CANNOT")," be an EOA address:"),(0,a.kt)("li",{parentName:"ul"},"eth_call"),(0,a.kt)("li",{parentName:"ul"},"eth_estimateGas"),(0,a.kt)("li",{parentName:"ul"},"eth_sendRawTransaction")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recommend Workaround")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Transfer Value From EOA To EOA"),": Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"transfer function")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/3f1ad5b/solidity/erc20/README.md"},"CKB_ERC20_Proxy")," contract ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken-polyjuice/blob/3f1ad5b322/solidity/erc20/SudtERC20Proxy_UserDefinedDecimals.sol#L154"},"combined")," with sUDT_ID = 1 (CKB a.k.a. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_polyjuice_transaction.md#pckb"},"pCKB"),").")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"signing-transaction-only-support-eip155"},"Signing Transaction Only Support EIP155"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-155"},"EIP155")," added the chainId for simple replay attack protection, but currently only EIP155 signing scheme is supported."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Result")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using outdated Ethereum toolchain, like ",(0,a.kt)("inlineCode",{parentName:"li"},"truffle-hdwallet-provider"),", to send transaction will result in failure.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recommend workaround")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"always use latest ethereum toolchain, like ",(0,a.kt)("inlineCode",{parentName:"li"},"ether.js")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"web3.js")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"truffle")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"@truffle/hdwallet-provider")," etc.")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"zero-address"},"ZERO ADDRESS"),(0,a.kt)("p",null,'Godwoken does not have corresponding "zero address"(0x0000000000000000000000000000000000000000) concept, so Polyjuice won\'t be able to handle zero address as well.'),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Result")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Transaction with zero address in from/to filed is not supported."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Recommend workaround"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"if you are trying use zero address as a black hole to burn ethers, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer function")," in CKB_ERC20_Proxy to send ethers to zero address. more info can be found on above section ",(0,a.kt)("inlineCode",{parentName:"p"},"Transfer Value From EOA To EOA"),"."))),(0,a.kt)("p",null,"For more information on Godwoken Web3 API, visite ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3/tree/compatibility-breaking-changes"},"godwoken-web3"),"."))}m.isMDXComponent=!0}}]);