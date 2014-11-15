
$(function(){
});


jThree( function( j3 ) {

	$( "#loading" ).remove();

	j3.Trackball();
	j3.Stats();
    
    var flag = 1;


    $( "#walk" ).click( walk );
    $( "#shouryu" ).click( shouryu );
    $( "#rocketpunch" ).click( rocketpunch );
    $( "#superkick" ).click( superkick );


    function superkick() {
        flag = -flag;
        var keyframe1 = 2000;
        var keyframe2 = 300;
        var keyframe3 = 500;
        var keyframe4 = 500;
        var basesight = j3( "camera").lookAtY();

        j3( "camera" ).animate( { lookAtY: 100 }, keyframe1  ,'easeOutQuint');

        j3( "#human" ).animate( { positionY: 100 }, keyframe1 ,'easeOutQuint');
        j3( "#topBody" ).animate( { rotateY: 0.5 }, keyframe1 );
        j3( "#bottomBody" ).animate( { rotateY: .1 }, keyframe1 );

        j3( "#leftArmJoint" ).animate( { rotateX: 0.3 }, keyframe1 );
        j3( "#leftElbowJoint" ).animate( { rotateX: -1.9 }, keyframe1 );

        j3( "#rightArmJoint" ).animate( { rotateX: -3 }, keyframe1 );
        j3( "#rightElbowJoint" ).animate( { rotateX: -0.3 }, keyframe1 );

        j3( "#leftLegJoint" ).animate( { rotateX: 0.5 }, keyframe1 );
        j3( "#leftKneeJoint" ).animate( { rotateX: 0.3 }, keyframe1 );

        j3( "#rightLegJoint" ).animate( { rotateX: -1.9 }, keyframe1 );
        j3( "#rightKneeJoint" ).animate( { rotateX: 2.0 }, keyframe1 );

        setTimeout(function () {
            j3( "camera" ).animate( { lookAtX: -30, lookAtY: basesight }, keyframe2  ,'easeInQuint');
            j3( "#human" ).animate( { positionY: 0 ,positionX: "-=50", rotateX: -0.7}, keyframe2 ,'easeInQuint');

            j3( "#topBody" ).animate( { rotateY: 0.2 }, keyframe2 );
            j3( "#bottomBody" ).animate( { rotateY: .1 }, keyframe2 );

            j3( "#leftArmJoint" ).animate( { rotateX: 0.3 ,rotateZ: 2.0}, keyframe2 );
            j3( "#leftElbowJoint" ).animate( { rotateX: -1.5 }, keyframe2 );

            j3( "#rightArmJoint" ).animate( { rotateX: -0.7 }, keyframe2 );
            j3( "#rightElbowJoint" ).animate( { rotateX: -0.1 }, keyframe2 );

            j3( "#leftLegJoint" ).animate( { rotateX: -1.8 ,rotateZ: 0.3}, keyframe2 );
            j3( "#leftKneeJoint" ).animate( { rotateX: 2.0 }, keyframe2 );

            j3( "#rightLegJoint" ).animate( { rotateX: -0.5 }, keyframe2 );
            j3( "#rightKneeJoint" ).animate( { rotateX: 0.0 }, keyframe2 );
            setTimeout(function () {

                j3( "camera" ).animate( { lookAtX: 0 }, keyframe3 + keyframe4  ,'easeOutQuint');
                j3( "#human" ).animate( { positionY: 5, positionX: "+=25" , rotateX: 0.0}, keyframe3 ,'easeOutQuint');

                j3( "#topBody" ).animate( { rotateY: 0.2 }, keyframe3 );
                j3( "#bottomBody" ).animate( { rotateY: .1 }, keyframe3 );

                j3( "#leftArmJoint" ).animate( { rotateX: -0.3 }, keyframe3 );
                j3( "#leftElbowJoint" ).animate( { rotateX: -1.5 }, keyframe3 );

                j3( "#rightArmJoint" ).animate( { rotateX: -1.5 }, keyframe3 );
                j3( "#rightElbowJoint" ).animate( { rotateX: -1.3 }, keyframe3 );

                j3( "#leftLegJoint" ).animate( { rotateX: -1.0 }, keyframe3 );
                j3( "#leftKneeJoint" ).animate( { rotateX: 0.9 }, keyframe3 );

                j3( "#rightLegJoint" ).animate( { rotateX: -1.3 ,rotateZ: -0.3}, keyframe3 );
                j3( "#rightKneeJoint" ).animate( { rotateX: 1.5 }, keyframe3 );
                setTimeout(function () {
                    j3( "#human" ).animate( { positionY: 0, positionX: "+=25" }, keyframe4 ,'easeInQuint');
                    j3( "#leftArmJoint" ).animate( { rotateZ: 0.0}, keyframe2 );
                    j3( "#leftLegJoint" ).animate( { rotateZ: 0.0}, keyframe4 );
                    j3( "#rightLegJoint" ).animate( { rotateZ: 0.0}, keyframe2 );

                },keyframe3);
            },keyframe2);
        },keyframe1);

    }

    function rocketpunch() {
        var keyframe1 = 300;
        var keyframe2 = 1000;
        var keyframe3 = 2000;
        var keyframe4 = 300;
        var basesight = j3( "camera").lookAtY();

        j3( "#human" ).animate( { positionY: -0.02 }, keyframe1 ,'easeOutQuint');
        j3( "#head" ).animate( { rotateY: -0.3 }, keyframe1 );
        j3( "#topBody" ).animate( { rotateY: 0.5 }, keyframe1 );
        j3( "#bottomBody" ).animate( { rotateY: -0.1 }, keyframe1 );

        j3( "#leftArmJoint" ).animate( { rotateX: 0.3 }, keyframe1 );
        j3( "#leftElbowJoint" ).animate( { rotateX: -1.9 }, keyframe1 );

        j3( "#rightArmJoint" ).animate( { rotateX: -1.6 , rotateY: -0.5}, keyframe1 );
        j3( "#rightElbowJoint" ).animate( { rotateX: 0 }, keyframe1 );

        j3( "#leftLegJoint" ).animate( { rotateX: -1.3 }, keyframe1 );
        j3( "#leftKneeJoint" ).animate( { rotateX: 1.5 }, keyframe1 );

        j3( "#rightLegJoint" ).animate( { rotateX: 0.5 }, keyframe1 );
        j3( "#rightKneeJoint" ).animate( { rotateX: 0.3 }, keyframe1 );
        setTimeout(function () {
            j3( "camera" ).animate( { lookAtX: -30 }, keyframe2  ,'easeOutQuint');
            j3( "#rightElbowJoint" ).animate( { positionY: "-=50" }, keyframe2  ,'easeOutQuint');
            setTimeout(function(){
                j3( "camera" ).animate( { lookAtX: 0 }, keyframe3 );
                j3( "#rightElbowJoint" ).animate( { positionY: "+=50" }, keyframe3  ,'easeOutExpo');

                j3( "#topBody" ).animate( { rotateY: 0.2 }, keyframe3 );
                j3( "#bottomBody" ).animate( { rotateY: .1 }, keyframe3 );

                j3( "#leftArmJoint" ).animate( { rotateX: -0.5 }, keyframe3 );
                j3( "#leftElbowJoint" ).animate( { rotateX: -0.3 }, keyframe3 );

                j3( "#rightArmJoint" ).animate( { rotateX: -0.5 }, keyframe3 );
                j3( "#rightElbowJoint" ).animate( { rotateX: -0.3 }, keyframe3 );

                j3( "#leftLegJoint" ).animate( { rotateX: 0 , rotateZ: 0.1}, keyframe3 );
                j3( "#leftKneeJoint" ).animate( { rotateX: 0.02 }, keyframe3 );

                j3( "#rightLegJoint" ).animate( { rotateX: 0, rotateZ: -0.1 }, keyframe3 );
                j3( "#rightKneeJoint" ).animate( { rotateX: 0.02 }, keyframe3 );
                setTimeout(function(){
                    j3( "#topBody" ).animate( { rotateY: 0.2 }, keyframe4 );
                    j3( "#bottomBody" ).animate( { rotateY: .1 }, keyframe4 );

                    j3( "#leftArmJoint" ).animate( { rotateX: -0.5 }, keyframe4 );
                    j3( "#leftElbowJoint" ).animate( { rotateX: -0.3 }, keyframe4 );

                    j3( "#rightArmJoint" ).animate( { rotateX: -0.5 ,rotateY: 0.0}, keyframe4 );
                    j3( "#rightElbowJoint" ).animate( { rotateX: -0.3 }, keyframe4 );

                    j3( "#leftLegJoint" ).animate( { rotateX: 0 , rotateZ: 0}, keyframe4 );
                    j3( "#leftKneeJoint" ).animate( { rotateX: 0.02 }, keyframe4 );

                    j3( "#rightLegJoint" ).animate( { rotateX: 0, rotateZ: 0 }, keyframe4 );
                    j3( "#rightKneeJoint" ).animate( { rotateX: 0.02 }, keyframe4 );
                },keyframe3);


            },keyframe2);
        },keyframe1);
    }


    function shouryu() {
        flag = -flag;
        var keyframe1 = 300;
        var keyframe2 = 600;
        var basesight = j3( "camera").lookAtY();
        j3( "camera" ).animate( { lookAtY: 100 }, keyframe1  ,'easeOutQuint');

        j3( "#human" ).animate( { positionY: 100 }, keyframe1 ,'easeOutQuint');
        j3( "#topBody" ).animate( { rotateY: 0.5 }, keyframe1 );
        j3( "#bottomBody" ).animate( { rotateY: .1 }, keyframe1 );

        j3( "#leftArmJoint" ).animate( { rotateX: 0.3 }, keyframe1 );
        j3( "#leftElbowJoint" ).animate( { rotateX: -1.9 }, keyframe1 );

        j3( "#rightArmJoint" ).animate( { rotateX: -3 }, keyframe1 );
        j3( "#rightElbowJoint" ).animate( { rotateX: -0.3 }, keyframe1 );

        j3( "#leftLegJoint" ).animate( { rotateX: 0.5 }, keyframe1 );
        j3( "#leftKneeJoint" ).animate( { rotateX: 0.3 }, keyframe1 );

        j3( "#rightLegJoint" ).animate( { rotateX: -1.9 }, keyframe1 );
        j3( "#rightKneeJoint" ).animate( { rotateX: 2.0 }, keyframe1 );

        setTimeout(function () {
            j3( "camera" ).animate( { lookAtY: basesight }, keyframe2  ,'easeInQuint');
            j3( "#human" ).animate( { positionY: 0 }, keyframe2 ,'easeInQuint');

            j3( "#topBody" ).animate( { rotateY: 0.2 }, keyframe2 );
            j3( "#bottomBody" ).animate( { rotateY: .1 }, keyframe2 );

            j3( "#leftArmJoint" ).animate( { rotateX: -0.3 }, keyframe2 );
            j3( "#leftElbowJoint" ).animate( { rotateX: -1.5 }, keyframe2 );

            j3( "#rightArmJoint" ).animate( { rotateX: -1.5 }, keyframe2 );
            j3( "#rightElbowJoint" ).animate( { rotateX: -1.3 }, keyframe2 );

            j3( "#leftLegJoint" ).animate( { rotateX: -1.0 }, keyframe2 );
            j3( "#leftKneeJoint" ).animate( { rotateX: 0.9 }, keyframe2 );

            j3( "#rightLegJoint" ).animate( { rotateX: -1.3 }, keyframe2 );
            j3( "#rightKneeJoint" ).animate( { rotateX: 1.5 }, keyframe2 );
        },keyframe1);

    }


    function walk() {
        flag = -flag;

        j3( "camera" ).animate( { lookAtZ: "+=10", positionZ: "+=10" }, 1000 );

        j3( "#human" ).animate( { positionZ: "+=10" }, 1000 );
        j3( "#topBody" ).animate( { rotateY: flag * .2 }, 1000 );
        j3( "#bottomBody" ).animate( { rotateY: flag * -.1 }, 1000 );

        j3( "#leftElbowJoint" ).animate( { rotateX: flag * .5 - .5 }, 1000 );
        j3( "#rightElbowJoint" ).animate( { rotateX: flag * -.5 - .5 }, 1000 );

        j3( "#leftArmJoint" ).animate( { rotateX: flag * .5 }, 1000 );
        j3( "#rightArmJoint" ).animate( { rotateX: flag * -.5 }, 1000 );


        j3( "#leftKneeJoint" ).animate( { rotateX: flag * .3 + .3 }, 1000 );
        j3( "#rightKneeJoint" ).animate( { rotateX: flag * -.3 + .3 }, 1000 );

        j3( "#leftLegJoint" ).animate( { rotateX: flag * -.5 }, 1000 );
        j3( "#rightLegJoint" ).animate( { rotateX: flag * .5 }, 1000 );

    }

    var leftFlag = 0;
    j3( "#leftArmJoint mesh" ).click( function() {
        leftFlag = 1 - leftFlag;
        j3( "#leftArmJoint" ).animate( { rotateX: leftFlag * -3.14 }, 1000 );
    } );

    var rightFlag = 0;
    j3( "#rightArmJoint mesh" ).click( function() {
        rightFlag = 1 - rightFlag;
        j3( "#rightArmJoint" ).animate( { rotateX: rightFlag * -3.14 }, 1000 );
    } );

    // LoadTwitterUser
    $("#userload").click(function(){
        var twitterId = $("#twitter-id").val();
        if(twitterId){
            $.getJSON("/twitter_user_info/getuserinfo.txt?twitterac="+ twitterId , function(data) {
                $("#intro").html(data.name);
                //j3(#humanMtl).attr("color",data.profile_background_color) ;
                j3("#txr-face").attr("src","/twitter_user_info/getuserimg?userimgurl=" + encodeURIComponent(data.profile_image_url));
            });
        }
    });


},
function() {
	alert( "このブラウザはWebGLに対応していません。" );
} );
