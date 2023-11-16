import apiServices from "config/apiServices";

const keys = {
  DEFAULT_PASSWORD: "123312",

  section: "SECTION",
  VERSION: "0.0.1",
  PLATFORM: {
    APP: "APP",
    WEBSITE: "WEBSITE",
    ZALO: "ZALO",
    FACEBOOK: "FACEBOOK",
    TAI_VIEN: "TAI_VIEN",
    KHAC: "KHAC",
  },

  limit: 15, // giới hạn số data trả về
  limit_debs: 10,
  maxLimit: 50, //giới hạn tối đa số phần tử gọi api
  limit_hospital_fee: 15,
  limit_min_length: 3, // giới hạn dưới kí tự search

  limit_noti_local: 30, // giới hạn số lượng thông báo lưu trữ
  date_stored_noti:7,
  //session storage
  isReload: "isReload",
  configHospital:"configHospital",
  // local storage
  access_token: "access_token",
  refresh_token: "refresh_token",
  expire_in: "expire_in",
  user_data: "user_data",
  partner_code: "partner_code",
  id_shd: "id_shd", // id sổ hoá đơn
  id_sht: "id_sht", // id sổ hoá đơn
  ris_phong_da_chon: "RIS_PHONG_DA_CHON", // id sổ hoá đơn
  version_web: "version_web",

  // trang thai tiep don
  tiep_don_CHO_KHAM: "CHO_KHAM",
  tiep_don_DANG_KHAM: "DANG_KHAM",
  tiep_don_CLS: "CLS",
  tiep_don_HOAN_THANH: "HOAN_THANH",

  // gioi tinh
  gioi_tinh_NAM: "nam",
  gioi_tinh_NU: "nu",
  gioi_tinh_KHAC: "khac",

  key_auto_print_tiep_don: "key_auto_print_tiep_don",

  // đối tượng bệnh nhân
  BHYT: "BHYT",
  VIEN_PHI: "VIEN_PHI",
  YEU_CAU: "YEU_CAU",
  MIEN_GIAM: "MIEN_GIAM",
  NUOC_NGOAI: "NUOC_NGOAI",
  KT_TU_NGUYEN: "KT_TU_NGUYEN",
  KT_BHYT: "KT_BHYT",
  DT_KHAC: "KHAC",
  KHAM_DOAN: "KHAM_DOAN",

  // kết quả khám bệnh
  KHOI_BENH: "KHOI_BENH",
  DO: "DO",
  KHONG_THAY_DOI: "KHONG_THAY_DOI",
  NANG: "NANG",
  TU_VONG: "TU_VONG",

  // XỬ TRÍ
  RA_VIEN: "RA_VIEN",
  CHUYEN_VIEN: "CHUYEN_VIEN",
  TRON_VIEN: "TRON_VIEN",
  XIN_RA_VIEN: "XIN_RA_VIEN",
  PHONG_KHAM_BENH: "PHONG_KHAM_BENH",

  //
  CON: "CON",
  CHONG: "CHONG",
  BO: "BO",
  VO: "VO",
  ME: "ME",
  KHAC: "KHAC",

  // Role
  role_Admin: "ADMIN",
  role_Member: "MEMBER",

  already_logged_in: "already_logged_in", // biến check lần đầu đăng nhập

  AXIOS_TIMEOUT: 8000,
  URL_LIS: "https://lis.dev.deepcare.vn",
  REDIRECT: "redirect",
  phau_thuat_thu_thuat: "phau_thuat_thu_thuat",
  openForm:"open-form",
};

// feature keys phải ứng với danh sách phân quyền tại project danh mục

