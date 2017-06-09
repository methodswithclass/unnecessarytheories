<!doctype html>
<html>
  <head>

    <title>Gentle Phrasing, a blog</title>

    <?php
        error_reporting(E_ALL);
        // I don't know if you need to wrap the 1 inside of double quotes.
        ini_set("display_startup_errors",1);
        ini_set("display_errors",1);

        $SITE_ROOT = "http://www.gentlephrasing.com/data.json";

        if (isset($_GET['b'])) {
            $id = $_GET['b'];
        } else {
            $id = "home";
        };

        $jsonData = getData($SITE_ROOT);
        makePage($jsonData, $id);

        function getData($siteRoot) {
            
            $rawData = file_get_contents($siteRoot);

            return json_decode($rawData, true);
        }

        function makePage($data, $blog) {
        ?>

            <meta property='fb:app_id' content='696572137111194'/>
            <meta property='og:url' content=<?php 

                    $base = "http://www.gentlephrasing.com";

                    $param = "";

                    if ($blog != "home") {
                        $param = "/?b=".$blog;
                    }

                    echo $base . $param;

                ?> 
            />

            <meta property="og:type" content=<?php  

                    if ($blog != "home") {

                        echo "article";
                    }
                    else {
                        echo "website";
                    }

                ?> 
            />

            <meta property='og:site_name' content="Gentle Phrasing"/>
            <meta property='og:title' content=<?php echo $data[$blog]["title"] ?> />
            <meta property='og:description' content=<?php echo $data[$blog]["description"] ?> />
            <meta property='og:image' content=<?php echo $data[$blog]["image"] ?> />
            <meta property="og:image:width" content=<?php echo $data[$blog]["size"]["width"] ?> />
            <meta property="og:image:height" content=<?php echo $data[$blog]["size"]["height"] ?> />

        <?php
        }
    
    ?>

  	<link rel="stylesheet" href="css/museo/museo300.css" type="text/css" charset="utf-8">
    <link rel="stylesheet" href="http://code.methodswithclass.com/api/classes.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

    
    <script src="libs/jquery-1.11.3.min.js"></script>
    <script src="libs/jquery.scrollto.js"></script>
    <script src="libs/hammer.js"></script>
    <script src="libs/angular.min.js"></script>
    <script src="libs/angular-route.min.js"></script>
    <script src="libs/angular.ui-router.min.js"></script>
    <script src="libs/jquery.hammer.js"></script>

    <script>

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        !function(d,s,id){
            var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
            if(!d.getElementById(id)){
                js=d.createElement(s);
                js.id=id;
                js.src=p+'://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js,fjs);
            }
        }(document, 'script', 'twitter-wjs');
        
    </script>

    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-85962895-6', 'auto');
        ga('send', 'pageview');

    </script>
    
    <base href="/">

  </head>
  <body ng-app="blog">
    <div class="absolute min-width-900 fill cutoff noedge deselect museo" id="main" ng-controller="blogCtrl as main">

        <!-- <div class="fb-comments" fbparse data-href={{url}} data-width="600px" data-numposts="100"></div> -->

        <div class="relative fill scrollY touch" id="body" body>

            <div ui-view=""></div>

            <div class="relative width bottom0">
                <footer></footer>
            </div>

        </div>

    </div>
    <console ng-attr-vis="hide"><console>

    <div id="fb-root"></div>
    

    <!-- App -->
    
    <script src="features/app/app.js"></script>

    <!-- Shared -->

    <script src="http://code.methodswithclass.com/api/shared-2.js"></script>
    

    <!-- Console -->

    <script src="http://code.methodswithclass.com/api/console-1.js"></script>

    <!-- State -->

    <script src="features/state/stateModule.js"></script>
    <script src="features/state/states.js"></script>
    <script src="features/state/runtimeState.js"></script>

    <!-- Parallax -->

    <script src="http://code.methodswithclass.com/api/parallax-2.1.js"></script>

    <!-- Badges -->

    <script src="features/badges/badgesModule.js"></script>
    <script src="features/badges/share.js"></script>

    <!-- Blog -->

    <script src="features/blog/blogModule.js"></script>
    <script src="features/blog/blogCtrl.js"></script>
    <script src="features/blog/section.js"></script> 
    <script src="features/blog/btn.js"></script>
    <script src="features/blog/body.js"></script>
    <!-- // <script src="features/blog/repeat.directive.js"></script> -->
    <script src="features/blog/footer.js"></script>
    <script src="features/blog/back.js"></script>


    <!-- FB -->

    <script src="features/FBui/FBui.module.js"></script>
    <script src="features/FBui/dynFBCommentBox.js"></script>
    <script src="features/FBui/fbparse.js"></script>


    <!-- Data -->

    <script src="features/data/dataModule.js"></script>
    <script src="features/data/data.service.js"></script>
    <script src="features/data/file.service.js"></script>


  </body>

 

  
</html>