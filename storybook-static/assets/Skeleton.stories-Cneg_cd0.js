import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const N={none:"rounded-none",sm:"rounded",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl",full:"rounded-full"};function a({className:n="",rounded:v="md",...x}){return e.jsx("div",{className:["animate-pulse bg-[var(--muted)]",N[v],n].join(" "),...x})}a.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{rounded:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg" | "xl" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};try{a.displayName="Skeleton",a.__docgenInfo={description:"",displayName:"Skeleton",props:{rounded:{defaultValue:{value:"md"},description:"",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}}}}}catch{}const g={title:"Components/Skeleton",component:a},l={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{className:"h-4 w-48"}),e.jsx(a,{className:"h-4 w-72"}),e.jsx(a,{className:"h-24 w-full rounded-lg"})]})},s={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{rounded:"full",className:"h-10 w-10"}),e.jsx(a,{rounded:"full",className:"h-12 w-12"}),e.jsx(a,{rounded:"full",className:"h-16 w-16"})]})},r={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{rounded:"full",className:"h-12 w-12"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(a,{className:"h-4 w-32"}),e.jsx(a,{className:"h-3 w-48"})]})]})};var d,o,t;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">\r
      <Skeleton className="h-4 w-48" />\r
      <Skeleton className="h-4 w-72" />\r
      <Skeleton className="h-24 w-full rounded-lg" />\r
    </div>
}`,...(t=(o=l.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var m,u,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Skeleton rounded="full" className="h-10 w-10" />\r
      <Skeleton rounded="full" className="h-12 w-12" />\r
      <Skeleton rounded="full" className="h-16 w-16" />\r
    </div>
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var i,p,f;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Skeleton rounded="full" className="h-12 w-12" />\r
      <div className="flex-1 space-y-2">\r
        <Skeleton className="h-4 w-32" />\r
        <Skeleton className="h-3 w-48" />\r
      </div>\r
    </div>
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const j=["Blocks","FullyRounded","AvatarWithText"];export{r as AvatarWithText,l as Blocks,s as FullyRounded,j as __namedExportsOrder,g as default};
