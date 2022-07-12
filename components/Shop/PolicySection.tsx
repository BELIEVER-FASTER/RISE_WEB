import React from 'react';
import { PolicySectionCT } from './styles';

export default function PolicySection(): JSX.Element {
  return (
    <PolicySectionCT>
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-0lax">서비스 제공 기간 </th>
            <th className="tg-0lax" colSpan={2}>
              환불 정책
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-0lax col" rowSpan={6}>
              <div>
                결제일로 부터 1개월 이내 <br />
                라이브커머스 송출 완료
              </div>
            </td>
            <td className="tg-0lax">결제 금액의 100% 환불</td>
            <td className="tg-0lax">담당 PD 및 TF팀 구성 이전</td>
          </tr>
          <tr>
            <td className="tg-0lax">결제 금액의 80% 환불</td>
            <td className="tg-0lax desc">담당 PD 및 TF팀 구성 이후</td>
          </tr>
          <tr>
            <td className="tg-0lax">결제 금액의 60% 환불</td>
            <td className="tg-0lax desc">쇼호스트 섭외 또는 스튜디오 예약 이후</td>
          </tr>
          <tr>
            <td className="tg-0lax">결제 금액의 40% 환불</td>
            <td className="tg-0lax desc">
              라이브커머스 진행 컨셉 및 디자인 소스 제작 이후
            </td>
          </tr>
          <tr>
            <td className="tg-0lax">결제 금액의 20% 환불</td>
            <td className="tg-0lax desc">
              라이브커머스 리허설 진행 또는 실시간 송출 이전
            </td>
          </tr>
          <tr>
            <td className="tg-0lax">환불 불가</td>
            <td className="tg-0lax desc">라이브커머스 실시간 송출 이후</td>
          </tr>
        </tbody>
      </table>
    </PolicySectionCT>
  );
}
