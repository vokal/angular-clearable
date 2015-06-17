angular.module( "clearable", [] )

.directive( "clearable", [ "$compile", function ( $compile )
    {
        "use strict";

        return {
            restrict: "A",
            require: "ngModel",
            link: function ( scope, element, attrs, ngModel )
            {
                var innerScope = scope.$new();

                innerScope.model = ngModel;
                innerScope.clear = function ()
                {
                    element.val( "" );
                    innerScope.model.$viewValue = "";
                };

                var template = '<div class="fa fa-times v-clearable" ng-if="model.$viewValue" ng-click="clear()"></div>';
                var clearControl = $compile( angular.element( template ) )( innerScope );
                element.after( clearControl );
            }
        };
    }
] );
