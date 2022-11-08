interface User {
    id: number,
    username: string,
    password: string,
}

export function checkUsername(username: string, password: string): number {

    let db = require('/database/users.json');
    let check = 0;

    db.forEach((element: User) => {
        if (username === element.username && password === element.password) {
            check = element.id
        }
    });

    return check
}

export function checkId(id: number) {
    let db = require('/database/users.json');
    let result: any = false;
    db.forEach((element: User) => {
        if (id === element.id) {
            let {id, username} = element;
            result = {id: id, username: username};
        }
    });

    return result
}
