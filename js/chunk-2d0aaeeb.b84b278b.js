(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aaeeb"],{"12b6":function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{attrs:{id:"archive"}},[a("v-layout",{attrs:{wrap:"",column:""}},[a("v-flex",[a("v-chip",{class:{"v-chip--selected":!e.selectLabel},attrs:{color:"primary",outline:"",small:"",label:""},on:{click:function(l){e.selectLabel=void 0}}},[e._v("ALL")]),e._l(e.labels,function(l){return a("v-chip",{key:l.name,class:{"v-chip--selected":e.selectLabel===l.name},attrs:{color:"#"+l.color,outline:"",small:"",label:""},on:{click:function(a){e.selectLabel=l.name}}},[e._v(e._s(l.name))])})],2),a("v-divider",{staticClass:"my-3"}),a("v-flex",[a("Blog",{attrs:{filter:e.selectLabel}})],1)],1)],1)},c=[],n=a("3d68"),s={name:"archive",data:function(){return{selectLabel:null}},computed:{labels:function(){return this.$store.state.labels}},components:{Blog:n["a"]}},i=s,o=a("2877"),r=a("6544"),u=a.n(r),v=a("cc20"),b=a("ce7e"),d=a("0e8f"),p=a("a722"),f=Object(o["a"])(i,t,c,!1,null,null,null);l["default"]=f.exports;u()(f,{VChip:v["a"],VDivider:b["a"],VFlex:d["a"],VLayout:p["a"]})}}]);