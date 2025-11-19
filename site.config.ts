export default {
  title: "LofiBoy's timeline",
  description: 'personal website by LofiBoy.',
  siteRoot:
    process.env.NODE_ENV === 'production'
      ? 'https://timeline-navy-two.vercel.app'
      : 'http://localhost:3000',
  rssUrlList: [
    'https://zenn.dev/boy6/feed',
    'https://note.com/cool_bonobo254/rss',
  ],
};
