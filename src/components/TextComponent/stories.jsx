import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nulla ex, consequatur repellat adipisci officia, hic sunt cum nemo dolorum, dolore sequi placeat ab sapiente corrupti quae eum! Saepe, unde.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
