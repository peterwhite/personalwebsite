---
title: What to Do If Your Traffic Drops after Migrating to Cloudflare
date: 2020-11-11T09:00:00.000+00:00
description: If you've moved to Cloudflare and noticed a sudden drop in daily active
  visitors this is how to solve the problem step-by-step
featured_image: ''

---
If you've moved to Cloudflare and noticed a sudden drop in daily active visitors this is how to solve the problem.

## Check for common Cloudflare issues

Before we jump into a technical fix, let's eliminate the most common Cloudflare issues first. Check that your DNS records, page rules and SSL configurations are correct. Pay attention to:

1. Non-WWW to WWW redirections
2. Page rules which cause infinite loops
3. DNS rules are incorrect, or Cloudflare is not enabled
4. Selecting the wrong flexible, strict or full SSL setting

## Why have my daily unique visitors dropped after switching to Cloudflare?

Before you switched to Cloudflare, visitors connected directly to your server.

![](/images/getting-started.png)

After switching to Cloudflare, visitors connect to Cloudflare, which then retrieves information from your server as required. This allows Cloudflare to act as a reverse proxy, caching frequently requested files and protecting your server.

![](/images/getting-started-2.png)

As visitors don't connect to your server directly anymore, **you no longer have access to the visitors IP address**.

This causes issues for some analytics tools, which track daily active visitors by their IP address.

Helpfully Cloudflare does provide the original visitors IP address in an HTTP header called `CF-Connecting-IP`

Get the original IP addresses for your visitors into your analytics tool by choosing one of the options below.

* **Cloudflare Enterprise:** Upgrade to Cloudflare Enterprise and enable the True-Client-Ip setting,[ following the instructions here](https://support.cloudflare.com/hc/en-us/articles/206776727-What-is-True-Client-IP-)
* **Apache or Nginx:** Install `mod_cloudflare` or `mod_remoteip` following the instructions provided by [CloudFlare](https://support.cloudflare.com/hc/en-us/articles/200170786-Restoring-original-visitor-IPs-Logging-visitor-IP-addresses)
* **Node:** Install request-ip, then pass the user IP to your analytics platform. On Google Analytics, you can send this as [an IP override using the `uip` parameter](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#uip)
* **Other:** Get the CF-Connecting-IP and pass this to your analytics tools and/or logs directly