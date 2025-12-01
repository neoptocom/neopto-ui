import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{T as i}from"./Typo-B4y6jpMu.js";const P=""+new URL("agent-neopto-dark-CMJpBLrE.svg",import.meta.url).href,v=({colors:a,delay:n=0})=>{const t=s.useMemo(()=>Math.random().toString(36).substr(2,9),[]);return e.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",className:"h-full transition-all duration-500 ease-in-out w-full",children:[e.jsx("style",{children:`
          @keyframes colorCycle-${t} {
            0% { fill: ${a[0]}; }
            25% { fill: ${a[1]}; }
            50% { fill: ${a[2]}; }
            75% { fill: ${a[3]}; }
            100% { fill: ${a[0]}; }
          }
          @keyframes fadeIn-${t} {
            0% { opacity: 0; }
            100% { opacity: 1; } 
          }
          .animated-circle-${t} {
            animation: 
              fadeIn-${t} 1.5s ease-in-out 1.5s forwards,
              colorCycle-${t} 4s infinite linear ${n}s;
            opacity: 0;
            transition: all 0.5s ease-in-out;
          }
        `}),e.jsx("g",{style:{mixBlendMode:"overlay"},filter:"url(#filter0_f_241_319)",children:e.jsx("ellipse",{cx:"32",rx:"20",cy:"32",ry:"20",className:`animated-circle-${t}`})}),e.jsx("defs",{children:e.jsxs("filter",{id:"filter0_f_241_319",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[e.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),e.jsx("feGaussianBlur",{stdDeviation:"4",result:"effect1_foregroundBlur_241_319"})]})})]})};v.__docgenInfo={description:"",methods:[],displayName:"AnimatedBgCircle",props:{colors:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},stretch:{required:!1,tsType:{name:"boolean"},description:""}}};try{v.displayName="AnimatedBgCircle",v.__docgenInfo={description:"",displayName:"AnimatedBgCircle",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"string[]"}},delay:{defaultValue:{value:0},description:"",name:"delay",required:!1,type:{name:"number"}},stretch:{defaultValue:null,description:"",name:"stretch",required:!1,type:{name:"boolean"}}}}}catch{}const x=({colors:a,delay:n=0})=>{const t=s.useMemo(()=>Math.random().toString(36).substr(2,9),[]);return e.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",className:"h-full transition-all duration-500 ease-in-out w-full",preserveAspectRatio:"none",children:[e.jsx("style",{children:`
          @keyframes colorCycle-${t} {
            0% { fill: ${a[0]}; }
            25% { fill: ${a[1]}; }
            50% { fill: ${a[2]}; }
            75% { fill: ${a[3]}; }
            100% { fill: ${a[0]}; }
          }
          @keyframes fadeIn-${t} {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animated-circle-${t} {
            animation: 
              fadeIn-${t} 1.5s ease-in-out 1.5s forwards,
              colorCycle-${t} 4s infinite linear ${n}s;
            opacity: 0;
            transition: all 0.5s ease-in-out;
          }
        `}),e.jsx("g",{style:{mixBlendMode:"overlay"},filter:"url(#filter0_f_241_319)",children:e.jsx("rect",{x:"10",y:"12",width:"44",height:"40",className:`animated-circle-${t}`})}),e.jsx("defs",{children:e.jsxs("filter",{id:"filter0_f_241_319",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[e.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),e.jsx("feGaussianBlur",{stdDeviation:"4",result:"effect1_foregroundBlur_241_319"})]})})]})};x.__docgenInfo={description:"",methods:[],displayName:"AnimatedBgRectangle",props:{colors:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};try{x.displayName="AnimatedBgRectangle",x.__docgenInfo={description:"",displayName:"AnimatedBgRectangle",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"string[]"}},delay:{defaultValue:{value:0},description:"",name:"delay",required:!1,type:{name:"number"}}}}}catch{}const r=({onOpenChat:a,hasNotification:n=!1,notificationMessage:t="",logoSrc:l,logoAlt:c="Agent",animationColors:N=["#7DADB9","#3864F5","#55468D","#479A8D"],disabled:d=!1})=>{const[G,C]=s.useState(!1),[u,j]=s.useState(!1),[w,z]=s.useState(!1);s.useEffect(()=>{const o=setTimeout(()=>z(!0),250);return()=>clearTimeout(o)},[]),s.useEffect(()=>{if(n){const o=setTimeout(()=>C(!0),500);return j(!0),()=>clearTimeout(o)}else{const o=setTimeout(()=>C(!1),250),f=setTimeout(()=>j(!1),350);return()=>{clearTimeout(o),clearTimeout(f)}}},[n]);const L=[{delay:0,style:"left-0 top-0"},{delay:.75,style:"right-0 top-0"},{delay:1,style:"bottom-0 left-0"},{delay:.25,style:"bottom-0 right-0"}],U=[{delay:0,style:"left-0 top-0"},{delay:.75,style:"right-0 top-0"},{delay:1,style:"bottom-0 left-0"},{delay:.25,style:"bottom-0 right-0"}];return e.jsxs("div",{className:`flex justify-end items-center fixed bottom-3 right-8 z-40 h-24 transition-all duration-1000 ease-in-out ${u?"w-[432px]":"w-24"} ${w?"opacity-100":"opacity-0"}`,style:{filter:d?"grayscale(100%)":"grayscale(0%)",opacity:d?.3:1,transition:"filter 0.5s ease-in-out, opacity 0.5s ease-in-out"},children:[L.map((o,f)=>e.jsx("div",{className:`absolute ${o.style} h-20 min-w-20 w-20 overflow-visible flex justify-between transition-opacity duration-500 ease-in-out`,style:{opacity:d?0:1},children:e.jsx(v,{colors:N,delay:o.delay,stretch:u})},`circle-${f}`)),U.map((o,f)=>e.jsx("div",{className:`absolute ${o.style} h-20 transition-all ease-in-out ${u?"w-[324px] px-0":"w-20 px-10"} overflow-visible flex justify-between`,style:{opacity:d?0:u?1:0,transitionDuration:"0.5s"},children:e.jsx(x,{colors:N,delay:o.delay})},`rect-${f}`)),w&&e.jsxs("button",{onClick:a,disabled:d,className:`flex flex-row-reverse items-center gap-1.5 fixed p-3 rounded-full shadow-md h-16 mr-4 transition-all duration-600 ease-in-out border-2 border-[var(--border)] ${u?"w-[400px]":"w-16"} ${d?"cursor-default":"cursor-pointer"}`,style:{background:"var(--chat-button-gradient)"},"aria-label":n?t:"Open chat",children:[l&&e.jsx("img",{src:l,alt:c,className:"w-10 h-10 object-contain"}),e.jsx(i,{variant:"label-lg",className:`pl-2 w-80 line-clamp-2 overflow-hidden text-ellipsis text-left transition-opacity duration-300 ${G?"opacity-100":"opacity-0"}`,children:t})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"AgentButton",props:{onOpenChat:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when agent button is clicked"},hasNotification:{required:!1,tsType:{name:"boolean"},description:"Whether there's a new notification",defaultValue:{value:"false",computed:!1}},notificationMessage:{required:!1,tsType:{name:"string"},description:"The notification message to display",defaultValue:{value:'""',computed:!1}},logoSrc:{required:!1,tsType:{name:"string"},description:"Logo source for the agent"},logoAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the logo",defaultValue:{value:'"Agent"',computed:!1}},animationColors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Custom animation colors",defaultValue:{value:'["#7DADB9", "#3864F5", "#55468D", "#479A8D"]',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the button is disabled (greyscale, no animations)",defaultValue:{value:"false",computed:!1}}}};try{r.displayName="AgentButton",r.__docgenInfo={description:"",displayName:"AgentButton",props:{onOpenChat:{defaultValue:null,description:"Callback when agent button is clicked",name:"onOpenChat",required:!0,type:{name:"() => void"}},hasNotification:{defaultValue:{value:!1},description:"Whether there's a new notification",name:"hasNotification",required:!1,type:{name:"boolean"}},notificationMessage:{defaultValue:{value:""},description:"The notification message to display",name:"notificationMessage",required:!1,type:{name:"string"}},logoSrc:{defaultValue:null,description:"Logo source for the agent",name:"logoSrc",required:!1,type:{name:"string"}},logoAlt:{defaultValue:{value:"Agent"},description:"Alt text for the logo",name:"logoAlt",required:!1,type:{name:"string"}},animationColors:{defaultValue:{value:'["#7DADB9", "#3864F5", "#55468D", "#479A8D"]'},description:"Custom animation colors",name:"animationColors",required:!1,type:{name:"string[]"}},disabled:{defaultValue:{value:!1},description:"Whether the button is disabled (greyscale, no animations)",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const X={title:"Components/AgentButton",component:r,args:{hasNotification:!1,notificationMessage:"Hello! How can I help you today?",logoSrc:P,logoAlt:"NeoPTO Agent"},argTypes:{hasNotification:{control:"boolean"},notificationMessage:{control:"text"}},decorators:[a=>e.jsx("div",{className:"min-h-screen relative",children:e.jsx(a,{})})]},p={render:a=>{const[n,t]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{...a,onOpenChat:()=>{t(!0),console.log("Chat opened!")}}),n&&e.jsxs("div",{className:"fixed bottom-24 right-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg z-50",children:[e.jsx(i,{variant:"body-md",className:"text-[var(--fg)]",children:"Chat opened!"}),e.jsx("button",{onClick:()=>t(!1),className:"mt-2 underline",children:e.jsx(i,{variant:"label-sm",className:"text-[var(--muted-fg)]",children:"Close"})})]})]})}},m={args:{hasNotification:!0,notificationMessage:"I have a new update for your project. Would you like to see it?"}},g={render:a=>{const[n,t]=s.useState(!1);return s.useEffect(()=>{const l=setInterval(()=>{t(c=>!c)},5e3);return()=>clearInterval(l)},[]),e.jsx(r,{...a,hasNotification:n,notificationMessage:"This notification toggles every 5 seconds!",onOpenChat:()=>{t(!1),console.log("Chat opened!")}})}},h={args:{disabled:!0,hasNotification:!0,notificationMessage:"This button is disabled (greyscale, no animations)"}},y={render:a=>{const[n,t]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{...a,disabled:n,hasNotification:!n,notificationMessage:"Click to open chat (button will become disabled)",onOpenChat:()=>{t(!0),console.log("Chat opened!")}}),n&&e.jsxs("div",{className:"fixed bottom-24 right-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg z-50 max-w-md",children:[e.jsx(i,{variant:"body-md",className:"text-[var(--fg)]",children:"Chat is open! Notice the button is now disabled (greyscale with no animations)."}),e.jsx("button",{onClick:()=>t(!1),className:"mt-2 px-3 py-1 bg-[var(--color-brand)] text-white rounded-full",children:e.jsx(i,{variant:"label-sm",children:"Close Chat"})})]})]})}},b={render:a=>{const[n,t]=s.useState(!1);return s.useEffect(()=>{const l=setInterval(()=>{t(c=>!c)},4e3);return()=>clearInterval(l)},[]),e.jsxs(e.Fragment,{children:[e.jsx(r,{...a,disabled:n,hasNotification:!n,notificationMessage:"Watch the smooth 1-second transition!",onOpenChat:()=>console.log("Chat opened!")}),e.jsxs("div",{className:"fixed top-8 left-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg",children:[e.jsxs(i,{variant:"body-md",className:"text-[var(--fg)]",children:["State: ",e.jsx("strong",{children:n?"Disabled":"Enabled"})]}),e.jsx(i,{variant:"label-sm",className:"text-[var(--muted-fg)] mt-1",children:"Toggles every 4 seconds"})]})]})}};var T,_,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [chatOpen, setChatOpen] = React.useState(false);
    return <>
        <AgentButton {...args} onOpenChat={() => {
        setChatOpen(true);
        console.log("Chat opened!");
      }} />
        {chatOpen && <div className="fixed bottom-24 right-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg z-50">
            <Typo variant="body-md" className="text-[var(--fg)]">Chat opened!</Typo>
            <button onClick={() => setChatOpen(false)} className="mt-2 underline">
              <Typo variant="label-sm" className="text-[var(--muted-fg)]">Close</Typo>
            </button>
          </div>}
      </>;
  }
}`,...(A=(_=p.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var B,O,$;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    hasNotification: true,
    notificationMessage: "I have a new update for your project. Would you like to see it?"
  }
}`,...($=(O=m.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var I,S,D;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [hasNotification, setHasNotification] = React.useState(false);
    React.useEffect(() => {
      const interval = setInterval(() => {
        setHasNotification(prev => !prev);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
    return <AgentButton {...args} hasNotification={hasNotification} notificationMessage="This notification toggles every 5 seconds!" onOpenChat={() => {
      setHasNotification(false);
      console.log("Chat opened!");
    }} />;
  }
}`,...(D=(S=g.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var q,k,M;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    disabled: true,
    hasNotification: true,
    notificationMessage: "This button is disabled (greyscale, no animations)"
  }
}`,...(M=(k=h.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var V,R,F;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [chatOpen, setChatOpen] = React.useState(false);
    return <>
        <AgentButton {...args} disabled={chatOpen} hasNotification={!chatOpen} notificationMessage="Click to open chat (button will become disabled)" onOpenChat={() => {
        setChatOpen(true);
        console.log("Chat opened!");
      }} />
        {chatOpen && <div className="fixed bottom-24 right-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg z-50 max-w-md">
            <Typo variant="body-md" className="text-[var(--fg)]">
              Chat is open! Notice the button is now disabled (greyscale with no animations).
            </Typo>
            <button onClick={() => setChatOpen(false)} className="mt-2 px-3 py-1 bg-[var(--color-brand)] text-white rounded-full">
              <Typo variant="label-sm">Close Chat</Typo>
            </button>
          </div>}
      </>;
  }
}`,...(F=(R=y.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var E,W,H;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [disabled, setDisabled] = React.useState(false);
    React.useEffect(() => {
      const interval = setInterval(() => {
        setDisabled(prev => !prev);
      }, 4000);
      return () => clearInterval(interval);
    }, []);
    return <>
        <AgentButton {...args} disabled={disabled} hasNotification={!disabled} notificationMessage="Watch the smooth 1-second transition!" onOpenChat={() => console.log("Chat opened!")} />
        <div className="fixed top-8 left-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg">
          <Typo variant="body-md" className="text-[var(--fg)]">
            State: <strong>{disabled ? "Disabled" : "Enabled"}</strong>
          </Typo>
          <Typo variant="label-sm" className="text-[var(--muted-fg)] mt-1">
            Toggles every 4 seconds
          </Typo>
        </div>
      </>;
  }
}`,...(H=(W=b.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const Y=["Playground","WithNotification","AutoToggleNotification","Disabled","DisabledWhenChatOpen","DisabledTransition"];export{g as AutoToggleNotification,h as Disabled,b as DisabledTransition,y as DisabledWhenChatOpen,p as Playground,m as WithNotification,Y as __namedExportsOrder,X as default};
