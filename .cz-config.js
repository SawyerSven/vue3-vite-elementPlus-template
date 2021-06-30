module.exports = {
  types: [
    { value: 'feat', name: 'feat: 新增功能' },
    { value: 'fix', name: 'fix: 修复bug' },
    { value: 'docs', name: 'docs: 文档变更' },
    { value: 'style', name: 'style: 代码格式(不影响功能的代码格式变更如,空格分号等修正)' },
    { value: 'refactor', name: 'refactor: 代码重构(不包括bug修复、功能新增)' },
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'test', name: 'test: 添加、修改测试用例' },
    { value: 'build', name: 'build: 构建流程、外部依赖变更(如升级npm包、修改webpack配置等)' },
    { value: 'ci', name: 'ci: 修改CI配置、脚本' },
    { value: 'chore', name: 'chore: 对构建过程或辅助工具和库的更改(不影响源文件、测试用例)' },
    { value: 'revert', name: 'revert: 回滚commit' }
  ],
  // scope,定义之后可以通过上下选择
  scopes: [
    ['component', '组件相关'],
    ['hooks', 'hook相关'],
    ['utils', 'utils相关'],
    ['element-ui', '对element-ui的调整'],
    ['styles', '对样式表的修改'],
    ['deps', '依赖变更'],
    ['other', '其他修改'],
    ['empty', '不填scope'],
    ['custom', '以上都不是？自定义scope']
  ].map(([value, description]) => {
    return { value, name: `${value.padEnd(30)} (${description})` }
  }),

  // * 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
  allowCustomScopes: true,

  // * 针对不同的type自定义不同的scope
  /* scopeOverrides: {
    fix: [{ name: '123' }]
  } */

  messages: {
    type: '确保本次提交遵循Angluar 规范!\n 选择你要提交的类型:',
    scope: '\n 选择一个scope(可选):',
    customScope: '请输入自定义的scope:',
    subject: '填写简短精炼的变更描述(50个字符以内):\n',
    body: '填写更加详细的变更描述(可选)。使用"|"换行:\n',
    breaking: '列举非兼容性的重大变更(可选): \n',
    footer: '列举出所有变更的Issues closed(可选)。例如：#31,#34: \n',
    confirmCommit: '确认提交?'
  },

  // 询问breaking message的type
  // allowBreakingChanges: ['feat', 'fix'],

  // 跳过要询问的步骤,通常我们的项目不会填写body和footer
  skipQuestions: ['body', 'footer'],

  // subject长度限定
  subjectLimit: 50,
  breaklineChar: '|'
  // askforBreakingChangeFirst:true
}
