import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default {
  plugins: [
    reactRefresh({
      // Exclude storybook stories and node_modules
      exclude: [/node_modules/],
      // Only .tsx files
      include: '**/*.{js, jsx, ts,tsx}',
    }),
  ],
};
