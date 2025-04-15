const translation = {
  api: {
    success: '成功',
    actionSuccess: '操作成功',
    saved: '已保存',
    create: '已创建',
    remove: '已移除',
  },
  operation: {
    create: '创建',
    confirm: '确认',
    cancel: '取消',
    clear: '清空',
    save: '保存',
    saveAndEnable: '保存并启用',
    edit: '编辑',
    add: '添加',
    added: '已添加',
    refresh: '重新开始',
    reset: '重置',
    search: '搜索',
    change: '更改',
    remove: '移除',
    send: '发送',
    copy: '复制',
    copied: ' 已复制',
    lineBreak: '换行',
    sure: '我确定',
    download: '下载',
    downloadSuccess: '下载完毕',
    downloadFailed: '下载失败，请稍后重试。',
    viewDetails: '查看详情',
    delete: '删除',
    deleteApp: '删除应用',
    settings: '设置',
    setup: '设置',
    getForFree: '免费获取',
    reload: '刷新',
    ok: '好的',
    log: '日志',
    learnMore: '了解更多',
    params: '参数设置',
    duplicate: '复制',
    rename: '重命名',
    audioSourceUnavailable: '音源不可用',
    copyImage: '复制图片',
    imageCopied: '图片已复制',
    zoomOut: '缩小',
    zoomIn: '放大',
    openInNewTab: '在新标签页打开',
    in: '在',
    saveAndRegenerate: '保存并重新生成子分段',
    close: '关闭',
    view: '查看',
    viewMore: '查看更多',
    regenerate: '重新生成',
    submit: '提交',
    skip: '跳过',
  },
  errorMsg: {
    fieldRequired: '{{field}} 为必填项',
    urlError: 'url 应该以 http:// 或 https:// 开头',
  },
  placeholder: {
    input: '请输入',
    select: '请选择',
  },
  voice: {
    language: {
      zhHans: '中文',
      zhHant: '繁体中文',
      enUS: '英语',
      deDE: '德语',
      frFR: '法语',
      esES: '西班牙语',
      itIT: '意大利语',
      thTH: '泰语',
      idID: '印尼语',
      jaJP: '日语',
      koKR: '韩语',
      ptBR: '葡萄牙语',
      ruRU: '俄语',
      ukUA: '乌克兰语',
      viVN: '越南语',
      plPL: '波兰语',
      roRO: '罗马尼亚语',
      hiIN: '印地语',
      trTR: '土耳其语',
      faIR: '波斯语',
    },
  },
  unit: {
    char: '个字符',
  },
  actionMsg: {
    noModification: '暂无修改',
    modifiedSuccessfully: '修改成功',
    modifiedUnsuccessfully: '修改失败',
    copySuccessfully: '复制成功',
    generatedSuccessfully: '已重新生成',
    generatedUnsuccessfully: '生成失败',
    paySucceeded: '已支付成功',
    payCancelled: '已取消支付',
  },
  model: {
    params: {
      temperature: '随机性 temperature',
      temperatureTip:
        '控制回复的随机性。\n值越大，回复越随机。\n值越小，回复越确定或一致。',
      top_p: '核采样 top_p',
      top_pTip:
        '控制生成多样性。\n值越大，输出会包括更多的单词选项。\n值越小，模型会更集中在高概率的单词上，输出更确定但可能缺乏多样性。\n核采样和随机性不建议同时修改。',
      presence_penalty: '话题新鲜度 presence_penalty',
      presence_penaltyTip:
        '控制生成时对上文已存在的话题的偏好程度。\n值越大，越可能使用到新的话题。',
      frequency_penalty: '频率惩罚度 frequency_penalty',
      frequency_penaltyTip:
        '影响常见与罕见词汇使用。\n值较大时，倾向于生成不常见的词汇和表达方式。\n值越小，更倾向于使用常见和普遍接受的词汇或短语。',
      max_tokens: '单次回复限制 max_tokens',
      max_tokensTip:
        '用于限制回复的最大长度，以 token 为单位。\n较大的值可能会限制给提示词、聊天记录和知识库留出的空间。\n建议将其设置在三分之二以下。\ngpt-4-1106-preview、gpt-4-vision-preview 最大长度 (输入128k，输出4k)',
      maxTokenSettingTip: '您设置的最大 tokens 数较大，可能会导致 prompt、用户问题、知识库内容没有 token 空间进行处理，建议设置到 2/3 以下。',
      setToCurrentModelMaxTokenTip: '最大令牌数更新为当前模型最大的令牌数 {{maxToken}} 的 80%。',
      stop_sequences: '停止序列 stop_sequences',
      stop_sequencesTip: '最多四个序列，API 将停止生成更多的 token。返回的文本将不包含停止序列。',
      stop_sequencesPlaceholder: '输入序列并按 Tab 键',
    },
    tone: {
      Creative: '创意',
      Balanced: '平衡',
      Precise: '精确',
      Custom: '自定义',
    },
    addMoreModel: '添加更多模型',
    settingsLink: '模型设置',
    capabilities: '多模态能力',
  },
  menus: {
    status: 'beta',
    explore: '探索',
    apps: '工作室',
    plugins: '插件',
    exploreMarketplace: '探索 Marketplace',
    pluginsTips: '集成第三方插件或创建与 ChatGPT 兼容的 AI 插件。',
    datasets: '知识库',
    datasetsTips: '即将到来: 上传自己的长文本数据，或通过 Webhook 集成自己的数据源',
    newApp: '创建应用',
    newDataset: '创建知识库',
    tools: '工具',
  },
  userProfile: {
    settings: '设置',
    emailSupport: '邮件支持',
    workspace: '工作空间',
    createWorkspace: '创建工作空间',
    helpCenter: '帮助文档',
    support: '支持',
    compliance: '合规',
    communityFeedback: '用户反馈',
    roadmap: '路线图',
    github: 'GitHub',
    community: '社区',
    about: '关于',
    logout: '登出',
  },
  compliance: {
    soc2Type1: 'SOC 2 Type I Report',
    soc2Type2: 'SOC 2 Type II Report',
    iso27001: 'ISO 27001:2022 Certification',
    gdpr: 'GDPR DPA',
    sandboxUpgradeTooltip: '仅适用于 Professional 或 Team 版计划。',
    professionalUpgradeTooltip: '仅适用于 Team 版计划或以上。',
  },
  settings: {
    accountGroup: '通用',
    workplaceGroup: '工作空间',
    generalGroup: '通用',
    account: '我的账户',
    members: '成员',
    billing: '账单',
    integrations: '集成',
    language: '语言',
    provider: '模型供应商',
    dataSource: '数据来源',
    plugin: '插件',
    apiBasedExtension: 'API 扩展',
  },
  account: {
    account: '账户',
    myAccount: '我的账户',
    studio: 'Dify 工作室',
    avatar: '头像',
    name: '用户名',
    email: '邮箱',
    password: '密码',
    passwordTip: '如果您不想使用验证码登录，可以设置永久密码',
    setPassword: '设置密码',
    resetPassword: '重置密码',
    currentPassword: '原密码',
    newPassword: '新密码',
    notEqual: '两个密码不相同',
    confirmPassword: '确认密码',
    langGeniusAccount: 'Dify 账号',
    langGeniusAccountTip: '您的 Dify 账号和相关的用户数据。',
    editName: '编辑名字',
    showAppLength: '显示 {{length}} 个应用',
    delete: '删除账户',
    deleteTip: '请注意，一旦确认，作为任何空间的所有者，您的空间将被安排进入永久删除队列，您的所有用户数据也将被排入永久删除队列。',
    deletePrivacyLinkTip: '有关我们如何处理您的数据的更多信息，请参阅我们的',
    deletePrivacyLink: '隐私政策',
    deleteSuccessTip: '删除账户需要一些时间。完成后，我们会通过邮件通知您。',
    deleteLabel: '请输入您的邮箱以确认',
    deletePlaceholder: '输入您的邮箱...',
    sendVerificationButton: '发送验证码',
    verificationLabel: '验证码',
    verificationPlaceholder: '输入 6 位数字验证码',
    permanentlyDeleteButton: '永久删除',
    feedbackTitle: '反馈',
    feedbackLabel: '请告诉我们您为什么删除账户？',
    feedbackPlaceholder: '选填',
    editWorkspaceInfo: '编辑工作空间信息',
    workspaceName: '工作空间名称',
    workspaceIcon: '工作空间图标',
  },
  members: {
    team: '团队',
    invite: '添加',
    name: '姓名',
    lastActive: '上次活动时间',
    role: '角色',
    pending: '待定...',
    owner: '所有者',
    admin: '管理员',
    adminTip: '能够建立应用程序和管理团队设置',
    normal: '成员',
    normalTip: '只能使用应用程序，不能建立应用程序',
    editor: '编辑',
    editorTip: '能够建立并编辑应用程序，不能管理团队设置',
    datasetOperator: '知识库管理员',
    datasetOperatorTip: '只能管理知识库',
    inviteTeamMember: '添加团队成员',
    inviteTeamMemberTip: '对方在登录后可以访问你的团队数据。',
    emailNotSetup: '由于邮件服务器未设置，无法发送邀请邮件。请将邀请后生成的邀请链接通知用户。',
    email: '邮箱',
    emailInvalid: '邮箱格式无效',
    emailPlaceholder: '输入邮箱',
    sendInvite: '发送邀请',
    invitedAsRole: '邀请为{{role}}用户',
    invitationSent: '邀请已发送',
    invitationSentTip: '邀请已发送，对方登录 Dify 后即可访问你的团队数据。',
    invitationLink: '邀请链接',
    failedInvitationEmails: '邀请以下邮箱失败',
    ok: '好的',
    removeFromTeam: '移出团队',
    removeFromTeamTip: '将取消团队访问',
    setAdmin: '设为管理员',
    setMember: '设为普通成员',
    setEditor: '设为编辑',
    disInvite: '取消邀请',
    deleteMember: '删除成员',
    you: '（你）',
    builderTip: '可以构建和编辑自己的应用程序',
    setBuilder: 'Set as builder （设置为构建器）',
    builder: '构建器',
  },
  integrations: {
    connected: '登录方式',
    google: 'Google',
    googleAccount: 'Google 账号登录',
    github: 'GitHub',
    githubAccount: 'GitHub 账号登录',
    connect: '绑定',
  },
  language: {
    displayLanguage: '界面语言',
    timezone: '时区',
  },
  provider: {
    apiKey: 'API 密钥',
    enterYourKey: '输入你的 API 密钥',
    invalidKey: '无效的 OpenAI API 密钥',
    validatedError: '校验失败：',
    validating: '验证密钥中...',
    saveFailed: 'API 密钥保存失败',
    apiKeyExceedBill: '此 API KEY 已没有可用配额，请阅读',
    addKey: '添加 密钥',
    comingSoon: '即将推出',
    editKey: '编辑',
    invalidApiKey: '无效的 API 密钥',
    azure: {
      apiBase: 'API Base',
      apiBasePlaceholder: '输入您的 Azure OpenAI API Base 地址',
      apiKey: 'API Key',
      apiKeyPlaceholder: '输入你的 API 密钥',
      helpTip: '了解 Azure OpenAI Service',
    },
    openaiHosted: {
      openaiHosted: '托管 OpenAI',
      onTrial: '体验',
      exhausted: '超出限额',
      desc: '托管 OpenAI 由 Dify 提供的托管 OpenAI 服务，你可以使用 GPT-3.5 等模型，在体验额度消耗完毕前你需要设置其它模型供应商。',
      callTimes: '调用次数',
      usedUp: '试用额度已用完，请在下方添加自己的模型供应商',
      useYourModel: '当前正在使用你自己的模型供应商。',
      close: '关闭',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: '体验',
      exhausted: '超出限额',
      desc: '功能强大的模型，擅长执行从复杂对话和创意内容生成到详细指导的各种任务。',
      callTimes: '调用次数',
      usedUp: '试用额度已用完，请在下方添加自己的模型供应商',
      useYourModel: '当前正在使用你自己的模型供应商。',
      close: '关闭',
      trialQuotaTip: '您的 Anthropic 体验额度将于 2025/03/17 过期，过期后将无法使用，请尽快体验。',
    },
    anthropic: {
      using: '嵌入能力正在使用',
      enableTip: '要启用 Anthropic 模型，您需要先绑定 OpenAI 或 Azure OpenAI 服务。',
      notEnabled: '未启用',
      keyFrom: '从 Anthropic 获取您的 API 密钥',
    },
    encrypted: {
      front: '密钥将使用 ',
      back: ' 技术进行加密和存储。',
    },
  },
  modelProvider: {
    notConfigured: '系统模型尚未完全配置',
    systemModelSettings: '系统模型设置',
    systemModelSettingsLink: '为什么需要设置系统模型？',
    selectModel: '选择您的模型',
    setupModelFirst: '请先设置您的模型',
    systemReasoningModel: {
      key: '系统推理模型',
      tip: '设置创建应用使用的默认推理模型，以及对话名称生成、下一步问题建议等功能也会使用该默认推理模型。',
    },
    embeddingModel: {
      key: 'Embedding 模型',
      tip: '设置知识库文档嵌入处理的默认模型，检索和导入知识库均使用该Embedding模型进行向量化处理，切换后将导致已导入的知识库与问题之间的向量维度不一致，从而导致检索失败。为避免检索失败，请勿随意切换该模型。',
      required: '请选择 Embedding 模型',
    },
    speechToTextModel: {
      key: '语音转文本模型',
      tip: '设置对话中语音转文字输入的默认使用模型。',
    },
    ttsModel: {
      key: '文本转语音模型',
      tip: '设置对话中文字转语音输出的默认使用模型。',
    },
    rerankModel: {
      key: 'Rerank 模型',
      tip: '重排序模型将根据候选文档列表与用户问题语义匹配度进行重新排序，从而改进语义排序的结果',
    },
    quota: '额度',
    searchModel: '搜索模型',
    noModelFound: '找不到模型 {{model}}',
    models: '模型列表',
    showMoreModelProvider: '显示更多模型提供商',
    selector: {
      tip: '该模型已被删除。请添模型或选择其他模型。',
      emptyTip: '无可用模型',
      emptySetting: '请前往设置进行配置',
      rerankTip: '请设置 Rerank 模型',
    },
    card: {
      quota: '额度',
      onTrial: '试用中',
      paid: '已购买',
      quotaExhausted: '配额已用完',
      callTimes: '调用次数',
      tokens: 'Tokens',
      buyQuota: '购买额度',
      priorityUse: '优先使用',
      removeKey: '删除 API 密钥',
      tip: '已付费额度将优先考虑。 试用额度将在付费额度用完后使用。',
    },
    item: {
      deleteDesc: '{{modelName}} 被用作系统推理模型。删除后部分功能将无法使用。请确认。',
      freeQuota: '免费额度',
    },
    addApiKey: '添加您的 API 密钥',
    invalidApiKey: 'Invalid API key',
    encrypted: {
      front: '您的密钥将使用',
      back: '技术进行加密和存储。',
    },
    freeQuota: {
      howToEarn: '如何获取',
    },
    addMoreModelProvider: '添加更多模型提供商',
    addModel: '添加模型',
    modelsNum: '{{num}} 个模型',
    showModels: '显示模型',
    showModelsNum: '显示 {{num}} 个模型',
    collapse: '收起',
    config: '配置',
    modelAndParameters: '模型及参数',
    model: '模型',
    featureSupported: '支持 {{feature}} 功能',
    callTimes: '调用次数',
    credits: '消息额度',
    buyQuota: '购买额度',
    getFreeTokens: '获得免费 Tokens',
    priorityUsing: '优先使用',
    deprecated: '已弃用',
    confirmDelete: '确认删除?',
    quotaTip: '剩余免费额度',
    loadPresets: '加载预设',
    parameters: '参数',
    loadBalancing: '负载均衡',
    loadBalancingDescription: '为了减轻单组凭据的压力，您可以为模型调用配置多组凭据。',
    loadBalancingHeadline: '负载均衡',
    configLoadBalancing: '设置负载均衡',
    modelHasBeenDeprecated: '该模型已废弃',
    providerManaged: '由模型供应商管理',
    providerManagedDescription: '使用模型供应商提供的单组凭据',
    defaultConfig: '默认配置',
    apiKeyStatusNormal: 'API Key 正常',
    apiKeyRateLimit: '已达频率上限，{{seconds}}秒后恢复',
    addConfig: '增加配置',
    editConfig: '修改配置',
    loadBalancingLeastKeyWarning: '至少启用 2 个 Key 以使用负载均衡',
    loadBalancingInfo: '默认情况下，负载均衡使用 Round-robin 策略。如果触发速率限制，将应用 1 分钟的冷却时间',
    upgradeForLoadBalancing: '升级以解锁负载均衡功能',
    apiKey: 'API 密钥',
    toBeConfigured: '待配置',
    configureTip: '请配置 API 密钥，添加模型。',
    installProvider: '安装模型供应商',
    discoverMore: '发现更多就在',
    emptyProviderTitle: '尚未安装模型供应商',
    emptyProviderTip: '请安装模型供应商。',
  },
  dataSource: {
    add: '添加数据源',
    connect: '绑定',
    configure: '配置',
    notion: {
      title: 'Notion',
      description: '使用 Notion 作为知识库的数据源。',
      connectedWorkspace: '已绑定工作空间',
      addWorkspace: '添加工作空间',
      connected: '已绑定',
      disconnected: '未绑定',
      changeAuthorizedPages: '更改授权页面',
      pagesAuthorized: '已授权页面',
      sync: '同步',
      remove: '删除',
      selector: {
        pageSelected: '已选页面',
        searchPages: '搜索页面...',
        noSearchResult: '无搜索结果',
        addPages: '添加页面',
        preview: '预览',
      },
    },
    website: {
      title: '网站',
      description: '使用网络爬虫从网站导入内容。',
      with: '使用',
      configuredCrawlers: '已配置的爬虫',
      active: '可用',
      inactive: '不可用',
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'API Key',
      apiKeyPlaceholder: '输入你的 API 密钥',
      keyFrom: '从 SerpAPI 帐户页面获取您的 SerpAPI 密钥',
    },
  },
  apiBasedExtension: {
    title: 'API 扩展提供了一个集中式的 API 管理，在此统一添加 API 配置后，方便在 Dify 上的各类应用中直接使用。',
    link: '了解如何开发您自己的 API 扩展。',
    linkUrl: 'https://docs.dify.ai/v/zh-hans/guides/extension/api-based-extension',
    add: '新增 API 扩展',
    selector: {
      title: 'API 扩展',
      placeholder: '请选择 API 扩展',
      manage: '管理 API 扩展',
    },
    modal: {
      title: '新增 API 扩展',
      editTitle: '编辑 API 扩展',
      name: {
        title: '名称',
        placeholder: '请输入名称',
      },
      apiEndpoint: {
        title: 'API Endpoint',
        placeholder: '请输入 API endpoint',
      },
      apiKey: {
        title: 'API-key',
        placeholder: '请输入 API-key',
        lengthError: 'API-key 不能少于 5 位',
      },
    },
    type: '类型',
  },
  about: {
    changeLog: '更新日志',
    updateNow: '现在更新',
    nowAvailable: 'Dify {{version}} 现已可用。',
    latestAvailable: 'Dify {{version}} 已是最新版本。',
  },
  appMenus: {
    overview: '监测',
    promptEng: '编排',
    apiAccess: '访问 API',
    logAndAnn: '日志与标注',
    logs: '日志',
  },
  environment: {
    testing: '测试环境',
    development: '开发环境',
  },
  appModes: {
    completionApp: '文本生成型应用',
    chatApp: '对话型应用',
  },
  datasetMenus: {
    documents: '文档',
    hitTesting: '召回测试',
    settings: '设置',
    emptyTip: '此知识尚未集成到任何应用程序中。请参阅文档以获取指导。',
    viewDoc: '查看文档',
    relatedApp: '个关联应用',
    noRelatedApp: '无关联应用',
  },
  voiceInput: {
    speaking: '现在讲...',
    converting: '正在转换为文本...',
    notAllow: '麦克风未授权',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Whisper-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: '重命名会话',
    conversationName: '会话名称',
    conversationNamePlaceholder: '请输入会话名称',
    conversationNameCanNotEmpty: '会话名称必填',
    citation: {
      title: '引用',
      linkToDataset: '跳转至知识库',
      characters: '字符：',
      hitCount: '召回次数：',
      vectorHash: '向量哈希：',
      hitScore: '召回得分：',
    },
    inputPlaceholder: '和机器人聊天',
    thinking: '深度思考中...',
    thought: '已深度思考',
    resend: '重新发送',
  },
  promptEditor: {
    placeholder: '在这里写你的提示词，输入\'{\' 插入变量、输入\'/\' 插入提示内容块',
    context: {
      item: {
        title: '上下文',
        desc: '插入上下文模板',
      },
      modal: {
        title: '有 {{num}} 个知识库在上下文中',
        add: '添加上下文',
        footer: '您可以在下面的“上下文”部分中管理上下文。',
      },
    },
    history: {
      item: {
        title: '会话历史',
        desc: '插入历史消息模板',
      },
      modal: {
        title: '示例',
        user: '你好',
        assistant: '你好！今天我能为您提供什么帮助？',
        edit: '编辑对话角色名称',
      },
    },
    variable: {
      item: {
        title: '变量 & 外部工具',
        desc: '插入变量和外部工具',
      },
      outputToolDisabledItem: {
        title: '变量',
        desc: '插入变量',
      },
      modal: {
        add: '添加新变量',
        addTool: '添加工具',
      },
    },
    query: {
      item: {
        title: '查询内容',
        desc: '插入用户查询模板',
      },
    },
    existed: 'Prompt 中已存在',
  },
  imageUploader: {
    uploadFromComputer: '从本地上传',
    uploadFromComputerReadError: '图片读取失败，请重新选择。',
    uploadFromComputerUploadError: '图片上传失败，请重新上传。',
    uploadFromComputerLimit: '上传图片不能超过 {{size}} MB',
    pasteImageLink: '粘贴图片链接',
    pasteImageLinkInputPlaceholder: '将图像链接粘贴到此处',
    pasteImageLinkInvalid: '图片链接无效',
    imageUpload: '图片上传',
  },
  fileUploader: {
    uploadFromComputer: '从本地上传',
    pasteFileLink: '粘贴文件链接',
    pasteFileLinkInputPlaceholder: '输入文件链接',
    uploadFromComputerReadError: '文件读取失败，请重新选择。',
    uploadFromComputerUploadError: '文件上传失败，请重新上传。',
    uploadFromComputerLimit: '上传 {{type}} 不能超过 {{size}}',
    pasteFileLinkInvalid: '文件链接无效',
    fileExtensionNotSupport: '文件类型不支持',
  },
  tag: {
    placeholder: '全部标签',
    addNew: '创建新标签',
    noTag: '没有标签',
    noTagYet: '还没有标签',
    addTag: '添加标签',
    editTag: '修改标签',
    manageTags: '管理标签',
    selectorPlaceholder: '搜索或者创建',
    create: '创建',
    delete: '删除标签',
    deleteTip: '标签正在使用中，是否删除？',
    created: '标签创建成功',
    failed: '标签创建失败',
  },
  license: {
    expiring: '许可证还有 1 天到期',
    expiring_plural: '许可证还有 {{count}} 天到期',
  },
  pagination: {
    perPage: '每页显示',
  },
  imageInput: {
    dropImageHere: '将图片拖放到此处，或',
    browse: '浏览',
    supportedFormats: '支持PNG、JPG、JPEG、WEBP和GIF格式',
  },
}

export default translation
