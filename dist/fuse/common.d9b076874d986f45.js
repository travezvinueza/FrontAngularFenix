"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8592],{6557:(m,r,s)=>{s.d(r,{H:()=>n});var o=s(8288),t=s(4650),e=s(4880),c=s(6895);function a(l,i){1&l&&t.GkF(0)}const u=function(l){return{$implicit:l}};class n{constructor(i){this._fuseMediaWatcherService=i,this.items=[],this.distributedColumns=[]}ngOnChanges(i){"columns"in i&&this._distributeItems(),"items"in i&&this._distributeItems()}ngAfterViewInit(){this._distributeItems()}_distributeItems(){if(0!==this.items.length){this.distributedColumns=Array.from(Array(this.columns),i=>({items:[]}));for(let i=0;i<this.items.length;i++)this.distributedColumns[i%this.columns].items.push(this.items[i])}else this.distributedColumns=[]}static#t=this.\u0275fac=function(_){return new(_||n)(t.Y36(e.T))};static#s=this.\u0275cmp=t.Xpm({type:n,selectors:[["fuse-masonry"]],inputs:{columnsTemplate:"columnsTemplate",columns:"columns",items:"items"},exportAs:["fuseMasonry"],features:[t.TTD],decls:2,vars:4,consts:[[1,"flex"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(_,d){1&_&&(t.TgZ(0,"div",0),t.YNc(1,a,1,0,"ng-container",1),t.qZA()),2&_&&(t.xp6(1),t.Q6J("ngTemplateOutlet",d.columnsTemplate)("ngTemplateOutletContext",t.VKq(2,u,d.distributedColumns)))},dependencies:[c.tP],encapsulation:2,data:{animation:o.L}})}},3921:(m,r,s)=>{s.d(r,{O:()=>e});var o=s(6895),t=s(4650);class e{static#t=this.\u0275fac=function(u){return new(u||e)};static#s=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[o.ez]})}},3005:(m,r,s)=>{s.d(r,{K:()=>t});var o=s(4650);class t{constructor(){}transform(c,a,u){return Array.isArray(c)?c.map(n=>u.find(l=>l[a]===n)):u.find(n=>n[a]===c)}static#t=this.\u0275fac=function(a){return new(a||t)};static#s=this.\u0275pipe=o.Yjl({name:"fuseFindByKey",type:t,pure:!1})}},3190:(m,r,s)=>{s.d(r,{V:()=>e}),s(3005);var t=s(4650);class e{static#t=this.\u0275fac=function(u){return new(u||e)};static#s=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({})}},4485:(m,r,s)=>{s.d(r,{a:()=>o});class o{static isEmptyInputValue(e){return null==e||0===e.length}static mustMatch(e,c){return a=>{const u=a.get(e),n=a.get(c);if(!u||!n||(n.hasError("mustMatch")&&(delete n.errors.mustMatch,n.updateValueAndValidity()),this.isEmptyInputValue(n.value)||u.value===n.value))return null;const l={mustMatch:!0};return n.setErrors(l),l}}}}}]);