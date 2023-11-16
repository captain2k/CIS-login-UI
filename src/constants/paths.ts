const auth = "/auth";
const cis = "/cis";
const ris = "/ris";
const duoc = "/duoc";
const bao_cao = "/bao-cao";

const paths = {
  main: "/",

  authenticated: "/authenticated",
  software_route: "/chon-phan-he",

  auth: auth,
  dang_nhap: auth + "/dang-nhap", // Đăng nhập
  dang_nhap_dieu_huong: auth + "/dang-nhap-dieu-huong/u/:username/p/:password",

  tivi: "/tv",
  ris: ris,
  cis: cis,
  duoc: duoc,
  bang_dieu_khien: cis + "/bang-dieu-khien", //bảng điều khiển
  quan_ly_danh_muc: cis + "/quan-ly-danh-muc", // Quản lý danh mục (quản lý hệ thống)
  quan_ly_nguoi_dung: cis + "/quan-ly-nguoi-dung", // Quản lý người dùng
  thong_tin_cskcb: cis + "/thong-tin-cskcb", // Thông tin cskcb
  quan_ly_tiep_don: cis + "/quan-ly-tiep-don", // Quản lý tiếp đón
  quan_ly_cuoc_hen_sap_toi: cis + "/quan-ly-cuoc-hen-sap-toi",
  quan_ly_vien_phi: cis + "/quan-ly-vien-phi",
  quan_ly_kham_benh: cis + "/quan-ly-kham-benh",
  thong_tin_so_hoa_don_nId: cis + "/thong-tin-so-tong-hop/",
  thong_tin_so_hoa_don: cis + "/thong-tin-so-tong-hop/:id",
  quan_ly_chan_doan_hinh_anh_ris: cis + "/quan-ly-chan-doan-hinh-anh-ris",
  quan_ly_bhyt: cis + "/quan-ly-bhyt",
  quan_ly_duoc_ngoai_tru: cis + "/quan-ly-duoc-ngoai-tru",
  quan_ly_xep_hang_qms: cis + "/quan-ly-xep-hang-qms",
  quan_ly_dich_vu_can_thanh_toan: cis + "/dich-vu-can-thanh-toan",
  quan_ly_phieu_thu_da_tao: cis + "/quan_ly_phieu_thu_da_tao/:id",
  quan_ly_phieu_thu_da_tao_nId: cis + "/quan_ly_phieu_thu_da_tao/",
  quan_ly_benh_nhan: cis + "/quan-ly-benh-nhan",
  quan_ly_tai_khoan: cis + "/quan-ly-tai-khoan",

  quan_ly_so_hoa_don: cis + "/so-tong-hop",
  quan_ly_xet_nghiem_lis: cis + "/quan-ly-xet-nghiem-lis",
  lich_lam_viec: cis + "/lich-lam-viec",
  quan_ly_noi_tru: cis + "/quan-ly-noi-tru",

  quan_ly_phieu_nhap_xuat: cis + "/quan-ly-phieu-nhap-xuat",
  bao_cao_duoc_ngoai_tru: cis + "/bao-cao-duoc-ngoai-tru",
  quan_ly_xuat_khac: cis + "/quan-ly-xuat-khac",
  kho_duoc_ngoai_tru: cis + "/kho-duoc-ngoai-tru",
  nha_cung_cap: cis + "/nha-cung-cap",
  ton_kho: cis + "/ton-kho",
  kho_thuoc: cis + "/kho-thuoc",
  ban_thuoc: cis + "/ban-thuoc",
  thong_ke: cis + "/thong-ke",
  phauthuat_thu_thuat: cis + "/phau-thuat-thu-thuat",
  //phòng

  phong: cis + "/phong",
  bao_cao_phieu_thu: cis + "/bao-cao-phieu-thu",
  bao_cao_vien_phi: cis + "/bao-cao-vien-phi",
  bao_cao_tiep_don: cis + "/bao-cao-tiep-don",

  // RIS
  mau_mo_ta_cdha: cis + "/mau-mo-ta-cdha",
  tra_ket_qua_cdha: cis + "/tra-ket-qua-cdha",
  bao_cao_cdha: cis + "/bao-cao-cdha",

  //support
  ho_tro_khach_hang: cis + "/ho-tro-khach-hang",


  duoc_quan_ly_phieu_nhap_xuat: duoc + "/quan-ly-phieu-nhap-xuat",
  duoc_bao_cao_duoc_ngoai_tru: duoc + "/bao-cao-duoc-ngoai-tru",
  duoc_quan_ly_xuat_khac: duoc + "/quan-ly-xuat-khac",
  duoc_kho_duoc_ngoai_tru: duoc + "/kho-duoc-ngoai-tru",
  duoc_nha_cung_cap: duoc + "/nha-cung-cap",
  duoc_ton_kho: duoc + "/ton-kho",
  duoc_kho_thuoc: duoc + "/kho-thuoc",
  duoc_ban_thuoc: duoc + "/ban-thuoc",
  duoc_bao_cao: duoc + "/bao-cao",
  
  // Gói Dv
  quan_ly_tam_ung: cis + "/quan-ly-tam-ung",
  quan_ly_cong_no: cis + "/quan-ly-cong-no",
  danh_sach_goi_dv: cis + "/danh-sach-goi-dich-vu",
  quan_ly_dk_goi_dv: cis + "/quan-ly-dang-ky-goi-dich-vu",
  quan_ly_su_dung_goi_dv: cis + "/quan-ly-su-dung-goi-dich-vu",
  quan_ly_dv_chi_dinh: cis + "/quan-ly-kham-benh/quan-ly-dich-vu",

};

export default paths;
