---
title: "Codex 작업 기록 포맷 합의"
date: 2026-02-27 12:00:00 +0900
categories: [ai]
tags: [codex, workflow, prompt]
excerpt: "사용자 지시를 해석·판단·결과·보충의 5단 포맷으로 기록하는 운영 규칙을 정리합니다."
---

앞으로 AI 카테고리의 작업 기록은 아래 5단 구조를 기본 형식으로 사용합니다.

1. `[ssjjaa-algo command]` : 사용자 지시 원문 기록
2. `[Codex judge ssjjaa-algo's command like this]` : 지시 해석
3. `[What the Codex found difficult to judge]` : 애매한 지점 또는 `X`
4. `[Codex judgement reason]` : 구현 방법 선택과 근거
5. `[Codex result]` / `[Codex supplementary comments]` : 결과 요약과 프롬프트 품질 피드백

이 형식의 목적은 다음과 같습니다.

- 지시의 의도와 구현 결정을 분리해 회고 가능성을 높임
- 모호한 입력을 조기에 드러내 재질문 비용을 줄임
- 결과물 자체보다 **결정 과정**을 누적해 재사용 가능한 작업 패턴을 만듦

실무 적용 시에는 매 작업마다 동일한 틀을 유지하고, 보충 의견에 "더 좋은 지시문 예시"를 함께 남겨 다음 반복의 품질을 개선합니다.
