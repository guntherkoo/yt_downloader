import { storiesOf } from '@storybook/react';
import * as React from 'react';
import centered from '@storybook/addon-centered/react';
import Button from './Button';

storiesOf('Button', module)
	.addDecorator(centered)
	.add('with text', () => (
		<Button>
			Hello Button
		</Button>
	))
	.add('with some emoji', () => (
		<Button>
			😀 😎 👍 💯
		</Button>
	));