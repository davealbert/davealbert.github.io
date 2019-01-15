---
layout: page
title: CTO and Co-Founder Talk with Dave Albert
shorttitle: EPISODES 
hideTitle: true
permalink: /cto-and-co-founder-talk-with-dave-albert/
show: true
contentFullWidth: true
---

<div class="episodes-container">
    <!--**CTO and Co-Founder Talk with Dave Albert**-->

    <!--Where I discuss what it’s like being a first-time CTO and Co-Founder. The joys, the decision, and the challenges. I hope this helps others in similar situations or aspire to the same.-->


    <!--![CTO and Co-Founder Talk with Dave Albert](/images/Podcast-Image-1400x1400-676x676.jpg){:class="img-responsive img-20em"}-->

    <div class="episodes-list">
        <div class="float-left">
            <div class="float-left">
                <h1>Episodes</h1>
            </div>
            <div class="float-left podcast-icons">
                <div class="podcast-icon">
                    <a href="https://open.spotify.com/show/4J0VmigjL5H5kXqDYQENcF?si=vH63eQ2kRCWAVi5TGuBk_g" target="_blank"><div class="icon" id="spotify"></div></a>
                </div>
                <div class="podcast-icon">
                    <a href="https://itunes.apple.com/us/podcast/cto-and-co-founder-talk-with-dave-albert/id1247392672" target="_blank"><div class="icon" id="itunes"></div></a>
                </div>
                <div class="podcast-icon">
                    <a href="https://www.stitcher.com/podcast/dave-albert-3/cto-and-cofounder-talk-with-dave-albert" target="_blank"><div class="icon" id="stitcher"></div></a>
                </div>
                <div class="podcast-icon">
                    <a href="https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&apn=com.google.android.music&link=https://play.google.com/music/m/I5xrkrvr34yc3b7zbcc7hysdm4y?t%3DCTO_and_Co-Founder_Talk_with_Dave_Albert%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16" target="_blank"><div class="icon" id="google-play"></div></a>
                </div>
                <div class="podcast-icon">
                    <a href="https://player.fm/series/cto-and-co-founder-talk-with-dave-albert" target="_blank"><div class="icon" id="player-fm"></div></a>
                </div>
                <div class="podcast-icon">
                    <a href="https://mytuner-radio.com/podcasts/cto-and-co-founder-talk-with-dave-albert-dave-albert-1247392672" target="_blank"><div class="icon" id="mytuner"></div></a>
                </div>
            </div>
            <div class="clear"></div>
            <div class="episode-items">
                {% for episode in site.data.podcasts %}
                <div class="podcast-episode">
                    <div class="title">
                        {{ episode.title }}
                    </div>

                    <div class="sub-title">
                        {{ episode.subtitle }}
                    </div>

                    <div class="date">
                        {{ episode.date }}
                    </div>

                    <div class="audio">
                        <audio src="https://dts.podtrac.com/redirect.mp3/{{ episode.mp3 }}" controls="controls" preload="none">
                            Your browser does not support the audio element.
                        </audio>
                        <!--<audio id="player-{{ episode.transcript }}" src="https://dts.podtrac.com/redirect.mp3/{{ episode.mp3 }}" preload="none"></audio>-->
                        <!--<div class="player"> -->
                            <!--<button onclick="document.getElementById('player-{{ episode.transcript}}').play()">Play</button> -->
                            <!--<button onclick="document.getElementById('player-{{ episode.transcript}}').pause()">Pause</button> -->
                            <!--<button onclick="document.getElementById('player-{{ episode.transcript}}').volume += 0.1">Vol +</button> -->
                            <!--<button onclick="document.getElementById('player-{{ episode.transcript}}').volume -= 0.1">Vol -</button> -->
                            <!--<a href="https://dts.podtrac.com/redirect.mp3/{{ episode.mp3 }}" download="{{ episode.title }}" target="_blank" >Download</a> -->
                        <!--</div>-->
                    </div>

                    <div class="summary">
                        {{ episode.summary }}
                    </div>

                    <div class="more">
                        <a href="/podcast/episode/{{ episode.transcript }}">More</a>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>

    <div>
        <div>
            <div class="mailchimp-form-container">
                {% include partial-mailchimp-form.html %}
            </div>
        </div>

        <div>
            {% include disqus.html %}
        </div>
    </div>
</div>
