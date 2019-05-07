## Upload Avatar Backend

Upload a file to a local folder and make it available through a public url. 

An interface to upload files to this backend service can be found [here](https://github.com/giuliana-bezerra/upload-avatar-frontend).

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