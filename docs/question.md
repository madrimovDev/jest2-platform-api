## Questions

**POST** `/api/complex/:complexId/question`
```json
[
    {
        "text": "What is the difference between a variable and a function?",
        "variants": [
            { 
                "text": "Function can be called as a variable",
                "isCorrect": true
            },
            {
                "text": "Variable can be called as a function",
                "isCorrect": false
            },
            {
                "text": "Function and Variable are the same",
                "isCorrect": false
            },
            {
                "text": "None of the above",
                "isCorrect": false
            }

        ]
    }
]
```

**GET** `/api/complex/:complexId/question`

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