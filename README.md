## 插件

- `cross-env` 跨平台设置环境变量；
- `dotenv` 加载.env 配置文件；
- `plugin:prettier/recommended`:
  - Enable the prettier/prettier rule.
  - Disable the arrow-body-style and prefer-arrow-callback rules which are problematic with this \* \* plugin see the below for why.
  - Enable the eslint-config-prettier config which will turn off ESLint rules that conflict with Prettier.
- `eslint-plugin-prettier` 将prettier作为ESlint规则运行，可以提供错误提示
- `eslint-config-prettier` 关闭ESlint关于相关格式化配置，只用prettier来进行格式化，需放在extends的最后面
- `husky` git commit 的时候, 先去执行 pre-commit 里面的命令,4.x以上版本多一个启用过程： `"prepare": "husky install"` 在husky安装完之后，自动关联启用,其他配置变化请参考 https://typicode.github.io/husky/migrate-from-v4.html
- `lint-staged` 只对 git add 缓存区的代码进行 eslint 代码规范校验
- `Commitizen` 是一个帮助撰写规范 commit message 的工具，它有一个命令行工具 cz-cli
- `standard-version`来实现自动生成CHANGELOG（记录所有的commit信息并归类版本，可以快速跳转到该条commit记录）`standard-version -- --release-as major` 手动设置版本号
