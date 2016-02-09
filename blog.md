---
layout: page
title: "Blog"
permalink: /blog/
image: /assets/week-4.jpg
tag: blog
---

{% for post in site.categories.blog %}

<div class="post">
  <div class="col-md-6 left">
    <img src="{{ post.image }}"/> 
  </div>

  <div class="col-md-6 right">
    <h3><a class="post-link" href="{{ post.url | prepend: site.baseurl }}"> {{ post.title }}</a></h3>
    <p> {{ post.excerpt }} </p>
    <button><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">Read more</a></button>
  </div>
</div>

{% endfor %}

<div class="chronicles">

  <h4> The Chronicles: Learning Web Development at Bitmaker Labs </h4> 

  <p> 
    I've written a collection of posts on my time as a student at <a href="https://bitmakerlabs.com/" target="_blank">Bitmaker Labs</a>. Check it out if you're new to Ruby on Rails. 
  </p> 

  <h4>
    <a href="https://medium.com/the-chronicles-learning-web-development-at/the-chronicles-learning-web-development-at-bitmaker-labs-week-5-549085f536bf" target="_blank"> Week 5</a>
  </h4>
  <p>Thoughts on software testing and diving into JavaScript & jQuery</p>

  <h4>
    <a href="https://medium.com/the-chronicles-learning-web-development-at/the-chronicles-learning-web-development-at-bitmaker-labs-week-4-5d106238ebe5" target="_blank"> Week 4</a>
  </h4>
  <p>On building larger, more powerful Rails apps and on debugging</p>

  <h4>
    <a href="https://medium.com/the-chronicles-learning-web-development-at/the-chronicles-learning-web-development-at-bitmaker-labs-week-3-4ea646ad5dbf" target="_blank"> Week 3</a>
  </h4>
  <p>On building our first Rails apps and a few thoughts on women in tech</p>

  <h4>
  <a href="https://medium.com/the-chronicles-learning-web-development-at/the-chronicles-learning-web-development-at-bitmaker-labs-week-2-b5ce9524601a" target="_blank"> Week 2</a>
  </h4>
  <p>On taking the time to do the things you want to do, web servers, Sinatra, and building our first (very primitive) app</p>

  <h4>
    <a href="https://medium.com/the-chronicles-learning-web-development-at/the-chronicles-learning-web-development-at-bitmaker-labs-e8e91656c546" target="_blank"> Week 1</a>
  </h4>
  <p>On what we covered and a few thoughts on learning development in a classroom</p>
</div>