---
title: "이진 탐색 경계 찾기 패턴"
date: 2026-02-23 09:00:00 +0900
categories: [Algorithm]
tags: [이진탐색, 경계탐색, 구현패턴]
excerpt: "단조 조건에서 first true 경계를 안정적으로 찾는 이진 탐색 템플릿을 정리합니다."
---

경계(`first true`, `last false`)를 찾는 문제는 값 비교가 아니라 **조건 함수의 단조성**으로 바라보면 구현이 단순해집니다.

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

핵심은 탐색 구간을 반열린 구간 `[lo, hi)`로 유지하는 것입니다. 이 규칙을 지키면 종료 조건과 포인터 이동이 일관되어 오프바이원 오류를 줄일 수 있습니다.
