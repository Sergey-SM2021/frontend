import { useTranslation } from "react-i18next";
import style from "./About.module.scss";

interface IAbout {}

const About = () => {
  const { t } = useTranslation("aboutPage");
  return <div className={style.About}>{t("about")}</div>;
};

export default About;