export const featureKeys = {
  quan_ly_tiep_don: "QL_TIEP_DON",
  quan_ly_danh_muc: "QL_DANH_MUC",
  quan_ly_nguoi_dung: "QL_NGUOI_DUNG",
  thong_tin_cskcb: "THONG_TIN_CSKCB",
  quan_ly_vien_phi: "QL_VIEN_PHI",
  quan_ly_kham_benh: "QL_KHAM_BENH",
  quan_ly_chan_doan_hinh_anh_ris: "RIS_NHAP_TAY",
  quan_ly_bhyt: "quan_ly_bhyt",
  quan_ly_xep_hang_qms: "quan_ly_xep_hang_qms",
  quan_ly_dich_vu_can_thanh_toan: "DICH_VU_CAN_THANH_TOAN",
  quan_ly_so_hoa_don: "QUAN_LY_SO_TONG_HOP",
  quan_ly_xet_nghiem_lis: "quan_ly_xet_nghiem_lis",
  lich_lam_viec: "LICH_LAM_VIEC",
  quan_ly_he_thong: "QL_HE_THONG",
  tiep_don: "DON_TIEP",
  bang_dieu_khien: "DASHBOARD",
  cuoc_hen_sap_toi: "CUOC_HEN_SAP_TOI",
  quan_ly_duoc_ngoai_tru: "QL_DUOC_NGOAITRU",
  ban_thuoc: "BAN_THUOC",
  kho_thuoc: "KHO_THUOC",
  phieu_xuat_nhap: "PHIEU_XUAT_NHAP",
  nha_cung_cap: "NHA_CUNG_CAP",
  quan_ly_noi_tru: "QUAN_LY_NOI_TRU",
  quan_ly_benh_nhan: "QL_BENH_NHAN",
  bao_cao_duoc_ngoai_tru: "BAO_CAO_DUOC_NGOAI_TRU",
  bao_cao_duoc: "BAO_CAO_DUOC",
  bao_cao: "QL_BAO_CAO",
  bao_cao_duoc_2: "DUOC.QL_DUOC_NGOAITRU.BAO_CAO",
  bao_cao_vien_phi: "BAO_CAO_VIEN_PHI",
  bao_cao_phieu_thu: "BAO_CAO_PHIEU_THU",
  bao_cao_tiep_don: "BAO_CAO_TIEP_DON",
  ton_kho: "TON_KHO",
  kho_duoc_ngoai_tru: "KHO_THUOC",
  quan_ly_xuat_khac: "QUAN_LY_XUAT_KHAC",
  thong_ke: "THONG_KE",
  so_luong_ton_kho: "SO_LUONG_TON_KHO",
  phieu_nhap_kho: "PHIEU_NHAP_KHO",
  phieu_xuat_kho: "PHIEU_XUAT_KHO",
  van_chuyen_kho: "VAN_CHUYEN_KHO",
  the_kho: "THE_KHO",
  quyen_duyet_phieu: "QUYEN_DUYET_PHIEU",
  mau_mo_ta_cdha: "MAU_MO_TA",
  mau_mo_ta_cdha_ris: "RIS_NHAP_TAY.MAU_MO_TA",
  tra_ket_qua_cdha: "TRA_KQ",
  tao_mau_mo_ta_cdha: "TAO_MAU_MO_TA_CDHA",
  sua_mau_mo_ta_cdha: "SUA_MAU_MO_TA_CDHA",
  xoa_mau_mo_ta_cdha: "XOA_MAU_MO_TA_CDHA",
  khoa_mau_mo_ta_cdha: "KHOA_MAU_MO_TA_CDHA",
  tra_ket_qua: "TRA_KET_QUA",
  huy_tra_phieu_cdha: "HUY_TRA_PHIEU",
  ho_tro_khach_hang: "HO_TRO_KHACH_HANG",
  bao_cao_cdha: "BAO_CAO_CDHA",
  phau_thuat_thu_thuat: "PHAU_THUAT_THU_THUAT",
  ke_don_thuoc: "KE_DON_THUOC",
  thong_tin_kham: "THONG_TIN_KHAM",
  // Gói Dv
  quan_ly_tam_ung: "QUAN_LY_TAM_UNG",
  quan_ly_cong_no: "QUAN_LY_CONG_NO",
  quan_ly_goi_dv: "QUAN_LY_GOI_DV",
  danh_sach_goi_dv: "DANH_SACH_GOI_DV",
  quan_ly_dk_goi_dv: "QUAN_LY_DK_GOI_DV",
  quan_ly_su_dung_goi_dv: "QUAN_LY_SU_DUNG_GOI_DV",
  quan_ly_chi_dinh_dich_vu:"QUAN_LY_CHI_DINH_DICH_VU"
};

