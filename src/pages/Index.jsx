import React, { useState } from "react";
import { Search, Wrench, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [showAllArticles, setShowAllArticles] = useState(false);

  const articles = [
    {
      id: 1,
      title: "AI시대 ESG경영: 인공지능(AI)을 활용한 지속가능성 전략 7가지",
      summary:
        "AI 기술이 불러온 산업 혁명은 기업 경영의 패러다임을 근본적으로 바꾸고 있다. 특히, 기업의 지속가능성을 평가하는 핵심 지표인 ESG(환경·사회·지배구조)경영에 AI를 접목하는 것은 더 이상 선택이 아닌 필수적인 생존 전략이 되고있다.",
      image: "/images/article_image1.png",
      url: "https://koreabizreview.com/detail.php?number=6479&thread=23r02",
    },
    {
      id: 2,
      title: "[기고] AI, ESG와 함께 혁신의 두 축 이뤄야",
      summary:
        "오늘날 인공지능(AI)은 더 이상 일부 IT 기업이나 연구소만의 영역이 아니다. 제조, 금융, 물류, 마케팅, 인사, 재무 등 기업과 공공조직의 거의 모든 부문에서 이미 AI가 변화를 이끌고 있다. AI는 단순히 업무를 자동화하는 도구를 넘어 시장 예측, 고객 분석, 의사결정 지원, 신제품 개발까지 기업 경쟁력의 핵심 요소로 자리 잡았다.",
      image: "/images/article_image2.jpg",
      url: "https://www.newsworks.co.kr/news/articleView.html?idxno=808608",
    },
    {
      id: 3,
      title: "SKT, '대한민국 사회적가치 페스타'서 AI기반 ESG활동 소개",
      summary:
        "SK텔레콤은 오는 25일부터 코엑스에서 개최되는 '제 2회 대한민국 사회적가치 페스타'에 참가해 환경·사회·지배구조(ESG) 비전 'DO THE GOOD AI'를 실천하는 전시와 다양한 프로그램을 선보인다고 24일 밝혔다.",
      image: "/images/article_image3.jpg",
      url: "https://www.etnews.com/20250824000039",
    },
    {
      id: 4,
      title: "AI, 'ESG' 문제해결사로 떴다",
      summary:
        "인공지능(AI) 기술이 지속가능성(ESG) 경영의 핵심 동력으로 빠르게 부상하고 있습니다. 방대하고 복잡한 ESG 정보를 효율적으로 분석하고 관리하는 데 AI의 역할이 커지면서, 글로벌 기업들은 AI를 활용한 다양한 지속가능성 실천 사례를 선보이고 있습니다.",
      image: "/images/article_image4.jpg",
      url: "https://www.netzeronews.kr/news/articleView.html?idxno=2877",
    },
    {
      id: 5,
      title: "유엔글로벌콤팩트 한국협회 'ESG에 AI·디지털 접목, 실행력 높여야'",
      summary:
        "유엔글로벌콤팩트(UNGC) 한국협회가 19일 서울 더 플라자 호텔에서 'ESG 거버넌스 리더십 조찬간담회'를 개최했다. 이번 간담회는 국내 기업이 글로벌 변화에 선제적으로 대응하고, ESG를 이사회와 경영 전략에 내재화하는 방안을 모색하기 위해 마련됐다.",
      image: "/images/article_image5.jpg",
      url: "https://magazine.hankyung.com/business/article/202508198117b",
    },
  ];

  const displayedArticles = showAllArticles ? articles : articles.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400 flex items-center">
            <span>ESG</span>
            <img
              src="/logo.png"
              alt="ESG 로고"
              className="h-[42px] w-auto mx-0 inline-block align-middle [filter:brightness(0)_saturate(100%)_invert(64%)_sepia(49%)_saturate(535%)_hue-rotate(93deg)_brightness(93%)_contrast(90%)]"
            />
            <span>Toolbox</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {["홈", "소개", "도구", "리뷰", "트렌드", "블로그", "연락처"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-green-400">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="relative">
            <Input
              type="text"
              placeholder="AI 도구 검색"
              className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-green-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4 flex items-center justify-center md:justify-start">
                <span>ESG</span>
                <img
                  src="/logo.png"
                  alt="ESG 로고"
                  className="h-[62px] w-auto mx-0 inline-block align-middle"
                />
                <span>Toolbox</span>
              </h1>
              <p className="text-xl mt-8 mb-4">AI 전문가와 ESG 도메인 전문가들이 함께 만든</p>
              <p className="text-xl mt-4 mb-8">ESG 분야 특화 AI Tool 모음</p>
              <div className="flex  items-center justify-center md:justify-start gap-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full">
                  ESG + AI 상품 보러가기
                </Button>
              </div>
            </div>
            <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
              <div className="w-full max-w-md h-48 md:h-64 bg-gray-800/50 rounded-xl border border-gray-700 flex items-center justify-center">
                <span className="text-gray-400">ESG + AI 교육 서비스</span>
              </div>
            </div>
            <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
              <div className="w-full max-w-md h-48 md:h-64 bg-gray-800/50 rounded-xl border border-gray-700 flex items-center justify-center">
                <span className="text-gray-400">ESG + AI 컨설팅 서비스</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">AI Tool 리스트</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[2, 1, 4, 3].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg p-6">
                <Wrench className="text-green-400 mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2">
                  {item === 1 
                    ? "GRI content index 생성 AI" 
                    : item === 2 
                      ? "ESG 이슈 리서치 분석 AI" 
                      : item === 3 
                        ? "CDP 대응 입력 내용 초안 생성 AI" 
                        : item === 4 
                          ? "ESG 데이터 비교 검색 AI"
                          : `AI 도구 ${item}`}
                </h3>
                <p className="text-gray-400 mb-4">
                  {item === 1 
                    ? "지속가능경영보고서 초안을 업로드하면 GRI Index 를 생성하는 AI 도구입니다." 
                    : item === 2 
                      ? "주요 매체의 ESG 컨트러버셜 (Controversial) 뉴스를 수집·분류·요약해 제공하는 AI 큐레이터입니다."
                      : item === 4 
                        ? "지속가능경영보고서에 공시된 각 기관/기업의 ESG 데이터를 지표별로 비교·검색하는 AI 도구입니다."
                        : "AI 도구의 기능과 역량에 대한 간략한 설명입니다."
                  }
                </p>
                <Button
                  variant="outline"
                  className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white"
                >
                  상세 설명
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">ESG + AI 블로그</h2>
          <div className="flex space-x-8 overflow-x-auto pb-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-700 rounded-lg p-6 min-w-[300px]"
              >
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-bold">4.5/5</span>
                </div>
                <h3 className="text-xl font-bold mb-2">AI 도구 리뷰 {item}</h3>
                <p className="text-gray-400 mb-4">
                  주요 포인트를 강조한 리뷰 요약...
                </p>
                <Button
                  variant="link"
                  className="text-blue-400 hover:text-blue-300 p-0"
                >
                  전체 리뷰 보기
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">AI 트렌드</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article) => (
              <div
                key={article.id}
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="aspect-video bg-gray-600 flex items-center justify-center">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-400">
                    <TrendingUp size={48} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {article.summary}
                  </p>
                  <Button
                    variant="link"
                    className="text-blue-400 hover:text-blue-300 p-0 text-sm"
                    onClick={() => {
                      window.open(article.url, "_blank");
                    }}
                  >
                    더 보기 →
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {!showAllArticles && (
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowAllArticles(true)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full"
              >
                더보기
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              {[
                "개인정보처리방침",
                "서비스 약관",
                "지원",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-green-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">팔로우하기</h3>
            <div className="flex space-x-4">
              {["LinkedIn", "Facebook"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-green-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">뉴스레터</h3>
            <p className="text-gray-400 mb-4">최신 AI 뉴스 받아보기</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="이메일 주소"
                className="rounded-l-full"
              />
              <Button className="bg-green-500 hover:bg-green-600 rounded-r-full">
                구독하기
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
