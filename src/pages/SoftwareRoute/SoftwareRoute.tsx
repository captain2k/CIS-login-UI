import React, { useEffect, useMemo } from "react"
import { Card, Col, Layout, Row, Spin } from "antd";
import _ from "lodash";
import styles from "./softwareRoute.module.less";
import {
    PhanHeCIS, QuanLy, PhanHeVatTu, PhanHeReport,
    PhanHeMed, PhanHeLIS, PhanHeRIS, PhanHePRM
} from "../../assets/svg/index.js";
import { dcLink } from "./constantLink.js";
import { useNavigate } from 'react-router-dom';
import { paths, urlKeys } from "../../constants";
