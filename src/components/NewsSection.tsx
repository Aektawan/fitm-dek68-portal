
import React from 'react';
import { AlertTriangle, Users, Wifi } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      type: 'alert',
      icon: AlertTriangle,
      iconColor: 'text-red-500',
      title: 'ด่วนที่สุด! แจ้งเตือนภัยความมั่นคงปลอดภัยไซเบอร์',
      subtitle: 'แจ้งเตือนการโจมตีทางไซเบอร์...',
      date: '23/06/2025',
      bgColor: 'bg-red-50 border-red-200'
    },
    {
      id: 2,
      type: 'welcome',
      icon: Users,
      iconColor: 'text-blue-500',
      title: 'ยินดีต้อนรับน้องใหม่ #DEK68',
      subtitle: 'เตรียมตัวเข้าสู่รั้วมหาวิทยาลัย...',
      date: '28/05/2025',
      bgColor: 'bg-blue-50 border-blue-200',
      hasStudents: true
    },
    {
      id: 3,
      type: 'wifi',
      icon: Wifi,
      iconColor: 'text-green-500',
      title: 'การเข้าใช้งานเครือข่าย FREE WIFI',
      subtitle: 'คำแนะนำการเชื่อมต่อ Wi-Fi ฟรี',
      date: '27/02/2025',
      bgColor: 'bg-green-50 border-green-200'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">ข่าวสำคัญ</h2>
          <a href="#all-news" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
            ดูทั้งหมด
            <span className="ml-2">›</span>
          </a>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`${item.bgColor} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`${item.iconColor} bg-white p-3 rounded-full shadow-sm`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Special content for welcome card */}
                {item.hasStudents && (
                  <div className="mb-4 flex justify-center">
                    <div className="flex space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-8 h-10 bg-blue-600 rounded-full relative">
                          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-200 rounded-full"></div>
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-5 bg-white rounded-sm"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-gray-600 mb-4">{item.subtitle}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline"
                  >
                    อ่านเพิ่มเติม
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
