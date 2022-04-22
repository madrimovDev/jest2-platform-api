## Sets


Authorization: Bearer [token]

**GET** `/api/session`

Response:

```json
{
  "message": "Sessions retrieved",
  "sessions": [
    {
      "id": 1,
      "user": "John Doe",
      "complexPath": "0000-4451-BGXC-5TR4",
      "startTime": "2022-04-22T18:08:22.625Z",
      "endTime": null,
      "completed": false
    }
  ]
}
```

---

Authorization: Bearer [token]

**POST** `/api/session/start`
``` json
{
  "user": "John Doe",
  "complexPath": "0000-4451-BGXC-5TR4"
}
```

Response:

```json
{
  "message": "Session created",
  "session": {
    "id": 1,
    "user": "John Doe",
    "complexPath": "0000-4451-BGXC-5TR4",
    "startTime": "2022-04-22T18:08:22.625Z",
    "endTime": null,
    "completed": false,
    "complex": {
      "id": 1,
      "name": "Titans",
      "path": "0000-4451-BGXC-5TR4",
      "userId": 1,
      "time": "1970-01-01T01:00:00.000Z",
      "questions": [
        {
          "id": 1,
          "text": "What is the difference between a variable and a function?",
          "complexId": 1,
          "variants": [
            {
              "id": 1,
              "text": "Function can be called as a variable",
              "isCorrect": true,
              "questionId": 1
            },
            {
              "id": 2,
              "text": "Variable can be called as a function",
              "isCorrect": false,
              "questionId": 1
            },
            {
              "id": 3,
              "text": "Function and Variable are the same",
              "isCorrect": false,
              "questionId": 1
            },
            {
              "id": 4,
              "text": "None of the above",
              "isCorrect": false,
              "questionId": 1
            }
          ]
        }
      ]
    },
    "expired": false,
    "remainingTime": 3599971
  }
}
```

---

Authorization: Bearer [token]

**GET** `/api/session/:id`

Response:

```json
{
  "message": "Session retrieved",
  "session": {
    "id": 1,
    "user": "John Doe",
    "complexPath": "0000-4451-BGXC-5TR4",
    "startTime": "2022-04-22T18:08:22.625Z",
    "endTime": null,
    "completed": false,
    "complex": {
      "id": 1,
      "name": "Titans",
      "path": "0000-4451-BGXC-5TR4",
      "userId": 1,
      "time": "1970-01-01T01:00:00.000Z",
      "questions": [
        {
          "id": 1,
          "text": "What is the difference between a variable and a function?",
          "complexId": 1,
          "variants": [
            {
              "id": 1,
              "text": "Function can be called as a variable",
              "isCorrect": true,
              "questionId": 1
            },
            {
              "id": 2,
              "text": "Variable can be called as a function",
              "isCorrect": false,
              "questionId": 1
            },
            {
              "id": 3,
              "text": "Function and Variable are the same",
              "isCorrect": false,
              "questionId": 1
            },
            {
              "id": 4,
              "text": "None of the above",
              "isCorrect": false,
              "questionId": 1
            }
          ]
        }
      ]
    },
    "expired": false,
    "remainingTime": 3359324
  }
}
```

---

Authorization: Bearer [token]

**PUT** `/api/session/:id`

complete session [not implemented]
