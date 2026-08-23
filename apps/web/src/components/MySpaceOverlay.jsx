import React, { useState, useEffect } from 'react';

const MySpaceOverlay = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    setVisitorCount(Math.floor(Math.random() * 90000) + 10000);
    const date = new Date();
    setTodayDate(date.toLocaleDateString());
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[100] retro-bg-pattern overflow-y-auto overflow-x-hidden"
      style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif' }}
    >
      <div className="max-w-4xl mx-auto p-4 min-h-screen flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center my-8 retro-sparkle">
          <h1 
            className="text-5xl md:text-7xl font-black tracking-widest"
            style={{ 
              color: '#FF00FF', 
              textShadow: '3px 3px 0 #00FFFF, -1px -1px 0 #00FF00',
              fontFamily: 'Impact, Charcoal, sans-serif'
            }}
          >
            DEREK'S AWESOME SITE!!!
          </h1>
        </div>

        {/* Marquee */}
        <div className="w-full bg-[#000080] border-4 border-dashed border-[#00FF00] p-2 mb-8">
          <marquee 
            className="text-[#FFFF00] text-xl font-bold"
            style={{ textShadow: '1px 1px 2px #FF0000', animationDuration: '10s' }}
          >
            ♫ Now Playing: Linkin_Park_In_The_End.mid ♫ Welcome to my page! Leave a comment in my guestbook! ♫
          </marquee>
        </div>

        {/* Warning */}
        <div className="retro-blink bg-red-600 text-white p-2 border-2 border-yellow-400 font-bold mb-8 text-center w-full max-w-md">
          ⚠️ WARNING: This page has auto-play music! Click to enable sound ⚠️
        </div>

        {/* Main Content Area - Nested Tables */}
        <table width="100%" border="1" cellPadding="10" cellSpacing="0" className="bg-black/80 mb-8" style={{ borderColor: '#FF00FF' }}>
          <tbody>
            <tr>
              {/* Left Sidebar */}
              <td width="30%" valign="top" className="border-r-4 border-[#FF00FF]">
                <div className="text-center mb-6">
                  <h2 className="text-[#00FF00] text-2xl font-bold mb-2 underline">Navigation</h2>
                  <ul className="space-y-2 text-[#00FFFF] font-bold">
                    <li><a href="#" className="hover:text-[#FF00FF] underline">~* Home *~</a></li>
                    <li><a href="#" className="hover:text-[#FF00FF] underline">~* About Me *~</a></li>
                    <li><a href="#" className="hover:text-[#FF00FF] underline">~* Photos *~</a></li>
                    <li><a href="#" className="hover:text-[#FF00FF] underline">~* Top 8 Friends *~</a></li>
                    <li><a href="#" className="hover:text-[#FF00FF] underline">~* Guestbook *~</a></li>
                  </ul>
                </div>

                <div className="text-center border-t-2 border-dashed border-[#FFFF00] pt-4">
                  <h3 className="text-[#FF00FF] font-bold mb-2">Visitor Count:</h3>
                  <div className="bg-black border-2 border-[#00FF00] p-2 inline-block">
                    <span className="text-[#00FFFF] font-mono text-2xl tracking-widest">{visitorCount}</span>
                  </div>
                </div>
              </td>

              {/* Right Content */}
              <td width="70%" valign="top">
                <table width="100%" border="1" cellPadding="5" style={{ borderColor: '#FF00FF' }}>
                  <tbody>
                    <tr>
                      <td colSpan="2" className="bg-[#FF00FF]/20 text-center">
                        <h2 className="text-[#00FFFF] text-3xl font-bold" style={{ textShadow: '2px 2px #FF00FF' }}>
                          About Me
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td width="40%" align="center" valign="middle">
                        <div className="w-32 h-32 bg-gray-800 border-4 border-[#00FF00] flex items-center justify-center retro-sparkle mx-auto">
                          <span className="text-[#FF00FF] text-xs text-center">Image<br/>Loading...</span>
                        </div>
                      </td>
                      <td width="60%" className="text-[#00FF00] text-lg leading-relaxed">
                        Hey! I'm Derek. I like logistics, coding, and building cool stuff on the web. 
                        <br/><br/>
                        <span className="text-[#FFFF00]">Mood:</span> Stoked! 🤘<br/>
                        <span className="text-[#FFFF00]">Location:</span> The Internet 🌐
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="my-6 text-center">
                  <div className="h-2 w-full bg-gradient-to-r from-[#FF00FF] via-[#00FFFF] to-[#00FF00] retro-sparkle"></div>
                </div>

                <div className="text-center">
                  <h3 className="text-[#FF00FF] text-2xl font-bold mb-4">My Interests</h3>
                  <p className="text-[#00FFFF]">
                    HTML, CSS, JavaScript, React, Logistics, Writing Books, Baseball, Hanging out with friends!
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <div className="text-center text-[#00FF00] font-bold mt-auto pb-8">
          <p>Best viewed in Internet Explorer 6.0 at 800x600 resolution.</p>
          <p className="mt-2">Last Updated: {todayDate}</p>
        </div>

      </div>
    </div>
  );
};

export default MySpaceOverlay;