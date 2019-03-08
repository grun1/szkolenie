import { UserDisplayNamePipe } from './user-display-name.pipe';
import { User } from '../interfaces/user';

describe('UserDisplayNamePipe', () => {

  let pipe: UserDisplayNamePipe = null

  beforeEach(()=>{
    pipe = new UserDisplayNamePipe();
  });

  it('create an instance', () => {
    const pipe = new UserDisplayNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should display name and surname', () => {
   const user = <User>{
     person:{
       name: 'jan',
       surname: 'nowak',
     }
   }
   expect(pipe.transform(user)).toEqual('jan nowak');

   const user1 = <User>{
    person:{
      name: '',
      surname: '',
    }
  }
  expect(pipe.transform(user1)).toEqual(' ');

  const user2 = <User>{
    person:{
      name: ({}).toString(),
      surname: null,
    }
  }
  expect(pipe.transform(user2)).toEqual('[object Object] null');
  });

});
