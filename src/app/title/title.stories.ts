import { Meta, Story } from '@storybook/angular';
import { TitleComponent } from './title.component';

export default {
  title: 'TitleComponent',
  component: TitleComponent,
} as Meta;

export const Primary: Story = () => ({
  props: { who: 'Primary' }
});