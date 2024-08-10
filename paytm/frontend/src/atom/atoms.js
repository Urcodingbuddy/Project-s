import { atom } from 'recoil';

export const firstNameatom = atom({
  key: 'firstName', // Unique ID for this atom
  default: 'Sign in', // Default value (initial state)
});
