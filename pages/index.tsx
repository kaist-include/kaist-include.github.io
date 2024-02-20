import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import SectionTitle from '../components/frontpage/section-title'
import Config from '../libs/config'

import { BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import Section from '../components/frontpage/section'
import SectionSubtitle from '../components/frontpage/section-subtitle'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Include</title>
        <meta name='description' content='카이스트 동아리 인클루드' />
        <meta name='keywords' content='카이스트,KAIST,Include,인클루드' />
      </Head>
      <div className='w-full h-full max-w-5xl mx-auto px-4 pt-4'>
        <SectionTitle>about</SectionTitle>
        <Section>
          Include는 인공지능 분야에 대해 동아리원끼리 서로 돕고 토의하며 성장해나가는 자유로운 분위기를 추구하는, AI 중심의 프로젝트와 AI 관련 다양한 학술 활동 및 교육을 진행하는 KAIST 동아리입니다.<br />
          <br />
          <Link href={Config.github} passHref>
            <a><BsGithub className='inline' /> Github</a>
          </Link>
          &nbsp;/&nbsp;
          <Link href={`mailto:${Config.staffMail}`} passHref>
            <a><AiOutlineMail className='inline' /> Mail</a>
          </Link>
        </Section>
        <hr className='border-incl-200 max-w-2xl mx-auto my-3' />
        <SectionTitle>activity</SectionTitle>
        <Section>
          <SectionSubtitle>study & competition</SectionSubtitle>
          지난 년도에는 [Dive into DeepLearning]으로 진행되는 딥러닝 스터디, 신입생이나 인공지능을 잘 모르는 분들을 위해 머신러닝 스터디를 진행했습니다.
          스터디 이외에도 동아리원들끼리 동아리 내부 또는 외부의 공모전이나 대회를 개최하거나 참여합니다.

          <div className='py-2' />
          <SectionSubtitle>project</SectionSubtitle>
          진행하고 싶은 프로젝트가 있다면 직접 사람을 모아 진행할 수 있습니다. 정모 시간에 발의를 통해 프로젝트를 홍보해 사람들을 모을 수 있습니다.

          <div className='py-2' />
          <SectionSubtitle>regular_meeting</SectionSubtitle>
          매주 수요일 8시에 세미나와 다른 행사 등의 정모가 있습니다. 태울관 세미나실에서 진행됩니다. 그 외, 프로젝트와 스터디 등의 활동 공유가 정모와 별개로 프로젝트 별로 진행됩니다.

        </Section>
        <hr className='border-incl-200 max-w-2xl mx-auto my-3' />
        <SectionTitle>recruit</SectionTitle>
        {
          (Config.recruit === null) ?
            <Section>
              현재 리쿠르팅을 진행하고 있지 않습니다. Include에서는 매 학기 초에 새로운 동아리원을 뽑으니 다음에 다시 찾아와주세요.
            </Section>
            :
            <Section>
              동아리에서 인공지능에 관심이 있는 학우들을 모집합니다!
              부담 없이 다음 버튼을 눌러 지원하세요.<br />
              <Link href={Config.recruit} passHref>
                <button className='mt-4 p-2 border-x-4 border-y-1 rounded-lg bg-gray-100 border-gray-100 shadow-md w-full'>지원하기</button>
              </Link>
            </Section>
        }
      </div>
    </>
  )
}

export default Index
