## Setup Instructions:

- Clone the repository

- Make sure you have `composer` installed

- Install packages using composer
```
cd /path/to/project
composer install
```

- Check any platform dependencies that needs to be installed (if any and re-install with composer if needed)

- You can start testing the API endpoints by using a tool such as `postman`

# Available API Endpoints
| Name          | Method| URL                   | Protected |Params     |
| ---           | ---   | ---                   | ---       | ---       |
| Say Hello     | `GET` | `/hello/{name}`       | ✘         |  name `String` |
| Get Messages  | `GET` | `/message/{number}`   | ✘         | number `Integer` |  
| Post Message  | `POST`| `/message`            | ✘         | message `String` |