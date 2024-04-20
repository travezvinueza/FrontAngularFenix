"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[6611],{6611:(F,d,t)=>{t.r(d),t.d(d,{AdvancedSearchModule:()=>l,routes:()=>v});var n=t(1390),h=t(4859),u=t(6709),c=t(9549),f=t(284),p=t(4385),g=t(921),x=t(4466),m=t(1281),A=t(7579),Z=t(2722),e=t(4650),o=t(4006),y=t(3238),T=t(9572),b=t(6895);class i{constructor(s,r,a){this._activatedRoute=s,this._formBuilder=r,this._router=a,this.searchFormDefaults={keywords:"",type:"any",isTrashed:!1,isArchived:!1,isStarred:!1},this._unsubscribeAll=new A.x,this.searchForm=this._formBuilder.group({keywords:[this.searchFormDefaults.keywords],type:[this.searchFormDefaults.type],isTrashed:[this.searchFormDefaults.isTrashed],isArchived:[this.searchFormDefaults.isArchived],isStarred:[this.searchFormDefaults.isStarred]})}ngOnInit(){this._activatedRoute.queryParams.pipe((0,Z.R)(this._unsubscribeAll)).subscribe(s=>{this.queryParams=s,this.searchForm.setValue({keywords:s?.keywords??this.searchFormDefaults.keywords,type:s?.type??this.searchFormDefaults.type,isTrashed:s?.isTrashed?(0,m.Ig)(s?.isTrashed):this.searchFormDefaults.isTrashed,isArchived:s?.isArchived?(0,m.Ig)(s?.isArchived):this.searchFormDefaults.isArchived,isStarred:s?.isStarred?(0,m.Ig)(s?.isStarred):this.searchFormDefaults.isStarred},{emitEvent:!1})})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}reset(){this.searchForm.reset(this.searchFormDefaults)}search(){this._router.navigate(["./"],{queryParams:this.searchForm.value,relativeTo:this._activatedRoute})}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(n.gz),e.Y36(o.QS),e.Y36(n.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["advanced-search"]],decls:64,vars:20,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-3xl"],[1,"max-w-3xl","prose","prose-sm"],[1,"flex","flex-col","items-start","w-full","max-w-3xl","mt-8","p-8","space-y-8","rounded-2xl","shadow","overflow-hidden","bg-card",3,"formGroup"],[1,"w-full",3,"subscriptSizing"],["matInput","",3,"autocomplete","formControlName"],[3,"formControlName"],[3,"value"],[1,"flex","flex-col","items-start","-ml-2"],[3,"color","formControlName"],[1,"flex","items-center","justify-end","w-full","mt-8"],["type","button","mat-button","",3,"click"],["type","button","mat-flat-button","",1,"ml-2",3,"color","click"],[1,"dark","w-full","mt-8","p-4","rounded-2xl","overflow-hidden"],["fuse-highlight","",3,"code","lang"]],template:function(r,a){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e._uU(6,"User Interface"),e.qZA()()(),e.TgZ(7,"div",5)(8,"h2",6),e._uU(9," Advanced Search "),e.qZA()()()(),e.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"p"),e._uU(14," This page demonstrates a query parameters based search using Angular's built-in "),e.TgZ(15,"code"),e._uU(16,"routerLink"),e.qZA(),e._uU(17," directive and its "),e.TgZ(18,"code"),e._uU(19,"queryParams"),e.qZA(),e._uU(20," input. "),e.qZA(),e.TgZ(21,"p"),e._uU(22," Fill the form, hit the "),e.TgZ(23,"strong"),e._uU(24,"Search"),e.qZA(),e._uU(25," button and then observe the address bar of your browser. If you reload the page with the parameters, you will see that the form will be populated automatically. We also added an output window so you can observe the query parameters object. "),e.qZA(),e.TgZ(26,"p"),e._uU(27," This method can be used for implementing "),e.TgZ(28,"em"),e._uU(29,"Advanced search"),e.qZA(),e._uU(30," mechanics as well as "),e.TgZ(31,"em"),e._uU(32,"Filtering"),e.qZA(),e._uU(33," similar to the products filtering that you can find in most eCommerce websites. "),e.qZA()(),e.TgZ(34,"form",10)(35,"mat-form-field",11)(36,"mat-label"),e._uU(37,"Keywords"),e.qZA(),e._UZ(38,"input",12),e.qZA(),e.TgZ(39,"mat-form-field",11)(40,"mat-label"),e._uU(41,"Type"),e.qZA(),e.TgZ(42,"mat-select",13)(43,"mat-option",14),e._uU(44,"Any"),e.qZA(),e.TgZ(45,"mat-option",14),e._uU(46,"Files"),e.qZA(),e.TgZ(47,"mat-option",14),e._uU(48,"Folders"),e.qZA()()(),e.TgZ(49,"div",15)(50,"mat-checkbox",16),e._uU(51," In trash "),e.qZA(),e.TgZ(52,"mat-checkbox",16),e._uU(53," Archived "),e.qZA(),e.TgZ(54,"mat-checkbox",16),e._uU(55," Starred "),e.qZA()(),e.TgZ(56,"div",17)(57,"button",18),e.NdJ("click",function(){return a.reset()}),e._uU(58,"Reset "),e.qZA(),e.TgZ(59,"button",19),e.NdJ("click",function(){return a.search()}),e._uU(60,"Search "),e.qZA()()(),e.TgZ(61,"div",20),e._UZ(62,"textarea",21),e.ALo(63,"json"),e.qZA()()()()),2&r&&(e.xp6(34),e.Q6J("formGroup",a.searchForm),e.xp6(1),e.Q6J("subscriptSizing","dynamic"),e.xp6(3),e.Q6J("autocomplete","off")("formControlName","keywords"),e.xp6(1),e.Q6J("subscriptSizing","dynamic"),e.xp6(3),e.Q6J("formControlName","type"),e.xp6(1),e.Q6J("value","any"),e.xp6(2),e.Q6J("value","files"),e.xp6(2),e.Q6J("value","folders"),e.xp6(3),e.Q6J("color","primary")("formControlName","isTrashed"),e.xp6(2),e.Q6J("color","primary")("formControlName","isArchived"),e.xp6(2),e.Q6J("color","primary")("formControlName","isStarred"),e.xp6(5),e.Q6J("color","primary"),e.xp6(3),e.Q6J("code",e.lcZ(63,18,a.queryParams))("lang","json"))},dependencies:[h.lW,u.oG,c.KE,c.hX,f.Nt,p.gD,y.ey,T.L,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,b.Ts],encapsulation:2,changeDetection:0})}const v=[{path:"",component:i}];class l{static#e=this.\u0275fac=function(r){return new(r||l)};static#t=this.\u0275mod=e.oAB({type:l});static#s=this.\u0275inj=e.cJS({imports:[n.Bz.forChild(v),h.ot,u.p9,c.lN,f.c,p.LD,g.$A,x.m]})}}}]);