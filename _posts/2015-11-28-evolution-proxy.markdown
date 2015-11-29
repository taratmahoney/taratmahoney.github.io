---
  layout: post
  title: "Evolution Proxy web app"
  excerpt: "A site I built for a new proxy solicitation firm in Toronto with a basic content-management system."
  permalink: /work/evolution-proxy
  category: Work
---

In November of 2015, I had been asked so many times by clients to build a basic blog-style site on Wordpress that I started to think of alternatives.

Wordpress is so bulky and unneccesary for folks who only want the ability to add, edit, and delete posts. It's not the most user-friendly platform, and I get the sense that many newcomers find all the options intimidating. It also can become pricey to host (relative to what it costs to put a Rails app on Amazon Web Services: about $1/month). I also find PHP, the programming language used for Wordpress sites, very unintuitive and I don't like trying to hack my way around it when I'm building sites for clients.

This is why I decided to build a basic content-management system with Ruby on Rails for <a href="https://evolutionproxy.herokuapp.com/services">Evolution Proxy</a>, a new shareholder solicitation firm in Toronto. Admins have the ability to add, edit, and delete all the models (employees, users, posts, and services) themselves using a WYSIWYG editor they can access by logging in. This also allows the client to be more autonomous when it comes to their website, as they have control over all the text content.

Here's the frontend, which is fully responsive:

<h2> Homepage </h2>
<img src="/assets/evolutionproxy-home.png"/>
<h2>Service display page</h2>
<img src="/assets/evolutionproxy-services-page.png"/>
<h2> Leadership display page</h2>
<img src="/assets/evolutionproxy-leadership.png"/>
<h2> News index page </h2>
<img src="/assets/evolutionproxy-news-page.png"/>
<h2> News display page </h2>
<img src="/assets/evolutionproxy-post-page.png"/>

And here's an example of the backend the clients could see, which can be accessed by a password-protected login. I used the <a href="https://github.com/NoamB/sorcery">Sorcery gem</a> to do this securely:


<img src="/assets/evolutionproxy-edit.png"/>

You can see it in action <a href="https://evolutionproxy.herokuapp.com/services">here</a>.






