import React from 'react';
import { Search, Wrench, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400 flex items-center">
            <span>ESG</span>
            <img src="/logo.png" alt="ESG 로고" className="h-6 w-auto mx-2 inline-block align-middle" />
            <span>Toolbox</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {['홈', '소개', '도구', '리뷰', '트렌드', '블로그', '연락처'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-green-400">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="relative">
            <Input type="text" placeholder="AI 도구 검색" className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-green-900 to-blue-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center">
            <span>ESG</span>
            <img src="/logo.png" alt="ESG 로고" className="h-10 w-auto mx-3 inline-block align-middle" />
            <span>Toolbox</span>
          </h1>
          <p className="text-xl mb-8">ESG 분야 AI 혁신 도구, 리뷰, 그리고 트렌드</p>
          <p className="text-xl mb-1">100% compatible with ESG데이터플랫폼 & BHR Solution</p>
          <p className="text-xl mb-8"> built by 한국ESG데이터(주)</p>
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full">
            도구 탐색하기
          </Button>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">추천 AI 도구</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 4, 3].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg p-6">
                <Wrench className="text-green-400 mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2">
                  {item === 1 
                    ? "GRI content index 생성기" 
                    : item === 2 
                      ? "컨트로버시 (Controversy) 뉴스 큐레이터" 
                      : item === 3 
                        ? "CDP 대응 입력 내용 초안 생성기" 
                        : item === 4 
                          ? "ESG 데이터 비교 검색기"
                          : `AI 도구 ${item}`}
                </h3>
                <p className="text-gray-400 mb-4">
                  {item === 1 
                    ? "지속가능경영보고서 초안을 업로드하면 GRI Index 를 생성하는 AI 도구입니다." 
                    : item === 2 
                      ? "주요 매체의 컨트로버시 관련 뉴스를 수집·분류·요약해 제공하는 AI 큐레이터입니다."
                      : item === 4 
                        ? "지속가능경영보고서에 공시된 각 기관/기업의 ESG 데이터를 지표별로 비교·검색하는 AI 도구입니다."
                        : "AI 도구의 기능과 역량에 대한 간략한 설명입니다."
                  }
                </p>
                <Button variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white">
                  도구함에 추가
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">전문가 리뷰</h2>
          <div className="flex space-x-8 overflow-x-auto pb-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-700 rounded-lg p-6 min-w-[300px]">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-bold">4.5/5</span>
                </div>
                <h3 className="text-xl font-bold mb-2">AI 도구 리뷰 {item}</h3>
                <p className="text-gray-400 mb-4">주요 포인트를 강조한 리뷰 요약...</p>
                <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">
                  전체 리뷰 보기
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">지금 트렌드</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg p-6">
                <TrendingUp className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">AI 트렌드 기사 {item}</h3>
                <p className="text-gray-400 mb-4">트렌딩 AI 주제나 뉴스의 간략한 요약...</p>
                <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">
                  더 보기
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              {['툴 아이디어 제안하기', '개인정보처리방침', '서비스 약관', '지원'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-green-400">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">팔로우하기</h3>
            <div className="flex space-x-4">
              {['LinkedIn', 'Facebook'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-green-400">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">뉴스레터</h3>
            <p className="text-gray-400 mb-4">최신 AI 뉴스 받아보기</p>
            <div className="flex">
              <Input type="email" placeholder="이메일 주소" className="rounded-l-full" />
              <Button className="bg-green-500 hover:bg-green-600 rounded-r-full">구독하기</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
