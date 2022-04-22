## Sets


Authorization: Bearer [token]

**POST** `/api/complex`
``` json
{
    "name": "JavaScript",
    "time": 3600000,
    "path": "0000-4451-BGXC-5TR4"
}
```

Response:

```json
{
  "message": "Sets retrieved",
  "complex": {
    "id": 1,
    "name": "JavaScript",
    "path": "0000-4451-BGXC-5TR4",
    "userId": 1,
    "time": "1970-01-01T01:00:00.000Z"
  }
}
```

---


Authorization: Bearer [token]

**GET** `/api/complex`

Response:

```json
{
  "message": "Complex retrieved",
  "complexes": [
    {
      "id": 1,
      "name": "JavaScript",
      "path": "0000-4451-BGXC-5TR4",
      "userId": 1,
      "time": "1970-01-01T01:00:00.000Z"
    }
  ]
}
```

---

Authorization: Bearer [token]

**GET** `/api/complex/:id`

Response:

```json
{
  "message": "Set retrieved",
  "complex": {
    "id": 1,
    "name": "JavaScript",
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
      },
      {
        "id": 2,
        "text": "What is SQL?",
        "complexId": 1,
        "variants": [
          {
            "id": 5,
            "text": "SQL is a programming language",
            "isCorrect": true,
            "questionId": 2
          },
          {
            "id": 6,
            "text": "SQL is a database",
            "isCorrect": false,
            "questionId": 2
          },
          {
            "id": 7,
            "text": "SQL is markup language",
            "isCorrect": false,
            "questionId": 2
          },
          {
            "id": 8,
            "text": "All of the above",
            "isCorrect": false,
            "questionId": 2
          }
        ]
      }
    ]
  }
}
```

---

Authorization: Bearer [token]

**PUT** `/api/complex/:id`

```json
{
  "name": "Titans",
  "path": "0000-4451-BGXC-5TR4",
  "time": 3600000,
}
```

Response:

```json
{
  "message": "Complex updated",
  "complex": {
    "id": 1,
    "name": "Titans",
    "path": "0000-4451-BGXC-5TR4",
    "userId": 1,
    "time": "1970-01-01T01:00:00.000Z"
  }
}
```

Authorization: Bearer [token]

**DELETE** `/api/complex/:id`

Response
  
 ```json
  {
    "message": "Complex deleted",
    "complex": {
      "id": 1,
      "name": "Titans",
      "path": "0000-4451-BGXC-5TR4",
      "userId": 1,
      "time": "1970-01-01T01:00:00.000Z"
    }
  }
  ```
