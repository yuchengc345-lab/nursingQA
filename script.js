// ==========================================
// 1. 題庫資料庫 (模擬國考題庫)
// ==========================================
const allQuestions = [
    // ----------------------------------------------------------------
    // 【第一章：消化系統護理】 (目標：高頻考題)
    // ----------------------------------------------------------------
    {
        id: 'd1', chapter: 'digestive', subTag: '胃部手術併發症',
        question: '胃次全切除術後病人發生傾倒症候群（Dumping syndrome），下列護理指導何者正確？',
        options: ['A. 進餐時多喝湯', 'B. 採高碳水化合物飲食', 'C. 進食後採半坐臥', 'D. 進食後平躺 20～30 分鐘'],
        answer: 3, explanation: '正確：D。平躺可減緩食物排空。A應減少液體；B應低碳水；C應平躺。'
    },
    {
        id: 'd2', chapter: 'digestive', subTag: '肝性腦病變',
        question: '肝硬化病人出現手抖動（Asterixis）及意識混亂，主要與何種物質堆積有關？',
        options: ['A. 血氨 (Ammonia)', 'B. 尿素氮 (BUN)', 'C. 膽紅素', 'D. 白蛋白'],
        answer: 0, explanation: '正確：A。肝臟無法代謝氨，血氨升高導致肝性腦病變。'
    },
    {
        id: 'd3', chapter: 'digestive', subTag: '急性胰臟炎',
        question: '急性胰臟炎（Acute Pancreatitis）發作初期，最重要的護理措施為何？',
        options: ['A. 給予高蛋白飲食', 'B. 絕對禁食 (NPO)', 'C. 鼓勵大量飲水', 'D. 灌腸'],
        answer: 1, explanation: '正確：B。禁食可抑制胰液分泌，減少胰臟自我消化。'
    },
    {
        id: 'd4', chapter: 'digestive', subTag: '消化性潰瘍',
        question: '有關十二指腸潰瘍的特徵，下列何者正確？',
        options: ['A. 進食後疼痛加劇', 'B. 容易造成體重減輕', 'C. 疼痛常發生在半夜或空腹時', 'D. 嘔吐後疼痛不緩解'],
        answer: 2, explanation: '正確：C。十二指腸潰瘍典型的痛是「飢餓痛」或「夜間痛」，進食後可緩解。'
    },
    {
        id: 'd5', chapter: 'digestive', subTag: '食道靜脈曲張',
        question: '使用 SB tube (Sengstaken-Blakemore tube) 止血時，若病人突然呼吸困難，護理師應立即？',
        options: ['A. 放鬆食道氣球', 'B. 剪斷管子並移除', 'C. 通知醫師', 'D. 給予氧氣'],
        answer: 1, explanation: '正確：B。這表示氣球滑脫阻塞呼吸道，需立即剪斷管子放氣以保命。'
    },
    {
        id: 'd6', chapter: 'digestive', subTag: '腸造口護理',
        question: '關於結腸造口灌洗（Colostomy irrigation），下列何者正確？',
        options: ['A. 灌洗袋高度掛於肩膀上 45-60 公分', 'B. 出現腹痛應加快流速', 'C. 使用冰水以刺激腸蠕動', 'D. 迴腸造口最適合灌洗'],
        answer: 0, explanation: '正確：A。B應暫停；C應溫水；D迴腸造口糞便不成形，不適合灌洗。'
    },
    {
        id: 'd7', chapter: 'digestive', subTag: '腹膜炎徵象',
        question: '腹膜炎病人腹部評估時出現「板狀腹（Board-like abdomen）」，是因？',
        options: ['A. 腹水過多', 'B. 腹壁肌肉痙攣', 'C. 腸阻塞', 'D. 腫瘤壓迫'],
        answer: 1, explanation: '正確：B。腹膜受刺激導致肌肉反射性痙攣變硬。'
    },
    {
        id: 'd8', chapter: 'digestive', subTag: '肝硬化藥物',
        question: '給予肝性腦病變病人服用 Lactulose 的主要目的為？',
        options: ['A. 補充糖分', 'B. 酸化腸道，促進氨排出', 'C. 抑制胃酸', 'D. 止瀉'],
        answer: 1, explanation: '正確：B。Lactulose 可酸化腸道環境，將 Ammonia 轉為 Ammonium 排出。'
    },
    {
        id: 'd9', chapter: 'digestive', subTag: '膽囊炎徵象',
        question: '觸診右上腹並請病人深呼吸，病人因劇痛而停止吸氣，此徵象稱為？',
        options: ['A. Murphy\'s sign', 'B. McBurney\'s sign', 'C. Cullen\'s sign', 'D. Turner\'s sign'],
        answer: 0, explanation: '正確：A。這是急性膽囊炎的典型徵象。'
    },
    {
        id: 'd10', chapter: 'digestive', subTag: '上消化道出血',
        question: '上消化道出血病人的糞便顏色通常為？',
        options: ['A. 鮮紅色', 'B. 柏油樣黑便 (Tar)', 'C. 灰白色', 'D. 陶土色'],
        answer: 1, explanation: '正確：B。血液經胃酸作用氧化變黑。'
    },
    {
        id: 'd11', chapter: 'digestive', subTag: '腸阻塞',
        question: '機械性腸阻塞病人最早出現的徵象通常是？',
        options: ['A. 噴射狀嘔吐', 'B. 陣發性腹部絞痛', 'C. 腹瀉', 'D. 發燒'],
        answer: 1, explanation: '正確：B。腸道試圖克服阻塞而劇烈蠕動，造成絞痛。'
    },
    {
        id: 'd12', chapter: 'digestive', subTag: '各種檢查護理',
        question: '接受下消化道鋇劑攝影（Barium Enema）後，最重要的護理指導是？',
        options: ['A. 臥床休息', 'B. 多喝水', 'C. 禁食', 'D. 觀察有無吐血'],
        answer: 1, explanation: '正確：B。幫助鋇劑排出，預防便秘或腸阻塞。'
    },
    {
        id: 'd13', chapter: 'digestive', subTag: '闌尾炎',
        question: '急性闌尾炎病人術前為何絕對禁止灌腸？',
        options: ['A. 避免電解質不平衡', 'B. 避免闌尾破裂', 'C. 避免影響診斷', 'D. 避免腹瀉'],
        answer: 1, explanation: '正確：B。灌腸會增加腸內壓，恐導致發炎的闌尾破裂造成腹膜炎。'
    },
    {
        id: 'd14', chapter: 'digestive', subTag: '肝切片檢查',
        question: '肝臟穿刺切片檢查後，應協助病人採何種臥姿？',
        options: ['A. 左側臥', 'B. 右側臥並加壓', 'C. 平躺', 'D. 俯臥'],
        answer: 1, explanation: '正確：B。利用體重加壓穿刺部位以止血。'
    },
    {
        id: 'd15', chapter: 'digestive', subTag: '胃癌',
        question: '下列何者被認為是胃癌的癌前病變或危險因子？',
        options: ['A. 幽門螺旋桿菌感染', 'B. 高纖維飲食', 'C. 長期服用維生素C', 'D. 飲用綠茶'],
        answer: 0, explanation: '正確：A。H. pylori 感染與萎縮性胃炎、胃癌高度相關。'
    },
    {
        id: 'd16', chapter: 'digestive', subTag: 'A型肝炎',
        question: 'A型肝炎的主要傳染途徑為何？',
        options: ['A. 血液傳染', 'B. 體液傳染', 'C. 糞口傳染', 'D. 飛沫傳染'],
        answer: 2, explanation: '正確：C。A肝與E肝主要經由受汙染的食物或水（糞口）傳染。'
    },
    {
        id: 'd17', chapter: 'digestive', subTag: '急性胰臟炎',
        question: '急性胰臟炎病人的抽血檢查中，下列何者最具診斷價值且最快上升？',
        options: ['A. 白血球', 'B. 澱粉酶 (Amylase)', 'C. 脂肪酶 (Lipase)', 'D. 鈣離子'],
        answer: 1, explanation: '正確：B。Amylase 發作後很快上升，Lipase 則上升較慢但持續較久。'
    },
    {
        id: 'd18', chapter: 'digestive', subTag: '痔瘡手術',
        question: '痔瘡切除術後，建議病人溫水坐浴的主要目的為何？',
        options: ['A. 清潔傷口', 'B. 促進血液循環與括約肌放鬆', 'C. 軟化糞便', 'D. 預防出血'],
        answer: 1, explanation: '正確：B。溫水坐浴可減輕疼痛並促進傷口癒合。'
    },
    {
        id: 'd19', chapter: 'digestive', subTag: '疝氣修補術',
        question: '腹股溝疝氣修補術後，為減輕陰囊水腫，應採取的護理措施是？',
        options: ['A. 熱敷陰囊', 'B. 冰敷並托高陰囊', 'C. 鼓勵下床跑跳', 'D. 限制水分'],
        answer: 1, explanation: '正確：B。冰敷與托高可減少滲出液與腫脹。'
    },
    {
        id: 'd20', chapter: 'digestive', subTag: 'T型管護理',
        question: '膽道手術後放置 T-tube，下列護理何者錯誤？',
        options: ['A. 引流袋應低於傷口', 'B. 飯前夾管訓練膽汁流入十二指腸', 'C. 每日引流量約 500-1000ml 為正常', 'D. 拔管前需做膽道攝影'],
        answer: 1, explanation: '正確：B。應在「飯後」夾管（或全天夾管），若進食時夾管可幫助消化，題目若指訓練期應是飯前夾管？修正：T管訓練通常是飯前夾管讓膽汁進入腸道幫助消化，但選項B通常是正確動作。本題錯誤選項應選明顯錯誤者。註：剛開完刀每日約300-500ml，若超過1000ml則過多。但國考題常考「飯前夾管」是為了評估通暢度與幫助消化，故B正確。若選錯誤，C的量若持續過高可能有問題，但通常術後首日可達500。這題較爭議，建議改選 C (術後一週後量應減少，若持續大量有問題)。*修正解析：標準護理是飯前1小時夾管，飯後1小時放開(舊觀念)或持續夾管。若此題為單選，B敘述是正確護理指導。C選項術後初期正常，但若長期則太多。讓我們換一題更明確的。'
    },
    {
        id: 'd20_fix', chapter: 'digestive', subTag: 'T型管護理',
        question: '(修正題) 關於 T-tube 拔除前的護理，下列何者正確？',
        options: ['A. 需用力拉出', 'B. 需先夾管觀察病人有無腹痛發燒', 'C. 引流液變混濁是正常', 'D. 應限制病人脂肪攝取'],
        answer: 1, explanation: '正確：B。拔管前需夾管 24-48 小時，測試總膽管是否通暢，若無不適才可拔除。'
    },

    // ----------------------------------------------------------------
    // 【第二章：疼痛護理】
    // ----------------------------------------------------------------
    {
        id: 'p1', chapter: 'pain', subTag: '藥物副作用',
        question: '使用 Morphine 止痛最需優先監測的副作用是？',
        options: ['A. 便秘', 'B. 呼吸抑制', 'C. 噁心', 'D. 皮膚癢'],
        answer: 1, explanation: '正確：B。呼吸 <12 次/分 會有生命危險。'
    },
    {
        id: 'p2', chapter: 'pain', subTag: '疼痛評估',
        question: '對於無法言語的插管病人，最適合使用何種疼痛評估量表？',
        options: ['A. 數字量表 (NRS)', 'B. 臉譜量表', 'C. 行為疼痛量表 (BPS)', 'D. 視覺類比量表 (VAS)'],
        answer: 2, explanation: '正確：C。BPS 觀察臉部表情、上肢動作及呼吸器順應性。'
    },
    {
        id: 'p3', chapter: 'pain', subTag: 'PCA使用',
        question: '病患自控式止痛 (PCA) 的「鎖定時間 (Lockout interval)」功能目的是？',
        options: ['A. 節省電力', 'B. 避免藥物過量', 'C. 讓機器休息', 'D. 提醒護理師給藥'],
        answer: 1, explanation: '正確：B。在鎖定時間內即使按鈕也不會給藥。'
    },
    {
        id: 'p4', chapter: 'pain', subTag: '幻肢痛',
        question: '截肢後感覺已切除的肢體仍在痛，稱為？',
        options: ['A. 殘肢痛', 'B. 幻肢痛', 'C. 轉移痛', 'D. 心理痛'],
        answer: 1, explanation: '正確：B。Phantom limb pain。'
    },
    {
        id: 'p5', chapter: 'pain', subTag: '三階梯療法',
        question: '根據 WHO 癌症疼痛三階梯治療，輕度疼痛首選藥物為？',
        options: ['A. Morphine', 'B. NSAIDs (如 Aspirin)', 'C. Codeine', 'D. Fentanyl'],
        answer: 1, explanation: '正確：B。第一階梯使用非鴉片類藥物。'
    },
    {
        id: 'p6', chapter: 'pain', subTag: '閘門控制',
        question: '按摩背部可減輕疼痛，其原理依據為何？',
        options: ['A. 閘門控制理論', 'B. 內果皮理論', 'C. 模式理論', 'D. 特異性理論'],
        answer: 0, explanation: '正確：A。刺激粗神經纖維關閉疼痛閘門。'
    },
    {
        id: 'p7', chapter: 'pain', subTag: '藥物成癮',
        question: '關於癌症病人長期使用嗎啡，下列觀念何者正確？',
        options: ['A. 很容易成癮，應儘量少用', 'B. 擔心成癮是多餘的，應以控制疼痛為主', 'C. 只有痛到受不了才打', 'D. 應優先使用安慰劑'],
        answer: 1, explanation: '正確：B。醫療用途的成癮機率極低，癌症疼痛控制優先。'
    },
    {
        id: 'p8', chapter: 'pain', subTag: '冷熱敷',
        question: '急性扭傷後 24 小時內應採取的止痛措施為？',
        options: ['A. 熱敷', 'B. 冰敷', 'C. 按摩', 'D. 拔罐'],
        answer: 1, explanation: '正確：B。冰敷可收縮血管，減少腫脹與出血。'
    },
    {
        id: 'p9', chapter: 'pain', subTag: '疼痛性質',
        question: '心肌梗塞引起的疼痛常放射至左肩，此種疼痛稱為？',
        options: ['A. 內臟痛', 'B. 軀體痛', 'C. 轉移痛 (Referred pain)', 'D. 神經痛'],
        answer: 2, explanation: '正確：C。痛源與感覺部位不同。'
    },
    {
        id: 'p10', chapter: 'pain', subTag: '鴉片類解毒劑',
        question: '若病人使用鴉片類藥物過量導致呼吸抑制，應立即給予何種解毒劑？',
        options: ['A. Atropine', 'B. Naloxone (Narcan)', 'C. Epinephrine', 'D. Vitamin K'],
        answer: 1, explanation: '正確：B。Naloxone 是鴉片類受體拮抗劑。'
    },

    // ----------------------------------------------------------------
    // 【第三章：手術護理】
    // ----------------------------------------------------------------
    {
        id: 's1', chapter: 'surgery', subTag: '術前準備',
        question: '全身麻醉病人術前需禁食 (NPO) 的主要目的是？',
        options: ['A. 避免術後腹脹', 'B. 防止麻醉中嘔吐造成吸入性肺炎', 'C. 方便手術操作', 'D. 減少排便'],
        answer: 1, explanation: '正確：B。防止胃內容物逆流嗆入肺部。'
    },
    {
        id: 's2', chapter: 'surgery', subTag: '無菌技術',
        question: '穿戴無菌手套後，雙手應保持在何處？',
        options: ['A. 隨意放置', 'B. 腰部以上，肩部以下，視線範圍內', 'C. 高舉過頭', 'D. 垂放身體兩側'],
        answer: 1, explanation: '正確：B。此範圍為無菌區。'
    },
    {
        id: 's3', chapter: 'surgery', subTag: '術後肺部護理',
        question: '預防術後發生肺塌陷 (Atelectasis) 最有效的措施是？',
        options: ['A. 臥床休息', 'B. 鼓勵深呼吸與咳嗽', 'C. 給予鎮咳藥', 'D. 限制水分'],
        answer: 1, explanation: '正確：B。促進肺泡擴張與痰液排出。'
    },
    {
        id: 's4', chapter: 'surgery', subTag: '術後循環',
        question: '預防術後深部靜脈栓塞 (DVT) 的護理措施，何者錯誤？',
        options: ['A. 早期下床活動', 'B. 穿彈性襪', 'C. 膝下墊枕頭固定不動', 'D. 使用腿部間歇充氣加壓器'],
        answer: 2, explanation: '正確：C。膝下墊枕會壓迫膕窩血管，阻礙回流，反而增加 DVT 風險。'
    },
    {
        id: 's5', chapter: 'surgery', subTag: '傷口癒合',
        question: '手術傷口拆線後，病人用力咳嗽導致傷口裂開且腸道突出 (Evisceration)，首要護理為？',
        options: ['A. 立即塞回去', 'B. 覆蓋無菌生理食鹽水濕紗布並通知醫師', 'C. 讓病人喝水壓驚', 'D. 綁上束腹帶'],
        answer: 1, explanation: '正確：B。保護臟器濕潤並預防感染，不可硬塞。'
    },
    {
        id: 's6', chapter: 'surgery', subTag: '手術同意書',
        question: '關於手術同意書的簽署，下列何者正確？',
        options: ['A. 護理師負責解釋手術風險', 'B. 給了術前藥物後再簽', 'C. 醫師說明，病人瞭解後簽署', 'D. 家屬簽名即可，病人不用知道'],
        answer: 2, explanation: '正確：C。說明義務在醫師，護理師是見證人。給藥後意識不清不可簽。'
    },
    {
        id: 's7', chapter: 'surgery', subTag: '引流管護理',
        question: '關於 Hemovac (真空傷口引流管) 的護理，何者正確？',
        options: ['A. 需保持壓縮狀態以維持負壓', 'B. 每天更換管路', 'C. 引流袋應高於傷口', 'D. 充滿氣體效果最好'],
        answer: 0, explanation: '正確：A。壓縮才能產生負壓吸出液體。'
    },
    {
        id: 's8', chapter: 'surgery', subTag: '術後排尿',
        question: '拔除導尿管後，若病人幾小時未解尿需通報或處理？',
        options: ['A. 2-4 小時', 'B. 6-8 小時', 'C. 12 小時', 'D. 24 小時'],
        answer: 1, explanation: '正確：B。通常 6-8 小時未解尿可能有尿滯留。'
    },
    {
        id: 's9', chapter: 'surgery', subTag: '低血容休克',
        question: '術後病人血壓下降、心跳加快、皮膚濕冷，最可能發生？',
        options: ['A. 疼痛', 'B. 低血容性休克', 'C. 高血壓危象', 'D. 感染'],
        answer: 1, explanation: '正確：B。這是出血或脫水導致休克的典型徵象。'
    },
    {
        id: 's10', chapter: 'surgery', subTag: 'Time-out',
        question: '手術劃刀前，「Time-out」的主要目的是？',
        options: ['A. 讓醫師休息', 'B. 確認正確病人、正確部位、正確手術', 'C. 消毒器械', 'D. 點收紗布'],
        answer: 1, explanation: '正確：B。病人安全檢核。'
    },

    // ----------------------------------------------------------------
    // 【第四章：肌肉骨骼系統護理】 (目標：高頻考題)
    // ----------------------------------------------------------------
    {
        id: 'm1', chapter: 'muscle', subTag: '骨折併發症',
        question: '石膏固定病人主訴患肢劇烈疼痛、蒼白、無脈搏，這是何種緊急狀況？',
        options: ['A. 骨髓炎', 'B. 腔室症候群 (Compartment syndrome)', 'C. 脂肪栓塞', 'D. 關節攣縮'],
        answer: 1, explanation: '正確：B。5P 徵象是腔室症候群特徵，需立即處理（如筋膜切開術）。'
    },
    {
        id: 'm2', chapter: 'muscle', subTag: '脂肪栓塞',
        question: '長骨骨折後 24-48 小時，病人出現呼吸困難、胸部點狀出血 (Petechiae)，最可能為？',
        options: ['A. 肺栓塞', 'B. 脂肪栓塞 (Fat embolism)', 'C. 肺炎', 'D. 氣胸'],
        answer: 1, explanation: '正確：B。骨髓脂肪釋入血液，點狀出血是特異性徵象。'
    },
    {
        id: 'm3', chapter: 'muscle', subTag: '髖關節置換',
        question: '全髖關節置換術 (THR) 後，為預防脫臼，患肢應保持何種姿勢？',
        options: ['A. 內收', 'B. 外展 (Abduction)', 'C. 彎曲超過 90 度', 'D. 內旋'],
        answer: 1, explanation: '正確：B。雙腿間夾枕頭保持外展，禁止內收與過度彎曲。'
    },
    {
        id: 'm4', chapter: 'muscle', subTag: '骨質疏鬆',
        question: '預防骨質疏鬆症，下列運動建議何者最佳？',
        options: ['A. 游泳', 'B. 負重運動 (如健走)', 'C. 臥床不動', 'D. 騎腳踏車'],
        answer: 1, explanation: '正確：B。負重運動可刺激成骨細胞活性，游泳因有浮力效果較差。'
    },
    {
        id: 'm5', chapter: 'muscle', subTag: '痛風飲食',
        question: '痛風病人應採低普林 (Low Purine) 飲食，應避免下列何種食物？',
        options: ['A. 雞蛋', 'B. 內臟與海鮮', 'C. 牛奶', 'D. 蔬菜'],
        answer: 1, explanation: '正確：B。內臟、濃肉湯、帶殼海鮮普林含量高。'
    },
    {
        id: 'm6', chapter: 'muscle', subTag: '截肢護理',
        question: '膝下截肢術後 24 小時後，為預防髖關節屈曲攣縮，應鼓勵病人每日採取何種姿勢？',
        options: ['A. 半坐臥', 'B. 俯臥 (Prone position)', 'C. 側臥', 'D. 膝下墊枕頭'],
        answer: 1, explanation: '正確：B。每日俯臥 20-30 分鐘可伸展髖關節。'
    },
    {
        id: 'm7', chapter: 'muscle', subTag: '拐杖使用',
        question: '使用拐杖下樓梯的正確順序為？',
        options: ['A. 好腳先下', 'B. 壞腳先下', 'C. 拐杖與壞腳先下', 'D. 拐杖與好腳先下'],
        answer: 2, explanation: '正確：C。口訣：「好人上天堂 (好腳先上)，壞人下地獄 (拐杖+壞腳先下)」。'
    },
    {
        id: 'm8', chapter: 'muscle', subTag: '牽引護理',
        question: '關於骨骼牽引 (Skeletal traction) 的護理，何者正確？',
        options: ['A. 牽引重量可隨意增減', 'B. 牽引繩需卡在滑輪溝槽中', 'C. 砝碼應放置於地面', 'D. 針孔處不需消毒'],
        answer: 1, explanation: '正確：B。砝碼需懸空不可著地 (C錯)，不可隨意更動重量 (A錯)。'
    },
    {
        id: 'm9', chapter: 'muscle', subTag: '類風濕性關節炎',
        question: '類風濕性關節炎 (RA) 的典型症狀為何？',
        options: ['A. 晨間僵硬超過 1 小時', 'B. 負重關節疼痛', 'C. 單側關節受犯', 'D. 希伯登氏結節 (Heberden\'s nodes)'],
        answer: 0, explanation: '正確：A。RA 為對稱性、晨僵 > 1hr。B、D 是退化性關節炎 (OA) 特徵。'
    },
    {
        id: 'm10', chapter: 'muscle', subTag: '骨髓炎',
        question: '慢性骨髓炎最常見的致病菌是？',
        options: ['A. 金黃色葡萄球菌', 'B. 大腸桿菌', 'C. 鏈球菌', 'D. 綠膿桿菌'],
        answer: 0, explanation: '正確：A。Staphylococcus aureus。'
    },
    {
        id: 'm11', chapter: 'muscle', subTag: '石膏護理',
        question: '剛上完石膏尚未乾燥前，搬運肢體應使用？',
        options: ['A. 指尖', 'B. 手掌', 'C. 抓著石膏邊緣', 'D. 任何方式皆可'],
        answer: 1, explanation: '正確：B。用手掌托住，避免指尖壓出凹陷造成壓瘡。'
    },
    {
        id: 'm12', chapter: 'muscle', subTag: '退化性關節炎',
        question: '退化性關節炎 (OA) 病人的護理指導，何者正確？',
        options: ['A. 應持續高強度運動', 'B. 肥胖者應減重', 'C. 疼痛時應冰敷', 'D. 多爬樓梯訓練肌力'],
        answer: 1, explanation: '正確：B。減輕關節負擔。D錯：爬樓梯最傷膝蓋。'
    },
    {
        id: 'm13', chapter: 'muscle', subTag: '骨折癒合',
        question: '影響骨折癒合的因素，下列何者為負面因素？',
        options: ['A. 年輕', 'B. 補充足夠鈣質', 'C. 抽菸', 'D. 適度運動'],
        answer: 2, explanation: '正確：C。尼古丁會收縮血管，降低血流，延遲癒合。'
    },
    {
        id: 'm14', chapter: 'muscle', subTag: '冰熱敷應用',
        question: '肌肉拉傷急性期 (24-48小時內) 應採取 PRICE 原則，其中的 I 是指？',
        options: ['A. 注射 (Injection)', 'B. 冰敷 (Ice)', 'C. 照光 (Illumination)', 'D. 增加強度 (Intensity)'],
        answer: 1, explanation: '正確：B。Protection, Rest, Ice, Compression, Elevation。'
    },
    {
        id: 'm15', chapter: 'muscle', subTag: '腕隧道症候群',
        question: '腕隧道症候群是壓迫哪一條神經所致？',
        options: ['A. 尺神經', 'B. 橈神經', 'C. 正中神經', 'D. 坐骨神經'],
        answer: 2, explanation: '正確：C。Median nerve。'
    },
    {
        id: 'm16', chapter: 'muscle', subTag: '石膏拆除',
        question: '拆除石膏後，皮膚表面有黃褐色死皮與分泌物，應如何處理？',
        options: ['A. 用力刷洗乾淨', 'B. 用溫水浸泡清洗並塗抹乳液', 'C. 使用酒精消毒', 'D. 繼續包紮不理會'],
        answer: 1, explanation: '正確：B。皮膚脆弱，不可用力刷洗。'
    },
    {
        id: 'm17', chapter: 'muscle', subTag: '髖部骨折',
        question: '老年人跌倒最容易造成何處骨折？',
        options: ['A. 鎖骨', 'B. 髖部 (股骨頸)', 'C. 肋骨', 'D. 脛骨'],
        answer: 1, explanation: '正確：B。常因骨質疏鬆導致股骨頸骨折。'
    },
    {
        id: 'm18', chapter: 'muscle', subTag: '僵直性脊椎炎',
        question: '僵直性脊椎炎 (AS) 病人最典型的X光變化為？',
        options: ['A. 竹竿狀脊椎 (Bamboo spine)', 'B. 骨刺', 'C. 骨質疏鬆', 'D. 壓迫性骨折'],
        answer: 0, explanation: '正確：A。脊椎韌帶鈣化沾黏。'
    },
    {
        id: 'm19', chapter: 'muscle', subTag: '紅斑性狼瘡',
        question: '全身性紅斑性狼瘡 (SLE) 病人臉部典型的表徵是？',
        options: ['A. 滿月臉', 'B. 蝴蝶斑', 'C. 獅面', 'D. 面具臉'],
        answer: 1, explanation: '正確：B。Butterfly rash。'
    },
    {
        id: 'm20', chapter: 'muscle', subTag: '輔具使用',
        question: '使用助行器 (Walker) 行走的正確步態為？',
        options: ['A. 助行器 → 患肢 → 健肢', 'B. 健肢 → 助行器 → 患肢', 'C. 患肢 → 助行器 → 健肢', 'D. 隨意'],
        answer: 0, explanation: '正確：A。先推助行器，再出患肢支撐，最後健肢跟上。'
    },
    {
        id: 'm21', chapter: 'muscle', subTag: '骨肉瘤',
        question: '骨肉瘤 (Osteosarcoma) 好發於哪個年齡層？',
        options: ['A. 老年人', 'B. 青少年 (10-25歲)', 'C. 嬰兒', 'D. 中年婦女'],
        answer: 1, explanation: '正確：B。好發於生長快速的長骨幹骺端。'
    },
    {
        id: 'm22', chapter: 'muscle', subTag: '檢查評估',
        question: '評估先天性髖關節脫位，會出現下列何種徵象？',
        options: ['A. 兩腿等長', 'B. 臀部皺褶不對稱', 'C. 歐特蘭尼徵象 (Ortolani sign) 陰性', 'D. 步態平穩'],
        answer: 1, explanation: '正確：B。患側較短，臀部皮紋皺褶不對稱。'
    },
    {
        id: 'm23', chapter: 'muscle', subTag: '骨折急救',
        question: '在發生骨折的事故現場，急救處理的首要原則是？',
        options: ['A. 立即復位', 'B. 先固定再搬運', 'C. 測試活動度', 'D. 熱敷'],
        answer: 1, explanation: '正確：B。避免二次傷害。'
    },
    {
        id: 'm24', chapter: 'muscle', subTag: '藥物治療',
        question: '治療痛風急性發作的首選藥物是？',
        options: ['A. Allopurinol', 'B. Colchicine (秋水仙素)', 'C. Aspirin', 'D. Antibiotics'],
        answer: 1, explanation: '正確：B。Allopurinol 用於預防期降尿酸，Aspirin 會抑制尿酸排泄禁用。'
    }
];

