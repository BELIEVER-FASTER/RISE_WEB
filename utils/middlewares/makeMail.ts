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
