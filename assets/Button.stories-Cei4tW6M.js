import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as R}from"./index-GiUgBvb1.js";import{c as P}from"./index-B8ehKEGt.js";import{I as l}from"./Icon-BGfffQ3t.js";import{T as a}from"./Typo-BNAdv5Gi.js";const _=P({base:"cursor-pointer inline-flex items-center justify-center gap-2 rounded-[var(--radius-2xl)] px-[18px] h-12 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-50",variants:{variant:{primary:"bg-cyan-500 text-white hover:bg-cyan-400 active:bg-cyan-600 disabled:bg-neutral-400",secondary:"border border-cyan-500 text-cyan-500 bg-transparent hover:bg-cyan-50 active:bg-cyan-100 disabled:border-neutral-400 disabled:text-neutral-400",ghost:"bg-transparent text-cyan-500 hover:bg-cyan-50 active:bg-cyan-100 disabled:text-neutral-400"},size:{sm:"h-9 px-3",md:"h-12 px-[18px]",lg:"h-14 px-6"},fullWidth:{true:"w-full"}},defaultVariants:{variant:"primary",size:"md"}}),t=R.forwardRef(({variant:S,size:w,fullWidth:N,className:z,children:I,icon:E,...W},D)=>e.jsx("button",{ref:D,className:_({variant:S,size:w,fullWidth:N,className:z}),...W,children:I}));t.displayName="Button";t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon component to display instead of text"}}};const M={title:"Components/Button",component:t,args:{children:"Button",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{control:"radio",options:["primary","secondary","ghost"]},size:{control:"radio",options:["sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},n={},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(t,{variant:"primary",children:e.jsx(a,{variant:"title-sm",bold:"semibold",children:"Primary"})}),e.jsx(t,{variant:"secondary",children:e.jsx(a,{variant:"title-sm",bold:"semibold",children:"Secondary"})}),e.jsx(t,{variant:"ghost",children:e.jsx(a,{variant:"title-sm",bold:"semibold",children:"Ghost"})})]})},r={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(t,{size:"sm",children:e.jsx(a,{variant:"title-sm",bold:"semibold",children:"Small"})}),e.jsx(t,{size:"md",children:e.jsx(a,{variant:"title-sm",bold:"semibold",children:"Medium"})}),e.jsx(t,{size:"lg",children:e.jsx(a,{variant:"title-sm",bold:"semibold",children:"Large"})})]})},o={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(t,{children:e.jsx(a,{variant:"title-sm",bold:"semibold",children:"Default"})}),e.jsx(t,{disabled:!0,children:e.jsx(a,{variant:"title-sm",bold:"semibold",children:"Disabled"})}),e.jsx(t,{fullWidth:!0,children:e.jsx(a,{variant:"title-sm",bold:"semibold",children:"Full Width"})})]})},i={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsxs(t,{children:[e.jsx(l,{name:"add"}),e.jsx(a,{variant:"title-sm",bold:"semibold",children:"Add Item"})]}),e.jsxs(t,{variant:"secondary",children:[e.jsx(l,{name:"delete"}),e.jsx(a,{variant:"title-sm",bold:"semibold",children:"Delete"})]}),e.jsxs(t,{variant:"ghost",children:[e.jsx(l,{name:"settings"}),e.jsx(a,{variant:"title-sm",bold:"semibold",children:"Settings"})]})]})};var d,c,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,b,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">
        <Typo variant="title-sm" bold="semibold">Primary</Typo>
      </Button>
      <Button variant="secondary">
        <Typo variant="title-sm" bold="semibold">Secondary</Typo>
      </Button>
      <Button variant="ghost">
        <Typo variant="title-sm" bold="semibold">Ghost</Typo>
      </Button>
    </div>
}`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var x,y,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">
        <Typo variant="title-sm" bold="semibold">Small</Typo>
      </Button>
      <Button size="md">
        <Typo variant="title-sm" bold="semibold">Medium</Typo>
      </Button>
      <Button size="lg">
        <Typo variant="title-sm" bold="semibold">Large</Typo>
      </Button>
    </div>
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,g,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button>
        <Typo variant="title-sm" bold="semibold">Default</Typo>
      </Button>
      <Button disabled>
        <Typo variant="title-sm" bold="semibold">Disabled</Typo>
      </Button>
      <Button fullWidth>
        <Typo variant="title-sm" bold="semibold">Full Width</Typo>
      </Button>
    </div>
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var j,B,T;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button>
        <Icon name="add" />
        <Typo variant="title-sm" bold="semibold">Add Item</Typo>
      </Button>
      <Button variant="secondary">
        <Icon name="delete" />
        <Typo variant="title-sm" bold="semibold">Delete</Typo>
      </Button>
      <Button variant="ghost">
        <Icon name="settings" />
        <Typo variant="title-sm" bold="semibold">Settings</Typo>
      </Button>
    </div>
}`,...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const q=["Playground","Variants","Sizes","States","WithIcons"];export{n as Playground,r as Sizes,o as States,s as Variants,i as WithIcons,q as __namedExportsOrder,M as default};
