import dayjs from 'dayjs';

export const makeNotiMail = (email: string): string => {
  return `
  <div style="background-color: #eee">
  <div
    class="layout one-col fixed-width stack"
    style="
      margin: 0 auto;
      max-width: 600px;
      min-width: 320px;
      width: 320px;
      width: calc(28000% - 167400px);
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    "
  >
    <div
      class="layout__inner"
      style="
        border-collapse: collapse;
        display: table;
        width: 100%;
        background-color: #000000;
      "
    >
      <!--[if (mso)|(IE)]><table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #000000;"><td style="width: 600px" class="w560"><![endif]-->
      <div
        class="column"
        style="
          text-align: left;
          color: #000;
          font-size: 14px;
          line-height: 21px;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
        "
      >
        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 10px; font-size: 1px">
            &nbsp;
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div
            style="
              mso-line-height-rule: exactly;
              mso-text-raise: 11px;
              vertical-align: middle;
            "
          >
            <p style="margin-top: 0; margin-bottom: 20px; text-align: right">
            <span style="color: #ffffff">&nbsp;${dayjs(new Date()).format(
              'YYYY-MM-DD'
            )}</span>
            </p>
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div
            style="
              font-size: 12px;
              font-style: normal;
              font-weight: normal;
              line-height: 19px;
              margin-bottom: 20px;
            "
            align="left"
          >
            <a
              style="
                text-decoration: underline;
                transition: opacity 0.1s ease-in;
                color: #41637e;
              "
              href="http://www.example.com"
              target="_blank"
              ><img
                style="
                  border: 0;
                  display: block;
                  height: auto;
                  width: 100%;
                  max-width: 95px;
                "
                alt=""
                width="95"
                src="https://i1.createsend1.com/ei/y/01/D59/10E/194633/csfinal/Rise-9904510b6d3cf03c.png"
            /></a>
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 20px; font-size: 1px">
            &nbsp;
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div
            style="
              mso-line-height-rule: exactly;
              mso-text-raise: 11px;
              vertical-align: middle;
            "
          >
            <h1
              class="size-30"
              style="
                margin-top: 0;
                margin-bottom: 0;
                font-style: normal;
                font-weight: normal;
                color: #000;
                font-size: 26px;
                line-height: 34px;
              "
              lang="x-size-30"
            >
              <span style="color: #ffffff">우리는 패션 &amp; 코스메틱 라이브 쇼핑을</span>
            </h1>
            <h1
              class="size-30"
              style="
                margin-top: 20px;
                margin-bottom: 20px;
                font-style: normal;
                font-weight: normal;
                color: #000;
                font-size: 26px;
                line-height: 34px;
              "
              lang="x-size-30"
            >
              <span style="color: #ffffff">디렉팅하는 Live MCN 입니다.</span>
            </h1>
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 50px; font-size: 1px">
            &nbsp;
          </div>
        </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </div>
  </div>

  <div
    class="layout one-col fixed-width stack"
    style="
      margin: 0 auto;
      max-width: 600px;
      min-width: 320px;
      width: 320px;
      width: calc(28000% - 167400px);
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    "
  >
    <div
      class="layout__inner"
      style="
        border-collapse: collapse;
        display: table;
        width: 100%;
        background-color: #ffffff;
      "
    >
      <div
        class="column"
        style="
          text-align: left;
          color: #000;
          font-size: 14px;
          line-height: 21px;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
        "
      >
        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 30px; font-size: 1px">
            &nbsp;
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 5px; font-size: 1px">
            &nbsp;
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div
            style="
              font-size: 12px;
              font-style: normal;
              font-weight: normal;
              line-height: 19px;
              margin-bottom: 20px;
            "
            align="center"
          >
            <a
              style="
                text-decoration: underline;
                transition: opacity 0.1s ease-in;
                color: #41637e;
              "
              href="http://www.riseenm.com"
              target="_blank"
              ><img
                style="
                  border: 0;
                  display: block;
                  height: auto;
                  width: 100%;
                  max-width: 900px;
                "
                alt=""
                width="560"
                src="https://i2.createsend1.com/ei/y/01/D59/10E/194633/csfinal/2021-08-206.42.31-990000079e04513c.png"
            /></a>
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div
            style="
              mso-line-height-rule: exactly;
              mso-text-raise: 11px;
              vertical-align: middle;
            "
          >
            <h3
              class="size-30"
              style="
                margin-top: 0;
                margin-bottom: 12px;
                font-style: normal;
                font-weight: normal;
                color: #000;
                font-size: 26px;
                line-height: 34px;
              "
              lang="x-size-30"
            >
              ${email} 님으로 부터 이메일 도착
            </h3>
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div
            style="
              mso-line-height-rule: exactly;
              mso-text-raise: 11px;
              vertical-align: middle;
            "
          >
            <p style="margin-top: 0; margin-bottom: 20px">${email} 님이 출시 알림 등록</p>
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div
            class="btn btn--flat btn--large"
            style="margin-bottom: 20px; text-align: left"
          >
            <!--[if !mso]--><a
              style="
                border-radius: 0;
                display: inline-block;
                font-size: 14px;
                font-weight: bold;
                line-height: 24px;
                padding: 12px 24px;
                text-align: center;
                text-decoration: none !important;
                transition: opacity 0.1s ease-in;
                color: #000000 !important;
                background-color: #41fec8;
                font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
              "
              href="http://www.riseenm.com"
              target="_blank"
              >VISIT RISE</a
            >
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 20px; font-size: 1px">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="layout two-col fixed-width stack"
    style="
      margin: 0 auto;
      max-width: 600px;
      min-width: 320px;
      width: 320px;
      width: calc(28000% - 167400px);
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    "
  >
    <div
      class="layout__inner"
      style="
        border-collapse: collapse;
        display: table;
        width: 100%;
        background-color: #ffffff;
      "
    >
      <div
        class="column"
        style="
          text-align: left;
          color: #000;
          font-size: 14px;
          line-height: 21px;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
          max-width: 320px;
          min-width: 300px;
          width: 320px;
          width: calc(12300px - 2000%);
          float: left;
        "
      >
        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 10px; font-size: 1px">
            &nbsp;
          </div>
        </div>
      </div>
      <!--[if (mso)|(IE)]></td><td style="width: 300px" valign="top" class="w260"><![endif]-->
      <div
        class="column"
        style="
          text-align: left;
          color: #000;
          font-size: 14px;
          line-height: 21px;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
          max-width: 320px;
          min-width: 300px;
          width: 320px;
          width: calc(12300px - 2000%);
          float: left;
        "
      >
        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 10px; font-size: 1px">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="layout one-col fixed-width stack"
    style="
      margin: 0 auto;
      max-width: 600px;
      min-width: 320px;
      width: 320px;
      width: calc(28000% - 167400px);
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    "
  >
    <div
      class="layout__inner"
      style="
        border-collapse: collapse;
        display: table;
        width: 100%;
        background-color: #ffffff;
      "
    >
      <div
        class="column"
        style="
          text-align: left;
          color: #000;
          font-size: 14px;
          line-height: 21px;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
        "
      >
        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 50px; font-size: 1px">
            &nbsp;
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div
            style="
              mso-line-height-rule: exactly;
              mso-text-raise: 11px;
              vertical-align: middle;
            "
          >
            <p
              class="size-36"
              style="
                mso-text-raise: 13px;
                margin-top: 0;
                margin-bottom: 20px;
                font-size: 30px;
                line-height: 38px;
              "
              lang="x-size-36"
            >
              이야기 이야기 이야기
            </p>
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 10px; font-size: 1px">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="layout two-col fixed-width stack"
    style="
      margin: 0 auto;
      max-width: 600px;
      min-width: 320px;
      width: 320px;
      width: calc(28000% - 167400px);
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    "
  >
    <div
      class="layout__inner"
      style="
        border-collapse: collapse;
        display: table;
        width: 100%;
        background-color: #ffffff;
      "
    >
      <div
        class="column"
        style="
          text-align: left;
          color: #000;
          font-size: 14px;
          line-height: 21px;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
          max-width: 320px;
          min-width: 300px;
          width: 320px;
          width: calc(12300px - 2000%);
          float: left;
        "
      >
        <div style="margin-left: 20px; margin-right: 20px">
          <div
            style="
              mso-line-height-rule: exactly;
              mso-text-raise: 11px;
              vertical-align: middle;
            "
          >
            <p style="margin-top: 0; margin-bottom: 0">
              Blah Blah Blah&nbsp;Blah Blah Blah&nbsp;Blah Blah Blah&nbsp;Blah Blah
              Blah&nbsp;Blah Blah Blah&nbsp;Blah Blah Blah
            </p>
          </div>
        </div>
      </div>
      <div
        class="column"
        style="
          text-align: left;
          color: #000;
          font-size: 14px;
          line-height: 21px;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
          max-width: 320px;
          min-width: 300px;
          width: 320px;
          width: calc(12300px - 2000%);
          float: left;
        "
      >
        <div style="margin-left: 20px; margin-right: 20px">
          <div
            style="
              mso-line-height-rule: exactly;
              mso-text-raise: 11px;
              vertical-align: middle;
            "
          >
            <p style="margin-top: 0; margin-bottom: 0">
              Blah Blah Blah&nbsp;Blah Blah Blah&nbsp;Blah Blah Blah&nbsp;Blah Blah
              Blah&nbsp;Blah Blah Blah&nbsp;Blah Blah Blah
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="layout one-col fixed-width stack"
    style="
      margin: 0 auto;
      max-width: 600px;
      min-width: 320px;
      width: 320px;
      width: calc(28000% - 167400px);
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    "
  >
    <div
      class="layout__inner"
      style="
        border-collapse: collapse;
        display: table;
        width: 100%;
        background-color: #ffffff;
      "
    >
      <div
        class="column"
        style="
          text-align: left;
          color: #000;
          font-size: 14px;
          line-height: 21px;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
        "
      >
        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 51px; font-size: 1px">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="layout one-col fixed-width stack"
    style="
      margin: 0 auto;
      max-width: 600px;
      min-width: 320px;
      width: 320px;
      width: calc(28000% - 167400px);
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    "
  >
    <div
      class="layout__inner"
      style="
        border-collapse: collapse;
        display: table;
        width: 100%;
        background-color: #000000;
      "
    >
      <div
        class="column"
        style="
          text-align: left;
          color: #000;
          font-size: 14px;
          line-height: 21px;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
        "
      >
        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 40px; font-size: 1px">
            &nbsp;
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div
            style="
              mso-line-height-rule: exactly;
              mso-text-raise: 11px;
              vertical-align: middle;
            "
          >
            <p
              class="size-36"
              style="
                mso-text-raise: 13px;
                margin-top: 0;
                margin-bottom: 20px;
                font-size: 30px;
                line-height: 38px;
              "
              lang="x-size-36"
            >
              <span style="color: #ffffff"
                >FOLLOW US @Rise&nbsp;FOR THE LATEST AND GREATEST</span
              >
            </p>
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 30px; font-size: 1px">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="layout fixed-width stack"
    style="
      margin: 0 auto;
      max-width: 600px;
      min-width: 320px;
      width: 320px;
      width: calc(28000% - 167400px);
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    "
  >
    <div
      class="layout__inner"
      style="
        border-collapse: collapse;
        display: table;
        width: 100%;
        background-color: #000000;
      "
    >
      <div
        class="column narrow"
        style="
          text-align: left;
          color: #000;
          font-size: 14px;
          line-height: 21px;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
          float: left;
          max-width: 320px;
          min-width: 200px;
          width: 320px;
          width: calc(72200px - 12000%);
        "
      >
        <div style="margin-left: 20px; margin-right: 20px">
          <div
            class="btn btn--flat btn--medium"
            style="margin-bottom: 20px; text-align: left"
          >
            <!--[if !mso]--><a
              style="
                border-radius: 0;
                display: inline-block;
                font-size: 12px;
                font-weight: bold;
                line-height: 22px;
                padding: 10px 20px;
                text-align: center;
                text-decoration: none !important;
                transition: opacity 0.1s ease-in;
                color: #000000 !important;
                background-color: #41fec8;
                font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
              "
              href="https://www.instagram.com/riseenm/"
              target="_blank"
              >Visit Instagram</a
            >
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div
            class="btn btn--flat btn--medium"
            style="margin-bottom: 20px; text-align: left"
          >
            <!--[if !mso]--><a
              style="
                border-radius: 0;
                display: inline-block;
                font-size: 12px;
                font-weight: bold;
                line-height: 22px;
                padding: 10px 20px;
                text-align: center;
                text-decoration: none !important;
                transition: opacity 0.1s ease-in;
                color: #000000 !important;
                background-color: #41fec8;
                font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
              "
              href="https://www.facebook.com/%EB%9D%BC%EC%9D%B4%EC%A6%88-RISE-ENM-108682494840345"
              target="_blank"
              >Visit Facebook</a
            >
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div style="mso-line-height-rule: exactly; line-height: 20px; font-size: 1px">
            &nbsp;
          </div>
        </div>
      </div>
      <div
        class="column wide"
        style="
          text-align: left;
          color: #000;
          font-size: 14px;
          line-height: 21px;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
          float: left;
          max-width: 400px;
          min-width: 320px;
          width: 320px;
          width: calc(8000% - 47600px);
        "
      >
        <div style="margin-left: 20px; margin-right: 20px">
          <div
            style="
              mso-line-height-rule: exactly;
              mso-text-raise: 11px;
              vertical-align: middle;
            "
          >
            <p
              class="size-13"
              style="
                margin-top: 0;
                margin-bottom: 20px;
                font-size: 13px;
                line-height: 21px;
                text-align: right;
              "
              lang="x-size-13"
            >
              <span style="color: #ffffff"><strong>Believer | 패스터</strong></span>
            </p>
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px">
          <div
            style="
              mso-line-height-rule: exactly;
              mso-text-raise: 11px;
              vertical-align: middle;
            "
          >
            <p
              class="size-9"
              style="
                mso-text-raise: 9px;
                margin-top: 0;
                margin-bottom: 0;
                font-size: 9px;
                line-height: 16px;
                text-align: right;
              "
              lang="x-size-9"
            >
              <span style="color: #ffffff"
                >(03086) 서울특별시 종로구 동숭길 133 상명대학교 대학로 AI융합센터</span
              >
            </p>
            <p
              class="size-9"
              style="
                mso-text-raise: 9px;
                margin-top: 20px;
                margin-bottom: 0;
                font-size: 9px;
                line-height: 16px;
                text-align: right;
              "
              lang="x-size-9"
            >
              <span style="color: #ffffff"
                >M: 1688 - 6183<br />
                E:&nbsp;</span
              ><a
                style="
                  text-decoration: underline;
                  transition: opacity 0.1s ease-in;
                  color: #41637e;
                "
                href="mailto:official@believer.kr"
                target="_blank"
                >official@believer.kr</a
              ><br />
              <span style="color: #ffffff"
                >W:&nbsp;<a
                  style="
                    text-decoration: underline;
                    transition: opacity 0.1s ease-in;
                    color: #41637e;
                  "
                  href="http://www.riseenm.com"
                  target="_blank"
                  >www.riseenm.com</a
                ></span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div style="mso-line-height-rule: exactly; line-height: 20px; font-size: 20px">
    &nbsp;
  </div>
</div>
<div role="contentinfo">
  <div style="line-height: 4px; font-size: 4px" id="footer-top-spacing">&nbsp;</div>
  <div
    class="layout email-flexible-footer email-footer"
    style="
      margin: 0 auto;
      max-width: 600px;
      min-width: 320px;
      width: 320px;
      width: calc(28000% - 167400px);
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    "
    id="footer-content"
  >
    <div
      class="layout__inner center-aligned-footer"
      style="border-collapse: collapse; display: table; width: 100%"
    >
      <div
        class="column"
        style="
          text-align: center;
          font-size: 12px;
          line-height: 19px;
          color: #000;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
          display: none;
        "
        align="center"
      >
        <div
          class="footer-logo emb-logo-margin-box"
          style="
            font-size: 26px;
            line-height: 32px;
            margin-top: 10px;
            margin-bottom: 20px;
            color: #7b663d;
            font-family: Roboto, Tahoma, sans-serif;
          "
          align="center"
        >
          <div emb-flexible-footer-logo="" align="center"></div>
        </div>
      </div>
      <div
        class="column"
        style="
          text-align: center;
          font-size: 12px;
          line-height: 19px;
          color: #000;
          font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
          display: none;
        "
        align="center"
      ></div>
      <table
        style="border-collapse: collapse; table-layout: fixed; width: 100%"
        cellpadding="0"
        cellspacing="0"
      >
        <tbody>
          <tr>
            <td>
              <div
                class="column js-footer-additional-info"
                style="
                  text-align: center;
                  font-size: 12px;
                  line-height: 19px;
                  color: #000;
                  font-family: Montserrat, DejaVu Sans, Verdana, sans-serif;
                  display: inline;
                  width: 100%;
                "
                align="center"
              >
                <div
                  style="
                    margin-left: 0;
                    margin-right: 0;
                    margin-top: 10px;
                    margin-bottom: 10px;
                  "
                >
                  <div
                    class="email-footer__additional-info"
                    style="
                      font-size: 12px;
                      line-height: 19px;
                      margin-bottom: 18px;
                      margin-top: 0px;
                    "
                  >
                    <div bind-to="address">
                      <p
                        class="email-flexible-footer__additionalinfo--center"
                        style="margin-top: 0; margin-bottom: 0"
                      >
                        <span style="color: #878787"
                          >CONFIDENTIALITY NOTICE: This message (including any
                          attachments) is confidential and may be privileged. It may be
                          read, copied and used only by the intended recipient. If you
                          have received it in error please contact the sender (by return
                          e-mail) immediately and delete this message. Any unauthorized
                          use or dissemination of this message in whole or in parts is
                          strictly prohibited. In the event of leakage without the
                          company's permission, the criminal punishment procedure will be
                          carried out.<br />
                          본 이메일의 내용과 첨부파일은 정당한 수신인에게만 열람, 복사,
                          사용이 가능한 기업 정보 입니다. 만일 오류로 인하여 수신 받았을
                          경우 발송자에게 회신으로 알린 후 즉시 본 이메일의 삭제를 요청
                          드립니다. 본 이메일의 무단 사용과 배포는 엄격히 금지 되어
                          있습니다. 회사의 승인없이 유출할 경우, 형사 처벌 절차를
                          진행합니다.</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div style="line-height: 40px; font-size: 40px" id="footer-bottom-spacing">&nbsp;</div>
</div>

    `;
};

