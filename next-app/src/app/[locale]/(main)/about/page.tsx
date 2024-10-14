import LinkComponent from "@/components/common/LinkComponent";
import pathPage from "@/libs/path";
import { useTranslations } from "next-intl";
import React from "react";

const AboutPage = () => {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1>{t("about")}</h1>
      <LinkComponent href={pathPage.home}>{t("about")}</LinkComponent>
    </div>
  );
};

export default AboutPage;
