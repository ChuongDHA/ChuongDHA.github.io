import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { portfolio } from '@/data/portfolio';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: portfolio.name,
    description: portfolio.seo.description,
    site: context.site!,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/post/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: '<language>vi</language>',
  });
}