export const keysDanhMuc = {
  dm_noi_tru_phong: "dm_noi_tru_phong", // danh mục phòng nội trú
  dm_benh_vien: "dm_benh_vien", // danh mục bệnh viện
  dm_khoa: "dm_khoa", // danh mục khoa
  dm_phong: "DM_PHONG", // danh mục phòng
  dm_dich_vu_ki_thuat: "DM_DICHVU_KYTHUAT", // danh mục dịch vụ kĩ thuật
  dm_nhom_dv_ki_thuat: "dm_nhom_dv_ki_thuat", // danh mục nhóm dịch vụ kĩ thuật
  dm_loai_dv_ki_thuat: "DM_LOAI_DICHVU_KYTHUAT", // danh mục loại dịch vụ kĩ thuật
  dm_nhom_hoa_don: "dm_nhom_hoa_don", // danh mục nhóm hóa đơn
  dm_thuoc: "DM_THUOC", // danh mục thuốc
  dm_nha_thuoc: "dm_nha_thuoc", // danh mục nhà thuốc
  dm_hang_san_xuat: "dm_hang_san_xuat", // danh mục hãng sản xuất
  dm_duong_dung: "dm_duong_dung", // danh mục đường dùng
  dm_kho_tu_truc: "dm_kho_tu_truc", // danh mục kho, tủ trực
  dm_don_vi_tinh: "dm_don_vi_tinh", // danh mục đơn vị tính
  dm_hoat_chat: "DM_HOAT_CHAT", // danh mục kho, tủ trực
  dm_tinh: "dm_tinh", // danh mục tỉnh
  dm_huyen: "dm_huyen", // danh mục huyện
  dm_xa: "dm_xa", // danh mục xã
  dm_icd10: "dm_icd10", // danh mục ICD10
  dm_nhom_icd10: "dm_nhom_icd10", // danh mục nhóm ICD10
  dm_nghe_nghiep: "dm_nghe_nghiep", // danh mục nghề nghiệp
  dm_dan_toc: "dm_dan_toc", // danh mục dân tộc
  dm_quoc_gia: "dm_quoc_gia", // danh mục quốc gia
  //dm_kho_tu_truc:"dm_kho_tu_truc",
  dm_giuong: "dm_giuong",
  dm_cach_thuc_pttt: "dm_cach_thuc_pttt",
  dm_phuong_phap_pttt: "dm_phuong_phap_pttt",
  dm_pp_vo_cam: "dm_pp_vo_cam",
  dm_xuat_khac: "dm_xuat_khac",
  dm_nguon: "dm_nguon",
  dm_kho_thuoc: "dm_kho_thuoc",
  dm_may: "dm_may",
  dm_nguon_khach: "dm_nguon_khach",
  dm_doi_tuong: "dm_doi_tuong",
  dm_cach_dung: "dm_cach_dung",
  dm_hinh_thuc_thanh_toan: "dm_hinh_thuc_thanh_toan",
};

export const TRANG_THAI_KHAM_BENH_CUOC_KHAM = {
  CHO_XAC_NHAN: "CHO_XAC_NHAN",
  XAC_NHAN: "XAC_NHAN",
  CHO_KHAM: "CHO_KHAM",
  DANG_KHAM: "DANG_KHAM",
  KHAM_XONG: "KHAM_XONG",
  HOAN_THANH: "HOAN_THANH",
  DA_KHAM: "DA_KHAM",
  HUY: "HUY",
};

