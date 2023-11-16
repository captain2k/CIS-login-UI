import React, { useEffect, useMemo, useState } from "react";
import style from "./subHeader.module.less";
import { Avatar, Badge, Button, Divider, Layout, List, Menu, Popover, Space, Spin } from "antd";
import { DownOutlined, GlobalOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks";
import { Logout2, Notification } from "assets/svg";
import { useNavigate } from "react-router-dom";
import { HLog, common_post, getImageFromSever, isAccessAllowed } from "helpers";
import { LogoText } from "assets/img";
import { DuocNgoaiTruIcon, RISIcon, VnFlag, EnFlag,FileCheckAlt } from "assets/svg";
import keys, { notiListKey, routeApp } from "../../constants/keys";
import i18n, { languageKeys, languages } from "../../i18n";
import CommonNotification from "components_v2/CommonNotification";
import dayjs from "dayjs";
import apis from "../../constants/apis";
import Constants from "constants/Constants";
import { RootState } from "@/ducks";
const SubHeader = ({ menuItem = [], onNavigate = () => {}, module = "" }) => {
  const history = useNavigate();
  const { logout } = useAuth();
  const { user: userProfile } = useSelector((state: RootState) => state.auth);
  const avatar = getImageFromSever(userProfile.ANH_DAI_DIEN);
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout();
  };

  const config = useMemo(() => {
    return userProfile?.config;
  }, [userProfile]);

  const handleChangeLanguage = (val) => {
    i18n.changeLanguage(val);
    window.location.reload();
  };

  // const UserSetting = () => (
  //   <Space size={3} direction={"vertical"} className={style["inner"]}>
  //     <Space size={10} style={{ fontWeight: 700, marginBottom: 3 }}>
  //       <Avatar size={30} src={avatar} icon={<UserOutlined />} />
  //       <span>{userProfile.HO + " " + userProfile.TEN}</span>
  //       <DownOutlined />
  //     </Space>

  //     <Button icon={<Logout2 />} type="link" style={{ gap: 8 }} onClick={handleLogout}>
  //       {i18n.t(languageKeys.common_Dang_xuat)}
  //     </Button>

  //     <Popover
  //       content={() => {
  //         return (
  //           <Space size={3} direction={"vertical"} className={style["inner"]}>
  //             <Button icon={<VnFlag height={20} width={30} />} type="link" onClick={() => handleChangeLanguage(languages.tieng_viet)}>
  //               &nbsp;{i18n.t(languageKeys.ngon_ngu_tieng_viet)}
  //             </Button>
  //             <Button icon={<EnFlag height={20} width={30} />} type="link" onClick={() => handleChangeLanguage(languages.tieng_anh)}>
  //               &nbsp;{i18n.t(languageKeys.ngon_ngu_tieng_anh)}
  //             </Button>
  //           </Space>
  //         );
  //       }}
  //       placement="left"
  //     >
  //       <Button icon={<GlobalOutlined />} type="link">
  //         {i18n.t(languageKeys.common_Doi_ngon_ngu)}
  //       </Button>
  //     </Popover>
  //     {/*<Button icon={<UserOutlined />} type="link" onClick={(e) => history.push(paths.QL_TAI_KHOAN + "/")}>*/}
  //     {/*  Quản lý tài khoản*/}
  //     {/*</Button>*/}
  //     {/*<Button icon={<SettingOutlined />} type="link">*/}
  //     {/*  Quản lý license*/}
  //     {/*</Button>*/}
  //     <Divider dashed className={style["divider"]} />
  //     <p>Version: 1.0.1</p>
  //   </Space>
  // );

  // const selectedLogo = useMemo(() => {
  //   if (config && config.CUSTOM_DOMAIN && config.CUSTOM_DOMAIN.HEADER_LOGO_ID) {
  //     // return api lấy logo
  //     return window.GATEWAY + `cis-public/public/file?ID=${config.CUSTOM_DOMAIN.HEADER_LOGO_ID}`;
  //   } else {
  //     return LogoText;
  //   }
  // }, [config]);

  // const renderLogo = (moduleDC) => {
  //   let logo = <></>;
  //   let title = "";
  //   switch (moduleDC) {
  //     case routeApp.DUOC:
  //       logo = <DuocNgoaiTruIcon />;
  //       title = "Quản lý dược ngoại trú";
  //       break;
  //     case routeApp.RIS:
  //       logo = <RISIcon />;
  //       title = "Quản lý chẩn đoán hình ảnh";
  //       break;
  //     default:
  //       logo = <img src={selectedLogo} alt="logo" className={style["dcLogo"]} />;
  //       title = "";
  //       break;
  //   }
  //   return { title, logo };
  // };

  return (
    <Layout.Header className={style["header"]}>
      {/* <div className={style["logo"]}>
        {renderLogo(module).logo}
        <span>{renderLogo(module).title}</span>
      </div>

      <Menu selectedKeys={[history.location.pathname]} className={style["menu"]} mode="horizontal" onClick={onNavigate}>
        {menuItem.map((item) =>
          isAccessAllowed(userProfile, item.featureKey, true) ? (
            <Menu.Item key={item.key} item={item} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ) : (
            <Menu.Item disabled key={item.key} item={item} icon={item.icon} style={{ pointerEvents: "none", opacity: 0.3 }}>
              {item.label}
            </Menu.Item>
          )
        )}
      </Menu>
      <div style={{ display: "flex" }}>
       {(module === routeApp.RIS && window.location.pathname.includes('tra-ket-qua-cdha')) && <CommonNotification count={+unCheckListNoti?.length} content={<ContentNoti unCheckList={unCheckListNoti} checkedList={checkedListNoti} onReloadNoti={getListNoti} />} />}
        <Popover
          content={UserSetting}
          trigger="click"
          autoAdjustOverflow
          overlayClassName={style["setting"]}
          overlayInnerStyle={{ width: "100%", height: "100%", boxShadow: "none", padding: 0 }}
        >
          <Space size={10} className={style["user"]}>
            <Avatar size={30} src={avatar} icon={<UserOutlined />} />
            <span>{userProfile.HO + " " + userProfile.TEN}</span>
            <DownOutlined />
          </Space>
        </Popover>
      </div> */}
    </Layout.Header>
  );
};

