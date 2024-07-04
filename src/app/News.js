"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
export default function News() {
  //   const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  //   useEffect(() => {
  //     fetch(
  //       `https://newsapi.org/v2/everything?q=apple&from=2024-06-30&to=2024-06-30&sortBy=popularity&apiKey=d61b9062cdf7427381b3cb3f1fe22fcf`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setNews(data.articles);
  //         console.log(data.articles);
  //         setIsLoaded(true);
  //       });
  //   }, []);
  const news = {
    status: "ok",
    totalResults: 687,
    articles: [
      {
        source: {
          id: "the-verge",
          name: "The Verge",
        },
        author: "David Pierce",
        title: "The portable speakers you need this summer",
        description:
          "Plus: ElevenLabs made a new AI reading app, The Bear is back, Notion Sites for websites, Figma Slides, and much more in this week’s issue of Installer.",
        url: "https://www.theverge.com/24188267/best-portable-bluetooth-speakers-boom-beats-installer",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/yaAYZp1W7t9Nsq6rboZU7F-6cqM=/0x0:2181x1455/1200x628/filters:focal(1091x728:1092x729)/cdn.vox-cdn.com/uploads/chorus_asset/file/25510448/installer_44.png",
        publishedAt: "2024-06-30T12:00:00Z",
        content:
          "The portable speakers you need this summer\r\nThe portable speakers you need this summer\r\n / Plus, in this weeks Installer: an AI app for reading anything, The Bear is back, an easy way to make website… [+10196 chars]",
      },
      {
        source: {
          id: null,
          name: "Android Central",
        },
        author: "michael.hicks@futurenet.com (Michael L Hicks)",
        title:
          "I lost 30 pounds in a year. These are the apps, tech, and tools I used to stay on track.",
        description:
          "After gaining over 20 pounds despite an active lifestyle, I decided to make a point of losing weight, without resorting to dieting trends. Within a year, I'd shed those pounds and lost another 10 (and counting). Here's the basic tech I used to pull it off.",
        url: "https://www.androidcentral.com/wearables/tech-and-apps-i-used-to-lose-30-pounds",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/wCMqQ3jdt7WU53n7cryAu-1200-80.jpeg",
        publishedAt: "2024-06-30T15:23:05Z",
        content:
          "(Image credit: Android Central)\r\nIn this weekly column, Android Central Wearables Editor Michael Hicks talks about the world of wearables, apps, and fitness tech related to running and health, in his… [+11337 chars]",
      },
      {
        source: {
          id: null,
          name: "MacRumors",
        },
        author: "Hartley Charlton",
        title:
          "Gurman: Apple Intelligence Coming to Vision Pro, but Not HomePod",
        description:
          'Apple has no plans to bring Apple Intelligence to the HomePod, but it should arrive on the Vision Pro headset in the future, Bloomberg\'s Mark Gurman reports.\n\n\n\n\n\nIn the latest edition of his "Power On" newsletter, Gurman said that Apple is preparing to bring…',
        url: "https://www.macrumors.com/2024/06/30/gurman-apple-intelligence-coming-to-vision-pro/",
        urlToImage:
          "https://images.macrumors.com/t/eNxYmCA1u77ZdJovI2KACUQ_lN0=/2500x/article-new/2024/06/Apple-Intelligence-General-Feature.jpg",
        publishedAt: "2024-06-30T18:17:48Z",
        content:
          'Apple has no plans to bring Apple Intelligence to the HomePod, but it should arrive on the Vision Pro headset in the future, Bloomberg\'s Mark Gurman reports.\r\nIn the latest edition of his "Power On" … [+1275 chars]',
      },
      {
        source: {
          id: null,
          name: "MacRumors",
        },
        author: "Hartley Charlton",
        title: "New iPhone Battery Should Be Up to 10% Denser for Longer Life",
        description:
          "A new iPhone battery with a metal casing should allow for higher energy density to deliver longer battery life, Apple analyst Ming-Chi Kuo claims. \n\n\n\nAlleged iPhone 16 Pro battery with new metal casing.\n\nIn a post on X (formerly Twitter), Kuo said that Apple…",
        url: "https://www.macrumors.com/2024/06/30/new-iphone-battery-denser-for-longer-life/",
        urlToImage:
          "https://images.macrumors.com/t/4QjgcoERAPng0Isf8u4vbuPYdPY=/2048x/article-new/2023/11/iphone-16-pro-battery-kosutami.jpg",
        publishedAt: "2024-06-30T18:48:58Z",
        content:
          "A new iPhone battery with a metal casing should allow for higher energy density to deliver longer battery life, Apple analyst Ming-Chi Kuo claims. \r\nIn a post on X (formerly Twitter), Kuo said that A… [+942 chars]",
      },
      {
        source: {
          id: null,
          name: "ReadWrite",
        },
        author: "James Jones",
        title: "iPhone 16 Ultra: Rumors, Release Date, Features",
        description:
          "As we eagerly await the release of the Apple iPhone 16 family in the fall of 2024, rumors are growing… Continue reading iPhone 16 Ultra: Rumors, Release Date, Features\nThe post iPhone 16 Ultra: Rumors, Release Date, Features appeared first on ReadWrite.",
        url: "https://readwrite.com/iphone-16-ultra-rumors-release-date-features/",
        urlToImage:
          "https://readwrite.com/wp-content/uploads/2024/06/FoStsrgXwAAj2iO-scaled.jpeg",
        publishedAt: "2024-06-30T12:00:50Z",
        content:
          "As we eagerly await the release of the Apple iPhone 16 family in the fall of 2024, rumors are growing surrounding the potential of an Ultra version being included for the first time.\r\nTalk of an Ultr… [+6899 chars]",
      },
      {
        source: {
          id: null,
          name: "Hackaday",
        },
        author: "Maya Posch",
        title: "Apple May Use Electrical Debonding For Battery Replacement",
        description:
          "As a result of the European Union’s push for greater repairability of consumer devices like smartphones, Apple sees itself forced to make the batteries in the iPhone user-replaceable by 2027. …read more",
        url: "https://hackaday.com/2024/06/29/apple-may-use-electrical-debonding-for-battery-replacement/",
        urlToImage:
          "https://hackaday.com/wp-content/uploads/2024/06/tesa_electrical_release_on_demand.jpg",
        publishedAt: "2024-06-30T02:00:27Z",
        content:
          "As a result of the European Union’s push for greater repairability of consumer devices like smartphones, Apple sees itself forced to make the batteries in the iPhone user-replaceable by 2027. Reporte… [+1680 chars]",
      },
      {
        source: {
          id: null,
          name: "Tom's Guide",
        },
        author: "John Velasco",
        title:
          "I took over 200 photos with the iPhone 15 Plus vs Galaxy S24 Plus — here's the winner",
        description:
          "In this Apple iPhone 15 Plus vs. Samsung Galaxy S24 Plus photo shootout, I captured over 200 photos to see which is the better phone for photography under...",
        url: "https://www.tomsguide.com/phones/i-took-over-200-photos-with-the-iphone-15-plus-vs-galaxy-s24-plus-heres-the-winner",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/9wvAovxFGNbRnJwnzBK3hQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/toms_guide_826/151570441b80423dc73f0b5d7dc5721f",
        publishedAt: "2024-06-30T04:01:00Z",
        content:
          "In my last photo shootout between the iPhone 15 Pro and Galaxy S24 Plus, Apples flagship came out on top between the two $999 phones. This time, however, Im taking the iPhone 15 Plus and Galaxy S24 P… [+12623 chars]",
      },
      {
        source: {
          id: null,
          name: "Digital Trends",
        },
        author: "Caleb Denison",
        title:
          "You Asked: Where’s the Bravia, Apple projection, HDR highlights",
        description:
          "I’m going to start this week with what might be the most-asked question over the past week from the YouTube comments section. Because a lot of you are asking.",
        url: "https://www.digitaltrends.com/home-theater/you-asked-where-bravia-7-9-apple-projection/",
        urlToImage:
          "https://www.digitaltrends.com/wp-content/uploads/2024/06/You-Asked-Ep-44-On-Site.jpg?resize=1200%2C630&p=1",
        publishedAt: "2024-06-30T14:00:55Z",
        content:
          "Skip to main content\r\nThis week on You Asked: Where are the Sony Bravia 7 &amp; 9 reviews? What’s the difference between displaying 16:9 content on a 21:9 device? Full screen vs HDR brightness? Which… [+7056 chars]",
      },
      {
        source: {
          id: null,
          name: "Digital Trends",
        },
        author: "Bryan M. Wolfe",
        title:
          "I ditched my Oura Ring for a cheaper smart ring. What happened amazed me",
        description:
          "I've worn an Oura Ring for years, but I recently decided to switch to a cheaper smart ring. Here's what happened.",
        url: "https://www.digitaltrends.com/mobile/i-ditched-my-oura-ring-for-a-cheaper-smart-ring/",
        urlToImage:
          "https://www.digitaltrends.com/wp-content/uploads/2024/02/oura-ring-ringconn-smart-ring-fingers.jpg?resize=1200%2C630&p=1",
        publishedAt: "2024-06-30T16:00:25Z",
        content:
          "Oura Ring (left) and the RingConn Smart RingAndy Boxall / Digital Trends\r\nI recently had the opportunity to remove my Oura Ring and try a more affordable alternative. What I discovered changed my opi… [+5813 chars]",
      },
      {
        source: {
          id: null,
          name: "Digital Trends",
        },
        author: "Giovanni Colantonio",
        title:
          "This is your heads up: July is about to be an incredible month for games",
        description:
          "This July may not have many heavy hitter video games launching, but it's quietly shaping up to be the busiest release month of 2024.",
        url: "https://www.digitaltrends.com/gaming/video-game-releases-july-2024/",
        urlToImage:
          "https://www.digitaltrends.com/wp-content/uploads/2024/03/Kunitsu-Gami_-_Screenshot_2_png_jpgcopy.jpg?resize=1200%2C630&p=1",
        publishedAt: "2024-06-30T10:00:35Z",
        content:
          "Capcom\r\nBack in May, we were drowning in a surprising deluge of new video games. A lot of the month’s best releases felt like they came out of left field thanks to indie gems like Animal Well and Lor… [+3274 chars]",
      },
      {
        source: {
          id: null,
          name: "Digital Trends",
        },
        author: "Andy Boxall",
        title: "This cool new phone shows what’s wrong with Motorola in 2024",
        description:
          "I've been using the Motorola Edge 50 Pro, a phone I really like. Unfortunately, I'm tired of Motorola not fixing the same old problems that plague its phones.",
        url: "https://www.digitaltrends.com/mobile/this-cool-phone-edge-50-pro-shows-whats-wrong-with-motorola-in-2024/",
        urlToImage:
          "https://www.digitaltrends.com/wp-content/uploads/2024/06/moto-edge-50-pro-back-hand.jpg?resize=1200%2C630&p=1",
        publishedAt: "2024-06-30T12:00:55Z",
        content:
          "Andy Boxall / Digital Trends\r\nI’ve been using the Motorola Edge 50 Pro for the last few weeks with no real complaints, but that’s mainly because I’ve slowly accepted it’s yet another Motorola smartph… [+7253 chars]",
      },
      {
        source: {
          id: null,
          name: "The Hustle",
        },
        author: "Katherine Laidlaw",
        title: "The Cutest Monopoly",
        description:
          "In the age of antitrust, why has Koala Kare, Big Baby Change Station, flown under the radar?",
        url: "https://thehustle.co/originals/the-worlds-cutest-monopoly#article",
        urlToImage:
          "https://20627419.fs1.hubspotusercontent-na1.net/hubfs/20627419/share-Jun-28-2024-07-43-06-3743-PM.png",
        publishedAt: "2024-06-30T11:17:13Z",
        content:
          "In the age of antitrust, why has Koala Kare, Big Baby Change Station, flown under the radar? \r\nJeff Hilger had $15k, an idea, and a problem. \r\nHilger, a medical device salesman, ran a company in Minn… [+8217 chars]",
      },
      {
        source: {
          id: null,
          name: "heise online",
        },
        author: "Wolfgang Kreutz",
        title:
          "heise+ | Digitale Wetterfrösche: Wetter-Apps mit Datenquellen-Wahl für iPhone und iPad",
        description:
          "Der Wetterbericht eines Anbieters lässt Sie öfter im Regen stehen? Wir haben uns neun Wetter-Apps mit Zugriff auf mehrere Prognose-Dienstleister angesehen.",
        url: "https://www.heise.de/tests/Digitale-Wetterfroesche-Wetter-Apps-mit-Datenquellen-Wahl-fuer-iPhone-und-iPad-9746349.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
        urlToImage:
          "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/0/4/9/6/6/mi2403_wetter_apps_aufmacher_digital-69c93c7b8c239a45.jpg",
        publishedAt: "2024-06-30T06:00:00Z",
        content:
          "Inhaltsverzeichnis\r\nFür viele gehört der Blick in Apples Wetter-App oder auf die zugehörigen Widgets zur täglichen Routine. Spätestens, wenn sich die Prognose wiederholt als unzuverlässig erweist, dü… [+1907 chars]",
      },
      {
        source: {
          id: null,
          name: "heise online",
        },
        author: "Peter Siering",
        title: "KI-Technik als zweifelhafter Messias – ein Kommentar",
        description:
          "KI wird als Lösung für Probleme angepriesen, die man mit guter Organisation nicht hätte. Wird Zeit für einen neuen Hype, der KI verdrängt, meint Peter Siering.",
        url: "https://www.heise.de/meinung/KI-Technik-als-zweifelhafter-Messias-ein-Kommentar-9779535.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
        urlToImage:
          "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/2/2/4/2/9/Overlay_KommentarV2_1_-0503c7c03785fcea.png",
        publishedAt: "2024-06-30T04:30:00Z",
        content:
          "Das Beste an KI ist, dass niemand mehr von Blockchain faselt, sagte ein gelegentlicher ct-Autor vor einiger Zeit. In mir wächst mittlerweile die Ungeduld, dass endlich ein neuer Hypermessias um die E… [+2620 chars]",
      },
      {
        source: {
          id: null,
          name: "9to5Mac",
        },
        author: "Chance Miller",
        title: "Apple begins work on iOS 19 update codenamed ‘Luck’ and more",
        description:
          "Apple just announced iOS 18 a few weeks ago at WWDC, touting new home screen features, Apple Intelligence, and much more. Now, right on schedule, Bloomberg reports that Apple has already started development on iOS 19, macOS 16, watchOS 12, and visionOS 3 for …",
        url: "https://9to5mac.com/2024/06/30/ios-19-development-codename-leak/",
        urlToImage:
          "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/when-does-ios-17-4-come-out-1.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        publishedAt: "2024-06-30T12:37:07Z",
        content:
          "Apple just announced iOS 18 a few weeks ago at WWDC, touting new home screen features, Apple Intelligence, and much more. Now, right on schedule, Bloomberg reports that Apple has already started deve… [+1152 chars]",
      },
      {
        source: {
          id: null,
          name: "9to5Mac",
        },
        author: "Arin Waichulis",
        title:
          "Security Bite: Ranking my favorite new privacy features in iOS 18",
        description:
          "9to5Mac Security Bite is exclusively brought to you by Mosyle, the only Apple Unified Platform. Making Apple devices work-ready and enterprise-safe is all we do. Our unique integrated approach to management and security combines state-of-the-art Apple-specifi…",
        url: "https://9to5mac.com/2024/06/30/security-bite-ranking-my-favorite-new-privacy-features-in-ios-18/",
        urlToImage:
          "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/Security-Bite-FI-1.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
        publishedAt: "2024-06-30T14:47:32Z",
        content:
          "9to5Mac Security Bite is exclusively brought to you by Mosyle, the only Apple Unified Platform.Making Apple devices work-ready and enterprise-safe is all we do. Our unique integrated approach to mana… [+6547 chars]",
      },
      {
        source: {
          id: null,
          name: "9to5Mac",
        },
        author: "Benjamin Mayo",
        title:
          "Fortnite and Epic Game Store submitted to Apple for launch in the EU",
        description:
          "The special EU App Store rules were rolled out earlier this year in response to the Digital Markets Act, which forced Apple to open up the iPhone software ecosystem to include alternatives to the App Store.\n\n\n\nSo far, not many have taken up the opportunity, i…",
        url: "https://9to5mac.com/2024/06/30/fortnite-and-epic-game-store-submitted-to-apple-for-launch-in-the-eu/",
        urlToImage:
          "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/04/fortnite-ios.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        publishedAt: "2024-06-30T09:32:01Z",
        content:
          "The special EU App Store rules were rolled out earlier this year in response to the Digital Markets Act, which forced Apple to open up the iPhone software ecosystem to include alternatives to the App… [+2439 chars]",
      },
      {
        source: {
          id: null,
          name: "9to5Mac",
        },
        author: "Chance Miller",
        title:
          "Kuo: Apple to begin mass production of AirPods with cameras by 2026",
        description:
          "According to a new report from analyst Ming-Chi Kuo, Apple is targeting to begin mass production of new “AirPods with camera modules” by 2026. This report comes after Bloomberg also noted Apple’s plans for developing AirPods with cameras back in February.\n\n\n\n…",
        url: "https://9to5mac.com/2024/06/30/airpods-with-cameras-report-production/",
        urlToImage:
          "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/AirPods-Pro-2-2.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
        publishedAt: "2024-06-30T12:19:54Z",
        content:
          "According to a new report from analyst Ming-Chi Kuo, Apple is targeting to begin mass production of new AirPods with camera modules by 2026. This report comes after Bloomberg also noted Apples plans … [+1876 chars]",
      },
      {
        source: {
          id: null,
          name: "Android Police",
        },
        author: "Nathan Drescher",
        title: "Modern smartphones are boring",
        description:
          "Smartphones are boring me to tears. Are you feeling it too?",
        url: "https://www.androidpolice.com/im-utterly-bored-by-modern-smartphones/",
        urlToImage:
          "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2024/06/simple-smartphone-guide-5.jpg",
        publishedAt: "2024-06-30T18:00:12Z",
        content:
          "I'm bored with smartphones today. It feels it's been years since a new Android competitor offered much more than a spec bump. There was the Pixel 6 in 2021, which was cool with a new design and chips… [+5903 chars]",
      },
      {
        source: {
          id: null,
          name: "Android Police",
        },
        author: "Jesse Hollington",
        title: "Sonos Ace vs. Sony WH-1000XM5: A worthy new challenger arrives",
        description:
          "Sonos’ first headphones hit many of the right notes, but are they enough to topple Sony’s flagships?",
        url: "https://www.androidpolice.com/sonos-ace-vs-sony-wh-1000xm5/",
        urlToImage:
          "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/06/ap-sonos-ace-vs-sony-wh-1000xm5.jpg",
        publishedAt: "2024-06-30T13:00:12Z",
        content:
          "\u003Cul\u003E\u003Cli\u003E Sonos Ace \r\nSonos has made an impressive set of first-generation headphones, hitting most of the right notes for great ANC, excellent transparency, and deep, rich sound. They also boast a co… [+12845 chars]",
      },
      {
        source: {
          id: null,
          name: "AppleInsider",
        },
        author: "news@appleinsider.com (Charles Martin)",
        title:
          "Apple may want to monetize advanced Apple Intelligence features in the future",
        description:
          "Apple is considering a paid future for aspects of its Apple Intelligence service that would expand to a subscription model for additional features and more AI partners.Future expansions to Apple Intelligence may involve more AI partners, paid subscriptionsThe…",
        url: "https://appleinsider.com/articles/24/06/30/apple-may-want-to-monetize-advanced-apple-intelligence-features-in-the-future",
        urlToImage:
          "https://photos5.appleinsider.com/gallery/60214-123653-60019-123354-Apple-Intelligence-Logo-xl-xl.jpg",
        publishedAt: "2024-06-30T14:32:30Z",
        content:
          "Future expansions to Apple Intelligence may involve more AI partners, paid subscriptions\r\nApple is considering a paid future for aspects of its Apple Intelligence service that would expand to a subsc… [+1929 chars]",
      },
      {
        source: {
          id: null,
          name: "AppleInsider",
        },
        author: "news@appleinsider.com (Mike Wuerthele)",
        title: "Apple Intelligence may be coming to Vision Pro -- but not soon",
        description:
          "The roll-out of Apple Intelligence in the fall is passing over the Apple Vision Pro — but a report on Sunday claims that it could arrive on the existing hardware as soon as 2025.Apple Vision Pro: hardhat optionalApple Intelligence is arriving in test in the n…",
        url: "https://appleinsider.com/articles/24/06/30/apple-intelligence-may-be-coming-to-vision-pro----but-not-soon",
        urlToImage:
          "https://photos5.appleinsider.com/gallery/58579-119416-steeper-hardhat-xl.jpg",
        publishedAt: "2024-06-30T13:21:20Z",
        content:
          "Apple Vision Pro: hardhat optional\r\nLast updated 18 minutes ago\r\nThe roll-out of Apple Intelligence in the fall is passing over the Apple Vision Pro — but a report on Sunday claims that it could arri… [+1613 chars]",
      },
      {
        source: {
          id: null,
          name: "AppleInsider",
        },
        author: "news@appleinsider.com (William Gallagher)",
        title:
          "New AirPods with IR camera coming to enhance Spatial Audio in Apple Vision Pro",
        description:
          "Analyst Ming-Chi Kuo says Apple is planning to release AirPods with infra-red camera modules that detect when a user turns their head, and so automatically adjust Apple Vision Pro audio output to match.Future AirPods Pro will work better with Spatial Audio in…",
        url: "https://appleinsider.com/articles/24/06/30/new-airpods-with-ir-camera-coming-to-enhance-spatial-audio-in-apple-vision-pro",
        urlToImage:
          "https://photos5.appleinsider.com/gallery/60210-123650-Image-8-xl.jpg",
        publishedAt: "2024-06-30T11:06:00Z",
        content:
          "Future AirPods Pro will work better with Spatial Audio in the Apple Vision Pro headset\r\nAnalyst Ming-Chi Kuo says Apple is planning to release AirPods with infra-red camera modules that detect when a… [+2007 chars]",
      },
      {
        source: {
          id: null,
          name: "AppleInsider",
        },
        author: "news@appleinsider.com (Stephen Silver)",
        title:
          "Crime blotter: 'Meatball' pleads guilty in Apple Store looting case, and more!",
        description:
          "In the latest from the Apple crime blotter, thieves steal an iPhone and then threatened the owner, an iPad theft led to hit-and-run, still no reports of Apple Vision Pro crime, and AirTags are still popular with carjackers and thieves.Apple Store on Walnut St…",
        url: "https://appleinsider.com/articles/24/06/30/crime-blotter-meatball-pleads-guilty-in-apple-store-looting-case-and-more",
        urlToImage:
          "https://photos5.appleinsider.com/gallery/60204-123641-applestorewalnut-xl.jpg",
        publishedAt: "2024-06-30T15:01:04Z",
        content:
          "Apple Store on Walnut Street in Philadelphia \r\nIn the latest from the Apple crime blotter, thieves steal an iPhone and then threatened the owner, an iPad theft led to hit-and-run, still no reports of… [+4005 chars]",
      },
      {
        source: {
          id: null,
          name: "AppleInsider",
        },
        author: "news@appleinsider.com (Charles Martin)",
        title:
          "Epic moves forward with iPhone 'Fortnite' return plans via EU alternative App Store",
        description:
          'Good news for European Union "Fortnite" fans — Epic Games is planning to relaunch the game on its own iPhone app store.Pending approvals, the Epic Games Store will open in the near future.The company has posted a status update on X.com updating its followers.…',
        url: "https://appleinsider.com/articles/24/06/30/epic-moves-forward-with-iphone-fortnite-return-plans-via-eu-alternative-app-store",
        urlToImage:
          "https://photos5.appleinsider.com/gallery/60215-123654-Unknown-xl.jpg",
        publishedAt: "2024-06-30T16:41:01Z",
        content:
          'Pending approvals, the Epic Games Store will open in the near future.\r\nGood news for European Union "Fortnite" fans — Epic Games is planning to relaunch the game on its own iPhone app store.\r\nThe com… [+2486 chars]',
      },
      {
        source: {
          id: null,
          name: "AppleInsider",
        },
        author: "news@appleinsider.com (Malcolm Owen)",
        title: "A MacBook Pro design refresh is probably years away",
        description:
          "Apple probably won't be changing the design of its MacBook Pro for a few more years, as the company continues to increase the longevity of its products.An example of a current-gen MacBook ProApple's MacBook Pro and MacBook Air are iconic in the world of noteb…",
        url: "https://appleinsider.com/articles/24/06/30/a-macbook-pro-design-refresh-is-probably-years-away",
        urlToImage:
          "https://photos5.appleinsider.com/gallery/60212-123651-58596-119421-000-lead-OLED-MBP-xl-xl.jpg",
        publishedAt: "2024-06-30T13:21:43Z",
        content:
          "An example of a current-gen MacBook Pro\r\nLast updated 31 minutes ago\r\nApple probably won't be changing the design of its MacBook Pro for a few more years, as the company continues to increase the lon… [+1129 chars]",
      },
      {
        source: {
          id: null,
          name: "AppleInsider",
        },
        author: "news@appleinsider.com (Charles Martin)",
        title: "Apple is already working on iOS 19, iPadOS 19, and macOS 16",
        description:
          "A new report says that Apple has formally begun work on the OS updates planned for late 2025, including macOS, iOS, watchOS, and visionOS.Apple's hardware and software plans for 2025 are already underwayIn a typical move, Apple is wrapping up its foundational…",
        url: "https://appleinsider.com/articles/24/06/30/apple-is-already-working-on-ios-19-ipados-19-and-macos-16",
        urlToImage:
          "https://photos5.appleinsider.com/gallery/60213-123652-45738-88967-Apple-Logo-Building-Header-xl-433054027-xl.jpg",
        publishedAt: "2024-06-30T13:39:03Z",
        content:
          "Apple's hardware and software plans for 2025 are already underway\r\nLast updated 10 minutes ago\r\nA new report says that Apple has formally begun work on the OS updates planned for late 2025, including… [+1576 chars]",
      },
      {
        source: {
          id: null,
          name: "CNET",
        },
        author: "Ingrid Cruz",
        title:
          "Last Chance To Score Major Discounts During Best Buy's Member Deal Days Sale",
        description:
          "You still have until the end of the day to take advantage of huge savings at Best Buy's Member Deal Days sale.",
        url: "https://www.cnet.com/deals/last-chance-to-score-major-discounts-during-best-buys-member-deal-days-sale/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/b8db594d25038634cfacd85ae088fe033c0cbfbb/hub/2024/06/24/e10940ef-998a-47a9-9f6a-02d1c4c877be/best-buy-membership-sale.png?auto=webp&fit=crop&height=675&width=1200",
        publishedAt: "2024-06-30T16:07:00Z",
        content:
          "If you're looking to grab the latest and best tech at a discount, you won't want to miss this new sale at Best Buy, especially if you're a paying member. Best Buy's membership program offers a great … [+2500 chars]",
      },
      {
        source: {
          id: null,
          name: "CNET",
        },
        author: "Abrar Al-Heeti",
        title:
          "Samsung Unpacked Summer 2024: What to Expect, From the Galaxy Z Fold 6 to AI and More",
        description: "Here's how to watch the keynote.",
        url: "https://www.cnet.com/tech/mobile/samsung-unpacked-summer-2024-what-to-expect-from-the-galaxy-z-fold-6-to-ai-and-more/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/b6af6f335a9fc24a3a0fd902c74c22eeea9a5f88/hub/2024/06/28/7d7681e8-77bc-405b-b04c-a72142d7eeef/240626-promo-image-samsung-unpacked-july-v03.jpg?auto=webp&fit=crop&height=675&width=1200",
        publishedAt: "2024-06-30T12:00:12Z",
        content:
          "Samsung's summer Galaxy Unpacked event is less than two weeks away, and plenty of rumors are swirling about what'll be unveiled. It's possible the company will introduce new foldable phones, earbuds,… [+5212 chars]",
      },
      {
        source: {
          id: null,
          name: "Applesfera.com",
        },
        author: "Guille Lomener",
        title:
          "El CEO de Apple defiende Apple Intelligence pero su confianza en el proyecto 'nunca será del 100%'",
        description:
          "Estamos cerca de cumplir el primer mes tras la presentación de Apple Intelligence. Nuestro compañero Pedro Aznar de Applesfera pudo probarla en persona en el Apple Park y sus primeras sensaciones fueron impresionantes. Apple Intelligence se trata de una de la…",
        url: "https://www.applesfera.com/apple-1/ceo-apple-defiende-apple-intelligence-su-confianza-proyecto-nunca-sera-100",
        urlToImage: "https://i.blogs.es/860ea3/cook/840_560.jpeg",
        publishedAt: "2024-06-30T08:00:41Z",
        content:
          "Estamos cerca de cumplir el primer mes tras la presentación de Apple Intelligence. Nuestro compañero Pedro Aznar de Applesfera pudo probarla en persona en el Apple Park y sus primeras sensaciones fue… [+4096 chars]",
      },
      {
        source: {
          id: null,
          name: "Applesfera.com",
        },
        author: "Isra Fdez",
        title:
          "Este tiktoker descubre que su tatuaje afecta a las mediciones del Apple Watch. Toma la decisión más drástica posible",
        description:
          "Durante años se ha hablado de ello: ¿puede un tatuaje perjudicar la lectura de datos biométricos del Apple Watch? Es algo que se ha debatido durante años, con reportes que se remontan a los primeros días del Apple Watch, hace casi diez años. Sin embargo, nunc…",
        url: "https://www.applesfera.com/apple-watch/este-tiktoker-descubre-que-su-tatuaje-afecta-a-mediciones-apple-watch-toma-decision-drastica-posible",
        urlToImage:
          "https://i.blogs.es/85ab72/apple-watch-de-rian-con-tatuaje/840_560.jpeg",
        publishedAt: "2024-06-30T10:00:39Z",
        content:
          "Durante años se ha hablado de ello: ¿puede un tatuaje perjudicar la lectura de datos biométricos del Apple Watch? Es algo que se ha debatido durante años, con reportes que se remontan a los primeros … [+2779 chars]",
      },
      {
        source: {
          id: null,
          name: "Applesfera.com",
        },
        author: "Jesús Quesada",
        title:
          "Casi a precio mínimo la memoria Flash USB-C de Kingston con velocidades ultrarrápidas de SSD compatible con iPad y Mac",
        description:
          "Si hasta los SSD portátiles más compactos te parecen demasiado grandes, y necesitas un soporte de almacenamiento externo con velocidades de transferencia ultrarrápidas, el Kingston DataTraveler Max de 1 TB puede ser lo que estabas buscando y está rebajado cas…",
        url: "https://www.applesfera.com/seleccion/casi-a-precio-minimo-memoria-flash-usb-c-kingston-velocidades-ultrarrapidas-ssd-compatible-ipad-mac",
        urlToImage:
          "https://i.blogs.es/8d1e78/kingston-datatraveler/840_560.jpeg",
        publishedAt: "2024-06-30T17:01:38Z",
        content:
          "Si hasta los SSD portátiles más compactos te parecen demasiado grandes, y necesitas un soporte de almacenamiento externo con velocidades de transferencia ultrarrápidas, el Kingston DataTraveler Max d… [+1506 chars]",
      },
      {
        source: {
          id: null,
          name: "XDA Developers",
        },
        author: "Elliot Alexander",
        title: "Is Apple going to give us the XServe replacement we need?",
        description:
          "XServe once served its purpose, and with PCC, the need again arises for a revolutionary Apple server",
        url: "https://www.xda-developers.com/is-apple-going-to-give-us-the-xserve-replacement-we-deserve/",
        urlToImage:
          "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/06/bring-your-game-to-mac-part-1_-make-a-game-plan-_-10123-_-wwdc-2023-0-39-screenshot.png",
        publishedAt: "2024-06-30T23:00:12Z",
        content:
          "Key Takeaways\r\n\u003Cul\u003E\u003Cli\u003E Apple's Private Cloud Compute (PCC) runs exclusively on Apple Silicon, potentially hinting at a new server hardware release. \u003C/li\u003E\u003Cli\u003E XServe, Apple's macOS server, was discon… [+6702 chars]",
      },
      {
        source: {
          id: null,
          name: "XDA Developers",
        },
        author: "Simon Batt",
        title:
          "Apple Intelligence may get Google Gemini support in the next few months",
        description:
          "Apple may have been late to the AI party, but it's catching up by bringing everybody else's models under one umbrella.",
        url: "https://www.xda-developers.com/apple-intelligence-google-gemini-support-rumor/",
        urlToImage:
          "https://static1.xdaimages.com/wordpress/wp-content/uploads/2024/06/2024-06-10_19-41-36-162.jpeg",
        publishedAt: "2024-06-30T22:59:30Z",
        content:
          "Key Takeaways\r\n\u003Cul\u003E\u003Cli\u003E\r\n Apple partners with OpenAI for ChatGPT integration in Apple Intelligence.\r\n \u003C/li\u003E\u003Cli\u003E\r\n Apple may announce Google Gemini as a third-party AI option.\r\n \u003C/li\u003E\u003Cli\u003E\r\n Apple's st… [+1923 chars]",
      },
      {
        source: {
          id: null,
          name: "Ritholtz.com",
        },
        author: "Barry Ritholtz",
        title: "10 Sunday Reads",
        description:
          "Avert your eyes! My Sunday morning look at incompetency, corruption and policy failures: • The Federal Reserve’s Little Secret: No one really knows how interest rates work, or even whether they work at all—not the experts who study them, the investors who tra…",
        url: "https://ritholtz.com/2024/06/10-sunday-reads-169/",
        urlToImage:
          "https://ritholtz.com/wp-content/uploads/2024/06/concentration.png",
        publishedAt: "2024-06-30T10:30:46Z",
        content:
          "The Federal Reserves Little Secret: No one really knows how interest rates work, or even whether they work at allnot the experts who study them, the investors who track them, or the officials who set… [+3174 chars]",
      },
      {
        source: {
          id: null,
          name: "Xataka Android",
        },
        author: "Eva Rodriguez de Luis",
        title:
          "iOS 18 podrá grabar llamadas de forma nativa. Mientras tanto en Android todo son problemas",
        description:
          "Qué útil resulta para usuarios y usuarias grabar llamadas y cuántos problemas hay para ponerlo en práctica. Porque aunque la ley española deja muy claro cuándo está permitido y cuándo no, la realidad es que Android no lo permite de forma nativa. Así que para …",
        url: "https://www.xatakandroid.com/aplicaciones-android/ios-18-podra-grabar-llamadas-forma-nativa-android-todo-problemas",
        urlToImage: "https://i.blogs.es/66eef7/grabar/840_560.jpeg",
        publishedAt: "2024-06-30T10:00:39Z",
        content:
          "Qué útil resulta para usuarios y usuarias grabar llamadas y cuántos problemas hay para ponerlo en práctica. Porque aunque la ley española deja muy claro cuándo está permitido y cuándo no, la realidad… [+5032 chars]",
      },
      {
        source: {
          id: null,
          name: "HYPEBEAST",
        },
        author: "info@hypebeast.com (Hypebeast)",
        title:
          "LeBron James and Lil Wayne Brought Back the Beats Pill in This Week's Tech Roundup",
        description:
          "This week, the tech industry saw Beats revive its iconic Beats Pill portable speaker, tapping none other than LeBron James and Lil Wayne to lead the campaign for the modernized edition of the staple speaker.In a similar vein, Charles Leclerc joined forces wit…",
        url: "https://hypebeast.com/2024/6/weekly-tech-roundup-lil-wayne-lebron-james-beats-pill-charles-leclerc-apple-vision-pro",
        urlToImage:
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F06%2F30%2Fweekly-tech-roundup-lil-wayne-lebron-james-beats-pill-charles-leclerc-apple-vision-pro-tw.jpg?w=1080&cbr=1&q=90&fit=max",
        publishedAt: "2024-06-30T20:03:17Z",
        content:
          "You are reading your free article for this month. Login or sign up for a free account now for unlimited reading.\r\nThis week, the tech industry saw Beats revive its iconic Beats Pill portable speaker,… [+2317 chars]",
      },
      {
        source: {
          id: null,
          name: "Android Authority",
        },
        author: "Ryan Haines",
        title: "I blame Apple for Samsung settling into foldable mediocrity",
        description:
          "Let's play the blame game and pin Samsung's underwhelming Galaxy updates on the obvious guilty party: Someone else.",
        url: "https://www.androidauthority.com/apple-samsung-mediocrity-3455410/",
        urlToImage:
          "https://www.androidauthority.com/wp-content/uploads/2023/07/Samsung-Galaxy-Z-Fold-5-and-Galaxy-Z-Flip-5-back-panel.jpg",
        publishedAt: "2024-06-30T16:00:08Z",
        content:
          "Yes, its a spicy headline, but hear me out. Have you seen the most recent leaks of Samsungs upcoming foldable phones? If not, I can save you some time it looks like the Galaxy Z Flip 6 and Galaxy Z F… [+6057 chars]",
      },
      {
        source: {
          id: null,
          name: "Android Authority",
        },
        author: "Robert Triggs",
        title:
          "Would a MediaTek-powered Galaxy S25 really be such a bad thing?",
        description:
          "With MediaTek processors rumored to be heading to the Galaxy Tab S10 line, perhaps the chip could fit in the Galaxy S series too?",
        url: "https://www.androidauthority.com/samsung-galaxy-s25-mediatek-3453951/",
        urlToImage:
          "https://www.androidauthority.com/wp-content/uploads/2024/01/Samsung-Galaxy-S24-in-hand-homescreen.jpg",
        publishedAt: "2024-06-30T14:00:34Z",
        content:
          "Were still months out from the Samsung Galaxy S25 series, but rumors are already swirling (as they do) about what the phone will look like. One contentious area of discussion, as ever, is the chipset… [+7284 chars]",
      },
      {
        source: {
          id: null,
          name: "CNET",
        },
        author: "Lexy Savvides （CNET News） 翻訳校正： 石橋啓一郎",
        title:
          "アップルとグーグルの「探す」機能はどちらが優秀？なくし物を実際に探してみた",
        description:
          "アップル製品やAndroidデバイスには、どちらも「なくし物」を探す機能が搭載されており、最近では他社のBluetoothトラッカーにも対応するようになった。この記事では、アップルの「探す」とグーグルの「デバイスを探す」の機能を実際に試して比較してみた。",
        url: "https://japan.cnet.com/article/35220542/",
        urlToImage:
          "https://japan.cnet.com/storage/2024/06/26/2bf1d3d1a076b91da1b9501e0047634f/findmynetworks_1280x960.jpg",
        publishedAt: "2024-06-30T22:30:00Z",
        content:
          "GoogleAndroidWear OS4ChipoloONE PointBluetooth\r\nAppleiPhoneiPadApple WatchAirTagAppleNomadTracking Card\r\n20242ChipoloONE PointAirTag39CNETJohn KimBluetoothiPhone 14 ProPixel 8 Pro \r\nAppleGoogle\r\nAppl… [+502 chars]",
      },
      {
        source: {
          id: null,
          name: "MacRumors",
        },
        author: "Hartley Charlton",
        title:
          "Apple Reportedly Starts Work on iOS 19, macOS 16, watchOS 12, and visionOS 3",
        description:
          'Apple has already begun work on the iOS 19, macOS 16, watchOS 12, and visionOS 3 software updates for next year, according to Bloomberg\'s Mark Gurman.\n\n\n\n\n\nWriting in his most recent "Power On" newsletter, Gurman said that Apple has formally begun development…',
        url: "https://www.macrumors.com/2024/06/30/apple-starts-work-on-ios-19-and-macos-16/",
        urlToImage:
          "https://images.macrumors.com/t/iVNie6i7OkGMgvHbftTiLSsvCEo=/1600x/article-new/2020/12/aapl-logo-banner.jpg",
        publishedAt: "2024-06-30T19:01:40Z",
        content:
          'Apple has already begun work on the iOS 19, macOS 16, watchOS 12, and visionOS 3 software updates for next year, according to Bloomberg\'s Mark Gurman.\r\nWriting in his most recent "Power On" newslette… [+962 chars]',
      },
      {
        source: {
          id: null,
          name: "MacRumors",
        },
        author: "Hartley Charlton",
        title:
          "Apple Likely Planning to Use Bigger, Lower Resolution Displays for Cheaper Vision Headset",
        description:
          "Apple is exploring new suppliers for OLED-on-Silicon panels, likely signaling the development of a more affordable headset destined to sit alongside the Vision Pro, The Elec reports.\n\n\n\n\n\nThe Korean website has apparently detected a shift in Apple's supply ch…",
        url: "https://www.macrumors.com/2024/06/30/lower-resolution-displays-for-cheaper-headset/",
        urlToImage:
          "https://images.macrumors.com/t/XMoYyiLjJ3ePlW78tYaibrUAbjs=/2000x/article-new/2023/06/apple-vision-pro-lenses.jpg",
        publishedAt: "2024-06-30T19:41:14Z",
        content:
          "Apple is exploring new suppliers for OLED-on-Silicon panels, likely signaling the development of a more affordable headset destined to sit alongside the Vision Pro, The Elec reports.\r\nThe Korean webs… [+1938 chars]",
      },
      {
        source: {
          id: null,
          name: "MacRumors",
        },
        author: "Hartley Charlton",
        title:
          "Kuo: New AirPods to Feature Cameras for Enhanced Spatial Experiences",
        description:
          "Apple will launch new AirPods featuring infrared cameras to improve spatial experiences with Apple's Vision Pro headset, according to Apple analyst Ming-Chi Kuo. \n\n\n\n\n\nIn a new post on Medium, Kuo explained that Apple plans to mass-produce new AirPods with in…",
        url: "https://www.macrumors.com/2024/06/30/new-airpods-to-feature-ir-cameras/",
        urlToImage:
          "https://images.macrumors.com/t/zjW0bFIcpnQ4UzWI2gzbyHMPKqM=/2500x/article-new/2024/01/airpods-vision-pro.jpg",
        publishedAt: "2024-06-30T16:08:48Z",
        content:
          "Apple will launch new AirPods featuring infrared cameras to improve spatial experiences with Apple's Vision Pro headset, according to Apple analyst Ming-Chi Kuo. \r\nIn a new post on Medium, Kuo explai… [+879 chars]",
      },
      {
        source: {
          id: null,
          name: "Les Numériques",
        },
        author: "Rick",
        title:
          'Actualité : Soldes informatique – La tablette Tactile Apple iPad Pro 13" (2024) "5 étoiles" à 1 466,04 €',
        description:
          "La tablette Tactile Apple iPad Pro 13\" (2024) passe sous les 1500 € chez Top Achat. C'est actuellement le meilleur produit de notre comparatif.",
        url: "https://www.lesnumeriques.com/tablette-tactile/soldes-informatique-la-tablette-tactile-apple-ipad-pro-13-2024-5-etoiles-a-1-466-04-n223615.html",
        urlToImage:
          "https://cdn.lesnumeriques.com/optim/test/22/221913/454c07fd-ipad-pro-13-2024-la-puissance-a-tout-prix__1200_678__0-502-4624-2929.jpg",
        publishedAt: "2024-06-30T22:00:08Z",
        content:
          "Nouvelle technologie d'écran, nouvelle puce M4, nouveau stylet Apple fait passer sa tablette la plus haut de gamme dans une autre dimension. Sans surprise, liPad Pro 13 mise tout sur la puissance et … [+1792 chars]",
      },
      {
        source: {
          id: null,
          name: "Xatakamovil.com",
        },
        author: "Eva Rodriguez de Luis",
        title:
          "Siete usos para los que puedo dejar el móvil en casa y usar solo mi smartwatch",
        description:
          "Antes de dar el paso a un smartwatch, me compré una pulsera de actividad que rápidamente se me quedó pequeña. Es cierto que junto a la tablet sea el dispositivo menos relevante en mi haber, en tanto en cuanto puedo recurrir a otros como el ordenador o el móvi…",
        url: "https://www.xatakamovil.com/listas/siete-usos-para-que-puedo-dejar-movil-casa-usar-solo-smartwatch",
        urlToImage: "https://i.blogs.es/32dee8/reloj/840_560.jpeg",
        publishedAt: "2024-06-30T16:01:36Z",
        content:
          "Antes de dar el paso a un smartwatch, me compré una pulsera de actividad que rápidamente se me quedó pequeña. Es cierto que junto a la tablet sea el dispositivo menos relevante en mi haber, en tanto … [+5112 chars]",
      },
      {
        source: {
          id: null,
          name: "Enriquedans.com",
        },
        author: "Enrique Dans",
        title: "Salud y sensorización: lo mejor es enemigo de lo bueno",
        description:
          "Un buen artículo en The Wall Street Journal, «Apple Watch is becoming doctors’ favorite medical device«, refleja claramente la situación que predije hace ya mucho tiempo, cuando Apple comenzó a posicionar su reloj como un dispositivo cada vez más orientado al…",
        url: "https://www.enriquedans.com/2024/06/salud-y-sensorizacion-lo-mejor-es-enemigo-de-lo-bueno.html",
        urlToImage:
          "https://www.enriquedans.com/wp-content/uploads/2024/06/Apple-heart-health-hero.jpg",
        publishedAt: "2024-06-30T13:08:08Z",
        content:
          "Un buen artículo en The Wall Street Journal, «Apple Watch is becoming doctors favorite medical device«, refleja claramente la situación que predije hace ya mucho tiempo, cuando Apple comenzó a posici… [+4452 chars]",
      },
      {
        source: {
          id: null,
          name: "Caschys Blog",
        },
        author: "André Westphal",
        title: "Immer wieder sonntags KW 26",
        description:
          "Ich wünsche allen Lesern, speziell auch den Frühaufstehern, einen guten Morgen. In diesem Beitrag findet ihr wie immer eine Zusammenfassung einiger beachtenswerter News der (fast) verstrichenen Woche. Ebenfalls könnt ihr am Ende des Posts einen Einblick in di…",
        url: "https://stadt-bremerhaven.de/immer-wieder-sonntags-kw-26-11/",
        urlToImage:
          "https://stadt-bremerhaven.de/wp-content/uploads/2022/07/Kaffee-Sonntags.jpg",
        publishedAt: "2024-06-30T04:30:18Z",
        content:
          "Ich wünsche allen Lesern, speziell auch den Frühaufstehern, einen guten Morgen. In diesem Beitrag findet ihr wie immer eine Zusammenfassung einiger beachtenswerter News der (fast) verstrichenen Woche… [+3954 chars]",
      },
      {
        source: {
          id: null,
          name: "Caschys Blog",
        },
        author: "André Westphal",
        title:
          "JustWatch stellt seine deutschen Streaming-Charts für das 2. Quartal 2024 vor",
        description:
          "Die Plattform JustWatch hat mit uns seine Daten zum Streaming-Interesse der deutschen User auf der Plattform geteilt. Man hat also ausgewertet, was die eigenen Nutzer da so vermerkt und nach eigenen Angaben gestreamt haben. Lässt sich sicherlich nicht verallg…",
        url: "https://stadt-bremerhaven.de/justwatch-stellt-seine-deutschen-streaming-charts-fuer-das-2-quartal-2024-vor/",
        urlToImage:
          "https://stadt-bremerhaven.de/wp-content/uploads/2024/06/Streaming-2024.jpg",
        publishedAt: "2024-06-30T13:30:24Z",
        content:
          "Die Plattform JustWatch hat mit uns seine Daten zum Streaming-Interesse der deutschen User auf der Plattform geteilt. Man hat also ausgewertet, was die eigenen Nutzer da so vermerkt und nach eigenen … [+2550 chars]",
      },
      {
        source: {
          id: null,
          name: "Frandroid",
        },
        author: "Axel Savoye",
        title:
          "De 349 € à 149 € : le prix de la Harman Kardon Citation 200 est en chute libre grâce aux soldes",
        description:
          "Quand bien même, elle est sortie en 2020, la Harman Kardon Citation 200 est toujours recommandable aujourd'hui grâce à un son riche et généreux en basses, une belle autonomie pour la promener partout chez soi et un éventail complet de fonctionnalités quant à …",
        url: "https://www.frandroid.com/bons-plans/2062984_de-349-e-a-149-e-le-prix-de-la-harman-kardon-citation-200-est-en-chute-libre-grace-aux-soldes",
        urlToImage:
          "https://images.frandroid.com/wp-content/uploads/2024/06/harman-kardon-citation-200.jpg",
        publishedAt: "2024-06-30T11:30:05Z",
        content:
          "Quand bien même, elle est sortie en 2020, la Harman Kardon Citation 200 est toujours recommandable aujourd'hui grâce à un son riche et généreux en basses, une belle autonomie pour la promener partout… [+5593 chars]",
      },
      {
        source: {
          id: null,
          name: "Frandroid",
        },
        author: "Clément Gareau",
        title:
          "MacBook, VivoBook, Galaxy Book… voici les meilleures offres PC de ces soldes d’été",
        description:
          "Les PC portables et plus largement tout l'univers informatique font toujours office de vedette lors des périodes de promotions. Lors de ces soldes estivales, voici une sélection de PC, de SSD ou encore d'écran PC proposés moins chers.",
        url: "https://www.frandroid.com/bons-plans/2063112_macbook-vivobook-galaxy-book-voici-les-meilleures-offres-pc-de-ces-soldes-dete",
        urlToImage:
          "https://images.frandroid.com/wp-content/uploads/2024/06/soldes-pc-portables.jpg",
        publishedAt: "2024-06-30T07:30:52Z",
        content:
          "Les PC portables et plus largement tout l'univers informatique font toujours office de vedette lors des périodes de promotions. Lors de ces soldes estivales, voici une sélection de PC, de SSD ou enco… [+7372 chars]",
      },
      {
        source: {
          id: null,
          name: "Frandroid",
        },
        author: "Marie Lizak",
        title:
          "Voici la Skoda Elroq électrique : la voiture électrique la moins chère du constructeur avec une autonomie digne d’une routière",
        description:
          "Après l’Enyaq, Skoda enrichit sa gamme de voitures électriques avec le nouvel Elroq, un crossover très prometteur. Attendu autour de 35 000 euros, il affiche une autonomie généreuse et un gabarit compact, afin de rivaliser avec les Peugeot e-3008, Volvo EX30 …",
        url: "https://www.frandroid.com/marques/skoda/2062746_voici-la-skoda-elroq-electrique-la-voiture-electrique-la-moins-chere-du-constructeur-avec-une-autonomie-digne-dune-routiere",
        urlToImage:
          "https://images.frandroid.com/wp-content/uploads/2024/06/29-skoda-elroq-covered-drive-2298c70f.jpg",
        publishedAt: "2024-06-30T22:01:11Z",
        content:
          "Après lEnyaq, Skoda enrichit sa gamme de voitures électriques avec le nouvel Elroq, un crossover très prometteur. Attendu autour de 35 000 euros, il affiche une autonomie généreuse et un gabarit comp… [+7878 chars]",
      },
      {
        source: {
          id: null,
          name: "Wwwhatsnew.com",
        },
        author: "Juan Diego Polo",
        title: "Zuckerberg critica a la industria por crear un «Dios de la IA»",
        description:
          "El CEO de Meta, Mark Zuckerberg, ha generado controversia con sus recientes declaraciones sobre el desarrollo de la inteligencia artificial (IA). En una entrevista con el YouTuber Kane Sutter, Zuckerberg arremetió contra sus competidores, acusándolos de inten…",
        url: "https://wwwhatsnew.com/2024/06/30/zuckerberg-critica-a-la-industria-por-crear-un-dios-de-la-ia/",
        urlToImage:
          "https://wwwhatsnew.com/wp-content/uploads/2024/06/tec-782.jpg",
        publishedAt: "2024-06-30T18:00:17Z",
        content:
          "El CEO de Meta, Mark Zuckerberg, ha generado controversia con sus recientes declaraciones sobre el desarrollo de la inteligencia artificial (IA). En una entrevista con el YouTuber Kane Sutter, Zucker… [+3132 chars]",
      },
      {
        source: {
          id: null,
          name: "Wired.jp",
        },
        author: "Kyle Chayka",
        title: "アップルによって「生成AIの日常化」がついに始まった",
        description:
          "日本でシェアが7割に迫るといわれるiPhoneにApple Intelligenceが導入されれば、新たなテクノロジーの時代が確実に始まることになる。ひとたび個々の生活に入り込んだ技術を、スマートフォンと同様、わたしたちは決して手放さないだろう。",
        url: "https://wired.jp/article/sz-apple-is-bringing-ai-to-your-personal-life-like-it-or-not/",
        urlToImage:
          "https://media.wired.jp/photos/667d705bd9e4bf9a82c0e0ed/16:9/w_1280,c_limit/GettyImages-994518476.jpg",
        publishedAt: "2024-06-30T22:00:00Z",
        content:
          "WWDCAIApple Intelligence\r\nGeminiOpenAIAIiPhoneAIAIOpenAIGPT-415,00030\r\nChatGPTOpenAI\r\nNew YorkWashington PostApple IntelligenceAIOpenAI\r\nAIAIWWDC10iPhoneApple IntelligenceAI\r\niPhoneAICEO\r\n199020iPhon… [+20 chars]",
      },
      {
        source: {
          id: "el-mundo",
          name: "El Mundo",
        },
        author: "Javier Attard",
        title: "Lexit: ¿por qué León quiere y puede independizarse?",
        description:
          "¿De quién se quiere independizar? ¿De Castilla? ¿También con Zamora y Salamanca? ¿De dónde viene esta reivindicación histórica? ¿Lo permite la Constitución? ¿Va a...",
        url: "https://www.elmundo.es/podcasts/el-mundo-al-dia/2024/07/01/667ed240fdddffeb3f8b45ad.html",
        urlToImage:
          "https://phantom-elmundo.unidadeditorial.es/54a86b7bc3d6043dc7fbdb9fb6131028/resize/1200/f/webp/assets/multimedia/imagenes/2024/07/01/17197848344551.jpg",
        publishedAt: "2024-06-30T22:03:31Z",
        content:
          "¿De quién se quiere independizar? ¿De Castilla? ¿También con Zamora y Salamanca? ¿De dónde viene esta reivindicación histórica? ¿Lo permite la Constitución? ¿Va a suceder? ¿Qué opinan los leoneses? L… [+481 chars]",
      },
      {
        source: {
          id: null,
          name: "La Vanguardia",
        },
        author: "Fran Besora",
        title:
          "Así es como Apple podría mejorar la personalización de la pantalla de inicio en iOS 18",
        description:
          "iOS 18 siempre será recordada como la versión que permitió la personalización de la pantalla de inicio del iPhone. Ofrece opciones que permiten cambiar el color de los iconos y colocarlos libremente por la pantalla de inicio, además de hacerlos más grandes pa…",
        url: "https://www.lavanguardia.com/andro4all/apple/asi-es-como-apple-podria-mejorar-la-personalizacion-de-la-pantalla-de-inicio-en-ios-18",
        urlToImage:
          "https://www.lavanguardia.com/andro4all/hero/2024/06/personalizacion-pantalla-de-inicio-ios-18.jpg?width=1200",
        publishedAt: "2024-06-30T07:01:43Z",
        content:
          "iOS 18 ha llegado con la posibilidad de personalizar la pantalla de inicio del iPhone\r\niOS 18 siempre será recordada como la versión que permitió la personalización de la pantalla de inicio del iPhon… [+2446 chars]",
      },
      {
        source: {
          id: null,
          name: "La Vanguardia",
        },
        author: "Fran Besora",
        title:
          "Disfruta de las mejores canciones del veranos gracias a esta playlist de Apple Music",
        description:
          "Apple Music ha mejorado significativamente a lo largo de los años, gracias a la inclusión de novedades como el audio sin pérdida, los widgets interactivos, el nuevo reproductor y la experiencia mensual de Replay. Este servicio de música en streaming también s…",
        url: "https://www.lavanguardia.com/andro4all/apple/disfruta-de-las-mejores-canciones-del-veranos-gracias-a-esta-playlist-de-apple-music",
        urlToImage:
          "https://www.lavanguardia.com/andro4all/hero/2024/06/las-canciones-de-verano-playlist-apple-music.jpg?width=1200",
        publishedAt: "2024-06-30T10:31:08Z",
        content:
          '"Las canciones del verano" ya disponible en Apple Music\r\nApple Music ha mejorado significativamente a lo largo de los años, gracias a la inclusión de novedades como el audio sin pérdida, los widgets … [+4790 chars]',
      },
      {
        source: {
          id: null,
          name: "La Vanguardia",
        },
        author: "Fran Besora",
        title: "Esta es mi novedad favorita de watchOS 11",
        description:
          "watchOS 11 ha llegado con varias novedades que mejoran la experiencia con el Apple Watch, incluyendo mejoras como la app Vitals, la posibilidad de pausar los anillos de actividad o de establecer objetivos diarios, así como una nueva esfera de Fotos potenciada…",
        url: "https://www.lavanguardia.com/andro4all/apple/esta-es-mi-novedad-favorita-de-watchos-11",
        urlToImage:
          "https://www.lavanguardia.com/andro4all/hero/2024/06/app-vitals-watchos-11.jpg?width=1200",
        publishedAt: "2024-06-30T13:31:40Z",
        content:
          "watchOS 11 ha llegado con interesantes novedades\r\nwatchOS 11 ha llegado con varias novedades que mejoran la experiencia con el Apple Watch, incluyendo mejoras como la app Vitals, la posibilidad de pa… [+2076 chars]",
      },
      {
        source: {
          id: null,
          name: "La Vanguardia",
        },
        author: "JuanMi Guirado",
        title:
          "32 GB de RAM y 15,5h de batería: este rival del MacBook Air con Windows tiene un precio de escándalo",
        description:
          "Si eres de los que envidian la eficiencia, batería y gran hacer de los portátiles de Apple, no tienes que seguir así. LG tiene un catálogo de ordenadores portátiles para teletrabajar que no tienen nada que envidiar a los MacBook Air y Pro de los californianos…",
        url: "https://www.lavanguardia.com/andro4all/ofertas/32-gb-de-ram-y-155h-de-bateria-este-rival-del-macbook-air-con-windows-tiene-un-precio-de-escandalo",
        urlToImage:
          "https://www.lavanguardia.com/andro4all/hero/2024/06/lg-gram-grosor.jpg?width=1200",
        publishedAt: "2024-06-30T14:01:26Z",
        content:
          "El chasis de este LG Gram tiene solo 1,67 cm de grosor máximo y su cuerpo está fabricado en magnesio y nanocarbono\r\nSi eres de los que envidian la eficiencia, batería y gran hacer de los portátiles d… [+4006 chars]",
      },
      {
        source: {
          id: null,
          name: "La Vanguardia",
        },
        author: "Fran Besora",
        title:
          "A este precio, el iPad Pro con procesador M2 es uno de los mejores modelos que puedes comprar",
        description:
          "Apple tiene una gran variedad de modelos dentro de la gama iPad. Por un lado, tiene modelos para aquellos que quieran un iPad para consumir contenido multimedia o redes sociales, pero por otro, cuenta con modelos destinados a usuarios que quieran darle un uso…",
        url: "https://www.lavanguardia.com/andro4all/ofertas/a-este-precio-el-ipad-pro-con-procesador-m2-es-uno-de-los-mejores-modelos-que-puedes-comprar",
        urlToImage:
          "https://www.lavanguardia.com/andro4all/hero/2024/06/ipad-pro-m2.jpg?width=1200",
        publishedAt: "2024-06-30T13:00:42Z",
        content:
          "El iPad Pro lanzado en 2022 cuenta con una gran pantalla y potencia gracias al procesador M2\r\nApple tiene una gran variedad de modelos dentro de la gama iPad. Por un lado, tiene modelos para aquellos… [+3961 chars]",
      },
      {
        source: {
          id: null,
          name: "La Vanguardia",
        },
        author: "Miguel Paredes",
        title:
          "Este precioso reloj inteligente creado por OnePlus lo tiene todo y cae hasta los 287 euros",
        description:
          "Un wearable puede ser ese compañero que no sabías que necesitabas, un fiel aliado que irá contigo a todas partes para hacer tu vida un poco más sencilla. Gracias a esta oferta de AliExpress , uno de los precios más tentadores hasta el momento. Disfrutarás de …",
        url: "https://www.lavanguardia.com/andro4all/ofertas/este-precioso-reloj-inteligente-creado-por-oneplus-lo-tiene-todo-y-cae-hasta-los-287-euros",
        urlToImage:
          "https://www.lavanguardia.com/andro4all/hero/2024/02/img_5733.jpeg?width=1200",
        publishedAt: "2024-06-30T21:59:44Z",
        content:
          "Así es el bonito OnePlus Watch 2.\r\nUn wearable puede ser ese compañero que no sabías que necesitabas, un fiel aliado que irá contigo a todas partes para hacer tu vida un poco más sencilla. Gracias a … [+2355 chars]",
      },
      {
        source: {
          id: null,
          name: "La Vanguardia",
        },
        author: "David Freire",
        title:
          "8 aplicaciones gratuitas para Android que seguramente no conoces, pero que valen mucho la pena",
        description:
          "Ahora que ha llegado el ansiado verano y que vas a tener más tiempo libre, puede ser un buen momento para renovar el catálogo de aplicaciones de tu móvil Android, desinstalando esas apps que ya no usas desde hace un tiempo y animándote a probar otras que no s…",
        url: "https://www.lavanguardia.com/andro4all/aplicaciones-gratis/8-aplicaciones-gratuitas-para-android-que-seguramente-no-conoces-pero-que-valen-mucho-la-pena",
        urlToImage:
          "https://www.lavanguardia.com/andro4all/hero/2024/06/apps-android-27-06-portada.jpg?width=1200",
        publishedAt: "2024-06-30T17:01:47Z",
        content:
          "Apps en un smartphone Android\r\nAhora que ha llegado el ansiado verano y que vas a tener más tiempo libre, puede ser un buen momento para renovar el catálogo de aplicaciones de tu móvil Android, desin… [+5807 chars]",
      },
      {
        source: {
          id: null,
          name: "La Vanguardia",
        },
        author: "David Freire",
        title:
          'HUAWEI Matepad 11,5" S, análisis: diseño premium, pantalla efecto papel y software enfocado a la productividad',
        description:
          "Este año 2024 estamos asistiendo a un resurgimiento del mercado de las tablets con Android, ya que algunos fabricantes como Samsung o Xiaomi han lanzado nuevos modelos con mejores prestaciones y precios ajustados y otros como OnePlus se han metido de lleno en…",
        url: "https://www.lavanguardia.com/andro4all/huawei/huawei-matepad-115-s-analisis-diseno-premium-pantalla-efecto-papel-y-software-enfocado-a-la-productividad",
        urlToImage:
          "https://www.lavanguardia.com/andro4all/hero/2024/06/huawei-matepad-115s-portada2.jpg?width=1200",
        publishedAt: "2024-06-30T11:01:17Z",
        content:
          "La HUAWEI Matepad 11,5 S con su práctica funda con teclado magnético / Fotografía: Rubén Ulloa\r\nEste año 2024 estamos asistiendo a un resurgimiento del mercado de las tablets con Android, ya que algu… [+19417 chars]",
      },
      {
        source: {
          id: null,
          name: "Impress.co.jp",
        },
        author: null,
        title: "「楽天モバイル」のキャンペーンまとめ【2024年7月号】",
        description:
          "シンプルな料金プランを特長とする第4のMNO「楽天モバイル」。同社ではスマートフォン本体の割引や還元などたくさんの魅力的なキャンペーンを開催中だ。本稿では、そんな楽天モバイルのキャンペーンの一部を紹介する。掲載されている情報はすべて6月28日時点のもの。",
        url: "https://k-tai.watch.impress.co.jp/docs/review/1604261.html",
        urlToImage:
          "https://k-tai.watch.impress.co.jp/img/ktw/list/1604/261/rktn.jpg",
        publishedAt: "2024-06-30T15:01:00Z",
        content:
          "4MNO628 \r\niPhoneMNP32000\r\n iPhone32000 \r\n MNPiPhone21200032000iPhoneiPhone 15iPhone 14/14 PlusiPhone 13iPhone SE31 \r\n26930\r\n 26930 \r\n 26930Xperia 10 VAQUOS wish3AQUOS sense8OPPO Reno9 A2 \r\nMNP12000\r\n… [+416 chars]",
      },
      {
        source: {
          id: null,
          name: "Nextpit.de",
        },
        author: "Camila Rinaldi",
        title: "RingConn Smart Ring im Test: Unbestreitbar smart!",
        description:
          "Entdeckt den RingConn Smart Ring im nextpit-Test. Ein stylisches Wearable, das Mode & fortschrittliche Gesundheitsfunktionen nahtlos miteinander verbindet.",
        url: "https://www.nextpit.de/ringconn-smart-ring-test",
        urlToImage:
          "https://fs.npstatic.com/userfiles/7687254/image/RingConn_Smart_Ring/nextpit_RingConn_Smart_Ring_Test.jpg",
        publishedAt: "2024-06-30T10:00:00Z",
        content:
          "Kurzfazit\r\nObwohl ich schon viele Wearables getestet habe, ist dies meine erste richtige Erfahrung mit einem Smart Ring. Meine bisherige Erfahrung damit ist, dass es sich in erster Linie um Geräte zu… [+18014 chars]",
      },
      {
        source: {
          id: null,
          name: "Nextpit.de",
        },
        author: "Jade Bryan",
        title:
          "Galaxy-Line-Up geleakt: So sehen die neuen Handys, Smartwatches und In-Ears von Samsung aus",
        description:
          "Samsungs Galaxy Z Fold 6, Flip 6, Watch 7, Watch Ultra und die Galaxy Buds 3-Serie werden in den neuesten Leaks enthüllt. Hier seht Ihr, wie sie aussehen.",
        url: "https://www.nextpit.de/samsungs-neue-galaxy-vor-markteinfuehrung-geleakt",
        urlToImage:
          "https://fscl01.fonpit.de/userfiles/7687254/image/Samsung_Galaxy_Z_Fold_5/nextpit_Samsung_Galaxy_Z_Fold_5_Front_Display.jpg",
        publishedAt: "2024-06-30T06:00:00Z",
        content:
          "Den Anfang machen das Samsung Galaxy Z Fold 6 und das Galaxy Z Flip 6, von denen der bekannte Leaker Evan Blass (oder evleaks) über verschiedene soziale Medienkanäle eindeutige Renderings veröffentli… [+3355 chars]",
      },
      {
        source: {
          id: null,
          name: "Nextpit.de",
        },
        author: "Edwin Kee",
        title:
          "Top 5 Android- & iOS-Apps der Woche: Perfect Grind, ein Koffein-Tracker & mehr!",
        description:
          "nextpit hat 5 Apps aus dem Google Play Store und dem Apple App Store ausgewählt, die hoffentlich dieses Wochenende Euer Smartphone-Erlebnis verbessern.",
        url: "https://www.nextpit.de/top-5-android-ios-apps-der-woche-2024-26",
        urlToImage:
          "https://fscl01.fonpit.de/userfiles/7687254/image/Top_Apps.jpg",
        publishedAt: "2024-06-30T08:00:01Z",
        content:
          "Mit Perfect Grind könnt Ihr Euren inneren Tony Hawk kanalisieren und der beste Skater im örtlichen Park werden. Erstellt Ihr viele Videos in den sozialen Medien? Warum erstellt Ihr nicht Untertitel m… [+9741 chars]",
      },
      {
        source: {
          id: null,
          name: "TalkAndroid",
        },
        author: "Christian Crisostomo",
        title: "Dish Offers ‘Free’ Netflix To Re-upping And New Customers",
        description:
          "Emulating the likes of Comcast, DISH forms a partnership with Netflix, offering more modern streaming services within its more traditional satellite TV network platforms.",
        url: "https://www.talkandroid.com/482977-dish-netflix-freebie/",
        urlToImage:
          "https://www.talkandroid.com/wp-content/uploads/2024/06/dish-netflix-plan-00.jpg",
        publishedAt: "2024-06-30T20:10:00Z",
        content:
          "DISH Network, an EchoStar subsidiary specializing in satellite TV, has announced a groundbreaking partnership with streaming giant Netflix. Apparently, they are currently offering customers a Netflix… [+2740 chars]",
      },
      {
        source: {
          id: null,
          name: "mindbodygreen.com",
        },
        author: "https://www.mindbodygreen.com/wc/jason-wachob",
        title:
          "Want To Lose Fat & Build Muscle? Don't Let These 5 Myths Stop You",
        description: "The weight loss conversation is evolving for the better.",
        url: "https://www.mindbodygreen.com/articles/5-myths-about-fat-loss-you-have-to-stop-believing-from-phd",
        urlToImage:
          "https://mindbodygreen-res.cloudinary.com/image/upload/c_fill,w_2000,h_1200,g_auto,fl_lossy,f_jpg/org/bb0xl5xbjlxxpbwm2.jpeg",
        publishedAt: "2024-06-30T09:28:00Z",
        content:
          "The weight loss conversation is evolving for the better. We're no longer measuring success solely by the numbers on the scale. Instead, we're focusing on how to lose fat without sacrificing precious … [+6159 chars]",
      },
      {
        source: {
          id: null,
          name: "Numerama",
        },
        author: "Bogdan Bodnar",
        title:
          "Les utilisateurs de Mac de nouveau ciblés par une campagne de piratage via des fausses pubs",
        description:
          "Une nouvelle campagne de piratage utilise des pubs Google pour piéger les propriétaires de MacBook. Les hackers s'intéressent de plus en plus aux propriétaires de MacBook. Les experts en cybersécurité de la société Malwarebytes ont publié un rapport le 27 jui…",
        url: "https://www.numerama.com/cyberguerre/1768590-les-utilisateurs-de-mac-de-nouveau-cibles-par-une-campagne-de-piratage-depuis-des-fausses-pubs.html",
        urlToImage:
          "https://www.numerama.com/wp-content/uploads/2023/08/design-sans-titre-2023-08-08t160536955-1.jpg",
        publishedAt: "2024-06-30T16:02:00Z",
        content:
          "Une nouvelle campagne de piratage utilise des pubs Google pour piéger les propriétaires de MacBook.\r\nLes hackers s’intéressent de plus en plus aux propriétaires de MacBook. Les experts en cybersécuri… [+1787 chars]",
      },
      {
        source: {
          id: "focus",
          name: "Focus",
        },
        author: "FOCUS online",
        title:
          "Prognosen - Drei Experten sagen, wie Sie im zweiten Halbjahr an den Börsen erfolgreich sind",
        description:
          "Trotz überwiegend schlechter Stimmung und Herausforderungen wie Inflation oder hohen Zinsen hat beispielsweise der DAX im ersten Halbjahr 2024 ein neues Rekordhoch erreicht. Gerade wegen dieses vermeintlichen Widerspruchs stellt sich die Frage: Wie geht es im…",
        url: "https://www.focus.de/finanzen/boerse/prognosen-drei-experten-sagen-wie-sie-im-zweiten-halbjahr-an-den-boersen-erfolgreich-sind_id_260095779.html",
        urlToImage:
          "https://p6.focus.de/img/fotos/id_260095770/freude-erfolg-fin-vt.jpg?im=Crop%3D%280%2C118%2C3771%2C1885%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=8b1c6a606278990af419c458537213e88520fdf3192f17e37b8382eda4b0b3e9",
        publishedAt: "2024-06-30T09:52:37Z",
        content:
          "Trotz überwiegend schlechter Stimmung und Herausforderungen wie Inflation oder hohen Zinsen hat beispielsweise der DAX im ersten Halbjahr 2024 ein neues Rekordhoch erreicht. Gerade wegen dieses verme… [+7725 chars]",
      },
      {
        source: {
          id: "focus",
          name: "Focus",
        },
        author: "FOCUS online",
        title:
          "Prognosen - Drei Experten sagen, wie Sie im zweiten Halbjahr an den Börsen erfolgreich sind",
        description:
          "Trotz überwiegend schlechter Stimmung und Herausforderungen wie Inflation oder hohen Zinsen hat beispielsweise der DAX im ersten Halbjahr 2024 ein neues Rekordhoch erreicht. Gerade wegen dieses vermeintlichen Widerspruchs stellt sich die Frage: Wie geht es im…",
        url: "https://www.focus.de/finanzen/boerse/prognosen-experten-zeigen-wie-anleger-2024-an-den-boersen-weiter-erfolgreich-sind_id_260095779.html",
        urlToImage:
          "https://p6.focus.de/img/fotos/id_260095770/freude-erfolg-fin-vt.jpg?im=Crop%3D%280%2C118%2C3771%2C1885%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=8b1c6a606278990af419c458537213e88520fdf3192f17e37b8382eda4b0b3e9",
        publishedAt: "2024-06-30T09:52:37Z",
        content:
          "Trotz überwiegend schlechter Stimmung und Herausforderungen wie Inflation oder hohen Zinsen hat beispielsweise der DAX im ersten Halbjahr 2024 ein neues Rekordhoch erreicht. Gerade wegen dieses verme… [+7729 chars]",
      },
      {
        source: {
          id: null,
          name: "Techbang.com",
        },
        author: "KKJ",
        title: "蘋果MacBook Pro可能將改用OLED螢幕，取代mini-LED",
        description:
          "取代mini-LED！蘋果MacBook Pro將採用OLED屏Omdia分析師表示，蘋果極有可能在2026年推出MacBook Pro OLED版本。\nOmdia分析師表示，從2023年到2031年，筆電市場對OLED面板的需求將以37%的年複合增長率增長，越來越多品牌將會採用OLED面板。\n目前iPad Pro已經商用OLED，MacBook Pro、MacBook Air等裝置也會切入OLED螢幕，取代現有的mini-LED。\n消息還稱MacBook Pro將會採用iPad Pro同款Tabdem OLED…",
        url: "https://www.techbang.com/posts/115701-mini-ledmacbook-prooled",
        urlToImage:
          "https://cdn2.techbang.com/system/excerpt_images/115701/original/9741e1ba34f1a8fe3e93f4f69b459eb8.jpg?1716976956",
        publishedAt: "2024-06-30T01:30:00Z",
        content:
          "Omdia2026MacBook Pro OLED\r\nOmdia20232031OLED37%OLED\r\niPad ProOLEDMacBook ProMacBook AirOLEDmini-LED\r\nMacBook ProiPad ProTabdem OLED\r\nTabdem OLEDOLEDOLEDOLEDOLEDTandem OLED\r\nTabdem OLEDOLEDmini-LED\r\nT… [+12 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Harri Weber",
        title:
          "Los AirPods con cámara podrían reforzar la tecnología de realidad aumentada de Apple",
        description:
          "Se informa que Apple está trayendo cámaras a los AirPods, al diablo con los pelos de las orejas.Read more...",
        url: "https://es.gizmodo.com/airpods-con-camaras-1851569272",
        urlToImage:
          "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1dccecde8c27008a78f4f0addf6401d0.jpg",
        publishedAt: "2024-06-30T19:07:00Z",
        content:
          "Se informa que Apple está trayendo cámaras a los AirPods, al diablo con los pelos de las orejas.\r\nLa empresa de 3 billones de dólares tiene la intención de producir en masa auriculares renovados con … [+2308 chars]",
      },
      {
        source: {
          id: "il-sole-24-ore",
          name: "Il Sole 24 Ore",
        },
        author: "di Vito Lops",
        title:
          "Luglio porterà bene a Wall Street dei record? Ecco cosa insegna la storia",
        description:
          "La Borsa Usa tocca l’ennesimo massimo storico. Ma con multipli elevati qualcuno teme uno stop. Eppure, nella storia borsistica, luglio è tradizionalmente un buon mese",
        url: "https://www.ilsole24ore.com/art/luglio-portera-bene-wall-street-record-ecco-cosa-insegna-storia-AFSpMLEC",
        urlToImage:
          "https://i2.res.24o.it/images2010/S24/Documenti/2024/06/29/Immagini/Ritagli/AdobeStock_299714152-kS3G--1440x752@IlSole24Ore-Web.jpeg?r=1170x507",
        publishedAt: "2024-06-30T09:39:00Z",
        content:
          "Ascolta la versione audio dell'articolo\r\n3' di lettura\r\nUn altro record. Lindice S&amp;P 500 della Borsa statunitense venerdì ha toccato un nuovo massimo storico intraday a quota 5.521 punti. A dare … [+3767 chars]",
      },
      {
        source: {
          id: null,
          name: "9to5google.com",
        },
        author: "Ben Schoon",
        title: "Why is Google launching the Pixel 9 so early?",
        description:
          "Earlier this week Google made a big, unexpected announcement. The Pixel 9 series is launching in August, almost two months ahead of the usual schedule. Why?\n\n\n\n more…",
        url: "http://9to5google.com/2024/06/30/google-pixel-9-early/",
        urlToImage:
          "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/01/pixel-9-onl-3.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        publishedAt: "2024-06-30T16:00:00Z",
        content:
          "Earlier this week Google made a big, unexpected announcement. The Pixel 9 series is launching in August, almost two months ahead of the usual schedule. Why?\r\nThis issue of 9to5Google Weekender is a p… [+5198 chars]",
      },
      {
        source: {
          id: "techradar",
          name: "TechRadar",
        },
        author: "paulo.n.hatton@gmail.com (Paul Hatton)",
        title:
          "I'm a camera expert and here's how the iPhone 16 could raise Apple's pro-photography game",
        description:
          "I think the iPhone 15 Pro Max gets humbled at phone photography by the Xiaomi 14 Ultra, but here's how Apple could fight back.",
        url: "https://www.techradar.com/phones/iphone/im-a-camera-expert-and-heres-how-the-iphone-16-could-raise-apples-pro-photography-game",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/z8rtq9Ch87t4oJsbtzbX6j-1200-80.jpg",
        publishedAt: "2024-06-30T08:30:30Z",
        content:
          "The iPhone 15 Pro Max is Apple’s most advanced phone to date and there are many reasons why it’s one of the best phones\r\n in the world at the moment. Unfortunately, I don't think the camera is one of… [+2605 chars]",
      },
      {
        source: {
          id: "techradar",
          name: "TechRadar",
        },
        author: "David Nield",
        title:
          "AirPods with IR cameras are rumored to be on the way – but we'll have to wait a while for them",
        description:
          "The next major upgrade for Apple's AirPods line could be cameras borrowed from Face ID in the iPhone.",
        url: "https://www.techradar.com/audio/earbuds-airpods/airpods-with-ir-cameras-are-rumored-to-be-on-the-way-but-well-have-to-wait-a-while-for-them",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/FZgc4fGc6eAbHeetCmr2m-1200-80.jpg",
        publishedAt: "2024-06-30T18:30:57Z",
        content:
          "Apple is rumored to be planning to add a new model to its line-up of the best AirPods: specifically, AirPods with infrared cameras installed, which can be paired with a Vision Pro headset and create … [+2214 chars]",
      },
      {
        source: {
          id: "techradar",
          name: "TechRadar",
        },
        author: "Lloyd Coombes",
        title:
          "Smartwatches in 2024: the biggest launches so far and what’s coming next",
        description:
          "As we hit the mid-way point of 2024, here's a look back at the biggest smartwatch launches of the year so far –and what's coming next.",
        url: "https://www.techradar.com/tech/smartwatches-in-2024-the-biggest-launches-so-far-and-whats-coming-next",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/DTKCuRmKUQrSM6zWuHzxSg-1200-80.jpg",
        publishedAt: "2024-06-30T10:00:00Z",
        content:
          "While much of the tech world's focus has been drawn to AI in 2024, smartwatches and fitness trackers continue to become more and more important to our everyday lives. As we hit the halfway point of t… [+6702 chars]",
      },
      {
        source: {
          id: "techradar",
          name: "TechRadar",
        },
        author: "hamish.hector@futurenet.com (Hamish Hector)",
        title:
          "The year so far in AR/VR: the 5 biggest announcements and what’s coming next",
        description:
          "What has happened in the world of AR/VR tech in 2024? Here's the biggest announcements and what’s coming next.",
        url: "https://www.techradar.com/computing/virtual-reality-augmented-reality/the-year-so-far-in-arvr-the-5-biggest-announcements-and-whats-coming-next",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/Kmn3S4KU5Xana5YktwwwFh-1200-80.png",
        publishedAt: "2024-06-30T07:00:22Z",
        content:
          "We're six months into 2024, and in the first half of the year we've been treated to a whirlwind of augmented and virtual reality tech goodness.\r\nThe star of the show was the Apple Vision Pro launch, … [+4550 chars]",
      },
      {
        source: {
          id: "techradar",
          name: "TechRadar",
        },
        author: "Becca Caddy",
        title:
          "Wireless earbuds in 2024: the 8 biggest launches so far and what’s coming next",
        description:
          "Our pick of the best true wireless earbuds we've tested in 2024, plus the top trends we've seen and what we predict is on the way.",
        url: "https://www.techradar.com/tech/wireless-earbuds-in-2024-the-8-biggest-launches-so-far-and-whats-coming-next",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/Dwnz9CvDBc3pN8rQPDKteB-1200-80.jpg",
        publishedAt: "2024-06-30T18:00:00Z",
        content:
          "The best wireless earbuds of 2024 so far have been impressed us a lot by packing top audio tech into teeny-tiny designs. We've seen a rise in open-ear designs that allow you to stay aware of your sur… [+7071 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "David Phelan, Senior Contributor, \n David Phelan, Senior Contributor\n https://www.forbes.com/sites/davidphelan/",
        title: "Apple Watch Series 10 New Design Leak Answers Crucial Question",
        description:
          "The next Apple Watch could be called Series 10 or Apple Watch X. Either way, it’s getting a big new redesign and a new report answers the question: will the current bands still fit?",
        url: "https://www.forbes.com/sites/davidphelan/2024/06/30/apple-watch-series-10-new-design-leak-answers-crucial-question-apple-watch-x/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/668169d64e88834ed8086b7d/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T14:32:15Z",
        content:
          "The next Apple Watch could be called Series 10 or, in a nod to what happened when the iPhone was ten years old, Apple Watch X. Either way, an all-new design is expected and a new leak gives us a clue… [+2163 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Jim Osman, Senior Contributor, \n Jim Osman, Senior Contributor\n https://www.forbes.com/sites/jimosman/",
        title:
          "Big Tech’s Overpowering Influence: Risks To Markets And Your Money",
        description:
          "Often referred to as Big Tech, companies including Google, Amazon, Facebook, and Apple have grown to be major players in international business, society, and media.",
        url: "https://www.forbes.com/sites/jimosman/2024/06/30/big-techs-overpowering-influence-risks-to-markets-and-your-money/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/6680c1070523a0223ca021eb/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T10:30:00Z",
        content:
          "A concept image showing a regular US Dollar banknote that is half melted and liquified dripping on ... [+] an isolated studdio background\r\ngetty\r\nBig Tech looms big across the vast expanse of Silicon… [+14699 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Erik Logan, Contributor, \n Erik Logan, Contributor\n https://www.forbes.com/sites/eriklogan/",
        title:
          "Jon Stewart’s Apple TV+ Divorce: A Lesson In Leadership And Resilience",
        description:
          "Digging deeper into the lessons of Jon Stewarts Apple TV+ Breakup and what you can learn about your own personal career path.",
        url: "https://www.forbes.com/sites/eriklogan/2024/06/30/jon-stewarts-apple-tv-divorce-a-lesson-in-leadership-and-resilience/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/66815dfa43302cec99532962/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T18:21:12Z",
        content:
          "John Stewart's Exit From Apple is a Master Class in Leadership\r\nCopyright 2011 AP. All rights reserved. This material may not be published, broadcast, rewritten or redistributed.\r\nIt's hard to argue … [+5605 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Jonathan Reichental, PhD, Contributor, \n Jonathan Reichental, PhD, Contributor\n https://www.forbes.com/sites/jonathanreichental/",
        title: "Apple’s Vision Pro Is Amazing But No One Wants It",
        description:
          "The Vision Pro failed to meet market expectations. What happened to Apple’s dream for mass adoption of spacial computing and what can we learn from it?",
        url: "https://www.forbes.com/sites/jonathanreichental/2024/06/29/apples-vision-pro-is-amazing-but-no-one-wants-it/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/6680a23ea4a1424f58cf0a64/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T00:17:53Z",
        content:
          "A customer tries on the Apple Vision Pro headset during the product launch at the Apple Store in New ... [+] York City on February 2, 2024. Photo by ANGELA WEISS/AFP.\r\nAFP via Getty Images\r\nAfter muc… [+7359 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "David Phelan, Senior Contributor, \n David Phelan, Senior Contributor\n https://www.forbes.com/sites/davidphelan/",
        title:
          "Apple To Upgrade iPhone 16 Design In Important Way, New Leak Claims",
        description:
          "The latest report claims that as key element of the iPhone’s design, the battery, is about to change.",
        url: "https://www.forbes.com/sites/davidphelan/2024/06/30/apple-to-upgrade-iphone-16-design-in-important-way-new-leak-claims/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/6510902b98dc8048dc9aea96/0x0.jpg?format=jpg&crop=2690,1513,x0,y0,safe&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T18:06:59Z",
        content:
          "The next iPhones, the iPhone 16 series, are expected to include models with an all-new battery design. This is important for several reasons and the new report gives hope for all of us who want to ho… [+2228 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Carmine Gallo, Senior Contributor, \n Carmine Gallo, Senior Contributor\n https://www.forbes.com/sites/carminegallo/",
        title:
          "The Only Good Reason To Add Busy, Cluttered Slides To Your Presentation",
        description:
          "Effective PowerPoint slides are free of clutter unless your intention is to deliberately overwhelm the audience to make a point.",
        url: "https://www.forbes.com/sites/carminegallo/2024/06/30/the-only-good-reason-to-add-busy-cluttered-slides-to-your-presentation/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/6680d00feff2476e1e6f5f2f/0x0.jpg?format=jpg&crop=3625,2040,x0,y242,safe&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T11:00:00Z",
        content:
          "The 2022 Apple Worldwide Developers Conference at the Apple Park in Cupertino, California. (Photo by ... [+] Wu Xiaoling/Xinhua via Getty Images)\r\nXinhua News Agency via Getty Images\r\nWeve all seen c… [+3280 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Andrew Williams, Contributor, \n Andrew Williams, Contributor\n https://www.forbes.com/sites/andrewwilliams/",
        title: "Samsung Galaxy Watch Ultra Design Revealed",
        description:
          "Leaked rendered images offer the best preview of what the Samsung Galaxy Watch Ultra will look like, and hint at its upcoming features.",
        url: "https://www.forbes.com/sites/andrewwilliams/2024/06/30/samsung-galaxy-watch-ultra-design-revealed/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/66814f28e250df1128495ffd/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T12:34:26Z",
        content:
          "Samsung Galaxy Watch Ultra\r\nSamsung\r\nImages of Samsungs upcoming next-generation smartwatches have leaked online by evleaks, including the Galaxy Watch 7 and the Galaxy Watch Ultra.\r\nThe Galaxy Watch… [+1733 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Regina Kim, Contributor, \n Regina Kim, Contributor\n https://www.forbes.com/sites/reginakim/",
        title: "What To Know About The Viral ‘Tiramisu Cake’ Dance Challenge",
        description:
          'The "Tiramisu Cake" dance challenge has been blowing up on Korean social media. Here\'s how this viral trend got started, and the band behind the original song.',
        url: "https://www.forbes.com/sites/reginakim/2024/06/30/what-to-know-about-the-viral-tiramisu-cake-dance-challenge/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/6681e2cba8d04a27b3d144c5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T23:45:44Z",
        content:
          "TikToker @hansamini_ doing the 'Tiramisu Cake' dance / Korean indie band We Are The Night\r\n@hansamini_ on TikTok / We Are The Night\r\nIn recent weeks the so-called Tiramisu Cake dance challenge has ta… [+6553 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Tom Aspray, Contributor, \n Tom Aspray, Contributor\n https://www.forbes.com/sites/tomaspray/",
        title: "A Monthly Look At Big Tech",
        description:
          "What will big tech do in the 2nd half of the year? The Viper Report’s Tom Aspray shares his unique monthly analysis that guides his outlook.",
        url: "https://www.forbes.com/sites/tomaspray/2024/06/30/a-monthly-look-at-big-tech/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/6681cdeab0db720195cad8d7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T22:14:37Z",
        content:
          "LONDON, ENGLAND - OCTOBER 20: Markets stabilized over the weekend following global turbulence amid ... [+] fears over the Ebola virus and global economic concerns. (Photo by Carl Court/Getty Images)\r… [+6875 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Nicole Kraft, Contributor, \n Nicole Kraft, Contributor\n https://www.forbes.com/sites/nicolekraft/",
        title:
          "Subscription Expert Says Sports Broadcast Bundles Overwhelm Consumers",
        description:
          "Networks hope for a subscriber boon from broadcast bundles, but a subscription expert said the rush toward packaging has left consumers confused and annoyed.",
        url: "https://www.forbes.com/sites/nicolekraft/2024/06/30/subscription-expert-says-sports-bundles-may-overwhelm-consumers/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/667f5d8b96f5394f265d52f5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T15:00:00Z",
        content:
          "The StreamSaver package with Peacock, Netflix and Apple TV+ is just one of many bundles consumers ... [+] may consider in the new sports viewing marketplace. (Photo Illustration by Pavlo Gonchar/SOPA… [+5770 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Carlton Reid, Senior Contributor, \n Carlton Reid, Senior Contributor\n https://www.forbes.com/sites/carltonreid/",
        title:
          "Garmin’s Latest Bike Computer Sports Bell, Contactless Payments",
        description:
          "Garmin's Edge 1050 has a pedestrian-warning alert system. A bell, then.",
        url: "https://www.forbes.com/sites/carltonreid/2024/06/30/garmins-latest-bike-computer-sports-bell-contactless-payments/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/66811ebd7e97be2ffdd2e3c7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T09:24:05Z",
        content:
          "Garmin's Edge 1050 bike computer has bells and whistles ...\r\nGarmin\r\nIs a bell necessary on a bicycle?* Garmin thinks so and has equipped its latest, all-singing-all-dancing bike computer with a pede… [+2174 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Bryce Hoffman, Contributor, \n Bryce Hoffman, Contributor\n https://www.forbes.com/sites/brycehoffman/",
        title: "8 Ways Organizations Defeat Themselves",
        description:
          "Most businesses die from self-inflicted wounds. Most organizations fail because of internal problems. The good news is that leaders can do something about this.",
        url: "https://www.forbes.com/sites/brycehoffman/2024/06/30/8-ways-organizations-defeat-themselves/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/6681c3360f073dae6ce2ecaf/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T20:47:20Z",
        content:
          "Most businesses die from self-inflicted wounds. Most organizations fail because of internal problems. This is not to diminish the dangers posed by external forces and factors, but rather to acknowled… [+5967 chars]",
      },
      {
        source: {
          id: null,
          name: "Forbes",
        },
        author:
          "Mark Sparrow, Senior Contributor, \n Mark Sparrow, Senior Contributor\n https://www.forbes.com/sites/marksparrow/",
        title:
          "These Affordable New Keychron B Series Keyboards Feel Like Logitech’s MX Keys",
        description:
          "These slim and affordable wireless keyboards from Keychron are suitable for macOS and Windows. The low profile design also includes special multimedia keys.",
        url: "https://www.forbes.com/sites/marksparrow/2024/06/30/these-affordable-new-keychron-b-series-keyboards-feel-like-logitechs-mx-keys/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/66718e1c0f321cd33e5bdaa3/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        publishedAt: "2024-06-30T10:00:00Z",
        content:
          "The Keychron B6 Pro scissor keyboard has a 109-key ANSI layout with full numeric keypad. \r\nKeychron\r\nOne of the best-selling keyboards for Windows and Macs in recent years has been the superb Logitec… [+6191 chars]",
      },
      {
        source: {
          id: null,
          name: "Antyweb.pl",
        },
        author: "Kamil Pieczonka",
        title:
          "7 lat później i 70 tys. złotych więcej. Jak zmieniły się nowe samochody?",
        description:
          "Wybór samochodu rodzinnego nie jest prostym zadaniem. Nawet będąc na bieżąco z testami i zapowiedziami, których sporo publikujemy na lamach Antyweba, nie jest łatwo zdecydować się na konkretny model. Sam ostatnio przeprowadziłem taką selekcję i chciałbym podz…",
        url: "https://antyweb.pl/150-tys-zlotych-za-auto-kompaktowe",
        urlToImage:
          "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2024/06/r69m7fjnu0/PXL_20240618_1640188522.jpg",
        publishedAt: "2024-06-30T12:00:13Z",
        content:
          "Mniej wicej 7 lat temu kupiem swój pierwszy nowy samochód - Forda Focusa. 2017 rok to byy cakowicie inne czasy, przecitne auta kompaktowe kosztoway po 60 tys. zotych (np. Fiat Tipo), a dealerzy byli … [+6379 chars]",
      },
      {
        source: {
          id: null,
          name: "Iphoneitalia.com",
        },
        author: "Giuseppe Migliorino",
        title:
          "Apple e l’Intelligenza Artificiale, integrazione di Google Gemini in arrivo",
        description:
          "Apple potrebbe annunciare presto l'integrazione di Google Gemini con i dispositivi iOS 18.\nLink all'articolo originale: Apple e l’Intelligenza Artificiale, integrazione di Google Gemini in arrivo",
        url: "https://www.iphoneitalia.com/827789/apple-e-lintelligenza-artificiale-integrazione-di-google-gemini-in-arrivo",
        urlToImage:
          "https://static.iphoneitalia.com/wp-content/uploads/2024/06/google-gemini.webp",
        publishedAt: "2024-06-30T15:58:33Z",
        content:
          "Secondo Mark Gurman di Bloomberg nella sua newsletter “Power On“, Apple annuncerà “almeno” un altro accordo per aggiungere Google Gemini questo autunno su iOS 18.\r\nGoogle Gemini è stato al centro dei… [+1906 chars]",
      },
      {
        source: {
          id: null,
          name: "Iphoneitalia.com",
        },
        author: "Giuseppe Migliorino",
        title: "Apple lancerà gli AirPods con fotocamera",
        description:
          "Apple pianifica la produzione di AirPods con fotocamera entro il 2026. Scopri le novità sull'integrazione con Vision Pro e l'intelligenza artificiale.\nLink all'articolo originale: Apple lancerà gli AirPods con fotocamera",
        url: "https://www.iphoneitalia.com/827793/airpods-fotocamera-2026",
        urlToImage:
          "https://static.iphoneitalia.com/wp-content/uploads/2023/06/airpods-3-1.jpeg",
        publishedAt: "2024-06-30T16:03:13Z",
        content:
          "Secondo un nuovo report dell’analista Ming-Chi Kuo, Apple punta a iniziare la produzione di massa dei nuovi AirPods con moduli fotocamera entro il 2026. Questo report segue le note di Bloomberg di fe… [+1610 chars]",
      },
      {
        source: {
          id: null,
          name: "Iphoneitalia.com",
        },
        author: "Giuseppe Migliorino",
        title:
          "Apple inizia lo sviluppo di iOS 19: nome in codice “Luck” e altre novità",
        description:
          "Apple sta già sviluppando iOS 19, macOS 16, watchOS 12 e visionOS 3 per il 2025\nLink all'articolo originale: Apple inizia lo sviluppo di iOS 19: nome in codice “Luck” e altre novità",
        url: "https://www.iphoneitalia.com/827786/apple-inizia-lo-sviluppo-di-ios-19-nome-in-codice-luck-e-altre-novita",
        urlToImage:
          "https://static.iphoneitalia.com/wp-content/uploads/2019/12/apples-keynote.jpg",
        publishedAt: "2024-06-30T15:53:45Z",
        content:
          "Apple ha appena svelato iOS 18 alla WWDC con nuove funzioni per la schermata home, miglioramenti grazie ad Apple Intelligence e molto altro. Ma, come da tradizione, l’azienda di Cupertino è già al la… [+1529 chars]",
      },
      {
        source: {
          id: null,
          name: "Iphoneitalia.com",
        },
        author: "Giuseppe Migliorino",
        title: "Fortnite ed Epic Games Store stanno per arrivare su iPhone",
        description:
          "Il Digital Markets Act dell'UE sta per permettere a Fortnite di tornare su iOS attraverso l'Epic Games Store.\nLink all'articolo originale: Fortnite ed Epic Games Store stanno per arrivare su iPhone",
        url: "https://www.iphoneitalia.com/827783/fortnite-epic-games-store-stanno-per-arrivare-su-iphone",
        urlToImage:
          "https://static.iphoneitalia.com/wp-content/uploads/2023/03/download-fortnite-iphone.jpeg",
        publishedAt: "2024-06-30T15:49:36Z",
        content:
          "Le nuove normative dell’Unione Europea stanno aprendo porte inaspettate nel mondo degli app store. In particolare, l’introduzione del Digital Markets Act (DMA) ha costretto Apple a modificare le sue … [+2233 chars]",
      },
      {
        source: {
          id: null,
          name: "iLounge",
        },
        author: "Samantha Wiley",
        title: "Hungarian Apple Pay users affected by unexpected charges",
        description:
          "Apple Pay is having a problem in Hungary with news reports stating that Apple Owners are randomly charged without paying for anything and other false or multiple transactions. The issue is affecting the majority of banks in Hungary, with some users being char…",
        url: "https://www.ilounge.com/news/apple-pay/hungarian-apple-pay-users-affected-by-unexpected-charges",
        urlToImage:
          "https://www.ilounge.com/wp-content/uploads/2024/06/Apple-Pay-2.png",
        publishedAt: "2024-06-30T18:46:01Z",
        content:
          "Apple Pay is having a problem in Hungary with news reports stating that Apple Owners are randomly charged without paying for anything and other false or multiple transactions.\r\nThe issue is affecting… [+701 chars]",
      },
      {
        source: {
          id: null,
          name: "iLounge",
        },
        author: "Samantha Wiley",
        title: "AirTags on Sale at $24.99 (1-Pack) and $78.99 (4-Pack)",
        description:
          "Amazon has discounts on the Apple AirTag at $24.99 from $29.99, with the 4-pack tracker also on sale for $78.99 from $99.99. The Apple AirTag can keep track of your things and devices using the Find My App. Setup is quick and easy, with instant pairing done i…",
        url: "https://www.ilounge.com/news/airtags-on-sale-at-24-99-1-pack-and-78-99-4-pack",
        urlToImage:
          "https://www.ilounge.com/wp-content/uploads/2024/06/AirTags.png",
        publishedAt: "2024-06-30T19:00:35Z",
        content:
          "Amazon has discounts on the Apple AirTag at $24.99 from $29.99, with the 4-pack tracker also on sale for $78.99 from $99.99.\r\nThe Apple AirTag can keep track of your things and devices using the Find… [+832 chars]",
      },
    ],
  };
  return (
    <div className="container mx-auto ">
      <div className=" p-10 rounded-3xl bg-slate-900 border border-white/10 container mx-auto">
        <div className="text-center font-extrabold text-5xl my-3 mb-10 text-indigo-400">
          Explore
        </div>

        {isLoaded === false ? (
          <div className="text-center text-white w-full flex justify-center">
            {/* <VscLoading className="animate-spin text-3xl " /> */}
            <div className="loader"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {news.map((article) => (
              <div
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8)), url(${article.urlToImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="card hover:scale-105 transition-all p-5 rounded-xl "
              >
                <div className="title  font-extrabold text-white">
                  {article.title}
                </div>
                <br />
                <div className="text-white/80">{article.content}</div>
                <br />
                <div className="flex justify-between">
                  <div className="text-white/60 text-wrap">
                    ~{article.author}
                  </div>
                </div>
                <Link target="_blank" href={article.url}>
                  <button className="bg-gradient-to-tr text-white border-opacity-20 border-white p-3  my-3 from-gray-950 to-gray-900 border rounded-lg">
                    Read more -&gt;
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
