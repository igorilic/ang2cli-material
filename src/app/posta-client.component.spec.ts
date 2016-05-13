import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PostaClientAppComponent } from '../app/posta-client.component';

beforeEachProviders(() => [PostaClientAppComponent]);

describe('App: PostaClient', () => {
  it('should create the app',
      inject([PostaClientAppComponent], (app: PostaClientAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'posta-client works!\'',
      inject([PostaClientAppComponent], (app: PostaClientAppComponent) => {
    expect(app.title).toEqual('posta-client works!');
  }));
});
