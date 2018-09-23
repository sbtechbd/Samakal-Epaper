jQuery(document).ready(function(){

  /*#############################
  ## onmouse hover show dropdown 
  ###############################*/
  jQuery('ul.nav li.dropdown').hover(function() {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
  }, function() {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(300).fadeOut();
  });


  /*#############################
  ## search date dropdown active 
  ###############################*/

  $('.get_archive').click(function(){
    localStorage['date'] = "yes";
  });

  var site_url_name = jQuery('.site_url_name').val();
  if(site_url_name == 'By Edition' || site_url_name == 'All Pages'){
    if(localStorage['date'] == "yes"){
      var cDate = jQuery('.current_date').val();
      var arr = cDate.split('-');
      var year = arr[0];
      var month = arr[1];
      var day = arr[2];
      $("#datepick .day").val(day).change();
      $("#datepick .month").val(month).change();
      $("#datepick .year").val(year).change();
    }
  }
  if(site_url_name == 'Home'){
    localStorage.removeItem('date');
  }


});

/*==============javascript=====================*/

/***********image zooming**************/
// function zoomin(){
//   var myImg = document.getElementById("singleNewsImg");
//   var currWidth = myImg.clientWidth;

//   if(currWidth > 2000){
//     return false;
//   } else{
//     myImg.style.width = (currWidth + 50) + "px";
//   } 
// }
// function zoomout(){
//   var myImg = document.getElementById("singleNewsImg");
//   var currWidth = myImg.clientWidth;
//   if(currWidth < 200){
//     return false;
//   } else{
//     myImg.style.width = (currWidth - 50) + "px";
//   }
// }
/***********image zooming end**************/


  /*#############################
  ## handle right sidebar tab 
  ###############################*/
  function openCity(evt, tab_name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab_name).style.display = "block";
    evt.currentTarget.className += " active";
  }

