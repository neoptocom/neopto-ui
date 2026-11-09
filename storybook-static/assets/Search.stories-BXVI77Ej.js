import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as t}from"./index-GiUgBvb1.js";import{I as H}from"./IconButton-DeVIR0vb.js";import{T as D}from"./Typo-yLceAaNy.js";import{A as K}from"./Avatar-CH6OtqfP.js";import{A as me}from"./AvatarGroup-JIWVjSW8.js";import{C as P}from"./Counter-CyDoHRs1.js";import{I as U}from"./Icon-DucDLcRo.js";function x({className:d="",options:r,onSearch:f,selectedOption:n,onSelect:o,searchDelay:u=300,disabled:l=!1,maxHeight:h=152,placeholder:m="Pesquisar",id:p,children:i,...I}){const b=p??t.useId(),R=`${b}-listbox`,[q,S]=t.useState(""),[c,y]=t.useState(!1),[M,g]=t.useState(-1),[T,te]=t.useState(!1),re=t.useRef(null),_=t.useRef(null),w=t.useRef(null),v=t.useMemo(()=>Array.isArray(r)&&typeof r[0]=="string"?r.map(a=>({label:a,value:a})):r,[r]),se=t.useMemo(()=>v.some(a=>!!a.image),[v]),ne=n!=null?typeof n=="string"?n:n.label:q,le=t.useCallback(a=>{w.current&&clearTimeout(w.current),w.current=window.setTimeout(()=>{f(a)},u)},[f,u]);function oe(){l||y(!0)}function k(){y(!1),g(-1)}function z(a){o(a),S(""),k()}function ie(){o(null),S(""),k()}function ue(a){if(!c&&(a.key==="ArrowDown"||a.key==="ArrowUp")){y(!0),g(0),a.preventDefault();return}if(c)if(a.key==="ArrowDown")a.preventDefault(),g(s=>Math.min(s+1,v.length-1)),C();else if(a.key==="ArrowUp")a.preventDefault(),g(s=>Math.max(s-1,0)),C();else if(a.key==="Enter"){a.preventDefault();const s=v[M];s&&z(s)}else a.key==="Escape"?(a.preventDefault(),k()):a.key==="Home"?(a.preventDefault(),g(0),C()):a.key==="End"&&(a.preventDefault(),g(v.length-1),C())}function C(){const a=_.current,s=M;if(!a||s<0)return;const j=a.children[s];j==null||j.scrollIntoView({block:"nearest"})}return t.useEffect(()=>()=>{w.current&&clearTimeout(w.current)},[]),e.jsxs("div",{ref:re,className:["relative w-full",d].join(" "),...I,children:[e.jsx("div",{className:["w-full min-w-0 border rounded-[24px] bg-[var(--surface)] transition-all","border-[var(--border)] focus-within:border-[var(--color-brand)]",l?"opacity-60 cursor-not-allowed":"",!T&&"h-12"].join(" "),children:e.jsx("div",{className:"relative flex h-full",children:e.jsxs("div",{className:["flex flex-col w-full overflow-hidden transition-all",T&&i?"h-auto pb-3":"h-full"].join(" "),children:[e.jsxs("div",{className:"flex w-full items-center h-12 px-2",children:[i&&e.jsx(H,{icon:"filter_list",onClick:()=>te(a=>!a),disabled:l,"aria-label":T?"Hide filters":"Show filters","aria-expanded":T,className:"mr-2"}),e.jsx("input",{id:b,role:"combobox","aria-expanded":c,"aria-controls":R,"aria-autocomplete":"list","aria-disabled":l||void 0,type:"text",autoComplete:"off",value:ne,onChange:a=>{const s=a.target.value;S(s),le(s),c||y(!0),g(0)},onFocus:oe,onKeyDown:ue,onBlur:()=>setTimeout(k,150),disabled:l,style:{fontFamily:"var(--font-display)",fontSize:"16px"},className:["w-full rounded-full border-0 outline-none bg-transparent h-12","leading-tight text-[var(--fg)] placeholder:text-[var(--muted-fg)]","px-2"].join(" "),placeholder:m,onClick:()=>!l&&y(!0)}),e.jsx(H,{icon:"search",onClick:n&&!c?ie:()=>y(a=>!a),disabled:l,"aria-label":n&&!c?"Clear":c?"Collapse":"Expand"})]}),i&&e.jsx("div",{className:"w-full px-4.5 pb-3 pt-2",children:i})]})})}),c&&!l&&e.jsx("div",{className:["absolute z-20 mt-2 w-full overflow-y-auto rounded-3xl border border-[var(--border)]","bg-[var(--surface)] text-[var(--fg)] shadow-md"].join(" "),style:{maxHeight:h},children:v.length>0?e.jsx("ul",{id:R,role:"listbox",ref:_,children:v.map((a,s)=>{const j=s===M,ce=n!=null&&(typeof n=="string"?n===a.label:n.label===a.label);return e.jsxs("li",{role:"option","aria-selected":ce,className:["flex items-center justify-between px-4 py-2 text-sm cursor-pointer transition-colors",j?"bg-[var(--muted)]":"",s!==v.length-1?"border-b border-[var(--border)]":""].join(" "),onMouseEnter:()=>g(s),onMouseDown:A=>A.preventDefault(),onClick:()=>z(a),children:[e.jsxs("div",{className:"flex items-center gap-2",children:[se&&e.jsx(K,{name:a.label,src:a.image||void 0}),e.jsx(D,{variant:"label-lg",className:"font-normal text-[var(--fg)]",children:a.label})]}),Array.isArray(a.group)&&a.group.length>0&&e.jsx(me,{children:a.group.map((A,de)=>e.jsx(K,{name:A.name,src:A.image||void 0},de))})]},`${a.label||s}-${s}`)})}):e.jsx("div",{className:"px-4 py-3",children:e.jsx(D,{variant:"body-sm",className:"text-[var(--muted-fg)]",children:"No results found"})})})]})}x.__docgenInfo={description:"",methods:[],displayName:"Search",props:{options:{required:!0,tsType:{name:"union",raw:"SearchOption[] | string[]",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: any;\r
  image?: string;\r
  group?: Array<{ name: string; image?: string }>;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"image",value:{name:"string",required:!1}},{key:"group",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; image?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!1}}]}}],raw:"Array<{ name: string; image?: string }>",required:!1}}]}}],raw:"SearchOption[]"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Array of options to display"},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:"Callback when search is performed (debounced)"},selectedOption:{required:!0,tsType:{name:"union",raw:"SearchOption | string | null",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: any;\r
  image?: string;\r
  group?: Array<{ name: string; image?: string }>;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"image",value:{name:"string",required:!1}},{key:"group",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; image?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!1}}]}}],raw:"Array<{ name: string; image?: string }>",required:!1}}]}},{name:"string"},{name:"null"}]},description:"Currently selected option"},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: SearchOption | string | null) => void",signature:{arguments:[{type:{name:"union",raw:"SearchOption | string | null",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: any;\r
  image?: string;\r
  group?: Array<{ name: string; image?: string }>;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"image",value:{name:"string",required:!1}},{key:"group",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; image?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!1}}]}}],raw:"Array<{ name: string; image?: string }>",required:!1}}]}},{name:"string"},{name:"null"}]},name:"option"}],return:{name:"void"}}},description:"Callback when an option is selected"},searchDelay:{required:!1,tsType:{name:"number"},description:"Search delay in milliseconds (default: 300ms)",defaultValue:{value:"300",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},maxHeight:{required:!1,tsType:{name:"number"},description:"Maximum height of the options dropdown",defaultValue:{value:"152",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder shown when the input is empty and nothing is selected",defaultValue:{value:'"Pesquisar"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Optional id base (for accessibility hooks)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional filter children to render when filters are expanded"},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};try{x.displayName="Search",x.__docgenInfo={description:"",displayName:"Search",props:{options:{defaultValue:null,description:"Array of options to display",name:"options",required:!0,type:{name:"string[] | SearchOption[]"}},onSearch:{defaultValue:null,description:"Callback when search is performed (debounced)",name:"onSearch",required:!0,type:{name:"(query: string) => void"}},selectedOption:{defaultValue:null,description:"Currently selected option",name:"selectedOption",required:!0,type:{name:"string | SearchOption | null"}},onSelect:{defaultValue:null,description:"Callback when an option is selected",name:"onSelect",required:!0,type:{name:"(option: string | SearchOption | null) => void"}},searchDelay:{defaultValue:{value:300},description:"Search delay in milliseconds (default: 300ms)",name:"searchDelay",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:!1},description:"Whether the component is disabled",name:"disabled",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:{value:152},description:"Maximum height of the options dropdown",name:"maxHeight",required:!1,type:{name:"number"}},placeholder:{defaultValue:{value:"Pesquisar"},description:"Placeholder shown when the input is empty and nothing is selected",name:"placeholder",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Optional id base (for accessibility hooks)",name:"id",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional filter children to render when filters are expanded",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const N=[{label:"Ada Lovelace",value:"ada",image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Alan Turing",value:"turing"},{label:"Grace Hopper",value:"hopper",image:"https://images.unsplash.com/photo-1545184180-25d471fe75d8?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Edsger Dijkstra",value:"dijkstra"},{label:"Barbara Liskov",value:"liskov"},{label:"Donald Knuth",value:"knuth"},{label:"Margaret Hamilton",value:"hamilton",image:"https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"John von Neumann",value:"neumann"},{label:"Gordon Moore",value:"moore"},{label:"Andy Grove",value:"grove"},{label:"Steve Jobs",value:"jobs",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Steve Wozniak",value:"wozniak"},{label:"Bill Gates",value:"gates",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Paul Allen",value:"allen"},{label:"Larry Page",value:"page"},{label:"Sergey Brin",value:"brin"},{label:"Jeff Bezos",value:"bezos"},{label:"Elon Musk",value:"musk",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Mark Zuckerberg",value:"zuckerberg"},{label:"Satya Nadella",value:"nadella"},{label:"Sundar Pichai",value:"pichai"},{label:"Jensen Huang",value:"huang"},{label:"Lisa Su",value:"su"}],Se={title:"Components/Search",component:x,args:{options:N,selectedOption:null,disabled:!1,maxHeight:180,searchDelay:300,placeholder:"Pesquisar"}},E={render:d=>{const[r,f]=t.useState(d.selectedOption),[n,o]=t.useState([]),[u,l]=t.useState(!1),h=t.useCallback(m=>{m.trim()?(l(!0),setTimeout(()=>{const p=N.filter(i=>i.label.toLowerCase().includes(m.toLowerCase()));o(p),l(!1)},500)):(o([]),l(!1))},[]);return e.jsxs("div",{className:"max-w-md",children:[e.jsx(x,{...d,options:u?[]:n,selectedOption:r,onSelect:f,onSearch:h}),e.jsxs("div",{className:"mt-3 text-xs text-[var(--muted-fg)]",children:["Selected: ",typeof r=="string"?r:(r==null?void 0:r.label)??"none"]}),u&&e.jsx("div",{className:"mt-2 text-xs text-[var(--muted-fg)]",children:"🔍 Searching..."})]})}},L={args:{searchDelay:1e3},render:d=>{const[r,f]=t.useState(null),[n,o]=t.useState([]),[u,l]=t.useState(0),h=t.useCallback(m=>{if(l(p=>p+1),m.trim()){const p=N.filter(i=>i.label.toLowerCase().includes(m.toLowerCase()));o(p)}else o([])},[]);return e.jsxs("div",{className:"max-w-md",children:[e.jsx(x,{...d,options:n,selectedOption:r,onSelect:f,onSearch:h}),e.jsxs("div",{className:"mt-3 text-xs text-[var(--muted-fg)]",children:["Search calls made: ",u," (1 second delay)"]})]})}},V={args:{disabled:!0,options:N}},O={render:d=>{const[r,f]=t.useState(null),[n,o]=t.useState([]),[u,l]=t.useState(20),[h,m]=t.useState(20),[p,i]=t.useState(!1),[I,b]=t.useState(!1),R=t.useCallback(q=>{if(q.trim()){const S=N.filter(c=>c.label.toLowerCase().includes(q.toLowerCase()));o(S)}else o([])},[]);return e.jsxs("div",{className:"max-w-md",children:[e.jsx(x,{...d,options:n,selectedOption:r,onSelect:f,onSearch:R,children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(P,{value:u,onChange:l,min:1,max:100}),e.jsx(D,{variant:"label-lg",className:"mr-1",children:"Semantic Search – Top K"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:e.jsx(U,{name:"help",size:"sm",className:"text-[var(--muted-fg)] cursor-help"})}),p&&e.jsx("div",{className:"absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap",children:"lorem ipsum dolor sit amet"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(P,{value:h,onChange:m,min:1,max:100}),e.jsx(D,{variant:"label-lg",className:"mr-1",children:"Total Results"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),children:e.jsx(U,{name:"help",size:"sm",className:"text-[var(--muted-fg)] cursor-help"})}),I&&e.jsx("div",{className:"absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap",children:"lorem ipsum dolor sit amet"})]})]})]})}),e.jsxs("div",{className:"mt-3 text-xs text-[var(--muted-fg)]",children:["Selected: ",typeof r=="string"?r:(r==null?void 0:r.label)??"none"]}),e.jsxs("div",{className:"mt-1 text-xs text-[var(--muted-fg)]",children:["Top K: ",u,", Total Results: ",h]})]})}};var W,B,F;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<SearchOption | string | null>(args.selectedOption);
    const [results, setResults] = React.useState<SearchOption[]>([]);
    const [isSearching, setIsSearching] = React.useState(false);
    const handleSearch = React.useCallback((query: string) => {
      if (query.trim()) {
        setIsSearching(true);
        // Simulate API call delay
        setTimeout(() => {
          const filtered = SEARCH_RESULTS.filter(item => item.label.toLowerCase().includes(query.toLowerCase()));
          setResults(filtered);
          setIsSearching(false);
        }, 500);
      } else {
        setResults([]);
        setIsSearching(false);
      }
    }, []);
    return <div className="max-w-md">\r
        <Search {...args} options={isSearching ? [] : results} selectedOption={value} onSelect={setValue} onSearch={handleSearch} />\r
        <div className="mt-3 text-xs text-[var(--muted-fg)]">\r
          Selected: {typeof value === "string" ? value : value?.label ?? "none"}\r
        </div>\r
        {isSearching && <div className="mt-2 text-xs text-[var(--muted-fg)]">\r
            🔍 Searching...\r
          </div>}\r
      </div>;
  }
}`,...(F=(B=E.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,J,$;L.parameters={...L.parameters,docs:{...(G=L.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    searchDelay: 1000
  },
  render: args => {
    const [value, setValue] = React.useState<SearchOption | string | null>(null);
    const [results, setResults] = React.useState<SearchOption[]>([]);
    const [searchCount, setSearchCount] = React.useState(0);
    const handleSearch = React.useCallback((query: string) => {
      setSearchCount(prev => prev + 1);
      if (query.trim()) {
        const filtered = SEARCH_RESULTS.filter(item => item.label.toLowerCase().includes(query.toLowerCase()));
        setResults(filtered);
      } else {
        setResults([]);
      }
    }, []);
    return <div className="max-w-md">\r
        <Search {...args} options={results} selectedOption={value} onSelect={setValue} onSearch={handleSearch} />\r
        <div className="mt-3 text-xs text-[var(--muted-fg)]">\r
          Search calls made: {searchCount} (1 second delay)\r
        </div>\r
      </div>;
  }
}`,...($=(J=L.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var Q,Z,X;V.parameters={...V.parameters,docs:{...(Q=V.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options: SEARCH_RESULTS
  }
}`,...(X=(Z=V.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};var Y,ee,ae;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<SearchOption | string | null>(null);
    const [results, setResults] = React.useState<SearchOption[]>([]);
    const [topK, setTopK] = React.useState<number>(20);
    const [totalResults, setTotalResults] = React.useState<number>(20);
    const [showTooltip1, setShowTooltip1] = React.useState(false);
    const [showTooltip2, setShowTooltip2] = React.useState(false);
    const handleSearch = React.useCallback((query: string) => {
      if (query.trim()) {
        const filtered = SEARCH_RESULTS.filter(item => item.label.toLowerCase().includes(query.toLowerCase()));
        setResults(filtered);
      } else {
        setResults([]);
      }
    }, []);
    return <div className="max-w-md">\r
        <Search {...args} options={results} selectedOption={value} onSelect={setValue} onSearch={handleSearch}>\r
          {/* Filter content */}\r
          <div className="flex flex-col gap-3">\r
            {/* Semantic Search - Top K */}\r
            <div className="flex items-center gap-3">\r
              <Counter value={topK} onChange={setTopK} min={1} max={100} />\r
              <Typo variant="label-lg" className="mr-1">Semantic Search – Top K</Typo>\r
              <div className="relative">\r
                <div onMouseEnter={() => setShowTooltip1(true)} onMouseLeave={() => setShowTooltip1(false)}>\r
                  <Icon name="help" size="sm" className="text-[var(--muted-fg)] cursor-help" />\r
                </div>\r
                {showTooltip1 && <div className="absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap">\r
                    lorem ipsum dolor sit amet\r
                  </div>}\r
              </div>\r
            </div>\r
\r
            {/* Total Results */}\r
            <div className="flex items-center gap-3">\r
              <Counter value={totalResults} onChange={setTotalResults} min={1} max={100} />\r
              <Typo variant="label-lg" className="mr-1">Total Results</Typo>\r
              <div className="relative">\r
                <div onMouseEnter={() => setShowTooltip2(true)} onMouseLeave={() => setShowTooltip2(false)}>\r
                  <Icon name="help" size="sm" className="text-[var(--muted-fg)] cursor-help" />\r
                </div>\r
                {showTooltip2 && <div className="absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap">\r
                    lorem ipsum dolor sit amet\r
                  </div>}\r
              </div>\r
            </div>\r
          </div>\r
        </Search>\r
        <div className="mt-3 text-xs text-[var(--muted-fg)]">\r
          Selected: {typeof value === "string" ? value : value?.label ?? "none"}\r
        </div>\r
        <div className="mt-1 text-xs text-[var(--muted-fg)]">\r
          Top K: {topK}, Total Results: {totalResults}\r
        </div>\r
      </div>;
  }
}`,...(ae=(ee=O.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const we=["Playground","WithCustomDelay","Disabled","WithFilters"];export{V as Disabled,E as Playground,L as WithCustomDelay,O as WithFilters,we as __namedExportsOrder,Se as default};
