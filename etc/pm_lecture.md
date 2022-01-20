# Team Project

## Role

- Product Manager: 예산 및 전략에 대한 결정권을 가진 사람 (어떤 순위, 어떤 기능을 결정 및 예산에 대한 권한)
- Project Manager: 특정 프로젝트 안에서, 구현이 끝난 서비스를 사용자에게 전달하는 역할 + 프로젝트 진행에 대한 인력 및 비용 관리
- UX Designer: 전략, 유저 리서치, 프로토 타입 및 반응형 디자인 구성
- UI Designer: UI 디자인
- Developer: 개발자
- Scrum Master: 개발팀의 작업에 대해 트레이닝 또는 코칭 등 리드 하는 역할
- Technical Writer: 기술적인 문서를 작성하는 역할

## Software Development Life Cycle

- SDLC? (개발 생명 주기)

  - 소프트웨어를 계획, 개발, 시험, 배포하는 과정
  - 요구사항 분석 -> 설계 -> 구현 -> 테스트 -> 유지 및 보수

- 개발 모델

  - Prototype: 최소한의 요구사항 분석 후 프로토타입 제작, 고객의 요구를 개발에 적극적으로 도입. 피트백을 통해 프로덕트 개선. 고객의 평가가 중요한 프토덕트에 도입 (외주에 가장 좋음)
  - waterfall: 요구사항 분석 -> 설계 -> 구현 -> 운용 순차적 진행, 대규모 팀에 적합 + 각 단계 완료 전까지 다음 단계로 넘어가지 않음
  - Spiral: 목표설정 -> 위험 분석 -> 개발 및 검증 -> 고객 평가 + 다음 단계 수립 반복. 점진적으로 단계를 반복 수행해서 위험 최소화. 대형 시스템 구축에 유리
  - Agile: 프로젝트의 생명 주기 동안 반복적인 개발 주기를 진행, 계획에 너무 시간을 많이 쓰지 말자 (피드백을 받아 수정하는 것으로 생각하자)
    - 계획 -> 분석 -> 디자인 -> 구현 -> 테스팅 및 통합 -> 유지보수
    - Agile 프레임워크 : eXtreme Programming 또는 scrum
      - XP
        - 고객 중심의 양질의 소프트웨어를 빠른 시간안에 전달한다
        - 비지니스 니즈의 변동이 심할 경우 적합한 개발 방법
        - TDD
      - scrum
        - 상호, 점진적 개발방법론
        - 개발할 기능, 수정할 사항에 대해 우선순위 부여, 이 순서대로 Task 진행
        - 매일 15분의 회의 진행
        - 1~4주의 Sprint(기획 ~ 리뷰)

- Before Implementation

  - 요구사항 분석
    - 고객
    - 기능
    - 예외적 인터페이스
  - story board
  - 디자인 프로토타입
  - ERD
  - API Design

- Tools

  - 커뮤: 슬랙
  - 저장소: 깃헙
  - 버전관리: git
  - 디자인: Figma
  - 발표: 구글 슬라이드 + 파워포인트
  - 문서: .md in repo

- Git issue template

  - 저장소 생성 및 클론
  - $ cd PROJECT_NAME
  - $ mkdir .github
  - $ touch .github/ISSUE_TEMPLATE.md

    - ```
        ## Problem & Opportunity

        ## Context or Reproduce

        ## UX Flow

        ## Checklist

        ## Image Reference

        ## Links

        ## CC
      ```

  - $ touch .github/PULL_REQUEST.md

    - ```
        Please ensure your pull request adheres to the following guidelines:

        - [ ] Use the following format: `* [owner/repo](link)`
        - [ ] Link additions should be added to the bottom of the relevant category.
        - [ ] New categories or improvements to the existing categorization are welcome.
        - [ ] Search previous suggestions before making a new one, as yours may be a duplicate.
        - [ ] Sort by alphabetical order

        <!-- Choose one of these types and delete else -->

        fix #
        resolve #
        close #

        ## Proposed Changes

          -
          -
          -

      ```

- Project 생성

  - 칸반 형식
  - Template: Automated kanban with reviews

- Project내 Backlogs 생성

  - Preset: To do
  - Newly Added 체크
  - 맨 좌측으로 옮겨놓음

- Project내 mileston 생성

- Organization 생성

  - My personal account 체크 후 확인
  - 팀원 email 주소로 팀원 초대
  - 나머지 skip
  - organization 내에서 repo 생성 후, fork로 작업

  - 팀원 어드민 설정 후, 각자 설정

    - $ git remote add upstream ORGANIZATION_REPO_ADDRESS.git
    - $ git remote set-url upstream --push no_push
    - $ git remote -v 로 확인
    - $ git push upstream BRANCH_NAME

    - ```
        팀 레포 fork
        fork한 레포 clone
        팀 레포 upstream 에 추가 git remote add upstream https://github.com/K-Digital-training-team3/Indian-forker-project.git
        팀 레포에 바로 push 못하게 주소 삭제 git remote set-url upstream --push no_push
      ```

  - .wiki 생성
    - $ mkdir ~.wiki
    - $ cd ~.wiki
    - $ touch Convention.md
    - $ touch Daily Scrum.md
    - $ touch Documentation.md

## DevOps

- Dev: Plan - Code - Build - Test
- Ops: Release - Deploy - Operate - Monitor

- CI/CD 툴을 사용하여 Build/Test/Deploy 자동화

## README.md 양식

[README_TEMPLATE](https://github.com/always0ne/repositoryTemplate)

- ```
    # Project name

    ## index

    ## About Project name

    ## Overview

    ## Getting Started

    ### installing

    ## Contributing

    ## Authors

    ## License
  ```
