# 💅 UnicrazyNail - 커스텀 네일 예약 시스템

## 🚀 프로젝트 개요
사용자가 원하는 네일 디자인을 선택하고, 실시간으로 예약 내역을 관리(생성, 조회, 수정, 삭제) 할 수 있는 웹 서비스입니다.

## 🔗 배포 주소
[https://gkssk122827-ai.github.io/unicrazynail/](https://gkssk122827-ai.github.io/unicrazynail/)

---

## 📸 주요 화면

### 메인 페이지
![메인페이지](https://private-user-images.githubusercontent.com/239462926/528438467-3ba04136-3db7-46ef-b027-68c5d0be0793.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjYxMjIwNTUsIm5iZiI6MTc2NjEyMTc1NSwicGF0aCI6Ii8yMzk0NjI5MjYvNTI4NDM4NDY3LTNiYTA0MTM2LTNkYjctNDZlZi1iMDI3LTY4YzVkMGJlMDc5My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIxOVQwNTIyMzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NTZkY2ZkMzFjYjk5NDIzMzZiZGU4YTA2OGE5MzE3YmI0OTQzMTc5N2Y4YzE0OGI1MTBkZWUxMjExMDkyMDZkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.YTFP1eg5ACHNObR9LNcbqTTw9e8TRsxLHkkPJeIaRXA)

### 예약 등록 및 관리
![예약등록](https://private-user-images.githubusercontent.com/239462926/528438471-671f57c3-de0e-439b-a8d6-d42b292aba42.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjYxMjIxOTMsIm5iZiI6MTc2NjEyMTg5MywicGF0aCI6Ii8yMzk0NjI5MjYvNTI4NDM4NDcxLTY3MWY1N2MzLWRlMGUtNDM5Yi1hOGQ2LWQ0MmIyOTJhYmE0Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIxOVQwNTI0NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02M2I1YmZkZTFkYmNlMGIwZTNkODUzNjBmMDQ3N2FmYmIzY2NjMTg5Y2JmNzQ3MmYyMWZhM2Y4YWJjNjcxMDYzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.g8t4Efg02Me_OoK7m_67mJA3nrEE_23-pjFcEobkzfM)

![예약관리1](https://private-user-images.githubusercontent.com/239462926/528438468-4dd38bc8-add4-4202-a8f1-22d5a94ecc99.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjYxMjIxOTMsIm5iZiI6MTc2NjEyMTg5MywicGF0aCI6Ii8yMzk0NjI5MjYvNTI4NDM4NDY4LTRkZDM4YmM4LWFkZDQtNDIwMi1hOGYxLTIyZDVhOTRlY2M5OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIxOVQwNTI0NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMzIzYTY5ZDAwZGFmZDQ2YmUyMTEzMTk4NmI3YWFhYzJmYzMyOTIzNDliNWViMDUzNWUzMzIzYjdjMWYzYjM0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.c4dBBBunuDmjCdGbHg6gqFbB_3i6zpavn9VQ4osATJc)

![예약관리2](https://private-user-images.githubusercontent.com/239462926/528438469-7333533c-8906-4198-866b-0776dc0ff0f5.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjYxMjIxNDIsIm5iZiI6MTc2NjEyMTg0MiwicGF0aCI6Ii8yMzk0NjI5MjYvNTI4NDM4NDY5LTczMzM1MzNjLTg5MDYtNDE5OC04NjZiLTA3NzZkYzBmZjBmNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIxOVQwNTI0MDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZmNlMzYxMDg2NWZmYTgxNDkwMDQyMjdkZDFjYTdlZTRlZGRiMzlkMWNlNjJhMzY0MmZmMTU0NjYwM2U4NGEwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.3D_lmCRNI3JgAqrbCV1r4BpgRrBuMlP2pVYW2hCbmko)

### 🛠 트러블 슈팅
![트러블슈팅2](https://github.com/user-attachments/assets/a2dd1f23-30b6-4985-aa66-ff7904757a29)
![트러블슈팅1](https://github.com/user-attachments/assets/2f7c0dbe-b76c-453d-aba3-9214befab7f6)

### ✨ 마무리
![마무리](https://github.com/user-attachments/assets/7c525087-4b71-46a7-849a-180cc600e035)
