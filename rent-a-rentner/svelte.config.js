/*import adapter from '@sveltejs/adapter-netlify';
export default {
	kit: {
		adapter: adapter({
			edge: false,
			split: false
	})
	}
};*/

import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: adapter(),
  }
};
