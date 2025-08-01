const translation = {
  api: {
    success: '성공',
    actionSuccess: '동작이 성공적으로 수행되었습니다',
    saved: '저장됨',
    create: '생성됨',
    remove: '삭제됨',
  },
  operation: {
    create: '생성',
    confirm: '확인',
    cancel: '취소',
    clear: '지우기',
    save: '저장',
    saveAndEnable: '저장 및 활성화',
    edit: '편집',
    add: '추가',
    added: '추가됨',
    refresh: '새로 고침',
    reset: '초기화',
    search: '검색',
    change: '변경',
    remove: '삭제',
    send: '전송',
    copy: '복사',
    lineBreak: '줄 바꿈',
    sure: '확실히',
    download: '다운로드',
    delete: '삭제',
    settings: '설정',
    setup: '설정',
    getForFree: '무료로 받기',
    reload: '다시 불러오기',
    ok: '확인',
    log: '로그',
    learnMore: '자세히 알아보기',
    params: '매개변수',
    duplicate: '중복',
    rename: '이름 바꾸기',
    audioSourceUnavailable: '오디오 소스를 사용할 수 없습니다.',
    openInNewTab: '새 탭에서 열기',
    zoomIn: '확대',
    copyImage: '이미지 복사',
    zoomOut: '축소',
    close: '닫다',
    viewMore: '더보기',
    regenerate: '재생성',
    view: '보기',
    saveAndRegenerate: '저장 및 자식 청크 재생성',
    submit: '전송',
    skip: '배',
    imageCopied: '복사된 이미지',
    deleteApp: '앱 삭제',
    copied: '복사',
    viewDetails: '세부 정보보기',
    in: '안으로',
    downloadFailed: '다운로드 실패했습니다. 나중에 다시 시도하십시오.',
    format: '형식',
    more: '더 많은',
    downloadSuccess: '다운로드 완료.',
    selectAll: '모두 선택',
    deSelectAll: '모두 선택 해제',
  },
  placeholder: {
    input: '입력해주세요',
    select: '선택해주세요',
  },
  voice: {
    language: {
      zhHans: '중국어',
      zhHant: '번체 중국어',
      enUS: '영어',
      deDE: '독일어',
      frFR: '프랑스어',
      esES: '스페인어',
      itIT: '이탈리아어',
      thTH: '태국어',
      idID: '인도네시아어',
      jaJP: '일본어',
      koKR: '한국어',
      ptBR: '포르투갈어',
      ruRU: '러시아어',
      ukUA: '우크라이나어',
      viVN: '베트남어',
      plPL: '폴란드어',
      roRO: '루마니아어',
      hiIN: '힌디어',
      trTR: '터키어',
      faIR: '페르시아어',
    },
  },
  unit: {
    char: '문자',
  },
  actionMsg: {
    noModification: '현재 변경사항이 없습니다.',
    modifiedSuccessfully: '변경이 성공적으로 이루어졌습니다',
    modifiedUnsuccessfully: '변경에 실패했습니다',
    copySuccessfully: '복사가 성공적으로 이루어졌습니다',
    paySucceeded: '결제가 성공했습니다',
    payCancelled: '결제가 취소되었습니다',
    generatedSuccessfully: '생성이 성공적으로 이루어졌습니다',
    generatedUnsuccessfully: '생성에 실패했습니다',
  },
  model: {
    params: {
      temperature: '온도',
      temperatureTip: '랜덤성을 제어합니다. 온도를 낮추면 더 랜덤한 결과물을 얻을 수 있습니다. 온도가 0 에 가까워질수록 모델은 결정적이고 반복적으로 작동합니다.',
      top_p: '상위 P',
      top_pTip: '뉴클리어스 샘플링에 의한 다양성 제어: 0.5 는 모든 확률 가중 옵션의 절반을 고려함을 의미합니다.',
      presence_penalty: '존재 페널티',
      presence_penaltyTip: '이전 텍스트에서 토큰이 나타나는지 여부에 따라 새로운 토큰에 얼마나 많은 페널티를 부여할지 제어합니다. 모델이 새로운 주제에 대해 말할 가능성이 높아집니다.',
      frequency_penalty: '빈도 페널티',
      frequency_penaltyTip: '이전 텍스트 내 토큰의 기존 빈도에 따라 새로운 토큰에 얼마나 많은 페널티를 부여할지 제어합니다. 모델이 같은 문구를 글자 그대로 반복할 가능성이 줄어듭니다.',
      max_tokens: '최대 토큰',
      max_tokensTip:
        '응답의 최대 길이를 토큰 단위로 제한하는 데 사용됩니다. 큰 값은 프롬프트, 채팅 로그 및 남은 공간에 대한 제한을 가질 수 있습니다. 2/3 이하로 설정하는 것이 좋습니다. gpt-4-1106-preview, gpt-4-vision-preview 의 최대 토큰 (입력 128k 출력 4k) 보다 작게 설정하는 것이 좋습니다.',
      maxTokenSettingTip: '최대 토큰 설정이 높아서 프롬프트, 쿼리 및 데이터 공간에 제한이 생길 수 있습니다. 현재 모델의 최대 토큰의 80% 이하로 설정해주세요.',
      setToCurrentModelMaxTokenTip: '최대 토큰이 현재 모델의 최대 토큰의 80% 로 업데이트되었습니다 {{maxToken}}.',
      stop_sequences: '중단 시퀀스',
      stop_sequencesTip: 'API 가 진행 중인 토큰 생성을 중단하는 최대 4 개의 시퀀스입니다. 반환된 텍스트에는 중단 시퀀스가 포함되지 않습니다.',
      stop_sequencesPlaceholder: '시퀀스를 입력하고 탭 키를 누르세요',
    },
    tone: {
      Creative: '창의적인',
      Balanced: '균형잡힌',
      Precise: '정확한',
      Custom: '사용자 정의',
    },
    addMoreModel: '설정에서 다른 모델을 추가하세요',
    capabilities: '멀티모달 기능',
    settingsLink: '모델 공급자 설정',
  },
  menus: {
    status: '베타 버전',
    explore: '탐색',
    apps: '스튜디오',
    plugins: '플러그인',
    pluginsTips: '타사 플러그인을 통합하거나 ChatGPT 호환 AI 플러그인을 작성합니다.',
    datasets: '지식',
    datasetsTips: '곧 출시될 예정: 고유한 텍스트 데이터를 가져오거나 웹훅을 통해 실시간으로 데이터를 기록하여 LLM 컨텍스트를 강화합니다.',
    newApp: '새로운 앱',
    newDataset: '지식 만들기',
    tools: '도구',
    exploreMarketplace: 'Marketplace 둘러보기',
    appDetail: '앱 세부정보',
    account: '계정',
  },
  userProfile: {
    settings: '설정',
    emailSupport: '이메일 지원',
    workspace: '작업 공간',
    createWorkspace: '작업 공간 만들기',
    helpCenter: '도움말 센터',
    communityFeedback: '로드맵 및 피드백',
    roadmap: '로드맵',
    community: '커뮤니티',
    about: 'Dify 소개',
    logout: '로그아웃',
    github: '깃허브',
    compliance: '컴플라이언스',
    support: '지원',
  },
  settings: {
    accountGroup: '계정',
    workplaceGroup: '작업 공간',
    account: '내 계정',
    members: '멤버',
    billing: '청구',
    integrations: '통합',
    language: '언어',
    provider: '모델 제공자',
    dataSource: '데이터 소스',
    plugin: '플러그인',
    apiBasedExtension: 'API 확장',
    generalGroup: '일반',
  },
  account: {
    avatar: '아바타',
    name: '이름',
    email: '이메일',
    password: '비밀번호',
    passwordTip: '일시적인 로그인 코드를 사용하지 않으려면 영구적인 비밀번호를 설정할 수 있습니다.',
    setPassword: '비밀번호 설정',
    resetPassword: '비밀번호 재설정',
    currentPassword: '현재 비밀번호',
    newPassword: '새 비밀번호',
    confirmPassword: '비밀번호 확인',
    notEqual: '비밀번호가 일치하지 않습니다.',
    langGeniusAccount: 'Dify 계정',
    langGeniusAccountTip: 'Dify 계정과 관련된 사용자 데이터.',
    editName: '이름 편집',
    showAppLength: '{{length}}개의 앱 표시',
    delete: '계정 삭제',
    deleteTip: '계정을 삭제하면 모든 데이터가 영구적으로 지워지며 복구할 수 없습니다.',
    deleteConfirmTip: '확인하려면 등록된 이메일에서 다음 내용을 로 보내주세요 ',
    myAccount: '내 계정',
    studio: '디파이 스튜디오',
    account: '계정',
    deletePrivacyLink: '개인 정보 보호 정책.',
    deleteSuccessTip: '계정 삭제를 완료하는 데 시간이 필요합니다. 모든 작업이 완료되면 이메일로 연락드리겠습니다.',
    deleteLabel: '확인하려면 아래 이메일을 입력하십시오.',
    deletePlaceholder: '이메일을 입력해 주세요',
    sendVerificationButton: '인증 코드 보내기',
    verificationLabel: '인증 코드',
    verificationPlaceholder: '6 자리 코드를 붙여넣습니다.',
    permanentlyDeleteButton: '계정 영구 삭제',
    feedbackTitle: '피드백',
    feedbackLabel: '계정을 삭제한 이유를 알려주시겠습니까?',
    feedbackPlaceholder: '선택적',
    deletePrivacyLinkTip: '당사가 귀하의 데이터를 처리하는 방법에 대한 자세한 내용은 다음을 참조하십시오.',
    workspaceIcon: '작업 공간 아이콘',
    editWorkspaceInfo: '작업 공간 정보 편집',
    workspaceName: '작업 공간 이름',
  },
  members: {
    team: '팀',
    invite: '초대',
    name: '이름',
    lastActive: '최근 활동',
    role: '역할',
    pending: '대기 중...',
    owner: '소유자',
    admin: '관리자',
    adminTip: '앱 빌드 및 팀 설정 관리 가능',
    normal: '일반',
    normalTip: '앱 사용만 가능하고 앱 빌드는 불가능',
    editor: '편집자',
    editorTip: '앱 빌드만 가능하고 팀 설정 관리 불가능',
    inviteTeamMember: '팀 멤버 초대',
    inviteTeamMemberTip: '로그인 후에 바로 팀 데이터에 액세스할 수 있습니다.',
    emailNotSetup: '이메일 서버가 설정되지 않아 초대 이메일을 보낼 수 없습니다. 대신 초대 후 발급되는 초대 링크를 사용자에게 알려주세요.',
    email: '이메일',
    emailInvalid: '유효하지 않은 이메일 형식',
    emailPlaceholder: '이메일 입력',
    sendInvite: '초대 보내기',
    invitedAsRole: '{{role}} 사용자로 초대되었습니다',
    invitationSent: '초대가 전송되었습니다',
    invitationSentTip: '초대가 전송되었으며, 그들은 Dify 에 로그인하여 당신의 팀 데이터에 액세스할 수 있습니다.',
    invitationLink: '초대 링크',
    failedInvitationEmails: '다음 사용자들은 성공적으로 초대되지 않았습니다',
    ok: '확인',
    removeFromTeam: '팀에서 제거',
    removeFromTeamTip: '팀 액세스가 제거됩니다',
    setAdmin: '관리자 설정',
    setMember: '일반 멤버 설정',
    setEditor: '편집자 설정',
    disInvite: '초대 취소',
    deleteMember: '멤버 삭제',
    you: '(나)',
    datasetOperator: '지식 관리자',
    setBuilder: '빌더로 설정',
    builder: '건설자',
    builderTip: '자신의 앱을 구축 및 편집할 수 있습니다.',
    datasetOperatorTip: '기술 자료만 관리할 수 있습니다.',
  },
  integrations: {
    connected: '연결됨',
    google: 'Google',
    googleAccount: 'Google 계정으로 로그인',
    github: 'GitHub',
    githubAccount: 'GitHub 계정으로 로그인',
    connect: '연결',
  },
  language: {
    displayLanguage: '표시 언어',
    timezone: '시간대',
  },
  provider: {
    apiKey: 'API 키',
    enterYourKey: '여기에 API 키를 입력하세요',
    invalidKey: '유효하지 않은 OpenAI API 키',
    validatedError: '검증 실패:',
    validating: '키를 확인하는 중...',
    saveFailed: 'API 키 저장 실패',
    apiKeyExceedBill: '이 API KEY 에는 사용 가능한 할당량이 없습니다. 자세한 내용은',
    addKey: '키 추가',
    comingSoon: '곧 출시됨',
    editKey: '편집',
    invalidApiKey: '유효하지 않은 API 키',
    azure: {
      apiBase: 'API 베이스',
      apiBasePlaceholder: 'Azure OpenAI 엔드포인트의 API 베이스 URL.',
      apiKey: 'API 키',
      apiKeyPlaceholder: '여기에 API 키를 입력하세요',
      helpTip: 'Azure OpenAI 서비스 배우기',
    },
    openaiHosted: {
      openaiHosted: '호스팅된 OpenAI',
      onTrial: '트라이얼 중',
      exhausted: '할당량이 다 사용되었습니다',
      desc: 'Dify 가 제공하는 OpenAI 호스팅 서비스를 사용하면 GPT-3.5 와 같은 모델을 사용할 수 있습니다. 트라이얼 할당량이 다 사용되기 전에 다른 모델 제공자를 설정해야 합니다.',
      callTimes: '호출 횟수',
      usedUp: '트라이얼 할당량이 다 사용되었습니다. 다른 모델 제공자를 추가하세요.',
      useYourModel: '현재 사용자 정의 모델 제공자를 사용 중입니다.',
      close: '닫기',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude 호스팅',
      onTrial: '트라이얼 중',
      exhausted: '할당량이 다 사용되었습니다',
      desc: '고급 대화 및 창의적인 콘텐츠 생성부터 상세한 지시까지 다양한 작업에 강력한 모델입니다.',
      callTimes: '호출 횟수',
      usedUp: '트라이얼 할당량이 다 사용되었습니다. 다른 모델 제공자를 추가하세요.',
      useYourModel: '현재 사용자 정의 모델 제공자를 사용 중입니다.',
      close: '닫기',
      trialQuotaTip: 'Anthropic 평가판 할당량은 2025/03/11에 만료되며 그 이후에는 더 이상 사용할 수 없습니다. 제때 활용하시기 바랍니다.',
    },
    anthropic: {
      using: '임베드 기능을 사용 중입니다',
      enableTip: 'Anthropic 모델을 활성화하려면 먼저 OpenAI 또는 Azure OpenAI 서비스에 바인딩해야 합니다.',
      notEnabled: '비활성화됨',
      keyFrom: 'Anthropic 에서 API 키를 받으세요',
    },
    encrypted: {
      front: 'API KEY 는',
      back: '기술을 사용하여 암호화 및 저장됩니다.',
    },
  },
  modelProvider: {
    notConfigured: '시스템 모델이 아직 완전히 설정되지 않아 일부 기능을 사용할 수 없습니다.',
    systemModelSettings: '시스템 모델 설정',
    systemModelSettingsLink: '시스템 모델 설정이 필요한 이유는 무엇입니까?',
    selectModel: '모델 선택',
    setupModelFirst: '먼저 모델을 설정하세요',
    systemReasoningModel: {
      key: '시스템 추론 모델',
      tip: '앱 구축에 사용되는 기본 추론 모델을 설정합니다. 또한 대화 이름 생성 및 다음 질문 제안과 같은 기능도 기본 추론 모델을 사용합니다.',
    },
    embeddingModel: {
      key: '임베딩 모델',
      tip: '지식 문서 임베딩 처리의 기본 모델을 설정합니다. 지식 가져오기 및 임포트에 모두 이 임베딩 모델을 벡터화 처리에 사용합니다. 변경하면 가져온 지식과 질문 간의 벡터 차원이 일치하지 않아 가져오기에 실패합니다. 실패를 피하려면 이 모델을 변경하지 마세요.',
      required: '임베딩 모델이 필요합니다',
    },
    speechToTextModel: {
      key: '음성-to-텍스트 모델',
      tip: '대화에서의 음성-to-텍스트 입력에 사용되는 기본 모델을 설정합니다.',
    },
    ttsModel: {
      key: '텍스트-to-음성 모델',
      tip: '대화에서의 텍스트-to-음성 입력에 사용되는 기본 모델을 설정합니다.',
    },
    rerankModel: {
      key: '재랭크 모델',
      tip: '재랭크 모델은 사용자 쿼리와의 의미적 일치를 기반으로 후보 문서 목록을 재배열하여 의미적 순위를 향상시킵니다.',
    },
    quota: '할당량',
    searchModel: '검색 모델',
    noModelFound: '{{model}}에 대한 모델을 찾을 수 없습니다',
    models: '모델',
    showMoreModelProvider: '더 많은 모델 제공자 표시',
    selector: {
      tip: '이 모델은 삭제되었습니다. 다른 모델을 추가하거나 다른 모델을 선택하세요.',
      emptyTip: '사용 가능한 모델이 없습니다',
      emptySetting: '설정으로 이동하여 구성하세요',
      rerankTip: '재랭크 모델을 설정하세요',
    },
    card: {
      quota: '할당량',
      onTrial: '트라이얼 중',
      paid: '유료',
      quotaExhausted: '할당량이 다 사용되었습니다',
      callTimes: '호출 횟수',
      tokens: '토큰',
      buyQuota: 'Buy Quota',
      priorityUse: '우선 사용',
      removeKey: 'API 키 제거',
      tip: '지불된 할당량에 우선순위가 부여됩니다. 평가판 할당량은 유료 할당량이 소진된 후 사용됩니다.',
    },
    item: {
      deleteDesc: '{{modelName}}은 (는) 시스템 추론 모델로 사용 중입니다. 제거 후 일부 기능을 사용할 수 없습니다. 확인하시겠습니까?',
      freeQuota: '무료 할당량',
    },
    addApiKey: 'API 키 추가',
    invalidApiKey: '잘못된 API 키',
    encrypted: {
      front: 'API 키는 다음 기술을 사용하여 암호화되어 저장됩니다',
      back: ' 기술.',
    },
    freeQuota: {
      howToEarn: '얻는 방법',
    },
    addMoreModelProvider: '모델 제공자 추가',
    addModel: '모델 추가',
    modelsNum: '{{num}}개의 모델',
    showModels: '모델 표시',
    showModelsNum: '{{num}}개의 모델 표시',
    collapse: '축소',
    config: '설정',
    modelAndParameters: '모델 및 매개변수',
    model: '모델',
    featureSupported: '{{feature}} 지원됨',
    callTimes: '호출 횟수',
    credits: '메시지 크레딧',
    buyQuota: '할당량 구매',
    getFreeTokens: '무료 토큰 받기',
    priorityUsing: '우선 사용',
    deprecated: '사용 중단됨',
    confirmDelete: '삭제를 확인하시겠습니까?',
    quotaTip: '남은 무료 토큰 사용 가능',
    loadPresets: '프리셋 로드',
    parameters: '매개변수',
    apiKey: 'API 키',
    defaultConfig: '기본 구성',
    providerManaged: '제공자 관리',
    loadBalancing: '부하 분산 Load balancing',
    addConfig: '구성 추가',
    apiKeyStatusNormal: 'APIKey 상태는 정상입니다.',
    configLoadBalancing: 'Config 로드 밸런싱',
    editConfig: '구성 편집',
    loadBalancingHeadline: '로드 밸런싱',
    modelHasBeenDeprecated: '이 모델은 더 이상 사용되지 않습니다',
    loadBalancingDescription: '여러 자격 증명 세트로 부담을 줄입니다.',
    upgradeForLoadBalancing: '로드 밸런싱을 사용하도록 계획을 업그레이드합니다.',
    apiKeyRateLimit: '속도 제한에 도달했으며, {{seconds}}s 후에 사용할 수 있습니다.',
    loadBalancingInfo: '기본적으로 부하 분산은 라운드 로빈 전략을 사용합니다. 속도 제한이 트리거되면 1 분의 휴지 기간이 적용됩니다.',
    loadBalancingLeastKeyWarning: '로드 밸런싱을 사용하려면 최소 2 개의 키를 사용하도록 설정해야 합니다.',
    providerManagedDescription: '모델 공급자가 제공하는 단일 자격 증명 집합을 사용합니다.',
    installProvider: '모델 공급자 설치',
    discoverMore: '더 알아보기',
    emptyProviderTitle: '모델 공급자가 설정되지 않음',
    configureTip: 'api-key 설정 또는 사용할 모델 추가',
    emptyProviderTip: '먼저 모델 공급자를 설치하십시오.',
    toBeConfigured: '구성 예정',
  },
  dataSource: {
    add: '데이터 소스 추가하기',
    connect: '연결하기',
    notion: {
      title: 'Notion',
      description: '노션을 지식 데이터 소스로 사용하기.',
      connectedWorkspace: '작업 공간에 연결됨',
      addWorkspace: '작업 공간에 추가하기',
      connected: '연결됨',
      disconnected: '연결 안됨',
      changeAuthorizedPages: '허가된 페이지 변경하기',
      pagesAuthorized: '페이지가 허가됨',
      sync: '동기화',
      remove: '제거하기',
      selector: {
        pageSelected: '페이지 선택됨',
        searchPages: '페이지 검색...',
        noSearchResult: '검색 결과 없음',
        addPages: '페이지 추가하기',
        preview: '미리보기',
      },
    },
    website: {
      inactive: '게으른',
      title: '웹 사이트',
      configuredCrawlers: '구성된 크롤러',
      with: '와',
      active: '활동적인',
      description: '웹 크롤러를 사용하여 웹 사이트에서 콘텐츠를 가져옵니다.',
    },
    configure: '구성',
  },
  plugin: {
    serpapi: {
      apiKey: 'API 키',
      apiKeyPlaceholder: 'API 키를 입력하세요',
      keyFrom: 'SerpAPI 계정 페이지에서 SerpAPI 키를 가져오세요',
    },
  },
  apiBasedExtension: {
    title: 'API 기반 확장은 Dify 애플리케이션 전체에서 간편한 사용을 위한 설정을 단순화하고 집중적인 API 관리를 제공합니다.',
    link: '사용자 정의 API 기반 확장을 개발하는 방법 배우기',
    add: 'API 기반 확장 추가',
    selector: {
      title: 'API 기반 확장',
      placeholder: 'API 기반 확장을 선택하세요',
      manage: 'API 기반 확장 관리',
    },
    modal: {
      title: 'API 기반 확장 추가',
      editTitle: 'API 기반 확장 편집',
      name: {
        title: '이름',
        placeholder: '이름을 입력하세요',
      },
      apiEndpoint: {
        title: 'API 엔드포인트',
        placeholder: 'API 엔드포인트를 입력하세요',
      },
      apiKey: {
        title: 'API 키',
        placeholder: 'API 키를 입력하세요',
        lengthError: 'API 키는 5 자 미만이어야 합니다',
      },
    },
    type: '유형',
  },
  about: {
    changeLog: '변경 로그',
    updateNow: '지금 업데이트',
    nowAvailable: 'Dify {{version}} 사용 가능합니다.',
    latestAvailable: 'Dify {{version}} 최신 버전입니다.',
  },
  appMenus: {
    overview: '모니터링',
    promptEng: '오케스트레이트',
    apiAccess: 'API 액세스',
    logAndAnn: '로그 및 어노테이션',
    logs: '로그',
  },
  environment: {
    testing: '테스트',
    development: '개발',
  },
  appModes: {
    completionApp: '텍스트 생성',
    chatApp: '채팅 앱',
  },
  datasetMenus: {
    documents: '문서',
    hitTesting: '검색 테스트',
    settings: '설정',
    emptyTip: '연결된 지식이 없습니다. 애플리케이션 또는 플러그인으로 이동하여 연결을 완료하세요.',
    viewDoc: '문서 보기',
    relatedApp: '관련 앱',
    noRelatedApp: '연결된 앱 없음',
  },
  voiceInput: {
    speaking: '지금 말하고 있습니다...',
    converting: '텍스트로 변환 중...',
    notAllow: '마이크가 허용되지 않았습니다',
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
    renameConversation: '대화 이름 바꾸기',
    conversationName: '대화 이름',
    conversationNamePlaceholder: '대화 이름을 입력하세요',
    conversationNameCanNotEmpty: '대화 이름은 필수입니다',
    citation: {
      title: '인용',
      linkToDataset: '지식 링크',
      characters: '문자수:',
      hitCount: '검색 횟수:',
      vectorHash: '벡터 해시:',
      hitScore: '검색 점수:',
    },
    inputPlaceholder: '봇과 대화',
    thought: '생각',
    thinking: '생각...',
    resend: '재전송',
  },
  promptEditor: {
    placeholder: '여기에 프롬프트 단어를 입력하세요. 변수를 삽입하려면 "{{"를 입력하고, 프롬프트 컨텐츠 블록을 삽입하려면 "/"를 입력하세요.',
    context: {
      item: {
        title: '컨텍스트',
        desc: '컨텍스트 템플릿을 삽입합니다.',
      },
      modal: {
        title: '{{num}} 번째 컨텍스트',
        add: '컨텍스트 추가',
        footer: '아래의 컨텍스트 섹션에서 컨텍스트를 관리할 수 있습니다.',
      },
    },
    history: {
      item: {
        title: '대화 기록',
        desc: '과거 메시지 템플릿을 삽입합니다.',
      },
      modal: {
        title: '예시',
        user: '안녕하세요',
        assistant: '안녕하세요! 오늘은 어떻게 도와드릴까요?',
        edit: '대화 역할 이름 편집',
      },
    },
    variable: {
      item: {
        title: '변수 및 외부 도구',
        desc: '변수 및 외부 도구를 삽입합니다.',
      },
      outputToolDisabledItem: {
        title: '변수',
        desc: '변수를 삽입합니다.',
      },
      modal: {
        add: '새로운 변수',
        addTool: '새로운 도구',
      },
    },
    query: {
      item: {
        title: '쿼리',
        desc: '사용자 쿼리 템플릿을 삽입합니다.',
      },
    },
    existed: '프롬프트에 이미 존재합니다',
  },
  imageUploader: {
    uploadFromComputer: '컴퓨터에서 업로드',
    uploadFromComputerReadError: '이미지 읽기 실패. 다시 시도하세요.',
    uploadFromComputerUploadError: '이미지 업로드 실패. 다시 업로드하세요.',
    uploadFromComputerLimit: '업로드 이미지 크기는 {{size}} MB 를 초과할 수 없습니다',
    pasteImageLink: '이미지 링크 붙여넣기',
    pasteImageLinkInputPlaceholder: '여기에 이미지 링크를 붙여넣으세요',
    pasteImageLinkInvalid: '유효하지 않은 이미지 링크',
    imageUpload: '이미지 업로드',
  },
  tag: {
    placeholder: '모든 태그',
    addNew: '새 태그 추가',
    noTag: '태그 없음',
    noTagYet: '아직 태그가 없습니다',
    addTag: '태그 추가',
    editTag: '태그 편집',
    manageTags: '태그 관리',
    selectorPlaceholder: '검색 또는 생성할 문자를 입력하세요',
    create: '생성',
    delete: '태그 삭제',
    deleteTip: '태그가 사용 중입니다. 삭제하시겠습니까?',
    created: '태그가 성공적으로 생성되었습니다',
    failed: '태그 생성에 실패했습니다',
  },
  errorMsg: {
    urlError: 'URL 은 http:// 또는 https:// 로 시작해야 합니다.',
    fieldRequired: '{{field}}는 필수입니다.',
  },
  fileUploader: {
    uploadFromComputer: '로컬 업로드',
    pasteFileLinkInputPlaceholder: 'URL 입력...',
    pasteFileLinkInvalid: '유효하지 않은 파일 링크',
    uploadFromComputerReadError: '파일 읽기에 실패했습니다. 다시 시도하십시오.',
    pasteFileLink: '파일 링크 붙여넣기',
    fileExtensionNotSupport: '지원되지 않는 파일 확장자',
    uploadFromComputerLimit: '업로드 파일은 {{size}}를 초과할 수 없습니다.',
    uploadFromComputerUploadError: '파일 업로드에 실패했습니다. 다시 업로드하십시오.',
  },
  license: {
    expiring_plural: '{{count}}일 후에 만료',
    expiring: '하루 후에 만료',
    unlimited: '무제한',
  },
  pagination: {
    perPage: '페이지당 항목 수',
  },
  theme: {
    theme: '테마',
    light: '밝은',
    dark: '어두운',
    auto: '시스템',
  },
  compliance: {
    iso27001: 'ISO 27001:2022 인증',
    soc2Type1: 'SOC 2 유형 I 보고서',
    soc2Type2: 'SOC 2 유형 II 보고서',
    gdpr: 'GDPR DPA',
    professionalUpgradeTooltip: '팀 플랜 이상에서만 사용할 수 있습니다.',
    sandboxUpgradeTooltip: '전문가 또는 팀 플랜에서만 사용할 수 있습니다.',
  },
  imageInput: {
    supportedFormats: 'PNG, JPG, JPEG, WEBP 및 GIF 를 지원합니다.',
    browse: '브라우즈',
    dropImageHere: '여기에 이미지를 드롭하거나',
  },
  you: '너',
}

export default translation
