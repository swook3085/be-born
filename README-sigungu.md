# 시군구 데이터 생성 가이드

## 방법 1: 개발 서버를 통한 데이터 생성 (권장)

1. 개발 서버 실행
```bash
pnpm run dev
```

2. 새 터미널에서 시군구 데이터 가져오기
```bash
node fetch-sigungu.cjs
```

이 방법은 Next.js의 API rewrites를 통해 데이터를 가져오므로 가장 안정적입니다.

## 방법 2: 직접 API 호출 (현재 작동하지 않음)

```bash
node static-path.cjs
```

현재 API 경로 문제로 작동하지 않습니다.

## 현재 상태

- `sigungu.json` 파일은 생성되었지만 빈 데이터입니다.
- 필터 컴포넌트는 JSON 파일을 먼저 확인하고, 데이터가 없으면 API를 호출합니다.
- 따라서 JSON 파일에 데이터가 없어도 앱은 정상 작동합니다.

## 파일 구조

```
public/data/
├── cat.json       # 고양이 품종
├── dog.json       # 강아지 품종
├── etc.json       # 기타 품종
├── sido.json      # 시도 목록
└── sigungu.json   # 시군구 목록 (시도 코드별)
```

## sigungu.json 구조

```json
{
  "response": {
    "header": {
      "resultCode": "00",
      "resultMsg": "NORMAL SERVICE."
    },
    "body": {
      "items": {
        "6110000": [...],  // 서울특별시 시군구
        "6410000": [...],  // 경기도 시군구
        ...
      }
    }
  }
}
```


