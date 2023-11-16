import { ConfigProvider } from "antd";
import viVN from "antd/lib/locale/vi_VN";
import enUS from "antd/lib/locale/en_US";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import { languages } from "../i18n";
import "../assets/style/main.less";

dayjs.locale("en");
const i18nLocal = localStorage.getItem("i18nextLng");
const locale = i18nLocal === languages.tieng_viet ? viVN : enUS;

if (i18nLocal === languages.tieng_viet) {
  dayjs.locale("vi");
}

export const AntProvider = ({ children }) => {
  return <ConfigProvider locale={locale}>{children}</ConfigProvider>;
};
