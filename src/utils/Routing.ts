import { Routing as RoutingBase } from 'git-cms-service';
import { createHashHistory } from 'history';

import { config } from '../configs';

export  const history = createHashHistory();

class Routing {
  public getCurrentPath(): string {
    return window.location.pathname;
  }

  public getTagPath(value: string): string {
    return `${config.router.tags}/${RoutingBase.getTagSlug(value)}`;
  }

  public getPostPath(title: string, id: number): string {
    return `${config.router.posts}/${RoutingBase.getPostSlug(title, id)}`;
  }
}

const singleton = new Routing();
export { singleton as Routing };
