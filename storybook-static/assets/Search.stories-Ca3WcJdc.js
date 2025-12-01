import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as t}from"./index-GiUgBvb1.js";import{I as D}from"./IconButton-DEQjXj6b.js";import{C as I}from"./Counter-CyDoHRs1.js";import{I as M}from"./Icon-DucDLcRo.js";import{T as _}from"./Typo-B4y6jpMu.js";function S({className:c="",options:s,onSearch:p,selectedOption:n,onSelect:i,searchDelay:u=300,disabled:r=!1,maxHeight:g=152,id:d,children:l,...f}){const R=d??t.useId(),T=`${R}-listbox`,[L,x]=t.useState(""),[m,h]=t.useState(!1),[V,v]=t.useState(-1),[k,$]=t.useState(!1),X=t.useRef(null),Y=t.useRef(null),y=t.useRef(null),b=t.useMemo(()=>Array.isArray(s)&&typeof s[0]=="string"?s.map(a=>({label:a,value:a})):s,[s]);t.useMemo(()=>b.some(a=>!!a.image),[b]);const ee=n!=null?typeof n=="string"?n:n.label:L,ae=t.useCallback(a=>{y.current&&clearTimeout(y.current),y.current=window.setTimeout(()=>{p(a)},u)},[p,u]);function te(){r||h(!0)}function N(){h(!1),v(-1)}function se(a){i(a),x(""),N()}function re(){i(null),x(""),N()}function ne(a){if(!m&&(a.key==="ArrowDown"||a.key==="ArrowUp")){h(!0),v(0),a.preventDefault();return}if(m)if(a.key==="ArrowDown")a.preventDefault(),v(o=>Math.min(o+1,b.length-1)),q();else if(a.key==="ArrowUp")a.preventDefault(),v(o=>Math.max(o-1,0)),q();else if(a.key==="Enter"){a.preventDefault();const o=b[V];o&&se(o)}else a.key==="Escape"?(a.preventDefault(),N()):a.key==="Home"?(a.preventDefault(),v(0),q()):a.key==="End"&&(a.preventDefault(),v(b.length-1),q())}function q(){const a=Y.current,o=V;if(!a||o<0)return;const E=a.children[o];E==null||E.scrollIntoView({block:"nearest"})}return t.useEffect(()=>()=>{y.current&&clearTimeout(y.current)},[]),e.jsx("div",{ref:X,className:["relative w-full",c].join(" "),...f,children:e.jsx("div",{className:["w-full min-w-0 border rounded-[24px] bg-[var(--surface)] transition-all","border-[var(--border)] focus-within:border-[var(--color-brand)]",r?"opacity-60 cursor-not-allowed":"",!k&&"h-12"].join(" "),children:e.jsx("div",{className:"relative flex h-full",children:e.jsxs("div",{className:["flex flex-col w-full overflow-hidden transition-all",k&&l?"h-auto pb-3":"h-full"].join(" "),children:[e.jsxs("div",{className:"flex w-full items-center h-12 px-2",children:[l&&e.jsx(D,{icon:"filter_list",onClick:()=>$(a=>!a),disabled:r,"aria-label":k?"Hide filters":"Show filters","aria-expanded":k,className:"mr-2"}),e.jsx("input",{id:R,role:"combobox","aria-expanded":m,"aria-controls":T,"aria-autocomplete":"list","aria-disabled":r||void 0,type:"text",value:ee,onChange:a=>{const o=a.target.value;x(o),ae(o),m||h(!0),v(0)},onFocus:te,onKeyDown:ne,onBlur:()=>setTimeout(N,150),disabled:r,style:{fontFamily:"var(--font-display)",fontSize:"16px"},className:["w-full rounded-full border-0 outline-none bg-transparent h-12","leading-tight text-[var(--fg)] placeholder:text-[var(--muted-fg)]","px-2"].join(" "),placeholder:"Pesquisar",onClick:()=>!r&&h(!0)}),e.jsx(D,{icon:"search",onClick:n&&!m?re:()=>h(a=>!a),disabled:r,"aria-label":n&&!m?"Clear":m?"Collapse":"Expand"})]}),l&&e.jsx("div",{className:"w-full px-4.5 pb-3 pt-2",children:l})]})})})})}S.__docgenInfo={description:"",methods:[],displayName:"Search",props:{options:{required:!0,tsType:{name:"union",raw:"SearchOption[] | string[]",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: any;
  image?: string;
  group?: Array<{ name: string; image?: string }>;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"image",value:{name:"string",required:!1}},{key:"group",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; image?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!1}}]}}],raw:"Array<{ name: string; image?: string }>",required:!1}}]}}],raw:"SearchOption[]"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Array of options to display"},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:"Callback when search is performed (debounced)"},selectedOption:{required:!0,tsType:{name:"union",raw:"SearchOption | string | null",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: any;
  image?: string;
  group?: Array<{ name: string; image?: string }>;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"image",value:{name:"string",required:!1}},{key:"group",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; image?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!1}}]}}],raw:"Array<{ name: string; image?: string }>",required:!1}}]}},{name:"string"},{name:"null"}]},description:"Currently selected option"},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: SearchOption | string | null) => void",signature:{arguments:[{type:{name:"union",raw:"SearchOption | string | null",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: any;
  image?: string;
  group?: Array<{ name: string; image?: string }>;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"image",value:{name:"string",required:!1}},{key:"group",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; image?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!1}}]}}],raw:"Array<{ name: string; image?: string }>",required:!1}}]}},{name:"string"},{name:"null"}]},name:"option"}],return:{name:"void"}}},description:"Callback when an option is selected"},searchDelay:{required:!1,tsType:{name:"number"},description:"Search delay in milliseconds (default: 300ms)",defaultValue:{value:"300",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},maxHeight:{required:!1,tsType:{name:"number"},description:"Maximum height of the options dropdown",defaultValue:{value:"152",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Optional id base (for accessibility hooks)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional filter children to render when filters are expanded"},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};try{S.displayName="Search",S.__docgenInfo={description:"",displayName:"Search",props:{options:{defaultValue:null,description:"Array of options to display",name:"options",required:!0,type:{name:"string[] | SearchOption[]"}},onSearch:{defaultValue:null,description:"Callback when search is performed (debounced)",name:"onSearch",required:!0,type:{name:"(query: string) => void"}},selectedOption:{defaultValue:null,description:"Currently selected option",name:"selectedOption",required:!0,type:{name:"string | SearchOption | null"}},onSelect:{defaultValue:null,description:"Callback when an option is selected",name:"onSelect",required:!0,type:{name:"(option: string | SearchOption | null) => void"}},searchDelay:{defaultValue:{value:300},description:"Search delay in milliseconds (default: 300ms)",name:"searchDelay",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:!1},description:"Whether the component is disabled",name:"disabled",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:{value:152},description:"Maximum height of the options dropdown",name:"maxHeight",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"Optional id base (for accessibility hooks)",name:"id",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Optional filter children to render when filters are expanded",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const w=[{label:"Ada Lovelace",value:"ada",image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Alan Turing",value:"turing"},{label:"Grace Hopper",value:"hopper",image:"https://images.unsplash.com/photo-1545184180-25d471fe75d8?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Edsger Dijkstra",value:"dijkstra"},{label:"Barbara Liskov",value:"liskov"},{label:"Donald Knuth",value:"knuth"},{label:"Margaret Hamilton",value:"hamilton",image:"https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"John von Neumann",value:"neumann"},{label:"Gordon Moore",value:"moore"},{label:"Andy Grove",value:"grove"},{label:"Steve Jobs",value:"jobs",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Steve Wozniak",value:"wozniak"},{label:"Bill Gates",value:"gates",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Paul Allen",value:"allen"},{label:"Larry Page",value:"page"},{label:"Sergey Brin",value:"brin"},{label:"Jeff Bezos",value:"bezos"},{label:"Elon Musk",value:"musk",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Mark Zuckerberg",value:"zuckerberg"},{label:"Satya Nadella",value:"nadella"},{label:"Sundar Pichai",value:"pichai"},{label:"Jensen Huang",value:"huang"},{label:"Lisa Su",value:"su"}],me={title:"Components/Search",component:S,args:{options:w,selectedOption:null,disabled:!1,maxHeight:180,searchDelay:300}},C={render:c=>{const[s,p]=t.useState(c.selectedOption),[n,i]=t.useState([]),[u,r]=t.useState(!1),g=t.useCallback(d=>{d.trim()?(r(!0),setTimeout(()=>{const l=w.filter(f=>f.label.toLowerCase().includes(d.toLowerCase()));i(l),r(!1)},500)):(i([]),r(!1))},[]);return e.jsxs("div",{className:"max-w-md",children:[e.jsx(S,{...c,options:u?[]:n,selectedOption:s,onSelect:p,onSearch:g}),e.jsxs("div",{className:"mt-3 text-xs text-[var(--muted-fg)]",children:["Selected: ",typeof s=="string"?s:(s==null?void 0:s.label)??"none"]}),u&&e.jsx("div",{className:"mt-2 text-xs text-[var(--muted-fg)]",children:"🔍 Searching..."})]})}},j={args:{searchDelay:1e3},render:c=>{const[s,p]=t.useState(null),[n,i]=t.useState([]),[u,r]=t.useState(0),g=t.useCallback(d=>{if(r(l=>l+1),d.trim()){const l=w.filter(f=>f.label.toLowerCase().includes(d.toLowerCase()));i(l)}else i([])},[]);return e.jsxs("div",{className:"max-w-md",children:[e.jsx(S,{...c,options:n,selectedOption:s,onSelect:p,onSearch:g}),e.jsxs("div",{className:"mt-3 text-xs text-[var(--muted-fg)]",children:["Search calls made: ",u," (1 second delay)"]})]})}},A={args:{disabled:!0,options:w}},O={render:c=>{const[s,p]=t.useState(null),[n,i]=t.useState([]),[u,r]=t.useState(20),[g,d]=t.useState(20),[l,f]=t.useState(!1),[R,T]=t.useState(!1),L=t.useCallback(x=>{if(x.trim()){const m=w.filter(h=>h.label.toLowerCase().includes(x.toLowerCase()));i(m)}else i([])},[]);return e.jsxs("div",{className:"max-w-md",children:[e.jsx(S,{...c,options:n,selectedOption:s,onSelect:p,onSearch:L,children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(I,{value:u,onChange:r,min:1,max:100}),e.jsx(_,{variant:"label-lg",className:"mr-1",children:"Semantic Search – Top K"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:e.jsx(M,{name:"help",size:"sm",className:"text-[var(--muted-fg)] cursor-help"})}),l&&e.jsx("div",{className:"absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap",children:"lorem ipsum dolor sit amet"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(I,{value:g,onChange:d,min:1,max:100}),e.jsx(_,{variant:"label-lg",className:"mr-1",children:"Total Results"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:e.jsx(M,{name:"help",size:"sm",className:"text-[var(--muted-fg)] cursor-help"})}),R&&e.jsx("div",{className:"absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap",children:"lorem ipsum dolor sit amet"})]})]})]})}),e.jsxs("div",{className:"mt-3 text-xs text-[var(--muted-fg)]",children:["Selected: ",typeof s=="string"?s:(s==null?void 0:s.label)??"none"]}),e.jsxs("div",{className:"mt-1 text-xs text-[var(--muted-fg)]",children:["Top K: ",u,", Total Results: ",g]})]})}};var z,H,K;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    return <div className="max-w-md">
        <Search {...args} options={isSearching ? [] : results} selectedOption={value} onSelect={setValue} onSearch={handleSearch} />
        <div className="mt-3 text-xs text-[var(--muted-fg)]">
          Selected: {typeof value === "string" ? value : value?.label ?? "none"}
        </div>
        {isSearching && <div className="mt-2 text-xs text-[var(--muted-fg)]">
            🔍 Searching...
          </div>}
      </div>;
  }
}`,...(K=(H=C.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var P,U,W;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    return <div className="max-w-md">
        <Search {...args} options={results} selectedOption={value} onSelect={setValue} onSearch={handleSearch} />
        <div className="mt-3 text-xs text-[var(--muted-fg)]">
          Search calls made: {searchCount} (1 second delay)
        </div>
      </div>;
  }
}`,...(W=(U=j.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var B,F,G;A.parameters={...A.parameters,docs:{...(B=A.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options: SEARCH_RESULTS
  }
}`,...(G=(F=A.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,Q,Z;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
    return <div className="max-w-md">
        <Search {...args} options={results} selectedOption={value} onSelect={setValue} onSearch={handleSearch}>
          {/* Filter content */}
          <div className="flex flex-col gap-3">
            {/* Semantic Search - Top K */}
            <div className="flex items-center gap-3">
              <Counter value={topK} onChange={setTopK} min={1} max={100} />
              <Typo variant="label-lg" className="mr-1">Semantic Search – Top K</Typo>
              <div className="relative">
                <div onMouseEnter={() => setShowTooltip1(true)} onMouseLeave={() => setShowTooltip1(false)}>
                  <Icon name="help" size="sm" className="text-[var(--muted-fg)] cursor-help" />
                </div>
                {showTooltip1 && <div className="absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap">
                    lorem ipsum dolor sit amet
                  </div>}
              </div>
            </div>

            {/* Total Results */}
            <div className="flex items-center gap-3">
              <Counter value={totalResults} onChange={setTotalResults} min={1} max={100} />
              <Typo variant="label-lg" className="mr-1">Total Results</Typo>
              <div className="relative">
                <div onMouseEnter={() => setShowTooltip2(true)} onMouseLeave={() => setShowTooltip2(false)}>
                  <Icon name="help" size="sm" className="text-[var(--muted-fg)] cursor-help" />
                </div>
                {showTooltip2 && <div className="absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap">
                    lorem ipsum dolor sit amet
                  </div>}
              </div>
            </div>
          </div>
        </Search>
        <div className="mt-3 text-xs text-[var(--muted-fg)]">
          Selected: {typeof value === "string" ? value : value?.label ?? "none"}
        </div>
        <div className="mt-1 text-xs text-[var(--muted-fg)]">
          Top K: {topK}, Total Results: {totalResults}
        </div>
      </div>;
  }
}`,...(Z=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};const pe=["Playground","WithCustomDelay","Disabled","WithFilters"];export{A as Disabled,C as Playground,j as WithCustomDelay,O as WithFilters,pe as __namedExportsOrder,me as default};
