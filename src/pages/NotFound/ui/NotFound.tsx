import { useTranslation } from "react-i18next";
import style from "./NotFound.module.scss";

export const NotFound = () => {
  const { t } = useTranslation("notFound");
  return <div className={style.notFound}>{t("title")}</div>;
};
