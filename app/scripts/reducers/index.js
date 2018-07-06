import app from './app';
import github from './github';
import user from './user';
import test from './test';

export default {
  ...app,
  ...github,
  ...user,
  ...test,
};
