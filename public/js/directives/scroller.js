'use strict';

angular.module('sunsetApp')
  .directive('Scroller',
    function ($parse) {
    	var leftCtrl = '<div  class="scroller-ctrl"><button class="btn disabled" ng-click="Previous()"><i class="icon-circle-arrow-left"></i></button></div>';
    var rightCtrl = '<div style="float:left" class="scroller-ctrl"><button class="btn" ng-click="Next()"><i class="icon-circle-arrow-right"></i></button></div>';
    var holder = '<div class="scroller-holder"></div>';
    var ul = '<ul></ul>';
    console.log("hella");
    
    return{
        restrict:'E',
        require: '?ngModel',
        scope:{},
        compile: function(tElement,tAttrs,transclude){
           var children = tElement.children();
            tElement.html("");
            //+++ATTRIBUTES+++
            var height = parseInt(tAttrs["height"])|| 200;
            var width = parseInt(tAttrs["width"])|| 150; 
            var padding = parseInt(tAttrs["padding"])|| 5; 
            var paddedWidth = width + 2*padding;
            var paddedHeight = height + 2*padding;
            var totalWidth = paddedWidth*children.length;
            //+++CSS RULES+++
            var ctrlStyle = "float:left; height:"+height +"px; margin-top:"+((paddedHeight /2)-18) +"px;";
            var liStyle = "float:left; padding:"+padding+"px";
            var holderStyle = "overflow:hidden;float:left;width:"+paddedWidth+"px;";
            var ulStyle = "list-style-type:none;width:"+totalWidth +"px; margin:0; position:relative;left:0px";
            //+++DOM MANIPULATION+++
            var rCtrl = angular.element(rightCtrl).attr("style",ctrlStyle);
            var lCtrl = angular.element(leftCtrl).attr("style",ctrlStyle);
            var list = angular.element(ul).attr("style",ulStyle);
            var hld = angular.element(holder).attr("style",holderStyle);
            angular.forEach(children,function(value, key){
                var li = angular.element('<li style="'+liStyle+'"></li>').append(value);                  
                list.append(li);               
            }); 
            //+++RENDER+++            
            hld.append(list);          
            tElement.append(lCtrl);
            tElement.append(hld);
            tElement.append(rCtrl);
            //+++SCOPE FUNCTIONALITY+++
            return function(scope,element,attrs){ 
                    var model = $parse('$parent.'+attrs.ngModel);                
                    scope.Index = 0;
                    scope.Max= children.length;                
                    scope.Next = function(){
                        if (scope.Index< (children.length - 1)) {
                            scope.Index++;
                            list.css('left','-'+((paddedWidth)* scope.Index)+'px');
                            model.assign(scope,scope.Index);                            
                        }
                    };    
                     scope.Previous= function(){
                        if (scope.Index>0) {
                            scope.Index--;
                            list.css('left','-'+((paddedWidth)* scope.Index)+'px'); 
                            model.assign(scope,scope.Index); 
                        }
                    };                    
                    scope.Num = children.length;  
                }                    
        }
              
    }
   });
