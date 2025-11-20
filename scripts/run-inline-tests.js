#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const IMPLEMENT_DIR = 'Sprint-3/1-implement-and-rewrite-tests/implement';
const JEST_DIR = 'Sprint-3/1-implement-and-rewrite-tests/rewrite-tests-with-jest';

const results = {
  passed: 0,
  failed: 0,
  total: 0,
  parityIssues: []
};

function runInlineTest(filePath) {
  const filename = path.basename(filePath);
  console.log(`\nTesting: ${filename}`);

  try {
    const output = execSync(`node "${filePath}"`, {
      encoding: 'utf-8',
      stdio: 'pipe'
    });

    if (output.includes('Assertion failed')) {
      console.log('FAILED');
      console.log(output);
      return { status: 'failed', filename };
    }

    console.log('PASSED');
    if (output.trim()) console.log(output);
    return { status: 'passed', filename };

  } catch (error) {
    const output = error.stdout || error.stderr || error.message;
    console.log('FAILED');
    console.log(output);
    return { status: 'failed', filename };
  }
}

function getJsFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(file => file.endsWith('.js'))
    .map(file => path.join(dir, file));
}

function countAssertions(filePath, pattern) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(new RegExp(pattern, 'g'));
    return matches ? matches.length : 0;
  } catch (error) {
    return 0;
  }
}

function checkParity(implFile) {
  const filename = path.basename(implFile);
  const baseName = filename.replace('.js', '');
  const jestFile = path.join(JEST_DIR, `${baseName}.test.js`);

  console.log(`\nComparing: ${filename}`);

  if (!fs.existsSync(jestFile)) {
    console.log('No corresponding Jest test file found');
    return { filename, inlineCount: 0, jestCount: 0, hasMismatch: true };
  }

  const inlineCount = countAssertions(implFile, 'assertEquals\\(');
  const jestCount = countAssertions(jestFile, 'expect\\(');

  console.log(`Inline: ${inlineCount}, Jest: ${jestCount}`);

  if (inlineCount === jestCount) {
    console.log('Counts match');
    return { filename, inlineCount, jestCount, hasMismatch: false };
  }

  const diff = Math.abs(inlineCount - jestCount);
  console.log(`Mismatch: ${diff} assertion(s) difference`);

  return {
    filename,
    inlineCount,
    jestCount,
    diff,
    hasMismatch: true
  };
}

function writeGitHubSummary() {
  const summaryFile = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryFile) return;

  let summary = '## Inline Assertion Tests\n\n';
  summary += '| Metric | Count |\n|--------|-------|\n';
  summary += `| Total | ${results.total} |\n`;
  summary += `| Passed | ${results.passed} |\n`;
  summary += `| Failed | ${results.failed} |\n\n`;

  summary += '## Test Parity Check\n\n';
  summary += '| File | Inline | Jest | Match |\n|------|--------|------|-------|\n';

  results.parityIssues.forEach(issue => {
    const match = issue.hasMismatch ? 'No' : 'Yes';
    summary += `| ${issue.filename} | ${issue.inlineCount} | ${issue.jestCount} | ${match} |\n`;
  });

  fs.appendFileSync(summaryFile, summary);
}

function main() {
  console.log('Running inline assertion tests...\n');

  const testFiles = getJsFiles(IMPLEMENT_DIR);
  if (testFiles.length === 0) {
    console.log(`No test files found in ${IMPLEMENT_DIR}`);
    process.exit(1);
  }

  results.total = testFiles.length;

  testFiles.forEach(file => {
    const result = runInlineTest(file);
    if (result.status === 'passed') {
      results.passed++;
    } else {
      results.failed++;
    }
  });

  console.log(`\n\nTest Summary: ${results.passed}/${results.total} passed`);

  console.log('\n\nChecking test parity...');
  testFiles.forEach(file => {
    results.parityIssues.push(checkParity(file));
  });

  const hasParityIssues = results.parityIssues.some(issue => issue.hasMismatch);

  writeGitHubSummary();

  console.log('\n');
  if (results.failed > 0) {
    console.log(`${results.failed} test(s) failed`);
    process.exit(1);
  }

  if (hasParityIssues) {
    console.log('Parity issues detected - please review');
  } else {
    console.log('All tests passed, parity verified');
  }

  process.exit(0);
}

main();
