(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(h,i(i({ref:t},p),{},{components:n})):r.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},106:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var a=n(22),r=n(107);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(t,e,n,a)}}function l(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},107:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(103)),l=(n(106),["components"]),i={id:"deposit_withdrawal",title:"Deposit & Withdraw CKB on Godwoken"},c={unversionedId:"deposit_withdrawal",id:"deposit_withdrawal",isDocsHomePage:!1,title:"Deposit & Withdraw CKB on Godwoken",description:"For deposit and withdrawal operations on Godwoken, two options are available:",source:"@site/docs\\bridge.md",slug:"/deposit_withdrawal",permalink:"/deposit_withdrawal",version:"current",sidebar:"sidebar2",previous:{title:"Deploy Ethereum DApps to Godwoken",permalink:"/deployEthDapp"},next:{title:"FAQ",permalink:"/faq"}},p=[{value:"Using GW-tools to Deposit",id:"using-gw-tools-to-deposit",children:[{value:"<code>gw-tool deposit</code> Subcommands",id:"gw-tool-deposit-subcommands",children:[]}]},{value:"Using GW-tools to Withdraw",id:"using-gw-tools-to-withdraw",children:[{value:"<code>gw-tool withdraw</code> Subcommands",id:"gw-tool-withdraw-subcommands",children:[]}]},{value:"<strong>Unlocking</strong> the Funds to Complete Withdrawal Process",id:"unlocking-the-funds-to-complete-withdrawal-process",children:[{value:"<code>account-cli unlock</code> Subcommands",id:"account-cli-unlock-subcommands",children:[]}]},{value:"Code Example",id:"code-example",children:[]}],s={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For deposit and withdrawal operations on Godwoken, two options are available:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Using a UI deposit or withdrawal provided by ",Object(o.b)("a",{parentName:"li",href:"https://testnet.yokaiswap.com/bridge/deposit"},"yokaiswap")," to perform the relevant actions."),Object(o.b)("li",{parentName:"ol"},"Using ",Object(o.b)("inlineCode",{parentName:"li"},"gw-tools")," deposit or withdrawal to perform the relevant actions, and the unlocking operation so as to complete the withdrawal process.")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"using-gw-tools-to-deposit"},"Using GW-tools to Deposit"),Object(o.b)("p",null,"To ",Object(o.b)("inlineCode",{parentName:"p"},"deposit")," CKBs onto Layer 2, user need to execute the ",Object(o.b)("inlineCode",{parentName:"p"},"gw-tools")," deposit command in the command line. If the user applied the quick mode with godwoken-kicker, which already has a deposit function, the user can carry out the deposit operation directly on http://localhost:6100/ ."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"--help")," to view the available commands, and replace the variables with the values matching one's own account and information. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cargo run --bin gw-tools -- deposit-ckb --help\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Click to view detailed output"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"gw-tools-deposit-ckb\nDeposit CKB to godwoken\n\nUSAGE:\n     gw-tools deposit-ckb [OPTIONS] --capacity <capacity> --config-path <config-path>  --privkey-path <privkey-path>  --scripts-deployment-path <scripts-deployment-path>\n\nFLAGS:\n     -h, --help             Prints help informaiton\n     -V, --version              Prints version information\n\nOPTIONS:\n     -c, --capacity <capacity>      CKB capacity to deposit\n         --ckb-rpc <ckb-rpc-url>        CKB jsonrpc rpc server URL [default: http://127.0.0.1:8114]\n\n     -o, --config-path <config-path>    The config.homl file path\n     -e, --eth-address <eth-address>    Target eth address, calculated by private key in default\n     -f, --fee <fee>            Transaction fee, default to 0.0001 CKB [default: 0.0001]\n     -g, --godwoken-rpc-url <godwoken-rpc-url>\n                        Godwoken jsonrpc rpc sever URL [default: http://127.0.0.1:8119]\n\n     -k, --privkey-path <privkey-path>  The private key file path\n         --scripts-deployment-path <scripts-deployment-path>    \n                        The scripts deployment results json file path\n\n"))),Object(o.b)("p",null,"For more information on the CKB RPC, refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/wiki/Chains"},"CKB Wiki")),Object(o.b)("h3",{id:"gw-tool-deposit-subcommands"},Object(o.b)("code",null,"gw-tool deposit")," Subcommands"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"command"),Object(o.b)("th",{parentName:"tr",align:null},"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"capacity"),Object(o.b)("td",{parentName:"tr",align:null},"The amount of CKB to deposit (Unit is CKB).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ckb-rpc"),Object(o.b)("td",{parentName:"tr",align:null},"CKB node URL, defaults to ",Object(o.b)("a",{parentName:"td",href:"http://127.0.0.1:8114/"},"http://127.0.0.1:8114/"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"config-path"),Object(o.b)("td",{parentName:"tr",align:null},"The config.toml file required for godwoken to run")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"eth-address"),Object(o.b)("td",{parentName:"tr",align:null},"Target eth address to deposit")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"fee"),Object(o.b)("td",{parentName:"tr",align:null},"The transaction fee, this is a CKB transaction and the default rate is 0.0001 CKB.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"godwoken-rpc-url"),Object(o.b)("td",{parentName:"tr",align:null},"The RPC address of Godwoken, by default ",Object(o.b)("a",{parentName:"td",href:"http://127.0.0.1:8119/"},"http://127.0.0.1:8119/"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"privkey-path"),Object(o.b)("td",{parentName:"tr",align:null},"A file written with the private key (hex string) which is used to pay the deposit fee.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"scripts-deployment-path"),Object(o.b)("td",{parentName:"tr",align:null},"The JSON file path of the ",Object(o.b)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"script's deployment results"),".")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"using-gw-tools-to-withdraw"},"Using GW-tools to Withdraw"),Object(o.b)("p",null,"There are ",Object(o.b)("strong",{parentName:"p"},"two steps")," to withdraw assets from layer 2 to layer 1 on Godwoken, the first step is to make a withdrawal request. In comparison to deposits, withdrawals require more time. When a withdrawal is made to layer 1, the withdrawal depends on layer 2, but layer 2 has a lower level of security and for this reason, more confirmations will be required to ensure that security remains reliable.  From the time the withdrawal is made, it takes approximately 5 days until the amount of funds is actually released at layer 1."),Object(o.b)("p",null,"To ",Object(o.b)("inlineCode",{parentName:"p"},"withdraw")," funds from layer 2 to layer 1, execute the following ",Object(o.b)("inlineCode",{parentName:"p"},"gw-tools")," withdraw command, replace the variables with the values needed:"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"--help")," to view the available commands."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cargo run --bin gw-tools -- withdraw --help\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Click to view detailed output"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"gw-tools-withdraw\nwithdraw CKB / sUDT from godwoken\n\nUSAGE:\n     gw-tools withdraw [OPTIONS] --capacity <capacity> --config-path <config-path> --owner-ckb-address <owner-ckb-address> --privkey-path <privkey-path>  --scripts-deployment-path <scripts-deployment-path>\n\nFLAGS:\n     -h, --help             Prints help informaiton\n     -V, --version              Prints version information\n\nOPTIONS:\n     -m, --amount <amount>       sUDT amount to withdrawal [default: 0]\n     -c, --capacity <capacity>      CKB capacity to withdrawal\n     -o, --config-path <config-path>    The config.homl file path\n     -g, --godwoken-rpc-url <godwoken-rpc-url>\n                        Godwoken jsonrpc rpc sever URL [default: http://127.0.0.1:8119]\n\n     -a, --owner-ckb-address <owner-ckb-address>    owner ckb address (to)\n     -k, --privkey-path <privkey-path>  The private key file path\n         --scripts-deployment-path <scripts-deployment-path>    \n                        The scripts deployment results json file path\n\n         -sudt-script-hash <sudt-script-hash>   l1 sudt script hash, default for withdrawal CKB [default: 0x0000000000000000000000000000000000000000000000000000000000000000]\n\n"))),Object(o.b)("p",null,"For more information on ",Object(o.b)("inlineCode",{parentName:"p"},"Godwoken RPC"),", refer to ",Object(o.b)("a",{parentName:"p",href:"/#godwoken-public-networks"},"Godwoken Public Network"),"."),Object(o.b)("h3",{id:"gw-tool-withdraw-subcommands"},Object(o.b)("code",null,"gw-tool withdraw")," Subcommands"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"command"),Object(o.b)("th",{parentName:"tr",align:null},"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"amount"),Object(o.b)("td",{parentName:"tr",align:null},"The amount of sUDT")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"capacity"),Object(o.b)("td",{parentName:"tr",align:null},"The amount of CKB to withdraw, the unit is CKB.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"config-path"),Object(o.b)("td",{parentName:"tr",align:null},"The config.toml file required for godwoken to run.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"godwoken-rpc-url"),Object(o.b)("td",{parentName:"tr",align:null},"The RPC address of Godwoken, by default ",Object(o.b)("a",{parentName:"td",href:"http://127.0.0.1:8119/"},"http://127.0.0.1:8119/"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"owner-ckb-address"),Object(o.b)("td",{parentName:"tr",align:null},"The CKB address of the recipient.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"privkey-path"),Object(o.b)("td",{parentName:"tr",align:null},"A file written with the private key (hex string) which is used to pay the deposit fee.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"scripts-deployment-path"),Object(o.b)("td",{parentName:"tr",align:null},"The JSON file path of the ",Object(o.b)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"script's deployment results"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"sudt-script-hash"),Object(o.b)("td",{parentName:"tr",align:null},"The script hash of sUDT on layer 1, defaults to 0x0000000000000000000000000000000000000000000000000000, indicating only CKB is redeemed (amount left unfilled or filled with 0).")))),Object(o.b)("h2",{id:"unlocking-the-funds-to-complete-withdrawal-process"},Object(o.b)("strong",{parentName:"h2"},"Unlocking")," the Funds to Complete Withdrawal Process"),Object(o.b)("p",null,"Withdrawing funds from Godwoken is a ",Object(o.b)("strong",{parentName:"p"},"two-step")," process. Step one initiates the withdrawal and step two releases the funds. Godwoken uses an optimistic rollup architecture that permits only one honest node in the network. All this provides a very secure foundation for Layer 2, but comes at the cost of a ",Object(o.b)("strong",{parentName:"p"},"5-day")," 'challenge period' when exiting from Layer 2. This is a period where the Layer 2 network operator gets time to examine and flag up any potential problems with malicious transactions and roll back if necessary. The five-day challenge period will begin once the withdrawal process has commenced. The five-day time interval is a bit long but necessary. "),Object(o.b)("p",null,"To ",Object(o.b)("inlineCode",{parentName:"p"},"unlock")," the withdrawal cells to normal ckb cells and to perform common Layer2 actions, the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-examples/tree/develop/packages/tools"},Object(o.b)("inlineCode",{parentName:"a"},"account-cli tool"))," will be applied. "),Object(o.b)("p",null,"Execute the ",Object(o.b)("inlineCode",{parentName:"p"},"account-cli tool")," unlock command:"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"--help")," to view the available commands."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'# devnet\nexport LUMOS_CONFIG_FILE=./kicker-lumos-config.json node ./packages/tools/lib/account-cli.js unlock --help\n\n# testnet\nexport LUMOS_CONFIG_NAME="AGGRON4" node ./packages/tools/lib/account-cli.js unlock --help\n\n# mainnet\nexport LUMOS_CONFIG_NAME="LINA" node ./packages/tools/lib/account-cli.js unlock --help\n')),Object(o.b)("details",null,Object(o.b)("summary",null,"Click to view detailed output"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'LUMOS_CONFIG_FILE=./kicker-lumos-config.json node ./packages/tools/lib/account-cli.js unlock --help\nUsage: account-cli unlock [options]\n\nunlock withdrawal CKB / sUDT from godwoken\n\nOptions:\n  -p, --private-key <privatekey>            private key to use\n  -s, --sudt-script-args <l1 sudt script args>      only for unlock sudt\n  -r, --rpc <rpc>           ckb rpc path (default: "http://127.0.0.1:8114")\n  -d, --indexer-path <path>             indexer path (default: "./indexer-data-path/<ckb genesis hash>")\n  -h, --help            display help for command\n'))),Object(o.b)("p",null,"Note: The private key you pass to ",Object(o.b)("inlineCode",{parentName:"p"},"unlock")," command needs to be the same as the one that corresponds with the Layer 1 address that was previously used with the ",Object(o.b)("inlineCode",{parentName:"p"},"withdraw")," and ",Object(o.b)("inlineCode",{parentName:"p"},"deposit"),"."),Object(o.b)("h3",{id:"account-cli-unlock-subcommands"},Object(o.b)("code",null,"account-cli unlock")," Subcommands"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"command"),Object(o.b)("th",{parentName:"tr",align:null},"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"LUMOS_CONFIG_FILE"),Object(o.b)("td",{parentName:"tr",align:null},"The environment variable, filled with the lumos config json file path, or simply the name if it is on the testnet / mainnet")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"private-key"),Object(o.b)("td",{parentName:"tr",align:null},"The private key")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"sudt-script-args"),Object(o.b)("td",{parentName:"tr",align:null},"Layer1 sudt script args, or sudt token")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"rpc"),Object(o.b)("td",{parentName:"tr",align:null},"The rpc address of CKB, with a default value")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"indexer-path"),Object(o.b)("td",{parentName:"tr",align:null},"The path of Lumos indexer, with a default value, no need to fill in generally")))),Object(o.b)("p",null,"For more information on ",Object(o.b)("inlineCode",{parentName:"p"},"Lumos"),", please refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos"},"https://github.com/nervosnetwork/lumos")," . "),Object(o.b)("h2",{id:"code-example"},"Code Example"),Object(o.b)("p",null,"For developers who need additional code details, refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/classicalliu/gw-demos"},"gw-demos")," for more detailed examples."))}d.isMDXComponent=!0}}]);