onload = function(){
  var video = document.getElementsByTagName('iframe');
  for (var i in video){
    var youtube = video[i].src.indexOf('youtube') > -1,
        vimeo = video[i].src.indexOf('vimeo') > -1;
    if (youtube || vimeo){
      var wrapper = document.createElement('div'),
          height = video[i].clientHeight,
          width = video[i].clientWidth,
          ratio = height/width*100;
      wrapper.setAttribute('data-video','')
      wrapper.style.paddingTop = ratio+'%'
      wrapper.appendChild(video[i].cloneNode(true))
      video[i].parentNode.insertBefore(wrapper,video[i].nextSibling)
      video[i].parentNode.removeChild(video[i])
    }
  }
}
/*
 Find all iframes in the document that might contain videos.
 For each iframe you find,
 If the URL contains 'youtube' or 'vimeo',
 Create a wrapper div,
 Measure the height and width of the original iframe,
 Divide the height by the width and multiply to find the aspect ratio.
 Add an attribute of 'data-video' so we can target it with CSS,
 Set the top padding to the aspect ratio we measured,
 Clone the original video iframe inside of our wrapper,
 Add our wrapper and video to the document directly following the original,
 and finally remove the original from the document.
*/