import{d as v,k as m,x as L,a as D,g as z,A as e,B as n,E as x,f as R,c as N,r as l,e as U,o as h,D as d,H as S}from"./vlib-DOiUgBZ7.js";import{u as V}from"./useView-CGRdY_8C.js";import{_ as B}from"./biddata-add-or-update.vue_vue_type_script_setup_true_lang-BKePbV5B.js";import"./quill-BosuxZz1.js";import"./index-DVgET6nB.js";import"./lodash-DNhsom2x.js";const H={class:"mod-ztb__biddata"},K=v({__name:"home",setup($){const c=m({deleteIsBatch:!0,getDataListURL:"/ztb/biddata/page",getDataListIsPage:!0,exportURL:"/ztb/biddata/export",deleteURL:"/ztb/biddata",dataForm:{keyword:""}}),a=m({...V(c),...L(c)}),s=D(),u=o=>{s.value.init(o)},_=o=>{o?window.open(o,"_blank"):S.error("无原文 url")};return(o,r)=>{const b=l("el-input"),g=l("el-form-item"),p=l("el-button"),f=l("el-form"),t=l("el-table-column"),w=l("el-table"),C=l("el-pagination"),k=U("loading");return h(),z("div",H,[e(f,{inline:!0,model:a.dataForm,onKeyup:r[2]||(r[2]=x(i=>a.getDataList(),["enter"]))},{default:n(()=>[e(g,null,{default:n(()=>[e(b,{modelValue:a.dataForm.keyword,"onUpdate:modelValue":r[0]||(r[0]=i=>a.dataForm.keyword=i),placeholder:"关键词",clearable:""},null,8,["modelValue"])]),_:1}),e(g,null,{default:n(()=>[e(p,{onClick:r[1]||(r[1]=i=>a.getDataList()),type:"primary"},{default:n(()=>[d("查询")]),_:1})]),_:1})]),_:1},8,["model"]),R((h(),N(w,{data:a.dataList,border:"",onSelectionChange:a.dataListSelectionChangeHandle,style:{width:"100%"}},{default:n(()=>[e(t,{type:"selection","header-align":"center",align:"center",width:"50"}),e(t,{prop:"title",label:"标题","header-align":"center",align:"center",width:"350",fixed:""}),e(t,{prop:"pathName",label:"栏目","header-align":"center",align:"center",width:"200"}),e(t,{prop:"publishDate",label:"发布时间","header-align":"center",align:"center",width:"200"}),e(t,{prop:"bidOpeningTime",label:"开标时间","header-align":"center",align:"center",width:"200"}),e(t,{prop:"districtName",label:"行政区划名称","header-align":"center",align:"center",width:"200"}),e(t,{prop:"districtNameList",label:"关联行政区划列表","header-align":"center",align:"center",width:"200"}),e(t,{prop:"purchaseName",label:"采购单位名称","header-align":"center",align:"center",width:"200"}),e(t,{prop:"invalidDate",label:"失效时间","header-align":"center",align:"center",width:"200"}),e(t,{prop:"budgetPrice",label:"预算金额（元）","header-align":"center",align:"center",width:"200"}),e(t,{prop:"supplierName",label:"供应商名称","header-align":"center",align:"center",width:"200"}),e(t,{prop:"totalContractAmount",label:"合同总金额（元）","header-align":"center",align:"center",width:"200"}),e(t,{prop:"year",label:"年份","header-align":"center",align:"center",width:"100"}),e(t,{prop:"monitorAmount",label:"监管金额（元）","header-align":"center",align:"center",width:"200"}),e(t,{prop:"smallAmount",label:"小额采购金额（元）","header-align":"center",align:"center",width:"200"}),e(t,{prop:"smallPercent",label:"小额采购占比（%）","header-align":"center",align:"center",width:"200"}),e(t,{label:"操作",fixed:"right","header-align":"center",align:"center",width:"150"},{default:n(i=>[e(p,{type:"primary",link:"",onClick:y=>u(i.row.id)},{default:n(()=>[d("详情")]),_:2},1032,["onClick"]),e(p,{type:"primary",link:"",onClick:y=>_(i.row.sourceUrl)},{default:n(()=>[d("查看原文")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[k,a.dataListLoading]]),e(C,{"current-page":a.page,"page-sizes":[10,20,50,100],"page-size":a.limit,total:a.total,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:a.pageSizeChangeHandle,onCurrentChange:a.pageCurrentChangeHandle},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"]),e(B,{ref_key:"addOrUpdateRef",ref:s,onRefreshDataList:a.getDataList},{default:n(()=>[d("确定")]),_:1},8,["onRefreshDataList"])])}}});export{K as default};
