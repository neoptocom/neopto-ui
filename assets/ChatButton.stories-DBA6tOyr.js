import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as n}from"./index-GiUgBvb1.js";import{T as p}from"./Typo-BNAdv5Gi.js";import"./index-B8ehKEGt.js";const _=({colors:a,delay:s=0})=>{const t=n.useMemo(()=>Math.random().toString(36).substr(2,9),[]);return e.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",className:"h-full transition-all duration-500 ease-in-out w-full",children:[e.jsx("style",{children:`
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
              colorCycle-${t} 4s infinite linear ${s}s;
            opacity: 0;
            transition: all 0.5s ease-in-out;
          }
        `}),e.jsx("g",{style:{mixBlendMode:"overlay"},filter:"url(#filter0_f_241_319)",children:e.jsx("ellipse",{cx:"32",rx:"20",cy:"32",ry:"20",className:`animated-circle-${t}`})}),e.jsx("defs",{children:e.jsxs("filter",{id:"filter0_f_241_319",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[e.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),e.jsx("feGaussianBlur",{stdDeviation:"4",result:"effect1_foregroundBlur_241_319"})]})})]})};_.__docgenInfo={description:"",methods:[],displayName:"AnimatedBgCircle",props:{colors:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},stretch:{required:!1,tsType:{name:"boolean"},description:""}}};const I=({colors:a,delay:s=0})=>{const t=n.useMemo(()=>Math.random().toString(36).substr(2,9),[]);return e.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",className:"h-full transition-all duration-500 ease-in-out w-full",preserveAspectRatio:"none",children:[e.jsx("style",{children:`
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
              colorCycle-${t} 4s infinite linear ${s}s;
            opacity: 0;
            transition: all 0.5s ease-in-out;
          }
        `}),e.jsx("g",{style:{mixBlendMode:"overlay"},filter:"url(#filter0_f_241_319)",children:e.jsx("rect",{x:"10",y:"12",width:"44",height:"40",className:`animated-circle-${t}`})}),e.jsx("defs",{children:e.jsxs("filter",{id:"filter0_f_241_319",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[e.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),e.jsx("feGaussianBlur",{stdDeviation:"4",result:"effect1_foregroundBlur_241_319"})]})})]})};I.__docgenInfo={description:"",methods:[],displayName:"AnimatedBgRectangle",props:{colors:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const f=({onOpenChat:a,hasNotification:s=!1,notificationMessage:t="",logoSrc:i,logoAlt:m="Chat Agent",animationColors:g=["#7DADB9","#3864F5","#55468D","#479A8D"]})=>{const[A,h]=n.useState(!1),[l,y]=n.useState(!1),[x,k]=n.useState(!1);n.useEffect(()=>{const o=setTimeout(()=>k(!0),250);return()=>clearTimeout(o)},[]),n.useEffect(()=>{if(s){const o=setTimeout(()=>h(!0),500);return y(!0),()=>clearTimeout(o)}else{const o=setTimeout(()=>h(!1),250),r=setTimeout(()=>y(!1),350);return()=>{clearTimeout(o),clearTimeout(r)}}},[s]);const O=[{delay:0,style:"left-0 top-0"},{delay:.75,style:"right-0 top-0"},{delay:1,style:"bottom-0 left-0"},{delay:.25,style:"bottom-0 right-0"}],S=[{delay:0,style:"left-0 top-0"},{delay:.75,style:"right-0 top-0"},{delay:1,style:"bottom-0 left-0"},{delay:.25,style:"bottom-0 right-0"}];return e.jsxs("div",{className:`flex justify-end items-center fixed bottom-3 right-8 z-40 h-24 transition-all duration-600 ease-in-out ${l?"w-[432px]":"w-24"} ${x?"opacity-100":"opacity-0"}`,children:[O.map((o,r)=>e.jsx("div",{className:`absolute ${o.style} h-20 min-w-20 transition-all duration-600 ease-in-out w-20 overflow-visible flex justify-between`,children:e.jsx(_,{colors:g,delay:o.delay,stretch:l})},`circle-${r}`)),S.map((o,r)=>e.jsx("div",{className:`absolute ${o.style} h-20 transition-all duration-600 ease-in-out ${l?"w-[324px] opacity-100 px-0":"w-20 px-10 opacity-0"} overflow-visible flex justify-between`,children:e.jsx(I,{colors:g,delay:o.delay})},`rect-${r}`)),x&&e.jsxs("button",{onClick:a,className:`flex flex-row-reverse items-center gap-1.5 fixed p-3 rounded-full shadow-md cursor-pointer h-16 mr-4 transition-all duration-600 ease-in-out border-2 border-[var(--border)] ${l?"w-[400px]":"w-16"}`,style:{background:"var(--chat-button-gradient)"},"aria-label":s?t:"Open chat",children:[i&&e.jsx("img",{src:i,alt:m,className:"w-10 h-10 object-contain"}),e.jsx(p,{variant:"label-lg",className:`pl-2 w-80 line-clamp-2 overflow-hidden text-ellipsis text-left transition-opacity duration-300 ${A?"opacity-100":"opacity-0"}`,children:t})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"ChatButton",props:{onOpenChat:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when chat button is clicked"},hasNotification:{required:!1,tsType:{name:"boolean"},description:"Whether there's a new notification",defaultValue:{value:"false",computed:!1}},notificationMessage:{required:!1,tsType:{name:"string"},description:"The notification message to display",defaultValue:{value:'""',computed:!1}},logoSrc:{required:!1,tsType:{name:"string"},description:"Logo source for the chat agent"},logoAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the logo",defaultValue:{value:'"Chat Agent"',computed:!1}},animationColors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Custom animation colors",defaultValue:{value:'["#7DADB9", "#3864F5", "#55468D", "#479A8D"]',computed:!1}}}};const M=""+new URL("agent-neopto-dark-CMJpBLrE.svg",import.meta.url).href,H={title:"Components/ChatButton",component:f,args:{hasNotification:!1,notificationMessage:"Hello! How can I help you today?",logoSrc:M,logoAlt:"NeoPTO Agent"},argTypes:{hasNotification:{control:"boolean"},notificationMessage:{control:"text"}},decorators:[a=>e.jsx("div",{className:"min-h-screen relative",children:e.jsx(a,{})})]},c={render:a=>{const[s,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(f,{...a,onOpenChat:()=>{t(!0),console.log("Chat opened!")}}),s&&e.jsxs("div",{className:"fixed bottom-24 right-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg z-50",children:[e.jsx(p,{variant:"body-md",className:"text-[var(--fg)]",children:"Chat opened!"}),e.jsx("button",{onClick:()=>t(!1),className:"mt-2 underline",children:e.jsx(p,{variant:"label-sm",className:"text-[var(--muted-fg)]",children:"Close"})})]})]})}},d={args:{hasNotification:!0,notificationMessage:"I have a new update for your project. Would you like to see it?"}},u={render:a=>{const[s,t]=n.useState(!1);return n.useEffect(()=>{const i=setInterval(()=>{t(m=>!m)},5e3);return()=>clearInterval(i)},[]),e.jsx(f,{...a,hasNotification:s,notificationMessage:"This notification toggles every 5 seconds!",onOpenChat:()=>{t(!1),console.log("Chat opened!")}})}};var v,b,j;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [chatOpen, setChatOpen] = React.useState(false);
    return <>
        <ChatButton {...args} onOpenChat={() => {
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
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var N,w,C;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    hasNotification: true,
    notificationMessage: "I have a new update for your project. Would you like to see it?"
  }
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var T,$,B;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [hasNotification, setHasNotification] = React.useState(false);
    React.useEffect(() => {
      const interval = setInterval(() => {
        setHasNotification(prev => !prev);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
    return <ChatButton {...args} hasNotification={hasNotification} notificationMessage="This notification toggles every 5 seconds!" onOpenChat={() => {
      setHasNotification(false);
      console.log("Chat opened!");
    }} />;
  }
}`,...(B=($=u.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const E=["Playground","WithNotification","AutoToggleNotification"];export{u as AutoToggleNotification,c as Playground,d as WithNotification,E as __namedExportsOrder,H as default};
