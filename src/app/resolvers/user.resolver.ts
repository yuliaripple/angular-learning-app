import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GetUserService } from '../services/get-user.service';

export const userResolver: ResolveFn<Object> = (route, state) => {
  const userId = route.paramMap.get('userId');
  return inject(GetUserService).getUserById(userId)
};