export const TRANG_THAI_KHAM_KHAC = {
  CHO_THUC_HIEN: "CHO_THUC_HIEN",
  DA_THUC_HIEN: "DA_THUC_HIEN",
  DANG_THUC_HIEN: "DANG_THUC_HIEN",
  HOAN_THANH: "HOAN_THANH",
  TU_CHOI: "TU_CHOI",
};

export const TRANG_THAI_KHAM_BENH_LUOT_DIEU_TRI = {
  CHO_XAC_NHAN: "CHO_XAC_NHAN",
  XAC_NHAN: "XAC_NHAN",
  CHO_KHAM: "CHO_KHAM",
  DANG_KHAM: "DANG_KHAM",
  KHAM_XONG: "KHAM_XONG",
  HOAN_THANH: "HOAN_THANH",
};
export const TRANG_THAI_THANH_TOAN = {
  CHUA_THANH_TOAN: "CHUA_THANH_TOAN",
  DA_THANH_TOAN: "DA_THANH_TOAN",
};

export const actionCuocHen = {
  THEM_MOI: "THEM_MOI",
  CHINH_SUA: "CHINH_SUA",
  XAC_NHAN: 'XAC_NHAN',
  XEM: "XEM",
};

export const keyLoaiNhanVien = {
  bac_si: "BAC_SI",
  thu_ngan: "THU_NGAN",
  ky_thuat_vien: "KY_THUAT_VIEN",
  dieu_duong: "DIEU_DUONG",
  thu_kho: "THU_KHO",
  quan_tri: "QUAN_TRI",
  tiep_tan: "TIEP_TAN",
  nguoi_lay_mau: "NGUOI_LAY_MAU",
};

export const initPermissionData = {
  bac_sy: [featureKeys.quan_ly_kham_benh],
  thu_ngan: [featureKeys.quan_ly_vien_phi, featureKeys.bao_cao_vien_phi, featureKeys.quan_ly_dich_vu_can_thanh_toan, featureKeys.quan_ly_so_hoa_don],
  ky_thuat_vien: [featureKeys.quan_ly_xet_nghiem_lis, featureKeys.tao_mau_mo_ta_cdha, featureKeys.sua_mau_mo_ta_cdha, featureKeys.tra_ket_qua],
  dieu_duong: [featureKeys.quan_ly_noi_tru],
  thu_kho: [
    featureKeys.quan_ly_duoc_ngoai_tru,
    featureKeys.ban_thuoc,
    featureKeys.kho_thuoc,
    featureKeys.phieu_xuat_nhap,
    featureKeys.phieu_nhap_kho,
    featureKeys.phieu_xuat_kho,
    featureKeys.nha_cung_cap,
    featureKeys.ton_kho,
    featureKeys.van_chuyen_kho,
    featureKeys.the_kho,
    featureKeys.quyen_duyet_phieu,
    featureKeys.kho_duoc_ngoai_tru,
    featureKeys.bao_cao_duoc,
    // featureKeys.bao_cao_duoc_ngoai_tru,
  ],
  tiep_tan: [featureKeys.tiep_don, featureKeys.cuoc_hen_sap_toi, featureKeys.quan_ly_tiep_don, featureKeys.bao_cao_tiep_don],
};

export const indexedDbKeys = {
  fetch_date: "fecth_date",
  tinh: "tinh",
  huyen: "huyen",
  xa: "xa",
  quoc_gia: "quoc_gia",
  dan_toc: "dan_toc",
  nghe_nghiep: "nghe_nghiep",
  kham_benh: "kham_benh",
  cls: "cls",
  thx: "thx",
  template_pdf: "template_pdf",
  init_done: "init_done",
};

