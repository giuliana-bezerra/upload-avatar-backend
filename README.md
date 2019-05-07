## Upload Avatar Backend

Upload a file to a local folder and make it available through a public url.

## Getting Started
```
$ npm start
```

## API

[POST] Avatar
```
> POST /api/avatar/upload
```

Input:
```
Form Data using key "avatar".
```

Output:
```
{id: "String", url: "String"}
```

[GET] Avatar
```
> GET /uploads/{avatarId}
```

Output:
```
The binary image.
```