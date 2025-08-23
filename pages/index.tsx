import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import SectionTitle from '../components/frontpage/section-title'
import SponsorGrid from '../components/frontpage/sponsor-grid'
import VantaBackground from '../components/vanta-background'
import ScrollAnimation from '../components/scroll-animation'
import Config from '../libs/config'
import sponsors from '../libs/sponsors'
import { HiChevronDown } from 'react-icons/hi'

import Section from '../components/frontpage/section'
import SectionSubtitle from '../components/frontpage/section-subtitle'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Include: 카이스트 AI 학술동아리</title>
        <meta name='description' content='카이스트 동아리 인클루드 - AI 중심의 프로젝트와 학술 활동을 진행하는 KAIST 동아리' />
        <meta name='keywords' content='카이스트,KAIST,Include,인클루드,AI,인공지능,동아리' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://include.kaist.ac.kr/" />
        <meta property="og:title" content="Include: 카이스트 AI 학술동아리" />
        <meta property="og:description" content="카이스트의 유일한 인공지능 학술 동아리 - AI 중심의 프로젝트와 학술 활동을 진행하는 KAIST 동아리" />
        <meta property="og:image" content="https://include.kaist.ac.kr/meta.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://include.kaist.ac.kr/" />
        <meta property="twitter:title" content="Include: 카이스트 AI 학술동아리" />
        <meta property="twitter:description" content="카이스트의 유일한 인공지능 학술 동아리 - AI 중심의 프로젝트와 학술 활동을 진행하는 KAIST 동아리" />
        <meta property="twitter:image" content="https://include.kaist.ac.kr/meta.png" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Vanta Background - Full Screen */}
      <div className='text-center animate-fadeInUp relative overflow-hidden h-screen flex items-center justify-center' style={{ backgroundColor: '#acccea' }}>
        {/* Vanta.js animated background - full screen */}
        <VantaBackground />
        
        {/* Natural radial backdrop blur overlay */}
        <div 
          className='absolute inset-0 z-5'
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)',
            backdropFilter: 'blur(0px)',
          }}
        />
        <div 
          className='absolute inset-0 z-6'
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, transparent 20%, rgba(255,255,255,0.05) 60%)',
            backdropFilter: 'blur(2px)',
          }}
        />
        <div 
          className='absolute inset-0 z-7'
          style={{
            background: 'radial-gradient(circle at center, transparent 40%, transparent 60%)',
            backdropFilter: 'blur(4px)',
          }}
        />
        <div 
          className='absolute z-8'
          style={{
            background: 'radial-gradient(ellipse 800px 400px at center, transparent 0%, transparent 100%)',
            backdropFilter: 'blur(8px)',
            width: '800px',
            height: '400px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Title content */}
        <div className='relative z-10 px-6 max-w-6xl mx-auto'>
          <h1 className='text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-accent mb-6 font-mono tracking-tight leading-none'>
            Include
          </h1>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-light text-accent max-w-4xl mx-auto tracking-wide mb-8 leading-relaxed opacity-90'>
            카이스트의 유일한 인공지능 학술 동아리
          </h2>
          <p className='text-lg md:text-xl lg:text-2xl font-normal text-accent max-w-3xl mx-auto leading-relaxed opacity-80'>
            AI 중심의 프로젝트와 학술 활동을 진행하는 KAIST 동아리
          </p>
        </div>

        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-0 right-0 z-20 animate-bounce'>
          <div className='flex flex-col items-center gap-2 mx-auto'>
            <span className='text-accent text-sm font-medium opacity-80'>더 알아보기</span>
            <HiChevronDown className='text-accent text-3xl opacity-60' />
          </div>
        </div>
      </div>

      <div className='max-w-4xl mx-auto px-6 py-12'>
        {/* About Section */}
        <ScrollAnimation animation='fadeInUp' delay={100}>
          <div className='mb-16'>
            <SectionTitle>About</SectionTitle>
            <div className='section-border'>
              <Section>
                <p className='text-lg font-normal text-gray-700 leading-relaxed'>
                  <span className="text-accent font-semibold">Include</span>는 인공지능 분야에 대해 동아리원끼리 서로 돕고 토의하며 성장해나가는 자유로운 분위기를 추구하는, AI 중심의 프로젝트와 AI 관련 다양한 학술 활동 및 교육을 진행하는 KAIST 동아리입니다. 스터디와 세미나, 프로젝트, 대회 참여를 통해 지식을 나누고 실전 경험을 쌓습니다. 교수님·선배 초청 강연과 외부 교류도 정기적으로 진행합니다.
                </p>
              </Section>
            </div>
          </div>
        </ScrollAnimation>

        {/* Activity Section */}
        <ScrollAnimation animation='fadeInUp' delay={200}>
          <div className='mb-16'>
            <SectionTitle>Activity</SectionTitle>
            
            <div className='space-y-12'>
              
              {/* Study & Competition */}
              <ScrollAnimation animation='slideInLeft' delay={100}>
                <div className='section-border'>
                  <SectionSubtitle>Study & Competition</SectionSubtitle>
                  <Section>
                    <p className='font-normal text-gray-700 leading-relaxed mb-4'>
                    신입과 입문자를 위한 ML 기초 스터디와 분야별 논문 스터디를 상시 운영합니다. 필요에 따라 동아리 내부 챌린지나 외부 공모전 또는 대회에 팀을 꾸려 참가합니다.
                    </p>
                    <div className='mt-4'>
                      <p className='font-medium text-gray-800 mb-2'>지난 스터디 예시:</p>
                      <ul className='list-disc list-inside space-y-1 text-gray-700 ml-2'>
                        <li>Computer Vision 세미나 </li>
                        <li>Natural Language Processing 세미나</li>
                        <li>딥러닝 스터디</li>
                        <li>RAG·AI 에이전트 실전 입문</li>
                        <li>핸즈온 생성형 AI</li>
                        <li>머신러닝 기초 스터디</li>
                      </ul>
                    </div>
                  </Section>
                </div>
              </ScrollAnimation>

              {/* Project */}
              <ScrollAnimation animation='slideInRight' delay={200}>
                <div className='section-border'>
                  <SectionSubtitle>Project</SectionSubtitle>
                  <Section>
                    <p className='font-normal text-gray-700 leading-relaxed'>
                      관심 주제로 자유롭게 프로젝트를 제안하고 팀원을 모집할 수 있습니다. 정기 모임에서 프로젝트를 소개해 참여자를 모으고, 서비스 개발이나 오픈소스 기여, 연구 실험 등으로 확장합니다.
                    </p>
                  </Section>
                </div>
              </ScrollAnimation>

              {/* Regular Meeting */}
              <ScrollAnimation animation='slideInLeft' delay={300}>
                <div className='section-border'>
                  <SectionSubtitle>Regular Meeting</SectionSubtitle>
                  <Section>
                    <p className='font-normal text-gray-700 leading-relaxed'>
                      매주 수요일 7시에 정모가 열립니다. 최신 연구 강연, 현직자·선배 특강, 기술 세미나, 연구 공유, 미니 프로젝트 발표, 내부 대회 등의 프로그램을 진행합니다. 스터디·프로젝트 소식 공유도 함께 이뤄집니다.
                    </p>
                  </Section>
                </div>
              </ScrollAnimation>

              {/* Networking & Events */}
              <ScrollAnimation animation='slideInRight' delay={200}>
                <div className='section-border'>
                  <SectionSubtitle>Networking & Events</SectionSubtitle>
                  <Section>
                    <p className='font-normal text-gray-700 leading-relaxed'>
                      학기별 OT와 MT를 통해 동아리원 간 친목을 다지고, 정기 networking 이벤트로 다양한 배경의 사람들과 교류합니다. 졸업생과의 만남이나 타 대학 AI 동아리와의 연합 활동도 진행할 예정입니다.
                    </p>
                  </Section>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>

        {/* Sponsors Section */}
        <ScrollAnimation animation='fadeInUp' delay={150}>
          <div className='mb-16'>
            <SectionTitle>Sponsors</SectionTitle>
            <div className='section-border'>
              <SponsorGrid sponsors={sponsors} />
            </div>
          </div>
        </ScrollAnimation>

        {/* Recruit Section */}
        <ScrollAnimation animation='fadeInUp' delay={100}>
          <div>
            <SectionTitle>Recruit</SectionTitle>
            <div className='section-border'>
              {
                (Config.recruit === null) ?
                  <Section>
                    <p className='font-normal text-gray-700 text-lg leading-relaxed'>
                      현재 리쿠르팅을 진행하고 있지 않습니다. Include에서는 매 학기 초에 새로운 동아리원을 뽑으니 다음에 다시 찾아와주세요.
                    </p>
                  </Section>
                  :
                  <Section>
                    <p className='font-normal text-gray-700 text-lg leading-relaxed mb-6'>
                      동아리에서 인공지능에 관심이 있는 학우들을 모집합니다!
                      부담 없이 다음 버튼을 눌러 지원하세요.
                    </p>
                    <div className='text-center'>
                      <Link href={Config.recruit} passHref>
                        <a className='btn-primary hover-lift inline-block text-lg px-8 py-3 font-semibold tracking-wide'>
                          지원하기
                        </a>
                      </Link>
                    </div>
                  </Section>
              }
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}

export default Index
