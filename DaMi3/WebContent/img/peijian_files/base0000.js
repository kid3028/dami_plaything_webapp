﻿eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([467a-cfhj-mo-ruwzA-CE-WZ]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6(){a o=f.o||{};o={1E:6(){f.o=o},1F:{},UI:{},1e:{},Page:{}};o.1F={Verify:{V:6(r,W){r=L 1G(r);4 r.test(W)},IsEmpty:6(x){4 B x!="Z"?w:(x.1f()!=""?w:1g)},IsTelephone:6(x){7(B x=="10"){4 w}a r=/^(\\((\\d{2,5})\\)|\\d{2,5})?(\\s*)(-?)(\\s*)(\\d{5,9})$/;4 b.V(r,x)},IsPhone:6(x){7(B x=="10"){4 w}a r=/^(\\+86)?1[3,5,8](\\d{9})$/;4 b.V(r,x)},IsIdentityCode:6(x){7(B x=="10"){4 w}a r=/^[1-9](\\d{5})(([1-9]\\d)|([1,2](\\d{3})))(0[1-9]|1[0,2])(0[1-9]|[1,2]\\d|3[0,1])(\\d{3})([0-9Xx]+)$/;4 b.V(r,x)}}};o.UI={MousePosition:6(e){e=e||f.event;a X=e.pageX||e.clientX+z.1h.scrollLeft,Y=e.pageY||e.clientY+z.1h.1i;4{positionX:X,positionY:Y}},GetArea:6(M){7(M.selector=="z"){4{p:$(z).p(),q:$(z).q()}}7(M.1j("1H")!="hidden"){4{p:M.p(),q:M.q()}}a 11=M.clone();11.1j({"display":"block","position":"absolute","1H":"visible"});4{p:11.p(),q:11.q()}},1I:{1J:6(1k){7(f.1K){12("复制成功！");4(f.1K.1L("Text",1k))}1l 7(f.1M){1N{1M.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}1O(e){12("被浏览器拒绝！\\n请在浏览器地址栏输入\'about:config\'并回车\\n然后将 \'signed.applets.codebase_principal_support\'设置为\'1g\'")};a 13=H.1m[\'@1n.1o/1P/clipboard;1\'].1p(H.14.1Q);7(!13)4;a T=H.1m[\'@1n.1o/1P/transferable;1\'].1p(H.14.nsITransferable);7(!T)4;T.addDataFlavor(\'W/1R\');a N=L 1q();a len=L 1q();a N=H.1m["@1n.1o/supports-Z;1"].1p(H.14.nsISupportsString);a 1r=1k;N.data=1r;T.setTransferData("W/1R",N,1r.O*2);a 1S=H.14.1Q;7(!13)4 w;13.1L(T,15,1S.kGlobalClipboard)}12("复制成功！");4 w},bindEvent:6(1s,1t){7(1s.O==0||1t.O==0){4 w}1s.1u("1T",6(){a j=1t.val();o.UI.1I.1J(j)})}},1v:6(1w,A,h){7(arguments.O>1&&1U(A)!=="[1V 1q]"){h=jQuery.1W({},h);7(A===15||A===10){h.I=-1}7(B h.I===\'number\'){a 1X=h.I,t=h.I=L Date();t.setDate(t.getDate()+1X)}A=1U(A);4(z.1v=[u(1w),\'=\',h.1Y?A:u(A),h.I?\'; I=\'+h.I.toUTCString():\'\',h.1x?\'; 1x=\'+h.1x:\'\',h.1y?\'; 1y=\'+h.1y:\'\',h.1Z?\'; 1Z\':\'\'].join(\'\'))}h=A||{};a 1z,20=h.1Y?6(s){4 s}:decodeURIComponent;4(1z=L 1G(\'(?:^|; )\'+u(1w)+\'=([^;]*)\').exec(z.1v))?20(1z[1]):15}};o.1e={getBLength:6(s){4 $.1f(s).1A(/[^\\21-\\22]/g,\'**\').O},getWLength:6(N){4 23.ceil($.1f(N).1A(/[^\\21-\\22]/g,\'**\').O/2)},lazyload:6(24){a C={P:15,16:0};C=$.1W(C,24||{});a 16=C.16,P=(B C.P=="1V")?C.P.25("26"):$(C.P).25("26");a 27=6(){a d=z,y=(navigator.userAgent.toLowerCase().match(/iPad/i)=="ipad")?f.pageYOffset:23.max(d.28.1i,d.1h.1i);4 d.28.clientHeight+y-C.16};a 1B=6(){P.each(6(){7($(b).offset().top<=27()){a U=$(b).29("U");7(U){$(b).1j({"2a":"0.3"}).29("src",U).removeAttr("U").animate({"2a":"1"})}}})};1B();$(f).1u("scroll",6(){1B()})},2b:{17:6(k,c){7(B k!="Z"||B c!="Z"){4 w}1N{7(f.2c){f.2c.addPanel(k,c,"")}1l 7(z.all){f.external.17(c,k)}1l 7(f.opera&&f.print){4 1g}}1O(e){12("您的浏览器相关文件已缺失或损坏,请按Ctrl+D将小米的网址添加到您的收藏夹/书签中")}}},17:6(2d){2d.1u("1T",6(){o.1e.2b.17("小米手机","E://18.2e.F/")})},Share:(6(){a 19=6(){b.c="";b.G="";b.k="";b.j="";b.l="";b.J="?l="};19.2f.2g=6(){7(b.c.indexOf("?")>=0){b.J="&l="}a c=u(b.c),G=u(b.G),k=u(b.k),j=u(b.j),l=u(b.l),J=u(b.J);4{c:c,G:G,k:k,j:j,l:l,J:J}};19.2f.To=6(K,l){l=l||b.l;a normal=b,m=b.2g(),c=l==""?m.c:m.c+m.J+l;7(K=="tsina"){f.Q("E://v.t.sina.F.cn/R/R.1C?c="+c+"&appkey=2674876054&k="+m.j+"&1D="+m.G,"S","q=1a,p=1b");4}7(K=="2h"){f.Q("E://18.connect.2h.F/R/sharer?c="+c+"&k="+m.j,"S","S","q=1a,p=1b");4}7(K=="kaixin"){f.Q("E://18.kaixin001.F/repaste/R.1C?rtitle="+m.j+"&rcontent="+m.j+"&rurl="+c);4}7(K=="tqq"){f.Q("E://v.t.qq.F/R/R.1C?l=a207af85abfc489a835c773edc260832&site=E://18.2e.F&k="+m.j+"&1D="+m.G+"&c="+c,"S","q=600,p:500");4}7(K=="tsohu"){a 1c=b.j.1A("@小米手机","@小米手机");1c=u(1c);f.Q("E://t.sohu.F/third/post.jsp?c="+c+"&k="+1c+"&j=utf-8&1D="+m.G,"S","q=1a,p=1b");4}7(K=="2j"){f.Q("E://sns.2j.qq.F/cgi-bin/qzshare/cgi_qzshare_onekey?c="+c+"&k="+m.j,"S","q=1a,p=1b");4}};4 6(){4 L 19()}})()};o.1E()})();',[],144,'||||return||function|if|||var|this|url|||window||options||content|title|source|encode||Xmeb|height|width|re|||encodeURIComponent||false|||document|value|typeof|settings||http|com|image|Components|expires|addon|id|new|jqelem|str|length|defObj|open|share|_blank|trans|src2|TestRegExp|text|||string|undefined|_jqelem|alert|clip|interfaces|null|defHeight|AddFavorite|www|_init|615|505|_content||App|trim|true|body|scrollTop|css|maintext|else|classes|mozilla|org|createInstance|Object|copytext|btnobj|iptobj|bind|cookie|key|path|domain|result|replace|imgLoad|php|pic|_INSTALL|Base|RegExp|overflow|SetClipboard|copy|clipboardData|setData|netscape|try|catch|widget|nsIClipboard|unicode|clipid|click|String|object|extend|days|raw|secure|decode|x00|xff|Math|option|find|img|pageTop|documentElement|attr|opacity|WebToolkit|sidebar|elem|xiaomi|prototype|Encode|renren||qzone'.split('|'),0,{}))