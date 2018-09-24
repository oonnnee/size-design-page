window.onload = function () {

    var clickFirst = document.getElementById("clickFirst");
    var hideVideo = document.getElementById("hideVideo");
    hideVideo.onOff = true;
    clickFirst.onclick = function () {
      if( hideVideo.onOff === true){
          hideVideo.className = "hideVideoShow";
          hideVideo.onOff = false;
      } else{
          hideVideo.className = "hideVideo";
          hideVideo.onOff = true;
      }
    };



    var clickSecond = document.getElementById("clickSecond");
    var hideRequiredData = document.getElementById("hideRequiredData");

    hideRequiredData.onOff = true;
    clickSecond.onclick = function () {
        if(hideRequiredData.onOff === true){
            hideRequiredData.className = "hideRequiredShow";
            hideRequiredData.onOff = false;
        }else{
            hideRequiredData.className = "hideRequiredData";
            hideRequiredData.onOff = true;
        }
    };



    var clickThird = document.getElementById("clickThird");
    var hideOptionalData = document.getElementById("hideOptionalData");
    hideOptionalData.onOff = true;
    clickThird.onclick = function () {
        if(hideOptionalData.onOff === true){
            hideOptionalData.className = "hideOptionalShow";
            hideOptionalData.onOff = false;
        }else{
            hideOptionalData.className = "hideOptionalData";
            hideOptionalData.onOff = true;
        }
    }
};