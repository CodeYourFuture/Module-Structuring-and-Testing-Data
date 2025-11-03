#!/bin/bash

# Comprehensive script to:
# 1. Run inline assertion tests with proper logging
# 2. Detect and fail on assertion errors
# 3. Verify test case parity with Jest tests

set -e

IMPLEMENT_DIR="Sprint-3/1-implement-and-rewrite-tests/implement"
JEST_DIR="Sprint-3/1-implement-and-rewrite-tests/rewrite-tests-with-jest"

PASSED=0
FAILED=0
TOTAL=0
PARITY_ISSUES=false

echo "🧪 Running Inline Assertion Tests"
echo "=========================================="
echo ""

# Run each implementation file
for file in "$IMPLEMENT_DIR"/*.js; do
  filename=$(basename "$file")
  echo "Testing: $filename"
  echo "------------------------------------------"

  TOTAL=$((TOTAL + 1))

  # Run the file and capture output
  OUTPUT=$(node "$file" 2>&1) || true

  # Check if output contains "Assertion failed"
  if echo "$OUTPUT" | grep -q "Assertion failed"; then
    echo "❌ FAILED"
    echo "$OUTPUT"
    FAILED=$((FAILED + 1))
  else
    echo "✅ PASSED"
    if [ ! -z "$OUTPUT" ]; then
      echo "$OUTPUT"
    fi
    PASSED=$((PASSED + 1))
  fi

  echo ""
done

echo "=========================================="
echo "📊 Test Execution Summary"
echo "=========================================="
echo "Total Files: $TOTAL"
echo "Passed:      $PASSED"
echo "Failed:      $FAILED"
echo ""

# Write to GitHub Actions Summary if available
if [ -n "$GITHUB_STEP_SUMMARY" ]; then
  echo "## 🧪 Inline Assertion Tests" >> "$GITHUB_STEP_SUMMARY"
  echo "" >> "$GITHUB_STEP_SUMMARY"
  echo "| Metric | Count |" >> "$GITHUB_STEP_SUMMARY"
  echo "|--------|-------|" >> "$GITHUB_STEP_SUMMARY"
  echo "| Total Files | $TOTAL |" >> "$GITHUB_STEP_SUMMARY"
  echo "| ✅ Passed | $PASSED |" >> "$GITHUB_STEP_SUMMARY"
  echo "| ❌ Failed | $FAILED |" >> "$GITHUB_STEP_SUMMARY"
  echo "" >> "$GITHUB_STEP_SUMMARY"
fi

# Now check test parity
echo "=========================================="
echo "🔍 Verifying Test Case Parity with Jest"
echo "=========================================="
echo ""

# Start parity table in GitHub summary if available
if [ -n "$GITHUB_STEP_SUMMARY" ]; then
  echo "## 🔍 Test Case Parity Check" >> "$GITHUB_STEP_SUMMARY"
  echo "" >> "$GITHUB_STEP_SUMMARY"
  echo "| File | Inline | Jest | Status |" >> "$GITHUB_STEP_SUMMARY"
  echo "|------|--------|------|--------|" >> "$GITHUB_STEP_SUMMARY"
fi

for impl_file in "$IMPLEMENT_DIR"/*.js; do
  filename=$(basename "$impl_file")
  base_name="${filename%.js}"
  jest_file="$JEST_DIR/${base_name}.test.js"

  echo "Comparing: $filename"
  echo "------------------------------------------"

  if [ ! -f "$jest_file" ]; then
    echo "⚠️  No corresponding Jest test file found"
    PARITY_ISSUES=true
    echo ""
    continue
  fi

  # Count assertions
  inline_count=$(grep -c "assertEquals(" "$impl_file" || echo "0")
  jest_count=$(grep -c "expect(" "$jest_file" || echo "0")

  echo "  Inline assertions: $inline_count"
  echo "  Jest assertions:   $jest_count"

  if [ "$inline_count" -eq "$jest_count" ]; then
    echo "  ✅ Test counts match"
    if [ -n "$GITHUB_STEP_SUMMARY" ]; then
      echo "| $filename | $inline_count | $jest_count | ✅ Match |" >> "$GITHUB_STEP_SUMMARY"
    fi
  else
    echo "  ⚠️  MISMATCH DETECTED"
    if [ $inline_count -gt $jest_count ]; then
      diff=$((inline_count - jest_count))
      echo "      → Inline tests have $diff MORE assertion(s) than Jest"
      echo "      → Jest tests may be missing $diff test case(s)"
      if [ -n "$GITHUB_STEP_SUMMARY" ]; then
        echo "| $filename | $inline_count | $jest_count | ⚠️ Inline +$diff |" >> "$GITHUB_STEP_SUMMARY"
      fi
    else
      diff=$((jest_count - inline_count))
      echo "      → Jest tests have $diff MORE assertion(s) than Inline"
      echo "      → Inline tests may be missing $diff test case(s)"
      if [ -n "$GITHUB_STEP_SUMMARY" ]; then
        echo "| $filename | $inline_count | $jest_count | ⚠️ Jest +$diff |" >> "$GITHUB_STEP_SUMMARY"
      fi
    fi
    PARITY_ISSUES=true
  fi

  echo ""
done

# Add summary note if in GitHub Actions
if [ -n "$GITHUB_STEP_SUMMARY" ]; then
  echo "" >> "$GITHUB_STEP_SUMMARY"
fi

# Final summary
echo "=========================================="
echo "🎯 Final Summary"
echo "=========================================="
echo ""

if [ $FAILED -gt 0 ]; then
  echo "❌ TEST FAILURES"
  echo "   → $FAILED inline test file(s) have failing assertions"
  echo "   → Fix the failing assertions before proceeding"
  echo ""
fi

if [ "$PARITY_ISSUES" = true ]; then
  echo "⚠️  TEST PARITY ISSUES"
  echo "   → The number of test cases differs between inline and Jest tests"
  echo "   → Both test suites should cover the same use cases"
  echo "   → Review the comparison above and sync the test cases"
  echo ""
fi

if [ $FAILED -eq 0 ] && [ "$PARITY_ISSUES" = false ]; then
  echo "✅ All inline tests passed!"
  echo "✅ Test parity verified - test counts match!"
  echo ""
  echo "🎉 Everything looks good!"
  exit 0
else
  if [ $FAILED -gt 0 ]; then
    echo "❌ Exiting with failure due to test failures"
    exit 1
  else
    # Parity issues are warnings, not failures (tests still passed)
    echo "⚠️  Tests passed but parity issues detected"
    echo "   Please sync test cases between inline and Jest tests"
    exit 0
  fi
fi
