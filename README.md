🎬 스파르타코딩클럽 프론트엔드 2차 과제  
✅ 과제 수행 사항 자가 점검표

---

## 🟢 필수 기능

| 기능                           | 구현 여부 | 비고 |
|--------------------------------|-----------|------|
| Git 브랜치 전략 사용           | ✅        | 도전 기능(Redux)과 통합하여 구현 |
| 페이지 라우팅 구현             | ✅        | `App.jsx`에서 라우팅 구성 완료 |
| 도감 페이지 구성               | ✅        | `Dashboard`, `PokemonList`, `PokemonCard`로 구성 |
| 포켓몬 선택 기능 구현          | ✅        | 최대 6마리 제한, toast 메시지로 안내 |
| 디테일 페이지 구현             | ✅        | `useParams` 사용, 상세 정보 표시, 뒤로 가기 버튼 |
| 상태 유지 기능 구현            | ✅        | Redux Toolkit 사용하여 상태 유지 |
| 알림 기능 구현                 | ✅        | `react-toastify` 사용, 다양한 메시지 출력 |
| styled-components로 스타일링   | ✅        | 전 페이지 적용, 반응형 디자인 포함 |

---

## 💡 도전 기능

| 도전 기능                        | 구현 여부 | 비고 |
|----------------------------------|-----------|------|
| Redux Toolkit으로 리팩터링       | ✅        | Context API 완전히 대체 |
| 디테일 페이지 '추가' 버튼 구현   | ✅        | 상태에 따라 토글되며 Redux로 관리 |
| 리스트 페이지 데이터 유지        | ✅        | Redux 전역 상태로 유지됨 |
| UI 라이브러리 활용 (toastify 등) | ✅        | alert 대신 toast로 알림 처리 |
| 선택 제한 및 중복 방지 처리      | ✅        | toast 메시지로 안내 |

---

## ⚠️ 충돌 해결 사항

| 항목            | 필수 요구사항 | 도전 기능 | 최종 적용 |
|-----------------|----------------|-------------|------------|
| 상태 관리 방식  | Context API     | Redux Toolkit | Redux Toolkit ✅ |
| 알림 방식       | alert 사용      | toast 메시지  | toast ✅ |

---

## 📝 구현 요약

- **상태 관리**: Redux Toolkit으로 중앙 집중형 상태 관리 구현
- **알림**: react-toastify로 모든 사용자 메시지 처리
- **디자인 시스템**: styled-components로 일관된 UI 구성 및 반응형 디자인 적용
- **라우팅**: `react-router-dom`을 통해 Home, Dex, Detail 페이지 이동 완성
- **기능 완료**: 필수 및 도전 기능 전체 구현 완료

---

## 🔗 기타 정보

- Redux 브랜치: `redux-toolkits`
- 주요 기술 스택: React, Redux Toolkit, react-toastify, styled-components
