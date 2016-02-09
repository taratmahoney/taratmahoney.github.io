---
layout: page
title: "Work"
permalink: /work/
image: /assets/javascript.png
tag: work
---

   <p class="intro">
   My background is in politics. I’ve worked on online communications for people like the Premier of Ontario, the Leader of the Liberal Party of Canada (and now Prime Minister), and the former Chief Technology Officer of the United States, and to start my own freelancing business building websites and online communications tools for advocacy groups and political candidates. Doing this work made me realize my passion for building tools for people that solve problems, so I’ve started to learn how to do that as a recent graduate of <a href="https://bitmakerlabs.com" target="_blank">Bitmaker Labs</a>' Web Development course. 
   </p>
  

{% for post in site.categories.work %}

<div class="work-post">
  <h3><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">// {{ post.title }}</a></h3>
  <p style="font-size: 18px;"> {{ post.excerpt }} </p>
  <button><a style="font-size: 18px;" class="post-link" href="{{ post.url | prepend: site.baseurl }}">Read more</a></button>
</div>

{% endfor %}