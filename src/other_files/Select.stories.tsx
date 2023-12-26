// // Select.stories.tsx
// import { StoryFn, Meta } from '@storybook/react';
// import Select, { SelectProps } from './Select';

// export default {
//   title: 'Components/Select',
//   component: Select,
// } as Meta;

// const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   options: ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu'],
//   onSelect: (selectedOption: string) => console.log('Selected:', selectedOption),
// };