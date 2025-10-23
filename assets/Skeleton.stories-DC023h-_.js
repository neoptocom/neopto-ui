import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const v={none:"rounded-none",sm:"rounded-[var(--radius-sm)]",md:"rounded-[var(--radius-md)]",lg:"rounded-[var(--radius-lg)]",xl:"rounded-[var(--radius-xl)]",full:"rounded-full"};function a({className:f="",rounded:x="md",...N}){return e.jsx("div",{className:["animate-pulse bg-[var(--muted)]",v[x],f].join(" "),...N})}a.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{rounded:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg" | "xl" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const j={title:"Components/Skeleton",component:a},s={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{className:"h-4 w-48"}),e.jsx(a,{className:"h-4 w-72"}),e.jsx(a,{className:"h-24 w-full rounded-[--radius-lg]"})]})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{rounded:"full",className:"h-10 w-10"}),e.jsx(a,{rounded:"full",className:"h-12 w-12"}),e.jsx(a,{rounded:"full",className:"h-16 w-16"})]})},r={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{rounded:"full",className:"h-12 w-12"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(a,{className:"h-4 w-32"}),e.jsx(a,{className:"h-3 w-48"})]})]})};var n,d,o;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-72" />
      <Skeleton className="h-24 w-full rounded-[--radius-lg]" />
    </div>
}`,...(o=(d=s.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var m,t,u;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Skeleton rounded="full" className="h-10 w-10" />
      <Skeleton rounded="full" className="h-12 w-12" />
      <Skeleton rounded="full" className="h-16 w-16" />
    </div>
}`,...(u=(t=l.parameters)==null?void 0:t.docs)==null?void 0:u.source}}};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Skeleton rounded="full" className="h-12 w-12" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-48" />
      </div>
    </div>
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const g=["Blocks","FullyRounded","AvatarWithText"];export{r as AvatarWithText,s as Blocks,l as FullyRounded,g as __namedExportsOrder,j as default};
