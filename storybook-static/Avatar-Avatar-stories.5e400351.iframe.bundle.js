(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[454,87],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@storybook/nextjs/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./components/Avatar/Avatar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarImage:()=>Avatar_stories_AvatarImage,AvatarLarge:()=>AvatarLarge,AvatarMedium:()=>AvatarMedium,AvatarSmall:()=>AvatarSmall,Primary:()=>Primary,default:()=>Avatar_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),UserIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/UserIcon.js"),__jsx=react.createElement,AvatarIcon=function AvatarIcon(){return __jsx(UserIcon.Z,{className:"absolute w-1/2 h-1/2"})};AvatarIcon.displayName="AvatarIcon",AvatarIcon.__docgenInfo={description:"",methods:[],displayName:"AvatarIcon"};const Avatar_AvatarIcon=AvatarIcon;var next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),AvatarImage_jsx=react.createElement,AvatarImage=function AvatarImage(_ref){var src=_ref.src,altDescription=_ref.altDescription;return AvatarImage_jsx("div",null,AvatarImage_jsx(next_image.Z,{src,alt:altDescription,className:"rounded-full",width:100,height:100}))};AvatarImage.displayName="AvatarImage",AvatarImage.__docgenInfo={description:"",methods:[],displayName:"AvatarImage",props:{src:{required:!0,tsType:{name:"string"},description:""},altDescription:{required:!0,tsType:{name:"union",raw:'string | ""',elements:[{name:"string"},{name:"literal",value:'""'}]},description:""}}};const Avatar_AvatarImage=AvatarImage;try{AvatarImage.displayName="AvatarImage",AvatarImage.__docgenInfo={description:"",displayName:"AvatarImage",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},altDescription:{defaultValue:null,description:"",name:"altDescription",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Avatar/AvatarImage.tsx#AvatarImage"]={docgenInfo:AvatarImage.__docgenInfo,name:"AvatarImage",path:"components/Avatar/AvatarImage.tsx#AvatarImage"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["size","image","descricao","className"],Avatar_jsx=react.createElement,avatarSizeMap={xs:"w-5 h-5",sm:"w-6 h-6",md:"w-8 h-8",lg:"w-9 h-9"},Avatar=function Avatar(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"xs":_ref$size,image=_ref.image,_ref$descricao=_ref.descricao,descricao=void 0===_ref$descricao?"":_ref$descricao,className=_ref.className,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),avatarSizeClass=avatarSizeMap[size],avatarComponent=image?Avatar_jsx(Avatar_AvatarImage,{src:image,altDescription:descricao}):Avatar_jsx(Avatar_AvatarIcon,null);return Avatar_jsx("div",(0,esm_extends.Z)({className:classnames_default()("relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400",avatarSizeClass,className)},rest),avatarComponent)};Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{defaultValue:{value:'"xs"',computed:!1},required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},descricao:{defaultValue:{value:'""',computed:!1},required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"string"},description:""}}};const Avatar_Avatar=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"xs"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},descricao:{defaultValue:{value:""},description:"",name:"descricao",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_AvatarSmall$paramete,_AvatarSmall$paramete2,_AvatarMedium$paramet,_AvatarMedium$paramet2,_AvatarLarge$paramete,_AvatarLarge$paramete2,_AvatarImage$paramete,_AvatarImage$paramete2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Avatar_stories={title:"Atoms/Avatar",component:Avatar_Avatar,argTypes:{className:{type:"string"},size:{type:"string"}}};var Primary={args:{}},AvatarSmall={args:{size:"sm"}},AvatarMedium={args:{size:"md"}},AvatarLarge={args:{size:"lg"}},Avatar_stories_AvatarImage={args:{size:"lg",image:"https://placehold.co/400x400.png"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),AvatarSmall.parameters=_objectSpread(_objectSpread({},AvatarSmall.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AvatarSmall$paramete=AvatarSmall.parameters)||void 0===_AvatarSmall$paramete?void 0:_AvatarSmall$paramete.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    size: "sm"\n  }\n}'},null===(_AvatarSmall$paramete2=AvatarSmall.parameters)||void 0===_AvatarSmall$paramete2||null===(_AvatarSmall$paramete2=_AvatarSmall$paramete2.docs)||void 0===_AvatarSmall$paramete2?void 0:_AvatarSmall$paramete2.source)})}),AvatarMedium.parameters=_objectSpread(_objectSpread({},AvatarMedium.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AvatarMedium$paramet=AvatarMedium.parameters)||void 0===_AvatarMedium$paramet?void 0:_AvatarMedium$paramet.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    size: "md"\n  }\n}'},null===(_AvatarMedium$paramet2=AvatarMedium.parameters)||void 0===_AvatarMedium$paramet2||null===(_AvatarMedium$paramet2=_AvatarMedium$paramet2.docs)||void 0===_AvatarMedium$paramet2?void 0:_AvatarMedium$paramet2.source)})}),AvatarLarge.parameters=_objectSpread(_objectSpread({},AvatarLarge.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AvatarLarge$paramete=AvatarLarge.parameters)||void 0===_AvatarLarge$paramete?void 0:_AvatarLarge$paramete.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    size: "lg"\n  }\n}'},null===(_AvatarLarge$paramete2=AvatarLarge.parameters)||void 0===_AvatarLarge$paramete2||null===(_AvatarLarge$paramete2=_AvatarLarge$paramete2.docs)||void 0===_AvatarLarge$paramete2?void 0:_AvatarLarge$paramete2.source)})}),Avatar_stories_AvatarImage.parameters=_objectSpread(_objectSpread({},Avatar_stories_AvatarImage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AvatarImage$paramete=Avatar_stories_AvatarImage.parameters)||void 0===_AvatarImage$paramete?void 0:_AvatarImage$paramete.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    size: "lg",\n    image: "https://placehold.co/400x400.png"\n  }\n}'},null===(_AvatarImage$paramete2=Avatar_stories_AvatarImage.parameters)||void 0===_AvatarImage$paramete2||null===(_AvatarImage$paramete2=_AvatarImage$paramete2.docs)||void 0===_AvatarImage$paramete2?void 0:_AvatarImage$paramete2.source)})})}}]);