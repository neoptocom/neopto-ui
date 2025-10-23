import{j as e}from"./jsx-runtime-CDt2p4po.js";import{I as n}from"./IconButton-DcFbHVuT.js";import"./index-GiUgBvb1.js";import"./index-B8ehKEGt.js";import"./Icon-BGfffQ3t.js";const V={title:"Components/IconButton",component:n,args:{icon:"search",variant:"ghost",size:"md",disabled:!1,iconFill:0},argTypes:{variant:{control:"radio",options:["ghost","primary","secondary"]},size:{control:"radio",options:["sm","md","lg"]},iconFill:{control:"radio",options:[0,1],description:"0 = outlined, 1 = filled"},disabled:{control:"boolean"}}},t={},o={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{icon:"search",variant:"ghost"}),e.jsx(n,{icon:"search",variant:"primary"}),e.jsx(n,{icon:"search",variant:"secondary"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{icon:"search",size:"sm"}),e.jsx(n,{icon:"search",size:"md"}),e.jsx(n,{icon:"search",size:"lg"})]})},r={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{icon:"search",title:"Search"}),e.jsx(n,{icon:"filter_list",title:"Filter"}),e.jsx(n,{icon:"close",title:"Close"}),e.jsx(n,{icon:"menu",title:"Menu"}),e.jsx(n,{icon:"more_vert",title:"More options"}),e.jsx(n,{icon:"settings",title:"Settings"}),e.jsx(n,{icon:"person",title:"Profile"}),e.jsx(n,{icon:"notifications",title:"Notifications"}),e.jsx(n,{icon:"favorite",title:"Favorite"}),e.jsx(n,{icon:"share",title:"Share"})]})},a={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{icon:"favorite",iconFill:0,title:"Outlined"}),e.jsx(n,{icon:"favorite",iconFill:1,title:"Filled"}),e.jsx(n,{icon:"star",iconFill:0,title:"Outlined"}),e.jsx(n,{icon:"star",iconFill:1,title:"Filled"}),e.jsx(n,{icon:"bookmark",iconFill:0,title:"Outlined"}),e.jsx(n,{icon:"bookmark",iconFill:1,title:"Filled"})]})},c={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{icon:"search"}),e.jsx(n,{icon:"search",disabled:!0})]})},l={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:["ghost","primary","secondary"].map(i=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:"text-sm font-medium text-[var(--fg)] capitalize",children:i}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{icon:"search",variant:i,size:"sm"}),e.jsx(n,{icon:"search",variant:i,size:"md"}),e.jsx(n,{icon:"search",variant:i,size:"lg"})]})]},i))})};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,u,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <IconButton icon="search" variant="ghost" />
      <IconButton icon="search" variant="primary" />
      <IconButton icon="search" variant="secondary" />
    </div>
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,h,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <IconButton icon="search" size="sm" />
      <IconButton icon="search" size="md" />
      <IconButton icon="search" size="lg" />
    </div>
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var j,I,B;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <IconButton icon="search" title="Search" />
      <IconButton icon="filter_list" title="Filter" />
      <IconButton icon="close" title="Close" />
      <IconButton icon="menu" title="Menu" />
      <IconButton icon="more_vert" title="More options" />
      <IconButton icon="settings" title="Settings" />
      <IconButton icon="person" title="Profile" />
      <IconButton icon="notifications" title="Notifications" />
      <IconButton icon="favorite" title="Favorite" />
      <IconButton icon="share" title="Share" />
    </div>
}`,...(B=(I=r.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var F,z,N;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <IconButton icon="favorite" iconFill={0} title="Outlined" />
      <IconButton icon="favorite" iconFill={1} title="Filled" />
      <IconButton icon="star" iconFill={0} title="Outlined" />
      <IconButton icon="star" iconFill={1} title="Filled" />
      <IconButton icon="bookmark" iconFill={0} title="Outlined" />
      <IconButton icon="bookmark" iconFill={1} title="Filled" />
    </div>
}`,...(N=(z=a.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var S,y,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <IconButton icon="search" />
      <IconButton icon="search" disabled />
    </div>
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var b,k,O;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      {(["ghost", "primary", "secondary"] as const).map(variant => <div key={variant} className="flex flex-col gap-3">
          <div className="text-sm font-medium text-[var(--fg)] capitalize">
            {variant}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <IconButton icon="search" variant={variant} size="sm" />
            <IconButton icon="search" variant={variant} size="md" />
            <IconButton icon="search" variant={variant} size="lg" />
          </div>
        </div>)}
    </div>
}`,...(O=(k=l.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const E=["Playground","Variants","Sizes","CommonIcons","FilledIcons","States","AllVariantsAndSizes"];export{l as AllVariantsAndSizes,r as CommonIcons,a as FilledIcons,t as Playground,s as Sizes,c as States,o as Variants,E as __namedExportsOrder,V as default};
