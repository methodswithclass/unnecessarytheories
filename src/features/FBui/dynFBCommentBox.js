FBuiModule.directive('dynFbCommentBox', ["$window", function ($window) {
    
    function createHTML(href, numposts, datawidth) {
        return `<div class="fb-comments"
                       data-href=href
                       data-numposts=numposts
                       data-width=datawidth
               </div>`;
    }

    return {
        restrict: 'A',
        scope: {},
        link: function (scope, elem, attrs) {
            
            //console.log(elem[0]);

            attrs.pageHref = "http://www.example.com";

            function changeContent(newValue) {

                var href        = newValue;
                var numposts    = attrs.numposts    || 5;
                var datawidth   = attrs.width || 600;

                console.log("\nhref", href, "numpost", numposts, "datawidth", datawidth, "\n\n");

                console.log(createHTML(href, numposts, datawidth));

                elem.html(createHTML(href, numposts, datawidth));
                
                
                FB.XFBML.parse(elem[0]);
            }

            changeContent(attrs.pageHref);

            attrs.$observe('pageHref', function (newValue) {
                
                console.log("\nhref changed\n\n");

                changeContent(newValue);

            });

        }
    };
}]);