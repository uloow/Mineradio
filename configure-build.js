const pkg = JSON.parse(require('fs').readFileSync('package.json'));
pkg.build = pkg.build || {};
pkg.build.mac = { category: 'public.app-category.music' };
delete pkg.devDependencies['rcedit'];
require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));
console.log('Build config updated');
