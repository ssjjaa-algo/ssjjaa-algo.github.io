---
title: "이분 탐색 경계 찾기 패턴"
date: 2026-02-23 00:00:00 +0900
categories: [알고리즘]
tags: [이분탐색, 패턴, 구현]
excerpt: "단조 조건에서 first true를 안전하게 찾는 하프 오픈 구간 패턴 정리."
---

경계형 이분 탐색은 **값을 찾는 문제**가 아니라, 조건이 바뀌는 **경계 지점을 찾는 문제**로 보는 것이 핵심입니다.

예를 들어 `arr[mid] >= target`이 처음으로 참이 되는 인덱스를 찾는다면, 구간을 `[lo, hi)`로 유지하면 오프바이원 실수를 크게 줄일 수 있습니다.

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

- 불변식: 답은 항상 `[lo, hi)` 안에 존재
- 분기 규칙: `mid`를 버릴지(`lo = mid + 1`), 포함할지(`hi = mid`)를 조건으로 통일
- 종료 시점: `lo == hi`, 즉 경계 인덱스 확정
