import {User} from '../models/domain/user';
import {UserDto} from '../models/dtos/auth-dto';
import {DomainMapper} from './domain-mapper';

export class UserDtoMapper extends DomainMapper<any, User> {
  mapToDomainModel = (model: any): User => ({
    firstName: this.domainSafeValue(model.firstName),
    age: this.domainSafeValue(model.age),
    gender: this.domainSafeValue(model.gender),
    quranConnection: this.domainSafeValue(model.quranConnection),
    emotionalConnection: this.domainSafeValue(model.emotionalConnection),
    guidanceFrequency: this.domainSafeValue(model.guidanceFrequency),
    consistencyLevel: this.domainSafeValue(model.consistencyLevel),
    focusStruggle: this.domainSafeValue(model.focusStruggle),
  });

  mapToDomainList = (modelList?: Array<UserDto>): Array<User> =>
    modelList?.map(item => this.mapToDomainModel(item)) ?? new Array();
}
