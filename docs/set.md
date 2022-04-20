## Sets


Authorization: Bearer [token]

**POST** `/api/set`
``` json
{
    "name": "Celestial",
    "time": 3600000,
    "path": "0000-4451-BGXC-5TR3",
}
```

Response:

```json
{
{
  "message": "Sets retrieved",
  "set": {
    "id": 1,
    "name": "Celestial",
    "userId": 1
  }
}
```

---


Authorization: Bearer [token]

**GET** `/api/set`

Response:

```json
{
  "message": "Sets retrieved",
  "sets": [
    {
      "id": 1,
      "name": "Celestial",
      "userId": 1
    }
  ]
}
```

---

Authorization: Bearer [token]

**GET** `/api/set/:id`

Response:

```json
{
  "message": "Set retrieved",
  "set": {
    "id": 1,
    "name": "Celestial",
    "userId": 1
  }
}
```

---

Authorization: Bearer [token]

**PUT** `/api/set/:id`

```json
{
  "name": "Titans"
}
```

Response:

```json
{
  "message": "Set updated",
  "set": {
    "id": 1,
    "name": "Titans",
    "userId": 1
  }
}
```