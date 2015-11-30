
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',g='image',e9='${rec}',e13='${b_home}',e12='${dexi}',e11='${back}',o='opacity',x8='rgba(255,255,255,1)',e10='${Button}',b='block',w='width',d='display',i='none';var g5='back.jpg',g6='b_home.png',g7='rec.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:w,cg:i,rI:n,cn:{dom:[{id:'back',t:g,r:['-640px','-387px','2560px','1550px','auto','auto'],o:'0',f:[x4,im+g5,'0px','0px','100%','100%','no-repeat'],tf:[[],[],[],['0.5','0.5']]},{id:'Button',v:i,t:g,r:['245px','681px','197px','89px','auto','auto'],f:[x4,im+g6,'0px','0px'],tf:[[],[],[],['0.5','0.5']]},{id:'rec',v:i,t:g,r:['361px','220px','522px','308px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'dexi',v:i,t:'video',tag:'video',r:['372px','233px','500','282','auto','auto'],cn:'controls',sr:['video/dexi.mp4'],pr:'auto',ps:'images/imapos.jpg'},{id:'b_home',v:i,t:g,r:['147px','550px','197px','89px','auto','auto'],f:[x4,im+g6,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','1280px','775px','auto','auto'],overflow:'hidden',f:[x8]}}},tt:{d:2000,a:y,l:{"home":0,"videouno":1039},data:[["eid18",d,0,0,"linear",e9,i,i],["eid17",d,1039,0,"linear",e9,i,b],["eid5",d,0,0,"linear",e10,i,i],["eid4",d,1000,0,"linear",e10,i,b],["eid19",d,1039,0,"linear",e10,b,i],["eid3",o,0,1000,"linear",e11,'0','1'],["eid23",d,0,0,"linear",e12,i,i],["eid22",d,1039,0,"linear",e12,i,b],["eid21",d,0,0,"linear",e13,i,i],["eid20",d,1039,0,"linear",e13,i,b]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-14628742");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Button}","click",function(sym,e){sym.play("videouno");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1039,function(sym,e){var videouno=sym.$("Rectangle");videouno.html('<video width="500" height="282" controls> <source src="video/dexi.mp4" type="video/mp4"> </video>');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${b_home}","click",function(sym,e){sym.$("dexi")[0].pause();sym.$("dexi")[0].currentTime=1;sym.play("home");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-14628742");