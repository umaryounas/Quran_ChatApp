import {UserDto} from '../dtos/auth-dto';
import {BaseResponse} from './base-response';

export class AuthenticateUserResponse extends BaseResponse<UserDto> {
  constructor(response: AuthenticateUserResponse) {
    super(response.status, response.msg, response.data);
    // Object.assign(this, response);
  }
}
