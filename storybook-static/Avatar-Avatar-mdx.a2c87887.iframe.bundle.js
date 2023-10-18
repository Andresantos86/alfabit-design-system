/*! For license information please see Avatar-Avatar-mdx.a2c87887.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[818],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./components/Avatar/Avatar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),D_Projetos_Tailwind_alfabit_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Avatar_stories_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Avatar/Avatar.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h3:"h3",h2:"h2"},(0,D_Projetos_Tailwind_alfabit_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Avatar_stories_ts__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"avatar",children:"Avatar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"O componente Avatar exibe uma imagem personalizada, caso fornecida, representando um usuário ou uma entidade. Caso contrário, é exibido um ícone padrão."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Essa pequena representação visual é comumente usada para identificar e diferenciar usuários em aplicativos e interfaces."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"pequeno",children:"Pequeno"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Avatar_stories_ts__WEBPACK_IMPORTED_MODULE_2__.AvatarSmall,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"médio",children:"Médio"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Avatar_stories_ts__WEBPACK_IMPORTED_MODULE_2__.AvatarMedium,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"grande",children:"Grande"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Avatar_stories_ts__WEBPACK_IMPORTED_MODULE_2__.AvatarLarge,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"avatar-image",children:"Avatar Image"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Avatar_stories_ts__WEBPACK_IMPORTED_MODULE_2__.AvatarImage,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"documentação-interativa",children:"Documentação Interativa"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,D_Projetos_Tailwind_alfabit_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/@storybook/nextjs/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./components/Avatar/Avatar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarImage:()=>Avatar_stories_AvatarImage,AvatarLarge:()=>AvatarLarge,AvatarMedium:()=>AvatarMedium,AvatarSmall:()=>AvatarSmall,Primary:()=>Primary,default:()=>Avatar_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),UserIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/UserIcon.js"),__jsx=react.createElement,AvatarIcon=function AvatarIcon(){return __jsx(UserIcon.Z,{className:"absolute w-1/2 h-1/2"})};AvatarIcon.displayName="AvatarIcon",AvatarIcon.__docgenInfo={description:"",methods:[],displayName:"AvatarIcon"};const Avatar_AvatarIcon=AvatarIcon;var next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),AvatarImage_jsx=react.createElement,AvatarImage=function AvatarImage(_ref){var src=_ref.src,altDescription=_ref.altDescription;return AvatarImage_jsx("div",null,AvatarImage_jsx(next_image.Z,{src,alt:altDescription,className:"rounded-full",width:100,height:100}))};AvatarImage.displayName="AvatarImage",AvatarImage.__docgenInfo={description:"",methods:[],displayName:"AvatarImage",props:{src:{required:!0,tsType:{name:"string"},description:""},altDescription:{required:!0,tsType:{name:"union",raw:'string | ""',elements:[{name:"string"},{name:"literal",value:'""'}]},description:""}}};const Avatar_AvatarImage=AvatarImage;try{AvatarImage.displayName="AvatarImage",AvatarImage.__docgenInfo={description:"",displayName:"AvatarImage",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},altDescription:{defaultValue:null,description:"",name:"altDescription",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Avatar/AvatarImage.tsx#AvatarImage"]={docgenInfo:AvatarImage.__docgenInfo,name:"AvatarImage",path:"components/Avatar/AvatarImage.tsx#AvatarImage"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["size","image","descricao","className"],Avatar_jsx=react.createElement,avatarSizeMap={xs:"w-5 h-5",sm:"w-6 h-6",md:"w-8 h-8",lg:"w-9 h-9"},Avatar=function Avatar(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"xs":_ref$size,image=_ref.image,_ref$descricao=_ref.descricao,descricao=void 0===_ref$descricao?"":_ref$descricao,className=_ref.className,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),avatarSizeClass=avatarSizeMap[size],avatarComponent=image?Avatar_jsx(Avatar_AvatarImage,{src:image,altDescription:descricao}):Avatar_jsx(Avatar_AvatarIcon,null);return Avatar_jsx("div",(0,esm_extends.Z)({className:classnames_default()("relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400",avatarSizeClass,className)},rest),avatarComponent)};Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{defaultValue:{value:'"xs"',computed:!1},required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},descricao:{defaultValue:{value:'""',computed:!1},required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"string"},description:""}}};const Avatar_Avatar=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"xs"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},descricao:{defaultValue:{value:""},description:"",name:"descricao",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_AvatarSmall$paramete,_AvatarSmall$paramete2,_AvatarMedium$paramet,_AvatarMedium$paramet2,_AvatarLarge$paramete,_AvatarLarge$paramete2,_AvatarImage$paramete,_AvatarImage$paramete2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Avatar_stories={title:"Atoms/Avatar",component:Avatar_Avatar,argTypes:{className:{type:"string"},size:{type:"string"}}};var Primary={args:{}},AvatarSmall={args:{size:"sm"}},AvatarMedium={args:{size:"md"}},AvatarLarge={args:{size:"lg"}},Avatar_stories_AvatarImage={args:{size:"lg",image:"https://placehold.co/400x400.png"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),AvatarSmall.parameters=_objectSpread(_objectSpread({},AvatarSmall.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AvatarSmall$paramete=AvatarSmall.parameters)||void 0===_AvatarSmall$paramete?void 0:_AvatarSmall$paramete.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    size: "sm"\n  }\n}'},null===(_AvatarSmall$paramete2=AvatarSmall.parameters)||void 0===_AvatarSmall$paramete2||null===(_AvatarSmall$paramete2=_AvatarSmall$paramete2.docs)||void 0===_AvatarSmall$paramete2?void 0:_AvatarSmall$paramete2.source)})}),AvatarMedium.parameters=_objectSpread(_objectSpread({},AvatarMedium.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AvatarMedium$paramet=AvatarMedium.parameters)||void 0===_AvatarMedium$paramet?void 0:_AvatarMedium$paramet.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    size: "md"\n  }\n}'},null===(_AvatarMedium$paramet2=AvatarMedium.parameters)||void 0===_AvatarMedium$paramet2||null===(_AvatarMedium$paramet2=_AvatarMedium$paramet2.docs)||void 0===_AvatarMedium$paramet2?void 0:_AvatarMedium$paramet2.source)})}),AvatarLarge.parameters=_objectSpread(_objectSpread({},AvatarLarge.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AvatarLarge$paramete=AvatarLarge.parameters)||void 0===_AvatarLarge$paramete?void 0:_AvatarLarge$paramete.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    size: "lg"\n  }\n}'},null===(_AvatarLarge$paramete2=AvatarLarge.parameters)||void 0===_AvatarLarge$paramete2||null===(_AvatarLarge$paramete2=_AvatarLarge$paramete2.docs)||void 0===_AvatarLarge$paramete2?void 0:_AvatarLarge$paramete2.source)})}),Avatar_stories_AvatarImage.parameters=_objectSpread(_objectSpread({},Avatar_stories_AvatarImage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AvatarImage$paramete=Avatar_stories_AvatarImage.parameters)||void 0===_AvatarImage$paramete?void 0:_AvatarImage$paramete.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    size: "lg",\n    image: "https://placehold.co/400x400.png"\n  }\n}'},null===(_AvatarImage$paramete2=Avatar_stories_AvatarImage.parameters)||void 0===_AvatarImage$paramete2||null===(_AvatarImage$paramete2=_AvatarImage$paramete2.docs)||void 0===_AvatarImage$paramete2?void 0:_AvatarImage$paramete2.source)})})},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);