import { Meta, Story } from '@storybook/angular';
import { ImageComponent } from './image.component';

export default {
  title: 'ImageComponent',
  component: ImageComponent,
} as Meta;

export const Default: Story = () => ({
  props: { source: './newrizon.png' }
});