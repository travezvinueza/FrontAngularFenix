"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3179],{9602:(C,m,s)=>{s.d(m,{y:()=>n});var l=s(1281),p=s(8288),t=s(4650),d=s(6895);function x(f,e){1&f&&(t.ynx(0),t.TgZ(1,"div",1),t.Hsn(2),t.qZA(),t.TgZ(3,"div",2),t.Hsn(4,1),t.qZA(),t.BQk())}function h(f,e){1&f&&(t.TgZ(0,"div",4),t.Hsn(1,3),t.qZA()),2&f&&t.Q6J("@expandCollapse",void 0)}function v(f,e){if(1&f&&(t.ynx(0),t.Hsn(1,2),t.YNc(2,h,2,1,"div",3),t.BQk()),2&f){const c=t.oxw();t.xp6(2),t.Q6J("ngIf",c.expanded)}}const b=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],Z=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];class n{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}ngOnChanges(e){"expanded"in e&&(this.expanded=(0,l.Ig)(e.expanded.currentValue)),"flippable"in e&&(this.flippable=(0,l.Ig)(e.flippable.currentValue))}static#e=this.\u0275fac=function(c){return new(c||n)};static#t=this.\u0275cmp=t.Xpm({type:n,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(c,g){2&c&&t.Tol(g.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],features:[t.TTD],ngContentSelectors:Z,decls:2,vars:2,consts:[[4,"ngIf"],[1,"fuse-card-front"],[1,"fuse-card-back"],["class","fuse-card-expansion",4,"ngIf"],[1,"fuse-card-expansion"]],template:function(c,g){1&c&&(t.F$t(b),t.YNc(0,x,5,0,"ng-container",0),t.YNc(1,v,3,1,"ng-container",0)),2&c&&(t.Q6J("ngIf",g.flippable),t.xp6(1),t.Q6J("ngIf",!g.flippable))},dependencies:[d.O5],styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:p.L}})}},5804:(C,m,s)=>{s.d(m,{y:()=>l.y,J:()=>d});var l=s(9602),p=s(6895),t=s(4650);class d{static#e=this.\u0275fac=function(v){return new(v||d)};static#t=this.\u0275mod=t.oAB({type:d});static#s=this.\u0275inj=t.cJS({imports:[p.ez]})}},3179:(C,m,s)=>{s.r(m),s.d(m,{AuthUnlockSessionModule:()=>y});var l=s(1390),p=s(4859),t=s(9549),d=s(7392),x=s(284),h=s(1572),v=s(5804),b=s(7775),Z=s(4466),n=s(4006),f=s(8288),e=s(4650),c=s(8951),g=s(7495),U=s(8214),T=s(6895);const _=["unlockSessionNgForm"];function S(i,o){if(1&i&&(e.TgZ(0,"fuse-alert",40),e._uU(1),e.qZA()),2&i){const a=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",a.alert.type)("@shake","error"===a.alert.type),e.xp6(1),e.hij(" ",a.alert.message," ")}}function F(i,o){1&i&&e._UZ(0,"mat-icon",41),2&i&&e.Q6J("svgIcon","heroicons_solid:eye")}function I(i,o){1&i&&e._UZ(0,"mat-icon",41),2&i&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function J(i,o){1&i&&(e.TgZ(0,"span"),e._uU(1," Unlock your session "),e.qZA())}function Q(i,o){1&i&&e._UZ(0,"mat-progress-spinner",42),2&i&&e.Q6J("diameter",24)("mode","indeterminate")}const N=function(){return["/sign-out"]};class w{constructor(o,a,r,u,k){this._activatedRoute=o,this._authService=a,this._formBuilder=r,this._router=u,this._userService=k,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this._userService.user$.subscribe(o=>{this.name=o.name,this._email=o.email}),this.unlockSessionForm=this._formBuilder.group({name:[{value:this.name,disabled:!0}],password:["",n.kI.required]})}unlock(){this.unlockSessionForm.invalid||(this.unlockSessionForm.disable(),this.showAlert=!1,this._authService.unlockSession({email:this._email??"",password:this.unlockSessionForm.get("password").value}).subscribe(()=>{const o=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(o)},o=>{this.unlockSessionForm.enable(),this.unlockSessionNgForm.resetForm({name:{value:this.name,disabled:!0}}),this.alert={type:"error",message:"Invalid password"},this.showAlert=!0}))}static#e=this.\u0275fac=function(a){return new(a||w)(e.Y36(l.gz),e.Y36(c.e),e.Y36(n.QS),e.Y36(l.F0),e.Y36(g.K))};static#t=this.\u0275cmp=e.Xpm({type:w,selectors:[["auth-unlock-session"]],viewQuery:function(a,r){if(1&a&&e.Gf(_,5),2&a){let u;e.iGM(u=e.CRH())&&(r.unlockSessionNgForm=u.first)}},decls:60,vars:13,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["unlockSessionNgForm","ngForm"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(a,r){if(1&a){const u=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Unlock your session"),e.qZA(),e.TgZ(7,"div",6),e._uU(8,"Your session is locked due to inactivity"),e.qZA(),e.YNc(9,S,2,5,"fuse-alert",7),e.TgZ(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),e._uU(14,"Full name"),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.TgZ(16,"mat-form-field",10)(17,"mat-label"),e._uU(18,"Password"),e.qZA(),e._UZ(19,"input",12,13),e.TgZ(21,"button",14),e.NdJ("click",function(){e.CHM(u);const A=e.MAs(20);return e.KtG(A.type="password"===A.type?"text":"password")}),e.YNc(22,F,1,1,"mat-icon",15),e.YNc(23,I,1,1,"mat-icon",15),e.qZA(),e.TgZ(24,"mat-error"),e._uU(25," Password is required "),e.qZA()(),e.TgZ(26,"button",16),e.NdJ("click",function(){return r.unlock()}),e.YNc(27,J,2,0,"span",17),e.YNc(28,Q,1,2,"mat-progress-spinner",18),e.qZA(),e.TgZ(29,"div",19)(30,"span"),e._uU(31,"I'm not"),e.qZA(),e.TgZ(32,"a",20),e._uU(33),e.qZA()()()()(),e.TgZ(34,"div",21),e.O4$(),e.TgZ(35,"svg",22)(36,"g",23),e._UZ(37,"circle",24)(38,"circle",25),e.qZA()(),e.TgZ(39,"svg",26)(40,"defs")(41,"pattern",27),e._UZ(42,"rect",28),e.qZA()(),e._UZ(43,"rect",29),e.qZA(),e.kcU(),e.TgZ(44,"div",30)(45,"div",31)(46,"div"),e._uU(47,"Welcome to"),e.qZA(),e.TgZ(48,"div"),e._uU(49,"our community"),e.qZA()(),e.TgZ(50,"div",32),e._uU(51," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(52,"div",33)(53,"div",34),e._UZ(54,"img",35)(55,"img",36)(56,"img",37)(57,"img",38),e.qZA(),e.TgZ(58,"div",39),e._uU(59,"More than 17k people joined us, it's your turn"),e.qZA()()()()()}if(2&a){const u=e.MAs(20);e.xp6(9),e.Q6J("ngIf",r.showAlert),e.xp6(1),e.Q6J("formGroup",r.unlockSessionForm),e.xp6(5),e.Q6J("formControlName","name"),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===u.type),e.xp6(1),e.Q6J("ngIf","text"===u.type),e.xp6(3),e.Q6J("color","primary")("disabled",r.unlockSessionForm.disabled),e.xp6(1),e.Q6J("ngIf",!r.unlockSessionForm.disabled),e.xp6(1),e.Q6J("ngIf",r.unlockSessionForm.disabled),e.xp6(4),e.Q6J("routerLink",e.DdM(12,N)),e.xp6(1),e.Oqu(r.name)}},dependencies:[l.rH,p.lW,p.RK,t.KE,t.hX,t.TO,t.R9,d.Hw,x.Nt,h.Ou,U.W,T.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u],encapsulation:2,data:{animation:f.L}})}const Y=[{path:"",component:w}];class y{static#e=this.\u0275fac=function(a){return new(a||y)};static#t=this.\u0275mod=e.oAB({type:y});static#s=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(Y),p.ot,t.lN,d.Ps,x.c,h.Cq,v.J,b.fC,Z.m]})}}}]);