import ResponsiveAppBar from "../components/ResponsiveAppBar";
import DownloadBtn from "./DownloadBtn";

import './HomePage.scss';

export default function HomePage() {
  return (
    <div className="HomePage">
      <ResponsiveAppBar />
      <header className="header">
        <div className="header-background">
          <div className="header-title">
            최고의 애플리케이션 모니터링 서비스, Druid6입니다.
          </div>
          <DownloadBtn />
        </div>
      </header>
    </div>
  );
}
