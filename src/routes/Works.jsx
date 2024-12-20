import WorksSection from "../components/works/WorksSection";
import SectionHeader from "../ui/layout/SectionHeader";
import { useTranslation } from "react-i18next";

function Works() {
  const { t } = useTranslation();
  return (
    <>
      <SectionHeader title={t("ourWork")} />
      <WorksSection />
    </>
  );
}

export default Works;
