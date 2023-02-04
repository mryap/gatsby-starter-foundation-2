---
template: blog-post
title: "What is FaceBook Coversion API "
slug: /facebook-capi
date: 2023-02-03 17:23
description: FB Pixels and FB Conversion API in the era of iOS, GDPR and Ad Blocker.
---
Over [three million businesses worldwide](https://www.facebook.com/business/news/3-million-advertisers#:~:text=Today%2C%20three%20million%20businesses%20actively,a%20unique%20story%20and%20mission.) use Facebook Ads.

### Background

iOS 14 update together with increased user controls from EU’s GDPR and California’s Privacy Rights Act, as well as rising usage of ad-blocking software limit Facebook’s ability to track events.

![](https://media.licdn.com/dms/image/C5612AQF2GE7iGPJ9Tw/article-inline_image-shrink_1500_2232/0/1642045451235?e=1680739200&v=beta&t=k8puuWGnLAX2VD-sV_2Jn_o-iGCZbrwvqdSB7Ubc6_E)

### Facebook Response

Facebook has [stopped using the 28-day attribution window](https://www.facebook.com/business/help/395050428485124?id=428636648170202) and is now only using the 7-day click or 1-day view attribution windows. If you had conversions happening more than 7 days after someone clicked on your ad. You may see a reduction in the number of conversions from what you had before.

Facebook is also [switching over to aggregated events](https://www.facebook.com/business/help/721422165168355). The Aggregated Event Measurement is a protocol that will allow you to measure conversion events in alignment with the iOS 14 restrictions. You’ll be limited to eight events, the events will be prioritized, and Facebook will only record the highest-priority event per transaction.

![](https://media.licdn.com/dms/image/C4E12AQGZxDjxWyPm_A/article-inline_image-shrink_1500_2232/0/1641879606174?e=1680739200&v=beta&t=iFmn7DctbTx9nRedAgC0nRPl76NS0SQ_UlI_XaJLCyM)

### Server-Side Events instead of Client-Side (Browser)

FB Conversion API previously known as Server-Side Events offers a way of tracking conversions. API is an acronym for application programming interface and it’s the most common way different apps and systems communicate with each other. This API send all the automatically triggered standard events - action the user completes (add to cart, purchase, lead, etc.) directly to Facebook’s servers, bypassing the customer browser’s limitation, or ad-blockers.

![](https://media.licdn.com/dms/image/C4E12AQHzW9o12UWzSA/article-inline_image-shrink_1500_2232/0/1641885864776?e=1680739200&v=beta&t=PZPK7Zz-N7vUlGeCrUv45x4Uzm8DcgVW_ls5eeK1VZo)

### What about Facebook Pixel?

Facebook Pixel tracking has been the standard way of tracking Facebook Ads Campaigns for many years. Users just simply plug a line of javascript into the website and [actually tracks everything visitors do on your website.](https://developers.facebook.com/docs/facebook-pixel/support#pixelcollect) FB Conversion API is not a replacement for your Facebook Pixel, both should be ran in parallel. 

In fact, FB recommends

> For optimal ad performance, we recommend that advertisers implement the Conversions API alongside their Facebook pixel and follow other [best practices](https://developers.facebook.com/docs/marketing-api/conversions-api/best-practices).

More conversion data using both Facebook Conversions API and the pixel will help Facebook’s ad optimization algorithm be more effective. If Facebook has both events, it will not count the redundant event and use just the browser event.

## Privacy concerns

The FB Conversion API uses data you collect from your customers. The server will track the user as they visit different pages on your website and note if they complete a purchase, opt for a lead, add a product to their shopping cart. This data is hashed and sent to Facebook. Consider updating your privacy terms to reflect this new feature.

### No Server Require

Using the Facebook Conversions API is not difficult, especially if you’re using a platform with a direct integration. Facebook has partner integrations with:

* Zapier
* WordPress
* WooCommerce
* Tealium
* Segment
* Makeshop
* Magento
* Cafe24

FB Pixels and FB Conversion API are the package deal in the era of iOS, GDPR and Ad Blocker.

### S﻿hopify

In October 2020, Shopify [released a new feature](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/facebook-data-sharing#choosing-facebooks-customer-tracking-level), which allows users to integrate Facebook Conversions API with their Shopify store.

### C﻿onclusions

FB pixel lets you share web events from a web browser. Conversions API lets you share web events directly from your server. Facebook pixel can be an effective business tool where your customers use web browsers that have not yet blocked cookies by default.

Conversions API doesn't use cookies, so web browser settings don't affect your ability to send data from customers that have provided you with all necessary consents. Used together, the pixel and Conversions API will maximise the effectiveness of your website customer data.

FB Pixels and FB Conversion API are the package deal in the era of iOS, GDPR and Ad Blocker.