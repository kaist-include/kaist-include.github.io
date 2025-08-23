import { NextPage } from 'next'
import Config from '../../libs/config'

interface Sponsor {
  id: number
  name: string
  logo: string
  website: string
}

interface Props {
  sponsors: Sponsor[]
}

const SponsorGrid: NextPage<Props> = ({ sponsors }) => {
  return (
    <div>
      <p className='font-normal text-gray-700 leading-relaxed mb-8'>
        Include을 지원해주시는 기업들을 소개합니다. 이들의 지원 덕분에 더 나은 활동을 펼칠 수 있습니다.
      </p>

      {sponsors.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className='group'>
              <a 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='block p-6 bg-white rounded-lg border border-gray-200 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-md'
              >
                <div className='aspect-[3/2] flex items-center justify-center mb-4'>
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                    className='max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-110' 
                  />
                </div>
                <h4 className='text-center font-medium text-gray-800 group-hover:text-accent transition-colors duration-300'>
                  {sponsor.name}
                </h4>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className='text-center py-12 bg-gray-50 rounded-lg border border-gray-200'>
          <p className='font-medium text-gray-600 mb-2'>현재 후원사 정보를 준비 중입니다.</p>
          <p className='font-normal text-gray-500 text-sm'>곧 업데이트될 예정입니다.</p>
        </div>
      )}

      <div className='mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200'>
        <p className='text-center font-medium text-gray-700 mb-2'>후원에 관심이 있으신가요?</p>
        <p className='text-center font-normal text-gray-600 text-sm'>Include과 함께 성장하고 싶은 기업들의 연락을 기다립니다.</p>
        <div className='text-center mt-4'>
          <a 
            href={`mailto:${Config.staffMail}?subject=Sponsorship%20Inquiry`} 
            className='btn-outline hover-lift inline-block font-medium'
          >
            후원 문의하기
          </a>
        </div>
      </div>
    </div>
  )
}

export default SponsorGrid 