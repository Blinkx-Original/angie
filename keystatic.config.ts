import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'cloud' },
  cloud: { project: 'no-team/keystatictest' }, // <-- pon tu Project Key

  collections: {
    posts: {
      label: 'Posts',
      path: 'content/posts/*',
      slugField: 'slug',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
        slug: fields.slug({ name: { field: 'title' } }),
        content: fields.mdx({ label: 'Content' })
      }
    }
  }
});
