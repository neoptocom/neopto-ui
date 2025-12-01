import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as V}from"./index-GiUgBvb1.js";const a=V.forwardRef(({className:d,disabled:o,variant:S="default",...k},D)=>{const l=S==="inline";return e.jsx("textarea",{ref:D,disabled:o,className:["w-full bg-transparent outline-none transition-colors",l?"":"min-h-[96px] px-4 py-3 rounded-3xl","font-['Poppins'] text-sm placeholder:text-[var(--muted-fg)]",!l&&"border",o?"text-[#3F424F] cursor-not-allowed"+(l?"":" border-[#3F424F]"):["text-[var(--muted-fg)]",l?"":"border-[var(--muted-fg)]",l?"":"hover:border-[var(--border)]","focus:text-[var(--fg)]",l?"":"focus:border-[var(--color-brand)]"].join(" "),d].join(" "),...k})});a.displayName="Textarea";a.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "inline"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"inline"'}]},description:"Textarea visual variant",defaultValue:{value:'"default"',computed:!1}}}};try{a.displayName="Textarea",a.__docgenInfo={description:"",displayName:"Textarea",props:{variant:{defaultValue:{value:"default"},description:"Textarea visual variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"default"'}]}}}}}catch{}const z={title:"Components/Textarea",component:a,parameters:{layout:"padded"}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(a,{placeholder:"Enter your message..."}),e.jsx(a,{placeholder:"With default value...",defaultValue:"This is some default text that spans multiple lines and shows how the textarea handles content."})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(a,{variant:"inline",placeholder:"Inline textarea"}),e.jsx(a,{variant:"inline",placeholder:"Inline with value",defaultValue:"Inline textarea with some content"}),e.jsx(a,{variant:"inline",placeholder:"Disabled inline",disabled:!0})]})},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Default"}),e.jsx(a,{placeholder:"Type something..."})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"With Value"}),e.jsx(a,{defaultValue:"This textarea has some content already filled in."})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Disabled"}),e.jsx(a,{placeholder:"Disabled textarea",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Disabled with Value"}),e.jsx(a,{defaultValue:"Disabled with content",disabled:!0})]})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Small (3 rows)"}),e.jsx(a,{placeholder:"Small textarea...",rows:3})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Medium (5 rows)"}),e.jsx(a,{placeholder:"Medium textarea...",rows:5})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Large (8 rows)"}),e.jsx(a,{placeholder:"Large textarea...",rows:8})]})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(a,{placeholder:"Custom height...",style:{minHeight:"200px"}}),e.jsx(a,{placeholder:"Fixed height (no resize)...",className:"resize-none",rows:4})]})};var c,m,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Textarea placeholder="Enter your message..." />
      <Textarea placeholder="With default value..." defaultValue="This is some default text that spans multiple lines and shows how the textarea handles content." />
    </div>
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,p,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Textarea variant="inline" placeholder="Inline textarea" />
      <Textarea variant="inline" placeholder="Inline with value" defaultValue="Inline textarea with some content" />
      <Textarea variant="inline" placeholder="Disabled inline" disabled />
    </div>
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,b,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <div>
        <label className="block text-sm font-medium mb-2">Default</label>
        <Textarea placeholder="Type something..." />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">With Value</label>
        <Textarea defaultValue="This textarea has some content already filled in." />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Disabled</label>
        <Textarea placeholder="Disabled textarea" disabled />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Disabled with Value</label>
        <Textarea defaultValue="Disabled with content" disabled />
      </div>
    </div>
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,g,j;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <div>
        <label className="block text-sm font-medium mb-2">Small (3 rows)</label>
        <Textarea placeholder="Small textarea..." rows={3} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Medium (5 rows)</label>
        <Textarea placeholder="Medium textarea..." rows={5} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Large (8 rows)</label>
        <Textarea placeholder="Large textarea..." rows={8} />
      </div>
    </div>
}`,...(j=(g=n.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var N,T,y;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Textarea placeholder="Custom height..." style={{
      minHeight: "200px"
    }} />
      <Textarea placeholder="Fixed height (no resize)..." className="resize-none" rows={4} />
    </div>
}`,...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const F=["Default","Inline","States","Sizes","WithCustomStyling"];export{t as Default,s as Inline,n as Sizes,r as States,i as WithCustomStyling,F as __namedExportsOrder,z as default};
