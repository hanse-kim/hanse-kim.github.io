import React, { useEffect, useRef, useState } from 'react';

type ShortsCardProps = {};

export const ShortsCard = ({}: ShortsCardProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const contentHeightRef = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const data = {
    title: '브라우저에서 화면을 그리는 과정은?',
    date: '2024-10-16',
    content: `명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 대통령은 국회에 출석하여 발언하거나 서한으로 의견을 표시할 수 있다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.\n\n대통령이 궐위되거나 사고로 인하여 직무를 수행할 수 없을 때에는 국무총리, 법률이 정한 국무위원의 순서로 그 권한을 대행한다. 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다.`,
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const height = entry.borderBoxSize[0].blockSize;
      contentHeightRef.current = height;
    });

    observer.observe(contentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="p-24 flex flex-col items-stretch bg-bg outline outline-border outline-1 rounded-16 hover:not(:browser):outline-text-muted data-[open=true]:outline-text transition-outline group"
      data-open={isOpen}
    >
      <button className="flex items-start gap-12 text-left" onClick={toggle}>
        <div className="flex-1">
          <h3 className="text-text text-28-700">{data.title}</h3>
          <p className="text-text-muted">{data.date}</p>
        </div>
        <div className="w-28 h-28 shrink-0 relative">
          <div className="w-4 h-24 bg-text absolute rounded-2 left-1/2 -translate-x-1/2 rotate-90" />
          <div className="w-4 h-24 bg-text absolute rounded-2 left-1/2 -translate-x-1/2 rotate-0 group-data-[open=true]:rotate-90 group-data-[open=true]:opacity-0 transition-all" />
        </div>
      </button>
      <div
        className="overflow-hidden transition-all"
        style={{ maxHeight: isOpen ? `${contentHeightRef.current}px` : '0px' }}
      >
        <div
          ref={contentRef}
          className="w-full pt-16 px-[inherit] text-18-400 whitespace-pre-wrap"
          onClick={(e) => e.stopPropagation()}
        >
          <hr className="mb-16 border-border" />
          {data.content}
        </div>
      </div>
    </div>
  );
};
