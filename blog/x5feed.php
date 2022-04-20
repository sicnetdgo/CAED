<?php include('../res/x5engine.php'); header('Content-Type: text/xml'); echo '<?xml version="1.0" encoding="utf-8"?>'; ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<atom:link href="https://trial-8899.websitex5.me/blog/x5feed.php" rel="self" type="application/rss+xml" />
		<title><![CDATA[]]></title>
		<link>https://trial-8899.websitex5.me/blog/</link>
		<description><![CDATA[]]></description>
		<language>ES</language>
		<lastBuildDate><?php echo getLastAvailableDate(array(1650259680)); ?></lastBuildDate>
		<generator>Incomedia WebSite X5 Pro</generator>
<?php if (time() > 1650259680): ?>
		<item>
			<title><![CDATA[Prueba Blog1]]></title>
			<author><![CDATA[CAED]]></author>
			<category domain="https://trial-8899.websitex5.me/blog/index.php?category=comentarios"><![CDATA[comentarios]]></category>
			<category>imblog</category>
			<description><![CDATA[<div id="imBlogPost_000000004"><div><span class="fs12lh1-5 ff1">Aqui comenzamos la prueba de contenido para un artículo para el Blog</span></div></div><a href="https://www.youtube.com/watch?v=bp9wXpV-l1Q&t=794s">https://www.youtube.com/watch?v=bp9wXpV-l1Q&t=794s</a>]]></description>
			<pubDate>Mon, 18 Apr 2022 05:28:00 GMT</pubDate>
			<link>https://trial-8899.websitex5.me/blog/?prueba-blog1</link>
			<guid isPermaLink="false">https://trial-8899.websitex5.me/blog/rss/000000004</guid>
		</item>
<?php endif; ?>
	</channel>
</rss>