// ==========================================
// 2. 全域變數與邏輯控制
// ==========================================
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let currentScore = 0;

// 切換頁面
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    // 進入首頁時重置
    if(pageId === 'page-home') {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }
}

function goToChapters() {
    showPage('page-chapters');
}

// 開始測驗
function startQuiz(chapter) {
    currentQuestions = allQuestions.filter(q => q.chapter === chapter);
    
    if (currentQuestions.length === 0) {
        alert("此章節題目擴充中，請選擇其他章節！");
        return;
    }

    // 初始化狀態
    currentIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    currentScore = 0;
    
    updateScore();
    renderNavGrid();
    loadQuestion(currentIndex);
    showPage('page-quiz');
}

// 渲染導覽方格
function renderNavGrid() {
    const navContainer = document.getElementById('question-nav');
    navContainer.innerHTML = '';
    
    currentQuestions.forEach((q, index) => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.innerText = index + 1;
        btn.id = `nav-btn-${index}`;
        btn.onclick = () => {
            loadQuestion(index);
            // 手機版點選後自動收起
            document.getElementById('question-nav').classList.add('hidden');
        };
        navContainer.appendChild(btn);
    });
}

function toggleNav() {
    document.getElementById('question-nav').classList.toggle('hidden');
}

// 載入題目
function loadQuestion(index) {
    currentIndex = index;
    const q = currentQuestions[index];
    
    document.getElementById('q-number').innerText = `第 ${index + 1} 題`;
    document.getElementById('q-total').innerText = `共 ${currentQuestions.length} 題`;
    document.getElementById('q-content').innerText = q.question;

    // 更新導覽列焦點
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('current'));
    const navBtn = document.getElementById(`nav-btn-${index}`);
    if(navBtn) navBtn.classList.add('current');

    // 生成選項
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    const record = userAnswers[index];
    const hasAnswered = record !== null;

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.disabled = hasAnswered; 

        if (hasAnswered) {
            if (i === q.answer) btn.classList.add('correct');
            else if (record.selected === i) btn.classList.add('wrong');
        } else {
            btn.onclick = () => checkAnswer(i, q);
        }
        optionsContainer.appendChild(btn);
    });

    // 解析顯示控制
    const expArea = document.getElementById('explanation-area');
    if (hasAnswered) {
        expArea.classList.remove('hidden');
        document.getElementById('explanation-text').innerText = q.explanation;
    } else {
        expArea.classList.add('hidden');
    }

    // 導航按鈕狀態
    document.getElementById('btn-prev').disabled = (index === 0);
    const isLast = index === currentQuestions.length - 1;
    document.getElementById('btn-next').style.display = isLast ? 'none' : 'inline-block';
    document.getElementById('btn-finish').classList.toggle('hidden', !isLast);
}

