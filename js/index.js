$(window).scroll(function(){
    if( $(window).scrollTop()==0){
        $(".nav-links").addClass("fade-in");
        $(".nav-links").removeClass("fade-out");
    }
    else
    {
        $(".nav-links").addClass("fade-out");
        $(".nav-links").removeClass("fade-in");
    }
  });


  function navigate() {
    $(".navigate-bg").css("display", "block");
    $("body").css("overflow","hidden");
    $(".navigate-bg").addClass("fade-in");
    $(".navigate-bg").removeClass("fade-out");
    $(".close").addClass("rotate-in");
  }

  

  function CloseNavigate() {
    
    $("body").css("overflow","auto");
    $(".navigate-bg").removeClass("fade-in");
    $(".navigate-bg").addClass("fade-out");
    $(".navigate-page").css("display", "none");
    setTimeout( function(){
        $(".navigate-bg").css('display','none');
           },200);
    
  }

  function closeNavigateSection()
  {
    $(".navigate-page").css("display", "none");
    $(".industries-page").css("display", "none");
    $(".services-page").css("display", "none");
    $(".platforms-page").css("display", "none");
    $(".labs-page").css("display", "none");
    $(".knowledge-page").css("display", "none");
    $(".about-page").css("display", "none");
  }


  function ClosePage()
  {
    $(".navigate-page").css("display", "none");
    $(".industries-page").css("display", "none");
    $(".services-page").css("display", "none");
    $(".platforms-page").css("display", "none");
    $(".labs-page").css("display", "none");
    $(".knowledge-page").css("display", "none");
    $(".about-page").css("display", "none");
  }


  function CloseSearchPage()
  {
    $(".search-bg-top").css("display", "none");
    $(".search-bg-bottom").css("display", "none");
    $(".close-search").css("display", "none");
    $("body").css("overflow","auto");
  }

  function search() {
    $(".search-bg-top").css("display", "flex");
    $(".search-bg-bottom").css("display", "block");
    $("body").css("overflow","hidden");
    $(".close-search").css("display","block");
  }

  var flag=1;

  $(window).scroll(function() {

    if(flag!=1)
    {
      console.log("It is not 1")
    }
    else if(flag==2)
    {
      console.log("It is 2")
    }
    else if(flag==3)
    {
      console.log("It is 3")
    }

    console.log(flag);
    if($(window).scrollTop() >= $(".image1").height()+$(".image2").height()+$(".image3").height()+$(".image4").height())
    {
      $(".logo").css("fill","#007cc3");
      $(".fa-bars").css("background-color","#000000");
      $(".fa-bars").css("color","#fff");
      $(".fa-search").css("padding","14px");
      $(".fa-search").css("border-radius","40px");
      $(".fa-search").css("background-color","#000000");
      $(".scroller-nav p").css("color","#7E7E7E");
      $(".scroller-nav>div>div").css("border-top-color","#7E7E7E");
      $(".scroll-bar").css("border-top-color","#7E7E7E");
    }

    if($(window).scrollTop() < $(".image1").height()+$(".image2").height()+$(".image3").height()+$(".image4").height())
    {
      $(".logo").css("fill","#fff");
      $(".fa-bars").css("background-color","#fff");
      $(".fa-bars").css("color","#000000");
      $(".fa-search").css("padding","0px");
      $(".fa-search").css("border-radius","0px");
      $(".fa-search").css("background-color","rgba(255, 255, 255, 0)");
      $(".scroller-nav p").css("color","#fff");
      $(".scroller-nav>div>div").css("border-top-color","#fff");
      $(".scroll-bar").css("border-top-color","#fff");
    }

    if($(window).scrollTop() >= 0 || $(window).height()==0) {
      flag=1;
      $(".scroll-navigate").addClass("scroll-bar");
      $(".scroll-navigate>p").addClass("scroll-text");
      $(".scroll-navigate").addClass("scroll-animation");
      $(".scroll-core").removeClass("scroll-bar");
      $(".scroll-core>p").removeClass("scroll-text");
      $(".scroll-core").removeClass("scroll-animation");
      $(".scroll-core>p").addClass("fade-in");
    }

    if($(window).scrollTop() >= $(".image1").height()/2 && flag!=2) { 
      flag=2;
      $(".scroll-core").addClass("scroll-bar");
      $(".scroll-core>p").addClass("scroll-text");
      $(".scroll-navigate").removeClass("scroll-bar");
      $(".scroll-navigate>p").removeClass("scroll-text");
      $(".scroll-core").addClass("scroll-animation");
      $(".scroll-navigate").removeClass("scroll-animation");
      $(".scroll-workshop").removeClass("scroll-bar");
      $(".scroll-workshop>p").removeClass("scroll-text");
      $(".scroll-workshop").removeClass("scroll-animation");
      $(".scroll-navigate>p").addClass("fade-in");
    }

    if($(window).scrollTop()  >= $(".image1").height()+$(".image2").height()/2 ) { 
      flag=3;
      $(".scroll-core").removeClass("scroll-bar");
      $(".scroll-core>p").removeClass("scroll-text");
      $(".scroll-core").removeClass("scroll-animation");
      $(".scroll-workshop").addClass("scroll-bar");
      $(".scroll-workshop>p").addClass("scroll-text");
      $(".scroll-workshop").addClass("scroll-animation");
      $(".scroll-talent").removeClass("scroll-bar");
      $(".scroll-talent>p").removeClass("scroll-text");
      $(".scroll-talent").removeClass("scroll-animation");
      $(".scroll-workshop>p").addClass("fade-in");
    }

    if($(window).scrollTop()  >= $(".image1").height()+$(".image2").height()+$(".image3").height()/2 ) { 
      flag=3;
      $(".scroll-workshop").removeClass("scroll-bar");
      $(".scroll-workshop>p").removeClass("scroll-text");
      $(".scroll-workshop").removeClass("scroll-animation");
      $(".scroll-talent").addClass("scroll-bar");
      $(".scroll-talent>p").addClass("scroll-text");
      $(".scroll-talent").addClass("scroll-animation");
      $(".scroll-next").removeClass("scroll-bar");
      $(".scroll-next>p").removeClass("scroll-text");
      $(".scroll-next").removeClass("scroll-animation");
      $(".scroll-talent>p").addClass("fade-in");
    }

    if($(window).scrollTop()  >= $(".image1").height()+$(".image2").height()+$(".image3").height()+$(".image4").height()/2 ) { 
      flag=3;
      $(".scroll-talent").removeClass("scroll-bar");
      $(".scroll-talent>p").removeClass("scroll-text");
      $(".scroll-talent").removeClass("scroll-animation");
      $(".scroll-next").addClass("scroll-bar");
      $(".scroll-next>p").addClass("scroll-text");
      $(".scroll-next").addClass("scroll-animation");
      $(".scroll-about").removeClass("scroll-bar");
      $(".scroll-about>p").removeClass("scroll-text");
      $(".scroll-next").removeClass("scroll-animation");
      $(".scroll-next>p").addClass("fade-in");
    }

    if($(window).scrollTop()  >= $(".image1").height()+$(".image2").height()+$(".image3").height()+$(".image4").height()+$(".image5").height()/2 ) { 
      flag=3;
      $(".scroll-talent").removeClass("scroll-bar");
      $(".scroll-talent>p").removeClass("scroll-text");
      $(".scroll-talent").removeClass("scroll-animation");
      $(".scroll-next").addClass("scroll-bar");
      $(".scroll-next>p").addClass("scroll-text");
      $(".scroll-next").addClass("scroll-animation");
      $(".scroll-about").removeClass("scroll-bar");
      $(".scroll-about>p").removeClass("scroll-text");
      $(".scroll-next").removeClass("scroll-animation");
      $(".scroll-about").removeClass("scroll-bar");
      $(".scroll-about>p").removeClass("scroll-text");
      $(".scroll-about").removeClass("scroll-animation");
      $(".scroll-next>p").addClass("fade-in");
    }

  });


  

  function rotateanticlk()
  {
    $(".feature-bottom").addClass("rotate-out");
  }