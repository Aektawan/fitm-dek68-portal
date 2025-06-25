
import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface QuickReply {
  id: string;
  text: string;
  action: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'สวัสดีค่ะ 👋 ฉันคือ FITM Bot ผู้ช่วยแนะนำหลักสูตรและการวางแผนการเรียน\n\nฉันสามารถช่วยคุณได้ในเรื่อง:\n📚 แนะนำหลักสูตรที่เหมาะสม\n📋 วางแผนการเรียน\n💡 ข้อมูลภาควิชาและอาชีพ\n\nคุณสนใจเรื่องอะไรเป็นพิเศษคะ?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies: QuickReply[] = [
    { id: 'courses', text: '📚 ดูหลักสูตรทั้งหมด', action: 'show_courses' },
    { id: 'planning', text: '📋 วางแผนการเรียน', action: 'academic_planning' },
    { id: 'career', text: '💼 ข้อมูลอาชีพ', action: 'career_info' },
    { id: 'admission', text: '📝 การสมัครเรียน', action: 'admission_info' }
  ];

  const courseData = {
    '📊 วิศวกรรมอุตสาหการ': {
      description: 'เรียนด้านการออกแบบ วิเคราะห์ และปรับปรุงระบบการผลิต',
      career: 'วิศวกรอุตสาหการ, ผู้จัดการโรงงาน, นักวิเคราะห์ระบบ',
      subjects: 'คณิตศาสตร์, ฟิสิกส์, สถิติ, การจัดการการผลิต'
    },
    '💻 เทคโนโลยีสารสนเทศ': {
      description: 'เรียนด้านการพัฒนาซอฟต์แวร์ ระบบเครือข่าย และการจัดการข้อมูล',
      career: 'โปรแกรมเมอร์, ผู้ดูแลระบบ, นักวิเคราะห์ระบบ',
      subjects: 'การเขียนโปรแกรม, ฐานข้อมูล, เครือข่าย, ปัญญาประดิษฐ์'
    },
    '🏭 การจัดการอุตสาหกรรม': {
      description: 'เรียนด้านการจัดการองค์กร การควบคุมคุณภาพ และการปรับปรุงประสิทธิภาพ',
      career: 'ผู้จัดการโครงการ, นักวิเคราะห์ธุรกิจ, ที่ปรึกษาการจัดการ',
      subjects: 'การจัดการ, เศรษฐศาสตร์, สถิติ, การควบคุมคุณภาพ'
    },
    '🔬 เทคโนโลยีชีวภาพ': {
      description: 'เรียนด้านการประยุกต์ใช้เทคโนโลยีในด้านชีววิทยาและการแพทย์',
      career: 'นักวิจัย, นักวิทยาศาสตร์, ผู้เชี่ยวชาญด้านชีวเทคโนโลยี',
      subjects: 'ชีววิทยา, เคมี, จุลชีววิทยา, พันธุวิศวกรรม'
    }
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('หลักสูตร') || message.includes('สาขา') || message.includes('เรียน')) {
      return `📚 **หลักสูตรในคณะ FITM**\n\n${Object.entries(courseData).map(([course, info]) => 
        `${course}\n${info.description}\n💼 อาชีพ: ${info.career}\n`
      ).join('\n')}\nต้องการข้อมูลเพิ่มเติมสาขาไหนคะ?`;
    }
    
    if (message.includes('วางแผน') || message.includes('ปีการศึกษา')) {
      return `📋 **การวางแผนการเรียน**\n\n📅 **ปี 1-2**: วิชาพื้นฐาน\n- คณิตศาสตร์ วิทยาศาสตร์\n- ภาษาอังกฤษ คอมพิวเตอร์\n\n📅 **ปี 3-4**: วิชาเฉพาะสาขา\n- โครงงานจบการศึกษา\n- ฝึกงานในสถานประกอบการ\n\nอยากทราบแผนการเรียนสาขาไหนเป็นพิเศษคะ?`;
    }
    
    if (message.includes('อาชีพ') || message.includes('งาน') || message.includes('ทำงาน')) {
      return `💼 **โอกาสในการทำงาน**\n\n🏢 **ภาคเอกชน**\n- บริษัทเทคโนโลยี\n- โรงงานอุตสาหกรรม\n- ธุรกิจสตาร์ทอัพ\n\n🏛️ **ภาครัฐ**\n- กรมส่งเสริมอุตสาหกรรม\n- การไฟฟ้าฝ่ายผลิต\n- มหาวิทยาลัยและสถาบันวิจัย\n\nสนใจสาขาอาชีพไหนเป็นพิเศษคะ?`;
    }
    
    if (message.includes('สมัคร') || message.includes('เข้าเรียน') || message.includes('รับสมัคร')) {
      return `📝 **การสมัครเรียน DEK68**\n\n📅 **กำหนดการสำคัญ**\n- รับสมัคร: มกราคม - มีนาคม 2568\n- สอบ: เมษายน - พฤษภาคม 2568\n- ประกาศผล: มิถุนายน 2568\n\n📋 **เอกสารที่ต้องเตรียม**\n- ใบแสดงผลการเรียน\n- หลักฐานการสำเร็จการศึกษา\n- บัตรประชาชน\n\nต้องการข้อมูลเพิ่มเติมเรื่องการสมัครไหมคะ?`;
    }
    
    if (message.includes('ค่าเล่าเรียน') || message.includes('ราคา') || message.includes('เงิน')) {
      return `💰 **ค่าใช้จ่าย**\n\n📚 **ค่าเล่าเรียนต่อภาคเรียน**\n- ประมาณ 15,000 - 20,000 บาท\n\n💳 **ค่าใช้จ่ายเพิ่มเติม**\n- หนังสือ: 3,000 - 5,000 บาท/ปี\n- อุปกรณ์การเรียน: 2,000 - 3,000 บาท/ปี\n\n🎓 **ทุนการศึกษา**\n- ทุนนักเรียนเก่ง\n- ทุนช่วยเหลือนักเรียนยากจน\n- ทุนจากหน่วยงานภายนอก\n\nสนใจข้อมูลทุนการศึกษาไหมคะ?`;
    }
    
    // Check for specific course inquiry
    for (const [course, info] of Object.entries(courseData)) {
      if (message.includes(course.toLowerCase()) || 
          message.includes('วิศวกรรม') && course.includes('วิศวกรรม') ||
          message.includes('ไอที') && course.includes('เทคโนโลยีสารสนเทศ') ||
          message.includes('จัดการ') && course.includes('การจัดการ') ||
          message.includes('ชีวภาพ') && course.includes('เทคโนโลยีชีวภาพ')) {
        return `📖 **${course}**\n\n${info.description}\n\n📚 **วิชาที่เรียน**\n${info.subjects}\n\n💼 **อาชีพที่เกี่ยวข้อง**\n${info.career}\n\nต้องการข้อมูลเพิ่มเติมเรื่องอะไรคะ?`;
      }
    }
    
    return `ขอบคุณสำหรับคำถามค่ะ 😊\n\nฉันพร้อมช่วยเหลือในเรื่อง:\n📚 หลักสูตรและสาขาวิชา\n📋 การวางแผนการเรียน\n💼 โอกาสในการทำงาน\n📝 การสมัครเรียน\n\nมีคำถามอื่นๆ เกี่ยวกับ FITM ไหมคะ?`;
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        isBot: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputText('');
      setIsTyping(true);
      
      // Simulate bot response with delay
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: getBotResponse(inputText),
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleQuickReply = (action: string) => {
    let response = '';
    switch (action) {
      case 'show_courses':
        response = 'อยากทราบข้อมูลหลักสูตรทั้งหมด';
        break;
      case 'academic_planning':
        response = 'ช่วยวางแผนการเรียนหน่อย';
        break;
      case 'career_info':
        response = 'อยากทราบข้อมูลอาชีพ';
        break;
      case 'admission_info':
        response = 'ข้อมูลการสมัครเรียน';
        break;
    }
    
    const fakeEvent = { target: { value: response } } as React.ChangeEvent<HTMLInputElement>;
    setInputText(response);
    setTimeout(() => handleSendMessage(), 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-fitm-blue to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 ${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center group`}
      >
        <Bot className="w-7 h-7" />
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-fitm-blue to-blue-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-semibold text-lg">FITM Bot</h3>
                <p className="text-xs text-blue-100">ที่ปรึกษาการเรียน</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[85%]`}>
                  {message.isBot && (
                    <div className="w-8 h-8 bg-fitm-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-white text-gray-800 rounded-bl-sm shadow-sm border'
                        : 'bg-fitm-blue text-white rounded-br-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isBot ? 'text-gray-500' : 'text-blue-100'
                    }`}>
                      {message.timestamp.toLocaleTimeString('th-TH', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  {!message.isBot && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-fitm-blue rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-sm border">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 bg-gray-50 border-t">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply.id}
                  onClick={() => handleQuickReply(reply.action)}
                  className="text-xs bg-white hover:bg-fitm-blue hover:text-white transition-colors px-3 py-1 rounded-full border border-gray-200 text-gray-600"
                >
                  {reply.text}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="พิมพ์คำถามเกี่ยวกับหลักสูตรหรือการเรียน..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-fitm-blue text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping}
                className="bg-fitm-blue text-white p-2 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
