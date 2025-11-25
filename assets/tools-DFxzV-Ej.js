import{_ as b,c,o as r,b as t,d as f,t as l,F as x,r as k,h as _}from"./index-J4qdpyZZ.js";const F={name:"AvatarCropper",data(){return{}},mounted(){console.log("头像裁剪工具已加载")},methods:{}},I={class:"avatar-cropper"};function w(i,e,s,n,o,m){return r(),c("div",I,[...e[0]||(e[0]=[t("h2",null,"头像裁剪工具",-1),t("p",null,"使用外部工具进行头像裁剪",-1),t("div",{class:"iframe-container"},[t("iframe",{src:"https://pma934.github.io/tool-demo/#/uploadHead",frameborder:"0",class:"avatar-iframe",allowfullscreen:""})],-1)])])}const N=b(F,[["render",w],["__scopeId","data-v-341e9fd7"]]),S=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),C={name:"IconReader",data(){return{loading:!1,error:"",icons:[],selectedIcon:null,fontName:"custom-icon-font",currentFileName:"",fontUrl:null}},methods:{handleFileUpload(i){const e=i.target.files[0];if(!e)return;if(!["image/svg+xml","font/ttf","font/woff","application/font-woff"].includes(e.type)&&!e.name.match(/\.(svg|ttf|woff)$/i)){this.error="不支持的文件类型，请上传 SVG、TTF 或 WOFF 格式的图标文件";return}this.loading=!0,this.error="",this.icons=[],this.selectedIcon=null,this.currentFileName=e.name;const n=new FileReader;e.name.endsWith(".svg")?(n.onload=o=>{this.parseSVG(o.target.result,e.name),this.loading=!1},n.readAsText(e)):(n.onload=o=>{this.parseFont(o.target.result,e.name,e.type),this.loading=!1},n.readAsArrayBuffer(e))},parseSVG(i,e){try{const n=new DOMParser().parseFromString(i,"image/svg+xml"),o=n.querySelector("font");o&&(this.fontName=o.getAttribute("id")||"custom-icon-font");const m=n.querySelectorAll("glyph");if(m.length===0){this.error="未在SVG文件中找到图标元素";return}this.icons=[],m.forEach((a,p)=>{const d=a.getAttribute("unicode"),u=a.getAttribute("glyph-name"),h=a.getAttribute("d");if(!d||!h||d==="&#x20;")return;let g=d,y=d;if(d.startsWith("&#x")){const v=d.substring(3,d.length-1);y=`\\u${v}`,g=String.fromCharCode(parseInt(v,16))}this.icons.push({name:u||`icon-${p}`,unicode:g,unicodeHex:y,d:h,className:`icon-${u||`icon-${p}`}`})}),this.addFontStyles()}catch(s){this.error=`解析SVG文件时出错: ${s.message}`,console.error("SVG解析错误:",s)}},parseFont(i,e,s){try{const n=new Blob([i],{type:s});this.fontUrl=URL.createObjectURL(n),this.addFontToPage(this.fontUrl,this.fontName,s),this.icons=[{name:"example-icon-1",className:"icon-example-icon-1",type:s.split("/")[1]},{name:"example-icon-2",className:"icon-example-icon-2",type:s.split("/")[1]},{name:"example-icon-3",className:"icon-example-icon-3",type:s.split("/")[1]},{name:"example-icon-4",className:"icon-example-icon-4",type:s.split("/")[1]},{name:"example-icon-5",className:"icon-example-icon-5",type:s.split("/")[1]}],this.error="提示：由于没有引入字体解析库，显示的是模拟数据。在实际项目中，建议引入opentype.js或fontkit等库来正确解析TTF和WOFF文件。"}catch(n){this.error=`解析字体文件时出错: ${n.message}`,console.error("字体解析错误:",n)}},addFontToPage(i,e,s){let n=document.getElementById("custom-icon-font-style");n||(n=document.createElement("style"),n.id="custom-icon-font-style",document.head.appendChild(n)),n.textContent=`
        @font-face {
          font-family: '${e}';
          src: url('${i}') format('${s.includes("ttf")?"truetype":"woff"}');
          font-weight: normal;
          font-style: normal;
        }
        
        .icon-font {
          font-family: '${e}' !important;
          speak: none;
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* 模拟的图标类 */
        .icon-example-icon-1:before { content: "\\e001"; }
        .icon-example-icon-2:before { content: "\\e002"; }
        .icon-example-icon-3:before { content: "\\e003"; }
        .icon-example-icon-4:before { content: "\\e004"; }
        .icon-example-icon-5:before { content: "\\e005"; }
      `},addFontStyles(){let i=document.getElementById("custom-icon-font-style");i||(i=document.createElement("style"),i.id="custom-icon-font-style",document.head.appendChild(i));let e=`
        @font-face {
          font-family: '${this.fontName}';
          src: url('/src/assets/fonts/icomoon.eot');
          src: url('/src/assets/fonts/icomoon.eot?#iefix') format('embedded-opentype'),
               url('/src/assets/fonts/icomoon.ttf') format('truetype'),
               url('/src/assets/fonts/icomoon.woff') format('woff'),
               url('/src/assets/fonts/icomoon.svg#${this.fontName}') format('svg');
          font-weight: normal;
          font-style: normal;
          font-display: block;
        }
        
        .icon-font {
          font-family: '${this.fontName}' !important;
          speak: none;
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `;this.icons.forEach(s=>{let n="";s.unicodeHex.startsWith("\\u")?n=s.unicodeHex.substring(2):s.unicodeHex.startsWith("&#x")&&(n=s.unicodeHex.substring(3,s.unicodeHex.length-1)),n&&(e+=`
        .icon-${s.name}:before {
          content: "\\${n}";
        }
          `)}),i.textContent=e},selectIcon(i){this.selectedIcon=i}},beforeDestroy(){this.fontUrl&&URL.revokeObjectURL(this.fontUrl);const i=document.getElementById("custom-icon-font-style");i&&document.head.removeChild(i)}},U={class:"icon-reader"},O={class:"upload-section"},E={class:"upload-container"},A={key:0,class:"loading-state"},H={key:1,class:"error-message"},V={key:2,class:"stats-section"},j={class:"stats-item"},B={class:"stats-value"},R={class:"stats-item"},L={class:"stats-value"},T={class:"stats-item"},G={class:"stats-value"},W={key:3,class:"icons-grid-section"},M={class:"icons-grid"},$=["onClick"],z={class:"icon-preview"},P={class:"icon-info"},D={class:"icon-name"},q={class:"icon-unicode"},J={key:0,class:"icon-selected"},K={key:4,class:"icon-details"},Q={class:"detail-grid"},X={class:"detail-item"},Y={class:"detail-item"},Z={class:"detail-item"},ee={class:"detail-item"},te={class:"detail-item"},oe={class:"detail-preview"},ne={class:"large-preview"};function se(i,e,s,n,o,m){return r(),c("div",U,[e[15]||(e[15]=t("h2",null,"图标读取工具",-1)),e[16]||(e[16]=t("p",null,"读取图标文件并显示图标及其对应的名称",-1)),t("div",O,[t("div",E,[t("input",{type:"file",ref:"fileInput",accept:".svg,.ttf,.woff",onChange:e[0]||(e[0]=(...a)=>m.handleFileUpload&&m.handleFileUpload(...a)),class:"file-input"},null,544),e[1]||(e[1]=t("label",{for:"fileInput",class:"upload-label"},[t("div",{class:"upload-icon"},[t("i",{class:"icon-upload"})]),t("div",{class:"upload-text"},[t("span",null,"点击或拖拽文件到此处上传"),t("small",null,"支持 SVG、TTF、WOFF 格式的图标文件")])],-1))])]),o.loading?(r(),c("div",A,[...e[2]||(e[2]=[t("div",{class:"loading-spinner"},null,-1),t("p",null,"正在解析文件...",-1)])])):f("",!0),o.error?(r(),c("div",H,[e[3]||(e[3]=t("i",{class:"icon-exclamation-circle"},null,-1)),t("span",null,l(o.error),1)])):f("",!0),o.icons.length>0?(r(),c("div",V,[t("div",j,[e[4]||(e[4]=t("span",{class:"stats-label"},"总图标数：",-1)),t("span",B,l(o.icons.length),1)]),t("div",R,[e[5]||(e[5]=t("span",{class:"stats-label"},"字体名称：",-1)),t("span",L,l(o.fontName),1)]),t("div",T,[e[6]||(e[6]=t("span",{class:"stats-label"},"当前文件：",-1)),t("span",G,l(o.currentFileName),1)])])):f("",!0),o.icons.length>0?(r(),c("div",W,[t("div",M,[(r(!0),c(x,null,k(o.icons,(a,p)=>(r(),c("div",{key:p,class:"icon-item",onClick:d=>m.selectIcon(a)},[t("div",z,[t("span",{class:_(["icon-font","icon-"+a.name])},null,2)]),t("div",P,[t("div",D,l(a.name),1),t("div",q,"\\"+l(a.unicodeHex),1)]),o.selectedIcon&&o.selectedIcon.name===a.name?(r(),c("div",J,[...e[7]||(e[7]=[t("i",{class:"icon-check"},null,-1)])])):f("",!0)],8,$))),128))])])):f("",!0),o.selectedIcon?(r(),c("div",K,[e[14]||(e[14]=t("h3",null,"图标详情",-1)),t("div",Q,[t("div",X,[e[8]||(e[8]=t("label",null,"图标名称：",-1)),t("span",null,l(o.selectedIcon.name),1)]),t("div",Y,[e[9]||(e[9]=t("label",null,"Unicode：",-1)),t("span",null,l(o.selectedIcon.unicode)+" ("+l(o.selectedIcon.unicodeHex)+")",1)]),t("div",Z,[e[10]||(e[10]=t("label",null,"CSS类名：",-1)),t("span",null,".icon-"+l(o.selectedIcon.name),1)]),t("div",ee,[e[11]||(e[11]=t("label",null,"HTML代码：",-1)),t("span",null,'<i class="icon-'+l(o.selectedIcon.name)+'"></i>',1)]),t("div",te,[e[12]||(e[12]=t("label",null,"字体文件：",-1)),t("span",null,l(o.currentFileName),1)])]),t("div",oe,[e[13]||(e[13]=t("label",null,"预览：",-1)),t("div",ne,[t("span",{class:_(["icon-font","icon-"+o.selectedIcon.name])},null,2)])])])):f("",!0)])}const ie=b(C,[["render",se],["__scopeId","data-v-fab3fc64"]]),le=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),ce=Object.assign({"./toolsComponents/AvatarCropper.vue":S,"./toolsComponents/IconReader.vue":le}),re=[{id:"all",name:"全部工具"},{id:"text",name:"文本工具"},{id:"image",name:"图片工具"},{id:"code",name:"代码工具"},{id:"other",name:"其他工具"}],de=[{title:"图标读取工具",description:"读取图标文件并显示图标",icon:"icon-type",category:"text",path:"icon-reader"},{title:"头像截取工具",description:"将图片截取为多种形状头像格式",icon:"icon-strike",category:"image",path:"avatar-cropper"},{title:"Markdown编辑器",description:"简单易用的Markdown编辑工具",icon:"icon-markdown",category:"text",path:"markdown"},{title:"代码格式化",description:"支持多种编程语言的代码格式化",icon:"icon-code",category:"code",path:"code-formatter"},{title:"图片压缩",description:"在线图片压缩工具，保持质量",icon:"icon-image",category:"image",path:"image-compress"},{title:"文本对比",description:"对比两段文本的差异",icon:"icon-diff",category:"text",path:"text-diff"},{title:"Base64编码",description:"Base64编码解码工具",icon:"icon-base64",category:"code",path:"base64"},{title:"JSON格式化",description:"美化JSON数据格式",icon:"icon-json",category:"code",path:"json-formatter"},{title:"随机数生成",description:"生成指定范围的随机数",icon:"icon-random",category:"other",path:"random"},{title:"URL编码",description:"URL地址编码解码",icon:"icon-link",category:"code",path:"url-encode"},{title:"颜色选择器",description:"选择和转换颜色值",icon:"icon-color",category:"other",path:"color-picker"}];export{ce as a,re as c,de as t};
