---
title: How lemonbrown.me is built
date: 3-20-2024
categories:
    - dev
published: true
---

> This post details the overall structure, design, and implementation details of lemonbrown.me. This post will also highlight nuances, comments, and findings during development. 

## How lemonbrown.me is built

lemonbrown.me is built with sveltekit, leveraging mdsvex to parse markdown files for the posts. The site is statically pre-rendered, and the files are served on a digital ocean droplet. The source code is hosted on github, and I use visual studio code as the IDE for development.

lemonbrown.me has been mainly copied from [this article](https://joyofcode.xyz/sveltekit-markdown-blog#project-setup). The article does a good job of describing how to implement a sveltekit markdown blog. This site will deviate over time from the mentioned article, keep that in mind if you are attempting to cross-reference.

#### The app structure

The app has a simple folder structure defined as:  
- src/
    - lib/
    - posts/
    - routes/
        - [slug]/ renders the individual post
        - categories/ used for routing purposes

#### SvelteKit pre-rending considerations

When pre-rendering a static site in SvelteKit, pages marked as pre-render cannot access the url. You can use url during the onMount, but this rubs against the ethos of pre-rendering. This site makes use of categorizing posts, into dev and life. To accomplish this, the site routes include categories/dev, categories/life. The individual page.ts searches the posts based on a hard-coded value of "life" or "dev".

#### Posts as markdown files

Posts are stored in src/posts, as .md files. Markdown supports Frontmatter, a way to store meta data. 
An example from this .md file
```
---
title: How lemonbrown.me is built
date: 3-20-2024
categories:
    - dev
published: true
---
```

These files are rendered with **mdsvex**, which can be installed with npm. svelte.config.js exposes preprocess options, which you can feed mdsvex for rendering .md files.

#### Building the app

lemonbrown.me uses the static-adapter in SvelteKit. This allows the site to be served simply by Nginx, no js server/runtime (node) necessary.

#### Server details

lemonbrown.me is hosted on an digital ocean droplet, running on Ubuntu. SSH is used to access the provisioned droplet to setupt the server. 
Nginx is used for serving the static files. The files live in /var/www/laconicum, with the nginx server config pointing to this folder path. 

HTTPS is supported via certbot, which uses LetsEncrypt as a CA. 

**Note**
I ran into issues when attempting to "certify" the lemonbrown.me host via certbot. I had yet to point the site to a purchased domain name, leaving certbot unable to locate the ACME being served by the nginx config. 

#### CI/CD

Github actions are used to build and deploy the app. You can view the .github/workflow file in the repo. Effectively, the app is built with node, and delivered to the ocean droplet with SSH. The action uses appleboy/scp-action to allow SSH password passthrough with github secrets. 

CI/CD workflows seem to require tribal knowledge, and github actions is not an exception. It took lots of fiddling to get the correct set of instructions to deploy correctly. tar is used to zip the files. tar without a -C command will zip parent directories even you specify the child directory for zipping. It is difficult to 'see' where files are dropped, and what exactly is being built in most CI/CD tools, which leads to head scratching. This is simply nature of the beast; you have to grind your teeth.

## Why choose SvelteKit as the framework

Nothing scientific lead to the choice. At the time of building lemonbrown.me, sveltekit is the latest framework I have tinkered with, and I am the most comfortable with. 

Notably, .svelte files lean heavy into html, and the seperation of page.js/ts files remind me of early MVC development I am familiar with. I believe most frameworks would be fine to use, each requires investment of time to understand and use. Lots of 'magic' happen in these frameworks, hidden from the developer, making promises of 'fast' and 'easy' development evaporate. 

## Digital Ocean as a host

Droplets provide cheap and easy hosting needs. Setup has been fast, and straight forward. There are many providers in this space, each competing with cheap prices. My current costs will be approximately $4-5 a month for hosting lemonbrown.me.