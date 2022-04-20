x5engine.settings.imBlog = {
	root: 'https://trial-8899.websitex5.me/blog/',
	title_tag: 'CAED Proyecto Agua Saludable - WEBSITE X5 TRIAL VERSION ',
	home_posts_number: 8,
	card_type: 'leftcoverrightcontents',
	show_card_title: true,
	show_card_category: true,
	show_card_description: true,
	show_card_author: true,
	show_card_date: true,
	show_card_button: true,
	article_type: 'titlecovercontents',
	file_prefix: 'x5_',
	richDataEnabled: true,
	comments: false,
	comments_source: 'wsx5',
	email: '',
	comment_type: 'both',
	approve_comments: 0,
	highlight_mode: 'card',

highlighted_count: 1,

highlighted_card_height: 300,
	categories: ['comentarios'],
	authors: ['CAED'],
	posts: [],
	posts_cat: [],
	posts_author: [],
	posts_month: [],
	posts_ids: [],
	posts_slug: []
};

var post = null;

// Post titled "Prueba Blog1"
x5engine.settings.imBlog.posts['000000004'] = {
	id: '000000004',
	title: 'Prueba Blog1',
	title_tag: 'Prueba Blog1 - CAED Proyecto Agua Saludable - WEBSITE X5 TRIAL VERSION ',
	title_heading_tag: 'h2',
	slug: 'prueba-blog1',
	rel_url: '?prueba-blog1',
	author: 'CAED',
	category: 'comentarios',
	cardCover: '',
	cover: '',
	summary: 'Prueba de Blog',
	tag_description: 'Prueba de Blog',
	rich_data_type: [
	{
		"@type": "BlogPosting",
		"@context": "https://schema.org",
		"publisher": {
			"@type": "Organization",
			"name": ""
		},
		"datePublished": "2022-04-18T05:28:00",
		"dateModified": "2022-04-18T05:28:00",
		"author": {
			"@type": "Person",
			"name": "CAED"
		},
		"headline": "Prueba Blog1",
		"description": "Prueba de Blog",
		"mainEntityOfPage": "http://127.0.0.1:8080/blog/?prueba-blog1",
		"speakable": {
			"@type": "SpeakableSpecification",
			"xpath": [
				"/html/head/meta[@name='title']/@content",
				"/html/head/meta[@name='description']/@content"
			]
		}
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "Abril 2022",
				"item": "http://127.0.0.1:8080/blog/?month=202204",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Prueba Blog1",
				"position": 3
			}
		]
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "comentarios",
				"item": "http://127.0.0.1:8080/blog/?category=comentarios",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Prueba Blog1",
				"position": 3
			}
		]
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "CAED",
				"item": "http://127.0.0.1:8080/blog/?author=CAED",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Prueba Blog1",
				"position": 3
			}
		]
	}
],
	keywords: '',
	sources: [],
	body: '<div id="imBlogPost_000000004"><div><span class="fs12lh1-5 ff1">Aqui comenzamos la prueba de contenido para un artículo para el Blog</span></div><div style="clear: both;"><!-- clear floated images --></div></div>',
	timestamp: '18/4/2022',
	utc_time: new Date(2022,3,18,5,28,0),
	month: '202204',
	media: '../',
	mediahtml: '<div style="margin: 5px auto;"><div id="imObjectSoundContent_000000004"></div><script>function loadpostmedia000000004() {$(\'#imObjectSoundContent_000000004\').empty().width(\'auto\');var settings = {baseUrl: \'../\', target: \'#imObjectSoundContent_000000004\', type: \'youtube\', url: \'https://www.youtube.com/watch?v=bp9wXpV-l1Q&t=794s\', guiColor: \'#E0E0E0\', controlBar: true, autoHideControls: false, autoplay: false };var currentBp = x5engine.responsive.getCurrentBreakPoint();if (currentBp.name == \'Desktop\') {settings.width = 400;settings.height = 300;}if (currentBp.name == \'Breakpoint 1\') {settings.width = 400;settings.height = 300;}if (currentBp.name == \'Mobile\') {settings.width = 306;settings.height = 230;}if (currentBp.name == \'Mobile Fluid\') {settings.width = Math.min(400, $(\'#imObjectSoundContent_000000004\').width());settings.height = settings.width / 400 * 300;}x5engine.mediaPlayer(settings);$(\'#imContent\').off(\'breakpointChangedOrFluid\', loadpostmedia000000004).on(\'breakpointChangedOrFluid\', loadpostmedia000000004);}loadpostmedia000000004();if (navigator.userAgent.toLowerCase().indexOf(\'wsx5\') != -1) {x5engine.boot.push(function () { x5engine.utils.showOfflineMessage(\'Para reproducir algunos formatos de sonido y vídeo localmente es necesario mostrar la vista previa en un navegador externo.\'); });}</script></div>',
	comments: false,
	tag: []
};
if (x5engine.settings.imBlog.posts_cat['comentarios'] == null) x5engine.settings.imBlog.posts_cat['comentarios'] = [];
x5engine.settings.imBlog.posts_cat['comentarios'][x5engine.settings.imBlog.posts_cat['comentarios'].length] = '000000004';
if (x5engine.settings.imBlog.posts_author['CAED'] == null) x5engine.settings.imBlog.posts_author['CAED'] = [];
x5engine.settings.imBlog.posts_author['CAED'][x5engine.settings.imBlog.posts_author['CAED'].length] = '000000004';
if (x5engine.settings.imBlog.posts_month['202204'] == null) x5engine.settings.imBlog.posts_month['202204'] = [];
x5engine.settings.imBlog.posts_month['202204'][x5engine.settings.imBlog.posts_month['202204'].length] = '000000004';
x5engine.settings.imBlog.posts_slug['prueba-blog1'] = '000000004';

// IDs summary
x5engine.settings.imBlog.posts_ids = ['000000004'];

x5engine.boot.push("x5engine.imBlog.show()");
x5engine.boot.push("x5engine.imForm.initForm('#blogComment')");

// End of file x5blog.js