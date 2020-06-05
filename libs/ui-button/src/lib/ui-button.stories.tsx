import React from 'react';
import { UiButton } from './ui-button';

export default { component: UiButton, title: 'Examples / UI Button' };

export const Basic = (args: any) => <UiButton>{args.label}</UiButton>;
Basic.args = { label: 'Click me' };

export const Disabled = () => <UiButton disabled>Click me</UiButton>;
