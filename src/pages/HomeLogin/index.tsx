import { Spin } from 'antd'
import { LoginBg } from '../../assets/img';
import { LoginNew } from '../../assets/svg'
import styles from './index.module.scss'
import { handleRedirect } from '../../helpers';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { paths } from '../../constant/path';

export const HomeLogin = () => {
    const keyCloakWindow = useRef<any>()
    const { keycloak } = useKeycloak()

    const renderLogo = () => {
        return <LoginNew onClick={() => handleRedirect("https://deepcare.io/")} />
    }

    const handleClickLogin = () => {
        if (keyCloakWindow.current && !keyCloakWindow.current.closed) {
            keyCloakWindow.current.focus();
            return;
        }
        const WIDTH = 800;
        const HEIGHT = 600;

        const TOP = window.top.outerHeight / 2 + window.top.screenY - HEIGHT / 2;
        const LEFT = window.top.outerWidth / 2 + window.top.screenX - WIDTH / 2;

        const loginUrl = keycloak.createLoginUrl({
            redirectUri: window.location.origin + paths.authenticated,
        });
    }

    const renderAddress = () => {
        //     if(configHospital && configHospital.CUSTOM_DOMAIN) {
        //       let { DIA_CHI } = configHospital.CUSTOM_DOMAIN;

        //       if (DIA_CHI) {
        //         if (typeof DIA_CHI === "string") {
        //           return 'Địa chỉ: ' + DIA_CHI;
        //         } else {
        //           return 'Địa chỉ: ' + i18n.language === languages.tieng_viet ? DIA_CHI["vi"] : DIA_CHI["en"];
        //         }
        //       } else {
        //         return '';
        //       }

        //    } else { 
        //       return 'Địa chỉ: ' + "i18n.t(languageKeys.dia_chi_deepcare)";
        //    }
        return 'Địa chỉ: ' + "i18n.t(languageKeys.dia_chi_deepcare)";
    }

    const renderContact = () => {
        // try {
        //   if(configHospital && configHospital.CUSTOM_DOMAIN) {
        //     let { WEBSITE, HOTLINE,EMAIL,LINK_WEB } = configHospital.CUSTOM_DOMAIN;

        //     return {
        //       WEBSITE:LINK_WEB ? `Website: ${LINK_WEB}` : '',
        //       HOTLINE:HOTLINE ? `Hotline: ${HOTLINE}` : '',
        //       EMAIL:EMAIL ? `Email: ${EMAIL}` : '',
        //     }
        //  } else { 
        //    return {
        //     WEBSITE : 'Deepcare.io',
        //     HOTLINE: '1900 068 856',
        //     EMAIL : 'contact@deepcare.io',
        //    };
        //  }
        // } catch (error) {
        //   return {};
        // }
        return {
            WEBSITE: 'Deepcare.io',
            HOTLINE: '1900 068 856',
            EMAIL: 'contact@deepcare.io',
        };
    }

    return (
        <Spin spinning={false}>
            <div style={{ backgroundImage: `url(${LoginBg})` }} className={styles["container"]}>
                <div className={styles["main"]}>
                    <div className={styles["inner"]}>
                        <div className={styles["logo-wrapper"]}>{renderLogo()}</div>

                        <p>Giải pháp thông minh quản lý phòng khám, chuỗi phòng khám đa khoa hiệu quả, tiện dụng, mọi lúc, mọi nơi trên mọi nền tảng</p>

                        <div className={styles["btn-wrapper"]}
                            onClick={handleClickLogin}
                        >
                            <button>Đăng nhập</button>
                            <div className={styles["arrow-wrapper"]}>
                                <ArrowRightOutlined />
                            </div>
                        </div>
                        {/* <Typography.Link onClick={onOpenModalPassword} style={{marginTop:12}} underline>Quên mật khẩu?</Typography.Link> */}
                    </div>
                </div>

                <div className={styles["footer"]}>
                    <div>{renderAddress()}</div>

                    {/* <div>Tel: 0983 858 100</div> */}
                    {/* {true ? (
                        <>
                            <div>Website: {renderContact().WEBSITE}</div>

                            <div>Hotline: {renderContact().HOTLINE}</div>

                            <div>Email: {renderContact().EMAIL}</div>
                        </>
                    ) : (
                        <>
                            <div>{renderContact().WEBSITE}</div>

                            <div>{renderContact().HOTLINE}</div>

                            <div>{renderContact().EMAIL}</div>
                        </>
                    )} */}

                    <>
                        <div>Website: {renderContact().WEBSITE}</div>

                        <div>Hotline: {renderContact().HOTLINE}</div>

                        <div>Email: {renderContact().EMAIL}</div>
                    </>
                </div>
                {/* <QuenMatKhau ref={forgotPassRef}/> */}
            </div>
        </Spin>
    )
}
