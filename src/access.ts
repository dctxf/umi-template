// src/access.ts
const routes: string[] = [];

export default function access(initialState: { currentUser: User.Info | undefined }) {
  const { currentUser } = initialState || {};
  tree2list(currentUser?.menuList);
  return {
    /** 页面访问权限 */
    normalRouteFilter: (route: { path: any }) => {
      return routes.includes(route.path);
    },
    /** 无权限判断 */
    noAccess: true,
  };
}

function tree2list(menus?: MenuNode[]) {
  if (menus) {
    menus.forEach((item) => {
      routes.push(item.path);
      if (item.children) {
        tree2list(item.children);
      }
    });
  }
}
