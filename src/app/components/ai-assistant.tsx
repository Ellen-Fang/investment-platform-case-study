import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, HelpCircle, Sparkles, ChevronDown } from 'lucide-react';
import { BeeFriendAvatar } from './bee-friend-avatar';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '嗨！我是豐朋友 🐝，你的投資社交平台小幫手！有什麼可以幫助你的嗎？',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 常見問題快捷按鈕
  const quickQuestions = [
    '如何升級到下一個等級？',
    '豐 Bee 怎麼獲得？',
    '什麼是專業貢獻章？',
    '如何解鎖付費文章？',
    '一鍵下單功能在哪？',
    '如何發布文章？',
  ];

  // 自動滾動到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  // 模擬 AI 回覆
  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // 等級相關
    if (lowerMessage.includes('等級') || lowerMessage.includes('升級')) {
      return '要升級到下一個等級，你需要完成指定的任務喔！\n\n你可以到「我的」頁面 → 點擊等級徽章 → 查看「升級任務」，那裡會列出所有需要完成的任務和進度。\n\n每個等級都有不同的解鎖條件，像是閱讀文章、發文、留言等。完成任務後就會自動升級囉！🌱';
    }

    // 豐 Bee 相關
    if (lowerMessage.includes('豐') && (lowerMessage.includes('bee') || lowerMessage.includes('幣'))) {
      return '豐 Bee 是平台的虛擬貨幣，可以用來解鎖付費文章、購買主題等！🐝\n\n獲得方式：\n✅ 每日登入（+3 Bee）\n✅ 發布文章（+10 Bee）\n✅ 發問問題（+2 Bee）\n✅ 發布留言（+1 Bee）\n✅ 完成開戶（+50 Bee）\n✅ 成功邀請好友（+20 Bee）\n\n前往「我的」頁面可以查看詳細的獲取途徑和記錄喔！';
    }

    // 專業貢獻章
    if (lowerMessage.includes('專業') || lowerMessage.includes('貢獻章') || lowerMessage.includes('徽章')) {
      return '專業貢獻章是對優質內容創作者的認可！🏆\n\n當你的文章被其他用戶標記「有幫助」達到一定次數，就會自動獲得徽章：\n\n🥉 銅牌：10+ 次\n🥈 銀牌：30+ 次\n🥇 金牌：50+ 次\n💎 白金：100+ 次\n\n徽章會顯示在你的文章上，提升內容可信度。持續創作優質內容就能獲得更高等級的徽章喔！';
    }

    // 解鎖文章
    if (lowerMessage.includes('解鎖') || lowerMessage.includes('付費') || lowerMessage.includes('鎖')) {
      return '要解鎖付費文章，你需要使用「解鎖金鑰」🔑\n\n步驟：\n1. 前往「商城」頁面\n2. 購買對應價格的解鎖金鑰\n3. 使用豐 Bee 支付\n4. 返回文章頁面即可閱讀\n\n解鎖後的文章可以永久閱讀，不需要重複購買喔！';
    }

    // 一鍵下單
    if (lowerMessage.includes('下單') || lowerMessage.includes('交易')) {
      return '一鍵下單功能讓你可以快速根據文章建議進行交易！📈\n\n使用條件：\n✅ 需達到「啟航家」等級（L3）以上\n✅ 文章需包含相關標的代碼\n✅ 需完成 DAWHO 帳戶驗證\n\n在符合條件的文章底部，你會看到「一鍵下單」按鈕。點擊後可以快速下單，但記得要自己評估風險喔！';
    }

    // 發文相關
    if (lowerMessage.includes('發文') || lowerMessage.includes('發布') || lowerMessage.includes('寫文')) {
      return '發布文章很簡單！✍️\n\n1. 點擊底部導航欄的「+」按鈕\n2. 選擇「發布文章」\n3. 填寫標題、內容、標籤\n4. 選擇文章類別和最低閱讀等級\n5. 系統會自動檢查合規性\n6. 通過檢查後即可發布\n\n注意：平台禁止發布投資建議、明牌、保證獲利等內容。請分享個人經驗和學習心得喔！';
    }

    // DAWHO 驗證
    if (lowerMessage.includes('dawho') || lowerMessage.includes('驗證') || lowerMessage.includes('認證')) {
      return 'DAWHO 官方驗證標章代表你已完成身份驗證，可享有更多權限！✅\n\n驗證步驟：\n1. 前往「我的」頁面\n2. 點擊「DAWHO 驗證」\n3. 填寫真實資料\n4. 上傳身份證明文件\n5. 等待審核（約 1-3 工作日）\n\n驗證後可以使用一鍵下單、提高豐 Bee 獎勵倍率等功能！';
    }

    // 預設回覆
    return '感謝你的提問！我會盡力幫助你的 😊\n\n你可以問我關於：\n• 等級升級和任務\n• 豐 Bee 獲取方式\n• 專業貢獻章規則\n• 文章解鎖和發布\n• 一鍵下單功能\n• DAWHO 驗證\n\n如果需要更詳細的說明，也可以到「幫助中心」查看完整文檔喔！';
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // 添加用戶消息
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputText.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // 模擬 AI 思考時間
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(inputText.trim()),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 800); // 0.8-1.6秒隨機延遲
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    // 自動發送
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <>
      {/* 浮動按鈕 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 w-16 h-16 bg-gradient-to-br from-primary to-[#b85f40] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-40 flex items-center justify-center group"
          style={{
            boxShadow: '0 8px 24px rgba(217, 119, 87, 0.4), 0 4px 12px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* 脈衝動畫 */}
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
          
          {/* 圖示 */}
          <div className="relative w-10 h-10">
            <BeeFriendAvatar className="w-full h-full" />
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white"></div>
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            豐朋友小幫手
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900"></div>
          </div>
        </button>
      )}

      {/* 聊天視窗 */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] h-[600px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-primary/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-[#b85f40] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                  <BeeFriendAvatar className="w-full h-full" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">豐朋友</h3>
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-xs text-white/80">AI 小幫手・線上服務中</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 訊息列表 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" style={{ WebkitOverflowScrolling: 'touch' }}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-primary text-white rounded-br-sm'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm'
                  }`}
                  style={{
                    boxShadow: message.role === 'assistant' ? '0 1px 3px rgba(0, 0, 0, 0.08)' : 'none',
                  }}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  <span
                    className={`text-xs mt-1 block ${
                      message.role === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {/* AI 正在輸入... */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* 常見問題快捷按鈕（只在一開始顯示） */}
            {messages.length === 1 && !isTyping && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>常見問題</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-left px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 輸入框 */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-end gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="輸入你的問題..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="w-11 h-11 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              豐朋友由 AI 驅動，回答僅供參考
            </p>
          </div>
        </div>
      )}
    </>
  );
}