export const pdfTemplateKeys = {
  BAO_CAO_DOANH_THU_BAN_THUOC: "BAO_CAO_DOANH_THU_BAN_THUOC",
  BAO_CAO_NHAP_XUAT_TON: "BAO_CAO_NHAP_XUAT_TON",
  BAO_CAO_PHIEU_THU: "BAO_CAO_PHIEU_THU",
  BAO_CAO_SD_THUOC_KHANG_SINH: "BAO_CAO_SD_THUOC_KHANG_SINH",
  BAO_CAO_VIEN_PHI: "BAO_CAO_VIEN_PHI",
  BIEN_BAN_KIEM_KE_THUOC: "BIEN_BAN_KIEM_KE_THUOC",
  BIEN_BAN_KIEM_NHAP_THUOC: "BIEN_BAN_KIEM_NHAP_THUOC",
  DON_THUOC: "DON_THUOC",
  PHIEU_BAN_LE_THUOC: "PHIEU_BAN_LE_THUOC",
  PHIEU_CHI_TIET_CONG_NO_NCC: "PHIEU_CHI_TIET_CONG_NO_NCC",
  PHIEU_CLS: "PHIEU_CLS",
  PHIEU_CLS_MOT_PHIEU: "PHIEU_CLS_MOT_PHIEU",
  PHIEU_KHAM_BENH: "PHIEU_KHAM_BENH",
  PHIEU_NHAP_THUOC: "PHIEU_NHAP_THUOC",
  PHIEU_THANH_TOAN_NCC_THUOC: "PHIEU_THANH_TOAN_NCC_THUOC",
  PHIEU_THU_PHI_DV: "PHIEU_THU_PHI_DV",
  PHIEU_TIEP_DON: "PHIEU_TIEP_DON",
  PHIEU_TOM_TAT_KHAM: "PHIEU_TOM_TAT_KHAM",
  PHIEU_XUAT_BAN_BENH_NHAN: "PHIEU_XUAT_BAN_BENH_NHAN",
  PHIEU_XUAT_BAN_THUOC: "PHIEU_XUAT_BAN_THUOC",
  PHIEU_XUAT_HUY_THUOC: "PHIEU_XUAT_HUY_THUOC",
  PHIEU_XUAT_TRA_NCC: "PHIEU_XUAT_TRA_NCC",
  HUY_TRA_PHIEU: "HUY_TRA_PHIEU",
};

export const dm_may_th = {
  XET_NGHIEM: "XET_NGHIEM",
  CDHA: "CDHA",
  TDCN: "TDCN",
  THU_THUAT: "THU_THUAT",
};
export const tooltipTxt = {
  dm_noi_tru_phong: {
    deleteTip: "Xoá phòng",
    fixedTip: "Sửa phòng",
  },
  dm_khoa: {
    deleteTip: "Xoá khoa",
    fixedTip: "Sửa khoa",
  },
  dm_don_vi_tinh: {
    deleteTip: "Xoá đơn vị",
    fixedTip: "Sửa đơn vị",
  },
  dm_giuong: {
    deleteTip: "Xoá giường",
    fixedTip: "Sửa giường",
  },
  dm_cach_thuc_pttt: {
    deleteTip: "Xoá thủ thuật",
    fixedTip: "Sửa thủ thuật",
  },
  dm_nhom_dv_ki_thuat: {
    deleteTip: "Xoá nhóm",
    fixedTip: "Sửa nhóm",
  },
  DM_LOAI_DICHVU_KYTHUAT: {
    deleteTip: "Xoá loại dịch vụ",
    fixedTip: "Sửa loại dịch vụ",
  },
  DM_DICHVU_KYTHUAT: {
    deleteTip: "Xoá dịch vụ",
    fixedTip: "Sửa dịch vụ",
  },
  dm_hang_san_xuat: {
    deleteTip: "Xoá hãng sản xuất",
    fixedTip: "Sửa hãng sản xuất",
  },
  dm_duong_dung: {
    deleteTip: "Xoá đường dùng",
    fixedTip: "Sửa đường dùng",
  },
  DM_HOAT_CHAT: {
    deleteTip: "Xoá hoạt chất",
    fixedTip: "Sửa hoạt chất",
  },
  DM_THUOC: {
    deleteTip: "Xoá thuốc",
    fixedTip: "Sửa thuốc",
  },
  dm_kho_thuoc: {
    deleteTip: "Xoá kho thuốc",
    fixedTip: "Sửa kho thuốc",
  },
  dm_may: {
    deleteTip: "Xoá danh mục máy",
    fixedTip: "Sửa danh mục máy",
  },
  dm_xuat_khac: {
    deleteTip: "Xoá xuất khác",
    fixedTip: "Sửa xuất khác",
  },
  dm_nguon: {
    deleteTip: "Xoá nguồn",
    fixedTip: "Sửa nguồn",
  },
  dm_phuong_phap_pttt: {
    deleteTip: "Xóa phương pháp",
    fixedTip: "Sửa phương pháp",
  },
  dm_pp_vo_cam: {
    deleteTip: "Xóa phương pháp",
    fixedTip: "Sửa phương pháp",
  },
  DM_PHONG: {
    deleteTip: "Xóa phòng",
    fixedTip: "Sửa phòng",
  },
};

