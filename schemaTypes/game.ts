export const gameSchema = {
  name: 'game',
  title: 'Game',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Game Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'string',
      options: {
        list: [
          { title: 'Action', value: 'Action' },
          { title: 'RPG', value: 'RPG' },
          { title: 'Strategy', value: 'Strategy' },
          { title: 'Puzzle', value: 'Puzzle' },
          { title: 'Sports', value: 'Sports' },
          { title: 'Horror', value: 'Horror' },
          { title: 'Adventure', value: 'Adventure' },
          { title: 'Simulation', value: 'Simulation' },
          { title: 'Other', value: 'Other' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating (1-5 Stars)',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5],
      },
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
    {
      name: 'websiteLink',
      title: 'Game Website Link',
      type: 'url',
      description: 'Link to the game website (e.g. https://mygame.com)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Game Image / Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featured',
      title: 'Featured Game?',
      type: 'boolean',
      description: 'Show this game in the Featured section at top',
      initialValue: false,
    },
    {
      name: 'badge',
      title: 'Badge Label (optional)',
      type: 'string',
      description: 'e.g. "New", "Hot", "Free", "18+"',
    },
  ],
  preview: {
    select: {
      title: 'title',
      genre: 'genre',
      media: 'image',
    },
    prepare({ title, genre, media }: any) {
      return {
        title,
        subtitle: genre,
        media,
      };
    },
  },
};