// const ContentNoti = ({
//   unCheckList = [],
//   checkedList = [],
//   onReloadNoti = () => {}
// }) => {
//   const [notiLoading, setNotiLoading] = useState(false);
//   const history = useHistory();
//   let dataSource = useMemo(() => {
//     try {
//       return [...unCheckList,...checkedList]
//     } catch (error) {
//       HLog(error);
//       return [];
//     }
//   },[unCheckList,checkedList]);

//   const handleGoToTestResult = async item   => {
//     try {
//       if( item.IMAGE_URL && [Constants.NHAN_KQ_CDHA_VIN,Constants.AI_DA_PHAN_TICH].includes(item.TYPE) ){
//         window.open(item.IMAGE_URL, "_blank");
//       } else { 
//         handleAction(item);
//       }
//       if(!item.IS_SEEN) {
//         await handleUpdateNoti(item);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const handleUpdateNoti = async(item) => { 
//     let { ID } = item;
//     try {
//       setNotiLoading(true);
//       let body = {"XOA":0,ID}

//       let res = await common_post(apis.update_notification_ris,body);

//       if(res && res.status === 'OK') {
//         onReloadNoti();
//       }
//     } catch (error) {
      
//     }finally {
//       setNotiLoading(false);
//     }

//   }

//   const handleAction = (item) => {
//     try {
//       if(item.TYPE == Constants.NHAN_KQ_CDHA_CHI_DINH_VIN) {

//         const params = new URLSearchParams({["RIS"]: keys.openForm,"PHIEU_ID":item?.PHIEU_ID });
//         history.replace({
//           pathname: PathRis.traKetQua,
//           search:params.toString()
//         })
//       }
//     } catch (error) {
      
//     }
//   }

//   const getText = (item) => {
//     let result = {
//       title:"",
//       description:""
//     };

//     let { TYPE } = item;
//     switch (TYPE) {
//       case Constants.NHAN_KQ_CDHA_VIN:
//         result.title = "Đã có hình ảnh " + item?.TEN_DICHVU;
//         result.description = "Hình ảnh " + item?.TEN_DICHVU + " của khách hàng " + item?.TEN + " đã được cập nhật";
//         break;
//       case Constants.NHAN_KQ_CDHA_CHI_DINH_VIN:
//         result.title = "Đã có kết quả " + item?.TEN_DICHVU;
//         result.description = "Kết quả " + item?.TEN_DICHVU + " của khách hàng " + item?.TEN + " đã được cập nhật";
//         break;
//       case Constants.AI_DA_PHAN_TICH:
//         result.title = "AI đã xử lý hình ảnh";
//         result.description = "Kết quả " + item?.TEN_DICHVU + " của khách hàng " + item?.TEN + " đã được xử lý";
//         break;
//       default:
//         break;
//     }

//     return result;
//   }

//   return (
//     <Spin spinning={notiLoading}>
//           <List
//       className={`${style["notification-list"]} ${style['style-scroll-bar']}`}
//       itemLayout="horizontal"
//       dataSource={dataSource}
//       style={{ width: 400 }}
//       renderItem={(item) => (
//         <List.Item className={style['list-wrapper-item']}>
//           {/* <Skeleton avatar title={false} loading={item.loading} active> */}
//           <div>
//             <div className={style['wrapper-icon-docx']}><FileCheckAlt className={style['icon-docx']} /></div>
//           </div>
//           <div style={{padding:'0 12px',cursor:'pointer'}} onClick={()=> handleGoToTestResult(item)}>
//             <div><b className="bold-txt">{getText(item).title}</b></div>
//             <div>
//             <sub>{getText(item).description}</sub>
//             </div>
//           </div>
//           <div>
//             <div>{item?.NGAY ? dayjs(item?.NGAY).format('DD/MM') : '../..'}</div>
//             <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//               <Badge color={!!item?.IS_SEEN ? "green" :"red"} className={style['badge-dot']}/>
//             </div>
//           </div>
//           {/* </Skeleton> */}
//         </List.Item>
//       )}
//     />
//     </Spin>
//   );
// };

export default SubHeader;
