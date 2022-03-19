"use strict";(self.webpackChunkai_mirror_react_poc=self.webpackChunkai_mirror_react_poc||[]).push([[791],{7791:(e,A,t)=>{t.r(A),t.d(A,{default:()=>q});var r=t(5861),n=t(885),o=t(7757),a=t.n(o),s=t(6409),p=t(5052),i=t(8949),l=t(2766),d=t(7294),c=t(6974),u=t(2982);const m=(0,d.memo)((function(e){var A,t=e.isVisible,r=e.value;console.log("Password Strength Tooltip"),console.log("passwordValue",r);var o=(0,d.useState)(),a=(0,n.Z)(o,2),s=a[0],p=a[1];(0,d.useEffect)((function(){l(r)}),[r]);var i=(0,d.useMemo)((function(){return{lowercase:"At least one lowercase",uppercase:"At least one uppercase",number:"At least one number",specialCharacter:"At least one special charater",minLength:"At least 8 charaters"}}),[]),l=function(e){var A=[];e.search(/[a-z]/)<0&&(A=[].concat((0,u.Z)(A),["lowercase"])),e.search(/[A-Z]/)<0&&(A=[].concat((0,u.Z)(A),["uppercase"])),e.search(/[0-9]/i)<0&&(A=[].concat((0,u.Z)(A),["number"])),e.search(/[!@#$%^&*]/i)<0&&(A=[].concat((0,u.Z)(A),["specialCharacter"])),e.length<8&&(A=[].concat((0,u.Z)(A),["minLength"])),A.length&&(A=[].concat((0,u.Z)(A),["valid"])),p(A)};return d.createElement("div",{className:"password-strength-popup ".concat(t?"show":"hidden")},d.createElement("p",{className:"password-strength-popup__title"},"Must contain:"),d.createElement("ul",null,null===(A=Object.keys(i))||void 0===A?void 0:A.map((function(e){var A=!(null!=s&&s.includes("valid")&&null!=s&&s.includes(e));return d.createElement("li",{key:e,className:A?"valid":"invalid"}," ",i[e])}))))}));var w=t(3379),b=t.n(w),h=t(7795),f=t.n(h),g=t(569),v=t.n(g),x=t(3565),y=t.n(x),C=t(9216),B=t.n(C),Z=t(4589),S=t.n(Z),I=t(6514),k={};k.styleTagTransform=S(),k.setAttributes=y(),k.insert=v().bind(null,"head"),k.domAPI=f(),k.insertStyleElement=B(),b()(I.Z,k),I.Z&&I.Z.locals&&I.Z.locals;const q=(0,l.Pi)((function(e){var A=e.onSubmit;console.log("Register Form");var t=(0,c.s0)(),o=(0,d.useState)(""),l=(0,n.Z)(o,2),u=l[0],w=l[1],b=(0,d.useState)(!1),h=(0,n.Z)(b,2),f=h[0],g=h[1],v=(0,d.useState)(),x=(0,n.Z)(v,2),y=x[0],C=x[1],B=(0,d.useContext)(p.Z),Z=B.userStore,S=B.loaderStore,I=(0,i.Fl)((function(){return S.getStatusByName("RegisterRequest")}));console.log("registerRequestStatus",I.get());var k=(0,d.useCallback)((function(){g(!0)}),[f]),q=(0,d.useCallback)((function(){g(!1)}),[f]),E=(0,d.useCallback)(function(){var e=(0,r.Z)(a().mark((function e(A){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.onRegister(A);case 2:2===(r=e.sent)?C({email:{type:"validate",message:"Email is already exists"}}):1===r&&(C({}),t("/"));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}(),[y]),_=[{id:"name",name:"name",className:"textbox",label:"Full Name",type:"text",rules:{required:"Required"}},{id:"email",name:"email",className:"textbox",label:"Email Address",type:"email",rules:{required:"Required",pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid email address"}},error:null==y?void 0:y.email},{id:"password",name:"password",className:"textbox",label:"Password",type:"password",onFocus:k,rules:{required:"Required",pattern:{value:/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*\d)(?=.*[a-z]).{8,}$/,message:"Weak password"},onChange:function(e){w(e.target.value)},onBlur:q},children:d.createElement(m,{isVisible:f,value:u})},{id:"confirm-password",name:"confirm-password",className:"textbox",label:"Confirm Password",type:"password",rules:{required:"Required",validate:function(e){return e===u||"Passwords does not matched"}}}];return d.createElement("div",null,d.createElement(s.Ur,{formName:"register-form",onSubmit:A||E,formFields:_,submitButtonName:"Register Me",isSubmitting:I.get()}))}))},6514:(e,A,t)=>{t.d(A,{Z:()=>s});var r=t(7537),n=t.n(r),o=t(3645),a=t.n(o)()(n());a.push([e.id,".password-strength-popup {\nposition: relative;\nwidth: -webkit-fit-content;\nwidth: -moz-fit-content;\nwidth: fit-content;\npadding-left: 1.5rem;\npadding-right: 1.5rem;\npadding-top: 1rem;\nfont-size: 0.875rem;\nline-height: 1.25rem        \n}\n@media (min-width: 768px) {\n.password-strength-popup {\npadding-top: 1.25rem        \n}        \n}\n    @media (min-width: 1280px) {.password-strength-popup {\nposition: absolute        \n}.password-strength-popup {\nleft: calc(100% + 30px)        \n}.password-strength-popup {\ntop: calc(calc(50% + 25px) * -1)        \n}.password-strength-popup {\nwidth: -webkit-fit-content;\nwidth: -moz-fit-content;\nwidth: fit-content        \n}.password-strength-popup {\nborder-width: 1px        \n}.password-strength-popup {\n--tw-border-opacity: 1;\nborder-color: rgb(203 213 225 / var(--tw-border-opacity))        \n}.password-strength-popup {\npadding: 1.25rem        \n}.password-strength-popup {\npadding-left: 1.5rem;\npadding-right: 1.5rem        \n}.password-strength-popup {\nfont-size: 0.875rem;\nline-height: 1.25rem        \n}.password-strength-popup {\n--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\nbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)        \n}.password-strength-popup {\n--tw-shadow-color: rgb(203 213 225 / 0.5);\n--tw-shadow: var(--tw-shadow-colored)        \n}        \n    }\n    .password-strength-popup__title {\nmargin-bottom: 0.5rem;\nfont-family: bold-font;\n-webkit-text-decoration-line: underline;\n        text-decoration-line: underline        \n}\n    .password-strength-popup .invalid {\n--tw-text-opacity: 1;\ncolor: rgb(239 68 68 / var(--tw-text-opacity))        \n}\n    .password-strength-popup .invalid::before {\nmargin-right: 0.25rem;\n--tw-content: '\\2716';\ncontent: var(--tw-content)        \n}\n    .password-strength-popup .valid {\n--tw-text-opacity: 1;\ncolor: rgb(34 197 94 / var(--tw-text-opacity))        \n}\n    .password-strength-popup .valid::before {\nmargin-right: 0.25rem;\n--tw-content: '\\2714';\ncontent: var(--tw-content)        \n}\n    .password-strength-popup::before, .password-strength-popup::after {\nposition: absolute;\nleft: -30px;\ntop: calc(50% - 6px);\ndisplay: none;\nborder-width: 12px;\nborder-left-width: 15px;\nborder-right-width: 15px;\n--tw-border-opacity: 1;\nborder-color: rgb(203 213 225 / var(--tw-border-opacity));\nborder-left-color: transparent;\nborder-top-color: transparent;\nborder-bottom-color: transparent;\n--tw-content: \"\";\ncontent: var(--tw-content)        \n}\n    @media (min-width: 1280px) {\n.password-strength-popup::before, .password-strength-popup::after {\ndisplay: block        \n}        \n}\n    .password-strength-popup::after {\nleft: -28px;\n--tw-border-opacity: 1;\nborder-color: rgb(255 255 255 / var(--tw-border-opacity));\nborder-left-color: transparent;\nborder-top-color: transparent;\nborder-bottom-color: transparent        \n}","",{version:3,sources:["<no source>","webpack://./src/forms/register-form/password-strength.css"],names:[],mappings:"AAAA;AAAA,mBAAA;AAAA,2BAAA;AAAA,wBAAA;AAAA,mBAAA;AAAA,qBAAA;AAAA,sBAAA;AAAA,kBAAA;AAAA,oBAAA;AAAA;CAAA;AAAA;AAAA;AAAA;CAAA;CAAA;ICEI,4BDFJ;AAAA;CAAA;AAAA;CAAA;AAAA;CAAA;AAAA,2BAAA;AAAA,wBAAA;AAAA;CAAA;AAAA;CAAA;AAAA,uBAAA;AAAA;CAAA;AAAA;CAAA;AAAA,qBAAA;AAAA;CAAA;AAAA,oBAAA;AAAA;CAAA;AAAA,gFAAA;AAAA,oGAAA;AAAA;CAAA;AAAA,0CAAA;AAAA;CAAA;ICII;IDJJ;AAAA,sBAAA;AAAA,uBAAA;AAAA,wCAAA;QAAA;CAAA;IAAA;AAAA,qBAAA;AAAA;CAAA;IAAA;AAAA,sBAAA;AAAA,sBAAA;AAAA;CAAA;IAAA;AAAA,qBAAA;AAAA;CAAA;IAAA;AAAA,sBAAA;AAAA,sBAAA;AAAA;CAAA;IAAA;AAAA,mBAAA;AAAA,YAAA;AAAA,qBAAA;AAAA,cAAA;AAAA,mBAAA;AAAA,wBAAA;AAAA,yBAAA;AAAA,uBAAA;AAAA,0DAAA;AAAA,+BAAA;AAAA,8BAAA;AAAA,iCAAA;AAAA,iBAAA;AAAA;CAAA;IAAA;AAAA;AAAA;CAAA;CAAA;IAAA;AAAA,YAAA;AAAA,uBAAA;AAAA,0DAAA;AAAA,+BAAA;AAAA,8BAAA;AAAA;CAAA",sourcesContent:[null,".password-strength-popup {\n    @apply relative px-6 pt-4 md:pt-5 text-sm w-fit;\n    @screen xl {\n        @apply absolute border border-slate-300 p-5 px-6 shadow-lg shadow-slate-300/50 text-sm left-[calc(100%+30px)] -top-[calc(50%+25px)] w-fit;        \n    }\n    &__title {\n        @apply font-family-bold mb-2 underline;\n    }\n    .invalid {\n        @apply before:content-['\\2716'] before:mr-1 text-red-500;\n    }\n    .valid {\n        @apply before:content-['\\2714'] before:mr-1 text-green-500\n    }\n    &::before,\n    &::after, {\n        @apply content-[\"\"] absolute -left-[30px] top-[calc(50%-6px)] border-[12px] border-x-[15px] border-slate-300 border-l-transparent border-t-transparent border-b-transparent hidden xl:block;\n    }\n    &::after {\n        @apply -left-[28px] border-white border-l-transparent border-t-transparent border-b-transparent;\n    }\n}"],sourceRoot:""}]);const s=a},907:(e,A,t)=>{function r(e,A){(null==A||A>e.length)&&(A=e.length);for(var t=0,r=new Array(A);t<A;t++)r[t]=e[t];return r}t.d(A,{Z:()=>r})},885:(e,A,t)=>{t.d(A,{Z:()=>n});var r=t(181);function n(e,A){return function(e){if(Array.isArray(e))return e}(e)||function(e,A){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,n,o=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!A||o.length!==A);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==t.return||t.return()}finally{if(s)throw n}}return o}}(e,A)||(0,r.Z)(e,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2982:(e,A,t)=>{t.d(A,{Z:()=>o});var r=t(907),n=t(181);function o(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,n.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:(e,A,t)=>{t.d(A,{Z:()=>n});var r=t(907);function n(e,A){if(e){if("string"==typeof e)return(0,r.Z)(e,A);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,A):void 0}}}}]);
//# sourceMappingURL=791.bundle.js.map