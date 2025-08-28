import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'cloud' },

  // Este es tu Project Key de Keystatic Cloud
  cloud: { project: 'no-team/keystatictest' },

  // Colecciones de contenido
  collections: {
    posts: {
      label: 'Posts',
      path: 'content/posts/*',
      slugField: 'slug',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({
          label: 'Title',
          validation: { isRequired: true },
        }),
        slug: fields.slug({
          name: { field: 'title' },
        }),
        content: fields.mdx({
          label: 'Content',
        }),
      },
    },
  },
});