export const makeNotiMail2 = (email: string): string => {
  return `
  <div style="background-color: #eee">
  <div role="banner">
    <div
      class="preheader"
      style="
        margin: 0 auto;
        max-width: 560px;
        min-width: 280px;
        width: 280px;
        width: calc(28000% - 167440px);
      "
    >
      <div style="border-collapse: collapse; display: table; width: 100%">
        <div
          class="snippet"
          style="
            display: table-cell;
            float: left;
            font-size: 12px;
            line-height: 19px;
            max-width: 280px;
            min-width: 140px;
            width: 140px;
            width: calc(14000% - 78120px);
            padding: 10px 0 5px 0;
            color: #999;
            font-family: sans-serif;
          "
        ></div>
      </div>
    </div>
    <div
      class="header"
      style="
        margin: 0 auto;
        max-width: 600px;
        min-width: 320px;
        width: 320px;
        width: calc(28000% - 167400px);
      "
      id="emb-email-header-container"
    >
      <div
        class="logo emb-logo-margin-box"
        style="
          font-size: 26px;
          line-height: 32px;
          margin-top: 6px;
          margin-bottom: 20px;
          color: #41637e;
          font-family: Avenir, sans-serif;
          margin-left: 20px;
          margin-right: 20px;
        "
        align="center"
      >
        <div class="logo-center" align="center" id="emb-email-header">
          <img
            style="display: block; height: auto; width: 100%; border: 0; max-width: 152px"
            src="https://i.ibb.co/41BDgDj/Rise5.png"
            alt=""
            width="152"
          />
        </div>
      </div>
    </div>
  </div>
  <div>
    <div
      class="layout one-col fixed-width stack"
      style="
        margin: 0 auto;
        max-width: 600px;
        min-width: 320px;
        width: 320px;
        width: calc(28000% - 167400px);
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
      "
    >
      <div
        class="layout__inner"
        style="
          border-collapse: collapse;
          display: table;
          width: 100%;
          background-color: #ffffff;
        "
      >
        <div
          class="column"
          style="
            text-align: left;
            color: #000;
            font-size: 15px;
            line-height: 23px;
            font-family: sans-serif;
          "
        >
          <div style="margin-left: 20px; margin-right: 20px; margin-top: 24px">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p style="margin-top: 0; margin-bottom: 20px">
                <span style="color: #565656"><strong>BREAKING</strong></span>
              </p>
            </div>
          </div>

          <div style="margin-left: 20px; margin-right: 20px">
            <div
              style="
                font-size: 12px;
                font-style: normal;
                font-weight: normal;
                line-height: 19px;
                margin-bottom: 20px;
              "
              align="left"
            >
              <a
                style="
                  text-decoration: underline;
                  transition: opacity 0.1s ease-in;
                  color: #000;
                "
                href="http://www.riseenm.com"
                target="_blank"
                ><img
                  style="
                    border: 0;
                    display: block;
                    height: auto;
                    width: 100%;
                    max-width: 300px;
                  "
                  alt="Breaking"
                  width="300"
                  src="https://i1.createsend1.com/ei/y/01/D59/10E/231017/csfinal/Rectangle81-990000000003cf3c.png"
              /></a>
            </div>
          </div>

          <div style="margin-left: 20px; margin-right: 20px">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <h1
                style="
                  margin-top: 0;
                  margin-bottom: 0;
                  font-style: normal;
                  font-weight: normal;
                  color: #000;
                  font-size: 40px;
                  line-height: 47px;
                  font-family: sans-serif;
                "
              >
                <span class="font-sans-serif"
                  ><strong>21.09.01&nbsp; &nbsp;00:00</strong></span
                >
              </h1>
              <h1
                style="
                  margin-top: 20px;
                  margin-bottom: 20px;
                  font-style: normal;
                  font-weight: normal;
                  color: #000;
                  font-size: 40px;
                  line-height: 47px;
                  font-family: sans-serif;
                "
              >
                <span class="font-sans-serif"><strong>RiSE COUNT DOWN</strong></span>
              </h1>
            </div>
          </div>

          <div style="margin-left: 20px; margin-right: 20px">
            <div style="mso-line-height-rule: exactly; line-height: 20px; font-size: 1px">
              &nbsp;
            </div>
          </div>

          <div style="margin-left: 20px; margin-right: 20px">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p style="margin-top: 0; margin-bottom: 20px; text-align: center">
                ${email} 님이 출시알림 등록 <br/>
                ${dayjs(new Date()).format('YYYY-MM-DD | HH:mm:ss')}
              </p>
            </div>
          </div>

          <div style="margin-left: 20px; margin-right: 20px; margin-bottom: 24px">
            <div class="btn btn--flat btn--large" style="text-align: center">
              <!--[if !mso]--><a
                style="
                  border-radius: 0;
                  display: inline-block;
                  font-size: 14px;
                  font-weight: bold;
                  line-height: 24px;
                  padding: 12px 24px;
                  text-align: center;
                  text-decoration: none !important;
                  transition: opacity 0.1s ease-in;
                  color: #fff !important;
                  background-color: #fa370b;
                  font-family: sans-serif;
                "
                href="https://riseenm.com"
                target="_blank"
                >VISIT</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="layout one-col fixed-width stack"
      style="
        margin: 0 auto;
        max-width: 600px;
        min-width: 320px;
        width: 320px;
        width: calc(28000% - 167400px);
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
      "
    >
      <div
        class="layout__inner"
        style="
          border-collapse: collapse;
          display: table;
          width: 100%;
          background-color: #ffffff;
        "
      >
        <div
          class="column"
          style="
            text-align: left;
            color: #000;
            font-size: 15px;
            line-height: 23px;
            font-family: sans-serif;
          "
        >
          <div
            style="
              margin-left: 20px;
              margin-right: 20px;
              margin-top: 24px;
              margin-bottom: 24px;
            "
          >
            <div
              style="
                font-size: 12px;
                font-style: normal;
                font-weight: normal;
                line-height: 19px;
              "
              align="center"
            >
              <img
                style="
                  border: 0;
                  display: block;
                  height: auto;
                  width: 100%;
                  max-width: 238px;
                "
                alt="Divider line"
                width="238"
                src="https://i2.createsend1.com/ei/y/01/D59/10E/231017/csfinal/line-990a2803cf028a3c.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="layout one-col fixed-width stack"
      style="
        margin: 0 auto;
        max-width: 600px;
        min-width: 320px;
        width: 320px;
        width: calc(28000% - 167400px);
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
      "
    >
      <div
        class="layout__inner"
        style="
          border-collapse: collapse;
          display: table;
          width: 100%;
          background-color: #ffffff;
        "
      >
        <div
          class="column"
          style="
            text-align: left;
            color: #000;
            font-size: 15px;
            line-height: 23px;
            font-family: sans-serif;
          "
        >
          <div
            style="
              margin-left: 20px;
              margin-right: 20px;
              margin-top: 24px;
              margin-bottom: 24px;
            "
          >
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <h2
                style="
                  margin-top: 0;
                  margin-bottom: 0;
                  font-style: normal;
                  font-weight: normal;
                  color: #000;
                  font-size: 20px;
                  line-height: 28px;
                "
              >
                <strong>About</strong>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="layout two-col fixed-width stack"
      style="
        margin: 0 auto;
        max-width: 600px;
        min-width: 320px;
        width: 320px;
        width: calc(28000% - 167400px);
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
      "
    >
      <div
        class="layout__inner"
        style="
          border-collapse: collapse;
          display: table;
          width: 100%;
          background-color: #ffffff;
        "
      >
        <div
          class="column"
          style="
            text-align: left;
            color: #000;
            font-size: 15px;
            line-height: 23px;
            font-family: sans-serif;
            max-width: 320px;
            min-width: 300px;
            width: 320px;
            width: calc(12300px - 2000%);
            float: left;
          "
        >
          <div
            style="
              margin-left: 20px;
              margin-right: 20px;
              margin-top: 24px;
              margin-bottom: 24px;
            "
          >
            <div
              style="
                font-size: 12px;
                font-style: normal;
                font-weight: normal;
                line-height: 19px;
              "
              align="left"
            >
              <a
                style="
                  text-decoration: underline;
                  transition: opacity 0.1s ease-in;
                  color: #000;
                "
                href="http://www.riseenm.com"
                target="_blank"
                ><img
                  style="
                    border: 0;
                    display: block;
                    height: auto;
                    width: 100%;
                    max-width: 374px;
                  "
                  alt=""
                  width="260"
                  src="https://i.ibb.co/99ZPV8x/Mask-Group-adde9f0d71d73f6b.png"
              /></a>
            </div>
          </div>
        </div>
        <div
          class="column"
          style="
            text-align: left;
            color: #000;
            font-size: 15px;
            line-height: 23px;
            font-family: sans-serif;
            max-width: 320px;
            min-width: 300px;
            width: 320px;
            width: calc(12300px - 2000%);
            float: left;
          "
        >
          <div style="margin-left: 20px; margin-right: 20px; margin-top: 24px">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <h3
                style="
                  margin-top: 0;
                  margin-bottom: 12px;
                  font-style: normal;
                  font-weight: normal;
                  color: #000;
                  font-size: 17px;
                  line-height: 26px;
                "
              >
                <a
                  style="
                    text-decoration: none;
                    transition: opacity 0.1s ease-in;
                    color: #000;
                  "
                  data-emb-iscopy="true"
                  href="http://www.riseenm.com"
                  target="_blank"
                  ><strong>Create Live Shopping Content</strong></a
                >
              </h3>
            </div>
          </div>

          <div style="margin-left: 20px; margin-right: 20px; margin-bottom: 24px">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p style="margin-top: 0; margin-bottom: 0">
                작가님들이 팀을 이뤄 브랜드와 상품을 분석하고 방송을 스타일링 하며
                기획부터 사전 마케팅, 방송 연출, 라이브 진행까지 모든 솔루션을
                경험해보세요
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="layout two-col fixed-width stack"
      style="
        margin: 0 auto;
        max-width: 600px;
        min-width: 320px;
        width: 320px;
        width: calc(28000% - 167400px);
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
      "
    >
      <div
        class="layout__inner"
        style="
          border-collapse: collapse;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          background-color: #ffffff;
        "
      >

        <div
          class="column"
          style="
            text-align: left;
            color: #000;
            font-size: 15px;
            line-height: 23px;
            font-family: sans-serif;
            max-width: 320px;
            min-width: 300px;
            width: 320px;
            width: calc(12300px - 2000%);
            float: left;
          "
        >
          <div
            style="
              font-size: 12px;
              font-style: normal;
              font-weight: normal;
              line-height: 19px;
            "
            align="center"
          >
            <img
              class="
                gnd-corner-image
                gnd-corner-image-center
                gnd-corner-image-top
                gnd-corner-image-bottom
              "
              style="
                border: 0;
                display: block;
                height: auto;
                width: 260px;
                max-width: 480px;
              "
              alt=""
              width="300"
              src="https://i.ibb.co/D88Vc93/20210316151150-ta0008a2312-n-l.jpg"
            />
          </div>
        </div>
        <div
        class="column"
        style="
          text-align: left;
          color: #000;
          font-size: 15px;
          line-height: 23px;
          font-family: sans-serif;
          max-width: 320px;
          min-width: 300px;
          width: 320px;
          width: calc(12300px - 2000%);
          float: left;
        "
      >
        <div style="margin-left: 20px; margin-right: 20px; margin-top: 24px">
          <div
            style="
              mso-line-height-rule: exactly;
              mso-text-raise: 11px;
              vertical-align: middle;
            "
          >
            <h3
              style="
                margin-top: 0;
                margin-bottom: 12px;
                font-style: normal;
                font-weight: normal;
                color: #000;
                font-size: 17px;
                line-height: 26px;
              "
            >
              <a
                style="
                  text-decoration: none;
                  transition: opacity 0.1s ease-in;
                  color: #000;
                "
                data-emb-iscopy="true"
                href="http://www.riseenm.com"
                target="_blank"
                ><strong>Optimized for the brand <br/> concept and style.</strong></a
              >
            </h3>
          </div>
        </div>

        <div style="margin-left: 20px; margin-right: 20px; margin-bottom: 24px">
          <div
            style="
              mso-line-height-rule: exactly;
              mso-text-raise: 11px;
              vertical-align: middle;
            "
          >
            <p style="margin-top: 0; margin-bottom: 0">
              고급스러운 하이엔드 브랜드부터 10-20대를 사로잡는 캐주얼 브랜드까지 가장
              잘 어울리는 쇼핑호스트 + 크리에이터를 매칭하여 최고의 라이브 컨디션을 위한
              1:1 맞춤형 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div
      class="layout two-col fixed-width stack"
      style="
        margin: 0 auto;
        max-width: 600px;
        min-width: 320px;
        width: 320px;
        width: calc(28000% - 167400px);
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
      "
    >
      <div
        class="layout__inner"
        style="
          border-collapse: collapse;
          display: table;
          width: 100%;
          background-color: #ffffff;
        "
      >
        <div
          class="column"
          style="
            text-align: left;
            color: #000;
            font-size: 15px;
            line-height: 23px;
            font-family: sans-serif;
            max-width: 320px;
            min-width: 300px;
            width: 320px;
            width: calc(12300px - 2000%);
            float: left;
          "
        >
          <div
            style="
              margin-left: 20px;
              margin-right: 20px;
              margin-top: 24px;
              margin-bottom: 24px;
            "
          >
            <div
              style="
                font-size: 12px;
                font-style: normal;
                font-weight: normal;
                line-height: 19px;
              "
              align="left"
            >
              <a
                style="
                  text-decoration: underline;
                  transition: opacity 0.1s ease-in;
                  color: #000;
                "
                href="http://www.riseenm.com"
                target="_blank"
                ><img
                  style="
                    border: 0;
                    display: block;
                    height: auto;
                    width: 100%;
                    max-width: 480px;
                  "
                  alt=""
                  width="260"
                  src="https://i.ibb.co/zRQgPQr/ti079a9401.png"
              /></a>
            </div>
          </div>
        </div>
        <div
          class="column"
          style="
            text-align: left;
            color: #000;
            font-size: 15px;
            line-height: 23px;
            font-family: sans-serif;
            max-width: 320px;
            min-width: 300px;
            width: 320px;
            width: calc(12300px - 2000%);
            float: left;
          "
        >
          <div style="margin-left: 20px; margin-right: 20px; margin-top: 24px">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <h3
                style="
                  margin-top: 0;
                  margin-bottom: 12px;
                  font-style: normal;
                  font-weight: normal;
                  color: #000;
                  font-size: 17px;
                  line-height: 26px;
                  text-align: left;
                "
              >
                <a
                  style="
                    text-decoration: none;
                    transition: opacity 0.1s ease-in;
                    color: #000;
                  "
                  data-emb-iscopy="true"
                  href="http://www.riseenm.com"
                  target="_blank"
                  ><strong>Real-Time Viewer</strong><br/><strong>No.1 sales record</strong>
              </h3>
            </div>
          </div>

          <div style="margin-left: 20px; margin-right: 20px; margin-bottom: 24px">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p
                class="size-14"
                style="
                  margin-top: 0;
                  margin-bottom: 0;
                  font-size: 14px;
                  line-height: 21px;
                "
                lang="x-size-14"
              >
                브랜드에 가장 효과적인 채널에서 라이브 쇼핑을 진행할 수 있습니다. 지금
                라이브 쇼핑 채널이 없다면 패션&amp;뷰티 팬덤이 많은 라이즈 공식 채널에서
                진행할 수 있습니다!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="layout one-col fixed-width stack"
      style="
        margin: 0 auto;
        max-width: 600px;
        min-width: 320px;
        width: 320px;
        width: calc(28000% - 167400px);
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
      "
    >
      <div
        class="layout__inner"
        style="
          border-collapse: collapse;
          display: table;
          width: 100%;
          background-color: #ffffff;
        "
      >
        <div
          class="column"
          style="
            text-align: left;
            color: #000;
            font-size: 15px;
            line-height: 23px;
            font-family: sans-serif;
          "
        >
          <div
            style="
              margin-left: 20px;
              margin-right: 20px;
              margin-top: 24px;
              margin-bottom: 24px;
            "
          >
            <div style="mso-line-height-rule: exactly; line-height: 20px; font-size: 1px">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="layout two-col fixed-width"
      style="
        margin: 0 auto;
        max-width: 600px;
        min-width: 320px;
        width: 320px;
        width: calc(28000% - 167400px);
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
      "
    >
      <div
        class="layout__inner"
        style="
          border-collapse: collapse;
          display: table;
          width: 100%;
          background-color: #000000;
        "
      >
        <div
          class="column"
          style="
            text-align: left;
            color: #000;
            font-size: 15px;
            line-height: 23px;
            font-family: sans-serif;
            display: table-cell;
            vertical-align: top;
            width: 50%;
          "
        >
          <div style="margin-left: 20px; margin-right: 20px; margin-top: 24px">
            <div style="mso-line-height-rule: exactly; line-height: 5px; font-size: 1px">
              &nbsp;
            </div>
          </div>

          <div style="margin-left: 20px; margin-right: 20px; margin-bottom: 24px">
            <div
              style="
                mso-line-height-rule: exactly;
                mso-text-raise: 11px;
                vertical-align: middle;
              "
            >
              <p
                class="size-22"
                style="
                  margin-top: 0;
                  margin-bottom: 0;
                  font-size: 18px;
                  line-height: 26px;
                  text-align: center;
                "
                lang="x-size-22"
              >
                <strong><span style="color: #ffffff">Social Media</span></strong>
              </p>
            </div>
          </div>
        </div>
        <div
          class="column"
          style="
            text-align: left;
            color: #000;
            font-size: 15px;
            line-height: 23px;
            font-family: sans-serif;
            display: table-cell;
            vertical-align: top;
            width: 50%;
          "
        >
          <div
            id="emb-js-socialmedia-7-1"
            class="emb-socialmedia emb-js-content-handle emb-handle emb-active"
            ng-class="{ 'emb-active' :block.isActive, 'emb-hoverable' : !dragging &amp;&amp; !block.isActive, 'content-highlighted': isHighlighted }"
            ng-mouseover="hovered = true; preventMouseEventBubblingIfRequired($event);"
            ng-mouseout="hovered = false;"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
              height: 79px;
            "
          >
            <div
              ng-if="block.links"
              class="emb-socialmedia-link emb-js-img-container emb-content-inner ng-scope"
              ng-repeat="link in block.links"
              ng-style="{ 'text-align': block.alignment }"
              ng-class="{ 'emb-socialmedia-link--vertical' : block.layout == 'vertical'} "
              style="text-align: center"
            >
              <a
                class="emb-content-inner qa-social-link-block-image--facebook"
                href="https://www.facebook.com/%EB%9D%BC%EC%9D%B4%EC%A6%88-RISE-ENM-108682494840345"
                ng-style="getIconBackgroundCss()"
                target="_blank"
                emb-disable-drag=""
                unselectable="on"
                draggable="false"
                ng-click="$event.preventDefault();"
                style="
                  text-align: center;
                  width: 24px;
                  height: 24px;
                  border-radius: 0px;
                  background-color: rgb(255, 255, 255);
                  display: inline-block;
                "
              >
                <img
                  ng-src="https://img.createsend1.com/static/eb/master/13-the-blueprint-3/images/socialmedia/facebook-black-small.png"
                  width="24px"
                  height="24px"
                  alt="facebook"
                  emb-block-render-image=""
                  emb-disable-drag=""
                  unselectable="on"
                  draggable="false"
                  src="https://img.createsend1.com/static/eb/master/13-the-blueprint-3/images/socialmedia/facebook-black-small.png"
                />
              </a>
            </div>
            <!-- end ngIf: block.links --><!-- end ngRepeat: link in block.links --><!-- ngIf: block.links -->
            <div
              ng-if="block.links"
              class="emb-socialmedia-link emb-js-img-container emb-content-inner ng-scope"
              ng-repeat="link in block.links"
              ng-style="{ 'text-align': block.alignment }"
              ng-class="{ 'emb-socialmedia-link--vertical' : block.layout == 'vertical'} "
              style="text-align: center"
            >
              <a
                class="emb-content-inner qa-social-link-block-image--twitter"
                href="unsafe:javascript:void(0)"
                target="_blank"
                ng-style="getIconBackgroundCss()"
                emb-disable-drag=""
                unselectable="on"
                draggable="false"
                ng-click="$event.preventDefault();"
                style="
                  text-align: center;
                  width: 24px;
                  height: 24px;
                  border-radius: 0px;
                  background-color: rgb(255, 255, 255);
                  display: inline-block;
                "
              >
                <img
                  ng-src="https://img.createsend1.com/static/eb/master/13-the-blueprint-3/images/socialmedia/twitter-black-small.png"
                  width="24px"
                  height="24px"
                  alt="twitter"
                  emb-block-render-image=""
                  emb-disable-drag=""
                  unselectable="on"
                  draggable="false"
                  src="https://img.createsend1.com/static/eb/master/13-the-blueprint-3/images/socialmedia/twitter-black-small.png"
                />
              </a>
            </div>
            <!-- end ngIf: block.links --><!-- end ngRepeat: link in block.links --><!-- ngIf: block.links -->
            <div
              ng-if="block.links"
              class="emb-socialmedia-link emb-js-img-container emb-content-inner ng-scope"
              ng-repeat="link in block.links"
              ng-style="{ 'text-align': block.alignment }"
              ng-class="{ 'emb-socialmedia-link--vertical' : block.layout == 'vertical'} "
              style="text-align: center"
            >
              <a
                class="emb-content-inner qa-social-link-block-image--instagram"
                href="https://www.instagram.com/riseenm/"
                ng-style="getIconBackgroundCss()"
                emb-disable-drag=""
                unselectable="on"
                draggable="false"
                ng-click="$event.preventDefault();"
                target="_blank"
                style="
                  text-align: center;
                  width: 24px;
                  height: 24px;
                  border-radius: 0px;
                  background-color: rgb(255, 255, 255);
                  display: inline-block;
                "
              >
                <img
                  ng-src="https://img.createsend1.com/static/eb/master/13-the-blueprint-3/images/socialmedia/instagram-black-small.png"
                  width="24px"
                  height="24px"
                  alt="instagram"
                  emb-block-render-image=""
                  emb-disable-drag=""
                  unselectable="on"
                  draggable="false"
                  src="https://img.createsend1.com/static/eb/master/13-the-blueprint-3/images/socialmedia/instagram-black-small.png"
                />
              </a>
            </div>
            <div
              ng-if="block.links"
              class="emb-socialmedia-link emb-js-img-container emb-content-inner ng-scope"
              ng-repeat="link in block.links"
              ng-style="{ 'text-align': block.alignment }"
              ng-class="{ 'emb-socialmedia-link--vertical' : block.layout == 'vertical'} "
              style="text-align: center"
            >
              <a
                class="emb-content-inner qa-social-link-block-image--website"
                href="https://riseenm.com"
                target="_blank"
                ng-style="getIconBackgroundCss()"
                emb-disable-drag=""
                unselectable="on"
                draggable="false"
                ng-click="$event.preventDefault();"
                style="
                  text-align: center;
                  width: 24px;
                  height: 24px;
                  border-radius: 0px;
                  background-color: rgb(255, 255, 255);
                  display: inline-block;
                "
              >
                <img
                  ng-src="https://img.createsend1.com/static/eb/master/13-the-blueprint-3/images/socialmedia/website-black-small.png"
                  width="24px"
                  height="24px"
                  alt="website"
                  emb-block-render-image=""
                  emb-disable-drag=""
                  unselectable="on"
                  draggable="false"
                  src="https://img.createsend1.com/static/eb/master/13-the-blueprint-3/images/socialmedia/website-black-small.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="contentinfo">
    <div
      style="line-height: 0px; font-size: 0px; margin-top: 20px"
      id="footer-top-spacing"
    >
      &nbsp;
    </div>
    <div
      class="layout email-flexible-footer email-footer"
      style="
        margin: 0 auto;
        max-width: 600px;
        min-width: 320px;
        width: 320px;
        width: calc(28000% - 167400px);
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
      "
      id="footer-content"
    >
      <div
        class="layout__inner left-aligned-footer"
        style="border-collapse: collapse; display: flex; width: 100%; flex-wrap:wrap;"
      >
        <div
          class="column"
          style="
            text-align: left;
            font-size: 12px;
            line-height: 19px;
            color: #999;
            font-family: sans-serif;
          "
        >
          <div
            class="footer-logo emb-logo-margin-box"
            style="
              font-size: 26px;
              line-height: 32px;
              margin-top: 20px;
              margin-bottom: 20px;
              color: #7b663d;
              font-family: Roboto, Tahoma, sans-serif;
            "
            align="center"
          >
            <div style="margin-right: 20px" emb-flexible-footer-logo="" align="center">
              <a
                style="
                  text-decoration: none;
                  transition: opacity 0.1s ease-in;
                  color: #7b663d;
                "
                href="http://www.riseenm.com"
                target="_blank"
                ><img
                  style="
                    border: 0;
                    display: block;
                    height: auto;
                    width: 100%;
                    max-width: 152px;
                  "
                  src="https://i.ibb.co/41BDgDj/Rise5.png"
                  alt=""
                  width="152"
              /></a>
            </div>
          </div>
        </div>
        <div
          class="column"
          style="
            text-align: left;
            font-size: 12px;
            line-height: 19px;
            color: #999;
            font-family: sans-serif;
            display: none;
          "
        >
          <div
            style="margin-left: 0; margin-right: 0; margin-top: 10px; margin-bottom: 10px"
          >
            <div class="footer__share-button"></div>
          </div>
        </div>
        <table
          style="
            border-collapse: collapse;
            table-layout: fixed;
            display: inline-block;
            width: 428px;
          "
          cellpadding="0"
          cellspacing="0"
        >
          <tbody>
            <tr>
              <td>
                <div
                  class="column js-footer-additional-info"
                  style="
                    text-align: left;
                    font-size: 12px;
                    line-height: 19px;
                    color: #999;
                    font-family: sans-serif;
                    width: 428px;
                  "
                >
                  <div
                    style="
                      margin-left: 0;
                      margin-right: 0;
                      margin-top: 10px;
                      margin-bottom: 10px;
                    "
                  >
                    <div
                      class="email-footer__additional-info"
                      style="
                        font-size: 12px;
                        line-height: 19px;
                        margin-bottom: 18px;
                        margin-top: 0px;
                      "
                    >
                      <div>
                        <p
                          class="email-flexible-footer__additionalinfo--center"
                          style="margin-top: 0; margin-bottom: 0; text-align: right"
                        >
                          <strong>Believer | 패스터</strong>
                        </p>
                        <p
                          class="email-flexible-footer__additionalinfo--center"
                          style="margin-top: 0; margin-bottom: 0; text-align: right"
                        >
                          (03086) 서울특별시 종로구 동숭길 133 상명대학교 대학로
                          AI융합센터
                        </p>
                        <p
                          class="email-flexible-footer__additionalinfo--center"
                          style="margin-top: 0; margin-bottom: 0; text-align: right"
                        >
                          M: 1688 - 6183<br />
                          E:&nbsp;<a
                            style="
                              text-decoration: underline;
                              transition: opacity 0.1s ease-in;
                              color: #999;
                            "
                            href="mailto:official@believer.kr"
                            target="_blank"
                            >official@believer.kr</a
                          ><br />
                          W:&nbsp;<a
                            style="
                              text-decoration: underline;
                              transition: opacity 0.1s ease-in;
                              color: #999;
                            "
                            href="http://www.riseenm.com/"
                            target="_blank"
                            >www.riseenm.com</a
                          >
                        </p>
                        <p
                          class="email-flexible-footer__additionalinfo--center"
                          style="margin-top: 0; margin-bottom: 0; text-align: right"
                        >
                          &nbsp;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="line-height: 25px; font-size: 25px" id="footer-bottom-spacing">
      &nbsp;
    </div>
  </div>
</div>

`;
};

