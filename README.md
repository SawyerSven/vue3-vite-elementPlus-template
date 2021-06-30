## 项目结构

```
├── publish/
└── src/
    ├── assets/                    // 静态资源目录
    ├── common/                    // 通用类库目录
    ├── components/                // 公共组件目录
    ├── router/                    // 路由配置目录
    ├── store/                     // 状态管理目录
    ├── style/                     // 通用 CSS 目录
    ├── utils/                     // 工具函数目录
    ├── views/                     // 页面组件目录
    ├── App.vue
    ├── main.ts
    ├── shims-vue.d.ts
├── tests/                         // 单元测试目录
├── index.html
├── tsconfig.json                  // TypeScript 配置文件
├── vite.config.ts                 // Vite 配置文件
└── package.json

```

## 安装插件

> 插件仅VS Code开发需要安装，如果使用JetBrains系列编辑器则无需额外安装插件
### editorconfig

- vscode 使用 editorConfig 需要在插件市场下载插件**EditorConfig for VS Code**
- JetBrains系列编辑器无需下载插件,可直接使用 EditorConfig 配置

![https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51ca554c3b01470397de87ef0a92481d~tplv-k3u1fbpfcp-zoom-1.image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51ca554c3b01470397de87ef0a92481d~tplv-k3u1fbpfcp-zoom-1.image)


### prettier

- vscode 使用 Prettier 配置需要在插件市场下载**Prettier - Code formatter**
- JetBrains系列编辑器无需下载插件,可直接使用 Prettier 配置

![prettier](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba1f48fbd3bf441b90d58012270c867b~tplv-k3u1fbpfcp-zoom-1.image)

### eslint

- vscode 使用 ESLint 配置需要在插件市场下载**ESLint**
- JetBrains系列编辑器无需下载插件,可直接使用 ESLint 配置

![ESLint](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61a7c36554da4b8ab889f8bfde0538cc~tplv-k3u1fbpfcp-zoom-1.image)


## 发开中

### git提交

git commit message 统一使用Angluar规范.

使用了commitizen和commitlint规范commit message.

提交commit message代码统一使用：

```
git cz

```
然后根据改动内容选择对应的type,scope和subject


> commitlint验证commit message的格式，缺少subject或type会在commit-msg的hook处进行报错


