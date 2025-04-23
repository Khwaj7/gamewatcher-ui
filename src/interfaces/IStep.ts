import { JSX } from 'react';

export interface IStep {
  title: string;
  description: string;
  child: () => JSX.Element;
}