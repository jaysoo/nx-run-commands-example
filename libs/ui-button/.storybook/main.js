module.exports = {
  stories: ['../src/lib/*.stories.*'],
  addons: ['@storybook/addon-essentials'],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
};
