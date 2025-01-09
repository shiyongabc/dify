const translation = {
  knowledge: '知识库',
  chunkingMode: {
    general: '通用',
    parentChild: '父子',
  },
  parentMode: {
    paragraph: '段落',
    fullDoc: '全文',
  },
  externalTag: '外部',
  externalAPI: '外部 API',
  externalAPIPanelTitle: '外部知识库 API',
  externalKnowledgeId: '外部知识库 ID',
  externalKnowledgeName: '外部知识库名称',
  externalKnowledgeDescription: '知识库描述',
  externalKnowledgeIdPlaceholder: '请输入外部知识库 ID',
  externalKnowledgeNamePlaceholder: '请输入外部知识库名称',
  externalKnowledgeDescriptionPlaceholder: '描述知识库内容（可选）',
  learnHowToWriteGoodKnowledgeDescription: '了解如何编写良好的知识库描述',
  externalAPIPanelDescription: '外部知识库 API 用于连接到 Dify 之外的知识库并从中检索知识。',
  externalAPIPanelDocumentation: '了解如何创建外部知识库 API',
  localDocs: '本地文档',
  documentCount: ' 文档',
  wordCount: ' 千字符',
  appCount: ' 关联应用',
  createDataset: '创建知识库',
  noExternalKnowledge: '还没有外部知识库 API，点击此处创建',
  createExternalAPI: '添加外部知识库 API',
  createNewExternalAPI: '创建新的外部知识库API',
  editExternalAPIFormTitle: '编辑外部知识库 API',
  editExternalAPITooltipTitle: '个关联知识库',
  editExternalAPIConfirmWarningContent: {
    front: '此外部知识库 API 已链接到',
    end: '个外部知识库，此修改将应用于所有这些知识库。您确定要保存此更改吗？',
  },
  editExternalAPIFormWarning: {
    front: '此外部 API 已链接到',
    end: '外部知识库',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      front: '删除',
      end: '？',
    },
    content: {
      front: '此外部知识库 API 已链接到',
      end: '个外部知识库。删除此 API 将使所有这些知识库失效。您确定要删除此 API 吗？',
    },
    noConnectionContent: '您确定要删除此 API 吗？',
  },
  connectDatasetIntro: {
    title: '如何连接到外部知识库',
    content: {
      front: '要连接到外部知识库，您需要先创建一个外部 API。请仔细阅读并参考',
      link: '了解如何创建外部 API',
      end: '。然后找到相应的知识库 ID 并填写在左侧表单中。如果所有信息正确，点击连接按钮后将自动跳转到知识库中的检索测试。',
    },
    learnMore: '了解更多',
  },
  connectHelper: {
    helper1: '通过 API 和知识库 ID 连接到外部知识库。目前，',
    helper2: '仅支持检索功能',
    helper3: '。我们强烈建议您在使用此功能之前',
    helper4: '仔细阅读帮助文档',
    helper5: '。',
  },
  connectDataset: '连接外部知识库',
  createDatasetIntro: '导入您自己的文本数据或通过 Webhook 实时写入数据以增强 LLM 的上下文。',
  deleteDatasetConfirmTitle: '要删除知识库吗？',
  deleteDatasetConfirmContent:
    '删除知识库是不可逆的。用户将无法再访问您的知识库,所有的提示配置和日志将被永久删除。',
  datasetUsedByApp: '某些应用正在使用该知识库。应用将无法再使用该知识库,所有的提示配置和日志将被永久删除。',
  datasetDeleted: '知识库已删除',
  datasetDeleteFailed: '删除知识库失败',
  selectExternalKnowledgeAPI: {
    placeholder: '选择一个外部知识 API',
  },
  didYouKnow: '你知道吗？',
  intro1: '知识库可以被集成到 Dify 应用中',
  intro2: '作为上下文',
  intro3: ',',
  intro4: '或可以',
  intro5: '创建',
  intro6: '为独立的 ChatGPT 插件发布使用',
  unavailable: '不可用',
  unavailableTip: '由于 embedding 模型不可用，需要配置默认 embedding 模型',
  datasets: '知识库',
  datasetsApi: 'API',
  externalKnowledgeForm: {
    connect: '连接',
    cancel: '取消',
  },
  externalAPIForm: {
    name: '名称',
    endpoint: 'API 端点',
    apiKey: 'API 密钥',
    save: '保存',
    cancel: '取消',
    edit: '编辑',
    encrypted: {
      front: '您的 API Token 将使用',
      end: '加密并存储。',
    },
  },
  retrieval: {
    semantic_search: {
      title: '向量检索',
      description: '通过生成查询嵌入并查询与其向量表示最相似的文本分段',
    },
    full_text_search: {
      title: '全文检索',
      description: '索引文档中的所有词汇，从而允许用户查询任意词汇，并返回包含这些词汇的文本片段',
    },
    hybrid_search: {
      title: '混合检索',
      description: '同时执行全文检索和向量检索，并应用重排序步骤，从两类查询结果中选择匹配用户问题的最佳结果，用户可以选择设置权重或配置重新排序模型。',
      recommend: '推荐',
    },
    invertedIndex: {
      title: '倒排索引',
      description: '倒排索引是一种用于高效检索的结构。按术语组织，每个术语指向包含它的文档或网页',
    },
    change: '更改',
    changeRetrievalMethod: '更改检索方法',
  },
  docsFailedNotice: '文档索引失败',
  retry: '重试',
  documentsDisabled: '{{num}} 个文档已禁用 - 未活动超过 30 天',
  enable: '启用',
  indexingTechnique: {
    high_quality: '高质量',
    economy: '经济',
  },
  indexingMethod: {
    semantic_search: '向量检索',
    full_text_search: '全文检索',
    hybrid_search: '混合检索',
    invertedIndex: '倒排索引',
  },
  defaultRetrievalTip: '默认情况下使用多路召回。从多个知识库中检索知识，然后重新排序。',
  mixtureHighQualityAndEconomicTip: '混合使用高质量和经济型知识库需要配置 Rerank 模型。',
  inconsistentEmbeddingModelTip: '当所选知识库配置的 Embedding 模型不一致时，需要配置 Rerank 模型。',
  mixtureInternalAndExternalTip: '混合使用内部和外部知识时需要配置 Rerank 模型。',
  allExternalTip: '仅使用外部知识时，用户可以选择是否启用 Rerank 模型。如果不启用，检索到的文本块将根据分数排序。当不同知识库的检索策略不一致时，结果可能不准确。',
  retrievalSettings: '召回设置',
  rerankSettings: 'Rerank 设置',
  weightedScore: {
    title: '权重设置',
    description: '通过调整分配的权重，重新排序策略确定是优先进行语义匹配还是关键字匹配。',
    semanticFirst: '语义优先',
    keywordFirst: '关键词优先',
    customized: '自定义',
    semantic: '语义',
    keyword: '关键词',
  },
  nTo1RetrievalLegacy: '9 月 1 日起我们将不再提供此能力，推荐使用最新的多路召回获得更好的检索效果。',
  nTo1RetrievalLegacyLink: '了解更多',
  nTo1RetrievalLegacyLinkText: '9 月 1 日起我们将不再提供此能力。',
  batchAction: {
    selected: '已选择',
    enable: '启用',
    disable: '禁用',
    archive: '归档',
    delete: '删除',
    cancel: '取消',
  },
  preprocessDocument: '{{num}} 个预处理文档',
  allKnowledge: '所有知识库',
  allKnowledgeDescription: '选择以显示该工作区内所有知识库。只有工作区所有者才能管理所有知识库。',
}

export default translation
