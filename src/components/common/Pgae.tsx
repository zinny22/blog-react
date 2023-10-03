import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
  showHeader?: boolean;
  showFooter?: boolean;
  children: ReactNode;
}
function Page({ showHeader = true, showFooter = true, children }: PageProps) {
  return (
    <>
      {showHeader ? <Header /> : null}
      {children}
      {showFooter ? <Footer /> : null}
    </>
  );
}

export default Page;
