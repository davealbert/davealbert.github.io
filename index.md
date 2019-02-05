---
layout: default
shorttitle: HOME
showcount: true
---

<div class="slideshow-container">

<div class="mySlides fade">
  <img src="images\podcastbg.png" style="width:100%">
  <div class="text">CTO & CO-FOUNDER TALK</div>
	<div class="subtext">	WITH DAVE ALBERT</div>
	<div class="playbutton">
 <a href="/cto-and-co-founder-talk-with-dave-albert/">
 <img src="/images/hero-button-image.png" alt="Play episodes now" />
 </a>
	</div>
</div>

<div class="mySlides fade">
  <img src="images\Daveslider2.jpg" style="width:100%">
	<div class="text2">CTO & CO-FOUNDER TALK</div>
	<div class="subtext2">	WITH DAVE ALBERT</div>
	<div class="playbutton2">
 <a href="/cto-and-co-founder-talk-with-dave-albert/">
 <img src="images\hero-button-image 2.png" alt="Play episodes now" />
 </a>
	</div>
</div>


<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>
<br>
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>

</div>         




<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>



<div class="inside-container">
    <div class="sub-heading">
        <span class="ink">BROWSE</span>
        <span class="green">EPISODES</span>
        <div class="browse-underline"></div>
    </div>

    <div>
    {% include partial-podcast-feed.html %}
    </div>

    <div class="mailchimp-form-container">
    {% include partial-instagram-feed.html %}
    </div>

    <div class="mailchimp-form-container">
    {% include partial-mailchimp-form.html %}
    </div>

</div>

<!--Hi, I'm Dave Albert the CTO of [Medit](https://medit.online) and the host of [CTO and Co-Founder Talk with Dave Albert](/cto-and-co-founder-talk-with-dave-albert)-->

<!--I've been working in IT, Software Development, and Systems Administration/Ops/SRE for over 20 years. I still love doing it and talking about it.-->

<!--Recently almost all new content is coming in the [podcast](/cto-and-co-founder-talk-with-dave-albert).  If you would like to make a suggestion or if you have something intersting to discuss and would like to be a guest, email me at podcast@dave-albert.com-->

<!--~ Dave-->

<!--<i>3rd December 2018</i>-->




<!--If you want more of me you can find me on the following platforms:-->

<!--{% include contact.md %}-->

<!--My old school [textfiles](/textfiles/)-->

<!--What I'm up to [Now](/now)-->

<!--Visits to this page: <span style="font-weight: bold;" id="counter">???</span> -- <i>90's stlye</i> :P <i>(built with an AWS Lambda)-->
