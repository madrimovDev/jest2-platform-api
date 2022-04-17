## Questions

**POST** `/api/question/:setId`

```json
[
    {
        "text": "32 How to use the API?",
        "variants": [
            {
                "text": "How to use the API?",
                "isCorrect": true
            },
            {
                "text": "How to use the API?",
                "isCorrect": false
            },
            {
                "text": "How to use the API?",
                "isCorrect": false
            }
        ]
    },
    {
        "text": "12 How to use the API 2?",
        "variants": [
            {
                "text": "How to use the API?",
                "isCorrect": true
            },
            {
                "text": "How to use the API?",
                "isCorrect": false
            },
            {
                "text": "How to use the API?",
                "isCorrect": false
            }
        ]
    }
]
```

Response:

```json
{
  "message": "Questions added successfully",
  "questions": [
    {
      "id": 7,
      "text": "32 How to use the API?",
      "setId": 1
    },
    {
      "id": 8,
      "text": "12 How to use the API 2?",
      "setId": 1
    }
  ]
}
```


**GET** `/api/question/:setId`

Response:

```json
{
  "message": "Questions retrieved",
  "questions": [
    {
      "id": 1,
      "text": "How to use the API?",
      "setId": 1,
      "variants": [
        {
          "id": 1,
          "text": "How to use the API?",
          "isCorrect": true,
          "questionId": 1
        },
        {
          "id": 2,
          "text": "How to use the API?",
          "isCorrect": false,
          "questionId": 1
        },
        {
          "id": 3,
          "text": "How to use the API?",
          "isCorrect": false,
          "questionId": 1
        }
      ]
    }
  ]
}
```