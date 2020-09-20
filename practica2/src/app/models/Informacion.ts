import dbUsers from '../../assets/JSON/Users.json'
import {User} from './Users'

export abstract class bd{
    public static bdUsers:User[] = dbUsers;
}