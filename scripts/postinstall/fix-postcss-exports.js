const fs = require('fs');
const path = require('path');

const postcssPackageJsonPath = path.join(
  __dirname,
  '..',
  '..',
  'node_modules',
  'postcss',
  'package.json'
);

const bufferEqualPath = path.join(
  __dirname,
  '..',
  '..',
  'node_modules',
  'buffer-equal-constant-time',
  'index.js'
);

function patchPostcssExports() {
  try {
    if (!fs.existsSync(postcssPackageJsonPath)) return;

    const packageJson = JSON.parse(
      fs.readFileSync(postcssPackageJsonPath, 'utf8')
    );
    if (!packageJson.exports) return;

    delete packageJson.exports;
    fs.writeFileSync(
      postcssPackageJsonPath,
      `${JSON.stringify(packageJson, null, 2)}\n`
    );
    console.log('Patched postcss package exports for legacy loaders.');
  } catch (error) {
    console.warn('Failed to patch postcss exports:', error);
  }
}

function patchBufferEqual() {
  try {
    if (!fs.existsSync(bufferEqualPath)) return;
    const source = fs.readFileSync(bufferEqualPath, 'utf8');
    const target = "var SlowBuffer = require('buffer').SlowBuffer;";
    if (!source.includes(target)) return;

    const patched = source.replace(
      target,
      "var SlowBuffer = require('buffer').SlowBuffer || Buffer;"
    );
    fs.writeFileSync(bufferEqualPath, patched);
    console.log('Patched buffer-equal-constant-time for newer Node versions.');
  } catch (error) {
    console.warn('Failed to patch buffer-equal-constant-time:', error);
  }
}

(function runPatches() {
  patchPostcssExports();
  patchBufferEqual();
})();
