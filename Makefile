make install:
	npm ci

make brain-games:
	node bin/brain-games.js

make publish:
	npm publish --dry-run

make lint:
	npx eslint .