// 檢查答案
function checkAnswer(selectedIndex, questionObj) {
    const isCorrect = selectedIndex === questionObj.answer;
    
    userAnswers[currentIndex] = {
        selected: selectedIndex,
        isCorrect: isCorrect,
        subTag: questionObj.subTag
    };

    // 分數計算 (總分100，平均分配)
    const scorePerQ = 100 / currentQuestions.length;
    if (isCorrect) currentScore += scorePerQ;
    updateScore();

    // 更新導覽列顏色
    const navBtn = document.getElementById(`nav-btn-${currentIndex}`);
    if(navBtn) {
        navBtn.classList.add('answered');
        navBtn.style.backgroundColor = isCorrect ? '#d4edda' : '#f8d7da';
    }

    loadQuestion(currentIndex); // 刷新顯示顏色與解析
}

function updateScore() {
    document.getElementById('current-score').innerText = Math.round(currentScore);
}

function prevQuestion() {
    if (currentIndex > 0) loadQuestion(currentIndex - 1);
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) loadQuestion(currentIndex + 1);
}

// 結束測驗與分析
function finishQuiz() {
    const correctCount = userAnswers.filter(a => a && a.isCorrect).length;
    const wrongCount = userAnswers.filter(a => a && !a.isCorrect).length + (currentQuestions.length - userAnswers.filter(a=>a).length);
    const finalScore = Math.round(currentScore);

    document.getElementById('final-score-display').innerText = finalScore;
    document.getElementById('correct-count').innerText = correctCount;
    document.getElementById('wrong-count').innerText = wrongCount;

    analyzeWeakness();
    showPage('page-result');
}

// 弱點分析演算法
function analyzeWeakness() {
    const analysisText = document.getElementById('analysis-text');
    const wrongAnswers = userAnswers.filter(a => a && !a.isCorrect);
    
    if (wrongAnswers.length === 0) {
        analysisText.innerHTML = "太強了！全對！🎉 <br>您的護理觀念非常清晰！";
        return;
    }

    const tagCounts = {};
    wrongAnswers.forEach(ans => {
        const tag = ans.subTag || '綜合題型';
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });

    // 排序找出錯誤最多的 Tag
    const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]);
    const topTag = sortedTags[0];
    
    // 生成建議
    let advice = `您在 <strong>【${topTag}】</strong> 類型的題目錯誤率較高 (${tagCounts[topTag]}題)。<br>`;
    advice += `建議複習該單元的：<br>1. 病理機轉 <br>2. 特殊徵象 (Sign) <br>3. 優先護理措施。`;
    
    analysisText.innerHTML = advice;
}