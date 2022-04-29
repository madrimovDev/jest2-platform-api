## Auth

**POST** `/api/login`

```json
{ 
    "username": "neowise",
    "password": "123456"
}
```
Response:

``` json
{
  "message": "Login successful",
  "username": "neowise",
  "name": "Neowise",
  "surname": "Verve",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5lb3dpc2UiLCJ1c2VySWQiOjEsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjUwMjI1NDQ0LCJleHAiOjE2NTAyMzI2NDR9.EV2x-XIyL9_JhWy7R5NlYl7Yf4zq2OUw_ZSjry3gdZM"
}
```
---
**POST** `/api/register`

```json
{
    "username": "neowise",
    "password": "123456",
    "name": "Neowise",
    "surname": "Imomaddinov"
}
```

Response

```json
{
  "message": "User created",
  "username": "neowise",
  "name": "Neowise",
  "surname": "Verve",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5lb3dpc2UiLCJ1c2VySWQiOjEsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjUwMjI1NDE5LCJleHAiOjE2NTAyMzI2MTl9.05BWFRMXVUaMOnk_JZN1SGhMSk55upOavr8x7ObEdh4"
}
```
