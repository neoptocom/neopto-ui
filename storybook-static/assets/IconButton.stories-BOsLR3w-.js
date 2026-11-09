import{j as e}from"./jsx-runtime-CDt2p4po.js";import{I as n}from"./IconButton-DeVIR0vb.js";import"./index-GiUgBvb1.js";import"./Icon-DucDLcRo.js";const P={title:"Components/IconButton",component:n,args:{icon:"search",variant:"ghost",size:"md",disabled:!1,iconFill:0},argTypes:{variant:{control:"radio",options:["ghost","primary","secondary"]},size:{control:"radio",options:["sm","md","lg"]},iconFill:{control:"radio",options:[0,1],description:"0 = outlined, 1 = filled"},disabled:{control:"boolean"}}},i={},t={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{icon:"search",variant:"ghost"}),e.jsx(n,{icon:"search",variant:"primary"}),e.jsx(n,{icon:"search",variant:"secondary"})]})},o={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{icon:"search",size:"sm"}),e.jsx(n,{icon:"search",size:"md"}),e.jsx(n,{icon:"search",size:"lg"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{icon:"search",title:"Search"}),e.jsx(n,{icon:"filter_list",title:"Filter"}),e.jsx(n,{icon:"close",title:"Close"}),e.jsx(n,{icon:"menu",title:"Menu"}),e.jsx(n,{icon:"more_vert",title:"More options"}),e.jsx(n,{icon:"settings",title:"Settings"}),e.jsx(n,{icon:"person",title:"Profile"}),e.jsx(n,{icon:"notifications",title:"Notifications"}),e.jsx(n,{icon:"favorite",title:"Favorite"}),e.jsx(n,{icon:"share",title:"Share"})]})},a={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{icon:"favorite",iconFill:0,title:"Outlined"}),e.jsx(n,{icon:"favorite",iconFill:1,title:"Filled"}),e.jsx(n,{icon:"star",iconFill:0,title:"Outlined"}),e.jsx(n,{icon:"star",iconFill:1,title:"Filled"}),e.jsx(n,{icon:"bookmark",iconFill:0,title:"Outlined"}),e.jsx(n,{icon:"bookmark",iconFill:1,title:"Filled"})]})},c={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{icon:"search"}),e.jsx(n,{icon:"search",disabled:!0})]})},l={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:["ghost","primary","secondary"].map(r=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:"text-sm font-medium text-[var(--fg)] capitalize",children:r}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{icon:"search",variant:r,size:"sm"}),e.jsx(n,{icon:"search",variant:r,size:"md"}),e.jsx(n,{icon:"search",variant:r,size:"lg"})]})]},r))})};var d,m,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,u,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">\r
      <IconButton icon="search" variant="ghost" />\r
      <IconButton icon="search" variant="primary" />\r
      <IconButton icon="search" variant="secondary" />\r
    </div>
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,h,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">\r
      <IconButton icon="search" size="sm" />\r
      <IconButton icon="search" size="md" />\r
      <IconButton icon="search" size="lg" />\r
    </div>
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var j,I,B;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">\r
      <IconButton icon="search" title="Search" />\r
      <IconButton icon="filter_list" title="Filter" />\r
      <IconButton icon="close" title="Close" />\r
      <IconButton icon="menu" title="Menu" />\r
      <IconButton icon="more_vert" title="More options" />\r
      <IconButton icon="settings" title="Settings" />\r
      <IconButton icon="person" title="Profile" />\r
      <IconButton icon="notifications" title="Notifications" />\r
      <IconButton icon="favorite" title="Favorite" />\r
      <IconButton icon="share" title="Share" />\r
    </div>
}`,...(B=(I=s.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var F,z,N;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">\r
      <IconButton icon="favorite" iconFill={0} title="Outlined" />\r
      <IconButton icon="favorite" iconFill={1} title="Filled" />\r
      <IconButton icon="star" iconFill={0} title="Outlined" />\r
      <IconButton icon="star" iconFill={1} title="Filled" />\r
      <IconButton icon="bookmark" iconFill={0} title="Outlined" />\r
      <IconButton icon="bookmark" iconFill={1} title="Filled" />\r
    </div>
}`,...(N=(z=a.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var S,y,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">\r
      <IconButton icon="search" />\r
      <IconButton icon="search" disabled />\r
    </div>
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var b,k,O;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">\r
      {(["ghost", "primary", "secondary"] as const).map(variant => <div key={variant} className="flex flex-col gap-3">\r
          <div className="text-sm font-medium text-[var(--fg)] capitalize">\r
            {variant}\r
          </div>\r
          <div className="flex flex-wrap items-center gap-4">\r
            <IconButton icon="search" variant={variant} size="sm" />\r
            <IconButton icon="search" variant={variant} size="md" />\r
            <IconButton icon="search" variant={variant} size="lg" />\r
          </div>\r
        </div>)}\r
    </div>
}`,...(O=(k=l.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const V=["Playground","Variants","Sizes","CommonIcons","FilledIcons","States","AllVariantsAndSizes"];export{l as AllVariantsAndSizes,s as CommonIcons,a as FilledIcons,i as Playground,o as Sizes,c as States,t as Variants,V as __namedExportsOrder,P as default};
