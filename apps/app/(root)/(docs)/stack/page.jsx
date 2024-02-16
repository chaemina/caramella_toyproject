import Title from "~/components/atoms/Title";


export const metadata = {
    title: "Caramella | 기술 스택 / 작업 플로우",
  };


const StackPage = () => {
    return (
        <>
            <div>
                <Title>기술 스택 / 작업 플로우</Title>
                <div className="m-2">실 프로젝트 진행 시, 해당 스택을 기반으로 하거나 추가하여 사용할 것</div>
                
                <div className="text-2xl m-2">기술 스택</div>
                <div className="m-4">[기본] : WEB</div>
                <ul className="space-y-4">
                    <li><strong>Front-End</strong>: TypeScript, Next.js</li>
                    <li><strong>Back-End</strong>: NEST.JS (DOCKER 배포)</li>
                    <li><strong>System-Application</strong>: [주 언어] C# (크롤링, 알고리즘 연산 등), GUI Application, [부 언어] Rust (CPU/Memory Intensive Task)</li>
                    <li><strong>Database</strong>: MariaDB</li>
                    <li><strong>CI/CD</strong>: Docker, GitHub Actions, Cloudflare Pages</li>
                    <li><strong>AI</strong>: PYTORCH</li>
                    <li><strong>Etc</strong>: Grafana, ElasticSearch, KAFKA, Redis</li>
                </ul>

                <div className="text-2xl m-2 ">개발팀 작업 Flow</div>
                <ol className="m-4 space-y-4">
                    <li>프로젝트 회의 및 기획 초안 수렴</li>
                    <li>프로젝트 진행 담당자(PM)가 지라 프로젝트 생성 및 구성원 초대</li>
                    <li>전체 기능을 에픽(큰 범주), 스토리(작은 범주)로 나누어 지라 등록</li>
                    <li>설계 담당자가 에픽/스토리 정렬 및 세부 작업 등록</li>
                    <li>프로젝트 진행 담당자(PM)가 스토리 기준으로 작업 담당자 분배</li>
                    <li>에픽별 만기 기한 설정 및 전체 기한 설정</li>
                    <li>기초 프로젝트 Repository 생성 및 지라 연동</li>
                    <li>실 개발 및 담당자의 작업 진행</li>
                    <li>필요한 리소스 요청: [https://sd.caramella.kr](https://sd.caramella.kr)</li>
                    <li>진행상황 주간 체크(수요일) 및 수시 체크</li>
                </ol>
            </div>
        </>
    );
}

export default StackPage;
