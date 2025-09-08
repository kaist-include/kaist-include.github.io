import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HiX, HiSparkles, HiUsers } from 'react-icons/hi'
import Config from '../libs/config'

interface RecruitmentPopupProps {
  isVisible: boolean
  onClose: () => void
}

const RecruitmentPopup: React.FC<RecruitmentPopupProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-fadeIn"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="rounded-2xl shadow-2xl max-w-md w-full mx-4 pointer-events-auto transform animate-fadeInUp overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
              aria-label="닫기"
            >
              <HiX className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-white bg-opacity-20 rounded-full p-2">
                <HiSparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">새로운 멤버 모집!</h3>
            </div>
            <p className="text-blue-100 text-sm">Include가 함께할 동료를 찾고 있어요</p>
          </div>

          {/* Content */}
          <div className="bg-white p-6 rounded-b-2xl">
            <div className="flex items-start space-x-3 mb-6">
              <div className="bg-blue-50 rounded-full p-2 mt-1">
                <HiUsers className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">인공지능에 관심이 있으신가요?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Include에서 AI 프로젝트와 스터디를 통해 함께 성장할 동아리원을 모집하고 있습니다. 
                  초보자도 환영합니다!
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {Config.recruit && (
                <Link href={Config.recruit} passHref>
                  <a className="btn-primary text-center flex-1 hover-lift inline-block">
                    지원하기
                  </a>
                </Link>
              )}
              <button
                onClick={onClose}
                className="btn-outline flex-1 hover-lift"
              >
                나중에 보기
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              매 학기 초에 새로운 동아리원을 모집합니다
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

const RecruitmentPopupContainer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show popup if recruitment is active
    if (!Config.showRecruitmentPopup || !Config.recruit) return

    // Check if user has dismissed the popup before
    const dismissed = localStorage.getItem('recruitment-popup-dismissed')
    const dismissedTime = dismissed ? parseInt(dismissed) : 0
    const oneWeek = 7 * 24 * 60 * 60 * 1000 // 1 week in milliseconds
    
    // Show popup if not dismissed or if a week has passed since dismissal
    if (!dismissed || Date.now() - dismissedTime > oneWeek) {
      // Add a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Remember that user dismissed the popup
    localStorage.setItem('recruitment-popup-dismissed', Date.now().toString())
  }

  return (
    <RecruitmentPopup 
      isVisible={isVisible} 
      onClose={handleClose} 
    />
  )
}

export default RecruitmentPopupContainer 