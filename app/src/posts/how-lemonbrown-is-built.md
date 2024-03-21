---
title: How lemonbrown.me is built
date: 3-20-2024
categories:
    - dev
published: false
---

## How lemonbrown.me is built

lemonbrown.me is built with sveltekit, leveraging mdsvex to parse markdown files for the posts. The site is statically pre-rendered, and the files are served on a digital ocean droplet. The source code is hosted on github, and I use visual studio code as the IDE for development.

#### The app structure

The app has a simple folder structure defined as:  
- src/
    - lib/
    - posts/
    - routes/
        - [slug]/
        - categories/

#### +page.ts vs +page.server.ts
page.ts runs on the client, while page.server.ts run exclusively on the server. This means certain functionality may run different depending on how the app is built. lemonbrown.me is static pre-rendered, meaning 


## Why choosing sveltekit as the framework

