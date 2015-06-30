---
layout: page
title: "Work"
permalink: /work/
image: /assets/javascript.png
tag: work
---

{% for post in site.categories.work %}

<h2 class="page-list-item"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">// {{ post.title }}</a></h2>
<p> {{ post.excerpt }} </p>
<button><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">Read more</a></button>

{% endfor %}