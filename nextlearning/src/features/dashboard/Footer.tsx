import {selectVersion} from "../interface/interfaceSlice";
import {selectBannerText} from "../interface/interfaceSlice";

import {useAppSelector} from "../../app/hooks";
import {Fragment} from "react";

const Footer = () => {
    const version = useAppSelector(selectVersion)
    const bannerText = useAppSelector(selectBannerText)

    return (
      <Fragment>
          <footer className="main-footer">
              <strong>{bannerText}</strong>
              <div className="float-right d-none d-sm-inline-block">
                  <b>Version: {version}</b>
              </div>
          </footer>
      </Fragment>
    );
};

export default Footer