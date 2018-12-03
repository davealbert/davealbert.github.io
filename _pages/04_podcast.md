---
layout: page
title: CTO and Co-Founder Talk with Dave Albert
shorttitle: Podcast 
permalink: /cto-and-co-founder-talk-with-dave-albert/
show: true
---

**Checkout my podcast**

Where I discuss what it’s like being a first-time CTO and Co-Founder. The joys, the decision, and the challenges. I hope this helps others in similar situations or aspire to the same.


![CTO and Co-Founder Talk with Dave Albert](/images/Podcast-Image-1400x1400-676x676.jpg){:class="img-responsive img-20em"}


[Spotify](https://open.spotify.com/show/4J0VmigjL5H5kXqDYQENcF?si=vH63eQ2kRCWAVi5TGuBk_g){:target="_blank"} <b>\|</b>  [iTunes](https://itunes.apple.com/us/podcast/cto-and-co-founder-talk-with-dave-albert/id1247392672){:target="_blank"} <b>\|</b> [Sticher](https://www.stitcher.com/podcast/dave-albert-3/cto-and-cofounder-talk-with-dave-albert){:target="_blank"} <b>\|</b> [Google Play](https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&apn=com.google.android.music&link=https://play.google.com/music/m/I5xrkrvr34yc3b7zbcc7hysdm4y?t%3DCTO_and_Co-Founder_Talk_with_Dave_Albert%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16){:target="_blank"} <b>\|</b> [Player.fm](https://player.fm/series/cto-and-co-founder-talk-with-dave-albert){:target="_blank"} <b>\|</b> [MyTuner Radio](https://mytuner-radio.com/podcasts/cto-and-co-founder-talk-with-dave-albert-dave-albert-1247392672){:target="_blank"}

&nbsp;
&nbsp;

<div>
<h1>Episodes</h1>
{% for episode in site.data.podcasts %}
    <div class="podcast-episode">
        <b>{{ episode.title }}</b><br />
        {{ episode.subtitle }}<br />
        <i>{{ episode.date }}</i><br />
        <audio src="https://dts.podtrac.com/redirect.mp3/{{ episode.mp3 }}" controls="controls" preload="none">
            Your browser does not support the audio element.
        </audio>
        <p>{{ episode.summary }}</p>
        <a href="/podcast/episode/{{ episode.transcript }}">More</a>
    </div>
{% endfor %}
</div>

<div>
{% include disqus.html %}
</div>
