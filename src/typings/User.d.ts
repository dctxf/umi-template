declare namespace User {
  export type Info = {
    createTime?: string;
    freeze: 1 | 2;
    mobile?: string | null;
    realName?: string;
    updateTime?: string;
    username?: string;
    avatar?: string;
    bid: number;
    delFlag: boolean;
    deptId: number;
    id: number;
    tenantKey: string;
    tenantName: string;
    tenantId: number;
    menuList: MenuNode[];
    roleDsType: number;
    isRoot: boolean;
  };
}
