import{j as e}from"./jsx-runtime-CDt2p4po.js";import{I as h}from"./Icon-DucDLcRo.js";import"./index-GiUgBvb1.js";function A(l){if(!l)return"";const r=["white","gray-50","gray-100","slate-50","slate-100","zinc-50","zinc-100","neutral-50","neutral-100","stone-50","stone-100"],u=["black","gray-900","gray-950","slate-900","slate-950","zinc-900","zinc-950","neutral-900","neutral-950","stone-900","stone-950"];for(const t of r)if(l.includes(t))return"text-gray-900";for(const t of u)if(l.includes(t))return"text-white";const s=l.match(/-(\d{2,3})/);if(s){const t=parseInt(s[1],10);if(t>=100&&t<=400)return"text-gray-900";if(t>=500)return"text-white"}return"text-white"}function a({variant:l="success",icon:r,className:u="",label:s,textColor:t,bgClassName:b,title:P,style:V,onDelete:m,...W}){const F="inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap overflow-hidden rounded-full h-6 px-2 text-xs font-semibold",M={warning:"bg-[var(--warning)] text-white",success:"bg-[var(--success)] text-white",error:"bg-[var(--destructive)] text-white",light:"bg-[var(--muted)] text-[var(--fg)]",dark:"bg-[var(--surface)] text-[var(--fg)]"},O=!!t,p=!!b,z=p||O?"":M[l],H=p&&!t?A(b):"",R={...V,...t&&{color:t}};return e.jsxs("div",{className:[F,z,b,H,u].join(" "),style:R,title:P,...W,children:[r?e.jsx(h,{name:r,size:"sm",className:"mr-0.5 flex-shrink-0"}):null,e.jsx("span",{className:"truncate",children:s}),m?e.jsx("button",{type:"button",onClick:m,className:"ml-1 flex h-4 w-4 items-center justify-center rounded-full transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-black/30 flex-shrink-0","aria-label":"Remove",children:e.jsx(h,{name:"close",size:"sm"})}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{variant:{required:!1,tsType:{name:"union",raw:'"warning" | "success" | "error" | "light" | "dark"',elements:[{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"success"',computed:!1}},icon:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:"Custom text color (overrides variant)"},bgClassName:{required:!1,tsType:{name:"string"},description:"Tailwind class for background color (overrides variant)"},title:{required:!1,tsType:{name:"string"},description:"Title attribute for tooltip"},onDelete:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Optional handler to render a delete affordance"},className:{defaultValue:{value:'""',computed:!1},required:!1}}};try{a.displayName="Chip",a.__docgenInfo={description:"",displayName:"Chip",props:{variant:{defaultValue:{value:"success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"error"'},{value:'"light"'},{value:'"dark"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"Custom text color (overrides variant)",name:"textColor",required:!1,type:{name:"string"}},bgClassName:{defaultValue:null,description:"Tailwind class for background color (overrides variant)",name:"bgClassName",required:!1,type:{name:"string"}},onDelete:{defaultValue:null,description:"Optional handler to render a delete affordance",name:"onDelete",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}const K={title:"Components/Chip",component:a,args:{label:"Status",variant:"success"},argTypes:{variant:{control:"radio",options:["success","warning","error","light","dark"]}}},n={},i={args:{icon:"check",label:"Completed",variant:"success"}},o={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(a,{variant:"success",icon:"check",label:"Success"}),e.jsx(a,{variant:"warning",icon:"error_outline",label:"Warning"}),e.jsx(a,{variant:"error",icon:"error",label:"Error"}),e.jsx(a,{variant:"light",icon:"help_outline",label:"Info"}),e.jsx(a,{variant:"dark",icon:"schedule",label:"Scheduled"})]})},c={args:{label:"Filter: Active",variant:"light",onDelete:()=>console.log("delete")},render:l=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(a,{...l,onDelete:l.onDelete}),e.jsx(a,{label:"Team: Core",onDelete:l.onDelete,variant:"dark"}),e.jsx(a,{label:"Status: Pending",onDelete:l.onDelete,variant:"warning"})]})},g={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Dark backgrounds (auto white text):"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(a,{bgClassName:"bg-blue-500",label:"Blue 500",title:"Custom blue background"}),e.jsx(a,{bgClassName:"bg-purple-500",label:"Purple 500",title:"Custom purple background"}),e.jsx(a,{bgClassName:"bg-pink-500",label:"Pink 500",title:"Custom pink background"}),e.jsx(a,{bgClassName:"bg-indigo-500",label:"Indigo 500",title:"Custom indigo background"}),e.jsx(a,{bgClassName:"bg-teal-500",label:"Teal 500",title:"Custom teal background"}),e.jsx(a,{bgClassName:"bg-orange-500",label:"Orange 500",title:"Custom orange background"}),e.jsx(a,{bgClassName:"bg-cyan-500",label:"Cyan 500",title:"Custom cyan background"}),e.jsx(a,{bgClassName:"bg-emerald-500",label:"Emerald 500",title:"Custom emerald background"}),e.jsx(a,{bgClassName:"bg-red-600",label:"Red 600",title:"Custom red background"}),e.jsx(a,{bgClassName:"bg-gray-900",label:"Gray 900",title:"Custom gray background"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600 mb-2",children:"Light backgrounds (auto dark text):"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(a,{bgClassName:"bg-blue-200",label:"Blue 200",title:"Light blue background"}),e.jsx(a,{bgClassName:"bg-purple-200",label:"Purple 200",title:"Light purple background"}),e.jsx(a,{bgClassName:"bg-pink-200",label:"Pink 200",title:"Light pink background"}),e.jsx(a,{bgClassName:"bg-indigo-200",label:"Indigo 200",title:"Light indigo background"}),e.jsx(a,{bgClassName:"bg-teal-200",label:"Teal 200",title:"Light teal background"}),e.jsx(a,{bgClassName:"bg-orange-200",label:"Orange 200",title:"Light orange background"}),e.jsx(a,{bgClassName:"bg-cyan-200",label:"Cyan 200",title:"Light cyan background"}),e.jsx(a,{bgClassName:"bg-emerald-200",label:"Emerald 200",title:"Light emerald background"}),e.jsx(a,{bgClassName:"bg-yellow-300",label:"Yellow 300",title:"Light yellow background"}),e.jsx(a,{bgClassName:"bg-white",label:"White",title:"White background"})]})]})]})},d={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(a,{bgClassName:"bg-blue-500",icon:"check",label:"Completed",title:"Task completed"}),e.jsx(a,{bgClassName:"bg-purple-500",icon:"star",label:"Featured",title:"Featured item"}),e.jsx(a,{bgClassName:"bg-pink-500",icon:"favorite",label:"Favorite",title:"Marked as favorite"}),e.jsx(a,{bgClassName:"bg-indigo-500",icon:"schedule",label:"Scheduled",title:"Scheduled for later"})]})};var C,x,v;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,k,N;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    icon: "check",
    label: "Completed",
    variant: "success"
  }
}`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var y,j,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Chip variant="success" icon="check" label="Success" />
      <Chip variant="warning" icon="error_outline" label="Warning" />
      <Chip variant="error" icon="error" label="Error" />
      <Chip variant="light" icon="help_outline" label="Info" />
      <Chip variant="dark" icon="schedule" label="Scheduled" />
    </div>
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var T,L,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Filter: Active",
    variant: "light",
    onDelete: () => console.log("delete")
  },
  render: args => <div className="flex flex-wrap items-center gap-3">
      <Chip {...args} onDelete={args.onDelete} />
      <Chip label="Team: Core" onDelete={args.onDelete} variant="dark" />
      <Chip label="Status: Pending" onDelete={args.onDelete} variant="warning" />
    </div>
}`,...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var S,_,I;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-600 mb-2">Dark backgrounds (auto white text):</p>
        <div className="flex flex-wrap items-center gap-3">
          <Chip bgClassName="bg-blue-500" label="Blue 500" title="Custom blue background" />
          <Chip bgClassName="bg-purple-500" label="Purple 500" title="Custom purple background" />
          <Chip bgClassName="bg-pink-500" label="Pink 500" title="Custom pink background" />
          <Chip bgClassName="bg-indigo-500" label="Indigo 500" title="Custom indigo background" />
          <Chip bgClassName="bg-teal-500" label="Teal 500" title="Custom teal background" />
          <Chip bgClassName="bg-orange-500" label="Orange 500" title="Custom orange background" />
          <Chip bgClassName="bg-cyan-500" label="Cyan 500" title="Custom cyan background" />
          <Chip bgClassName="bg-emerald-500" label="Emerald 500" title="Custom emerald background" />
          <Chip bgClassName="bg-red-600" label="Red 600" title="Custom red background" />
          <Chip bgClassName="bg-gray-900" label="Gray 900" title="Custom gray background" />
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Light backgrounds (auto dark text):</p>
        <div className="flex flex-wrap items-center gap-3">
          <Chip bgClassName="bg-blue-200" label="Blue 200" title="Light blue background" />
          <Chip bgClassName="bg-purple-200" label="Purple 200" title="Light purple background" />
          <Chip bgClassName="bg-pink-200" label="Pink 200" title="Light pink background" />
          <Chip bgClassName="bg-indigo-200" label="Indigo 200" title="Light indigo background" />
          <Chip bgClassName="bg-teal-200" label="Teal 200" title="Light teal background" />
          <Chip bgClassName="bg-orange-200" label="Orange 200" title="Light orange background" />
          <Chip bgClassName="bg-cyan-200" label="Cyan 200" title="Light cyan background" />
          <Chip bgClassName="bg-emerald-200" label="Emerald 200" title="Light emerald background" />
          <Chip bgClassName="bg-yellow-300" label="Yellow 300" title="Light yellow background" />
          <Chip bgClassName="bg-white" label="White" title="White background" />
        </div>
      </div>
    </div>
}`,...(I=(_=g.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var q,E,B;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Chip bgClassName="bg-blue-500" icon="check" label="Completed" title="Task completed" />
      <Chip bgClassName="bg-purple-500" icon="star" label="Featured" title="Featured item" />
      <Chip bgClassName="bg-pink-500" icon="favorite" label="Favorite" title="Marked as favorite" />
      <Chip bgClassName="bg-indigo-500" icon="schedule" label="Scheduled" title="Scheduled for later" />
    </div>
}`,...(B=(E=d.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const Q=["Playground","WithIcon","Variants","Deletable","CustomBackgroundColor","CustomBackgroundWithIcon"];export{g as CustomBackgroundColor,d as CustomBackgroundWithIcon,c as Deletable,n as Playground,o as Variants,i as WithIcon,Q as __namedExportsOrder,K as default};
