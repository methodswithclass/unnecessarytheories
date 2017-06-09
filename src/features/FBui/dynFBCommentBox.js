FBuiModule.directive('dynFbCommentBox', function () {
    
    function createHTML(href, numposts, datawidth) {
        return '<div class="fb-comments" ' +
                       'data-href="' + href + '" ' +
                       'data-numposts="' + numposts + '" ' +
                       'data-width=' + datawidth
               '</div>';
    }

    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            
            //console.log(elem[0]);

            function changeContent(newValue) {

                var href        = newValue;
                var numposts    = attrs.numposts    || 5;
                var datawidth   = attrs.width || 600;

                console.log("href", href, "numpost", numposts, "datawidth", datawidth);

                console.log(createHTML(href, numposts, datawidth));

                elem.html(createHTML(href, numposts, datawidth));
                FB.XFBML.parse(elem[0]);
            }

            changeContent(attrs.pageHref);

            attrs.$observe('pageHref', function (newValue) {
                
                changeContent(newValue);

            });

        }
    };
});