type MakeContactMail = {
  budget: string;
  schedule: string;
  name: string;
  email: string;
  tel: string;
  info: string;
  company: string;
};
export const makeContactMail = (
  id: string,
  { budget, schedule, name, email, tel, info, company }: MakeContactMail
): string => {
  return `

<div style="background-color:#e2e1e0;font-family: Open Sans, sans-serif;font-size:100%;font-weight:400;line-height:1.4;color:#000;">
<table style="max-width:670px;margin:50px auto 10px;background-color:#fff;padding:50px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24); border-top: solid 10px green;">
  <thead>
    <tr>
      <th style="text-align:left;"><img style="max-width: 150px;" src="https://i.ibb.co/41BDgDj/Rise5.png" alt="RiSE"></th>
      <th style="text-align:right;font-weight:400;">${dayjs(new Date()).format(
        'YYYY년 MM월 DD일 / HH:mm:ss'
      )}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="height:35px;"></td>
    </tr>
    <tr>
      <td colspan="2" style="border: solid 1px #ddd; padding:10px 20px;">
        <p style="font-size:14px;margin:0 0 6px 0;"><span style="font-weight:bold;display:inline-block;min-width:150px">status</span><b style="color:green;font-weight:normal;margin:0">새로운 Contact !!</b></p>
        <p style="font-size:14px;margin:0 0 6px 0;"><span style="font-weight:bold;display:inline-block;min-width:146px">Contact ID</span> ${id}</p>
      </td>
    </tr>
    <tr>
      <td style="font-size:20px;padding:30px 15px 0 15px;">문의자 정보</td>
    </tr>
    <tr>
      <td style="width:50%;padding:20px;vertical-align:top">
        <p style="margin:0 0 10px 0;padding:0;font-size:14px;"><span style="display:block;font-weight:bold;font-size:13px">Name</span> ${name}</p>
        <p style="margin:0 0 10px 0;padding:0;font-size:14px;"><span style="display:block;font-weight:bold;font-size:13px;">Email</span> ${email}</p>
        <p style="margin:0 0 10px 0;padding:0;font-size:14px;"><span style="display:block;font-weight:bold;font-size:13px;">Phone</span> ${tel}</p>
      </td>
      <td style="width:50%;padding:20px;vertical-align:top">
        <p style="margin:0 0 10px 0;padding:0;font-size:14px;"><span style="display:block;font-weight:bold;font-size:13px;">Company</span> ${company}</p>
        <p style="margin:0 0 10px 0;padding:0;font-size:14px;"><span style="display:block;font-weight:bold;font-size:13px;">Budget</span> ${budget}</p>
        <p style="margin:0 0 10px 0;padding:0;font-size:14px;"><span style="display:block;font-weight:bold;font-size:13px;">Schedule</span> ${schedule}</p>
      </td>
    </tr>
    <tr>
      <td colspan="2" style="font-size:20px;padding:30px 15px 0 15px;">문의내용</td>
    </tr>
    <tr>
      <td colspan="2" style="padding:15px;">
        <p style="max-width:450px; font-size:14px;margin:0;padding:10px;border:solid 1px #ddd;font-weight:bold; letter-spacing: 0.7px;word-spacing: 3px;line-height: 1.5;">
          ${info}
        </p>
       </td>
    </tr>
  </tbody>
  <tfooter>
    <tr>
      <td colspan="2" style="font-size:14px;padding:50px 15px 0 15px;">
        <strong style="display:block;margin:0 0 10px 0;">Believer | 패스터</strong> RiSE<br> 서울특별시 종로구 동숭길 133 상명대학교 대학로 AI융합센터 1층<br><br>
        <b>고객센터 :</b> +82. 02. 1688. 6183<br>
        <b>Email:</b> contact@riseenm.com
      </td>
    </tr>
  </tfooter>
</table>
</div>

  `;
};

export const contactResultMail = (): string => {
  return `
  <div style='width:100%;display:flex; justify-content: center;'>
    <p style="opacity: 0;">문의가 정상적으로 접수되었습니다.</p>
    <img style='width:100%; max-width:600px;' src="https://i.ibb.co/vVfmDKR/E-mail-Form.jpg" alt="poster">
  </div>
  `;
};
