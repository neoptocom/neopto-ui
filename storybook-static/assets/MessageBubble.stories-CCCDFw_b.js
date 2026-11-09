import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as E}from"./index-GiUgBvb1.js";import{T as t}from"./Typo-yLceAaNy.js";const s=E.forwardRef(({direction:o,color:w,children:M,className:B,...F},C)=>{const _=o==="left"?"[border-radius:16px_16px_16px_2px]":o==="right"?"[border-radius:16px_16px_2px_16px]":"rounded-2xl",S=w||"var(--muted)";return e.jsx("div",{ref:C,className:["px-4 py-2 inline-block",_,B].filter(Boolean).join(" "),style:{backgroundColor:S},...F,children:M})});s.displayName="MessageBubble";s.__docgenInfo={description:"",methods:[],displayName:"MessageBubble",props:{direction:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Direction of the message bubble, affects border radius"},color:{required:!1,tsType:{name:"string"},description:"Custom background color (CSS color value)"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display inside the bubble"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};try{s.displayName="MessageBubble",s.__docgenInfo={description:"",displayName:"MessageBubble",props:{direction:{defaultValue:null,description:"Direction of the message bubble, affects border radius",name:"direction",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},color:{defaultValue:null,description:"Custom background color (CSS color value)",name:"color",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content to display inside the bubble",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Components/MessageBubble",component:s},a={render:()=>e.jsx("div",{className:"flex flex-col gap-4 max-w-md p-4",children:e.jsx(s,{children:e.jsx(t,{variant:"title-sm",children:"Hello! This is a default message bubble with no direction."})})})},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md p-4",children:[e.jsx("div",{className:"flex justify-start",children:e.jsx(s,{direction:"left",children:e.jsx(t,{variant:"title-sm",children:"This is a left-aligned message bubble."})})}),e.jsx("div",{className:"flex justify-end",children:e.jsx(s,{direction:"right",children:e.jsx(t,{variant:"title-sm",children:"This is a right-aligned message bubble."})})}),e.jsx("div",{className:"flex justify-start",children:e.jsx(s,{direction:"left",children:e.jsx(t,{variant:"title-sm",children:"Messages from the left typically have the small radius on bottom-left corner."})})}),e.jsx("div",{className:"flex justify-end",children:e.jsx(s,{direction:"right",children:e.jsx(t,{variant:"title-sm",children:"Messages from the right have the small radius on bottom-right corner."})})})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md p-4",children:[e.jsx("div",{className:"flex justify-start",children:e.jsx(s,{direction:"left",color:"#E3F2FD",children:e.jsx(t,{variant:"title-sm",className:"text-[#1565C0]",children:"Light blue message"})})}),e.jsx("div",{className:"flex justify-end",children:e.jsx(s,{direction:"right",color:"#1976D2",children:e.jsx(t,{variant:"title-sm",className:"text-white",children:"Blue message with white text"})})}),e.jsx("div",{className:"flex justify-start",children:e.jsx(s,{direction:"left",color:"#F3E5F5",children:e.jsx(t,{variant:"title-sm",className:"text-[#7B1FA2]",children:"Purple tinted message"})})}),e.jsx("div",{className:"flex justify-end",children:e.jsx(s,{direction:"right",color:"#E8F5E9",children:e.jsx(t,{variant:"title-sm",className:"text-[#2E7D32]",children:"Green message"})})})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-2xl p-4",children:[e.jsx("div",{className:"flex justify-start",children:e.jsx(s,{direction:"left",color:"#F5F5F5",children:e.jsx(t,{variant:"title-sm",className:"text-[#333]",children:"Hey! How can I help you today?"})})}),e.jsx("div",{className:"flex justify-end",children:e.jsx(s,{direction:"right",color:"var(--color-brand)",children:e.jsx(t,{variant:"title-sm",className:"text-white",children:"I need help with my account settings."})})}),e.jsx("div",{className:"flex justify-start",children:e.jsx(s,{direction:"left",color:"#F5F5F5",children:e.jsx(t,{variant:"title-sm",className:"text-[#333]",children:"Sure! I can help you with that. What specific setting would you like to change?"})})}),e.jsx("div",{className:"flex justify-end",children:e.jsx(s,{direction:"right",color:"var(--color-brand)",children:e.jsx(t,{variant:"title-sm",className:"text-white",children:"I want to update my email address."})})}),e.jsx("div",{className:"flex justify-start",children:e.jsx(s,{direction:"left",color:"#F5F5F5",children:e.jsx(t,{variant:"title-sm",className:"text-[#333]",children:"No problem! You can update your email in Account Settings → Profile → Email."})})})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-2xl p-4",children:[e.jsx("div",{className:"flex justify-start",children:e.jsx(s,{direction:"left",children:e.jsx(t,{variant:"title-sm",className:"text-[#333]",children:"This is a longer message to demonstrate how the bubble handles multiple lines of text. The border radius should remain consistent regardless of the content length. The bubble will grow to accommodate the text while maintaining its shape."})})}),e.jsx("div",{className:"flex justify-end",children:e.jsx(s,{direction:"right",color:"var(--color-brand)",children:e.jsx(t,{variant:"title-sm",className:"text-white",children:"Great! The bubble handles long text really well. It maintains the proper border radius and looks clean even with multiple lines of content."})})})]})};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md p-4">\r
      <MessageBubble>\r
        <Typo variant="title-sm">Hello! This is a default message bubble with no direction.</Typo>\r
      </MessageBubble>\r
    </div>
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md p-4">\r
      <div className="flex justify-start">\r
        <MessageBubble direction="left">\r
          <Typo variant="title-sm">This is a left-aligned message bubble.</Typo>\r
        </MessageBubble>\r
      </div>\r
      <div className="flex justify-end">\r
        <MessageBubble direction="right">\r
          <Typo variant="title-sm">This is a right-aligned message bubble.</Typo>\r
        </MessageBubble>\r
      </div>\r
      <div className="flex justify-start">\r
        <MessageBubble direction="left">\r
          <Typo variant="title-sm">Messages from the left typically have the small radius on bottom-left corner.</Typo>\r
        </MessageBubble>\r
      </div>\r
      <div className="flex justify-end">\r
        <MessageBubble direction="right">\r
          <Typo variant="title-sm">Messages from the right have the small radius on bottom-right corner.</Typo>\r
        </MessageBubble>\r
      </div>\r
    </div>
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,p,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md p-4">\r
      <div className="flex justify-start">\r
        <MessageBubble direction="left" color="#E3F2FD">\r
          <Typo variant="title-sm" className="text-[#1565C0]">Light blue message</Typo>\r
        </MessageBubble>\r
      </div>\r
      <div className="flex justify-end">\r
        <MessageBubble direction="right" color="#1976D2">\r
          <Typo variant="title-sm" className="text-white">Blue message with white text</Typo>\r
        </MessageBubble>\r
      </div>\r
      <div className="flex justify-start">\r
        <MessageBubble direction="left" color="#F3E5F5">\r
          <Typo variant="title-sm" className="text-[#7B1FA2]">Purple tinted message</Typo>\r
        </MessageBubble>\r
      </div>\r
      <div className="flex justify-end">\r
        <MessageBubble direction="right" color="#E8F5E9">\r
          <Typo variant="title-sm" className="text-[#2E7D32]">Green message</Typo>\r
        </MessageBubble>\r
      </div>\r
    </div>
}`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,v,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3 max-w-2xl p-4">\r
      <div className="flex justify-start">\r
        <MessageBubble direction="left" color="#F5F5F5">\r
          <Typo variant="title-sm" className="text-[#333]">Hey! How can I help you today?</Typo>\r
        </MessageBubble>\r
      </div>\r
      <div className="flex justify-end">\r
        <MessageBubble direction="right" color="var(--color-brand)">\r
          <Typo variant="title-sm" className="text-white">I need help with my account settings.</Typo>\r
        </MessageBubble>\r
      </div>\r
      <div className="flex justify-start">\r
        <MessageBubble direction="left" color="#F5F5F5">\r
          <Typo variant="title-sm" className="text-[#333]">\r
            Sure! I can help you with that. What specific setting would you like to change?\r
          </Typo>\r
        </MessageBubble>\r
      </div>\r
      <div className="flex justify-end">\r
        <MessageBubble direction="right" color="var(--color-brand)">\r
          <Typo variant="title-sm" className="text-white">I want to update my email address.</Typo>\r
        </MessageBubble>\r
      </div>\r
      <div className="flex justify-start">\r
        <MessageBubble direction="left" color="#F5F5F5">\r
          <Typo variant="title-sm" className="text-[#333]">\r
            No problem! You can update your email in Account Settings → Profile → Email.\r
          </Typo>\r
        </MessageBubble>\r
      </div>\r
    </div>
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var j,N,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-2xl p-4">\r
      <div className="flex justify-start">\r
        <MessageBubble direction="left">\r
          <Typo variant="title-sm" className="text-[#333]">\r
            This is a longer message to demonstrate how the bubble handles multiple lines of text. \r
            The border radius should remain consistent regardless of the content length. \r
            The bubble will grow to accommodate the text while maintaining its shape.\r
          </Typo>\r
        </MessageBubble>\r
      </div>\r
      <div className="flex justify-end">\r
        <MessageBubble direction="right" color="var(--color-brand)">\r
          <Typo variant="title-sm" className="text-white">\r
            Great! The bubble handles long text really well. It maintains the proper border \r
            radius and looks clean even with multiple lines of content.\r
          </Typo>\r
        </MessageBubble>\r
      </div>\r
    </div>
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const R=["Default","Directions","CustomColors","ChatConversation","LongMessages"];export{l as ChatConversation,i as CustomColors,a as Default,r as Directions,n as LongMessages,R as __namedExportsOrder,q as default};