export const widthDrawerKeys = {
  large: "calc(100vw - 60px)",
  medium: "75vw",
  small: "50vw",
};

export const loai_doi_tuong = {
  [keys.VIEN_PHI]: "Thu phí",
  [keys.BHYT]: "BHYT",
  [keys.KHAM_DOAN]: "Khám đoàn",
};

export const loai_quan_he_gia_dinh = {
  [keys.BO]: "Bố",
  [keys.ME]: "Mẹ",
  [keys.VO]: "Vợ",
  [keys.CHONG]: "Chồng",
  [keys.CON]: "Con",
  [keys.KHAC]: "Khác",
};


export default keys;

export const typeInDonThuoc = {
  IN_TPCN: "DON_THUOC_TPCN", // chỉ in thuốc thực phẩm chức năng
  IN_0_TPCN: "DON_THUOC_KHAM_BENH", // chỉ in thuốc không phải thực phẩm chức năng
};

export const routeApp = {
  CIS: "CIS",
  LIS: "LIS",
  RIS: "RIS",
  PRM: "PRM",
  HOME: "HOME",
  DANH_MUC: "MANAGEMENT",
  DUOC: "DUOC",
  BAO_CAO: "BAO_CAO",
  VAT_TU: "VAT_TU",
  PACS: "PACS"
};

export const moduleProvide = ["CIS", "LIS", "DUOC", "PRM", "MANAGEMENT", "RIS"];

export const localKeyNotChange = ["version_web"];

export const optionConfigHienThi = {
  GOP: "GOP",
  TACH: "TACH",
};

export const permissionActionKey = {
  XEM: "XEM",
  THEM_MOI: "THEM_MOI",
  THEM: "THEM",
  SUA: "SUA",
  XOA: "XOA",
  HUY: "HUY",
  IN_PDF: "IN_PDF",
  XUAT_EXCEL: "XUAT_EXCEL",
  XAC_NHAN: "XAC_NHAN",
  THUC_HIEN: "THUC_HIEN",
  TAI_XUONG: "TAI_XUONG",
};

export const notiListKey = {
  unCheckListNoti:"unCheckListNoti",
  checkedListNoti:"checkedListNoti"
}

export const loaiSo = {
  SO_THU_TIEN: 'SO_THU_TIEN',
  SO_HOAN_TIEN: 'SO_HOAN_TIEN',
  SO_TAM_UNG: 'SO_TAM_UNG',
  SO_CONG_NO: 'SO_CONG_NO',
}

export const PAGE_SIZE = {
  SMALL: 10,
  MEDIUM: 20,
  LARGE: 50,
}

// URL phục vụ thao tác thực hiện thao tác logout ( thêm URL vào để logout nếu thêm phân hệ )
export const redirectUrls = [apiServices.URL_LIS,apiServices.URL_DANH_MUC,apiServices.URL_REPORT];

export const PAGE_SIZE_OPTIONS= [20, 30, 40, 50];

export const tabKhamBenh = {
  KHAM_BENH:"KHAM_BENH",
  DICH_VU:"DICH_VU"
}