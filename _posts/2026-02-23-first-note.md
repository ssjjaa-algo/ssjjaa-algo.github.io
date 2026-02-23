---
title: "Binary Search Boundary Pattern"
date: 2026-02-23 00:00:00 +0000
categories: [Algorithms]
tags: [binary-search, patterns, notes]
excerpt: "A concise pattern for lower-bound style binary search on monotonic predicates."
---

When searching for a boundary (`first true` or `last false`), treat binary search as a predicate problem.

```python
def lower_bound(arr, target):
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid
    return lo
```

This keeps the interval half-open (`[lo, hi)`) and avoids off-by-one bugs.
