---
title: 'Guide: What to do if your traffic drops after migrating to Cloudflare'
date: 2020-11-11 09:00:00 +0000
description: If you've moved to Cloudflare and noticed a sudden drop in daily active
  visitors this is how to solve the problem step-by-step
featured_image: ''

---
If you've moved to Cloudflare and noticed a sudden drop in daily active visitors this is how to solve the problem step-by-step.

## **Check for common Cloudflare issues:**

Debugging issues with Cloudflare can be tricky, so let's eliminate the most common issues first. Check that your DNS records, page rules and SSL configurations are correct. Pay attention to:

1. Non-WWW to WWW redirections
2. Page rules which cause infinite loops
3. DNS rules are incorrect, or Cloudflare is not enabled
4. Selecting the wrong flexible, strict or full SSL setting

## **Why have my daily unique visitors dropped after switching to Cloudflare?**

Before you switched to Cloudflare, visitors connected directly to your server.

After switching to Cloudflare, visitors connect to Cloudflare, which then retrieves information from your server as required. This allows Cloudflare to act as a reverse proxy, caching frequently requested files and protecting your server.

As visitors don't connect to your server directly anymore, **you no longer have access to the visitors IP address**.

This causes issues for some analytics tools, which track daily active visitors by their IP address.

Helpfully Cloudflare does provide the original visitors IP address in an HTTP header called `CF-Connecting-IP`

**How do I fix the issue?**

Provide CF-Connecting-IP to your analytics tool by choosing one of the options below.

* **Cloudflare Enterprise:** Upgrade to Cloudflare Enterprise and enable the True-Client-Ip setting,[ following the instructions here](https://support.cloudflare.com/hc/en-us/articles/206776727-What-is-True-Client-IP-)
* **Apache or Nginx:** Install `mod_cloudflare` or `mod_remoteip` following the instructions provided by [CloudFlare](https://support.cloudflare.com/hc/en-us/articles/200170786-Restoring-original-visitor-IPs-Logging-visitor-IP-addresses)
* **Node:** Install request-ip, then pass the user IP to your analytics platform. On Google Analytics, you can send this as [an IP override using the `uip` parameter](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#uip)
* **Other:** Get the CF-Connecting-IP and pass this to your analytics tools and/or logs directly